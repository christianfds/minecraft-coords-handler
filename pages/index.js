import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CoordinateForm  from "../src/CoordinateForm";
import Header from '../src/Header';


export default function Home() {
  return (
    <Box>
      <Header />
      <Box marginTop>
        <Container>

          <Paper>
            <Grid container>
              <Grid xs="8">
                <CoordinateForm />
              </Grid>
              <Grid xs="4">
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
              </Grid>
            </Grid>
          </Paper>

        </Container>
      </Box>

    </Box>
  )
}
