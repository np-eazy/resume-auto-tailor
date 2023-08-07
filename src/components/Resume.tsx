import { ResumeStructure } from "../structure";
import { CoreComponent } from "./sidebar/CoreComponent";
import { DegreeComponent } from "./sidebar/DegreeComponent";
import { SkillsComponent } from "./sidebar/SkillsComponent";
import { ExperienceComponent } from "./ExperienceComponent";
import { ProjectComponent } from "./ProjectComponent";
import { HobbyComponent } from "./HobbyComponent";
import { baseDebugStyle, bodyContainer, infoContainer, pageContainer, parStyle, sidebarContainer } from "../styles";

const spacer = (size: number) => <div style={{minHeight: size}}></div>;
const SIDEBAR_SPACING = 32;

export const Resume = (props: {contents: ResumeStructure}) => {
    return (<div style={pageContainer}>
        <div style={sidebarContainer}>
            <div>
                <CoreComponent core={props.contents.core} />
                {spacer(SIDEBAR_SPACING)}
                <SkillsComponent skills={props.contents.skills} />
                {spacer(SIDEBAR_SPACING)}
                <DegreeComponent degree={props.contents.degree} />
                {spacer(SIDEBAR_SPACING)}
                {/* <HobbyComponent hobbies={props.contents.hobbies} /> */}

                {/* <div style={{fontSize: 1, color: "#ffffff"}}>
                    {JSON.stringify(props.contents)}
                </div> */}
            </div>
        </div>
        <div style={bodyContainer}>
            <div>
                <div style={{minHeight: 20}}></div>
                <div style={infoContainer}>
                    <div style={parStyle}>
                        {props.contents.blurb.body}
                    </div>
                </div>
                <ExperienceComponent experiences={props.contents.experienceEntries} />
                <ProjectComponent projects={props.contents.projectEntries} />
            </div>
        </div>
    </div>);
}