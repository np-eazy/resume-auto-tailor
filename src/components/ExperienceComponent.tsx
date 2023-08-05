import React from "react";
import { BulletPoint, ExperienceEntry } from "../structure";
import { baseDebugStyle, h1Style, h3Style } from "../styles";
import { BulletPointComponent } from "./BulletPointComponent";
import { concatenate } from "../concatenator";

const experienceStyle = {
    ...baseDebugStyle,
}

export const ExperienceComponent = (props: {experiences: ExperienceEntry[]}) => {
    return (<div style={experienceStyle}>
        <div style={h1Style}> Experience </div>
        {props.experiences.map((entry: ExperienceEntry) => <div>
            <div style={h3Style}> {entry.name}, {entry.name}, {entry.name} {entry.isInternship && "(Internship)"} {entry.isVolunteer && "(Volunteer)"} </div>
            <div style={h3Style}>
                {concatenate(entry.location)}, {concatenate(entry.startDate)} - {concatenate(entry.endDate)}
            </div>
            {entry.bulletPoints.map((bulletPoint: BulletPoint) => <div>
                <BulletPointComponent bulletPoint={bulletPoint} />
            </div>)}
        </div>)}
    </div>);
}