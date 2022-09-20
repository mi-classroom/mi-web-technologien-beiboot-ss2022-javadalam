import React from 'react';
import { getFromLocalStorage } from '../../helpers/localStorage.helper';
import './detail.css';

const Detail = ({bestOf, setisDetails}) => {

    const paintingNumber = getFromLocalStorage('paintingNumber');

    const paintingArray = bestOf.filter((painting) => {
        return (painting.sortingNumber === paintingNumber);
    })

    const painting = paintingArray[0];

    return (
        <div className='DetailedView'>
        <button className='Detaileview-backButton u-marginBs' onClick={() => setisDetails(false)}>Back</button>
        <img className='DetailView-image u-marginBs' src={painting.images.overall.images[0].sizes.medium.src}/>
        <span className='u-marginBs'>Titel: {painting.metadata.title}</span>
        <span className='u-marginBs'>Date: {painting.images.overall.images[0].metadata.date} </span>
        <span>Besitzer: {painting.repository}</span>
        </div>
    )
}

export default Detail;