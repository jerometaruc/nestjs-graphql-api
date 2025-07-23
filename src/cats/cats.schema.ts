import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
@ObjectType()
export class Cat {
    @Field(() => ID)
    id: string

    @Field()
    @Prop()
    name: string;

    @Field((type) => Int)
    @Prop()
    age: number;

    @Field()
    @Prop()
    breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
