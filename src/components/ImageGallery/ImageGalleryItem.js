import React from 'react';
import s from './ImageGallery.module.css';


const ImageGalleryItem = ({webformatURL, openModal, largeImageURL, tag, id }) => {
    return (
        <li  onClick={openModal} className={s.imageGalleryItem}>
            <img src={webformatURL} alt={tag} width={480} className={s.imageGalleryItem_image} />
</li>
            
  )
  }


export default ImageGalleryItem;
   