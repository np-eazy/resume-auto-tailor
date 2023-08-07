import React from "react";
import { BulletPoint, ProjectEntry } from "../structure";
import { baseDebugStyle, bulletStyle, companyStyle, h1Style, h3Style, infoContainer, parStyle, roleStyle, infoSubcontainer } from "../styles";
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
                    <div style={{minHeight: 4}}></div>
                    <div style={companyStyle}> {entry.role} </div>
                    <div style={{minHeight: 16}}></div>
                    <div style={parStyle}>
                        <a href={entry.projectLink}>{entry.projectLink}</a>
                    </div>
                </div>
                <div style={infoSubcontainer}>
                    <PlaceComponent startDate={entry.startDate} endDate={entry.endDate} location={entry.location} />
                </div>
            </div>
            <div style={infoSubcontainer}>
                {entry.bulletPoints.map((bulletPoint: BulletPoint) => <div style={bulletStyle}>
                    {" - " + bulletPoint.body}
                </div>)}
            </div>
            
        </div>)}
    </div>);
}