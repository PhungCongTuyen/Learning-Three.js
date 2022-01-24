import React from "react";
import {softShadows} from "@react-three/drei";
import {useBox} from "@react-three/cannon";

softShadows();

const BlueBox = (x, y, z, width, depth, length) => {
    const [ref] = useBox(() => ({
        mass: 1, position: [0, 2, 0]
    }));

    return {
        child: <mesh
            position={[0, 2, 0]}
            ref={ref}
        >
            <boxBufferGeometry attach="geometry" args={[3, 1, 3]}/>
            <meshLambertMaterial attach="material"  color={`hsl(${30 + length * 4}, 100%, 50%)`}/>
        </mesh>,
        width,
        depth
    }

    ;
};

export default BlueBox;