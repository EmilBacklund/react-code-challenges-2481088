import { useState } from 'react';

export default function FormValidator() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleFormData = (e) => {
    e.preventDefault();
    let isEmailValid = false;
    let isPasswordValid = false;
    let isConfirmedPasswordValid = false;
    const generalMessage = document.querySelector('#generalMessage');

    if (email.length > 0 && email.split('@').length === 2) {
      isEmailValid = true;
    } else {
      isEmailValid = false;
      generalMessage.innerHTML = 'Email must have exactly one @ sign';
    }

    if (password.length >= 8) {
      isPasswordValid = true;
    } else {
      isPasswordValid = false;
      generalMessage.innerHTML = 'Password must be 8 or more chars';
    }

    if (passwordConfirm === password) {
      isConfirmedPasswordValid = true;
    } else {
      isConfirmedPasswordValid = false;
      generalMessage.innerHTML =
        'Confirm Password must be the same as Password';
    }

    if (!password || !passwordConfirm || !email) {
      generalMessage.innerHTML = 'All fields must be filled in';
    }

    if (isEmailValid && isPasswordValid && isConfirmedPasswordValid) {
      generalMessage.innerHTML = 'Success!!';
    }
  };

  return (
    <form onSubmit={handleFormData}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div id="generalMessage"></div>
      <input type="submit" value="Submit" />
    </form>
  );
}
