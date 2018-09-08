//child of App
import React from 'react';

export default props => (
  <div className='card border-dark mb-4'>
    <h5 className='card-header font-weight-bold'>Search Results for {props.locationSearched}</h5>
    <div className='card-body'>
      <p className='card-text'>
        Showing {props.numOfClimbsReturned === '' ? '50' : props.numOfClimbsReturned} climbs within a 
        {props.numMilesFromLocation === '' ? ' 30' : ' ' + props.numMilesFromLocation} mile radius of {props.locationSearched} with a difficulty rating between 
        {props.minDiffSearched === '' ? ' 5.0' : ' ' + props.minDiffSearched} and 
        {props.maxDiffSearched === '' ? ' 5.14' : ' ' + props.maxDiffSearched}.</p>
    </div>
  </div>
);