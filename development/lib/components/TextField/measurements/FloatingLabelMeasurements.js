import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/rulerv1';

const calcMeasurements = (props) => {
  const {
    dense,
    multiLine,
    fullWidth,
    floatingLabel,
  } = props;

  let top = 16;
  let labelText = 16;
  let labelPadding = 8;
  let inputText = 16;
  let bottomPadding = 16;
  let dividerPadding = 8;

  if (fullWidth) {
    top = 20;
    // dividerPadding = 20;
    bottomPadding = 20;
  }
  if (dense) {
    top = 12;
    labelPadding = 4;
    bottomPadding = 12;
    dividerPadding = 4;
    if (fullWidth) {
      top = 16;
      // dividerPadding = 16;
      bottomPadding = 16;
    }
    // if (!floatingLabel && !fullWidth) {
    //   top = 12;
    //   dividerPadding = 4;
    // }    
  }
  const measurements = {
    top,
    labelText,
    labelPadding,
    inputText,
    bottomPadding,
    dividerPadding,
  }
  return measurements;
}

export default class FloatingLabelMeasurements extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    const { paddingLeft, paddingTop, paddingRight, rect, dense, multiLine, fullWidth, floatingLabel } = this.props;
    const measurements = calcMeasurements(this.props)
    return (
      <div>
        <Ruler
          height={rect.height}
          position='top'
          horizontal='bottom'
          top={0}
          left={-24}
        />
        <Ruler
          height={measurements.top}
          size={16}
          position='top'
          horizontal='bottom'
          top={0}
          marker={1}
        />
        <Ruler
          height={measurements.labelText}
          position='top'
          vertical='right'
          top={measurements.top}
          right={0}
          marker={2}
        />
        {
          floatingLabel &&
          <Ruler
            height={measurements.labelPadding}
            position='top'
            horizontal='bottom'
            top={ measurements.top + measurements.labelText}
            marker={3}
            size={16}
          />
        }
        {
          (!fullWidth && !floatingLabel)&&
            <Ruler
              height={measurements.inputText}
              position='top'
              vertical='right'
              top={dense ? 32 : 40}
              marker={4}
            />
          
        }
        <Ruler
          height={measurements.bottomPadding}
          position='top'
          horizontal='bottom'
          bottom={0}
          marker={fullWidth && 1}
          size={!floatingLabel && 16}
        />
        {
          (!fullWidth && !floatingLabel) &&
          <Ruler
            height={measurements.dividerPadding}
            size={16}
            position='top'
            vertical='right'
            bottom={dense ? 0 : 0}
            marker={5}
          />
        }

      </div>
    );
  }
};
          //   (multiLine && !fullWidth) &&
          //        <div>
          //       <Ruler marker={1} top={0} height={ dense ? 12 : 16} width={16} />
          //       <Ruler marker={2} top={dense ? 12 : 16} height={16} />
          //       <Ruler marker={3} top={ dense ? 28 : 32} height={dense ? 4 : 8} width={16} />
          //       <Ruler marker={4} top={dense ? 32 : 40} shift={dense} full={true} />
          //       <Ruler marker={5} bottom={dense ? 12 : 16} height={8} width={16} />
          //       <Ruler marker={6} bottom={dense ? 4 : 8} height={ dense ? 4 : 8} width={16} shift={dense} />
          //       </div>           
          // }    

        // <Ruler
          // height={rect.height}
          // position='bottom'
          // horizontal='bottom'
          // top={0}
          // left={-16}
        // />
          // {
          //   (floatingLabel && !multiLine) &&
          //       <div>
          //       <Ruler marker={1} top={0} height={ dense ? 12 : 16} width={16} />
          //       <Ruler marker={2} top={dense ? 12 : 16} height={16} />
          //       <Ruler marker={3} top={ dense ? 28 : 32} height={dense ? 4 : 8} width={16} />
          //       <Ruler marker={4} top={dense ? 32 : 40} shift={dense} height={16} />
          //       <Ruler marker={5} top={dense ? 48 : 56} height={8} width={16} />
          //       <Ruler marker={6} top={dense ? 56 : 64} height={ dense ? 4 : 8} width={16} shift={dense} />
          //       </div>
          // }
          // {
          //   (!floatingLabel && !fullWidth && !multiLine) &&
          //       <div>
          //       <Ruler marker={1} top={0} height={ dense ? 12 : 16} width={16} />
          //       <Ruler marker={2} top={ dense ? 12 : 16} height={16} />
          //       <Ruler marker={5} top={dense ? 28 : 32} height={8} width={16} />
          //       <Ruler marker={6} top={dense ? 36 : 40} height={ dense ? 4 : 8} width={16} shift={dense} />
          //       </div>            
          // }
          // {
          //   (fullWidth && !multiLine) &&
          //       <div>
          //       <Ruler marker={1} top={0} height={ dense ? 16 : 20} width={16} />
          //       <Ruler marker={2} top={dense ? 16 : 20} height={16} />
          //       <Ruler marker={1} top={dense ? 32 : 36} height={ dense ? 16 : 20} width={16} />
          //       </div>            
          // }  
          // {
          //   (multiLine && !fullWidth) &&
          //        <div>
          //       <Ruler marker={1} top={0} height={ dense ? 12 : 16} width={16} />
          //       <Ruler marker={2} top={dense ? 12 : 16} height={16} />
          //       <Ruler marker={3} top={ dense ? 28 : 32} height={dense ? 4 : 8} width={16} />
          //       <Ruler marker={4} top={dense ? 32 : 40} shift={dense} full={true} />
          //       <Ruler marker={5} bottom={dense ? 12 : 16} height={8} width={16} />
          //       <Ruler marker={6} bottom={dense ? 4 : 8} height={ dense ? 4 : 8} width={16} shift={dense} />
          //       </div>           
          // }       
          // {
          //   (multiLine && fullWidth) &&
          //       <div>
          //       <Ruler marker={1} top={0} height={ dense ? 16 : 20} width={16} />
          //       <Ruler marker={2} top={dense ? 16 : 20} full={true} />
          //       <Ruler marker={1} bottom={dense ? 16 : 20} height={ dense ? 16 : 20} width={16} />
          //       </div>            
          // }



        //           <Ruler
        //   height={dense ? 12 : 16}
        //   size={16}
        //   position='top'
        //   horizontal='bottom'
        //   top={0}
        //   marker={1}
        // />
        // <Ruler
        //   height={16}
        //   position='top'
        //   vertical='right'
        //   top={dense ? 12 : 16}
        //   right={0}
        //   marker={2}
        // />
        // <Ruler
        //   height={dense ? 4 : 8}
        //   position='top'
        //   horizontal='bottom'
        //   top={ dense ? 28 : 32}
        //   marker={3}
        //   size={16}
        // />
        // <Ruler
        //   height={!multiLine && 16}
        //   position='top'
        //   vertical='right'
        //   top={dense ? 32 : 40}
        //   marker={4}
        // />
        // <Ruler
        //   height={8}
        //   position='top'
        //   horizontal='bottom'
        //   bottom={dense ? 4 : 8}
        // />
        // <Ruler
        //   height={dense ? 4 : 8}
        //   size={16}
        //   position='top'
        //   vertical='right'
        //   bottom={dense ? 0 : 0}
        //   marker={5}
        // />