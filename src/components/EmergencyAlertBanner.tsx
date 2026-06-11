interface EmergencyAlertBannerProps {
  message: string;
}

export default function EmergencyAlertBanner({
  message,
}: EmergencyAlertBannerProps) {
  return (
    <div className="bg-red-500 text-white p-3 rounded-lg">
      <strong>Emergency:</strong> {message}
    </div>
  );
}
