import React from 'react';
import { ExternalLink, UploadCloud, Check } from 'lucide-react';

function TaskCard({ task, onSubmitProof }) {
  const [proofLink, setProofLink] = React.useState('');
  const [proofFile, setProofFile] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProof(task.id, { proofLink, proofFile });
    setSubmitted(true);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-slate-900">{task.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{task.description}</p>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <a href={task.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-indigo-600 hover:underline">
              Open Task <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-700">Reward: ${task.reward.toFixed(2)}</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">{task.category}</span>
          </div>
        </div>
        <span className="rounded-lg bg-slate-50 px-2 py-1 text-xs text-slate-600">{task.type}</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          type="url"
          placeholder="Paste proof link (screenshot URL, profile link, etc.)"
          value={proofLink}
          onChange={(e) => setProofLink(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500"
        />
        <label className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
          <div className="flex items-center gap-2">
            <UploadCloud className="h-4 w-4" />
            <span>{proofFile ? proofFile.name : 'Upload proof image (optional)'}</span>
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={(e) => setProofFile(e.target.files?.[0] || null)} />
        </label>
        <button
          type="submit"
          disabled={submitted}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
        >
          {submitted ? (<><Check className="h-4 w-4" /> Submitted</>) : 'Submit Proof'}
        </button>
      </form>
    </div>
  );
}

export default function TaskList({ tasks, onSubmitProof }) {
  return (
    <section id="tasks" className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Available Tasks</h2>
        <span className="text-sm text-slate-600">{tasks.length} tasks today</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onSubmitProof={onSubmitProof} />
        ))}
      </div>
    </section>
  );
}
