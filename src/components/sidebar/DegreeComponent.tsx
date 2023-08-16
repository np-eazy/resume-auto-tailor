import React from "react";
import { Course, Degree } from "../../structure";
import { h1Style, infoKeyStyle, infoValStyle, parStyle, infoSubcontainer, roleStyle, companyStyle, teamStyle } from "../../styles";
import { PlaceComponent } from "../../PlaceComponent";

export const CourseEntry = (props: {course: Course}) => {
    return (<div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={infoKeyStyle} >
                {props.course.className}
            </div>
            <div style={infoValStyle} >
                {props.course.codeName} {props.course.grade ? ": " + props.course.grade : ""}
            </div>
        </div>
    </div>);
};

export const DegreeComponent = (props: {degrees: Degree[]}) => {
    return (<div>
        <div style={h1Style}> Education </div>
        {props.degrees.map((degree: Degree) => <div>
            <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{margin: 5}}>
                        <div style={roleStyle}>{degree.schoolName} </div>
                        <div style={{marginLeft: 0}}>
                            {degree.degree && <div style={companyStyle}> {degree.degree + " " + degree.major} </div>}
                            <div style={parStyle}> 
                                <div style={teamStyle}>
                                    {degree.gpa ? "GPA: " + degree.gpa : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={infoSubcontainer}>
                        <PlaceComponent startDate={degree.startDate} endDate={degree.endDate} location={degree.location} />
                    </div>
                </div>
            </div>
            <ul>
                {degree.courses.map((course: Course) => <li>
                    <CourseEntry course={course} />
                </li> )}
            </ul>
            <div style={{minHeight: 25}}></div>
        </div>)}
        
    </div>);
}