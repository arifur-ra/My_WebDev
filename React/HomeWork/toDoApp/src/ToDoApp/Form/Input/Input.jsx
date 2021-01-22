import PorpTypes from "prop-types"
import "./Input.css"

const Input = ({ id, label, placeholder, valueHandler }) => {
  return (
    <div class="col-auto my-1">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={valueHandler}
      />
    </div>
  )
}

Input.propTypes = {
  id: PorpTypes.string.isRequired,
  label: PorpTypes.string.isRequired,
  placeholder: PorpTypes.string,
}

export default Input
