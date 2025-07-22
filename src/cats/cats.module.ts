import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { Cat, CatSchema } from './cats.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    providers: [CatsResolver],
})
export class CatsModule { }
