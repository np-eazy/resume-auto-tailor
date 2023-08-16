import React from "react";
import { Hobby } from "../../structure";
import { baseDebugStyle, h1Style, parStyle } from "../../styles";
import { HOBBY_OBJECT } from "../../ai/master-input2";
import { reStringify } from "../../concatenator";
import { SkillsEntry } from "./SkillsComponent";

export const HobbyComponent = (props: {hobbies: Hobby[]}) => {

    const vals = Object.values(HOBBY_OBJECT);
    const keys = Object.keys(HOBBY_OBJECT)
    .filter((key: string, val: number) => vals[val] != 0).map((key: string, val: number) => 
        <div>
            <SkillsEntry name={reStringify(key)}>
                {vals[val].toString() + (vals[val] == 1 ? " year" : " years")}
            </SkillsEntry>
        </div>);


    return (<div>
        <div style={h1Style}> Hobbies </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                {keys.slice(0, keys.length / 2).map((element: any) => element)}
            </div>
            <div>
                {keys.slice(keys.length / 2).map((element: any) => element)}
            </div>
        </div>
        <div style={{minHeight: 16}}></div>
        <div>
            <div style={{padding: 5}}>
                <div style={parStyle}>
                    {Object.keys(HOBBY_OBJECT)
                    .filter((key: string, val: number) => vals[val] == 0)
                    .map((key: string, val: number) => reStringify(key) + ", ")}
                </div>        
            </div>
        </div>
    </div>);
}