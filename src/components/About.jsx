import { Helmet } from 'react-helmet-async';

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      <h1>About Us</h1>
    </div>
  );
}

export default AboutUs;
