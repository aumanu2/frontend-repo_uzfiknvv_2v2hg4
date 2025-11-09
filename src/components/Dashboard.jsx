import React from 'react';
import { Coins, Trophy, CheckCircle2, Gift } from 'lucide-react';

export default function Dashboard({ stats }) {
  const { balance, totalEarnings, tasksCompleted, dailyBonusAvailable } = stats;
  return (
    <section id="dashboard" className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-600">Complete tasks daily to grow your earnings.</p>
        </div>
        {dailyBonusAvailable && (
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            <Gift className="h-4 w-4" /> Claim Daily Bonus
          </button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Wallet Balance</span>
            <Coins className="h-5 w-5 text-amber-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold">${balance.toFixed(2)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Total Earnings</span>
            <Trophy className="h-5 w-5 text-indigo-600" />
          </div>
          <p className="mt-2 text-2xl font-semibold">${totalEarnings.toFixed(2)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Tasks Completed</span>
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          </div>
          <p className="mt-2 text-2xl font-semibold">{tasksCompleted}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Referral Earnings</span>
            <Trophy className="h-5 w-5 text-pink-600" />
          </div>
          <p className="mt-2 text-2xl font-semibold">${(totalEarnings * 0.2).toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}
