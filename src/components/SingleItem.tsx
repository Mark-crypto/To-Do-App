import { Card } from "@/components/ui/card";

const SingleItem = ({ task, date }: { task: string; date: string }) => {
  return (
    <>
      <Card>
        <h4>{task || ""}</h4>
        <p>{date || ""}</p>
        <input type="checkbox" name="" id="" />
      </Card>
    </>
  );
};
export default SingleItem;
