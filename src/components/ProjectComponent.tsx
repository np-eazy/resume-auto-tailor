import { BulletPoint, ProjectEntry } from "../structure";
import { bulletStyle, companyStyle, h1Style, infoContainer, roleStyle, infoSubcontainer, teamStyle } from "../styles";
import { PlaceComponent } from "../PlaceComponent";


export const ProjectComponent = (props: {projects: ProjectEntry[]}) => {
    return (<div>
        <div style={h1Style}> Projects </div>
        {props.projects
        .filter((entry: ProjectEntry) => 
            entry.bulletPoints
            .filter((bulletPoint: BulletPoint) => bulletPoint.body != "HIDDEN")
            .length != 0)
        .map((entry: ProjectEntry) => <div style={infoContainer}>
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
                {entry.bulletPoints
                .filter((bulletPoint: BulletPoint) => bulletPoint.body != "HIDDEN")
                .map((bulletPoint: BulletPoint) => <li style={bulletStyle}>
                    {bulletPoint.body}
                </li>)}
            </ul>
            
        </div>)}
    </div>);
}