import { useEffect, useState } from "react";
import { Customer } from "./Customer";
import "./Customers.css";

export const CustomersList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`
            http://localhost:8088/customers?_expand=user
            `);
            const customerArray = await response.json();
                setCustomers(customerArray);
                //console.log(customerArray);
        };
        fetchData();
    }, []);

    return (
        <>
            <h2>Customers List</h2>
            <article className="customers">
                {customers.map((customer) => {
                    return (
                        <Customer
                                    key={`customer__${customer.id}`}
                                    fullName={customer.user.fullName}
                                    email={customer.user.email}
                                    phoneNumber={customer.phoneNumber}
                                    address={customer.address}
                                    id={customer.id}
                                    
                        />
                    );
                })}
            </article>
        </>
    );
};

// <section
// className="customer"
// key={`customer__${customer.id}`}
// >
// <div>{customer.address}</div>
// <div>{customer.phoneNumber}</div>
// <div>{customer.user.fullName}</div>
// <div>{customer.user.email}</div>
// </section>

// <Employee
// key={`employee__${Customer.id}`}
// fullName={Customer.user.fullName}
// email={Customer.user.email}
// specialty={Customer.specialty}
// rate={Customer.rate}
// id={Customer.id}
// />
