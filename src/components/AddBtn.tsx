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
    const response = {
      task: data.task,
      id: now,
      date: date,
      isCompleted: false,
    };
    const existing = JSON.parse(localStorage.getItem("todo") || "[]");
    localStorage.setItem("todo", JSON.stringify([...existing, response]));
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition">
        <SquarePlus size={20} />
        Add
      </DialogTrigger>
      <DialogContent className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-[Poppins]">
          Add New Task
        </h2>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <div>
            <label
              htmlFor="task"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task
            </label>
            <p className="text-sm text-gray-500">Max 50 characters</p>
            <input
              type="text"
              maxLength={50}
              {...register("task", { required: "Task is required" })}
              placeholder="Enter your task..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.task && (
              <p className="text-sm text-red-600 mt-1">{errors.task.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <DatePicker date={date} setDate={setDate} />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBtn;
