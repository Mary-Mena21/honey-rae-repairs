// export const ApplicationViews = () => {
// 	return <>
// 		<h1 className="title--main">Honey Rae Repairs</h1>
// 		<div>Your one-stop shop for repairing your tech</div>
// 	</>
// }

import { Outlet, Route, Routes } from "react-router-dom";
import { TicketForm } from "../tickets/TicketForm";
import { TicketList } from "../tickets/TicketList";
import { Hello } from "../MMM/Mariana.js";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <h1>Honey AAA Rae Repair Shop</h1>
                        <div>
                            Your one-stop-shop to get all your electronics fixed
			    {<Hello />}
                        </div>

                        <Outlet />
                    </>
                }
            >
                <Route path="tickets" element={<TicketList />} />
                <Route path="ticket/create" element={<TicketForm />} />
                <Route path="example" element={<h1> example </h1>} />
                
            </Route>
        </Routes>
    );
};

//<Route path="example" element={ <h1>I am an example</h1> } />
//it helps us to append more components.
//<Outlet />

//<Route path="tickets" element={<Hello />} />