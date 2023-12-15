import React from 'react';
import Form from './Form';
let userIsRegistered = true;

function App() {
  return (
    <div className='container'>
      {userIsRegistered && <Form userIsRegistered={userIsRegistered} />}
    </div>
  );
}

export default App;
