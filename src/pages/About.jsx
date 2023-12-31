import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState('username');

  if(!user) {
    return <Navigate to='/' replace={true}/>
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        bibendum urna id facilisis fringilla. Etiam faucibus dui eu enim aliquam
        pretium. Phasellus quis sem eu lorem luctus rhoncus. Donec quam quam,
        mattis ut condimentum id, malesuada quis ex. Suspendisse a rhoncus elit.
        Sed vel consequat orci. Mauris luctus quam ut sapien tincidunt euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        bibendum urna id facilisis fringilla. Etiam faucibus dui eu enim aliquam
        pretium. Phasellus quis sem eu lorem luctus rhoncus. Donec quam quam,
        mattis ut condimentum id, malesuada quis ex. Suspendisse a rhoncus elit.
        Sed vel consequat orci. Mauris luctus quam ut sapien tincidunt euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        bibendum urna id facilisis fringilla. Etiam faucibus dui eu enim aliquam
        pretium. Phasellus quis sem eu lorem luctus rhoncus. Donec quam quam,
        mattis ut condimentum id, malesuada quis ex. Suspendisse a rhoncus elit.
        Sed vel consequat orci. Mauris luctus quam ut sapien tincidunt euismod.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
