import React, { useState } from 'react';
import { Box, Typography, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, IconButton, Select, MenuItem } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; // Download icon

const ReferredUsers = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedAll, setSelectedAll] = useState(false);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleSelectAll = (event) => {
    setSelectedAll(event.target.checked);
  };

  const createData = (select, user, referredId, status, valueEarnings) => ({ select, user, referredId, status, valueEarnings });

  // Sample data for the table
  const rows = [
    createData(<Checkbox size="small" checked={selectedAll} />, 'User 1', 'REF123', 'Active', '$100'),
    createData(<Checkbox size="small" checked={selectedAll} />, 'User 2', 'REF124', 'Inactive', '$200'),
    createData(<Checkbox size="small" checked={selectedAll} />, 'User 3', 'REF125', 'Active', '$300'),
    // Add more sample rows as needed
  ];

  return (
    <Box 
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: 1, 
        boxShadow: 2, 
        padding: 3, 
        height: 'auto', 
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h6" sx={{ flex: 1, color: 'black' }}>
          Referred Users
        </Typography>
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          size="small"
          sx={{ marginRight: 2 }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <Button 
          variant="contained" 
          startIcon={<DownloadIcon />} 
          sx={{ backgroundColor: '#D3B4FF', color: 'white' }}
        >
          Export
        </Button>
      </Box>
      
      {/* Table Section */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox 
                  size="small" 
                  checked={selectedAll} 
                  onChange={handleSelectAll} 
                />
              </TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Users</TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Referred ID</TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Status</TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Value Earnings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.select}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.referredId}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.valueEarnings}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ReferredUsers;
