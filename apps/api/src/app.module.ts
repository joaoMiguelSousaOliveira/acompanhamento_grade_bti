import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AlunoModule } from './aluno/aluno.module.js';

@Module({
  imports: [AlunoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}