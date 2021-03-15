import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CoordinateForm  from "../src/CoordinateForm";
import CoordinateList  from "../src/CoordinateList";
import Header from '../src/Header';


export default function Home() {
  return (
    <Box>
      <Header />
      <Container>

        <Paper>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CoordinateForm />
            </Grid>
            <Grid item xs={4}>
              <CoordinateList />
            </Grid>
          </Grid>
        </Paper>

      </Container>
    </Box>
  )
}
