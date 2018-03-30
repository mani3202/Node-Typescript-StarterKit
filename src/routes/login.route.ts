import {Router,Request,Response,NextFunction} from 'express';
import {loginCheck} from '../services/login.service';
const routes:Router = Router();

routes.post('/login',(req:Request,res:Response,next:NextFunction) =>
{
    loginCheck(req,res,next,(response)=>
{

    res.send('<h1>'+response+'</h1>');
})
})

export const Loginroute = routes;