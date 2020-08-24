import React from 'react'
import './Home.css';

export default function Home(props) {
    return (
    
    <div className={'home'}>
        <h3 className={'home-title'}>Twilio SMS App </h3>
        <p className={'home-description'}>“Envio masivo de SMS”</p>
        <button onClick={props.next} className={'home-button'}>Comenzar</button>
    </div>
    )
}
