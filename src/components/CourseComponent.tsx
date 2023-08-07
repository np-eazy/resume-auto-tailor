import React from "react";
import { Course } from "../structure";
import { baseDebugStyle } from "../styles";
import { concatenate } from "../concatenator";

const courseStyle = {
    ...baseDebugStyle,
}

export const CourseComponent = (props: {course: Course}) => {
    return (<div style={courseStyle}>
        {props.course && concatenate(props.course)}
    </div>);
}