//child of App
import React from 'react';
import catClimb from './catClimb.jpg';

export default props => (
    <div className='card border-dark col-md-4'>
      <div className='card-header'><strong>{props.name}</strong></div>
      <img className='card-img-top rounded' src={props.img !== '' ? props.img : catClimb} alt='from user' />
      <div className='card-body'>
        <h4 className='card-title'><u>{props.name}</u></h4>
        <p className='card-text'>Area:{props.location.map((l, i) => <span key={props.location[i]}> {l} |</span>)}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'><u>Grade</u>: {props.rating}</li>
        <li className='list-group-item'><u>Type</u>: {props.type}</li>
        <li className='list-group-item'><u>Pitches</u>: {props.pitches}</li>
        <li className='list-group-item'>{props.stars} out of 5 stars</li>
      </ul>
      <div className='card-footer'>
        <a 
          href={props.url}
          target='_blank' 
          className='card-link'>View climb at Mountain Project</a>
      </div>
    </div>
);