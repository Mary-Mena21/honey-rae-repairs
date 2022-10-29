import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//console.log(useParams);
export const EmployeeDetails = () => {
    const { employeeId_M } = useParams();
    //console.log(employeeId_M);
    const [employee, updateEmployee] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/employees?_expand=user&_embed=employeeTickets&id=${employeeId_M}`
            );
                const singleEmployee = await response.json();
                //console.log(singleEmployee);
            updateEmployee(singleEmployee[0]);
        };
        fetchData();
    }, []);
        
        
        
    return (
        <>
            <section className="employee">
                <header className="employee__header">{employee?.user?.fullName}</header>
                <div>Email: {employee?.user?.email}</div>
                <div>Specialty: {employee?.specialty}</div>
                <div>Rate: {employee?.rate}</div>
                <footer className="employee__footer">
                    Currently Working on
                    {employee?.employeeTickets?.length}
                </footer>
            </section>
        </>
    );
};

//https://watch.screencastify.com/v/XH5sKQui4SR2xSN8rlmt
//15:25

/* 
we started with a list of employees that only shows their name and email and I wanted a way to show all of the details when you click on the user name so I changed these name parts of this component into a [React Router Link] which is going to Route the URL in the browser to employee / some number. 
What do I want to be displayed when it is employees / some number and that's what employees is for so when the route is that display the EmployeeDetails then in EmployeeDetails use the Params hook to grab that number out of the URL then if you need to go get the data for the resource that you're trying to look at and then just update your JSX to render all of the properties that are on that object
*/