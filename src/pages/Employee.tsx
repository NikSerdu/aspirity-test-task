import { FC } from "react";
import EmployeeCard from "../components/lk/EmployeeCard";

const EmployeePage: FC = () => {
  return (
    <div className="flex flex-col  gap-4">
      <EmployeeCard />
    </div>
  );
};

export default EmployeePage;
