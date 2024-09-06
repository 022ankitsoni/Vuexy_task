import React from 'react';
import Header from './components/header/Header';
import ReferredUsers from './components/referred_users/ReferredUsers'; 
import HowToUse from './components/how_to_use/HowToUse'; 
import InviteYourFriends from './components/invite_your_friends/InviteYourFriends'; 
import LeftSidebar from './components/leftsidebar/LeftSidebar'; 
import { Box, Card, CardContent, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import AutoGraphIcon from '@mui/icons-material/AutoGraph'; 

function App() {
  return (
    <BrowserRouter>
      <Box 
        sx={{ 
          display: 'flex', 
          height: '100vh',
          backgroundColor: '#f5f5f5', 
          padding: 2, 
          paddingLeft: 0
        }}
      >
        <Box 
          sx={{ 
            width: '200px', 
            marginRight: 5, 
            backgroundColor: '#fff', 
            borderRadius: 1, 
            boxShadow: 2 
          }}
        >
          <LeftSidebar />
        </Box>
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            padding: 2 
          }}
        >
          
          <Box 
            sx={{ 
              height: 60,
              backgroundColor: '#fff', 
              borderRadius: 2, 
              boxShadow: 2, 
              marginBottom: 3 
            }}
          >
            <Header />
          </Box>
          
       
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              gap: 2, 
              flexWrap: 'wrap', 
              backgroundColor: '#f5f5f5', 
              marginBottom: 3 
            }}
          >
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1,
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>$24,983</Typography>
                <Typography variant="body2" color="textSecondary">Total Earnings</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'purple', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <AccountBalanceWalletIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1, 
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>$8,647</Typography>
                <Typography variant="body2" color="textSecondary">Unpaid Earnings</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'green',
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <LocalOfferIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1, 
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>2,367</Typography>
                <Typography variant="body2" color="textSecondary">Signups</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'red', 
                  borderRadius: '50%',
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <PersonAddIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1, 
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>4.5%</Typography>
                <Typography variant="body2" color="textSecondary">Conversion Rate</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'skyblue', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <AutoGraphIcon />
              </Box>
            </Card>
          </Box>
          
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              marginBottom: 3 
            }}
          >
            <Box 
              sx={{ 
                flex: 1, 
                backgroundColor: '#f5f5f5', 
                padding: 0, 
                borderRadius: 1, 
                boxShadow: 2 
              }}
            >
              <HowToUse />
            </Box>
            <Box 
              sx={{ 
                flex: 1, 
                backgroundColor: '#f5f5f5', 
                padding: 0, 
                borderRadius: 1, 
                boxShadow: 2 
              }}
            >
              <InviteYourFriends />
            </Box>
          </Box>
          
          
          <Box 
            sx={{ 
              flexGrow: 1, 
              marginBottom: 0, 
              flex: 1, 
              backgroundColor: '#f5f5f5', 
              padding: 0, 
              borderRadius: 1, 
              boxShadow: 2 
            }}
          >
            <ReferredUsers />
          </Box>
          
          
          
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
