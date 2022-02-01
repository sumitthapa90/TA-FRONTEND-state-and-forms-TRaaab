function Form1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <>
      <fieldset className="field">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={props.firstname}   
          onChange={props.handleChange}
          placeholder="FirstName"
        />

        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={props.lastname}
          onChange={props.handleChange}
          placeholder="LastName"
        />

        <label htmlFor="date">Date of Birth</label>
        <input
          type="date"
          id="date"
          name="date"
          value={props.date}
          onChange={props.handleChange}
          placeholder="Date"
        />

        <label htmlFor="lastname">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={props.email}
          onChange={props.handleChange}
          placeholder="Email"
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={props.address}
          onChange={props.handleChange}
          placeholder="address"
        />
      </fieldset>
    </>
  );
}

export default Form1;
