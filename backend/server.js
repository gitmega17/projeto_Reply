const app = require('./app');
const criandoTabelaUsuario = require('./config_init/createTable_users');
const criandoTabelasMotores = require('./config_init/createTables_sensores');
const PORTA = 3000;

criandoTabelaUsuario();
criandoTabelasMotores();

app.listen(PORTA, () => {
    console.log(`Servidor conectado e rodando em http://localhost:${PORTA}`);
});