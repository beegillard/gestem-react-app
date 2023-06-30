import React from 'react';
import styles from './Registration.module.css';

function Registration() {
    return (
<form className={styles.form}>
  <label for="email">Email address:</label><br />
  <input type="text" id="email" name="email" /><br />
  <label for="name">First and last name:</label><br />
  <input type="text" id="name" name="name" /><br />
  <p>I am a...</p> <br />

  <input type="radio" id="professional" name="occupation" />
  <label for="professional">Professional</label><br />
  <input type="radio" id="college" name="occupation" />
  <label for="college">College Student</label><br />
  <input type="radio" id="highschool" name="occupation" />
  <label for="highschool">High School Student</label><br />
  <input type="submit" value="Submit" />
</form>

    )


};

export default Registration;

