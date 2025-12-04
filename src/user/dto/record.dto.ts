export interface RecordDto {
    id: string;
    email: string;
    action: string;
    timestamp: Date;
    performedBy: string;
    details?: string;
}