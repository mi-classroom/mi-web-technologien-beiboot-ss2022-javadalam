import React, { useEffect, useState } from 'react';
import Overall from './components/overall';

import Data from "./../data/cda-paintings-2022-04-22.de.json";
import { sorting } from './components/sorting.number';
import Detail from './components/detail';

const App = () => {

    const [isDetails, setisDetails] = useState(false)

    const [bestOf, setpaintingsBestOf] = useState(null)

    const masterpieces = Data.items;

    useEffect(() => {
        async function getData() {
            const piecesBestOf = masterpieces.filter((painting) => {
                return painting.isBestOf;
            })
            setpaintingsBestOf(piecesBestOf);
        }

        getData();

        return () => {
        }
    }, [])

    return (
        <div>
            {!isDetails
                ?
                <Overall bestOf={bestOf} setisDetails={setisDetails} />
                :
                <Detail bestOf={bestOf} setisDetails={setisDetails} />
            }
        </div>
    )
}

export default App;