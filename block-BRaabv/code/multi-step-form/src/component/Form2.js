function Form2(props) {
    if (props.currentStep !== 2) {
      return null;
    }
  return (
    <>
      <fieldset className="field2">
        <label htmlFor="message">Message</label>
        <textarea
          id="textarea"
          name="textarea"
          value={props.message}
          onChange={props.handleChange}
          type="text"
          placeholder="Message"
        ></textarea>

        <div>
          <input
            type="checkbox"
            id="checkbox1"
            name="checkbox1"
            value={props.checkbox1}
            onChange={props.handleChange}
          />
          <label htmlFor="checkbox1">The number one choice</label>

          <input
            type="checkbox"
            id="checkbox2"
            name="checkbox2"
            value={props.checkbox2}
            onChange={props.handleChange}
          />
          <label htmlFor="checkbox2">The number Two choice</label>
        </div>
      </fieldset>
    </>
  );
}

export default Form2;
