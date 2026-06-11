interface MaintenanceHistoryModalProps {
  onClose: () => void;
}

export default function MaintenanceHistoryModal({
  onClose,
}: MaintenanceHistoryModalProps) {
  const history = [
    { id: 1, date: '2026-06-01', technician: 'Rafiq Ahmed' },
    { id: 2, date: '2026-05-20', technician: 'Kamal Hossain' },
  ];

  return (
    <div className="p-6 bg-slate-900 rounded-xl">
      <h2 className="text-xl mb-4">Maintenance History</h2>

      {history.map((item) => (
        <div key={item.id} className="p-3 border-b border-slate-700">
          <p>{item.date}</p>
          <p>{item.technician}</p>
        </div>
      ))}

      <button onClick={onClose}>Close</button>
    </div>
  );
}
