import * as React from 'react';
import './style.css';
import * as Inputs from './Inputs';

export default function App() {
  return (
    <div>
      <h1>MUI samples</h1>

      <h2>Inputs</h2>

      <Inputs.SampleAutocomplete />
    </div>
  );
}
