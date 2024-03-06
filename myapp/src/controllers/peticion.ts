import {Request, Response} from 'express';
import Peticion from '../models/peticion';

export const getPeticiones = async (req: Request, res: Response)=>{
    const listPeticion = await Peticion.findAll({
        attributes: ['pet_Id', 'pet_descripcion', 'pet_fecha_registro', 'pet_fecha_respuesta', 'tipo_pe_id', 'abo_documento', 'id_clientes', 'seg_id', 'pet_prioridad']
    });

    res.json(listPeticion)
}

export const getPeticion = async (req: Request, res: Response)=>{
    const {id} = req.params;
    const peticion = await Peticion.findByPk(id, {
        attributes: ['pet_Id', 'pet_descripcion', 'pet_fecha_registro', 'pet_fecha_respuesta', 'tipo_pe_id', 'abo_documento', 'id_clientes', 'seg_id', 'pet_prioridad']});

    if(peticion){
        res.json(peticion)
    }else{
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }

}