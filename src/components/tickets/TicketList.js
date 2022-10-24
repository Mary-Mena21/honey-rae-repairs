
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Tickets.css";

export const TicketList = () => {
    const [tickets, setTickets] = useState([]);
    const [filteredTickets, setFiltered] = useState([]);
    const [emergency, setEmergency] = useState(false);
    const [openOnly, updateOpenOnly] = useState(false);
    const navigate = useNavigate()

    const localHoneyUser = localStorage.getItem("honey_user");//????????????????????????
    //console.log(localHoneyUser);
    //console.log(localStorage);
    const honeyUserObject = JSON.parse(localHoneyUser);
    //honeyUserObject
    //console.log(honeyUserObject)

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    

    

    useEffect(() => {
        if (emergency) {
            const emergencyTickets = tickets.filter(
                (ticket) => ticket.emergency === true
            );
            setFiltered(emergencyTickets);
        } else {
            setFiltered(tickets);
        }
    }, [emergency]);

    useEffect(
        () => {
            //console.log("Initial state of tickets", tickets) // View the initial state of tickets

            //Alternative syntax with .then method
            // fetch(`http://localhost:8088/serviceTickets`)
            //     .then((response) => response.json())
            //     .then((ticketArray) => {
            //         setTickets(ticketArray);
            //     });
            
            //Alternative syntax with async/await 
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/serviceTickets`)
                const ticketArray = await response.json()
                setTickets(ticketArray)
            }
            fetchData()
        },
        [] // When this array is empty, you are observing initial component state
    );
    //return <h2>List of Tickets</h2>;

    useEffect(() => {
        if (honeyUserObject.staff) {
            //for employees
            setFiltered(tickets);
        } else {
            //for customers
            const myTickets = tickets.filter(
                (ticket) => ticket.userId === honeyUserObject.id
            );
            setFiltered(myTickets);
        }
    }, [tickets]);

    useEffect(() => { 
        if(openOnly){ const openTicketArray = tickets.filter(ticket => {
            return ticket.userId === honeyUserObject.id && ticket.dateCompleted ==="" 
        })
            setFiltered(openTicketArray);
        } else {
            const myTickets = tickets.filter(
                (ticket) => ticket.userId === honeyUserObject.id)
            setFiltered(myTickets);
        }
    },[openOnly]);

    return (
        <>
            {
                honeyUserObject.staff
            
                    ?
                    <>
                        <button onClick={() => { setEmergency(true) }}>Emergency Only</button>
                        <button onClick={() => { setEmergency(false) }}>Show All</button>
                    </>
                    :
                    <>
                        <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
                        <button onClick={() => updateOpenOnly(true)}>Open Ticket</button>
                        <button onClick={() => updateOpenOnly(false)}>All My Ticket</button>
                    </>
            }

            <h2>List of Tickets</h2>
            <article className="tickets">
                {filteredTickets.map((ticket) => {
                    return (
                        <section key={ticket.id} className="ticket">
                            <header>{ticket.description}</header>
                            <footer>
                                Emergency: {ticket.emergency ? "❗" : "No"}
                            </footer>
                        </section>
                    );
                })}
            </article>
        </>
    );
};

//http://localhost:8088/serviceTickets
//<hr></hr>
//<></> = react fragment

            // {
            //     honeyUserObject.staff
            
            //         ? <button onClick={() => { setEmergency(true) }}> Emergency Only </button>
            //         :""
            // }

            // export const TicketList = () => {
//     return <h2>List of Tickets</h2>
// }

/* https://www.notion.so/learningthings/Honey-Rae-Repairs-Part-3-c9e4a927d5e24b61aa3f470c4ce2d6ae  */
//import = statement
//react-router-dom = router
//navigate = future = function
