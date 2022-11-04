import { Link} from "react-router-dom";
import "./Tickets.css"
{
    /* -----------------PART1-------------------- */
}
export const Ticket = ({
    ticketObject,
    currentUser,
    employees,
    getAllTickets,
}) => {
    /* -------------------------------------------------- */
    //find the assignedEmployee for the current ticket
    let assignedEmployee = null;
    if (ticketObject.employeeTickets.length > 0) {
        const ticketEmployeeRelationship = ticketObject.employeeTickets[0];
        assignedEmployee = employees.find(
            (employee) => employee.id === ticketEmployeeRelationship.employeeId
        );
    }
    /* -------------------------------------------------- */
    //find the employee profile object for the current user
    const userEmployee = employees.find(
        (employee) => employee.userId === currentUser.id
    );
    /* -------------------------close------------------------- */
    //function that determine if the current user can close the ticket
    const canClose = () => {
        if (
            userEmployee?.id === assignedEmployee?.id &&
            ticketObject.dateCompleted === ""
        ) {
            return (
                <button onClick={closeTicket} className="ticket__finish">
                    FINISH
                </button>
            );
        } else {
            return "";
        }
    };

    /* ------------------------delete-------------------------- */
    const deleteButton = () => {
        if(!currentUser.staff){
            return (
                <button onClick={() => {
                    fetch(
                        `http://localhost:8088/serviceTickets/${ticketObject.id}`,
                        {
                            method: "DELETE"
                        })
                        .then(getAllTickets);            
                }}
                className="ticket__delete">
                    DELETE
                </button>
            );
        } else {
            return "";
        }
    };
    /* -------------------------------------------------- */
    //function that update the ticket with a new date completed
    const closeTicket = () => {
        const copy = {
            userId: ticketObject.userId,
            description: ticketObject.description,
            emergency: ticketObject.emergency,
            dateCompleted: new Date(Date.now()).toLocaleDateString(),
            //dateCompleted: new Date()
        };
        return fetch(
            `http://localhost:8088/serviceTickets/${ticketObject.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(copy),
            }
        )
            .then((response) => response.json())
            .then(getAllTickets);
    };

    /* -------------------------------------------------- */
    const buttonOrNoButton = () => {
        if (currentUser.staff) {
            return (
                <button
                    onClick={() => {
                        fetch(`http://localhost:8088/employeeTickets`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                //employeeId: currentUser.id,
                                employeeId: userEmployee.id,
                                serviceTicketId: ticketObject.id,
                            }),
                        })
                            .then((response) => response.json())
                            //.then(getAllTickets) works!
                            .then(() => {
                                getAllTickets();
                                //navigate("/tickets");
                            });
                    }}
                >
                    Claim
                </button>
            );
        } else {
            return "";
        }
    };
    return (
        <section key={`ticket--${ticketObject.id}`} className="ticket">
            <header>
                {currentUser.staff ? (
                    `Ticket ${ticketObject.id}`
                ) : (
                    <Link to={`/tickets/${ticketObject.id}/edit`}>
                        Ticket {ticketObject.id}
                    </Link>
                )}
            </header>
            <div>ID : {ticketObject.id}</div>
            <div>TICKET : {ticketObject.description}</div>
            <div>DATE COMPLETED : {ticketObject.dateCompleted}</div>
            <div>EMERGENCY : {ticketObject.emergency ? "❗YES!" : "No"}</div>
            <hr />
            <footer>
                {ticketObject.employeeTickets.length
                    ? `Assigned to ${
                          assignedEmployee !== null
                              ? assignedEmployee?.user?.fullName
                              : ""
                      }` 
                    : buttonOrNoButton()}
                {canClose()}
                {deleteButton()}
            </footer>
        </section>
    );
};
//`
//<div>EMPLOYEE NAME : {employees.user.fullName}</div>
// key={ticket.id}
// id={ticket.id}
// description={ticket.description}
// dateCompleted={ticket.dateCompleted}
// emergency={ticket.emergency ? "❗" : "No"}

//https://watch.screencastify.com/v/rNGVduucPHi9mQeii65y
{
    /* -----------------PART2-------------------- */
}
// export const Ticket = ({ id, description, dateCompleted, emergency }) => {
//     return (
//         <section key={id} className="ticket">
//             <Link to={`/tickets/${id}/edit`}>Ticket {id}</Link>
//             <div>ID : {id}</div>
//             <div>TICKET : {description}</div>
//             <div>DATE COMPLETED : {dateCompleted}</div>
//             <footer>EMERGENCY : {emergency ? "❗YES!" : "No"}</footer>
//         </section>
//     );
// };
