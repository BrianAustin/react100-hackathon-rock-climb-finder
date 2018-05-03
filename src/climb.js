//child of App
import React from 'react';

export default props => (
  <div className='card col-md-3'>
    <img className='card-img-top' src='...' alt='img of climb' />
    <div className='card-body'>
      <h4 className='card-title'>Climb Name</h4>
      <p className='card-text'>location which is likely to be longer than one would expect since there will be one parent with many nested 'areas'</p>
    </div>
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>rating</li>
      <li className='list-group-item'>type</li>
      <li className='list-group-item'>pitches</li>
      <li className='list-group-item'>stars</li>
    </ul>
    <div className='card-body'>
      <a href='#' className='card-link'>MP link</a>
    </div>
  </div>
  
);