import express from 'express';
import UserRoute from './infra/routes/index.route';

// const App = express();

// App.get('/', (req, res)=>{
//     return res.send('ola dev');
// });

// export {App};


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