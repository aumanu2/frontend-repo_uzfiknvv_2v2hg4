import React from 'react';
import { Share2, Copy, Users } from 'lucide-react';

export default function ReferralWidget({ referral }) {
  const inputRef = React.useRef(null);
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      if (inputRef.current) {
        inputRef.current.select();
        await navigator.clipboard.writeText(inputRef.current.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (e) {}
  };

  return (
    <section id="referrals" className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Share2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Invite friends, earn more</h3>
              <p className="text-sm text-slate-600">Share your unique link and earn a commission from their completed tasks.</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-sm text-slate-600 md:flex">
            <Users className="h-4 w-4" />
            <span>{referral.count} referred users</span>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            ref={inputRef}
            readOnly
            value={referral.link}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500"
          />
          <button onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <Copy className="h-4 w-4" /> {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </section>
  );
}
