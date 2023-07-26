'use client';
import React from 'react'
import { CardContainer, CardHeader, FormContainer, FormField, FormFieldIcon, FormFieldInput, LinkContainer, LinkText, PhotoGraphyBgContainer } from '@/styles/globalStyles'
import Link from 'next/link'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import PageWithAuth from 'app/contexts/auth';


const SignUp = () => {
  return (
    <><PhotoGraphyBgContainer />
      <CardContainer>
        <CardHeader>Sign Up</CardHeader>
        <FormContainer action="#">
          <FormField>
            <FormFieldIcon><MdIcons.MdEmail /></FormFieldIcon>
            <FormFieldInput type="text" required placeholder="Email" />
          </FormField>
          <FormField>
            <FormFieldIcon><RiIcons.RiUser3Fill /></FormFieldIcon>
            <FormFieldInput type="text" required placeholder="User Name" />
          </FormField>
          <FormField>
            <FormFieldIcon><MdIcons.MdPhone /></FormFieldIcon>
            <FormFieldInput type="text" required placeholder="Contact" />
          </FormField>
          <FormField>
            <FormFieldIcon><RiIcons.RiLockPasswordFill /></FormFieldIcon>
            <FormFieldInput type="password" required placeholder="Password" />
          </FormField>

          <FormField>
            <FormFieldInput type="submit" value="SIGN UP" />
          </FormField>
        </FormContainer>

        <LinkContainer>
          Already have account?
          <Link href={'/login'}><LinkText>Login</LinkText></Link>
        </LinkContainer>
      </CardContainer ></>

  )
}

export default PageWithAuth(SignUp)





