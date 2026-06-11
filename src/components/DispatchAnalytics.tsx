export default function DispatchAnalytics() {
  const stats = {
    dispatchedToday: 18,
    completedJobs: 15,
    pendingJobs: 3,
  };

  return (
    <div className="p-4 bg-slate-800 rounded-lg">
      <h2 className="text-lg mb-4">Dispatch Analytics</h2>

      <ul>
        <li>Dispatched Today: {stats.dispatchedToday}</li>
        <li>Completed Jobs: {stats.completedJobs}</li>
        <li>Pending Jobs: {stats.pendingJobs}</li>
      </ul>
    </div>
  );
}
