import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AlunoService } from './aluno.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateAlunoDto) {
    return this.alunoService.create(dto);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get(':matricula')
  findOne(@Param('matricula') matricula: string) {
    return this.alunoService.findOne(matricula);
  }

  @Put(':matricula')
  update(@Param('matricula') matricula: string, @Body() dto: UpdateAlunoDto) {
    return this.alunoService.update(matricula, dto);
  }

  @Delete(':matricula')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('matricula') matricula: string) {
    return this.alunoService.remove(matricula);
  }
}