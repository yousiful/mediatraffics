import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Zap, Trophy, RotateCcw, Sparkles, ArrowUpRight, Coins, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';
import HolidayParticles from './HolidayParticles';
import HolidayBanner from './HolidayBanner';
import { getCurrentHoliday } from '../utils/holidays';

interface PaidAdsGameProps {
  onBack?: () => void;
}

interface GameSession {
  id: string;
  player_name: string;
  total_invested: number;
  total_earned: number;
  current_balance: number;
  sessions_count: number;
  best_roi: number;
}

interface Transaction {
  investment: number;
  return_amount: number;
  roi_percentage: number;
  ad_type: string;
}

interface LeaderboardEntry {
  player_name: string;
  total_balance: number;
  total_roi: number;
}

const AD_TYPES = [
  { name: 'Facebook Ads', color: '#1877F2', minROI: 150, maxROI: 350 },
  { name: 'Google Ads', color: '#4285F4', minROI: 180, maxROI: 400 },
  { name: 'Instagram Ads', color: '#E4405F', minROI: 160, maxROI: 380 },
  { name: 'LinkedIn Ads', color: '#0A66C2', minROI: 200, maxROI: 450 },
  { name: 'TikTok Ads', color: '#000000', minROI: 140, maxROI: 500 }
];

