import React from "react";
import ReactDom from "react-dom";

// styled
import {
  StyledModal
} from "./styles";

const modalRoot = document.getElementById("modal-root");

export default function Modal (props) {
  const background = React.createRef();
  
  const [fadeType, setFadeType] = React.useState('');

  React.useEffect((prevProps) => {
    setTimeout(() => setFadeType("in"), 0);

    if (!props.isOpen && prevProps.isOpen) {
      setFadeType("out");
    }
  }, [props.isOpen]);

  function transitionEnd (e) {
    if (e.propertyName !== "opacity" || fadeType === "in") return;

    if (fadeType === "out") {
      props.onClose();
    }
  };

  function handleClick (e) {
    e.preventDefault();
    setFadeType("out");
  };

  return ReactDom.createPortal(
    <StyledModal
      id={props.id}
      className={`wrapper ${"size-" + props.modalSize} fade-${fadeType} ${
        props.modalClass
      }`}
      role="dialog"
      modalSize={props.modalSize}
      onTransitionEnd={transitionEnd}
    >
      <div className="box-dialog">
        <div className="box-header">
          <h4 className="box-title">
            <i class={`box-icon ${props.icon}`}></i> {props.title}
          </h4>
          <button onClick={handleClick} className="close">
            ×
          </button>
        </div>
        <div className="box-content">{props.children}</div>
        <div className="box-footer">
          <button onClick={handleClick} className="close">
            Close
          </button>
        </div>
      </div>
      <div
        className={`background`}
        onMouseDown={handleClick}
        ref={background}
      />
    </StyledModal>,
    modalRoot
  );
}
