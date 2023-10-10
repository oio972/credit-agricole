import React, { useState } from 'react';

export function Count() {
    const [count, setCount] = useState(0);
    const leCompteur = () => {
        setCount(count === 10 ? 0 : count + 1);
    };

    return (
        <div className="style">
            <button
                className={count === 10 ? 'couleurRose' : 'couleurNoir'}
                onClick={leCompteur}>
                {count}
            </button>
        </div>
    )
}
