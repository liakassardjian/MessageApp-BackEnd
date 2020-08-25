import { Message } from './messages.model';
import { Model } from 'mongoose';
export declare class MessagesService {
    private messageModel;
    constructor(messageModel: Model<Message>);
    create(message: Message): Promise<Message>;
    findAll(): Promise<Message[]>;
}
