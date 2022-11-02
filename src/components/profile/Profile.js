import { CustomerForm } from "./CustomerForm";
import { EmployeeForm } from "./EmployeeForm";


export const Profile = () => {

    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    if (honeyUserObject.staff) {
        //if employee Form
        return <EmployeeForm />;
    } else {
        //if customer Form
        return <CustomerForm />;
    }
};