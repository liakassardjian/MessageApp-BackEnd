import { MessagesService } from './messages.service';
import { Message } from './messages.model';
export declare class MessagesController {
    private readonly menssageService;
    constructor(menssageService: MessagesService);
    postMessage(message: Message): Promise<Message>;
    getMenssages(): Promise<Message[]>;
}
