-- Supabase Schema untuk Smart Absensi
-- Copy ke Supabase SQL Editor

-- Create table untuk absensi logs
CREATE TABLE IF NOT EXISTS absensi_logs (
    id BIGINT PRIMARY KEY,
    student_id TEXT NOT NULL,
    name TEXT NOT NULL,
    kelas TEXT,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    type TEXT NOT NULL, -- 'Masuk', 'Terlambat', 'Pulang'
    method TEXT DEFAULT 'Scan', -- 'Scan', 'Manual'
    app_id TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index untuk performa
CREATE INDEX IF NOT EXISTS idx_absensi_logs_date ON absensi_logs(date);
CREATE INDEX IF NOT EXISTS idx_absensi_logs_student_id ON absensi_logs(student_id);
CREATE INDEX IF NOT EXISTS idx_absensi_logs_app_id ON absensi_logs(app_id);
CREATE INDEX IF NOT EXISTS idx_absensi_logs_created_at ON absensi_logs(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE absensi_logs ENABLE ROW LEVEL SECURITY;

-- Create policy untuk memungkinkan akses berdasarkan app_id
CREATE POLICY "Users can access logs by app_id" ON absensi_logs
    FOR ALL USING (app_id = current_setting('app.headers.app_id', true));

-- Function untuk realtime subscription
CREATE OR REPLACE FUNCTION public.handle_new_log()
RETURNS TRIGGER AS $$
BEGIN
    -- Log untuk debugging
    RAISE LOG 'New log inserted: %', NEW;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger untuk realtime
CREATE TRIGGER on_new_log
    AFTER INSERT ON absensi_logs
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_log();

-- Optional: Table untuk data siswa (jika mau disimpan di Supabase juga)
CREATE TABLE IF NOT EXISTS students (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    kelas TEXT,
    parent TEXT DEFAULT 'Orang Tua',
    phone TEXT,
    app_id TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS untuk students table
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Policy untuk students table
CREATE POLICY "Users can manage students by app_id" ON students
    FOR ALL USING (app_id = current_setting('app.headers.app_id', true));

-- Index untuk students
CREATE INDEX IF NOT EXISTS idx_students_app_id ON students(app_id);
CREATE INDEX IF NOT EXISTS idx_students_kelas ON students(kelas);

-- Update trigger untuk students
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_students_updated_at
    BEFORE UPDATE ON students
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
