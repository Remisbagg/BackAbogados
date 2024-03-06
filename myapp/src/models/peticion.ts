import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Peticion = db.define('peticione', {
    pet_Id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    pet_descripcion:{
        type: DataTypes.STRING
    },
    pet_fecha_registro:{
        type: DataTypes.DATE
    },
    pet_fecha_respuesta:{
        type: DataTypes.DATE
    },
    tipo_pe_id:{
        type: DataTypes.INTEGER
    },
    abo_documento:{
        type: DataTypes.INTEGER
    },
    id_clientes:{
        type: DataTypes.INTEGER
    },
    seg_id:{
        type: DataTypes.INTEGER
    },
    pet_prioridad:{
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});


export default Peticion;