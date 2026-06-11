export default function TechnicianStatusPanel() {
  const technicians = [
    { name: 'Rafiq', status: 'Available' },
    { name: 'Kamal', status: 'Busy' },
    { name: 'Tarek', status: 'Offline' },
  ];

  return (
    <div className="bg-slate-900 p-4 rounded-xl">
      <h2 className="mb-4">Technician Status</h2>

      {technicians.map((tech, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b border-slate-700"
        >
          <span>{tech.name}</span>
          <span>{tech.status}</span>
        </div>
      ))}
    </div>
  );
}
