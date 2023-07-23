import React from 'react'
import  Layout  from './../components/Layout/Layout.js';
import { useAuth } from "../context/auth.js"

export const HomePage = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout title={"Junaid Home Page"}>
 <h1>HomePage</h1>
 <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
   
  )
}
