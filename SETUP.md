# Supabase & AI Integration Setup Guide

This guide explains how to set up the Supabase database and AI features for the Interview Kit application.

## Prerequisites

1. A Supabase account ([supabase.com](https://supabase.com))
2. A Groq API key ([console.groq.com](https://console.groq.com))

## Setup Steps

### 1. Supabase Database Setup

1. Create a new project in Supabase
2. Go to the SQL Editor in your Supabase dashboard
3. Copy the contents of `supabase-schema.sql` and run it in the SQL Editor
4. This will create:
   - The `questions` table with proper schema
   - Indexes for better query performance
   - Row Level Security (RLS) policies

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Groq AI
GROQ_API_KEY=your_groq_api_key

# Admin Password
NEXT_PUBLIC_ADMIN_PASSWORD=your_admin_password
```

**How to get these values:**

- **Supabase URL & Anon Key**:
  - Go to Project Settings > API in your Supabase dashboard
  - Copy the "Project URL" and "anon/public" key

- **Groq API Key**:
  - Sign up at [console.groq.com](https://console.groq.com)
  - Create an API key in your account settings

- **Admin Password**:
  - Choose a secure password for accessing the admin dashboard

### 3. Install Dependencies

```bash
bun install
```

### 4. Run the Application

```bash
bun dev
```

## Features

### For Users

1. **Add Questions**: Submit interview questions with AI assistance
2. **Email Verification**: Valid personal/educational emails only (no disposable emails)
3. **AI Answer Generation**: Click "Ask AI" to generate short, interview-focused answers
4. **AI Enhancement**: Click "Enhance" to improve your written answers

### For Admins

1. **Access**: Navigate to `/admin` and enter your admin password
2. **Review Questions**: See all pending questions sorted by submission date
3. **Approve/Reject**: Take action on submitted questions
4. **Real-time Updates**: Questions are immediately reflected in the system

## Database Schema

The `questions` table includes:

- `id`: Unique identifier (generated with nanoid)
- `question`: The interview question text
- `answer`: The answer text
- `difficulty`: Easy, Medium, or Hard
- `role_tags`: Array of role tags (e.g., Frontend, Backend)
- `subject_tags`: Array of subject/language tags (e.g., React, JavaScript)
- `email`: Submitter's email (required for verification)
- `status`: drafted, approved, or rejected
- `created_at`: Timestamp of submission
- `updated_at`: Timestamp of last update

## Security Notes

1. **Row Level Security (RLS)** is enabled on the questions table
2. Public users can:
   - Insert new questions (submissions)
   - Read approved questions only
3. For admin operations (approve/reject), the API uses the anon key but you should consider implementing proper authentication for production
4. Email verification prevents spam submissions using disposable emails

## API Endpoints

- `POST /api/answer`: Generate AI answers for questions
- `POST /api/enhance`: Enhance/improve written answers
- `POST /api/questions`: Submit new questions
- `GET /api/questions?status=drafted`: Fetch questions by status
- `POST /api/questions/admin`: Approve or reject questions

## Troubleshooting

1. **Database connection errors**: Verify your Supabase URL and anon key
2. **AI not working**: Check your Groq API key and rate limits
3. **Email verification failing**: Ensure you're using valid personal/educational emails
4. **Admin access denied**: Verify your admin password in the environment variables
