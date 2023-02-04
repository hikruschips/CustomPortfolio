import React from 'react';

export class Card extends React.Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="photo" src={`https://robohash.org/${id}`} width="200" height="200" />
      <div>
      <h2>{name}</h2>
      <p>{email}</p>
      </div>
      </div>
      )
  }
}