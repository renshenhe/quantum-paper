import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from '../Button';

storiesOf('Button')
  .add('Default button', () =>(
    <Button 
      primaryColor='#E0E0E0'
      raised={true}
    />
  ))