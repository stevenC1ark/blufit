import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

export const supabase = createClient(
  "https://ocharqlljdodwlkdhcrt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jaGFycWxsamRvZHdsa2RoY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMjAxMDcsImV4cCI6MjAxODc5NjEwN30.MH4Z-67Lo9zaUaEUGSAUKD6tiek2VkD-0HblM-E_A4A"
);
