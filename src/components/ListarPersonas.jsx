import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import WatchIcon from '../assets/images/ver.png';
import EditIcon from '../assets/images/escritura.png';
import DeleteIcon from '../assets/images/borrar.png';
import AddIcon from '../assets/images/agregar.png';
import AgregarPersona from './AgregarPersona';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const baseUrl = "http://localhost:8080/api/";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function ListarPersonas() {

    const [listaPersonas, setListaPersonas] = useState([]);
    const [mostrarAlertaEliminar, setMostrarAlertaEliminar] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        consultarPersonas();
    }, []);

    useEffect(() => {
        consultarPersonas();
    }, [mostrarAlertaEliminar]);

    const consultarPersonas = () => {
        Axios.get(baseUrl + "listarPersonas").then((res) => {
            setListaPersonas(res.data);
        });
    }

    const eliminarPersonas = (id) => {
        Axios.delete(baseUrl + 'persona/' + id).then( (res) => {
            setMostrarAlertaEliminar(true);
            setTimeout( () => {
            navigate('/personas');
            setMostrarAlertaEliminar(false);
            }, 2000);
        })
    }

    return (
        <>
            <div id='divTitulo'>
                <Button onClick={ () => navigate('/personas/agregarPersona') }> Agregar <span> <img src={AddIcon} width={28} alt='AddIcon' title='Agregar Persona' /> </span> </Button>
                <h1> {listaPersonas.length == 0 ? 'No Hay Personas Para Listar' : 'Lista de Personas'} </h1>
            </div>
            {   mostrarAlertaEliminar &&
                <Alert severity="error">
                    <AlertTitle> Persona Eliminada Con Exito!. </AlertTitle>
                </Alert>
            }
            <div className='tableStyle'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell> # ID </StyledTableCell>
                                <StyledTableCell align="center"> Nombre </StyledTableCell>
                                <StyledTableCell align="center"> Apellido Paterno </StyledTableCell>
                                <StyledTableCell align="center"> Apellido Materno </StyledTableCell>
                                <StyledTableCell align="center"> Identificación </StyledTableCell>
                                <StyledTableCell align="center"> Acciones </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listaPersonas.map((persona) => (
                                <StyledTableRow key={persona.idPersona}>
                                    <StyledTableCell component="th" scope="row">
                                        {persona.idPersona}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{persona.nombre}</StyledTableCell>
                                    <StyledTableCell align="center">{persona.apellidoPaterno}</StyledTableCell>
                                    <StyledTableCell align="center">{persona.apellidoMaterno}</StyledTableCell>
                                    <StyledTableCell align="center">{persona.identificacion}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button style={{ marginRight: '12px' }} onClick={ () => navigate('/personas/verPersona/' + persona.idPersona) }> <img src={WatchIcon} width={40} alt='Watch.png' title='Watch' /> </Button>
                                        <Button style={{ marginRight: '12px' }} onClick={ () => navigate('/personas/editarPersona/' + persona.idPersona) } color='secondary'> <img src={EditIcon} width={40} alt='Edit.png' title='Edit' /> </Button>
                                        <Button color='error' onClick={ () => { eliminarPersonas(persona.idPersona)} }> <img src={DeleteIcon} width={50} alt='Delete.png' title='Delete' /> </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>

    );
}