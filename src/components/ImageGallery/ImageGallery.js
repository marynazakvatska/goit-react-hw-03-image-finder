import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem'



export default class ImageGallery extends React.Component {
    state = {
    activeImgId: 0,
    };


    setActiveId = id => {
        this.setState({activeImgId: id})
    }
 

    render() {
        return (
            <ul className={s.imageGallery}>
               {/*  {images.map(({ webformatURL, largeImageURL}, id) => {
                    return (
                        <ImageGalleryItem key={id}
                            onClick = {() => this.setActiveId(id)}
                        />
                    )
                })} */}
            </ul>
        )
    }

}
