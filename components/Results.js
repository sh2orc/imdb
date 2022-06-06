import React from 'react';

function Results({results}) {
    return (
        <div>
            {results.map(result=>(
                <h1>{result.title}</h1>
            ))}
        </div>
    );
}

export default Results;