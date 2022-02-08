import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useRef(null)
    const [vanta,setVanta] = useState(0)

    console.log(myRefDiv.current);

    useEffect(() => {
        console.log(myRefDiv.current);

        if(!vanta) {
            setVanta(1)

            // Vanta Clouds Animation
            Clouds({
                THREE,
                el: myRefDiv.current
            })

            console.log('Vanta = 1');
        }

        // Cleaning (componentWillUnMount)
        return () => {
            if(vanta){
                vanta.destroy()
                console.log('Libero los recursos');
            }
        }
    }, [vanta])
    
    return (
        <div ref={myRefDiv}>
            Welcome Screen
        </div>
    );
};

WelcomeScreen.propTypes = {
    children: PropTypes.node
};

export default WelcomeScreen;