import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://cwbjdyzzukjuaqmhqmuh.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YmpkeXp6dWtqdWFxbWhxbXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NDY1NDAsImV4cCI6MjA2NTQyMjU0MH0.bUcQH0lY6yDVfZkO6w831g1nwbXyekx7fp-CZtGoswU"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase
        .from("video")
        .select("*")
    }
  }
}