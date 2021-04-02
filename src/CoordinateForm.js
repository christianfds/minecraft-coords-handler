import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
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
});

const default_form_data = {
	nome: '',
	x: '',
	y: '',
	z: '',
};


class CordinateForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			disableSubmit: false,
			data: default_form_data
		};
	}

	SaveClick = async (event) => {
		this.setState({
			disableSubmit: true
		})

		await this.props.onSubmit(this.state.data)

		this.setState({
			disableSubmit: false,
			data: default_form_data
		})
	}

	handleInputChange = (event) => {
		const target = event.target;
    	const name = target.name;
		const value = target.value;

    this.setState(prevState => {
			let data = Object.assign({}, prevState.data);
			data[name] = value;
			return {data};
    });
	}

	render() {
		const {classes} = this.props
		return (
			<Box>
				<form className={classes.root} noValidate autoComplete="off">
					<Box>
						<TextField label="Nome" name="nome" variant="outlined" value={this.state.data.nome} onChange={this.handleInputChange} />
					</Box>
					<FormLabel className={classes.spacing} component="legend">Coordenadas</FormLabel>
					<Box>
						<TextField label="X" name="x" variant="outlined" value={this.state.data.x} onChange={this.handleInputChange} />
						<TextField label="Y" name="y" variant="outlined" value={this.state.data.y} onChange={this.handleInputChange} />
						<TextField label="Z" name="z" variant="outlined" value={this.state.data.z} onChange={this.handleInputChange} />
					</Box>
					<Button className={classes.spacing} variant="contained" color="primary" onClick={this.SaveClick} disabled={this.state.disableSubmit}>
						Salvar
					</Button>
				</form>
			</Box>
		)
	}
}

export default withStyles(styles)(CordinateForm)