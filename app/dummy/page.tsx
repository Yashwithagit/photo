"use client"
import PageWithAuth from "app/contexts/auth"
import { NextPage } from "next"

const Dummy: NextPage = () => {
  
    return (<>
      <h1>Protect route</h1>
    </>)
  }
  
  export default PageWithAuth(Dummy)