export interface User {
    username: string;
    displayName: string;
    email?: string;
    department?: string;
    manager?: string;
    title?: string;
    groups: string[];
}