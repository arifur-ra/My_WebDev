import PropTypes from "prop-types"
import React from "react"
import Button from "../Button/Button"
import "./Form.css"
import Input from "./Input/Input"

const Form = ({ updateInputHandler, submitForm }) => {
  return (
    <div className="container">
      <form>
        <div className="form-row align-item-center">
          <Input
            id="new-todo-input"
            label="add a new to-do "
            placeholder="Add to-do-item"
            valueHandler={updateInputHandler}
          />
          <Button buttonText="Add item" clickHandler={submitForm} />
        </div>
      </form>
    </div>
  )
}

Form.propTypes = {
  updateInputHandler: PropTypes.string.isRequired,
  submitForm: PropTypes.string.isRequired,
}

export default Form
