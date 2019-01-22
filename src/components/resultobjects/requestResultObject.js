import React from 'react';
import ResultTable from './ResultTable.jsx';

/**
 *
 * Returns a result object of the correct type
 * based on the data recieved
 *
 * @param resultobjects all the resultobjects
 * @param id the id of the object
 *
 */

export default function requestResultObject(resultobjects, id, dispatch){
    const obj = resultobjects[id];
    switch (obj.type){
        case "freqlist":{
            const props = { ...obj, id:id, dispatch: dispatch};
            return <ResultTable {...props} />;
            break
        }
        case "ngramlist":{
            const props = { ...obj, id:id, dispatch: dispatch};
            return <ResultTable {...props} />;
            break
        }
        default:
            return <div> No result </div>;
    }
}
