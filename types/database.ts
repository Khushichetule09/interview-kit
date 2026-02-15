export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      questions: {
        Row: {
          id: string
          question: string
          answer: string
          difficulty: string
          role_tags: string[]
          subject_tags: string[]
          email: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          difficulty: string
          role_tags: string[]
          subject_tags: string[]
          email: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          difficulty?: string
          role_tags?: string[]
          subject_tags?: string[]
          email?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
