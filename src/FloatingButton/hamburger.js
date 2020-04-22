import React, {useState} from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import {Floating} from "./styles";

const ToggleWrapper = styled.span`
  cursor: pointer;
  display: flex;
  height: 30px;
  position: relative;
  width: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Line = styled.div`
  height: 4px;
  width: 30px;
  border: white;
  border-radius: 3px;
  background-color: white;
`

const Line1 = posed(Line)({
    open: {
        y: 10,
        rotate: 45
    },
    closed: { y: 0,rotate: 0 },
})

const Line2 = posed(Line)({
    open: {
        rotate: 0,
        width: 0,
    },
    closed: { width: 30, rotate: 0 },
})

const Line3 = posed(Line)({
    open: {
        y: -10,
        rotate: -45
    },
    closed: { y: 0,rotate: 0 },
})

const MenuToggle = () => {
    const [open, setOpen] = useState(false)
    return (
        <ToggleWrapper onClick={()=> setOpen(true)}>
            <Line1 pose={open ? "open" : "closed"}/>
            <Line2 pose={open ? "open" : "closed"}/>
            <Line3 pose={open ? "open" : "closed"}/>
        </ToggleWrapper>
    );
}

export default MenuToggle;
