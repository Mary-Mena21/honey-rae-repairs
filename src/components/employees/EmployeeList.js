import { useEffect, useState } from "react";
import { Employee } from "./Employee";
import "./Employees.css";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            /* fetch Ticket */
            const response = await fetch(
                `http://localhost:8088/employees?_expand=user&_embed=employeeTickets`
                //`http://localhost:8088/users?isStaff=true`
                //`http://localhost:8088/employees/?_expand=user`
            );
            const employeeArray = await response.json();
            setEmployees(employeeArray);
        };
        fetchData();
    }, []);
    //[employees]
    return (
        <>
            <h2>Employees List</h2>
            <article className="employees">
                {employees.map((employee) => {
                    return (
                        <Employee
                            key={`employee__${employee.id}`}
                            fullName={employee.user.fullName}
                            email={employee.user.email}
                            specialty={employee.specialty}
                            rate={employee.rate}
                            id={employee.id}
                        />
                    );
                })}
            </article>
        </>
    );
};

//     return (
//         <article className="employees">
//             {employees.map((employee) => {
//                 return <section key={`employee__${employee.id}`} className="employee">
//                     <div>Name: {employee.user.fullName}</div>
//                     <div>Email: {employee.user.email}</div>
//                     <div>Specialty: {employee.specialty}</div>
//                     <div>Rate: {employee.rate}</div>
//                 </section>;
//             })}
//             ;
//         </article>
//     );
// };

/* 
As this component's structure becomes more complex and the functionality of how each employee should be rendered, such as their state transitions, increases, you might want to move this section into an other component.
//to render section in more than one place.
//three children element
//having component to render indivedual details
*/
/* 
these three props are indicated from the parent to be sent down to the employee all three of those are put together onto a single object and then it here a single object is deconstructed and now I can use each one of those values
*/

/* 
//`http://localhost:8088/employees/?_expand=user`
{
"id": 1,
"specialty": "PC Repair",
"rate": 72.47,
"userId": 4,
"user": {
"id": 4,
"fullName": "Helenelizabeth Passfield",
"email": "hpassfield7@netvibes.com",
"isStaff": true
}
*/

/* 
//http://localhost:8088/users?isStaff=true&_embed=employee 
{
"id": 4,
"fullName": "Helenelizabeth Passfield",
"email": "hpassfield7@netvibes.com",
"isStaff": true,
"employee": []
},
*/

/* 
http://localhost:8088/employees?_expand=user&_embed=employeeTickets
{
"id": 1,
"specialty": "PC Repair",
"rate": 72.47,
"userId": 4,
"employeeTickets": 
    [
    {
    "id": 3,
    "employeeId": 1,
    "serviceTicketId": 4
    }
    ],
    "user": 
    {
    "id": 4,
    "fullName": "Helenelizabeth Passfield",
    "email": "hpassfield7@netvibes.com",
    "isStaff": true
    }
}
*/
