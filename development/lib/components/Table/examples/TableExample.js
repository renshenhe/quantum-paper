/* @flow */

import React, { PureComponent } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableCell} from '../index.js';
import Checkbox from '../../Checkbox/Checkbox';

export default class TableExample extends PureComponent {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn><Checkbox /></TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><Checkbox /></TableCell>
            <TableCell>John Smith</TableCell>
            <TableCell>Employed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Randal White</TableCell>
            <TableCell>Unemployed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Stephanie Sanders</TableCell>
            <TableCell>Employed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Steve Brown</TableCell>
            <TableCell>Employed</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
};  