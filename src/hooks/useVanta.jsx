import { useRef, useEffect } from 'react';
// import Clouds from 'vanta/dist/vanta.clouds.min'
// import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    // const [vanta,setVanta] = useState(0)

    // console.log(myRefDiv.current); // null

    useEffect(() => {
        console.log(myRefDiv.current);

        // Vanta Clouds Animation
        // if(!vanta) {
        //     setVanta(Clouds({
        //         THREE,
        //         el: myRefDiv.current
        //     }))

        //     console.log('Vanta = !0');
        // }

        // Cleaning (componentWillUnMount)
        // return () => {
        //     if(vanta){
        //         vanta.destroy()
        //         console.log('Libero los recursos');
        //     }
        // }
    }, )
    // [vanta]

    return myRefDiv
}

export default useVanta