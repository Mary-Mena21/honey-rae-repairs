import { useEffect, useState } from "react";

export const EmployeeForm = () => {
    // TODO: Provide initial state for profile
    const [profile, updateProfile] = useState({
        specialty: "",
        rate: 0,
        userId: 0,
    });

    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);
    //console.log(honeyUserObject);

    /* ------------------------------ */
    /* async */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/employees?userId=${honeyUserObject.id} `
            );
            const data = await response.json();
            //console.log(data);
            updateProfile(data[0]);
        };
        fetchData();
    }, []);
    /* ------------------------------ */
    /* .then */
    // useEffect(() => {
    //     fetch(`http://localhost:8088/employees?userId=${honeyUserObject.id}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             //const employeeObject = data[0];
    //             //updateProfile(employeeObject);
    //             updateProfile(data[0])
    //         });
    // }, []);
    // TODO: Get employee profile info from API and update state

    /* ------------------------------ */
    /* async */
    const editProfile = async (SendToAPI) => {
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8088/employees/${profile.id}`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    };
    //PUT mean replace or edit
    /* ------------------------------ */
    /* .then */
    // return fetch(`http://localhost:8088/employees/${profile.id}`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(profile),
    // })
    //     .then((response) => response.json())
    //     .then(() => {});
    /* ------------------------------ */

    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        editProfile(profile);
        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
        /* ----------------------------- */
        /* .then */
        // return fetch(`http://localhost:8088/employees/${profile.id}`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(profile),
        // })
        //     .then((response) => response.json())
        //     .then(() => {});
        /* ----------------------------- */
        /* async */
        // const response = await fetch(`http://localhost:8088/employees/${profile.id}`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(profile),
        // });
        // await response.json();
        /* ----------------------------- */
    };

    return (
        <form className="profile">
            <h2 className="profile__title">Edit Employee Data:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        value={profile.specialty}
                        onChange={(evt) => {
                            // TODO: Update specialty property
                            const copy = { ...profile };
                            copy.specialty = evt.target.value;
                            updateProfile(copy);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly rate:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={profile.rate}
                        onChange={(evt) => {
                            // TODO: Update rate property
                            const copy = { ...profile };
                            copy.rate = evt.target.valueAsNumber;
                            //copy.rate = parseFloat(evt.target.value,2);
                            updateProfile(copy);
                        }}
                    />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary"
            >
                Save Profile
            </button>
        </form>
    );
};

//https://watch.screencastify.com/v/zQvaC71N4MmJTtwU95v0
