import React from "react";
import { Course, Degree } from "../../structure";
import { baseDebugStyle, h1Style, h2Style, h3Style, parStyle } from "../../styles";
import { concatenate } from "../../concatenator";

const degreeStyle = {
    ...baseDebugStyle,
}

export const CourseEntry = (props: {course: Course}) => {
    return (<div style={baseDebugStyle}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={baseDebugStyle}>
                <div style={baseDebugStyle} >
                    {props.course.className}
                </div>
                <div style={baseDebugStyle} >
                    {props.course.codeName} {props.course.grade ? ": " + props.course.grade : ""}
                </div>
            </div>
            <div style={baseDebugStyle}>
                {props.course.description}
            </div>
        </div>
    </div>);
};

export const DegreeComponent = (props: {degree: Degree}) => {
    return (<div style={degreeStyle}>
        <div style={h1Style}> Education </div>
        <div style={baseDebugStyle}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={baseDebugStyle} >
                    <div style={h2Style}>
                        {props.degree.schoolName}
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={baseDebugStyle}>
                            <div style={parStyle}>
                                {props.degree.degree + " " + props.degree.major}
                            </div>
                        </div>
                        <div style={baseDebugStyle}>
                            <div style={parStyle}>
                                {props.degree.gpa}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={baseDebugStyle}>
                    <div style={baseDebugStyle}>
                        {concatenate(props.degree.startDate)} - {concatenate(props.degree.endDate)}
                    </div>
                    <div style={baseDebugStyle}>
                        {concatenate(props.degree.location)}
                    </div>
                </div>
            </div>
        </div>
        {props.degree.courses.map((course: Course) => <CourseEntry course={course} /> )}
    </div>);
}