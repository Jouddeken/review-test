import { useRef } from 'react';

const SignUpForm = ({ options }) => {
  const salutationRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      console.log('values -->', {
        salutation: salutationRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
