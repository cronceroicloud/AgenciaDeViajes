import {Sequelize} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()
//VAriables de entorno que antes creo un fichero llamado .env en la raiz con la variables
//Luego con Git ingnoras ese archivo.
//Debe estar este import sino no va
//NUNCA USES USER PORQUE ES UNA VARIABLE DE ENTORNO YA DEFINIDA

const db=new Sequelize('ccrp06_agencia','alumno', 'AlumnoSanz$1', {
    host: 'iasanz.synology.me',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;
