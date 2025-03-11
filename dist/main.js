"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./configs/config");
const api_router_1 = require("./routers/api.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", api_router_1.apiRouter);
const dbConnection = async () => {
    let dbCon = false;
    while (!dbCon) {
        try {
            console.log('Connecting to DB...');
            await mongoose_1.default.connect(config_1.config.MONGO_URI);
            dbCon = true;
            console.log('Database available!!!');
        }
        catch (e) {
            console.log('Database unavailable, wait 3 seconds');
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
};
const start = async () => {
    try {
        await dbConnection();
        app.listen(config_1.config.PORT, () => {
            console.log(`Server listening on ${config_1.config.PORT}`);
        });
    }
    catch (e) {
        console.log(e);
    }
};
start();
