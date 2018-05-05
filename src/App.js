import React, { Component } from 'react';
import Climb from './climb.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      climbsArray: [],
      locationToSearch: '',
      climbsToReturn: '',
      milesFromLocation: '',
      minDifficulty: '',
      maxDifficulty: ''
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    // variables for MapQuest api call
    const mapQuestKey = 'ttmWvZTB4NnABOjWmPBrcEClc5wVnQQM';
    const location = (this.state.locationToSearch).replace(/ /g, '');
    // variables for MP api call
    const mpKey = '111836580-3a6652ea1fbf0462e6afc9407be3481f';

    if(this.state.locationToSearch === '') {
      return alert('Please enter a location; the other fields are optional');
    } 
    else {
        axios
          .get('http://www.mapquestapi.com/geocoding/v1/address?key=' + mapQuestKey + '&location=' + location)
          .then(response => {
            const obj = { 
              maxDiff: this.state.maxDifficulty,
              minDiff: this.state.minDifficulty,
              maxDistance: this.state.milesFromLocation,
              maxResults: this.state.climbsToReturn
            }
            let query = '';
            Object.keys(obj).forEach(key => obj[key] !== '' ? query += `&${key}=${obj[key]}` : '')
            axios
              .get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=' 
                    + response.data.results[0].locations[0].latLng.lat 
                    + '&lon=' + response.data.results[0].locations[0].latLng.lng 
                    + '&key=' 
                    + mpKey
                    + query               
                  )  
              .then(response => response.data)
              .then(climbsArray => this.setState({ 
                climbsArray,
                locationToSearch: '',
                milesFromLocation: '',
                climbsToReturn: '',
                minDifficulty: '',
                maxDifficulty: ''
              })
            );  
        })
      .catch(error => {
        console.log(error);
      })   
    }
  }    

  emptyClimbsArrayOrNot = (climbsArrayLength) => {
    if(climbsArrayLength === 0) {
      return <div></div>
    } else {
        return this.state.climbsArray.routes.map(climb => (

          <Climb 
          img={climb.imgSmallMed}
          location={climb.location} 
          name={climb.name}
          pitches={climb.pitches}
          rating={climb.rating}
          stars={climb.stars}
          type={climb.type}
          url={climb.url}
          key={climb.id} />
        ))
    }
  }

  updateLocationToSearch = (e) => this.setState({locationToSearch: e.target.value});
  updateClimbsToReturn = (e) => this.setState({climbsToReturn: e.target.value});
  updateMilesFromLocation = (e) => this.setState({milesFromLocation: e.target.value});
  updateMinDifficulty = (e) => this.setState({minDifficulty: e.target.value});
  updateMaxDifficulty = (e) => this.setState({maxDifficulty: e.target.value });

  render() {
    return (
      <div className="App">
        <div className='container text-left'>
          <div className='page-header'>
            <h1 className='text-white'>Find a Rock Climb</h1>
            <p className='lead text-white'>Powered by Mountain Project and MapQuest</p>
          </div>
          <div className='row'>
            <form className='col-md-12' onSubmit={this.handleClick}>
              <div className='panel panel-default'>
                <div className='panel-heading font-weight-bold'>Show me climbs near...</div>
                <div className='panel-body'>
                  <div className='form-group col-md-12'>
                    <label>Location to Search <small><em>(City, State)</em></small></label>
                    <textarea 
                      type='text' 
                      rows='1'
                      placeholder='ex. Amboy, CA'
                      value={this.state.locationToSearch} 
                      className='form-control input-md'
                      onChange={this.updateLocationToSearch} />  
                  </div>
                  <div className='form-group col-md-3'>
                    <label>Number of Climbs to Return<br/><small><em>(optional)</em></small></label>
                    <input 
                      className='form-control input-md' 
                      size='1' 
                      type='number'
                      placeholder='50 to 500 climbs'
                      min='50'
                      max='500'
                      value={this.state.climbsToReturn} 
                      onChange={this.updateClimbsToReturn} />
                  </div>
                  <div className='form-group col-md-3'>
                    <label>Number of Miles from Location<br/><small><em>(optional)</em></small></label>
                    <input 
                      className='form-control input-md' 
                      size='1' 
                      type='number'
                      placeholder='30 to 200 miles'
                      min='30'
                      max='200'
                      value={this.state.milesFromLocation} 
                      onChange={this.updateMilesFromLocation} />
                  </div> 
                  <div className='form-group col-md-3'>
                    <label>Minimum Difficulty<br/><small><em>(optional)</em></small></label>
                    <select 
                      className='form-control input-md' 
                      size='1'
                      value={this.state.minDifficulty} 
                      onChange={this.updateMinDifficulty}>
                        <option value='0'>Select Minimum Difficulty</option>
                        <option value='5.0'>5.0</option>
                        <option value='5.1'>5.1</option>
                        <option value='5.2'>5.2</option>
                        <option value='5.3'>5.3</option>
                        <option value='5.4'>5.4</option>
                        <option value='5.5'>5.5</option>
                        <option value='5.6'>5.6</option>
                        <option value='5.7'>5.7</option>
                        <option value='5.8'>5.8</option>
                        <option value='5.9'>5.9</option>
                        <option value='5.10a'>5.10a</option>
                        <option value='5.10b'>5.10b</option>
                        <option value='5.10c'>5.10c</option>
                        <option value='5.10d'>5.10d</option>
                        <option value='5.11a'>5.11a</option>
                        <option value='5.11b'>5.11b</option>
                        <option value='5.11c'>5.11c</option>
                        <option value='5.11d'>5.11d</option>
                        <option value='5.12a'>5.12a</option>
                        <option value='5.12b'>5.12b</option>
                        <option value='5.12c'>5.12c</option>
                        <option value='5.12d'>5.12d</option>
                        <option value='5.13a'>5.13a</option>
                        <option value='5.13b'>5.13b</option>
                        <option value='5.13c'>5.13c</option>
                        <option value='5.13d'>5.13d</option>
                        <option value='5.14'>5.14</option>
                    </select>  
                  </div> 
                  <div className='form-group col-md-3'>
                    <label>Maximum Difficulty<br/><small><em>(optional)</em></small></label>
                    <select 
                      className='form-control input-md' 
                      size='1' 
                      placeholder='Select Maximum Difficulty'
                      value={this.state.maxDifficulty} 
                      onChange={this.updateMaxDifficulty}>
                        <option value='0'>Select Maximum Difficulty</option>
                        <option value='5.5'>5.5</option>
                        <option value='5.6'>5.6</option>
                        <option value='5.7'>5.7</option>
                        <option value='5.8'>5.8</option>
                        <option value='5.9'>5.9</option>
                        <option value='5.10a'>5.10a</option>
                        <option value='5.10b'>5.10b</option>
                        <option value='5.10c'>5.10c</option>
                        <option value='5.10d'>5.10d</option>
                        <option value='5.11a'>5.11a</option>
                        <option value='5.11b'>5.11b</option>
                        <option value='5.11c'>5.11c</option>
                        <option value='5.11d'>5.11d</option>
                        <option value='5.12a'>5.12a</option>
                        <option value='5.12b'>5.12b</option>
                        <option value='5.12c'>5.12c</option>
                        <option value='5.12d'>5.12d</option>
                        <option value='5.13a'>5.13a</option>
                        <option value='5.13b'>5.13b</option>
                        <option value='5.13c'>5.13c</option>
                        <option value='5.13d'>5.13d</option>
                        <option value='5.14'>5.14</option>
                    </select>  
                  </div>
                  <div className='col-md-12'>
                    <button className='btn btn-primary form-control'>Find Some Climbs</button>
                  </div>
                  {/* panel body end below  */}
                </div>
              </div>
            </form>
          {/* end row div below */}
          </div>
          <div name='climb-component'>
            {this.emptyClimbsArrayOrNot(this.state.climbsArray.length)}
          </div>
          {/* end container div below  */}
        </div>
        {/* end App div below */}
      </div>
    );
  }
}

export default App;
