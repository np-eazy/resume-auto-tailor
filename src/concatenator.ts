import { BulletPoint, Contact, Course, Date, Location } from "./structure";

export function concatenate(entry: Course | BulletPoint | Contact | Date | Location , verbose: boolean = false): string {
    if (entry.type == "Course") {
        return entry.className 
        + (entry.codeName ? 
            (" (" + entry.codeName + (
            entry.grade ?
                (", " + entry.grade) : "")
            + ") ") : "")
        + (entry.description ?
            (": " + entry.description) : "");

    } else if (entry.type == "BulletPoint") {
        return entry.body.toString() 
        + (entry.impact ? 
            ("; " + entry.impact) : "");

    } else if (entry.type == "Contact") {
        return entry.name.toString() 
        + (entry.number ? 
            (", " + entry.number) : "")
        + (entry.email ?
            (", " + entry.email) : "");

    } else if (entry.type == "Date") {
        return entry.month.toString() + "/" 
        + (entry.day ? 
            entry.day.toString() + "/" : "") 
        + entry.year.toString().slice(verbose ? 0 : 2);

    } else if (entry.type == "Location") {
        return (entry.address && verbose ?
            (entry.address + ", ") : "") 
        + entry.city + ", " 
        + entry.state + (verbose ? " " + entry.zipCode : "");

    } else {
        return "";
    } 
}

export const reStringify = (rawString: string): string => {
    const words = rawString.split("_");
    var builder = "";
    for (const word of words) {
        if (word === "dot") {
            builder += ".";
        } else if (word === "plus") {
            builder += "+";
        } else {
            builder += " " + word
        }
    }
    builder.slice(1);
    return builder;
}