import { Link } from "react-router-dom";

export const Ticket = ({ id, description, dateCompleted, emergency }) => {
    return (
        <section key={id} className="ticket">
            <Link to={`/tickets/${id}/edit`}>Ticket {id}</Link>
            <div>ID : {id}</div>
            <div>TICKET : {description}</div>
            <div>DATE COMPLETED : {dateCompleted}</div>
            <footer>EMERGENCY : {emergency ? "❗YES!" : "No"}</footer>
        </section>
    );
};
