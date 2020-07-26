const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

//Routes
const Routes = require("../api/routes");
const UserRoutes = require("../api/routes/user.routes");

//Bussiness
const { UserBussiness } = require("../domain");

//Controllers
const { UserController } = require("../api/controllers");

//Services
const { UserService } = require("../services");

//Repositories
const { UserRepository } = require("../dal/repositories");

//Database
const db = require("../dal/entities");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    UserController: asClass(UserController).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    UserBussiness: asClass(UserBussiness).singleton(),
  });

module.exports = container;
