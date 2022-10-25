
import { CustomerNav } from "./CustomerNav";
import { EmployeeNav } from "./EmployeeNav";
import "./NavBar.css";

export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    if (honeyUserObject.staff) {
        //if employee Nav
        return <EmployeeNav />;
    } else {
        //if customer Nav
        return <CustomerNav />;
    }
};

// <ul className="navbar">
//     <li className="navbar__item active">
//         <Link className="navbar__link" to="/tickets">
//             Tickets
//         </Link>
//     </li>

//     {localStorage.getItem("honey_user") ? (
//         <li className="navbar__item navbar__logout">
//             <Link
//                 className="navbar__link"
//                 to=""
//                 onClick={() => {
//                     localStorage.removeItem("honey_user");
//                     navigate("/", { replace: true });
//                 }}
//             >
//                 Logout
//             </Link>
//         </li>
//     ) : (
//         ""
//     )}
// </ul>
//     );
// };

// return (
//     <ul className="navbar">
//         <li className="navbar__item active">
//             <Link className="navbar__link" to="/tickets">Tickets</Link>
//         </li>

//         {
//             localStorage.getItem("honey_user")
//                 ? <li className="navbar__item navbar__logout">
//                     <Link className="navbar__link" to="" onClick={() => {
//                         localStorage.removeItem("honey_user")
//                         navigate("/", {replace: true})
//                     }}>Logout</Link>
//                 </li>
//                 : ""
//         }
//     </ul>
// )
//}

/*             <li className="navbar__item active">
            <Link className="navbar__link" to="/employees">Employee List</Link>
        </li> */
