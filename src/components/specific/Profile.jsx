import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function Profile({ user }) {
  const { avatar, bio, createdAt, email, name, username } = user;
  const avatarUrl = avatar?.url;
  const navigate = useNavigate();

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
        component="span"
        sx={{
          color: "#231E39",
          backgroundColor: "#FEBB0B",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "0.875rem",
          padding: "4px 8px",
          position: "absolute",
          top: "20px",
          left: "20px",
          cursor: "pointer"
        }}
        onClick={() => navigate('/updateProfile')}
      >
        Edit Profile
      </Box>
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
            <Typography
              variant="h6"
              sx={{
                margin: "8px 0",
                fontWeight: "bold",
                "@media (max-width: 600px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Name: {name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body2"
              sx={{
                margin: "8px 0",
                textTransform: "uppercase",
                "@media (max-width: 600px)": {
                  fontSize: "0.75rem",
                },
              }}
            >
              Username: {username}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.875rem",
                lineHeight: "1.5",
                "@media (max-width: 600px)": {
                  fontSize: "0.75rem",
                },
              }}
            >
              <Box sx={{ mt: 5 }}>
                Bio: {bio}
              </Box>
              <Box sx={{ display: 'flex', gap: '100px', mt: 10 }}>
                <Box>Email: {email}</Box>
                <Box>Joined: {moment(createdAt).fromNow()}</Box>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Profile;
