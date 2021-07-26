import React from 'react';
import './App.css';
import Model from './Model/Model';
import ImageGallery from './View/ImageGallery';
const imgList = [
  {
    caption: "You can not see a sleeping cat and feel tense.",
    src: "./images/cat.jpeg",
    index: 0
  },
  {
    caption: "For it is when calm clouds gather that thunder is made",
    src: "./images/cloud.jpeg",
    index: 1
  },
  {
    caption: "A horse doesn't care how much you know how much you care.",
    src: "./images/bike.jpeg",
    index: 2
  },

  {
    caption: "Technology is best when it brings people together.",
    src: "./images/tech.jpeg",
    index: 3
  },

  {
    caption: "The cure for anything is salt water: sweat, tears or the sea.",
    src: "./images/sea.jpeg",
    index: 4
  }
];

const model = new Model(imgList, 0);

function App() {
  return (
    <div className="App">
      <ImageGallery model = {model} />
    </div>
  );
}

export default App;
