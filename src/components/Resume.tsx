import React, { useState } from "react";
import { ResumeStructure } from "../structure";
import { CoreComponent } from "./sidebar/CoreComponent";
import { DegreeComponent } from "./sidebar/DegreeComponent";
import { SkillsComponent } from "./sidebar/SkillsComponent";
import { ExperienceComponent } from "./ExperienceComponent";
import { ProjectComponent } from "./ProjectComponent";
import { HobbyComponent } from "./HobbyComponent";
import { baseDebugStyle, bodyContainer, infoContainer, parStyle, sidebarContainer } from "../styles";


export const Resume = (props: {contents: ResumeStructure}) => {
    return (<div>
        <div style={sidebarContainer}>
            <div style={baseDebugStyle}>
                <CoreComponent core={props.contents.core} />
                <SkillsComponent skills={props.contents.skills} />
                <DegreeComponent degree={props.contents.degree} />
                <HobbyComponent hobbies={props.contents.hobbies} />

                <div style={{fontSize: 1, color: "#ffffff"}}>
                    {JSON.stringify(props.contents)}
                </div>
            </div>
        </div>
        <div style={bodyContainer}>
            <div style={baseDebugStyle}>
                <div style={infoContainer}>
                    <div style={parStyle}>
                        <div style={{margin: 5}}>{props.contents.blurb.body}</div>
                    </div>
                </div>
                <ExperienceComponent experiences={props.contents.experienceEntries} />
                <ProjectComponent projects={props.contents.projectEntries} />
            </div>
        </div>
    </div>);
}