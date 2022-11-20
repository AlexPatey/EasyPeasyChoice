import './App.css';
import eazyPeazyLogo from "./images/easypeasy.jpg";
import downArrow from "./images/arrow-down.png";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'
import { TextureLoader } from 'three';

function Box(props) {

    const ref = useRef()

    const [hovered, hover] = useState(false)

    useFrame((state, delta) => (ref.current.rotation.y += 0.005))

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh
            {...props}
            ref={ref}
            scale={1.5}
            onClick={() => window.open("https://easypeasymethod.org/", "_blank")}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1.748, 2.480, 0]} />
            <meshStandardMaterial map={useLoader(TextureLoader, eazyPeazyLogo)} />
        </mesh>
    )
}

function App() {
    return (
        <div className="App">
            <h1 className='easyTitle'>Make the easy choice</h1>
            <h2 className='quitText'>Quit porn today</h2>
            <Canvas className='canvas'>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
            <h2 className='orText'>Or...</h2>
            <button className='goDownBtn' onClick={() => document.getElementById('siteList').scrollIntoView()}>
                <img className='downArrowImg' src={downArrow} alt="down arrow"></img>
            </button>
            <h4>Every **** site ever...</h4>
            <ul id='siteList' className='siteList'>
                <li>Site Link</li>
                <li>Site Link</li>
                <li>Site Link</li>
                <li>Site Link</li>
                <li>Site Link</li>
                <li>Site Link</li>
            </ul>
        </div>
    );
}

export default App;
