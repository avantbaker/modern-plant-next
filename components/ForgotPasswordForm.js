import React, { useState } from 'react';
import Input from '@components/input';
import Button from '@components/button';
import useForm from '../utils/useForm';
import graphql from '../lib/graphql';
import { CUSTOMER_RECOVER_MUTATION } from '../graphql';


export default function ForgotPasswordForm() {
  const { values, updateValue } = useForm({ 
    email: 'gabrielzzarate@gmail.com',
  });

  const [notification, setNotification] = useState(null);

  return (
    <form 
      className="contact-form"
      onSubmit={async (e) => {
        e && e.preventDefault();

        const mutation = await graphql(CUSTOMER_RECOVER_MUTATION, values);

        if (mutation && mutation.data && mutation.data.customerRecover && mutation.data.customerRecover.customerUserErrors && mutation.data.customerRecover.customerUserErrors.length === 0) {
          setNotification({
            type: 'success',
            message: 'Check your email to update your password'
          });
        } else {
          const error = mutation?.data?.customerRecover?.customerUserErrors[0]?.message || mutation?.errors[0].message;

          setNotification({
            type: 'error',
            message: error,
          })
        }

      }}
    >
      <div className="contact-form__form">
          <h1 className="contact-form__title heading-1 mb-xxl">Forgot Password</h1>
          <div className="contact-form__fields mb-lg">
              <Input 
                className="contact-form__field mb-lg" name="email" 
                type="email" 
                placeholder="Email"
                value={values.email}
                onChange={updateValue}
              />
              <div className="mt-md">
                <Button text="Reset Password" buttonType="submit" />
              </div>
              {notification && <div className={`notification ${notification.type}` }>{notification.message}</div>}
          </div>
          <div>
          </div>
      </div>
    </form>
  )
}