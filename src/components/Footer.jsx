import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-600">
        <div className="mb-2">© {new Date().getFullYear()} TaskEarn. All rights reserved.</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Support</a>
        </div>
      </div>
    </footer>
  );
}
