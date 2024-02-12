import express from 'express';
import cors from 'cors';
import UserRoute from './infra/routes/index.route';
import './infra/database/database';

class App {
    public server: express.Application;
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    public init(): express.Application{
        return this.server;
    }


    private middlewares(): void {
        this.server.use(express.json({}));
        this.server.use(
            express.urlencoded({
                extended: true,
            })
        );
        this.server.use(cors());
    }

    private routes(){
        this.server.use(...UserRoute);
    }
}

export default App;