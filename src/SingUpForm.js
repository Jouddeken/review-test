import React, { useRef, useEffect, useState } from 'react';

export function checkForBigNumber(value) {
  const [isBig, setIsBig] = useState();

  if (value < 1000) {
    setIsBig(true)
  }

  return isBig;
}

const salutationOptions = [
  { label: 'Sir', value: 'Sir' },
  { label: 'Madam', value: 'Madam' },
]

const SignUpForm = ({ options }) => {
  const [wideScreen, setWideScreen] = useState();
  const salutationRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      if (event.target.innerWidth > 1920) {
        setWideScreen(true);
      } else {
        setWideScreen(false);
      }
    });
  }, []);

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
      {wideScreen && (
        <h1>Wow, you have a massive screen!</h1>
      )}
      <div>
        <label htmlFor="salutation">Salutation</label>
        <br />
        <select ref={salutationRef} id="salutation">
          {salutationOptions.map((option, key) => (
            <option key={key} value={option.value}>{option.label}</option>
          ))}
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
