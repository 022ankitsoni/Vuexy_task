import React from 'react';
import Header from './components/header/Header';
import ReferredUsers from './components/referred_users/ReferredUsers'; // Import ReferredUsers
import HowToUse from './components/how_to_use/HowToUse'; // Import HowToUse
import InviteYourFriends from './components/invite_your_friends/InviteYourFriends'; // Import InviteYourFriends
import LeftSidebar from './components/leftsidebar/LeftSidebar'; // Import LeftSidebar
import { Box, Card, CardContent, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; // Dollar icon
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Gift icon
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Signup icon
import AutoGraphIcon from '@mui/icons-material/AutoGraph'; // Infinite icon

function App() {
  return (
    <BrowserRouter>
      <Box 
        sx={{ 
          display: 'flex', 
          height: '100vh',
          backgroundColor: '#f5f5f5', // Light grey background color for the whole view
          padding: 2, // Padding around the entire content area
          paddingLeft: 0
        }}
      >
        <Box 
          sx={{ 
            width: '200px', // Fixed width for the sidebar
            marginRight: 5, // Space between sidebar and main content
            backgroundColor: '#fff', // White background for the sidebar to make it stand out
            borderRadius: 1, // Rounded corners for a card-like appearance
            boxShadow: 2 // Shadow effect to enhance the card-like appearance
          }}
        >
          <LeftSidebar />
        </Box>
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            padding: 2 // Padding inside the main content area
          }}
        >
          {/* Header Section */}
          <Box 
            sx={{ 
              height: 60,
              backgroundColor: '#fff', // White background for the header
              borderRadius: 2, // Rounded corners
              boxShadow: 2, // Shadow effect for the header
              marginBottom: 3 // Space below the header
            }}
          >
            <Header />
          </Box>
          
          {/* Cards Section */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', // Ensure equal spacing between cards
              gap: 2, // Space between cards (adjust as needed)
              flexWrap: 'wrap', // Allow wrapping if needed
              backgroundColor: '#f5f5f5', // Light grey background for the card area
              marginBottom: 3 // Space below the card section
            }}
          >
            <Card 
              sx={{ 
                flex: 1, // Allow cards to grow equally
                height: 120, // Reduced height of the card
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', // Space items
                padding: 2, // Padding inside the card
                backgroundColor: '#fff', // White background for each card
                borderRadius: 1, // Rounded corners for the card
                boxShadow: 3, // Shadow effect for card
                minWidth: 200, // Ensure cards have a minimum width
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>$24,983</Typography>
                <Typography variant="body2" color="textSecondary">Total Earnings</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'purple', // Purple background
                  borderRadius: '50%', // Circular shape
                  width: 40, // Diameter of the circle
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' // White icon color
                }}
              >
                <AccountBalanceWalletIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, // Allow cards to grow equally
                height: 120, // Reduced height of the card
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', // Space items
                padding: 2, // Padding inside the card
                backgroundColor: '#fff', // White background for each card
                borderRadius: 1, // Rounded corners for the card
                boxShadow: 3, // Shadow effect for card
                minWidth: 200, // Ensure cards have a minimum width
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>$8,647</Typography>
                <Typography variant="body2" color="textSecondary">Unpaid Earnings</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'green', // Green background
                  borderRadius: '50%', // Circular shape
                  width: 40, // Diameter of the circle
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' // White icon color
                }}
              >
                <LocalOfferIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, // Allow cards to grow equally
                height: 120, // Reduced height of the card
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', // Space items
                padding: 2, // Padding inside the card
                backgroundColor: '#fff', // White background for each card
                borderRadius: 1, // Rounded corners for the card
                boxShadow: 3, // Shadow effect for card
                minWidth: 200, // Ensure cards have a minimum width
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>2,367</Typography>
                <Typography variant="body2" color="textSecondary">Signups</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'red', // Red background
                  borderRadius: '50%', // Circular shape
                  width: 40, // Diameter of the circle
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' // White icon color
                }}
              >
                <PersonAddIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, // Allow cards to grow equally
                height: 120, // Reduced height of the card
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', // Space items
                padding: 2, // Padding inside the card
                backgroundColor: '#fff', // White background for each card
                borderRadius: 1, // Rounded corners for the card
                boxShadow: 3, // Shadow effect for card
                minWidth: 200, // Ensure cards have a minimum width
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>4.5%</Typography>
                <Typography variant="body2" color="textSecondary">Conversion Rate</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'skyblue', // Skyblue background
                  borderRadius: '50%', // Circular shape
                  width: 40, // Diameter of the circle
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' // White icon color
                }}
              >
                <AutoGraphIcon />
              </Box>
            </Card>
          </Box>
          
          {/* HowToUse and InviteYourFriends Section */}
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, // Space between components
              marginBottom: 3 // Space below the components
            }}
          >
            <Box 
              sx={{ 
                flex: 1, // Allow HowToUse to grow
                backgroundColor: '#f5f5f5', // Light grey background
                padding: 0, // Padding inside the HowToUse section
                borderRadius: 1, // Rounded corners
                boxShadow: 2 // Shadow effect for the HowToUse section
              }}
            >
              <HowToUse />
            </Box>
            <Box 
              sx={{ 
                flex: 1, // Allow InviteYourFriends to grow
                backgroundColor: '#f5f5f5', // Light grey background
                padding: 0, // Padding inside the InviteYourFriends section
                borderRadius: 1, // Rounded corners
                boxShadow: 2 // Shadow effect for the InviteYourFriends section
              }}
            >
              <InviteYourFriends />
            </Box>
          </Box>
          
          {/* ReferredUsers Section */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              marginBottom: 0, // Space below the ReferredUsers section
              flex: 1, // Allow InviteYourFriends to grow
              backgroundColor: '#f5f5f5', // Light grey background
              padding: 0, // Padding inside the InviteYourFriends section
              borderRadius: 1, // Rounded corners
              boxShadow: 2 // Shadow effect for the InviteYourFriends section
            }}
          >
            <ReferredUsers />
          </Box>
          
          {/* Routes Section */}
          <Box 
            sx={{ 
              flexGrow: 1 
            }}
          >
            <Routes>
              <Route path='/' element={<ReferredUsers />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
