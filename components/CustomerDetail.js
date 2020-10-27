import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Input from '@components/input';
import Button from '@components/button';
import useForm from '../utils/useForm';
import graphql from '../lib/graphql';
import { CUSTOMER_UPDATE_MUTATION, CUSTOMER_TOKEN_DELETE_MUTATION } from '../graphql';
import cookies from '../lib/cookies';



export default function CustomerDetail({ token, customer }) {
  const router = useRouter();
  const { values, updateValue } = useForm(customer);

  const [success, setSuccess] = useState(false);

  return (
    <form 
      className="contact-form"
      onSubmit={async (e) => {
        e && e.preventDefault();

        const mutation = await graphql(CUSTOMER_UPDATE_MUTATION, { customerAccessToken: token, ...values });


        if (mutation && mutation.data && mutation.data.customerUpdate) {

          setSuccess(true);
        }
      }}
    >
      <div className="contact-form__form">
          <h2 className="contact-form__title heading-2 mb-xl">Hello, {customer.firstName}</h2>
          <Button className="mb-xl" text="Logout" buttonType="button" onClick={async () => {
            const res = await graphql(CUSTOMER_TOKEN_DELETE_MUTATION, { customerAccessToken: token });
            
            cookies.eraseCookie('accessToken');
            
            router.push('/');
            
          }}>Log Out</Button>
          <h3 className="heading-3 mb-xxl">Update Profile</h3>
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
                placeholder="First Name"
                value={values.lastName}
                onChange={updateValue}
              />
              <Input 
                className="contact-form__field mb-lg" name="email" 
                type="email" 
                placeholder="Email"
                value={values.email}
                default
                onChange={updateValue}
              />
              <div className="mt-md">
                <Button text="Update Profile" buttonType="submit" />
              </div>
              {success && <div className="success">Your account has been updated successfully</div>}
          </div>
      </div>
    </form>
  )
}