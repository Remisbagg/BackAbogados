import express, {Application, Request, Response} from 'express';
import routePeticiones from '../routes/peticion';
import routeUsuarios from '../routes/abogado';
import db from '../db/connection';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT||'3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }
    routes(){
        this.app.get('/', (req: Request, res: Response)=>{
            res.json({
                msg: "API work"
            })
        })
        this.app.use('/api/peticiones', routePeticiones)
        this.app.use('/api/abogados', routeUsuarios)
    }

    midlewares(){
        //parseamos el body
        this.app.use(express.json())
    }

    async dbConnect(){

        try {
            await db.authenticate();
            console.log("base de datos conectada");
        } catch (error) {
            console.log(error);
            console.log("Error al conectarse la base de datos");
        }
        
    }
}

export default Server;