import React from "react";
import {usePlane} from "@react-three/cannon";

const Plane = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0]
    }));
    return (
        <mesh
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            ref={ref}
        >
            <planeBufferGeometry attach='geometry' args={[100, 100]}/>
            <meshLambertMaterial attach='material' opacity={0.7} color={"yellow"}/>
        </mesh>
    );
};

export default Plane;