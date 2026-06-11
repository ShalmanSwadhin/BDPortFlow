export default function QuickActionsPanel() {
  return (
    <div className="bg-slate-900 p-4 rounded-xl">
      <h2 className="mb-4">Quick Actions</h2>

      <div className="flex gap-2">
        <button className="px-4 py-2 bg-orange-500 rounded">
          Dispatch
        </button>

        <button className="px-4 py-2 bg-blue-500 rounded">
          View Report
        </button>

        <button className="px-4 py-2 bg-emerald-500 rounded">
          Add Technician
        </button>
      </div>
    </div>
  );
}
