import React from "react";
import { BulletPoint, ProjectEntry } from "../structure";
import { baseDebugStyle, bulletStyle, companyStyle, h1Style, infoContainer, parStyle, roleStyle, infoSubcontainer, teamStyle } from "../styles";
import { concatenate } from "../concatenator";
import { BulletPointComponent } from "./BulletPointComponent";
import { PlaceComponent } from "../PlaceComponent";


export const ProjectComponent = (props: {projects: ProjectEntry[]}) => {
    return (<div>
        <div style={h1Style}> Projects </div>
        {props.projects.map((entry: ProjectEntry) => <div style={infoContainer}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{margin: 5}}>
                    <div style={roleStyle}> {entry.name} </div>
                    <div style={companyStyle}> {entry.role} </div>
                    <div style={teamStyle}>
                        <a href={entry.projectLink}>{entry.projectLink}</a>
                    </div>
                </div>
                <div style={infoSubcontainer}>
                    <PlaceComponent startDate={entry.startDate} endDate={entry.endDate} location={entry.location} />
                </div>
            </div>
            <ul style={infoSubcontainer}>
                {entry.bulletPoints.map((bulletPoint: BulletPoint) => <li style={bulletStyle}>
                    {bulletPoint.body}
                </li>)}
            </ul>
            
        </div>)}
    </div>);
}