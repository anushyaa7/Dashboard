import React from 'react';
import { useState } from 'react';
import { Table, TableBody, TableContainer, Paper, TablePagination } from '@mui/material';
import ProductTableHeader from './ProductTableHeader';
import ProductTableRow from './ProductTableRow';



const ProductTable = () => {
  const [selectAll, setSelectAll] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

    

  // Sample data for demonstration
  const products = [
    { id: 1, name: 'Running Shoes', createDate: '14 Feb 2024', price: 79.99, publish: 'published', stock: '72 in stock' },
    { id: 2, name: 'Casual Sneakers', createDate: '13 Feb 2024', price: 59.99, publish: 'draft',stock: '10 low stock' },
    { id: 3, name: 'Basketball Shoes', createDate: '12 Feb 2024', price: 99.99, publish: 'published', stock: '15 low stock'},
    { id: 4, name: 'Hiking Boots', createDate: '11 Feb 2024', price: 89.99, publish: 'draft', stock: '40 in stock' },
    { id: 5, name: 'Flip Flops', createDate: '10 Feb 2024', price: 29.99, publish: 'published', stock: '30 in stock' },
    { id: 6, name: 'Zoom Freak', createDate: '9 Feb 2024', price: 43.99, publish: 'draft', stock: '20 in stock' },
    { id: 7, name: 'Matte Flip Flops', createDate: '8 Feb 2024', price: 74.99, publish: 'published', stock: '15 in low stock' },
    { id: 8, name: 'Air Jordan', createDate: '7 Feb 2024', price: 39.99, publish: 'published', stock: '30 in stock' },
    { id: 9, name: 'Jordan Delta', createDate: '6 Feb 2024', price: 69.99, publish: 'published', stock: '50 in stock' },
    { id: 10, name: 'Nike Blazer', createDate: '5 Feb 2024', price: 79.99, publish: 'published', stock: '70 in stock' },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '500px', width: '150%' }}>
      <Table aria-label='simple table' stickyHeader >
        <ProductTableHeader selectAll={selectAll} />
        <TableBody>
        {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
            <ProductTableRow key={product.id} product={product} selectAll={selectAll} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        sx={{ color: 'secondary' }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ProductTable; 