import React, { useState } from "react";
import { ResumeStructure } from "../structure";
import { CoreComponent } from "./CoreComponent";
import { DegreeComponent } from "./DegreeComponent";
import { SkillsComponent } from "./SkillsComponent";
import { ExperienceComponent } from "./ExperienceComponent";
import { ProjectComponent } from "./ProjectComponent";

export const Resume = (props: {contents: ResumeStructure}) => {
    return (<div>
        <CoreComponent core={props.contents.core} />
        <DegreeComponent degree={props.contents.degree} />
        <SkillsComponent skills={props.contents.skills} />
        <ExperienceComponent experiences={props.contents.experienceEntries} />
        <ProjectComponent projects={props.contents.projectEntries} />
    </div>);
}