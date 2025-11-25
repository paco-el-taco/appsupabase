// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://distzmuwqbojdpzkzpwo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpc3R6bXV3cWJvamRwemt6cHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjMwODcsImV4cCI6MjA3OTU5OTA4N30.ErItuki3UHjARmQHKxOQ04tlOrtb1WEhSsdYE64l8fQ';
export const supabase = createClient(supabaseUrl, supabaseKey);