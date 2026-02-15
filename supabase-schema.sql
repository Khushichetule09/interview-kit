-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  role_tags TEXT[] NOT NULL DEFAULT '{}',
  subject_tags TEXT[] NOT NULL DEFAULT '{}',
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'drafted',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on status for faster queries
CREATE INDEX IF NOT EXISTS idx_questions_status ON questions(status);

-- Create index on email for potential lookups
CREATE INDEX IF NOT EXISTS idx_questions_email ON questions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_questions_created_at ON questions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public insert" ON questions;
DROP POLICY IF EXISTS "Allow public read approved" ON questions;
DROP POLICY IF EXISTS "Enable insert for all users" ON questions;
DROP POLICY IF EXISTS "Enable read for approved questions" ON questions;
DROP POLICY IF EXISTS "Enable update for all users" ON questions;
DROP POLICY IF EXISTS "Enable read for all users" ON questions;

-- Policy: Allow anyone to insert questions (for submissions)
CREATE POLICY "Enable insert for all users" ON questions
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow anyone to update questions (for admin operations)
CREATE POLICY "Enable update for all users" ON questions
  FOR UPDATE
  WITH CHECK (true);

-- Policy: Allow anyone to read all questions (for admin dashboard)
CREATE POLICY "Enable read for all users" ON questions
  FOR SELECT
  USING (true);
