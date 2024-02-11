import App from './App';

const app = new App();

app.init().listen(3333, ()=> {
    console.log('App Rodando');
});