import PropTypes from "prop-types"
import React from "react"

const Searchbar = ({ searchUsers, clearUsers, showClear }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    searchUsers(e.target.text.value)
    e.target.text.value = ""
  }

  return (
    <>
      <form action="#" onSubmit={submitHandler} className="form">
        <input type="text" name="text" placeholder="Search Users...." />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </>
  )
}
Searchbar.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
}
export default Searchbar
