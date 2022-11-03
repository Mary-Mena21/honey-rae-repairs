import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TicketEdit = ({}) => {
    const { ticketId_M } = useParams();
    const [editTicket, updateEditTicket] = useState({
        id: 0,
        userId: 0,
        description: "",
        emergency: false,
        dateCompleted: "",
    });
    /* ------------------------------ */
    const navigate = useNavigate();
    const localHoneyUser = localStorage.getItem("honey_user");
    //ask for value
    const honeyUserObject = JSON.parse(localHoneyUser);
    /* -------------Display----------------- */
    /* async */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/serviceTickets?userId=${honeyUserObject.id}  `
            );
            const data = await response.json();
            updateEditTicket(data[0]); //Try to make new Ticket and update it? ????????????????
        };
        fetchData();
    }, []);
    //here we are fetching the api to display (GET)the existing data from the current user
    //api is the router in the browser
    /* ------------------------------ */
    /* -------------Edit----------------- */
    /* async */
    const EditTicket = async (SendToAPI) => {
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8088/serviceTickets/${ticketId_M}`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    };
    //here we are fetching the api to edit or replace (PUT) the current data
    //api is the url for the json file that will be changed
    /* ------------------------------ */
    const handleSaveButtonClick = (event) => {
        EditTicket(editTicket);
        navigate("/tickets"); //???????
    };
    /* ------------------------------ */

    return (
        <form className="profile">
            <h2 className="profile__title">Edit Ticket Data:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required
                        autoFocus
                        type="textArea"
                        style={{
                            height: "7rem",
                        }}
                        className="form-control"
                        value={editTicket.description}
                        onChange={(evt) => {
                            //TODO: Update description property
                            const copy = { ...editTicket };
                            copy.description = evt.target.value;
                            updateEditTicket(copy);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={editTicket.emergency}
                        onChange={(evt) => {
                            {
                                /* onChange */
                            }
                            //TODO: Update emergency property
                            const copy = { ...editTicket };
                            copy.emergency = evt.target.value;
                            //copy.emergency = parseFloat(evt.target.value,2);
                            updateEditTicket(copy);
                        }}
                    />
                </div>
            </fieldset>

            {/* ------------------------------ */}
            {/* ----checkbox--- */}
            {/*             
            <fieldset>
            <div className="form-group">
                <label htmlFor="name">Emergency:</label>
                <input
                    type="checkbox"
                    className="form-control"
                    checked={editTicket.emergency}
                    onChange={(evt) => {
                        //TODO: Update emergency property
                        const copy = { ...editTicket };
                        copy.emergency = evt.target.checked;
                        //copy.emergency = parseFloat(evt.target.value,2);
                        updateEditTicket(copy);
                    }}
                />
            </div>
        </fieldset>  */}
            {/* ------------------------------ */}

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date Completed:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={editTicket.dateCompleted}
                        onChange={(evt) => {
                            //TODO: Update dateCompleted property
                            const copy = { ...editTicket };
                            copy.dateCompleted = evt.target.value;
                            //copy.dateCompleted = parseFloat(evt.target.value,2);
                            updateEditTicket(copy);
                            //const newValue=evt.target.value;
                            //updateEditTicket(newValue);
                        }}
                    />
                    {/*
                    //when you type this will call onchange event FUNCTION
                    //by default it has event (type) as an argument
                    //(evt.target.value)access the target value in the input
                    */}
                </div>
            </fieldset>
            <button
                onClick={
                    //{/* onClick */}
                    (clickEvent) => handleSaveButtonClick(clickEvent)
                }
                className="btn btn-primary"
            >
                Save Ticket Edit
            </button>
        </form>
    );
};

//state= ui ,logic,variables
