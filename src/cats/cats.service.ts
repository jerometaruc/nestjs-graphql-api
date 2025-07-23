import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cats.schema';
import { CreateCatInput } from './dto/create-cat.input';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) { }

    async create(createCatInput: CreateCatInput): Promise<Cat> {
        const createdCat = new this.catModel(createCatInput);
        return createdCat.save();
    }

    async delete(id: string): Promise<Cat | null> {
        return this.catModel.findByIdAndDelete(id).exec();
    }

    async findById(id: string): Promise<Cat | null> {
        return this.catModel.findById(id).exec();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
}
