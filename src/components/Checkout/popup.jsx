import React from "react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

function shopPopup() {
  return (
    <Popup
      trigger={<button className="buyButton">Pay with card</button>}
      position="top left"
      modal
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Thanks for your purchase </div>

          <div className="actions">
            <Link to="/" >
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              > 
                Return to home page
              </button>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default shopPopup;
