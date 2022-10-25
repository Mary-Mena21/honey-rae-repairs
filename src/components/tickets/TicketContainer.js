import { useState } from "react";
import { TicketList } from "./TicketList";
import { TicketSearch } from "./TicketSearch";

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("");
    console.log(searchTerms);
    return (
        <>
            <TicketSearch setterFunction={setSearchTerms}/>
            <TicketList searchTermState={searchTerms} />
        </>
    );
};

/* two different component can not share state (send state)
with each other they need tp be in parent component 
if we need them to interact with each other */
/* setterFunction and searchTermState => props */
//Higher order component / parent component :
//component return components