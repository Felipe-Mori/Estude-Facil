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
exports.UpdateTarefaDto = exports.CreateTarefaDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateTarefaDto {
}
exports.CreateTarefaDto = CreateTarefaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' }),
    __metadata("design:type", String)
], CreateTarefaDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTarefaDto.prototype, "tarefa", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTarefaDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTarefaDto.prototype, "entrega", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTarefaDto.prototype, "data_de_entrega", void 0);
class UpdateTarefaDto extends (0, mapped_types_1.PartialType)(CreateTarefaDto) {
}
exports.UpdateTarefaDto = UpdateTarefaDto;
//# sourceMappingURL=tarefa.dto.js.map