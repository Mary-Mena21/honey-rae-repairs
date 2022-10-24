import { useState } from "react";
import { TicketList } from "./TicketList";
import { TicketSearch } from "./TicketSearch";
export const TicketContainer = () => {
    const [searchTherms, setSearchTherms] = useState("");
    return (
        <>
                <TicketSearch setterFunction={setSearchTherms} />
                    <TicketList searchThermState={searchTherms } />
        </>
    );
};
