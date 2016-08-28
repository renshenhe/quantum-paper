import React, { PureComponent } from 'react';
import Tooltip from '../Tooltip';
import { withMeasurements } from '../../../Measure/Measure';
import TooltipMeasurements from './DefaultTooltipMeasurements';

class NormalTooltip extends PureComponent {
  render() {
    return (
      <Tooltip
        label='Tooltip text'
        visible={true}
      />
    );
  }
};
class DenseTooltip extends PureComponent {
  render() {
    return (
      <Tooltip
        label='Tooltip text'
        dense={true}
        visible={true}
        
      />
    );
  }
};

const MeasuredNormalTooltip = withMeasurements(NormalTooltip)(
  TooltipMeasurements,
  'Touch UI tooltips',
  [
    'Tile height: 32dp',
    'Left and right text padding: 16dp',
    'Top margin: 24dp',
  ]
);
const MeasuredDenseTooltip = withMeasurements(DenseTooltip)(
  TooltipMeasurements,
  'Cursor/keyboard tooltips',
  [
    'Tile height: 22dp',
    'Left and right text padding: 8dp',
    'Top margin: 14dp',
  ],
  { dense: true}
);
export default class DefaultTooltip extends PureComponent {
  render() {
    return (
      <div>
        <MeasuredNormalTooltip />
        <MeasuredDenseTooltip />
      </div>
    );
  }
};

        // <br />
        // <DenseTooltip />