import React from 'react';

export class SimpleImage extends React.Component {
  render() {
    console.log(this.props)
    const { modalProps, classNameStr, src, widthStr, heightStr, style } = this.props;
    return (
      <img
      {...modalProps}
      className={classNameStr}
      src={src} 
      width={widthStr} 
      height={heightStr} 
      style={style}
      />
      )
  }
}