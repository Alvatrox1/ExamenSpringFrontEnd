import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white',
        backgroundColor: white
    }
});

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={3}>
                                <h3> Buscar Distribuidor </h3>
                                <ul id='zonaBusqueda'>
                                    <li> <TextField sx={{
                                        input: {
                                            color: "blue",
                                            background: "white"
                                        }
                                    }} 
                                    placeholder='Buscar'
                                    /> </li>
                                    <li> <Button style={ {marginTop: '12px' }} variant='contained'> Buscar </Button> </li>
                                </ul>
                            </Grid>
                            <Grid item xs={3}>
                                <h3> Compra Online </h3>
                                <ul id='zonaOnline'>
                                    <li> <a href=''> Tienda en Linea </a> </li>
                                    <li> <a href=''> Ayuda </a> </li>

                                </ul>
                            </Grid>
                            <Grid item xs={3}>
                                <h3> Comunidad </h3>
                                <ul id='zonaComunidad'>
                                    <li> <a href=''> Comunidad </a> </li>
                                    <li> <a href=''> Blog </a> </li>
                                    <li> <a href=''> Ayuda </a> </li>
                                </ul>
                            </Grid>
                            <Grid item xs={3}>
                                <h3> Noticias e Información </h3>
                                <ul id='zonaNoticias'>
                                    <li> <a href=''> Contacto </a> </li>
                                    <li> <a href=''> Centro de Atención </a> </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <hr></hr>
                <div>
                    <h2> AlvaNett &reg; All Rigths Reserved &copy; 2023 </h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer