import LoginLogo from '../../assets/images/login.svg'

import classes from '../../styles/login.module.css'
import Button from '../Button'
import CheckBox from '../CheckBox'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={LoginLogo} alt="Login" />
        <Form className={`${classes.login}`}>
          <TextInput type='text' placeholder="Enter Email" icon='alternate_email' />
          <TextInput type='text' placeholder="Enter Password" icon='lock' />
          <CheckBox />

          <Button>  <span>Submit Now</span> </Button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>

        </Form>
      </div>
    </>
  );

}

