import { Helmet } from 'react-helmet-async';

function Landing() {
  return (
    <div>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="Welcome to the Landing Page" />
      </Helmet>
      <h1>Welcome to the Landing Page</h1>
    </div>
  );
}

export default Landing;
