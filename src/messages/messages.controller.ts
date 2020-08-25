import { Controller, Post, Body, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './messages.model';

@Controller('messages')
export class MessagesController {

    constructor(private readonly menssageService: MessagesService) {};

    @Post()
    postMessage(@Body() message: Message) {
        return this.menssageService.create(message);
    }

    @Get()
    getMenssages() {
        return this.menssageService.findAll();
    }
}


