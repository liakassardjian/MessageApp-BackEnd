import { Injectable } from '@nestjs/common';
import { Message } from './messages.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

    async create(message: Message): Promise<Message> {
        const createdMessage = new this.messageModel(message);
        return createdMessage.save();
    }

    async findAll(): Promise<Message[]> {
        return this.messageModel.find().exec();
    }
}
