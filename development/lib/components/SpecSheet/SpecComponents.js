import React from 'react';
import specStyles from './specStyles';


const {
  title, 
  container, 
  spec, 
  bulletList, 
  bulletListItem,
  header,  
} = specStyles;

export const SpecTitle = (
{ children }
) => (
  <h1 style={title}>
    { children }
  </h1>
);
export const SpecHeader = (
{ children }
) => (
  <p style={header}>
    { children }
  </p>
);
export const SpecBulletList = ({
  label,
  items,
}) => (
  <ul style={bulletList}>
    { 
      Array.isArray(items) &&
      items.map(item => (
        <li key={item} style={bulletListItem}>
          { item }
        </li>
      ))
    }
  </ul>
);

export const SpecSheet = ({
  children
}) => (
  <div style={container}>
    { children }
  </div>
);
export const SpecList = ({ 
  children, 
  label, 
}) => (
  <div style={container}>
    <p style={header}>
      { label }
    </p>
    { children }
  </div>
);

