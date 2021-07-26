import React, { useEffect, useRef } from 'react';
import truncateUtil from '../Util/truncateUtil';
import "./GalleryList.css";

interface galleryListProps {
    imgSrc: string;
    index: number;
    caption: string;
    isSelected: boolean;
    onSelection: (index: number) => void;
}

export default function GalleryList({imgSrc,index, caption, isSelected, onSelection}: galleryListProps) {
    
    const captionRef: any = useRef(); //React.createRef<HTMLDivElement>(); //useRef<HTMLElement>(null);
    
    useEffect(() => {
        if(captionRef && captionRef.current){
            truncateUtil(captionRef.current)
        }
    });

    function handleSelectionChange() {
        console.log("click event");
        onSelection(index); 
    }

    function handleDragStart(e : React.DragEvent<HTMLDivElement>) {
        const draggingElement = e.target as HTMLDivElement;
        draggingElement.dataset.dragging = "true";
    }

    function handleDragEnd(e : React.DragEvent<HTMLDivElement>) {
        const draggingElement = e.target as HTMLDivElement;
        draggingElement.dataset.dragging = "false";
    }

    return (
    <div className = "gallery-list" 
    data-selected = {isSelected} 
    onClick = {handleSelectionChange}
    onDragStart = {(e) => handleDragStart(e)}
    onDragEnd = {(e) => handleDragEnd(e)}
    draggable = "true"> 
        <img className = "images" src = {imgSrc} alt = "gallery List" />
        <div ref = {captionRef} className = "image-caption"> {caption} </div>
    </div>
    )
}
