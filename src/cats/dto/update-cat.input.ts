import { Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class UpdateCatInput {
    @Field({nullable: true})
    readonly name?: string;

    @Field((type) => Int, {nullable: true})
    readonly age?: number;

    @Field({nullable: true})
    readonly breed?: string;
}
