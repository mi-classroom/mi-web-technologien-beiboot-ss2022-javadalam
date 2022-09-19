import React from 'react';
import { mergeSort } from '../../helpers/sorting.helper';


import './overall.css';

const Overall = ({bestOf, setisDetails}) => {
    const paintings = bestOf ? bestOf : [];

    mergeSort(paintings);

 

    const handleClick = (paintingNumber) => {
        setisDetails(true);
        saveInLocalStorage('paintingNumber', paintingNumber)
    }

    const getPaintingsPreview = paintings.map((painting, i) => (
        <div key={i} className='Preview-painting'>
            <button onClick={() => handleClick(painting.sortingNumber)}>
                <img src={painting.images.overall.images[0].sizes.medium.src} height='200px'/>
            </button>
        </div>
    ))


    return (
        <div>
            <h1>Dies ist eine Übersicht über die Meisterwerke von Lukas Cranach</h1>
            <div className='Preview'>
                {getPaintingsPreview}
            </div>
        </div>
    )
}

export default Overall;