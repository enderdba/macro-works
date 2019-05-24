
import React, { useState } from "react";
import { ButtonGroup, Button } from 'react-bootstrap';

const ButtonBar = (props) => {
  const updateResult = (r) => {
    props.onUpdate(r.item)
    if (r.item !== "None") {
      setSecondOption(true)
    } else {
      setSecondOption(false)
    }
  };
  let activeIndex = 0;
  for (let i = 0; i < props.selections.length; i++) {
    const element = props.selections[i];
    if (element === props.active) {
      activeIndex = i
      break;
    }
  }
  const [active, setActive] = useState(activeIndex)
  const [active2, setActive2] = useState(0)
  const [secondOption, setSecondOption] = useState(false)
  return (
    <div>
      <ButtonGroup className={props.className} aria-label="Basic example"> {props.selections.map((item, index) => (
        <Button active={active === index || props.active === item}
          variant="{item}"
          key={index}
          onClick={
            () => {
              updateResult({ item })
              setActive(index)
            }
          }>{item}</Button>))
      }
      </ButtonGroup>
      {secondOption && props.onSelection ? (
        <div>
          <br />
          <h6>{props.onSelectionLabel}</h6>
          <ButtonGroup className={props.className} aria-label="Basic example"> {props.onSelection.map((item, index) => (
            <Button active={active2 === index}
              variant="{item}"
              onClick={
                () => {
                  setActive2(index)
                  if (props.onSelectionEvent) {
                    props.onSelectionEvent(item)
                    
                  }
                }
              }
              key={index}>{item}</Button>))
          }
          </ButtonGroup>
        </div>) : null}
    </div>
  )
}

export default ButtonBar
