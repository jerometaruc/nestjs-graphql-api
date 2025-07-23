import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { Cat } from "./cats.schema";
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

    @Query(() => [Cat])
    async cats() {
        return this.catsSerivce.findAll();
    }

    @Mutation(() => Cat)
    async createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
        return this.catsSerivce.create(createCatInput);
    }
}
