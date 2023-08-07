import React from "react";
import { Contact } from "../structure";
import { concatenate } from "../concatenator";


export const ContactComponent = (props: {contact: Contact}) => {
    return (props.contact && <div>
        {concatenate(props.contact)}
    </div>);
}