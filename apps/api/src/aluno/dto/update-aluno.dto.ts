import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class UpdateAlunoDto {
  @IsOptional()
  @IsString()
  @Length(1, 120, { message: 'Nome deve ter entre 1 e 120 caracteres' })
  nome?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email deve ser um endereço válido' })
  email?: string;

  @IsOptional()
  idEstrutura?: bigint;
}