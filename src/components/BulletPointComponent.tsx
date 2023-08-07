import React from "react";
import { BulletPoint } from "../structure";
import { baseDebugStyle } from "../styles";

const bulletPointStyle = {
    ...baseDebugStyle,
}

export const BulletPointComponent = (props: {bulletPoint: BulletPoint}) => {
    return (<div style={bulletPointStyle}>
        {" - " + props.bulletPoint.body}
    </div>);
}