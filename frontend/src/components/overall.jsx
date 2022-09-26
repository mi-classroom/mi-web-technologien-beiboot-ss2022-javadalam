import React from 'react';
import '../assets/styles/index.scss';

import { saveInLocalStorage } from './sorting.number';
import { sorting } from './sorting.number';

const Overall = ({bestOf, setisDetails}) => {
    const paintings = bestOf ? bestOf : [];

    sorting(paintings);

    const handleClick = (paintingNumber) => {
        setisDetails(true);
        saveInLocalStorage('paintingNumber', paintingNumber)
    }

    const getPaintingsPreview = paintings.map((painting, i) => (
        <div key={i} className='Overall-preview'>
            <button onClick={() => handleClick(painting.sortingNumber)}>
                <img src={painting.images.overall.images[0].sizes.medium.src} height='200px'/>
            </button>
        </div>
    ))


    return (
        <div>
            <h1>Dies ist eine Übersicht über die Meisterwerke von Lukas Cranach</h1>
            <div className='Overall'>
                {getPaintingsPreview}
            </div>
        </div>
    )
}

export default Overall;