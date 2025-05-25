import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";

const Dropdown = ({
  setFilter,
}: {
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "complete" | "incomplete">
  >;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2 transition">
        Filter <ListFilter size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-md shadow-lg p-2">
        <DropdownMenuItem>
          <button
            onClick={() => setFilter("all")}
            className="w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded-md"
          >
            All
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={() => setFilter("complete")}
            className="w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded-md"
          >
            Complete
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={() => setFilter("incomplete")}
            className="w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded-md"
          >
            Incomplete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
