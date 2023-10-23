import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CourseDto, UpdateCourseDto, DeletedCourseDto } from './dto/main';
import { Courses } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(courseData: CourseDto) {
    return this.prisma.courses.create({ data: courseData });
  }

  async findOne(id: number | string): Promise<Courses | null> {
    const courseid = Number(id);
    const course = await this.prisma.courses.findFirst({
      where: { id: courseid },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return course;
  }

  async update(
    id: number,
    courseData: UpdateCourseDto,
  ): Promise<Courses | null> {
    return this.prisma.courses.update({ where: { id }, data: courseData });
  }

  async remove(id: number | string): Promise<DeletedCourseDto | null> {
    const courseId = Number(id);
    const delcourse = await this.findOne(courseId);
    if (!delcourse) {
      throw new NotFoundException('Not found');
    }
    await this.prisma.courses.delete({
      where: { id: courseId },
    });
    return delcourse;
  }
}
