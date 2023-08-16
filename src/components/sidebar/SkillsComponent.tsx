import React from "react";
import { Skills } from "../../structure";
import { baseDebugStyle, h1Style, infoContainer, infoKeyStyle, infoValStyle, parStyle } from "../../styles";
import { reStringify } from "../../concatenator";


export const SkillsEntry = (props: {name: string, children: any}) => {
    return (<div style={{minWidth: 180}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={infoKeyStyle}>
                {props.name}
            </div>
            <div style={infoValStyle}>
                {props.children}
            </div>
        </div>
    </div>);
}



export const SkillsComponent = (props: {skills: Skills}) => {
    
    const skillVals = Object.values(props.skills.skillObj);
    const skillKeys = Object.keys(props.skills.skillObj)
    .filter((key: string, val: number) => skillVals[val] != 0).map((key: string, val: number) => 
        <div>
            <SkillsEntry name={reStringify(key)}>
                {skillVals[val].toString() + (skillVals[val] == 1 ? " year" : " years")}
            </SkillsEntry>
        </div>);

    const langVals = Object.values(props.skills.langObj);
    const langKeys = Object.keys(props.skills.langObj)
    .filter((key: string, val: number) => langVals[val] != 0).map((key: string, val: number) => 
    <div>
        <SkillsEntry name={reStringify(key)}>
            {langVals[val].toString() + (langVals[val] == 1 ? " year" : " years")}
        </SkillsEntry>
    </div>);


    
    return (<div>
        <div style={h1Style}> Skills </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                {langKeys.slice(0, langKeys.length / 2).map((element: any) => element)}
            </div>
            <div>
                {langKeys.slice(langKeys.length / 2).map((element: any) => element)}
            </div>
        </div>
        <div style={{minHeight: 16}}></div>
        <div>
            <div style={{padding: 5}}>
                <div style={parStyle}>
                    {Object.keys(props.skills.langObj)
                    .filter((key: string, val: number) => langVals[val] == 0)
                    .map((key: string, val: number) => reStringify(key) + ", ")}
                </div>        
            </div>
        </div>
        <div style={{minHeight: 25}}></div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                {skillKeys.slice(0, skillKeys.length / 2).map((element: any) => element)}
            </div>
            <div>
                {skillKeys.slice(skillKeys.length / 2).map((element: any) => element)}
            </div>
        </div>
        <div style={{minHeight: 16}}></div>
        <div>
            <div style={{padding: 5}}>
                <div style={parStyle}>
                    {Object.keys(props.skills.skillObj)
                    .filter((key: string, val: number) => skillVals[val] == 0)
                    .map((key: string, val: number) => reStringify(key) + ", ")}
                </div>        
            </div>
        </div>
    </div>);
}