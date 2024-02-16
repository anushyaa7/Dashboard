import React from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';

const ProductTableHeader = ({ selectAll }) => (
  <TableRow>
    <TableCell style={{ backgroundColor: '#ba68c8', color: 'gray' }}>
      <Checkbox
        checked={selectAll}
        color="default"
        inputProps={{ 'aria-label': 'select all products' }}
      />
    </TableCell>
    <TableCell style={{ backgroundColor: '#ab47bc', color: 'white' }}>ID</TableCell>
    <TableCell style={{ backgroundColor: '#9c27b0', color: 'white' }}>Product Name</TableCell>
    <TableCell style={{ backgroundColor: '#8e24aa', color: 'white' }}>Create Date</TableCell>
    <TableCell style={{ backgroundColor: '#7b1fa2', color: 'white' }}>Stock</TableCell>
    <TableCell style={{ backgroundColor: '#6a1b9a', color: 'white' }}>Price ($)</TableCell>
    <TableCell style={{ backgroundColor: '#4a148c', color: 'white' }}>Publish Status</TableCell>
  </TableRow>
);

export default ProductTableHeader;
