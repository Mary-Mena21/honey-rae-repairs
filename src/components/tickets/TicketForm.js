import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TicketForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [ticket, update] = useState({
        description: "",
        emergency: false,
    });
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        //console.log("You clicked the button!");
        // TODO: Create the object to be saved to the API
        /*
            "id": 1,
            "userId": 3,
            "description": "Saepe ex sapiente deserunt et voluptas fugiat vero quasi. Ipsam est non ipsa. Occaecati rerum ipsa consequuntur. Ratione commodi unde sint non rerum. Sit quia et aut sunt.",
            "emergency": false,
            "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)" 
            */
        const ticketToSendToAPI = {
            userId: honeyUserObject.id,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: "",
        };

        // TODO: Perform the fetch() to POST the object to the API

        return fetch(`http://localhost:8088/serviceTickets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ticketToSendToAPI)
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/tickets")
            });
    };


    // const fetchOptions = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userServiceRequest),
    // };
    // const mainContainer = document.querySelector("#container");
    // const response = await fetch(`${API}/requests`, fetchOptions);
    // const responseJson = await response.json();
    // mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    // return responseJson;





    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={ticket.description}
                        onChange={(evt) => {
                            const copy = { ...ticket };
                            copy.description = evt.target.value;
                            update(copy);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input
                        type="checkbox"
                        value={ticket.emergency}
                        onChange={(evt) => {
                            const copy = { ...ticket };
                            copy.emergency = evt.target.checked;
                            update(copy);
                        }}
                    />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => {
                    handleSaveButtonClick(clickEvent);
                }}
                className="btn btn-primary"
            >
                Submit Ticket
            </button>
        </form>
    );
};
