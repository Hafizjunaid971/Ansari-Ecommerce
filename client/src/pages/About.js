import React from 'react'
import Layout  from './../components/Layout/Layout.js';
const About = () => {
  return (
    <Layout title={"About Junaid Shopping"}>
    <h1>AboutPage</h1>
       </Layout>
  )
}
Layout.defaultProps = {
  title: "Junaid Shopping app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Hafiz Junaid Ahmed",
};
export default About