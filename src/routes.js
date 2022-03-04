import { Router } from "express"; // importr apenas o Routers do express

import UC from "./app/controllers/UserController";

import PC from "./app/controllers/ProdutoController";

import SC from "./app/controllers/SessionController";

const cors = require("cors");

const routes = new Router();

/////////////////////////////USUARIO///////////////////////////////////////


routes.post("/user", cors() , UC.store);

routes.post("/login", cors() , SC.store);


/////////////////////////////PRODUTO///////////////////////////////////////


routes.post("/produto", cors(), PC.store);

export default routes;