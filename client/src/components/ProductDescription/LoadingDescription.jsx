import React from 'react'
import { Button, Card, Divider, Image, Placeholder } from "semantic-ui-react";
export const LoadingImage = ()=> {
  return (
    <Placeholder style={{width:"100%", height:"100%"}}>
          <Placeholder.Image className='image-place-holder' square />
    </Placeholder>
    
  )
}

export const LoadingThumbnail = ()=> {
    return (
      <Placeholder style={{width:"100%", height:"100%"}}>
            <Placeholder.Image className='thumbnail-place-holder' square />
      </Placeholder>
      
    )
  }

  export const LoadingTitle = ()=> {
    return (
      <Placeholder style={{width:"100%", height:"100%"}}>
            <Placeholder.Line />
      </Placeholder>
      
    )
  }

  export const LoadingDescription = ()=> {
    return (
      <Placeholder style={{width:"100%", height:"100%"}}>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
      </Placeholder>
      
    )
  }