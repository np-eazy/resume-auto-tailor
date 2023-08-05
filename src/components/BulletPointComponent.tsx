import React from "react";
import { BulletPoint } from "../structure";
import { baseDebugStyle } from "../styles";
import { concatenate } from "../concatenator";

const bulletPointStyle = {
    ...baseDebugStyle,
}

export const BulletPointComponent = (props: {bulletPoint: BulletPoint}) => {
    return (<div style={bulletPointStyle}>
        {concatenate(props.bulletPoint)}
    </div>);
}