import React from "react";
import './EmployeeCard.css'
export type Employee = {
  name: string;
  title: string;
  website?: string;
};
interface EmployeeCardProps {
  item: Employee;
}
const EmployeeCard = ({ item }: EmployeeCardProps) => {
  return (
    <section className="employee">
      <h2 className="empoyee_name"> {item.name}</h2>
      <h3 className="empoyee_title">{item.title}</h3>
      {item.website && (
        <h4 className="empoyee_link"><a href={item.website}>{item.website}</a></h4>
      )}
    </section>
  );
};

export default EmployeeCard;
