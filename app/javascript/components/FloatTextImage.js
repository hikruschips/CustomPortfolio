import React from 'react';

export class FloatTextImage extends React.Component {
  render() {
    console.log(this.props)
    const { modalProps, classNameStr, src, widthStr, heightStr, style, h2Id, h2Style, h2Text } = this.props;
    return (
      <>
      <img
      {...modalProps}
      className={classNameStr}
      src={src} 
      width={widthStr} 
      height={heightStr} 
      style={style}
      />
      <h2
      id={h2Id}
      className="absolute display-none orange-font"
      style={h2Style}
      >   
      {h2Text}
      </h2>
      </> 
      )
  }
}