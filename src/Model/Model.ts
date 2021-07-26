import { imageInfo } from "./ModelInterface/imageList";

class Model {
    imageList: imageInfo[];
    selectedImage: number;
    constructor(imageList: imageInfo[], selectedImage: number) {
        this.imageList = imageList;
        this.selectedImage = selectedImage;
    }

    getGalleryImages = () : imageInfo[] => {
        return this.imageList;
    }

    getSelectedImage = () : number => {
        return this.selectedImage;
    }

    getSelectedCaption = () : string => {
        return this.imageList[this.selectedImage].caption;
    }

    setSelectedImage = (indx: number) : void => {
        this.selectedImage = indx;
    }

    setSelectedCaption = (caption: string) : void => {
        // const newImageList = [...this.imageList];
        this.imageList = [...this.imageList.slice(0, this.selectedImage), {...this.imageList[this.selectedImage], caption}, ...this.imageList.slice(this.selectedImage+1)];
        // this.imageList[this.selectedImage].caption = caption;
    }

}

export default Model;