import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function CoordinateList() {
    return (
        <Box>
            <List>
                <ListItem button>
                    <ListItemText
                        primary="Casa"
                        secondary="x= y= z= ">
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemText
                        primary="Vila 1"
                        secondary="x= y= z= ">
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemText
                        primary="Vila 2"
                        secondary="x= y= z= ">
                    </ListItemText>
                </ListItem>

            </List>
        </Box>
    )
}
