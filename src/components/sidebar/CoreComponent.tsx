import React from "react";
import { Core } from "../../structure";
import { baseDebugStyle, h1Style, infoContainer, infoKeyStyle, infoValStyle, nameStyle, parStyle, titleStyle } from "../../styles";
import { concatenate } from "../../concatenator";

export const ContactEntry = (props: {name: string, children: any}) => {
    return (<div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={infoKeyStyle}>
                {props.name}: 
            </div>
            <div style={infoValStyle}>
                {props.children}
            </div>
        </div>
    </div>);
}

export const CoreComponent = (props: {core: Core}) => {
    return (<div>
        <div style={nameStyle}>
            {props.core.contact.name}
        </div>
        <div style={titleStyle}>
            {props.core.title}
        </div>
        <div style={{minHeight: 15}}>

        </div>
        <div>
            <ContactEntry name="Phone" >
                { props.core.contact.number }
            </ContactEntry>
            <ContactEntry name="Email" >
                { props.core.contact.email }
            </ContactEntry>
            <ContactEntry name="Personal Site" >
                <a href={props.core.homesiteUrl}>{ props.core.homesiteUrl }</a>
            </ContactEntry>
            <ContactEntry name="Location" >
                {concatenate(props.core.location)}
            </ContactEntry>
        </div>
    </div>);
}