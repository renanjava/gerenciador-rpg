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
exports.ItemMagicoController = void 0;
const common_1 = require("@nestjs/common");
const item_magico_service_1 = require("./item-magico.service");
const create_item_magico_dto_1 = require("./dto/create-item-magico.dto");
const update_item_magico_dto_1 = require("./dto/update-item-magico.dto");
let ItemMagicoController = class ItemMagicoController {
    itemMagicoService;
    constructor(itemMagicoService) {
        this.itemMagicoService = itemMagicoService;
    }
    create(createItemMagicoDto) {
        return this.itemMagicoService.create(createItemMagicoDto);
    }
    findAll() {
        return this.itemMagicoService.findAll();
    }
    findOne(id) {
        return this.itemMagicoService.findOne(+id);
    }
    update(id, updateItemMagicoDto) {
        return this.itemMagicoService.update(+id, updateItemMagicoDto);
    }
    remove(id) {
        return this.itemMagicoService.remove(+id);
    }
};
exports.ItemMagicoController = ItemMagicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_magico_dto_1.CreateItemMagicoDto]),
    __metadata("design:returntype", void 0)
], ItemMagicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemMagicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemMagicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_item_magico_dto_1.UpdateItemMagicoDto]),
    __metadata("design:returntype", void 0)
], ItemMagicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemMagicoController.prototype, "remove", null);
exports.ItemMagicoController = ItemMagicoController = __decorate([
    (0, common_1.Controller)('item-magico'),
    __metadata("design:paramtypes", [item_magico_service_1.ItemMagicoService])
], ItemMagicoController);
//# sourceMappingURL=item-magico.controller.js.map