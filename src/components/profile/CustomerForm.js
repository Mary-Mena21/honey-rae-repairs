import { useEffect, useState } from "react";

export const CustomerForm = () => {
    const [profile, updateProfile] = useState({
        address: "",
        phoneNumber: "",
        userId: 0,
    });
    /* ------------------------------ */
    const localHoneyUser = localStorage.getItem("honey_user");//ask for value
    const honeyUserObject = JSON.parse(localHoneyUser);
    //console.log(localStorage);
    //=Storage {honey_user: '{"id":8,"staff":false}', length: 1}
    //console.log(localHoneyUser);//={"id":8,"staff":false}
    //console.log(honeyUserObject); //={id: 8, staff: false}
    /* -------------Display----------------- */
    /* async */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/customers?userId=${honeyUserObject.id} `
            );
            const data = await response.json();
            //console.log(data);
            updateProfile(data[0]);
        };
        fetchData();
    }, []);
    /* -------------Edit----------------- */
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
            `http://localhost:8088/customers/${profile.id}`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        editProfile(profile);
    };
    /* ------------------------------ */

    return (
        <form className="profile">
            <h2 className="profile__title">Edit Customer Data:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        value={profile.address}
                        onChange={(evt) => {
                            //TODO: Update address property
                            const copy = { ...profile };
                            copy.address = evt.target.value;
                            updateProfile(copy);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">PhoneNumber:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={profile.phoneNumber}
                        onChange={(evt) => {
                            //TODO: Update phoneNumber property
                            const copy = { ...profile };
                            copy.phoneNumber = evt.target.value;
                            //copy.phoneNumber = parseFloat(evt.target.value,2);
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
