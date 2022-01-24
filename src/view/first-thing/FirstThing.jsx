import React, {useEffect} from "react";
import styles from "./first-thing.module.scss";
import {Canvas} from "@react-three/fiber";
import BlueBox from "./meshComponent/BlueBox.jsx";
import {Physics} from "@react-three/cannon";
import Plane from "./meshComponent/Plane";
import {Stars} from "@react-three/drei";

const FirstThing = () => {
    const aspect = window.innerWidth / window.innerHeight;
    const width = 10;
    const height = width / aspect;
    const stack = [];
    const boxHeight = 1;
    const originalBoxSize = 3;
    let gameStarted = false;

    const addLayer = (x, z, width, depth, direction) => {
        const y = boxHeight * stack.length;
        const layer = BlueBox(x, y, z, width, depth, stack.length);
        layer.direction = direction;
        stack.push(layer);
    };

    useEffect(() => {
        addLayer(0, 0, originalBoxSize, originalBoxSize);
        addLayer(0, 0, originalBoxSize, originalBoxSize, "x");
    }, []);

    window.addEventListener("click", () => {
        if(!gameStarted) {
            gameStarted = true;
        } else {
            const topLayer = stack[stack.length - 1];
            const direction = topLayer.direction;
            
            const nextX = direction === "x" ? 0 : -10;
            const nextZ = direction === "z" ? 0 : -10;
            const newWidth = originalBoxSize;
            const newDepth = originalBoxSize;
            const nextDirection = direction === "x" ? "z" : "x";
            addLayer(nextX, nextZ, newWidth, newDepth, nextDirection);
        }
    });

    return (
        <div className={styles.firstThingContainer} id="first-thing-canvas">
            <Canvas orthographic={{
                left: width / -2,
                right: width / 2,
                top: height / 2,
                bottom: height / -2,
                near: 1,
                far: 100
            }}
            lookAt={[0, 0, 0]}
            camera={{zoom: aspect * 200, position: [70, 70, 70], width: width, height: height}}
            >
                <spotLight
                    position={[10, 15, 20]}
                    angle={0.5}
                />
                <Stars/>
                <ambientLight intensity={0.5}/>
                <Physics>
                    {

                    }
                    <BlueBox/>
                    <Plane/>
                </Physics>
            </Canvas>
        </div>
    );
};

export default FirstThing;