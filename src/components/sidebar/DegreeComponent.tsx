import React from "react";
import { Course, Degree } from "../../structure";
import { baseDebugStyle, h1Style, infoContainer, infoKeyStyle, infoValStyle, parStyle, infoSubcontainer, titleStyle, roleStyle, companyStyle, teamStyle } from "../../styles";
import { concatenate } from "../../concatenator";
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

export const DegreeComponent = (props: {degree: Degree}) => {
    return (<div>
        <div style={h1Style}> Education </div>
            <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{margin: 5}}>
                        <div style={roleStyle}> {props.degree.degree + " " + props.degree.major} </div>
                        <div style={{marginLeft: 0}}>
                            <div style={companyStyle}> {props.degree.schoolName} </div>
                            <div style={parStyle}> 
                                <div style={teamStyle}>
                                    {props.degree.gpa ? "GPA: " + props.degree.gpa : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={infoSubcontainer}>
                        <PlaceComponent startDate={props.degree.startDate} endDate={props.degree.endDate} location={props.degree.location} />
                    </div>
                </div>
            </div>
        <ul>
            {props.degree.courses.map((course: Course) => <li>
                <CourseEntry course={course} />
            </li> )}
        </ul>
    </div>);
}