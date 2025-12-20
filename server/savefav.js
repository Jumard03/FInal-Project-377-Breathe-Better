const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
  try {
    const { station_id, station_name } = req.body || {};

    if (!station_id || !station_name) {
      return res.status(400).json({ error: "station_id and station_name are required" });
    }

    const { data, error } = await supabase
      .from("favorites")
      .insert([{ station_id, station_name }])
      .select();

    if (error) throw error;

    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

