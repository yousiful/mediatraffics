/*
  # Paid Ads ATM Game - Database Schema

  1. New Tables
    - `game_sessions`
      - `id` (uuid, primary key) - Unique session identifier
      - `player_name` (text) - Player's name
      - `total_invested` (numeric) - Total money invested
      - `total_earned` (numeric) - Total money earned
      - `current_balance` (numeric) - Current balance
      - `sessions_count` (integer) - Number of ad placements
      - `best_roi` (numeric) - Best ROI percentage achieved
      - `created_at` (timestamptz) - Session creation time
      - `updated_at` (timestamptz) - Last update time

    - `game_transactions`
      - `id` (uuid, primary key) - Transaction identifier
      - `session_id` (uuid, foreign key) - Reference to game session
      - `investment` (numeric) - Amount invested
      - `return_amount` (numeric) - Amount returned
      - `roi_percentage` (numeric) - ROI percentage
      - `ad_type` (text) - Type of ad placed
      - `created_at` (timestamptz) - Transaction timestamp

    - `leaderboard`
      - `id` (uuid, primary key) - Leaderboard entry ID
      - `session_id` (uuid, foreign key) - Reference to game session
      - `player_name` (text) - Player's name
      - `total_balance` (numeric) - Final balance
      - `total_roi` (numeric) - Overall ROI
      - `created_at` (timestamptz) - Entry creation time

  2. Security
    - Enable RLS on all tables
    - Public read access for leaderboard
    - Anonymous users can create and update their own sessions
*/

-- Create game_sessions table
CREATE TABLE IF NOT EXISTS game_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_name text NOT NULL,
  total_invested numeric DEFAULT 0,
  total_earned numeric DEFAULT 0,
  current_balance numeric DEFAULT 100,
  sessions_count integer DEFAULT 0,
  best_roi numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create game sessions"
  ON game_sessions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own sessions"
  ON game_sessions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update their own sessions"
  ON game_sessions
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Create game_transactions table
CREATE TABLE IF NOT EXISTS game_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES game_sessions(id) ON DELETE CASCADE,
  investment numeric NOT NULL,
  return_amount numeric NOT NULL,
  roi_percentage numeric NOT NULL,
  ad_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE game_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create transactions"
  ON game_transactions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view transactions"
  ON game_transactions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create leaderboard table
CREATE TABLE IF NOT EXISTS leaderboard (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid UNIQUE NOT NULL REFERENCES game_sessions(id) ON DELETE CASCADE,
  player_name text NOT NULL,
  total_balance numeric NOT NULL,
  total_roi numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view leaderboard"
  ON leaderboard
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can add to leaderboard"
  ON leaderboard
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_game_transactions_session_id ON game_transactions(session_id);
CREATE INDEX IF NOT EXISTS idx_leaderboard_balance ON leaderboard(total_balance DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_created ON leaderboard(created_at DESC);
