"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurmaController = void 0;
const common_1 = require("@nestjs/common");
const turma_dto_1 = require("../dto/turma.dto");
const turma_service_1 = require("../service/turma.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_strategy_1 = require("../../auth/guard/jwt-auth.guard.strategy");
let TurmaController = class TurmaController {
    constructor(turmaService) {
        this.turmaService = turmaService;
    }
    async findAll() {
        return this.turmaService.findAll();
    }
    async findOne(id) {
        return this.turmaService.findOne(id);
    }
    async create(createTurmaDto) {
        return this.turmaService.create(createTurmaDto);
    }
    async update(id, updateTurmaDto) {
        return this.turmaService.update(id, updateTurmaDto);
    }
    async delete(id) {
        return this.turmaService.delete(id);
    }
};
exports.TurmaController = TurmaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TurmaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurmaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [turma_dto_1.CreateTurmaDto]),
    __metadata("design:returntype", Promise)
], TurmaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, turma_dto_1.UpdateTurmaDto]),
    __metadata("design:returntype", Promise)
], TurmaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurmaController.prototype, "delete", null);
exports.TurmaController = TurmaController = __decorate([
    (0, swagger_1.ApiTags)('turma'),
    (0, common_1.UseGuards)(jwt_auth_guard_strategy_1.JwtAuthGuard),
    (0, common_1.Controller)('turma'),
    __metadata("design:paramtypes", [turma_service_1.TurmaService])
], TurmaController);
//# sourceMappingURL=turma.controller.js.map