import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Axios from 'axios';

const baseUrl = "http://localhost:8080/api/";

const AgregarPersona = () => {

    const [ persona, setPersona ] = useState({
        nombre : '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        identificacion: '',
    });

    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const navigate = useNavigate();

    const guardarPersona = () => {
        Axios.post(baseUrl + 'guardarPersona', persona).then( (res) => {
            if ( res ) {
                setMostrarAlerta(true);
                setTimeout( () => {
                navigate('/personas');
                }, 2000);
            }
        })
    }

    const personaHandlerEvent = (e) => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <h1> Agregar Persona </h1>
        {
            mostrarAlerta &&
            <Alert onClose={() => {}}> Persona Registrada Con Exito!</Alert>
        }
        <div>
            <div id='form'>
                <TextField 
                    label='Nombre' 
                    style={{margin: '12px'}}
                    name='nombre'
                    value={ persona.nombre }
                    onChange={ personaHandlerEvent }
                />
                <TextField 
                    label='Apellido Paterno' 
                    style={{margin: '12px'}}
                    name='apellidoPaterno'
                    value={ persona.apellidoPaterno }
                    onChange={ personaHandlerEvent }
                />
                <TextField 
                    label='Apellido Materno' 
                    style={{margin: '12px'}}
                    name='apellidoMaterno'
                    value={ persona.apellidoMaterno }
                    onChange={ personaHandlerEvent }
                />
                <TextField 
                    label='Identificación' 
                    style={{margin: '12px'}}
                    name='identificacion'
                    value={ persona.identificacion }
                    onChange={ personaHandlerEvent }
                />
            </div>

            <div>
                <Button 
                    variant='contained' 
                    color='primary'
                    onClick={ guardarPersona }
                > Agregar Persona </Button>
            </div>
        </div>
    </div>
  )
}

export default AgregarPersona