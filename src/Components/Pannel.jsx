import React from 'react';
import { useState } from 'react';
const Pannel = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (

        <>
            <section>
                <h3>{props.title}</h3>{isActive ? (<p>{props.children}</p>) : (<button onClick={() =>setIsActive(true)}>
                    show
                </button>)}
            </section>
        </>
    )
}

export default Pannel;