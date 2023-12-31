export interface ResumeStructure {
    core: Core;
    skills: Skills;
    degrees: Degree[];

    blurb: Blurb;
    experienceEntries: ExperienceEntry[];
    projectEntries: ProjectEntry[];
    hobbies: Hobby[];
}

export interface Core {
    contact: Contact;
    title: string;
    location: Location;
    homesiteUrl?: string;
}

export interface Skills {
    skillMap: Map<string, number>;
    skillObj: Object;
    langObj: Object;
}

export interface Degree {
    schoolName: string;
    degree?: string;
    major?: string;
    location: Location;
    startDate: Date;
    endDate?: Date;
    courses: Course[];
    gpa?: number;
}

export interface Blurb {
    body: string;
}

export interface Hobby {
    name: string;
    description: string;
}

export interface ExperienceEntry {
    companyName: string;
    team: string;
    role: string;
    isInternship: boolean;
    isVolunteer: boolean;
    location: Location;
    startDate: Date;
    endDate?: Date;
    supervisor: Contact;
    reasonForLeaving?: string;
    bulletPoints: BulletPoint[];
}

export interface ProjectEntry {
    name: string;
    isHidden?: boolean;
    projectLink: string;
    role: string;
    location: Location;
    startDate: Date;
    endDate?: Date;
    bulletPoints: BulletPoint[];
}

export interface Course {
    type: "Course";
    className: string;
    isMajor: boolean;
    codeName?: string;
    description?: string;
    grade?: string;
}

export interface BulletPoint {
    type?: "BulletPoint";
    isHidden?: boolean;
    body: string;
    impact?: string;
} 

export interface Contact {
    type: "Contact";
    name: string;
    number?: string;
    email?: string;
}

export interface Date {
    type: "Date";
    year: number;
    month: number;
    day?: number;
}

export interface Location {
    type: "Location";
    address?: string;
    city: string;
    state: string;
    zipCode: string;
}



