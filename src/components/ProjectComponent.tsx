import React from "react";
import { BulletPoint, ProjectEntry } from "../structure";
import { baseDebugStyle, h1Style, h3Style } from "../styles";
import { concatenate } from "../concatenator";
import { BulletPointComponent } from "./BulletPointComponent";

const projectStyle = {
    ...baseDebugStyle,
}

export const ProjectComponent = (props: {projects: ProjectEntry[]}) => {
    return (<div style={projectStyle}>
        <div style={h1Style}> Projects </div>
        {props.projects.map((entry: ProjectEntry) => <div>
            <div style={h3Style}> {entry.name}, {entry.name}, {entry.name} </div>
            <div style={h3Style}>
                {concatenate(entry.location)}, {concatenate(entry.startDate)} - {concatenate(entry.endDate)}
            </div>
            {entry.bulletPoints.map((bulletPoint: BulletPoint) => <div>
                <BulletPointComponent bulletPoint={bulletPoint} />
            </div>)}
        </div>)}
    </div>);
}