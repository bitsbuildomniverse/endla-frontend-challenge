import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

import { useGetWellProfileDataQuery } from "../services/wellProfile";

function WellPath(props) {
  const { path } = props;
  console.log("path", path);

  const mesh = useRef();
  const tubeRef = useRef();

  const [curve] = useState(() => {
    // Create an empty array to stores the points
    let points = [];

    // Define points along Z axis
    for (const point of path) {
      points.push(
        new THREE.Vector3(
          point[0] + props.wellpad[0],
          point[1] + props.wellpad[1],
          -point[2] + props.wellpad[2] // vertical depth +ve but in scene needs to be -ve on Z,
        )
      );
    }

    return new THREE.CatmullRomCurve3(points);
  });

  return (
    <mesh {...props} ref={mesh} scale={1}>
      {/* {geometry} */}
      <tubeGeometry ref={tubeRef} args={[curve, path.length, 5, 10, false]} />

      <meshBasicMaterial />
    </mesh>
  );
}

function exampleLineCalc(dataPoint) {
  // illustrates changing the line plot in threejs render loop
  const [x, y, z, density] = dataPoint;
  const calcedPos = [x, y + Math.random() * 10 + density * 20, -z]; // randomly create a new point
  const calcedVector = new THREE.Vector3(...calcedPos);
  return calcedVector;
}

function LineGraph(props) {
  const lithoTubeRadius = 5; //radius of the plotted well path (0 axis for lineplot)

  const wellPadLoc = new THREE.Vector3(...props.wellpad);

  const { camera } = useThree(); // reference to the threejs camera

  // access camera position
  var currentPosition = camera.position;

  // access camera rotation (rotation is euclidean)
  var currentRotation = camera.rotation;

  // you can find documentation of working with vectors in Three.js here
  // https://threejs.org/docs/#api/en/math/Vector3

  // this initialises a line in the scene
  var points = props.path.map((point) => exampleLineCalc(point));
  console.log("points", points);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  // this allows us to change the line on each render frame.
  useFrame(() => {
    for (const [i, point] of points.entries()) {
      const pos = exampleLineCalc(props.path[i]);
      point.copy(pos);
    }
    lineGeometry.setFromPoints(points); // update the line with new points
  });

  return (
    <mesh {...props}>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors={false}
          dashed={false}
          color={"#FFDA29"}
          attach={"material"}
        />
      </line>
    </mesh>
  );
}

function WellProfile() {
  const { data, error, isLoading } = useGetWellProfileDataQuery("dummy");
  console.log(data);
  const camera = useRef();

  // reference for total well depth to use in scene setup
  var well_TD = 500;
  if (data) {
    well_TD = data.well_path.at(-1)[2];
  }

  // orientate axis with +Z up
  THREE.Object3D.DefaultUp.set(0, 0, 1);

  return (
    <>
      <div>
        {data ? (
          <Canvas
            className="wellprofile-canvas"
            frameloop="demand"
            camera={{
              far: 5000,
              position: [0, -1.5 * well_TD, -60],
              ref: camera,
            }}
          >
            <ambientLight />
            <pointLight position={[1000, 1000, 1000]} />
            <gridHelper
              args={[1000, 25]}
              position={[0, 0, -well_TD - 20]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <OrbitControls enablePan={true} />

            <WellPath path={data.well_path} wellpad={data.wellpad} />
            <LineGraph path={data.well_path} wellpad={data.wellpad} />
          </Canvas>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
}

export default WellProfile;
