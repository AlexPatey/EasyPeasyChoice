import './App.css';
import easyPeasyLogo from "./images/easypeasy.jpg";
import kickTheDrinkCover from "./images/kickthedrink.jpg";
import easyWayCover from "./images/easyway.jpg";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'
import { TextureLoader } from 'three';
import { useMediaQuery } from 'react-responsive';

function Book(props) {

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
            scale={useMediaQuery({ query: `(max-width: 1250px)` }) ? 2 : 1.75}
            onClick={() => window.open(props.link, "_blank")}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1.748, 2.480, 0]} />
            <meshStandardMaterial map={useLoader(TextureLoader, props.image)} />
        </mesh>
    )
}

function App() {
    return (
        <div className="App">
            <h1 className='easyTitle'>Welcome</h1>
            <h2 className='quitText'>Everything we know about addiction is wrong (that's okay though!)</h2>
            <h2 className='quitText'>Free books, with love -- for you, and anyone else</h2>
            <div className='canvasContainer'>
                <div className='book'>
                    {/*<p className='bookName'>Easy Peasy</p>*/}
                    <Canvas className='canvas' height="calc(100vh - 248px)">
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Book position={[0, 0, 0]} image={easyPeasyLogo} link={"https://easypeasymethod.org/"} />
                    </Canvas>
                    {/*<a class="bookLink" target="_blank" href={"https://easypeasymethod.org/"}>Easy Peasy</a>*/}
                </div>
                <div className='book'>
                    {/*<p className='bookName'>Kick the Drink... Easily</p>*/}
                    <Canvas className='canvas'>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Book position={[0, 0, 0]} image={kickTheDrinkCover} link={"https://drive.google.com/drive/folders/1XLoabtbRSFSUlDD8rUuN3U__GNzzVY1E"} />
                    </Canvas>
                    {/*<a class="bookLink" target="_blank" href={"https://drive.google.com/drive/folders/1XLoabtbRSFSUlDD8rUuN3U__GNzzVY1E"}>Kick the Drink... Easily!</a>*/}
                </div>
                <div className='book'>
                    {/*<p className='bookName'>Easyway</p>*/}
                    <Canvas className='canvas' height="calc(100vh - 248px)">
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Book position={[0, 0, 0]} image={easyWayCover} link={"https://drive.google.com/drive/folders/1XLoabtbRSFSUlDD8rUuN3U__GNzzVY1E"} />
                    </Canvas>
                    {/*<a class="bookLink" target="_blank" href={"https://drive.google.com/drive/folders/1XLoabtbRSFSUlDD8rUuN3U__GNzzVY1E"}>Easyway</a>*/}
                </div>
            </div>
            <h3 className='quitText'>You can help by sharing this page,</h3>
            <h3 className='quitText'>[[Share links here]]</h3>
            <p></p>
            <h3 className='quitText'>{"Discussing it on a <new type of computer> at ~mogsub-possum/easily"}</h3>
            <p></p>
            <h3 className='quitText'>{"And, if you'd like, by joining our campaign for <peaceful plain packaging laws>"}</h3>
            {/*<h2 className='orText'>Or...</h2>*/}
            {/*<button className='goDownBtn' onClick={() => document.getElementById('siteList').scrollIntoView()}>*/}
            {/*    <img className='downArrowImg' src={downArrow} alt="down arrow"></img>*/}
            {/*</button>*/}
            {/*<h3>Every **** site ever...</h3>*/}
            {/*<ul id='siteList' className='siteList'>*/}
            {/*    <li>Site Link</li>*/}
            {/*    <li>Site Link</li>*/}
            {/*    <li>Site Link</li>*/}
            {/*    <li>Site Link</li>*/}
            {/*    <li>Site Link</li>*/}
            {/*    <li>Site Link</li>*/}
            {/*</ul>*/}
        </div>
    );
}

export default App;
