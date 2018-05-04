//child of App
import React from 'react';

export default props => (
  <div className='card col-md-3'>
    <img className='card-img-top' src={props.img} alt='img of climb' />
    <div className='card-body'>
      <h4 className='card-title'>{props.name}</h4>
      <p className='card-text'>{props.location.map(l => <span>{l}</span>)}</p>
    </div>
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>{props.rating}</li>
      <li className='list-group-item'>{props.type}</li>
      <li className='list-group-item'>{props.pitches}</li>
      <li className='list-group-item'>{props.stars}</li>
    </ul>
    <div className='card-body'>
      <a href={props.url} className='card-link'>Mountain Project Link</a>
    </div>
  </div>
  
);