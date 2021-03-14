import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    spacing: {
        margin: theme.spacing(1),
        width: '25ch',
    }
}));

export default function CordinateForm() {
    const classes = useStyles();

    return (
        <Box>
            <form className={classes.root} noValidate autoComplete="off">
                <Box>
                    <TextField label="Nome" variant="outlined" />
                </Box>
                <FormLabel className={classes.spacing} component="legend">Coordenadas</FormLabel>
                <Box>
                    <TextField label="X" variant="outlined" />
                    <TextField label="Y" variant="outlined" />
                    <TextField label="Z" variant="outlined" />
                </Box>
                <Button className={classes.spacing} variant="contained" color="primary">
                    Salvar
                </Button>
            </form>
        </Box>

    )
}