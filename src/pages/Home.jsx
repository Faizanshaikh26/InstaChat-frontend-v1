import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box  sx={{
      bgcolor:"#F7F7F7",
      color:"504E4E",
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:"2rem"
    }}>
      
      <Box sx={{
        maxWidth:'28rem',
        textAlign:"center",
      }}>
       <Typography
          variant="h1"
          component="h1"
          sx={{
          fontSize:"1.5rem",
          lineHeight:"2rem",
          fontWeight:'700',
          marginBottom:"1rem",
          }}
        >
          Welcome to ChatApp
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            marginBottom: '1rem',
            fontSize:"1.125rem",
            lineHeight:"1.75rem"
           
          }}
        >
          Select a friend to start chatting
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            marginBottom: '1.5rem',
            fontSize:"1.rem",
            lineHeight:"1.5rem",
        
          }}
        >
          Our chat application allows you to send and receive messages instantly. Connect with your friends and enjoy real-time conversations.
        </Typography>
      </Box>
    </Box>





  
  );
};

export default AppLayout()(Home);
