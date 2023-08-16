import { BulletPoint, ExperienceEntry } from "../structure";
import { bulletStyle, companyStyle, h1Style, infoContainer, parStyle, roleStyle, infoSubcontainer, titleStyle, teamStyle } from "../styles";
import { PlaceComponent } from "../PlaceComponent";

export const ExperienceComponent = (props: {experiences: ExperienceEntry[]}) => {
    return (<div>
        <div style={h1Style}> Experience </div>
        {props.experiences
        .filter((entry: ExperienceEntry) => 
            entry.bulletPoints
            .filter((bulletPoint: BulletPoint) => bulletPoint.body != "HIDDEN")
            .length != 0)
        .map((entry: ExperienceEntry) => <div style={infoContainer}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{margin: 5}}>
                    <div style={roleStyle}> {entry.role} </div>
                    <div style={{marginLeft: 0}}>
                        <div style={companyStyle}> {entry.companyName} </div>
                        <div style={parStyle}> 
                            <div style={teamStyle}>
                                {entry.team}  {entry.isVolunteer ? "(Volunteer)" : ""}
                            </div>
                        </div>
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