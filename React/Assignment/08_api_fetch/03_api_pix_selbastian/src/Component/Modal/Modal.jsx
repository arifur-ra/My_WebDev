import React from "react"

const Modal = ({ closeModal, img }) => {
  return (
    <div className="modal">
      <button className="close" onClick={closeModal}>
        close
      </button>
      <img src={img.largeImageURL} alt={img.id} />
      <span className="tags">{img.tags}</span>
    </div>
  )
}

export default Modal
