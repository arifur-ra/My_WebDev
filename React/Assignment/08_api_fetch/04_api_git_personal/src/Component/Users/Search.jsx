import PropTypes from "prop-types"
import React, { useState } from "react"

const Search = ({ searchName, showClear, clearUsers }) => {
  const [name, setName] = useState("")
  const ChangeHandler = (e) => {
    setName(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    // fetch users according the searching name
    searchName(name)
    // clean the input
    console.log(name)
    setName("")
    console.log(name)
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          name="text"
          placeholder="Search Users Name..."
          onChange={ChangeHandler}
          value={name}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}
Search.propTypes = {
  searchName: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  clearUsers: PropTypes.func.isRequired,
}

export default Search
