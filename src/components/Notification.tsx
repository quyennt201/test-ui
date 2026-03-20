import { BellIcon } from "lucide-react";
import ButtonDropdown from "./common/ButtonDropdown";

export default function Notification({ hasNotification = true }) {
  return (
    <ButtonDropdown
      trigger={
        <div className="relative">
          <BellIcon className="size-5 hover:scale-110 transition-transform duration-100" />
          {hasNotification && (
            <div className="absolute top-0 right-0 size-2 bg-red-500 rounded-full" />
          )}
        </div>
      }
    >
      <div className="h-40 flex items-center justify-center">
        <p className="text-sm">You don't have any notification</p>
      </div>
    </ButtonDropdown>
  );
}