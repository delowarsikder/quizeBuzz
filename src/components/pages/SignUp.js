import Button from '../Button'
import CheckBox from '../CheckBox'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

import SignUpLogo from '../../assets/images/signup.svg'
import classes from '../../styles/SignUp.module.css'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={SignUpLogo} alt="SignUp" />

        <Form className={`${classes.signup}`}>
          <TextInput type='text' placeholder="Enter Name " icon='person' />
          <TextInput type='text' placeholder="Enter Email" icon='alternate_email' />
          <TextInput type='text' placeholder="Enter Password" icon='lock' />
          <TextInput type='text' placeholder="Confirm password" icon='lock_clock' />
          <CheckBox >
            <span>I agree to the Terms & Conditions</span>
          </CheckBox>
          <Button>  <span>Submit Now</span> </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>

        </Form>
      </div>
    </>
  );

}

