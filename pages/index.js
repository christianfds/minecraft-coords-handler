import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CoordinateForm  from "../src/CoordinateForm";
import CoordinateList  from "../src/CoordinateList";
import Header from '../src/Header';
import React from 'react';


class Home extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          locations: []
      };
    }
  
  
  updateLocations = async () => {
    const response = await fetch('api/location');
    const data = await response.json();
    this.setState({ locations: data })
  }


  componentDidMount = async () => {
    // GET request using fetch with async/await
    await this.updateLocations()
  }

  submitNewLocation = async (data) => {
    let data_to_send = {
      nome: data.nome,
      coordinates: {
        x: data.x,
        y: data.y,
        z: data.z,
      }
    }
    const response = await fetch('api/location', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data_to_send)
    })

    console.log(response);

    await this.updateLocations()
  }

  render (){
    const { locations } = this.state;

    return(
      <Box>
        <Header />
        <Container>

          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <CoordinateForm onSubmit={this.submitNewLocation} />
              </Grid>
              <Grid item xs={4}>
                <CoordinateList locations={locations} />
              </Grid>
            </Grid>
          </Paper>

        </Container>
      </Box>
    )
  }
}


export default Home