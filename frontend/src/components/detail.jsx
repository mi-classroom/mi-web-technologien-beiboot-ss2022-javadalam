import React from 'react';
import '../assets/styles/index.scss';

import { getFromLocalStorage } from './sorting.number';

const Detail = ({bestOf, setisDetails}) => {

    const paintingNumber = getFromLocalStorage('paintingNumber');

    const paintingArray = bestOf.filter((painting) => {
        return (painting.sortingNumber === paintingNumber);
    })

    const painting = paintingArray[0];

    return (
        <div className='Detail'>
        <button className='BackButton Button' onClick={() => setisDetails(false)}>Back</button>
        <img className='Image Button' src={painting.images.overall.images[0].sizes.medium.src}/>
        <div className='Button'>Titel : {painting.metadata.title}</div>
        <div className='Button'>Date : {painting.images.overall.images[0].metadata.date} </div>
        <div >Besitzer : {painting.repository}</div>
        </div>
    )
}

export default Detail;