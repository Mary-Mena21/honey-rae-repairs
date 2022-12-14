import { Link } from "react-router-dom";

export const Employee = ({ id, fullName, email, specialty, rate }) => {
    return (
        <section className="employee">
            <div>
                <Link to={`/employees/${id}`}>
                    Name: {fullName}
                </Link>
            </div>
            <div>Specialty: {specialty}</div>
            <div>Email: {email}</div>
            <div>Rate: {rate}</div>     
        </section>
    );
}; 


