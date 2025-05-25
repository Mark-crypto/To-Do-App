import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";

const Dropdown = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          Filter <ListFilter />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <a href="">All</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href=""> Complete</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="">Incomplete</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default Dropdown;
