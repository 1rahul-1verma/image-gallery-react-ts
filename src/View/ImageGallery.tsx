import React from 'react';
import Model from '../Model/Model';
import Gallery from './Gallery';
import Display from './Display';
import "./ImageGallery.css";

interface imageGalleryProps {
    model: Model;
}

export default function ImageGallery2({model}: imageGalleryProps) {
    const [imageList, setImageList] = React.useState(() => {
        return model.getGalleryImages();
    });

    const [selectedImage, setSelectedImage] = React.useState(() => {
        return model.getSelectedImage();
    });

    function handleSelectionChange(indx: number) {
        model.setSelectedImage(indx);
        setSelectedImage(indx);
    }

    function handleCaptionChange(caption: string) {
        model.setSelectedCaption(caption);
        setImageList(model.getGalleryImages());
        console.log(imageList);
    }

    return (
        <div className = "flex-container">
            {console.log(imageList)}
            <Gallery 
                imageList = {imageList} 
                selectedImage = {selectedImage}
                onSelection = {handleSelectionChange} />
            <Display 
                displayImage = {imageList[selectedImage]}
                onCaptionChange = {handleCaptionChange} />
        </div> 
    )

}