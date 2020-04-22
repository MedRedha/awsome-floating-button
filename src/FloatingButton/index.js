import React, { useState } from "react";
import { Container, Floating, Item } from "./styles";
import { PoseGroup } from "react-pose";
import PropTypes from "prop-types";

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

function FloatingButton({
  color,
  height,
  top = true,
  right = false,
  children,
}) {
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
      <Container
        height={height}
        style={{ backgroundColor: `${color || "none"}` }}
      />
      <PoseGroup>
        {number === 1 ? (
          <Item
            key={0}
            i={getAngle(0).angle}
            height={height}
            distance={getAngle(0).distance}
            style={{
              backgroundColor: children.props.color,
            }}
            onClick={() => children.props.onClick()}
          >
            <img
              src={children.props.imgSrc}
              style={{ height: height / 2, width: height / 2 }}
              alt={"icon"}
            />
          </Item>
        ) : (
          expanded &&
          [...Array(number)].map((x, i) => (
            <Item
              key={i}
              i={getAngle(i).angle}
              height={height}
              distance={getAngle(i).distance}
              style={{
                backgroundColor: children[i].props.color,
              }}
              onClick={() => children[i].props.onClick()}
            >
              <img
                src={children[i].props.imgSrc}
                style={{ height: height / 2, width: height / 2 }}
                alt={`icon-${i}`}
              />
            </Item>
          ))
        )}
      </PoseGroup>
    </Floating>
  );
}

FloatingButton.defaultProps = {
  color: "none",
  height: 60,
  top: true,
  right: false,
  children: {},
};

FloatingButton.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  top: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.object,
};

export default FloatingButton;
