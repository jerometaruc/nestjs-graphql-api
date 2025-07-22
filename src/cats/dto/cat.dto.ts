import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CatDto {
    @Field(() => ID)
    readonly id: string

    @Field()
    readonly name: string;

    @Field((type) => Int)
    readonly age: number;

    @Field()
    readonly breed: string;
}
