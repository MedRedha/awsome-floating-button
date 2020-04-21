import React, { useState } from 'react';
import { Container, Floating, Item } from "./styles";
import posed, { PoseGroup } from 'react-pose'

const number = 5;
const height = 100;

function getAngle(i) {
    const angle = number <= 3 ? Math.PI/2 : number <= 6 ? Math.PI : 2*Math.PI;
    return {angle:i* angle / (number - 1),
        distance: height/(Math.sin(angle / (number - 1))) + height/2
}
}
function FloatingButton() {
    const [expanded, setExpanded] = useState(false)
    return (
        <Floating
            //onMouseEnter={()=> {setExpanded(!expanded)}}
            //onMouseLeave={()=> {setExpanded(!expanded)}}
            onClick={()=> {setExpanded(!expanded)}}
        >
            <Container  height={height}/>
            <PoseGroup>
                {expanded && [...Array(number)].map((x, i) =>
                    <Item key={i}
                          i={getAngle(i).angle}
                          height={height}
                          distance={getAngle(i).distance}
                          onClick={()=>{console.log(`this is item ${i}`)}}
                    />
                )}
            </PoseGroup>
        </Floating>
    );
}

export default FloatingButton;
