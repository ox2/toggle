import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Toggle from './Toggle';

const handleChange = (value) => console.log('🍇', value);  // eslint-disable-line no-console

const style = {
  container: {
    width: '100px',
    backgroundColor: 'GHOSTWHITE',
  },
};

storiesOf('Toggle', module)
  .add('on', () => (
    <Toggle
      value={true}
      label={'Show profile settings'}
      onChange={handleChange}
    />
  ))
  .add('off', () => (
    <Toggle
      value={false}
      label={'Show profile settings'}
      onChange={handleChange}
    />
  ))
  .add('blue', () => (
    <Toggle
      color={'#3498db'}
      value={true}
      label={'Show profile settings'}
      onChange={handleChange}
    />
  ))
  .add('disabled', () => (
    <Toggle
      color={'#3498db'}
      value={true}
      disabled={true}
      label={'Show profile settings'}
      onChange={handleChange}
    />
  ))
  .add('no label', () => (
    <Toggle
      color={'#3498db'}
      value={true}
      onChange={handleChange}
    />
  ))
  .add('in small container', () => (
    <div style={style.container}>
      <Toggle
        color={'#3498db'}
        value={true}
        onChange={handleChange}
      />
    </div>

  ));
