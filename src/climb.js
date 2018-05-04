//child of App
import React from 'react';

export default props => (
    <div className='card border-dark col-md-3'>
      <div className='card-header'>{props.name}</div>
      <img className='card-img-top' src={props.img} alt='' />
      <div className='card-body'>
        <h4 className='card-title'>{props.name}</h4>
        <p className='card-text'>Area:{props.location.map(l => <span> {l} |</span>)}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>YDS Grade: {props.rating}</li>
        <li className='list-group-item'>Type: {props.type}</li>
        <li className='list-group-item'>Number of Pitches: {props.pitches}</li>
        <li className='list-group-item'>Stars: {props.stars} out of 5 stars</li>
      </ul>
      <div className='card-footer'>
        <a 
          href={props.url}
          target='_blank' 
          className='card-link'>View climb info at Mountain Project</a>
      </div>
    </div>
);