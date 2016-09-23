import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import Ruler from '../Ruler';
import Button from '../../Button/Button';
// import {withMeasurements} from '../../../hoc/Measure';
import ButtonMeasured from '../../Button/measurements/DefaultButton';
import CloudDownload from '../../Icon/testSvg/CloudDownload';
import ContainerRuler from '../ContainerRuler';
import RulerExample from '../examples/RulerExample';

storiesOf('Ruler')
  .add('Button Measured', () =>(
    <ButtonMeasured />
  ))
  .add('Container Measurements', () =>(
    <div>
    <ContainerRuler
      measure='height'
      labelPosition='right'
    >
      <CloudDownload />
    </ContainerRuler>
    <br />
    <ContainerRuler
      outerLabel={true}
      labelPosition='right'
      measure='width'
    >
      <Button />
    </ContainerRuler>
    </div>
  ))
  .add('Ruler Example', () =>(
    <RulerExample />
  ))
  // const staticStyles = {
  //   demo: {
  //     display: 'flex',
  //     alignitems: 'center',
  //     justifyContent: 'center',
  //     width: '500px',
  //     height: '500px',
  //   }
  // }