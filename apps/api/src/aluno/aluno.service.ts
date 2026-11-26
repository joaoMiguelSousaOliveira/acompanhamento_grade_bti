import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';

@Injectable()
export class AlunoService {
  private prisma: PrismaClient;

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    this.prisma = new PrismaClient({ adapter });
  }

  async create(dto: CreateAlunoDto) {
    try {
      return await this.prisma.aluno.create({
        data: {
          matricula: dto.matricula,
          nome: dto.nome,
          email: dto.email,
          idEstrutura: dto.idEstrutura ?? 0n,
        },
      });
    } catch (error: unknown) {
      const err = error as { code?: string };
      if (err.code === 'P2002') {
        throw new ConflictException('Matrícula ou email já cadastrados');
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.aluno.findMany({
      include: {
        estrutura: true,
      },
      orderBy: { nome: 'asc' },
    });
  }

  async findOne(matricula: string) {
    const aluno = await this.prisma.aluno.findUnique({
      where: { matricula },
      include: {
        estrutura: true,
        concluidos: { include: { componente: true } },
        acompanhamentos: { include: { enfase: true } },
        credencial: true,
        sessoes: true,
      },
    });
    if (!aluno) {
      throw new NotFoundException(`Aluno com matrícula ${matricula} não encontrado`);
    }
    return aluno;
  }

  async update(matricula: string, dto: UpdateAlunoDto) {
    await this.findOne(matricula);
    try {
      return await this.prisma.aluno.update({
        where: { matricula },
        data: {
          nome: dto.nome,
          email: dto.email,
          idEstrutura: dto.idEstrutura,
        },
      });
    } catch (error: unknown) {
      const err = error as { code?: string };
      if (err.code === 'P2002') {
        throw new ConflictException('Email já cadastrado');
      }
      throw error;
    }
  }

  async remove(matricula: string) {
    await this.findOne(matricula);
    return this.prisma.aluno.delete({ where: { matricula } });
  }
}