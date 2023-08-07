import React, { useState } from "react";
import { ResumeStructure } from "../structure";
import { CoreComponent } from "./sidebar/CoreComponent";
import { DegreeComponent } from "./sidebar/DegreeComponent";
import { SkillsComponent } from "./sidebar/SkillsComponent";
import { ExperienceComponent } from "./ExperienceComponent";
import { ProjectComponent } from "./ProjectComponent";
import { HobbyComponent } from "./HobbyComponent";

const sidebarStyle = {
    float: "left" as "left",
    maxWidth: 600,
};

const bodyStyle = {
    float: "left" as "left",
    maxWidth: 1200,
};

export const Resume = (props: {contents: ResumeStructure}) => {
    return (<div>
        <div style={sidebarStyle}>
            <CoreComponent core={props.contents.core} />
            <SkillsComponent skills={props.contents.skills} />
            <DegreeComponent degree={props.contents.degree} />
        </div>
        <div style={bodyStyle}>
            <div>{props.contents.blurb.body}</div>
            <ExperienceComponent experiences={props.contents.experienceEntries} />
            <ProjectComponent projects={props.contents.projectEntries} />
            <HobbyComponent hobbies={props.contents.hobbies} />
        </div>
    </div>);
}