import React from "react";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";

function Profile({ user }) {
  const { avatar, bio, createdAt, email, name, username } = user;
  const avatarUrl = avatar.url;

  return (
    <Box
      sx={{
        backgroundColor: "#231E39",
        color: "#B3B8CD",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        minHeight: "450px",
        "@media (max-width: 600px)": {
          padding: "16px",
          minHeight: "400px",
        },
      }}
    >
      
      <Box
        sx={{
          border: "2px solid #03BFCB",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          padding: "6px",
          margin: "0 auto",
        }}
      >
        <Avatar
          src={avatarUrl}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box sx={{ margin: "24px 0" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            "@media (max-width: 600px)": {
              spacing: 1,
            },
          }}
        >
          <Grid item xs={12} sm={6}>
            <h3
              sx={{
                margin: "8px 0",
                fontSize: "1.25rem",
                fontWeight: "bold",
                "@media (max-width: 600px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Name: {name}
            </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h6
              sx={{
                margin: "8px 0",
                fontSize: "0.875rem",
                textTransform: "uppercase",
                "@media (max-width: 600px)": {
                  fontSize: "0.75rem",
                },
              }}
            >
              Username: {username}
            </h6>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                lineHeight: "1.5",
                "@media (max-width: 600px)": {
                  fontSize: "0.75rem",
                },
              }}
            ></Typography>
           <Stack className="mt-5">   Bio: {bio} <br /> </Stack>

              <div className="flex gap-[100px] mt-10">
              <Stack className="flex">Email: <br/> {email}</Stack>
              <Stack> Joined: <br/>{moment(createdAt).fromNow()}</Stack>
              </div>
        
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Profile;
