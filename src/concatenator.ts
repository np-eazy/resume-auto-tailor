import { BulletPoint, Contact, Course, Date, Location } from "./structure";

export function concatenate(entry: Course | BulletPoint | Contact | Date | Location ): string {
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
        + (entry.day && 
            entry.day.toString() + "/") 
        + entry.year.toString();

    } else if (entry.type == "Location") {
        return (entry.address ?
            (entry.address + ", ") : "") 
        + entry.city + ", " 
        + entry.state + " " + entry.zipCode;

    } else {
        return "";
    } 
}