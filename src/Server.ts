import App from './App';
import 'dotenv/config';

const app = new App();

app.init().listen(process.env.PORT ?? 5000, ()=> {
    console.log('App Rodando');
});