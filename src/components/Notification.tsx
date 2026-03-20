import { BellIcon } from "lucide-react";

interface NotificationProps {
  hasNotification?: boolean;
}

export default function Notification({
  hasNotification = true,
}: NotificationProps) {
  return (
    <div className="relative">
      <button>
        <BellIcon className="size-5" />
      </button>
      {hasNotification && (
        <div className="absolute top-0 right-0 size-2 bg-red-500 rounded-full" />
      )}
    </div>
  );
}
