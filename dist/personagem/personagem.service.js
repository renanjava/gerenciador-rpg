"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemService = void 0;
const common_1 = require("@nestjs/common");
let PersonagemService = class PersonagemService {
    create(createPersonagemDto) {
        return 'This action adds a new personagem';
    }
    findAll() {
        return `This action returns all personagem`;
    }
    findOne(id) {
        return `This action returns a #${id} personagem`;
    }
    update(id, updatePersonagemDto) {
        return `This action updates a #${id} personagem`;
    }
    remove(id) {
        return `This action removes a #${id} personagem`;
    }
};
exports.PersonagemService = PersonagemService;
exports.PersonagemService = PersonagemService = __decorate([
    (0, common_1.Injectable)()
], PersonagemService);
//# sourceMappingURL=personagem.service.js.map