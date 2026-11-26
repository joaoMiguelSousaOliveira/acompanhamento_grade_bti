var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';
export class UpdateAlunoDto {
    nome;
    email;
    idEstrutura;
}
__decorate([
    IsOptional(),
    IsString(),
    Length(1, 120, { message: 'Nome deve ter entre 1 e 120 caracteres' }),
    __metadata("design:type", String)
], UpdateAlunoDto.prototype, "nome", void 0);
__decorate([
    IsOptional(),
    IsEmail({}, { message: 'Email deve ser um endereço válido' }),
    __metadata("design:type", String)
], UpdateAlunoDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", BigInt)
], UpdateAlunoDto.prototype, "idEstrutura", void 0);
//# sourceMappingURL=update-aluno.dto.js.map