import { useRef } from 'react';

const SignUpForm = ({ options }) => {
  const salutationRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();

  return (
    <form onSubmit={(_) => {
      _.preventDefault();

      console.log('values -->', {
        salutation: salutationRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        age: ageRef.current.value,
      });
    }}>
      <div>
        <label htmlFor="salutation">Salutation</label>
        <br />
        <select ref={salutationRef} id="salutation">
          <option value="Sir">Sir</option>
          <option value="Madam">Madam</option>
        </select>
      </div>
      <br />
      <div>
        <label htmlFor="first_name">First name</label>
        <br />
        <input ref={firstNameRef} id="first_name" />
      </div>
      <br />
      <div>
        <label htmlFor="last_name">Last name</label>
        <br />
        <input ref={lastNameRef} id="last_name" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <br />
        <input ref={ageRef} id="age" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
