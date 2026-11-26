import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
export declare class AlunoService {
    private prisma;
    constructor();
    create(dto: CreateAlunoDto): Promise<{
        matricula: string;
        nome: string;
        email: string;
        idEstrutura: bigint;
    }>;
    findAll(): Promise<({
        estrutura: {
            idEstrutura: bigint;
            codigo: string | null;
            nomeMatriz: string;
            anoEntradaVigor: number | null;
            semestreConclusaoIdeal: number | null;
            chTotalMinima: number;
            chOptativasMinima: number;
        };
    } & {
        matricula: string;
        nome: string;
        email: string;
        idEstrutura: bigint;
    })[]>;
    findOne(matricula: string): Promise<{
        estrutura: {
            idEstrutura: bigint;
            codigo: string | null;
            nomeMatriz: string;
            anoEntradaVigor: number | null;
            semestreConclusaoIdeal: number | null;
            chTotalMinima: number;
            chOptativasMinima: number;
        };
        concluidos: ({
            componente: {
                nome: string;
                codigo: string;
                idComponente: bigint;
                chTotal: number;
                modalidade: string;
                ativo: boolean;
            };
        } & {
            matricula: string;
            idComponente: bigint;
            semestreConclusao: string;
        })[];
        acompanhamentos: ({
            enfase: {
                nome: string;
                idEnfase: number;
            };
        } & {
            matricula: string;
            idEnfase: number;
            dataInicio: Date;
        })[];
        credencial: {
            matricula: string;
            senhaHash: string;
            atualizadoEm: Date;
        } | null;
        sessoes: {
            matricula: string;
            id: string;
            tokenHash: string;
            criadoEm: Date;
            expiraEm: Date;
            revogadoEm: Date | null;
        }[];
    } & {
        matricula: string;
        nome: string;
        email: string;
        idEstrutura: bigint;
    }>;
    update(matricula: string, dto: UpdateAlunoDto): Promise<{
        matricula: string;
        nome: string;
        email: string;
        idEstrutura: bigint;
    }>;
    remove(matricula: string): Promise<{
        matricula: string;
        nome: string;
        email: string;
        idEstrutura: bigint;
    }>;
}
