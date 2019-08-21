import React from 'react';

const Rainbow = wrappedComponent => {
  const colours = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = `${randomColour}-text`;
  return props => (
      <div className={className}>
        <wrappedComponent {...props} />
      </div>
    );
};

export default Rainbow;
