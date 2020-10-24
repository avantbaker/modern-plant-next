import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Input from '@components/input';
import Button from '@components/button';
import useForm from '../utils/useForm';
import graphql from '../lib/graphql';
import { CUSTOMER_TOKEN_CREATE_MUTATION } from '../graphql';
import cookies from '../lib/cookies';


// todo: add authentication via session cookies

export default function LoginForm() {
  const router = useRouter();
  const { values, updateValue } = useForm({ 
    email: '',
    password: '',
  });

  const [success, setSuccess] = useState(false);

  return (
    <form 
      className="contact-form"
      onSubmit={async (e) => {
        e && e.preventDefault();

        const mutation = await graphql(CUSTOMER_TOKEN_CREATE_MUTATION, values);

        if (mutation && mutation.data && mutation.data.customerAccessTokenCreate) {

          const token = mutation?.data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;

          // sets accessToken session
          cookies.setCookie("accessToken", token, 30);

          setSuccess(true);
          router.push(`/account/${token}`);
        }
      }}
    >
      <div className="contact-form__form">
          <h1 className="contact-form__title heading-1 mb-xxl">My Account</h1>
          <div className="contact-form__fields mb-lg">
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
              <div className="mt-md">
                <Button text="Login" buttonType="submit" />
              </div>
              {success && <div className="success">Your account has been created successfully</div>}
          </div>
          <div>
            <Link href="/forgot-password">
              <a className="paragraph--small-underlined mb-lg">Forgot your password?</a>
            </Link>
            <Link href="/register">
              <a className="paragraph--small-underlined">Don't have an account? Sign up now!</a>
            </Link>
          </div>
      </div>
    </form>
  )
}