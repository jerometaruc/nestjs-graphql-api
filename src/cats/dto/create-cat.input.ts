import { Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class CreateCatInput {
    @Field()
    readonly name: string;

    @Field((type) => Int)
    readonly age: number;

    @Field()
    readonly breed: string;
}
