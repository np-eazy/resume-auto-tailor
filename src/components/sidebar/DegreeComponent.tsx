import React from "react";
import { Course, Degree } from "../../structure";
import { baseDebugStyle, h1Style, infoContainer, infoKeyStyle, infoValStyle, parStyle, infoSubcontainer, titleStyle } from "../../styles";
import { concatenate } from "../../concatenator";
import { PlaceComponent } from "../../PlaceComponent";

export const CourseEntry = (props: {course: Course}) => {
    return (<div style={infoContainer}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={infoKeyStyle} >
                    {props.course.className}
                </div>
                <div style={infoValStyle} >
                    {props.course.codeName} {props.course.grade ? ": " + props.course.grade : ""}
                </div>
            {/* <div style={baseDebugStyle}>
                {props.course.description}
            </div> */}
        </div>
    </div>);
};

export const DegreeComponent = (props: {degree: Degree}) => {
    return (<div>
        <div style={h1Style}> {props.degree.schoolName} </div>
            <div style={infoContainer}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <div style={titleStyle}>
                                {props.degree.degree + " " + props.degree.major} {props.degree.gpa ? ": " + props.degree.gpa : ""}
                        </div>
                    </div>
                    <div style={infoSubcontainer}>
                        <PlaceComponent startDate={props.degree.startDate} endDate={props.degree.endDate} location={props.degree.location} />
                    </div>
                </div>
            </div>
        {props.degree.courses.map((course: Course) => <CourseEntry course={course} /> )}
    </div>);
}