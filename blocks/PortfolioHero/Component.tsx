import React from 'react'
import { MediaType } from '../../collections/Media'


export type Type = {
    blockType: 'portfoliohero'
    blockName?: string
    thumbnail: MediaType
    title: string;
}
  
export const Component: React.FC<Type> = (props) => {
    const { thumbnail, title } = props;
  
    return (
      <div>
        <img src={thumbnail.url} alt={thumbnail.alt} />
        <h1>{title}</h1>
      </div>
    );
  }