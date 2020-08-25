import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

const options = {
  autoIndex: false, 
  reconnectTries: Number.MAX_VALUE, 
  reconnectInterval: 500, 
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  useNewUrlParser: true
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://backend-user:<password>@cluster0.uomvt.mongodb.net/message-app?retryWrites=true&w=majority', options),
    MessagesModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
