import React from 'react';
// import { Card } from './Card';

export class Room extends React.Component {
  render() {
    const { roomLayout, tileSize } = this.props;
    const assetsArray = roomLayout.map((asset) => {
      let assetWidth = tileSize
      let assetHeight = tileSize
      if (asset.width) {
        assetWidth = asset.width * tileSize / 32
      }
      if (asset.height) {
        assetHeight = asset.height * tileSize / 32
      }

      let sizeFactor = 1
      if (asset.type === "prop") {
        sizeFactor = 2
      }

      const src = `../../assets/${asset.type}s/${asset.imgClass}.png`

      const clickable = asset.clickable

      let modal = false
      let modalString = false


      let modalProps = {
        "data-bs-toggle": "modal",
        "data-bs-target": `#${asset.modal}Modal`,
        'onMouseEnter':()=>document.getElementById(asset.imgClass+'h2').style.display="block",
        'onMouseLeave':()=>document.getElementById(asset.imgClass+'h2').style.display="none"
      }

      if (asset.modal === undefined) {
        modalProps = {}
        // console.log("disabled")
      }

      let assetImgClass = asset.imgClass
      console.log(assetImgClass)

      if(asset.href !== undefined) {
        return (
          <a
          href={asset.href}
          target="_blank" 
          >
          <img
          {...modalProps}
          className={`${clickable === true ? ('grow ' + assetImgClass): (assetImgClass)}`}
          src={src} 
          width={`${assetWidth * sizeFactor}px`} 
          height={`${assetHeight * sizeFactor}px`} 
          style={{left : asset.positionX * tileSize, top : asset.positionY * tileSize }}
          />
          <h2
          id={asset.imgClass+'h2'}
          className="absolute display-none orange"
          style={{ left : asset.positionX * tileSize, top : asset.positionY * tileSize - asset.floatHeight}}
          >
          {asset.floatText}
          </h2>
          </a>
          )
      }

      return (
        <span>
        <img 
        {...modalProps}
        className={`${clickable === true ? ('grow ' + assetImgClass): (assetImgClass)}`}
        src={src} 
        width={`${assetWidth * sizeFactor}px`} 
        height={`${assetHeight * sizeFactor}px`} 
        style={{left : asset.positionX * tileSize, top : asset.positionY * tileSize }}
        />
        <h2
        id={asset.imgClass+'h2'}
        className="absolute display-none orange"
        style={{ left : asset.positionX * tileSize, top : asset.positionY * tileSize - asset.floatHeight}}
        >
        {asset.floatText}
        </h2>
        </span>
        )
    })

    return (
      <div className="centered-on-page" style={{width: `${tileSize * 5}px`, height: `${tileSize * 5}px`}}>
      {assetsArray}
      </div>
      )
  }
}