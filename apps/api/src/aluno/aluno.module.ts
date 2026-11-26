import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller.js';
import { AlunoService } from './aluno.service.js';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService],
  exports: [AlunoService],
})
export class AlunoModule {}