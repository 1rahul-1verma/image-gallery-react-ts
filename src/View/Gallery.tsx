import React from 'react'
import GalleryList from './GalleryList';
import { imageInfo } from '../Model/ModelInterface/imageList';
import nextDraggable from './nextDraggable';
interface galleryProps {
    imageList: imageInfo[];
    selectedImage: number;
    onSelection: (index: number) => void;
}

export default function Gallery({imageList, selectedImage, onSelection}: galleryProps) {
    
    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const galleryDiv = document.querySelector(
                "#image-gallery"
                ) as HTMLDivElement;
            
        const draggingDiv = document.querySelector(
                '[data-dragging="true"]'
                ) as HTMLDivElement;

        const nextDraggingDiv = nextDraggable(galleryDiv, e.clientY);
        if (nextDraggingDiv == null) {
            galleryDiv.appendChild(draggingDiv);
        } else {
            galleryDiv.insertBefore(draggingDiv, nextDraggingDiv);
        }
        
    }
    
    return (
        <div id = "image-gallery" onDragOver = {(e) => handleDragOver(e)}>
            {console.log("here")}
            {imageList.map( image => {
                return (
                    <GalleryList 
                        key = {image.index} 
                        index = {image.index}
                        imgSrc = {image.src} 
                        isSelected = {selectedImage === image.index}
                        onSelection = {onSelection}
                        caption = {image.caption}/>
                );
            })}
        </div>
    )
}