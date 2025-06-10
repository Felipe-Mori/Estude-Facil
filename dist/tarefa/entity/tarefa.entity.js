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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
const turma_entity_1 = require("../../turma/entity/turma.entity");
const typeorm_1 = require("typeorm");
let Tarefa = class Tarefa {
};
exports.Tarefa = Tarefa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tarefa.prototype, "tarefa", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Tarefa.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Tarefa.prototype, "entrega", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tarefa.prototype, "data_de_entrega", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => turma_entity_1.Turma, turma => turma.turma),
    __metadata("design:type", Array)
], Tarefa.prototype, "turma", void 0);
exports.Tarefa = Tarefa = __decorate([
    (0, typeorm_1.Entity)("tarefa")
], Tarefa);
//# sourceMappingURL=tarefa.entity.js.map