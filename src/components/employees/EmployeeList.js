import { useEffect, useState } from "react";
import "./Employees.css";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/employees/?_expand=user`
                //`http://localhost:8088/users?isStaff=true`
            );
            const employeeArray = await response.json();
            setEmployees(employeeArray);
        };
        fetchData();
    }, [employees]);

    return (
        <article className="employees">
            {employees.map((employee) => {
                return (
                    <section
                        key={`employee__${employee.id}`}
                        className="employee"
                    >
                        <div>Name: {employee.user.fullName}</div>
                        <div>Email: {employee.user.email}</div>
                        <div>Specialty: {employee.specialty}</div>
                        <div>Rate: {employee.rate}</div>
                    </section>
                );
            })}
        </article>
    );
};
