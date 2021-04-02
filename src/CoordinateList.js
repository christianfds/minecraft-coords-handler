import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';


export default class CoordinateList extends React.Component {
	render() {
		const locations = this.props.locations;
		return (
			<Box>
				<List>
				{
					locations.map(loc => (
						<ListItem button key={loc._id}>
							<ListItemText
								primary={loc.nome}
								secondary={"x=" + loc.coordinates.x + " y= " + loc.coordinates.y + " z= " + loc.coordinates.z}>
							</ListItemText>
						</ListItem>
					))
				}
				</List>
			</Box>
		)
	}
}
