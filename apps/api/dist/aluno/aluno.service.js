var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
let AlunoService = class AlunoService {
    prisma;
    constructor() {
        const connectionString = process.env.DATABASE_URL;
        const pool = new Pool({ connectionString });
        const adapter = new PrismaPg(pool);
        this.prisma = new PrismaClient({ adapter });
    }
    async create(dto) {
        try {
            return await this.prisma.aluno.create({
                data: {
                    matricula: dto.matricula,
                    nome: dto.nome,
                    email: dto.email,
                    idEstrutura: dto.idEstrutura ?? 0n,
                },
            });
        }
        catch (error) {
            const err = error;
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
    async findOne(matricula) {
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
    async update(matricula, dto) {
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
        }
        catch (error) {
            const err = error;
            if (err.code === 'P2002') {
                throw new ConflictException('Email já cadastrado');
            }
            throw error;
        }
    }
    async remove(matricula) {
        await this.findOne(matricula);
        return this.prisma.aluno.delete({ where: { matricula } });
    }
};
AlunoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], AlunoService);
export { AlunoService };
//# sourceMappingURL=aluno.service.js.map