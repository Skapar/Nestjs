import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/main';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() courseData: CourseDto) {
    return this.coursesService.create(courseData);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() courseData: CourseDto) {
    return this.coursesService.update(+id, courseData);
  }

  @Delete(':id')
  remove(@Param('id') courseId: number) {
    return this.coursesService.remove(courseId);
  }
}
