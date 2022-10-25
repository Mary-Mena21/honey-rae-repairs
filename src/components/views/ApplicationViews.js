
//import { Outlet, Route, Routes } from "react-router-dom";
// import { TicketContainer } from "../tickets/TicketContainer";
// import { TicketForm } from "../tickets/TicketForm";
import { CustomerViews } from "./CustomerViews";
import { EmployeeViews } from "./EmployeeViews";


export const ApplicationViews = () => {

const localHoneyUser = localStorage.getItem("honey_user");
const honeyUserObject = JSON.parse(localHoneyUser);

    if (honeyUserObject.staff) {
        //return employee views
        return <EmployeeViews/>
    } else {
        //return customer views
        return<CustomerViews/>
        
    }
};











/* ---------------------------------------------------- */
//<Route path="example" element={ <h1>I am an example</h1> } />
//it helps us to append more components.
//<Outlet />

//<Route path="tickets" element={<Hello />} />
/* <Route path="example" element={<h1> example </h1>} />
    <Route path="example" element={<Hello />} /> 
    <Route path="example/create" element={<Hello />} />*/
// <h1>Honey AAA Rae Repair Shop</h1>
//                        {<Hello />}

// export const ApplicationViews = () => {
// 	return <>
// 		<h1 className="title--main">Honey Rae Repairs</h1>
// 		<div>Your one-stop shop for repairing your tech</div>
// 	</>
// }
