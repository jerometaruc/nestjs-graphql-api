import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CatDto } from "./dto/cat.dto";
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

    @Query(() => [CatDto])
    async cats() {
        return this.catsSerivce.findAll();
    }

    @Mutation(() => CatDto)
    async createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
        return this.catsSerivce.create(createCatInput);
    }
}
