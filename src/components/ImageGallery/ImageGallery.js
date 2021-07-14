import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem'



/* export default class ImageGallery extends React.Component {
    state = {
    activeImgId: 0,
    };


    setActiveId = id => {
        this.setState({activeImgId: id})
    } */
const ImageGallery = ({ images, openModal }) =>  {
   
        return (
            <ul className={s.imageGallery}>
         {images.map(({ webformatURL, largeImageURL, tag, id }) => {
                    return (
                        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tag={tag}
                            openModal={() => openModal(webformatURL, largeImageURL, tag, id)}
                        />
                    )
                })} 
            </ul>
        )
    }
 



 
export default ImageGallery;