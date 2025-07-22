import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CreateCatInput } from "./dto/create-cat.input";

@Resolver()
export class CatsResolver {
    constructor(
        private catsSerivce: CatsService,
    ) {}

    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [CreateCatDto])
    async cats() {
        return this.catsSerivce.findAll();
    }

    @Mutation(() => [CreateCatDto])
    async createCat(@Args('input') input: CreateCatInput) {
        return this.catsSerivce.create(input);
    }
}
