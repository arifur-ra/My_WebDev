import PropTypes from "prop-types"
import React from "react"
import "./Button.css"

const Button = ({ buttonText, btnClass, clickHandler }) => {
  btnClass = btnClass ? btnClass : "primary"
  return (
    <div class="col-auto my-1">
      <button
        type="button"
        className={`btn btn-sm btn-${btnClass}`}
        onClick={clickHandler}
      >
        {buttonText}
      </button>
    </div>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  clickHandler: PropTypes.string.isRequired,
}

export default Button
