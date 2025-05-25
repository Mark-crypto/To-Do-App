import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DatePicker } from "./DatePicker";
import { SquarePlus } from "lucide-react";

const AddBtn = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <SquarePlus /> Add
        </DialogTrigger>
        <DialogContent>
          <form action="">
            <label htmlFor="">Task</label>
            <input type="text" name="" id="" />
            <DatePicker />
            <button type="submit">Submit</button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddBtn;
