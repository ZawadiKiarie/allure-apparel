import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.components";

import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    event.preventDefault();
    try{
      const {user} = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields();
    }catch(error){
      if(error.code === 'auth/invalid-credential'){
        alert('Cannot sign in user, wrong credentials')
      }
      console.log('user sign in encountered an error', error)
    }
  }

  const handleChange = (event) => {
    const {name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  }

  const signInWithGoogle = async() => {
    try{
      await signInWithGooglePopup();
    }catch(error){
      console.log(error)
    }
  }


  return(
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

        <div className="buttons-container">
          <Button type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;