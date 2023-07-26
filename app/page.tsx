"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

import { GetServerSidePropsContext, NextPage } from 'next'
import PageWithAuth from './contexts/auth'
import Login from './login/page'


// export default function Home() {
  
//   return (
//     <SignUp />
//   )
// }

const Home: NextPage = () => {
  
  return (<>
    <Login />
  </>)
}

export default PageWithAuth(Home)
