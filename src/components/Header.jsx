import React from 'react';
import { Rocket, Wallet, User, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">TaskEarn</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#dashboard" className="hover:text-slate-900">Dashboard</a>
          <a href="#tasks" className="hover:text-slate-900">Tasks</a>
          <a href="#referrals" className="hover:text-slate-900">Referrals</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Wallet className="h-4 w-4" />
            Wallet
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <User className="h-4 w-4" />
            Account
          </button>
        </div>
      </div>
    </header>
  );
}
