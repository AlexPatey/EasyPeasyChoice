import './App.css';
import easyPeasyLogo from "./images/easypeasy.jpg";
import kickTheDrinkCover from "./images/kickthedrink.jpg";
import easyWayCover from "./images/easyway.jpg";
import ppmoCover from "./images/ppmo.jpg";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'
import { TextureLoader } from 'three';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { useMediaQuery } from 'react-responsive';

function Book(props) {

    const ref = useRef()

    const [hovered, hover] = useState(false)

    useFrame((state, delta) => hovered ? (ref.current.rotation.y += 0.005) : ref.current.rotation.y = 0)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh
            {...props}
            ref={ref}
            scale={2}
            onClick={() => window.open(props.link, "_blank")}
            onPointerDown={(event) => hover(true)}
            onPointerUp={(event) => hover(false)}
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
            <h2 className='easyTitle'>Welcome</h2>
            <h3 className='quitText'>Everything we know about addiction is wrong (that's okay though!)</h3>
            <h3 className='quitText'>Free books, with love -- for you, and anyone else</h3>
            <div className='row bookContainer'>
                <div className='col-xl-6 col-lg-12'>
                    <div id='quittingPMO' className='quittingHeader'>Quit PMO</div>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <Canvas className='canvas' height="calc(100vh - 248px)">
                                <ambientLight intensity={1}/>
                                <pointLight position={[0, 10, 0]} />
                                <Book position={[0, 0, 0]} image={easyPeasyLogo} link={"https://easypeasymethod.org/"} />
                            </Canvas>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <Canvas className='canvas' height="calc(100vh - 248px)">
                                <ambientLight intensity={1} />
                                <pointLight position={[0, 10, 0]} />
                                <Book position={[0, 0, 0]} image={ppmoCover} link={"https://ppmo.vercel.app/chapter/0"} />
                            </Canvas>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-12'>
                    <div id='quittingDrinking' className='quittingHeader'>Quit Drinking</div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='col-12'>
                                <Canvas className='canvas'>
                                    <ambientLight intensity={1} />
                                    <pointLight position={[0, 10, 0]} />
                                    <Book position={[0, 0, 0]} image={kickTheDrinkCover} link={"https://drive.google.com/drive/folders/1XLoabtbRSFSUlDD8rUuN3U__GNzzVY1E"} />
                                </Canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-12'>
                    <div id='quittingSmoking' className='quittingHeader'>Quit Smoking</div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='col-12'>
                                <Canvas className='canvas' height="calc(100vh - 248px)">
                                    <ambientLight intensity={1}/>
                                    <pointLight position={[0, 10, 0]} />
                                    <Book position={[0, 0, 0]} image={easyWayCover} link={"https://drive.google.com/drive/folders/1XLoabtbRSFSUlDD8rUuN3U__GNzzVY1E"} />
                                </Canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='helpText'>You can help by sharing this page,</h4>
            <ul className='shareLinksUL'>
                <li>
                    <FontAwesomeIcon className='shareIcons' icon={faFacebook} />
                    <a className='shareLink' href="https://www.facebook.com/sharer/sharer.php?u=https%3A//agreeable-pebble-090d32003.2.azurestaticapps.net/">Share on Facebook</a>
                </li>
                <li>
                    <FontAwesomeIcon className='shareIcons' icon={faTwitter} />
                    <a className='shareLink' href="https://twitter.com/intent/tweet?text=https%3A//agreeable-pebble-090d32003.2.azurestaticapps.net/">Share on Twitter</a>
                </li>
                <li>
                    <FontAwesomeIcon className='shareIcons' icon={faLinkedin} />
                    <a className='shareLink' href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//agreeable-pebble-090d32003.2.azurestaticapps.net/">Share on LinkedIn</a>
                </li>
            </ul>
            <p></p>
            <h4 className='helpText'>{"Discussing it on a <new type of computer> at ~mogsub-possum/easily"}</h4>
            <p></p>
            <h4 className='helpText bottomPadding'>{"And, if you'd like, by joining our campaign for <peaceful plain packaging laws>"}</h4>
        </div>
    );
}

export default App;
