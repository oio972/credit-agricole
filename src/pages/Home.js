import React, { useState } from 'react';
import { Footer } from './Footer';
import { Count } from './Count'
import './style.css'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='body'>
            <div className="divLoader">
                2 secondes sa charge
            </div>
            <div className='container'>
                <button className='boutonAccueil' onClick={toggleMenu}>
                    Accueil
                </button>
                <div className="menuDeroulantContainer">
                    {isMenuOpen && (
                        <div className="menuDeroulant">
                            <div className='menuDeroulantPosition'>
                                <p className='menuDeroulantChoix'>prix</p>
                                <p className='menuDeroulantChoix'>{<Count />}</p>
                            </div>
                            <div className='menuDeroulantPosition'>
                                <p className='menuDeroulantChoix'>compte en banque</p>
                                <p className='menuDeroulantChoix '>{<Count />}</p>
                            </div>
                            <div className='menuDeroulantPosition'>
                                <p className='menuDeroulantChoix'>virement</p>
                                <p className='menuDeroulantChoix'>{<Count />}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="contenu"></div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}
