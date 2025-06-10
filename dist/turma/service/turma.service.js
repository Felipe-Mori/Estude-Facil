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
exports.TurmaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const turma_entity_1 = require("../entity/turma.entity");
let TurmaService = class TurmaService {
    constructor(turmaRepository) {
        this.turmaRepository = turmaRepository;
    }
    async findAll() {
        return await this.turmaRepository.find();
    }
    async findOne(id) {
        const turma = await this.turmaRepository.findOne({
            where: { turma: id },
        });
        if (!turma) {
            throw new common_1.HttpException(`Turma não encontrada.`, common_1.HttpStatus.NOT_FOUND);
        }
        return turma;
    }
    async create(createTurmaDto) {
        try {
            console.log("batata frita ", createTurmaDto);
            const saveTurma = this.turmaRepository.create(createTurmaDto);
            console.log("batata sote ", saveTurma);
            return await this.turmaRepository.save({ professor: createTurmaDto.userUsuario, ...createTurmaDto });
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.HttpException('Turma já cadastrada.', common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException('Erro ao criar o registro. Tente novamente mais tarde.', common_1.HttpStatus.INTERNAL_SERVER_ERROR + error);
            }
        }
    }
    async update(id, updateTurmaDto) {
        const result = await this.turmaRepository.update(id, updateTurmaDto);
        if (result.affected === 0) {
            throw new common_1.HttpException(`Turma não encontrada.`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async delete(id) {
        const result = await this.turmaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.HttpException(`Turma não encontrada.`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.TurmaService = TurmaService;
exports.TurmaService = TurmaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(turma_entity_1.Turma)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TurmaService);
//# sourceMappingURL=turma.service.js.map