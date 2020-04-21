import React, { useState } from 'react';
import { Container, Floating, Item } from "./styles";
import posed, { PoseGroup } from 'react-pose'

let number = 3;
const height = 100;


function getAngle(i) {
    const angle = number <= 3 ? Math.PI/2 : number <= 6 ? Math.PI : 2*Math.PI;
    return {
        angle:number <= 6 ? i* angle / (number - 1) : i* angle / (number),
        distance: number <= 6 ?
            height/(Math.sin(angle / (number - 1))) + height/2
            : height/(Math.sin(angle / (number))) + height/2
    }
}
function FloatingButton({top= true, right= false}) {
    const [expanded, setExpanded] = useState(false)
    console.log(getAngle(0))
    return (
        <Floating
            //onMouseEnter={()=> {setExpanded(!expanded)}}
            //onMouseLeave={()=> {setExpanded(!expanded)}}
            onClick={()=> {setExpanded(!expanded)}}
            top={top} right={right} pose={expanded? 'open' : 'closed'}
            number={number} distance={getAngle(0).distance}
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
