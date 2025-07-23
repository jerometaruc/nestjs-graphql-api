import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { Cat } from "./cats.schema";
import { CreateCatInput } from "./dto/create-cat.input";
import { UpdateCatInput } from "./dto/update-cat.input";

@Resolver()
export class CatsResolver {
    constructor(
        private catsService: CatsService,
    ) {}

    @Query(() => [Cat])
    async getAllCats() {
        return this.catsService.findAll();
    }

    @Query(() => Cat, { nullable: true })
    async getCat(@Args('id') id: string) {
        return this.catsService.findById(id);
    }

    @Mutation(() => Cat, { nullable: true })
    async updateCat(
        @Args('id') id: string,
        @Args('updateCatInput') updateCatInput: UpdateCatInput
    ) {
        return this.catsService.update(id, updateCatInput);
    }

    @Mutation(() => Cat)
    async deleteCat(@Args('id') id: string) {
        return this.catsService.delete(id);
    }

    @Mutation(() => Cat)
    async createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
        return this.catsService.create(createCatInput);
    }
}
