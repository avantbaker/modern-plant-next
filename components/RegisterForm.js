import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Input from '@components/input';
import Button from '@components/button';
import Checkbox from '@components/Checkbox';
import useForm from '../utils/useForm';
import graphql from '../lib/graphql';
import { CUSTOMER_CREATE_MUTATION } from '../graphql';

// todo: add form validation
// todo: add confirm password field

export default function RegisterForm() {
  const router = useRouter();
  const { values, updateValue } = useForm({ 
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptsMarketing: false,    
  });

  const [success, setSuccess] = useState(false);

  return (
    <form 
      className="contact-form"
      onSubmit={async (e) => {
        e && e.preventDefault();

        const mutation = await graphql(CUSTOMER_CREATE_MUTATION, values);

        if (mutation && mutation.data && mutation.data.customerCreate) {

          setSuccess(true);

          router.push('/login');
        }
      }}
    >
      <div className="contact-form__form">
          <h1 className="contact-form__title heading-1 mb-xxl">Register Your Account</h1>
          <div className="contact-form__fields mb-lg">
              <Input 
                className="contact-form__field mb-lg" name="firstName" 
                type="text" 
                placeholder="First Name"
                value={values.firstName}
                onChange={updateValue}
              />
              <Input 
                className="contact-form__field mb-lg" name="lastName" 
                type="text" 
                placeholder="Last Name"
                value={values.lastName}
                onChange={updateValue}
              />
              <Input 
                className="contact-form__field mb-lg" name="email" 
                type="email" 
                placeholder="Email"
                value={values.email}
                onChange={updateValue}
              />
              <Input 
                className="contact-form__field mb-lg" 
                name="password"
                type="password"
                value={values.password}
                onChange={updateValue}
                placeholder="Password"
              />
              {/* <Input 
                className="contact-form__field mb-lg" 
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={updateValue}
                placeholder="Confirm Password"
              /> */}
              <Checkbox 
                className="contact-form__field mblg"
                name="acceptsMarketing"
                value={values.acceptsMarketing}
                onChange={updateValue}
                label="Would you like to receive updates from us?"
              />
              <div className="mt-md">
                <Button text="Register" buttonType="submit" />
              </div>
              {success && <div className="success">Your account has been created successfully</div>}
          </div>
          <div>
            <Link href="/forgot-password"> 
              <a className="paragraph--small-underlined mb-lg">Forgot your password?</a>
            </Link>
            <Link href="/login">
              <a className="paragraph--small-underlined">Already have an account? Login in now!</a>
            </Link>
          </div>
      </div>
    </form>
  )
}