import PropTypes from "prop-types"
import React from "react"
import Button from "../../Button/Button"
import { ButtonClass } from "../../Utils/ButtonUtils"
import "./ListItem.css"

const ListItem = ({ id, textContent }) => {
  return (
    <div class="form-check form-check-inline">
      {/* <div className="form-row align-item-center"> */}
      <input className="form-check-input" type="checkbox" id={id} value="" />
      <label className="form-check-label" for={id}>
        {textContent}
      </label>
      <Button buttonText="Delete" btnClass={ButtonClass.OUTLINE_DELETE} />
    </div>
  )
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
}

export default ListItem
