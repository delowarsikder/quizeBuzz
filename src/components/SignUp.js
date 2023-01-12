import Illustration from './Illustration'
import Form from './Form'
import TextInput from './TextInput'
import classes from '../styles/SignUp.module.css'

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type='text' placeholder="Enter Name " icon='person' />
          <TextInput type='text' placeholder="Enter Email" icon='alternate_email' />
          <TextInput type='text' placeholder="Enter Password" icon='lock' />
          <TextInput type='text' placeholder="Confirm password" icon='lock_clock' />
        </Form>
      </div>
    </>
  );

}

