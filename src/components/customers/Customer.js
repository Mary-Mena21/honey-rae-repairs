import { Link } from "react-router-dom";

export const Customer = ({ id, fullName, email, address, phoneNumber }) => {
    return (
        <section className="customer">
            <div>
                            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
                            <div>Email: {email}</div>
            </div>
        </section>
    );
};

/* 
        
        <div>Address: {address}</div>
        <div>PhoneNumber: {phoneNumber}</div>
        <div>{id}</div>
*/
  