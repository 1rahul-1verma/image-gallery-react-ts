import React from 'react';
import "./Display.css";
import { imageInfo } from '../Model/ModelInterface/imageList';

interface displayProps {
    displayImage : imageInfo;
    onCaptionChange : (caption: string) => void;
}

export default function Display({displayImage, onCaptionChange} : displayProps) {
    function handleCaptionChange(e: React.FormEvent<HTMLDivElement>) {
        const updatedCaption = e.currentTarget.innerText;
        onCaptionChange(updatedCaption);
    }
    return (
        <div className = "display">
            <img className ="display-image" src = {displayImage.src} alt = "displayImage" />
            <div 
            className = "display-caption" 
            contentEditable = "true" 
            onInput = {(e) => handleCaptionChange(e)}> 
                {displayImage.caption} 
            </div>
        </div>
    )
}