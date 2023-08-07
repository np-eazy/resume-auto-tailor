import React from "react";
import { Contact } from "../structure";
import { baseDebugStyle } from "../styles";
import { concatenate } from "../concatenator";

const contactStyle = {
    ...baseDebugStyle,
}

export const ContactComponent = (props: {contact: Contact}) => {
    return (props.contact && <div style={contactStyle}>
        {concatenate(props.contact)}
    </div>);
}