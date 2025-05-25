import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Todo {
  task: string;
  date: string;
  id: number;
  isCompleted: boolean;
}

const SingleItem = ({
  task,
  date,
  id,
}: {
  task: string;
  date: string;
  id: number;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const existing: Todo[] = JSON.parse(localStorage.getItem("todo") || "[]");
    const updated = existing.map((t) =>
      t.id === id ? { ...t, isCompleted: isChecked } : t
    );
    localStorage.setItem("todo", JSON.stringify(updated));
  }, [isChecked, id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-5 rounded-2xl bg-slate-100 shadow-sm border border-slate-200 transition-all duration-300 font-poppins">
        <h4
          className={`text-lg font-semibold ${
            isChecked ? "line-through text-gray-400" : "text-slate-800"
          }`}
        >
          {task || "Untitled Task"}
        </h4>

        <p className="text-sm text-gray-500 mb-3">
          Due Date: {new Date(date).toLocaleDateString() || "No due date"}
        </p>

        <label className="flex items-center gap-2 text-sm text-sky-600 font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            className="accent-sky-500 w-4 h-4"
          />
          {isChecked ? "Completed" : "Mark as complete"}
        </label>
      </Card>
    </motion.div>
  );
};

export default SingleItem;
