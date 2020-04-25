import React from 'react';
import './Modal.scss';

export function Modal(props) {
  return (
    <>
      {props.visible && (
        <div className="modal" role="dialog">
          <div className="modal-body">
            <div className="modal-header">
              <button onClick={props.onClose}>X</button>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
