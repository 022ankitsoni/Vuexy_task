import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket'; // Rocket icon
import CardMembershipIcon from '@mui/icons-material/CardMembership'; // ID card icon
import ShareIcon from '@mui/icons-material/Share'; // Share icon

const HowToUse = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: 1, 
        boxShadow: 2, 
        padding: 3, 
        margin: 0 
      }}
    >
      {/* Heading and Subheading */}
      <Typography 
        variant="h6" 
        sx={{ color: 'black', marginBottom: 1 }}
      >
        How to use
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ color: '#9e9e9e', marginBottom: 3 }}
      >
        Integrate your referral code in 3 easy steps.
      </Typography>

      {/* Steps Grid */}
      <Grid container spacing={2}>
        {/* First Part */}
        <Grid item xs={4}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                backgroundColor: 'white', // White background for the logo container
                borderRadius: '50%', 
                width: 60, 
                height: 60,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 1,
                border: '4px dotted #D3B4FF', // Light purple dotted border
                position: 'relative'
              }}
            >
              <RocketIcon sx={{ color: '#D3B4FF' }} /> {/* Light purple color for the icon */}
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                maxWidth: 160, // Adjust this width as needed
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                margin: '0 auto' // Center text
              }}
            >
              Create & validate your referral link and get $50
            </Typography>
          </Box>
        </Grid>

        {/* Second Part */}
        <Grid item xs={4}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                backgroundColor: 'white', // White background for the logo container
                borderRadius: '50%', 
                width: 60, 
                height: 60,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 1,
                border: '4px dotted #D3B4FF', // Light purple dotted border
                position: 'relative'
              }}
            >
              <CardMembershipIcon sx={{ color: '#D3B4FF' }} /> {/* Light purple color for the icon */}
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                maxWidth: 160, // Adjust this width as needed
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                margin: '0 auto' // Center text
              }}
            >
              For every new signup you get 10%
            </Typography>
          </Box>
        </Grid>

        {/* Third Part */}
        <Grid item xs={4}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                backgroundColor: 'white', // White background for the logo container
                borderRadius: '50%', 
                width: 60, 
                height: 60,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 1,
                border: '4px dotted #D3B4FF', // Light purple dotted border
                position: 'relative'
              }}
            >
              <ShareIcon sx={{ color: '#D3B4FF' }} /> {/* Light purple color for the icon */}
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                maxWidth: 160, // Adjust this width as needed
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                margin: '0 auto', // Center text
                height: 70
              }}
            >
              Get other friends to generate link and get $100
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowToUse;
