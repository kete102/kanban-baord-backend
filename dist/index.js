"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-namespace */
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const boards_1 = require("./routes/boards");
const auth_1 = require("./routes/auth");
const tasks_1 = require("./routes/tasks");
const db_1 = require("./db/db");
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
(0, db_1.connectToDB)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['POST', 'GET', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/api/auth', auth_1.authRoutes);
app.use('/api/boards', boards_1.boardRoutes);
app.use('/api/tasks', tasks_1.tasksRoutes);
app.listen(port, () => {
    console.log(`Server lintening on port: ${port}`);
});
//# sourceMappingURL=index.js.map