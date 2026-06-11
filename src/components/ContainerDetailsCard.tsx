interface ContainerDetailsCardProps {
  containerId: string;
  location: string;
}

export default function ContainerDetailsCard({
  containerId,
  location,
}: ContainerDetailsCardProps) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h3 className="text-lg">Container Details</h3>

      <div className="mt-3">
        <p>ID: {containerId}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}
