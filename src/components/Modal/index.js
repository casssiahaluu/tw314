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
        <div className={`box-header ${props.type}`}>
          <h4 className="box-title">
            <i className={`box-icon ${props.icon}`}></i> {props.title}
          </h4>
        </div>
        <div className="box-content">{props.children}</div>
        <div className="box-footer">
          {props.actionButton && (
            <React.Fragment>
              <button onClick={handleClick} className="close-button">
                {props.actionButton.labelClose}
              </button>
              <button
                onClick={props.actionButton.action}
                className={`action-button ${props.type}`}
              >
                {props.actionButton.labelAction}
              </button>
            </React.Fragment>
          )}
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
