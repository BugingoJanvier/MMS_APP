export interface GetUsersListDto {
    users: {
        id: string;
        username: string;
        displayName: string;
        email?: string;
        department?: string;
        title?: string;
        manager?: string;
    }[];
}