const layer1 = {
  animation: `mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
    mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both`,
  borderColor: '#42a5f5',
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: '0',
}
const leftSpinnerClipper = {
  display: 'inline-block',
  position: 'relative',
  width: '50%',
  height: '100%',
  overflow: 'hidden',
  borderColor: 'inherit',
};

const leftSpinnerCircle = {
  animation: 'mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
  borderRightColor: 'transparent!important',
  transform: 'rotate(129deg)',
  width: '200%',
  boxSizing: 'border-box',
  height: '100%',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: 'inherit',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
}

const gapPatch = {
  position: 'absolute',
  boxSizing: 'border-box',
  top: '0px',
  left: '45%',
  width: '10%',
  height: '100%',
  overflow: 'hidden',
  borderColor: 'inherit',
};

const gapPatchSpinnerCircle = {
  width: '1000%',
  left: '-450%',
  boxSizing: 'border-box',
  height: '100%',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: 'inherit',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  animation: 'none',
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  // left: '0px',

}
const rightSpinnerClipper = {
  display: 'inline-block',
  position: 'relative',
  width: '50%',
  height: '100%',
  overflow: 'hidden',
  borderColor: 'inherit',
};

const rightSpinnerCircle = {
  animation: 'mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
  left: '-100%',
  borderLeftColor: 'transparent!important',
  transform: 'rotate(-129deg)',
  width: '200%',
  boxSizing: 'border-box',
  height: '100%',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: 'inherit',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  // left: '0px',
}