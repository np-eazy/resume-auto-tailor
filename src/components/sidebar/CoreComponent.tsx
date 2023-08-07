import React from "react";
import { Core } from "../../structure";
import { baseDebugStyle, h1Style, parStyle } from "../../styles";
import { concatenate } from "../../concatenator";

const coreStyle = {
    ...baseDebugStyle,
}

export const ContactEntry = (props: {name: string, children: any}) => {
    return (<div style={baseDebugStyle}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={baseDebugStyle}>
                {props.name}
            </div>
            <div style={baseDebugStyle}>
                {props.children}
            </div>
        </div>
    </div>);
}

export const CoreComponent = (props: {core: Core}) => {
    return (<div style={coreStyle}>
        <div style={baseDebugStyle}>
            {props.core.contact.name}
        </div>
        <div style={baseDebugStyle}>
            {props.core.title}
        </div>
        <div style={baseDebugStyle}>
            {concatenate(props.core.location)}
        </div>
        <div style={baseDebugStyle}>
            <ContactEntry name="Phone" >
                { props.core.contact.number }
            </ContactEntry>
            <ContactEntry name="Email" >
                { props.core.contact.email }
            </ContactEntry>
            <ContactEntry name="Personal Site" >
                { props.core.homesiteUrl }
            </ContactEntry>
        </div>
    </div>);
}