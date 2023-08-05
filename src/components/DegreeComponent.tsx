import React from "react";
import { Course, Degree } from "../structure";
import { baseDebugStyle, h1Style, h2Style, h3Style, parStyle } from "../styles";
import { concatenate } from "../concatenator";

const degreeStyle = {
    ...baseDebugStyle,
}

export const DegreeComponent = (props: {degree: Degree}) => {
    return (<div style={degreeStyle}>
        <div style={h1Style}> Education </div>
        <div style={h2Style}>
            {props.degree.schoolName}
        </div>
        <div style={h3Style}>
            {props.degree.degree} {props.degree.major} {props.degree.gpa && (":" + props.degree.gpa.toString())}
        </div>
        <div style={h3Style}>
            {concatenate(props.degree.location)}, {concatenate(props.degree.startDate)} - {concatenate(props.degree.endDate)}
        </div>
        {props.degree.courses.map((course: Course) => <div style={parStyle}>
            {concatenate(course)}
        </div>)}
    </div>);
}