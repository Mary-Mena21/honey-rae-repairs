import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CustomerDetails = () => {
    const { customerId_M } = useParams();
    //console.log(customerId_M);
    const [customer, updateCustomer] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/customers?_expand=user&id=${customerId_M}`
            );
                const singleCustomer = await response.json();
                console.log(singleCustomer);
                updateCustomer(singleCustomer[0]);
                console.log(singleCustomer[0]);
                //console.log(updateCustomer);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="customer">
                <header className="customer__header">
                    {customer?.user?.fullName}
                </header>
                <div>Email: {customer?.user?.email}</div>
                <div>PhoneNumber: {customer?.phoneNumber}</div>
                <div>Address: {customer?.address}</div>
            </section>
        </>
    );
};

//https://watch.screencastify.com/v/5cPG7B1egafRuw3365N1 part 11
            // <div>Specialty: {specialty}</div>
            // <div>Rate: {rate}</div>   

            
/* 
We started with a list of employees that only displayed their name and email address, then I changed the name parts of this component into a [React Router Link] that would route the URL in the browser to employee / some number.
Use the Params hook to grab that number out of the URL then if you need to go get the data for the resource that you're trying to look at and then just update your JSX to render all of the properties that are on that object.
*/            