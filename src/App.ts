import express from 'express';
import UserRoute from './infra/routes/index.route';

class App {
    public server: express.Application;
    constructor(){
        this.server = express();
        this.routes();
    }

    public init(): express.Application{
        return this.server;
    }

    private routes(){
        this.server.use(...UserRoute);
    }
}

export default App;