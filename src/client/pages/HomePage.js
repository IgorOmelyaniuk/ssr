import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Home component</div>
      <button onClick={() => console.log('Click')}>Press me</button>
    </div>
  )
};

export default {
  component: Home,
}
