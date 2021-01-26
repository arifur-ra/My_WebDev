const Keyboard = ({
  addClassName,
  increaseParticipant,
  decreaseParticipant,
  handleInput,
  error,
}) => {
  return (
    <div className="keyboard">
      <input
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder=" Add Class Name"
      />
      <p>{error}</p>
      <button onClick={addClassName}>Add Class Name</button>
      <button onClick={increaseParticipant}>Increase Participants</button>
      <button onClick={decreaseParticipant}> Decrease Participants</button>
    </div>
  )
}

export default Keyboard
