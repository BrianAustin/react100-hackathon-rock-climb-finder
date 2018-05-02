import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      climbsArray: []
    };
  }


  render() {
    return (
      <div className="App">
        <div className='container text-left'>
          <div className='page-header'>
            <h1>Find a Rock Climb</h1>
            <p className='lead'>Powered by Mountain Project and Google</p>
          </div>
          <div className='row'>
            <form className='col-md-12'>
              <div className='panel panel-default'>
                <div className='panel-heading font-weight-bold'>Show me climbs near...</div>
                <div className='panel-body'>
                  <div className='form-group col-md-10'>
                    <label>Location to Search</label>
                    <textarea type='text' rows='1' className='form-control input-md' />  
                  </div>
                  <div className='form-group col-md-3'>
                    <label>Number of Climbs to Return</label>
                    <input 
                      className='form-control input-md' 
                      size='1' 
                      type='number'
                      placeholder='50 to 500 climbs'
                      min='50'
                      max='500' />
                  </div>
                  <div className='form-group col-md-3'>
                    <label>Number of Miles from Location</label>
                    <input 
                      className='form-control input-md' 
                      size='1' 
                      type='number'
                      placeholder='30 to 200 miles'
                      min='30'
                      max='200' />
                  </div> 
                  <div className='form-group col-md-3'>
                    <label>Minimum Difficulty</label>
                    <select 
                      className='form-control input-md' 
                      size='1'>
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
                    <label>Maximum Difficulty</label>
                    <select 
                      className='form-control input-md' 
                      size='1' 
                      placeholder='Select Maximum Difficulty'>
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
                  <div className='col-md-8'>
                    <button className='btn btn-success form-control'>Find Some Climbs</button>
                  </div>
                  {/* panel body end below     */}
                </div>
              </div>
            </form>
          {/* end row div below */}
          </div>
          {/* end container div below  */}
        </div>
        {/* end App div below */}
      </div>
    );
  }
}

export default App;
