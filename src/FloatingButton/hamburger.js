import React, { useState } from "react";
import styled from "styled-components";
import posed from "react-pose";

const ToggleWrapper = styled.span`
  cursor: pointer;
  display: flex;
  height: ${(props) => props.height / 2}px;
  position: relative;
  width: ${(props) => props.height / 2}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Line = styled.div`
  height: 4px;
  width: ${(props) => props.height * 0.5}px;
  border: white;
  border-radius: 3px;
  background-color: white;
`;

const Line1 = posed(Line)({
  open: {
    y: 10,
    rotate: 45,
  },
  closed: { y: 0, rotate: 0 },
});

const Line2 = posed(Line)({
  open: {
    rotate: 0,
    width: 0,
  },
  closed: { width: (props) => props.height * 0.6, rotate: 0 },
});

const Line3 = posed(Line)({
  open: {
    y: -10,
    rotate: -45,
  },
  closed: { y: 0, rotate: 0 },
});

const MenuToggle = ({ height, color }) => {
  const [open, setOpen] = useState(false);
  console.log(`height ${height}`);
  return (
    <ToggleWrapper onClick={() => setOpen(true)} height={height}>
      <Line1 pose={open ? "open" : "closed"} height={height} />
      <Line2 pose={open ? "open" : "closed"} height={height} />
      <Line3 pose={open ? "open" : "closed"} height={height} />
    </ToggleWrapper>
  );
};

export default MenuToggle;
