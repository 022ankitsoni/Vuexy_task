import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; // Facebook icon
import TwitterIcon from '@mui/icons-material/Twitter'; // Twitter icon

const InviteYourFriends = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: 1, 
        boxShadow: 2, 
        padding: 2, // Adjust padding to fit content within the height
        margin: 0,
        height: 250, // Fixed height
        overflow: 'auto' // Add scroll if content overflows
      }}
    >
      {/* Invite Your Friends Section */}
      <Typography 
        variant="h6" 
        sx={{ color: 'black', marginBottom: 1 }}
      >
        Invite your friends
      </Typography>
      <Typography 
        variant="body2" // Use body2 for smaller text
        sx={{ color: '#9e9e9e', marginBottom: 1 }}
      >
        Enter friend’s email address and invite them
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: 2 
        }}
      >
        <TextField 
          variant="outlined" 
          placeholder="Email Address" 
          sx={{ flex: 1, marginRight: 1 }} // Make input field flexible and add space between input and button
          size="small" // Adjust text field size to fit the height
        />
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#D3B4FF', color: 'white' }} // Light purple color for button
          size="small" // Adjust button size to fit the height
        >
          Submit
        </Button>
      </Box>

      {/* Share the Referral Link Section */}
      <Typography 
        variant="h6" 
        sx={{ color: 'black', marginBottom: 1 }}
      >
        Share the referral link
      </Typography>
      <Typography 
        variant="body2" // Use body2 for smaller text
        sx={{ color: '#9e9e9e', marginBottom: 1 }}
      >
        Share referral link in social media
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: 1 
        }}
      >
        <TextField 
          variant="outlined" 
          placeholder="pixinvent.com/?ref=6479" 
          sx={{ flex: 1, marginRight: 1 }} // Make input field flexible and add space between input and buttons
          size="small" // Adjust text field size to fit the height
        />
        <IconButton 
          sx={{ backgroundColor: '#3b5998', color: 'white', marginRight: 1 }} // Facebook color
          size="small" // Adjust icon button size to fit the height
        >
          <FacebookIcon />
        </IconButton>
        <IconButton 
          sx={{ backgroundColor: '#1DA1F2', color: 'white' }} // Twitter color
          size="small" // Adjust icon button size to fit the height
        >
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InviteYourFriends;
