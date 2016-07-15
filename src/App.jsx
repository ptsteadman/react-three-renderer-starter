import React from 'react';

function App(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
