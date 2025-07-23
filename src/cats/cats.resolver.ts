import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { Cat } from "./cats.schema";
import { CreateCatInput } from "./dto/create-cat.input";

@Resolver()
export class CatsResolver {
    constructor(
        private catsSerivce: CatsService,
    ) {}

    @Query(() => [Cat])
    async cats() {
        return this.catsSerivce.findAll();
    }

    @Query(() => Cat, { nullable: true })
    async getCat(@Args('id') id: string) {
        return this.catsSerivce.findById(id);
    }

    @Mutation(() => Cat)
    async deleteCat(@Args('id') id: string) {
        return this.catsSerivce.delete(id);
    }

    @Mutation(() => Cat)
    async createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
        return this.catsSerivce.create(createCatInput);
    }
}
