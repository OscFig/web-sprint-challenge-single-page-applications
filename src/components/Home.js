import React from 'react'
import { useHistory } from "react-router-dom";


export default function Home() {

    const history = useHistory();

    const routeToPizza = () => {
        history.push('/Pizza');//! route to pizza form
    }

    return (
        <div className='home-container'>
            <img className='homeImg' 
            src='https://unsplash.com/photos/pGA4zHvpo5E'
            alt=''/>
            <button onClick={routeToPizza} className='pizzaButton'>Make your Pizza!</button>
        </div>
    )
}
