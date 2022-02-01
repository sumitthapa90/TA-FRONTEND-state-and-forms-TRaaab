function Form3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <fieldset className="field3">
        <div>
          <input
            type="checkbox"
            id="checkbox3"
            name="checkbox3"
            value={props.checkbox3}
            onChange={props.handleChange}
          />
          <label htmlFor="checkbox3">I wante to add this option</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="checkbox4"
            name="checkbox4"
            value={props.checkbox4}
            onChange={props.handleChange}
          />
          <label htmlFor="checkbox4">The number one choice</label>
        </div>

        <button>Sing Up</button>
      </fieldset>
    </>
  );
}
export default Form3;
