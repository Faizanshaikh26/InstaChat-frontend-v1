import React from "react";
import AppLayout from "../components/layout/AppLayout";
// import { Box, Typography } from "@mui/material";
// import { grayColor } from "../constants/color";

const Home = () => {
  return (
    // <Box bgcolor={grayColor} height={"100%"}>
    //   <Typography p={"2rem"} variant="h5" textAlign={"center"}>
    //     Select a friend to chat
    //   </Typography>
    // </Box>
    <div className="bg-[#F7F7F7] text-[#504E4E] h-full flex flex-col justify-center items-center p-8">
    <div className="max-w-md text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to ChatApp</h1>
      <h5 className="text-lg mb-4">Select a friend to start chatting</h5>
      <p className="text-base mb-6">
        Our chat application allows you to send and receive messages instantly. Connect with your friends and enjoy real-time conversations.
      </p>
   
    </div>
  </div>
  );
};

export default AppLayout()(Home);
