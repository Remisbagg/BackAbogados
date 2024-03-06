import {Request, Response} from 'express';
import Abogado from '../models/abogado';

export const postUsuarios = async (req: Request, res: Response)=>{
    const {body} = req;

    try {
        await Abogado.create(body);

        res.json({
            msg: 'El abogado fue agragado'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un Erro comuniquese con soporte'
        })
    }

    
}


export const updateUsuarios = async (req: Request, res: Response)=>{
    const {body} = req;
    const {id} = req.params;

    try {
        const abogado = await Abogado.findByPk(id);
        if(abogado) {
            await abogado.update(body);
            res.json({
                msg: 'El usuario fue actualizado'
            })
        }else{
            res.status(404).json({
                msg: 'No se encontro el usuario'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un Erro comuniquese con soporte'
        })
    }
    
}