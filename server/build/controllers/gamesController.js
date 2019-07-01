"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.send('my games')
            //res.json({text:'listing games'});
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json(games);
        });
    }
    getOne(req, res) {
        res.json({ text: 'this is game ' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'game saved' });
        });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'updating a game ' + req.params.id });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
