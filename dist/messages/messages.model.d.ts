import { Document } from 'mongoose';
export declare class Message extends Document {
    name: string;
    email: string;
    subject: string;
    body: string;
}
export declare const MessageSchema: import("mongoose").Schema<any>;
