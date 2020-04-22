import React, { useState, useEffect } from "react";
import { Container, Floating, Item } from "./styles";
import { PoseGroup } from "react-pose";

const height = 100;
const rotations = {
  "3": [
    [(3 * Math.PI) / 2, Math.PI],
    [0, Math.PI / 2],
  ],
  "6": [
    [Math.PI, Math.PI],
    [0, 0],
  ],
};

function FloatingButton({ top = true, right = false, children }) {
  const [expanded, setExpanded] = useState(false);
  let number = React.Children.count(children);

  function getAngle(i) {
    const angle =
      number <= 3 ? Math.PI / 2 : number <= 6 ? Math.PI : 2 * Math.PI;
    const rotate =
      rotations[number <= 3 ? "3" : "6"][Number(top)][Number(right)];
    return {
      angle:
        rotate +
        (number <= 6 ? (i * angle) / (number - 1) : (i * angle) / number),
      distance:
        number <= 6
          ? height / Math.sin(angle / (number - 1)) + height / 2
          : height / Math.sin(angle / number) + height / 2,
    };
  }

  console.log(children);
  return (
    <Floating
      onClick={() => {
        setExpanded(!expanded);
      }}
      top={top}
      right={right}
      pose={expanded ? "open" : "closed"}
      number={number}
      distance={getAngle(0).distance}
    >
      <Container height={height} />
      <PoseGroup>
        {expanded &&
          [...Array(number)].map((x, i) => (
            <Item
              key={i}
              i={getAngle(i).angle}
              height={height}
              distance={getAngle(i).distance}
              style={{
                backgroundColor: children[i].props.color,
              }}
            >
              <img
                src={children[i].props.Imgsrc}
                style={{ height: 50, width: 50 }}
              />
            </Item>
          ))}
      </PoseGroup>
    </Floating>
  );
}

export default FloatingButton;
