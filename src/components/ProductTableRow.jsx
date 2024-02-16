import React from 'react';
import { TableRow, TableCell, Checkbox, Chip, LinearProgress } from '@mui/material';

const ProductTableRow = ({ product, selectAll }) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <TableCell>
      <Checkbox
        checked={selectAll}
        color="default"
        inputProps={{ 'aria-label': `select product ${product.id}` }}
      />
    </TableCell>
    <TableCell component="th" scope="row">
      {product.id}
    </TableCell>
    <TableCell>{product.name}</TableCell>
    <TableCell>{product.createDate}</TableCell>
    <TableCell>
      <LinearProgress variant="determinate" value={(product.stock / 100) * 100} color='inherit' />
      <span style={{ marginLeft: '5px' }}>{product.stock}</span>
    </TableCell>
    <TableCell>{product.price}</TableCell>
    <TableCell>
      <Chip
        label={product.publish}
        color={product.publish === 'published' ? 'secondary' : 'default'}
        variant="inlined"
      />
    </TableCell>
  </TableRow>
);

export default ProductTableRow;