export default function PaidAdsGame({ onBack }: PaidAdsGameProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [session, setSession] = useState<GameSession | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastTransaction, setLastTransaction] = useState<Transaction | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [holidayTheme, setHolidayTheme] = useState(getCurrentHoliday());

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    const { data } = await supabase
      .from('leaderboard')
      .select('player_name, total_balance, total_roi')
      .order('total_balance', { ascending: false })
      .limit(10);

    if (data) {
      setLeaderboard(data);
    }
  };

  const startGame = async () => {
    if (!playerName.trim()) return;

    const { data, error } = await supabase
      .from('game_sessions')
      .insert({
        player_name: playerName,
        current_balance: 100,
        total_invested: 0,
        total_earned: 0,
        sessions_count: 0,
        best_roi: 0
      })
      .select()
      .single();

    if (data && !error) {
      setSession(data);
      setGameStarted(true);
    }
  };

  const placeAd = async () => {
    if (!session || selectedAmount > session.current_balance || isPlaying) return;

    setIsPlaying(true);
    setShowResult(false);

    const randomAdType = AD_TYPES[Math.floor(Math.random() * AD_TYPES.length)];
    const roiPercentage = Math.floor(Math.random() * (randomAdType.maxROI - randomAdType.minROI + 1)) + randomAdType.minROI;
    const returnAmount = (selectedAmount * roiPercentage) / 100;

    await new Promise(resolve => setTimeout(resolve, 2000));

    const newBalance = session.current_balance - selectedAmount + returnAmount;
    const newTotalInvested = session.total_invested + selectedAmount;
    const newTotalEarned = session.total_earned + returnAmount;
    const newBestROI = Math.max(session.best_roi, roiPercentage);

    const transaction: Transaction = {
      investment: selectedAmount,
      return_amount: returnAmount,
      roi_percentage: roiPercentage,
      ad_type: randomAdType.name
    };

    await supabase.from('game_transactions').insert({
      session_id: session.id,
      ...transaction
    });

    await supabase
      .from('game_sessions')
      .update({
        current_balance: newBalance,
        total_invested: newTotalInvested,
        total_earned: newTotalEarned,
        sessions_count: session.sessions_count + 1,
        best_roi: newBestROI,
        updated_at: new Date().toISOString()
      })
      .eq('id', session.id);

    setSession({
      ...session,
      current_balance: newBalance,
      total_invested: newTotalInvested,
      total_earned: newTotalEarned,
      sessions_count: session.sessions_count + 1,
      best_roi: newBestROI
    });

    setLastTransaction(transaction);
    setRecentTransactions(prev => [transaction, ...prev.slice(0, 4)]);
    setShowResult(true);
    setIsPlaying(false);
  };

  const resetGame = async () => {
    if (!session) return;

    if (session.current_balance > 100) {
      const totalROI = ((session.current_balance - 100) / 100) * 100;
      await supabase.from('leaderboard').insert({
        session_id: session.id,
        player_name: session.player_name,
        total_balance: session.current_balance,
        total_roi: totalROI
      });
      await loadLeaderboard();
    }

    setGameStarted(false);
    setSession(null);
    setPlayerName('');
    setLastTransaction(null);
    setShowResult(false);
    setRecentTransactions([]);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6 relative">
        {holidayTheme && (
          <>
            <HolidayBanner theme={holidayTheme} />
            <HolidayParticles theme={holidayTheme} />
          </>
        )}
        <div className="max-w-6xl mx-auto relative z-10">
          {onBack && (
            <button
              onClick={onBack}
              className="mb-6 flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          )}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl mb-6">
              <Coins className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Paid Ads ATM
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the thrill of ROI! Invest in ads and watch your money multiply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Start Your Journey
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors"
                    onKeyPress={(e) => e.key === 'Enter' && startGame()}
                  />
                </div>
                <button
                  onClick={startGame}
                  disabled={!playerName.trim()}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <DollarSign className="w-5 h-5" />
                  Start with $100
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-900/50 rounded-xl">
                <h3 className="font-bold mb-2 text-green-400">How to Play:</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Start with $100 virtual dollars</li>
                  <li>• Choose investment: $1, $2, $3, $4, or $5</li>
                  <li>• Place ads and get 150% - 500% ROI</li>
                  <li>• Keep playing to build your balance</li>
                  <li>• Top players make the leaderboard!</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                Top Players
              </h2>
              <div className="space-y-3">
                {leaderboard.length > 0 ? (
                  leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          index === 0 ? 'bg-yellow-500 text-black' :
                          index === 1 ? 'bg-gray-400 text-black' :
                          index === 2 ? 'bg-orange-600 text-white' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-semibold">{entry.player_name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-400">
                          ${entry.total_balance.toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-400">
                          +{entry.total_roi.toFixed(0)}% ROI
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    Be the first to make the leaderboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6 relative">
      {holidayTheme && (
        <>
          <HolidayBanner theme={holidayTheme} />
          <HolidayParticles theme={holidayTheme} />
        </>
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        )}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black mb-2">
            Welcome, <span className="text-green-400">{session?.player_name}</span>!
          </h2>
          <p className="text-gray-400">Place your ads and watch your money grow</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="text-gray-400">Current Balance</span>
            </div>
            <div className="text-4xl font-black text-green-400">
              ${session?.current_balance.toFixed(2)}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-gray-400">Total Earned</span>
            </div>
            <div className="text-4xl font-black text-blue-400">
              ${session?.total_earned.toFixed(2)}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-purple-400" />
              <span className="text-gray-400">Best ROI</span>
            </div>
            <div className="text-4xl font-black text-purple-400">
              {session?.best_roi.toFixed(0)}%
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Coins className="w-6 h-6 text-green-400" />
              ATM Machine
            </h3>

            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-3">Select Investment Amount</label>
              <div className="grid grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    disabled={amount > (session?.current_balance || 0)}
                    className={`p-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-xl shadow-green-500/50 scale-105'
                        : 'bg-gray-700 hover:bg-gray-600'
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={placeAd}
              disabled={isPlaying || selectedAmount > (session?.current_balance || 0)}
              className="w-full py-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden"
            >
              {isPlaying ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  Processing Ad Campaign...
                </>
              ) : (
                <>
                  <ArrowUpRight className="w-6 h-6" />
                  Place ${selectedAmount} in Ads
                </>
              )}
            </button>

            {showResult && lastTransaction && (
              <div className="mt-6 p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-xl animate-slideUp">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  <span className="font-bold text-green-400">Success!</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform:</span>
                    <span className="font-semibold">{lastTransaction.ad_type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Invested:</span>
                    <span className="font-semibold">${lastTransaction.investment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Returned:</span>
                    <span className="font-semibold text-green-400">
                      ${lastTransaction.return_amount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-green-500/30">
                    <span className="text-gray-400">ROI:</span>
                    <span className="font-bold text-green-400 text-lg">
                      {lastTransaction.roi_percentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Profit:</span>
                    <span className="font-bold text-green-400">
                      +${(lastTransaction.return_amount - lastTransaction.investment).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button
                onClick={resetGame}
                className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                New Game
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Recent Transactions
              </h3>
              <div className="space-y-3">
                {recentTransactions.length > 0 ? (
                  recentTransactions.map((tx, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-900/50 rounded-xl flex justify-between items-center"
                    >
                      <div>
                        <div className="font-semibold text-sm">{tx.ad_type}</div>
                        <div className="text-xs text-gray-400">
                          ${tx.investment} → ${tx.return_amount.toFixed(2)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-400">
                          {tx.roi_percentage}%
                        </div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-6">
                    No transactions yet. Place your first ad!
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Game Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Invested:</span>
                  <span className="font-semibold">${session?.total_invested.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Sessions:</span>
                  <span className="font-semibold">{session?.sessions_count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Net Profit:</span>
                  <span className="font-semibold text-green-400">
                    ${((session?.current_balance || 0) - 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Overall ROI:</span>
                  <span className="font-semibold text-cyan-400">
                    {(((session?.current_balance || 0) - 100) / 100 * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
