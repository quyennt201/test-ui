import { EllipsisVerticalIcon } from "lucide-react";
import ButtonDropdown from "./common/ButtonDropdown";

export default function MoreButton() {
  return (
    <ButtonDropdown
      align="right"
      trigger={<EllipsisVerticalIcon className="size-5" />}
    >
      <button className="w-full py-2 px-4 rounded-md hover:bg-white/10 text-sm text-left">
        Settings
      </button>
      <button className="w-full py-2 px-4 rounded-md hover:bg-white/10 text-sm text-left">
        Logout
      </button>
    </ButtonDropdown>
  );
}