import { BulletPoint, ExperienceEntry } from "../structure";
import { bulletStyle, companyStyle, h1Style, infoContainer, parStyle, roleStyle, infoSubcontainer, titleStyle } from "../styles";
import { PlaceComponent } from "../PlaceComponent";

export const ExperienceComponent = (props: {experiences: ExperienceEntry[]}) => {
    return (<div>
        <div style={h1Style}> Experience </div>
        {props.experiences.map((entry: ExperienceEntry) => <div style={infoContainer}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{margin: 5}}>
                    <div style={roleStyle}> {entry.role} </div>
                    <div style={{marginLeft: 5}}>
                        <div style={{minHeight: 8}}></div>
                        <div style={companyStyle}> {entry.name} </div>
                        <div style={{minHeight: 4}}></div>
                        <div style={parStyle}> 
                            <div style={{fontWeight: "bold", fontFamily: "AllCaps"}}>
                                {entry.team} {entry.isInternship ? "(Internship)" : ""} {entry.isVolunteer ? "(Volunteer)" : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={infoSubcontainer}>
                    <PlaceComponent startDate={entry.startDate} endDate={entry.endDate} location={entry.location} />
                </div>
            </div>
            <div style={{minHeight: 6}}></div>
            <ul style={infoSubcontainer}>
                {entry.bulletPoints.map((bulletPoint: BulletPoint) => <li style={bulletStyle}>
                    {bulletPoint.body}
                </li>)}
            </ul>
        </div>)}
    </div>);
}