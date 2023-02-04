import React from 'react';
import { Card } from './Card';

export class CardList extends React.Component {
  render() {
    const { robots } = this.props;
    const cardsArray = robots.map((robot) => {
      return (<Card 
        key={robot.id} 
        id={robot.id} 
        name={robot.name} 
        email={robot.email} 
        />)
    })
    return (
      <div>
      {cardsArray}
      </div>
      )
  }
}