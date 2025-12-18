import { createClient } from '@supabase/supabase-js';
import { fetch } from 'node-fetch';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  try {
    // Fetch from external air quality API
    const response = await fetch('https://iq.luchtmeetnet.nl/open_api/stations?page=1');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stations' });
  }
}
