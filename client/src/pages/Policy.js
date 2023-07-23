import React from 'react'
import Layout from '../components/Layout/Layout.js'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Policy = () => {
  return (
    
    <Layout title={"Policy us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/img/hd1.jpg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">My Policy</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
          <BiMailSend /> : www.netsoltech.com.com
          </p>
          <p className="mt-3">
          <BiPhoneCall /> : 0312-22222
          </p>
          <p className="mt-3">
          <BiSupport /> : 10000000000000000(toll free)
          </p>
        </div>
      </div>
    

    </Layout>

  )
}

export default Policy