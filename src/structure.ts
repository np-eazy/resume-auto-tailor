export interface ResumeStructure {
    core: Core;
    degree: Degree;
    skills: Skills;
    experienceEntries: ExperienceEntry[];
    projectEntries: ProjectEntry[];
}

export interface Core {
    contact: Contact;
    location: Location;
    homesiteUrl?: string;
}

export interface Skills {
    skillMap: Map<string, number>;
}

export interface Degree {
    schoolName: string;
    degree: string;
    major: string;
    location: Location;
    startDate: Date;
    endDate: Date;
    courses: Course[];
    gpa?: number;
}

export interface ExperienceEntry {
    name: string;
    team: string;
    role: string;
    isInternship: boolean;
    isVolunteer: boolean;
    location: Location;
    startDate: Date;
    endDate: Date;
    supervisor: Contact;
    reasonForLeaving?: string;
    bulletPoints: BulletPoint[];
}

export interface ProjectEntry {
    name: string;
    projectLink: string;
    role: string;
    location: Location;
    startDate: Date;
    endDate: Date;
    supervisor: Contact;
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



