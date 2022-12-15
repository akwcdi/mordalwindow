import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Click</button>
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

function Modal({ show, setShow }) {
  const closeModal = () => {
    setShow(false);
  };
  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <p>これがモーダルウィンドウです。</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
