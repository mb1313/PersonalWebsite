import React, { useState, useEffect } from 'react';

function RotatingPhotos({ photos, captions }) {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [arrowButtonStyle, setArrowButtonStyle] = useState({});
    const [shouldRotate, setShouldRotate] = useState(true);

    const fadeIn = () => {
        var image = document.querySelectorAll('.gallery');
        image.forEach(element => {
            element.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 750,
                easing: 'ease-in-out',
                iterations: 1
            });
        });

    }

    const fade = (direction) => {
        var image = document.querySelectorAll('.gallery');
        image.forEach(element => {
            element.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 750,
                easing: 'ease-in-out',
                iterations: 1,
            }).onfinish = () => {
                if (element.tagName === "IMG") {
                    var newIndex = direction === 'left' ? currentPhotoIndex - 1 : currentPhotoIndex + 1;
                    newIndex = newIndex >= photos.length ? 0 : newIndex;
                    newIndex = newIndex < 0 ? photos.length - 1 : newIndex;
                    setCurrentPhotoIndex(newIndex);
                    fadeIn();
                }
            };
        });

    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (shouldRotate) {
                fade('right');
            }
        }, 5000);

        return () => clearInterval(intervalId);
    });

    return (
        <div className="rotating-photos">
            <div className="button-container">
                <figure>
                    <img className='gallery' src={photos[currentPhotoIndex]} alt={captions[currentPhotoIndex]}/>
                    <figcaption className='gallery'>{captions[currentPhotoIndex]}</figcaption>
                </figure>
                <button onClick={() => [setShouldRotate(false), fade('left')]} style={arrowButtonStyle}>
                    &lt;&lt;
                </button>
                <button onClick={() => [setShouldRotate(false), fade('right')]} style={arrowButtonStyle}>
                    &gt;&gt;
                </button>
            </div>
            <div className="indicator">
                {currentPhotoIndex + 1}/{photos.length}
            </div>
        </div>
    );
}

export default RotatingPhotos;