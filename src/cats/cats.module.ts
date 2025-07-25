import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { Cat, CatSchema } from './cats.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsService } from './cats.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    providers: [CatsResolver, CatsService],
})
export class CatsModule { }
