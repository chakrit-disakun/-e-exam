import { Injectable, NotFoundException,InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Leave, LeaveDocument } from './schemas/leave.schema';
import { Model } from 'mongoose';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Injectable()
export class LeaveService {
  constructor(
    @InjectModel(Leave.name) private LeaveModel: Model<LeaveDocument>,
  ) {}

  create(createLeaveDto: CreateLeaveDto): Promise<Leave>  {
    const createdLeave = new this.LeaveModel(createLeaveDto);
    return createdLeave.save();
  }

  async findAll(): Promise<Leave[]> {
    return this.LeaveModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} leave`;
  }

  // async update(
  //   id: string,
  //   updateProductDto: UpdateProductDto,
  // ): Promise<Product> {
  //   return this.productModel
  //     .findByIdAndUpdate(id, updateProductDto, { new: true })
  //     .exec();
  // }

  update(id: string, updateLeaveDto: UpdateLeaveDto): Promise<Leave>  {
    return this.LeaveModel.findByIdAndUpdate(id, updateLeaveDto, { new: true }).exec();
  }

  async delete(id: string): Promise<{ message: string }> {
    try {
      const result = await this.LeaveModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Leave with ID ${id} not found`);
      }
      return { message: 'Delete Successful' };
    } catch (error) {
      // Handle or transform the error as needed
      throw new InternalServerErrorException(
        'An error occurred during deletion',
      );
    }
  }
}
