import { Outlet, Route, Routes } from "react-router-dom";
import { CustomerDetails } from "../customers/CustomerDetails";
import { CustomersList } from "../customers/CustomersList";
import { EmployeeDetails } from "../employees/EmployeeDetails";
import { EmployeeList } from "../employees/EmployeeList";
import { TicketContainer } from "../tickets/TicketContainer";

//import { TicketForm } from "../tickets/TicketForm";

export const EmployeeViews = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <h1>Honey Rae Repair Shop</h1>
                        <div>
                            Your one-stop-shop to get all your electronics fixed
                        </div>
                        <Outlet />
                    </>
                }
            >
                <Route path="tickets" element={<TicketContainer />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="customers" element={<CustomersList />} />
                <Route
                    path="customers/:customerId_M"
                    element={<CustomerDetails />}
                />
                <Route
                    path="employees/:employeeId_M"
                    element={<EmployeeDetails />}
                />
            </Route>
        </Routes>
    );
};
//<Route path="ticket/create" element={<TicketForm />} />
