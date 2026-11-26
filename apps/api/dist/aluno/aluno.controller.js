var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, } from '@nestjs/common';
import { AlunoService } from './aluno.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
let AlunoController = class AlunoController {
    alunoService;
    constructor(alunoService) {
        this.alunoService = alunoService;
    }
    create(dto) {
        return this.alunoService.create(dto);
    }
    findAll() {
        return this.alunoService.findAll();
    }
    findOne(matricula) {
        return this.alunoService.findOne(matricula);
    }
    update(matricula, dto) {
        return this.alunoService.update(matricula, dto);
    }
    remove(matricula) {
        return this.alunoService.remove(matricula);
    }
};
__decorate([
    Post(),
    HttpCode(HttpStatus.CREATED),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAlunoDto]),
    __metadata("design:returntype", void 0)
], AlunoController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlunoController.prototype, "findAll", null);
__decorate([
    Get(':matricula'),
    __param(0, Param('matricula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlunoController.prototype, "findOne", null);
__decorate([
    Put(':matricula'),
    __param(0, Param('matricula')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateAlunoDto]),
    __metadata("design:returntype", void 0)
], AlunoController.prototype, "update", null);
__decorate([
    Delete(':matricula'),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, Param('matricula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlunoController.prototype, "remove", null);
AlunoController = __decorate([
    Controller('alunos'),
    __metadata("design:paramtypes", [AlunoService])
], AlunoController);
export { AlunoController };
//# sourceMappingURL=aluno.controller.js.map