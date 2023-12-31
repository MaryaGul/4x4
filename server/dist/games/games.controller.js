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
exports.GamesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_game_dto_1 = require("./dto/create-game.dto");
const get_games_dto_1 = require("./dto/get-games.dto");
const games_model_1 = require("./games.model");
const games_service_1 = require("./games.service");
let GamesController = class GamesController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    createGame(dto) {
        return this.gameService.create(dto);
    }
    getGamesByUser(dto) {
        return this.gameService.getGamesByUser(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create game' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: games_model_1.Game }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_dto_1.CreateGameDto]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "createGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get games by user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: games_model_1.Game }),
    (0, common_1.Post)('/store'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_games_dto_1.GetGamesDto]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "getGamesByUser", null);
GamesController = __decorate([
    (0, common_1.Controller)('games'),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesController);
exports.GamesController = GamesController;
//# sourceMappingURL=games.controller.js.map