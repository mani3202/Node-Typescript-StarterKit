import {Router,Request,Response,NextFunction} from 'express';


export let loginCheck = (req:Request,res:Response,next:NextFunction,callback:any)=>
{
    callback('Login');
}

