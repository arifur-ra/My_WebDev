import React from "react"

const Image = ({ images, openModal }) => {
  return (
    <div className="imgList">
      {images.map((img) => {
        return (
          <div key={img.id} className="imgItem">
            <h4>{img.tags}</h4>
            <img
              src={img.previewURL}
              alt={img.id}
              onClick={() => openModal(img)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Image
