import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Message extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  subject: string;

  @Prop()
  body: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);