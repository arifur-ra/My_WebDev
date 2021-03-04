import React, { useState } from "react"
import APIServicesInst from "../services/APIservices"
import Form from "./Form/Form"
import Image from "./Image/Image"
import Modal from "./Modal/Modal"

const Main = () => {
  const [query, setQuery] = useState("")
  const [amount, setAmount] = useState(5)
  const [images, setImages] = useState([])
  const [imgModal, setImgModal] = useState(null)

  const onChangeHandler = (e) => {
    // Save the query or amount in the state
    APIServicesInst.onChange(e, setAmount, setQuery)
  }

  const onSubmitHandler = () => {
    //Take query and amount and make api call
    APIServicesInst.onSubmit(query, setImages, amount)
  }
  const openModal = (img) => {
    // take the img from parameters and set into the imgModal state variable and open the model
    APIServicesInst.openModal(img, setImgModal)
  }

  const closeModal = () => {
    // close modal and query
    APIServicesInst.closeModal(setImgModal)
  }

  return (
    <div className="container">
      {/* from component: query, amount, onChangeHandler, onSubmitHandler */}
      <Form
        query={query}
        onChangeHandler={onChangeHandler}
        amount={amount}
        onSubmitHandler={onSubmitHandler}
      />
      {/* listOfImage, openModal */}

      {images.length > 0 ? (
        <Image images={images} openModal={openModal} />
      ) : null}

      {imgModal ? <Modal img={imgModal} closeModal={closeModal} /> : null}
    </div>
  )
}

export default Main
