import "./App.css";
import EmployeeCard, { Employee } from "./components/EmployeeCard";
const App = () => {
  const employees: Employee[] = [
    {
      name: "Yllart Ferizi",
      title: "Software Developer",
    },
    {
      name: "Cristiano Ronaldo",
      title: "Football player",
      website: "https://cristianoronaldo.com",
    },
    {
      name: "Hashim Thaqi",
      title: "Boss",
    },
  ];
  return (
    <main>
      {employees.map((employee) => (
        <EmployeeCard key={employee.name} item={employee}/>
      ))}
    </main>
  );
};

export default App;
