import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @Length(11, 11, { message: 'Matrícula deve ter exatamente 11 caracteres' })
  matricula: string;

  @IsString()
  @Length(1, 120, { message: 'Nome deve ter entre 1 e 120 caracteres' })
  nome: string;

  @IsEmail({}, { message: 'Email deve ser um endereço válido' })
  email: string;

  @IsOptional()
  idEstrutura?: bigint;
}