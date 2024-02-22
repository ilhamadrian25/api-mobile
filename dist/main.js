"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Database_1 = __importDefault(require("./config/Database"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.listen(5000, () => {
    console.log('server listening on port 5000');
    connectionDatabase().then((connection) => { });
});
function connectionDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Database_1.default.authenticate();
            yield Database_1.default.sync({ force: true });
            console.log('Database authenticated');
        }
        catch (error) {
            console.log('error', error);
        }
    });
}
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(routes_1.default);
