import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Abogado = db.define('Abogado', {
    abo_Id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    abo_documento:{
        type: DataTypes.INTEGER
    },
    abo_nombres:{
        type: DataTypes.STRING
    },
    abo_apellidos:{
        type: DataTypes.STRING
    },
    abo_status:{
        type: DataTypes.INTEGER
    },
    abo_fecha_registro:{
        type: DataTypes.DATE
    },
    abo_password:{
        type: DataTypes.STRING
    },
    abo_correo:{
        type: DataTypes.STRING
    }
    
},{
    createdAt: false,
    updatedAt: false
});

export default Abogado;