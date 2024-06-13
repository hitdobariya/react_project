import React from 'react'

const Tern = () => {
    return (
        <>
            <ul>
                <Terns name={'Tea'} />
                <Terns name={'Coffee'} />
            </ul>
        </>
    )
}

export const Terns = ({ name }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>Part of Plant</p>
            <li>{name === 'Tea' ? 'Leaf' : 'Bean'}</li>
            <p>Caffeine content</p>
            <li>{name === 'Tea' ? '15–70 mg/cup' : '80–180 mg/cup'}</li>
            <p>Age</p>
            <li>{name === 'Tea' ? '4000+years' : '1000+years'}</li>

        </>
    )
}
export default Tern