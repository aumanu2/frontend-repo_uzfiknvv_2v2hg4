import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskList from './components/TaskList';
import ReferralWidget from './components/ReferralWidget';
import Footer from './components/Footer';

function useMockData() {
  const [stats, setStats] = React.useState({ balance: 12.4, totalEarnings: 85.75, tasksCompleted: 142, dailyBonusAvailable: true });
  const [tasks, setTasks] = React.useState([
    { id: 1, title: 'Watch a 2-minute product video', description: 'Open the video, watch fully, and like it.', link: '#', reward: 0.25, category: 'Video', type: 'Daily' },
    { id: 2, title: 'Install and open the app', description: 'Install the app and complete onboarding.', link: '#', reward: 0.9, category: 'App Install', type: 'One-time' },
    { id: 3, title: 'Visit the sponsor website', description: 'Browse the page for at least 30 seconds.', link: '#', reward: 0.15, category: 'Visit', type: 'Daily' },
    { id: 4, title: 'Fill a short survey (2-3 mins)', description: 'Answer honestly. One submission per user.', link: '#', reward: 0.6, category: 'Survey', type: 'Survey' },
  ]);
  const [referral, setReferral] = React.useState({ link: `${window.location.origin}/signup?ref=ABC123`, count: 27 });

  const handleSubmitProof = (taskId, payload) => {
    // In a real app, upload image and send to backend. Here we just mock state changes.
    setStats((s) => ({ ...s, balance: s.balance + tasks.find(t => t.id === taskId).reward, totalEarnings: s.totalEarnings + tasks.find(t => t.id === taskId).reward }));
    setTasks((ts) => ts.filter(t => t.id !== taskId));
  };

  return { stats, tasks, referral, handleSubmitProof };
}

export default function App() {
  const { stats, tasks, referral, handleSubmitProof } = useMockData();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Dashboard stats={stats} />
        <TaskList tasks={tasks} onSubmitProof={handleSubmitProof} />
        <ReferralWidget referral={referral} />
      </main>
      <Footer />
    </div>
  );
}
