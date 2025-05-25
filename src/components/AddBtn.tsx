import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DatePicker } from "./DatePicker";
import { SquarePlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
type FormData = {
  task: string;
};
const AddBtn = () => {
  const [date, setDate] = useState<Date>();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<FormData>();

  const submitForm = (data: FormData) => {
    const now: number = Date.now();
    const response = { task: data.task, id: now, date: date };
    const existing = JSON.parse(localStorage.getItem("todo") || "[]");
    localStorage.setItem("todo", JSON.stringify([...existing, response]));
    reset();
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <SquarePlus /> Add
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="">Task</label>
            <input type="text" {...register("task")} />
            {errors && errors.task ? (
              <p className="text-red-700">{errors.task.message}</p>
            ) : (
              ""
            )}
            <DatePicker date={date} setDate={setDate} />
            <button type="submit">Submit</button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddBtn;
