import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/thunks/profile";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Box, Avatar, Grid, Typography, Stack, Button } from "@mui/material";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { user, loader } = useSelector((state) => state.auth); // Access user data and loader from Redux state
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
    username: "",
  });

  // State to hold the selected file
  const [file, setFile] = useState(null);
  // State to hold the preview URL for the selected file
  const [preview, setPreview] = useState(user?.avatarUrl || "");

  // State to track form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Populate form fields with existing user data when the component mounts
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        bio: user.bio || "",
        email: user.email || "",
        username: user.username || "",
      });
    }
  }, [user]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Set the preview URL
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set the loading state to true

    const data = new FormData();
    data.append("name", formData.name);
    data.append("bio", formData.bio);
    data.append("email", formData.email);
    data.append("username", formData.username);
    if (file) {
      data.append("avatar", file);
    }

    try {
      await dispatch(updateProfile(data)).unwrap();
      toast.success("Profile updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsSubmitting(false); // Reset the loading state
    }
  };

  if (loader) {
    return <div>Loading...</div>;
  }

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
          src={preview}
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
              sx={{
                margin: "8px 0",
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#FFFFFF", // Change text color to white
                "@media (max-width: 600px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Name: 
            </Typography>
            <Box
              component="input"
              fullWidth
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                width: "100%",
                padding: "10px",
                marginBottom: "8px",
                backgroundColor: "transparent",
                border: "1px solid #03BFCB",
                borderRadius: "4px",
                color: "#FFFFFF", // Change input text color to white
                "&::placeholder": {
                  color: "#FFFFFF", // Change placeholder color to white
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                margin: "8px 0",
                fontSize: "0.875rem",
                textTransform: "uppercase",
                color: "#FFFFFF", // Change text color to white
                "@media (max-width: 600px)": {
                  fontSize: "0.75rem",
                },
              }}
            >
              Username: 
            </Typography>
            <Box
              component="input"
              fullWidth
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              sx={{
                width: "100%",
                padding: "10px",
                marginBottom: "8px",
                backgroundColor: "transparent",
                border: "1px solid #03BFCB",
                borderRadius: "4px",
                color: "#FFFFFF", // Change input text color to white
                "&::placeholder": {
                  color: "#FFFFFF", // Change placeholder color to white
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Typography sx={{ color: "#FFFFFF" }}>Bio:</Typography> {/* Change text color to white */}
              <Box
                component="input"
                fullWidth
                type="text"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                sx={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid #03BFCB",
                  borderRadius: "4px",
                  color: "#FFFFFF", // Change input text color to white
                  "&::placeholder": {
                    color: "#FFFFFF", // Change placeholder color to white
                  },
                }}
              />
              <Typography sx={{ color: "#FFFFFF" }}>Email:</Typography> {/* Change text color to white */}
              <Box
                component="input"
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid #03BFCB",
                  borderRadius: "4px",
                  color: "#FFFFFF", // Change input text color to white
                  "&::placeholder": {
                    color: "#FFFFFF", // Change placeholder color to white
                  },
                }}
              />
              <Button
                variant="contained"
                component="label"
                sx={{ marginTop: "16px" }}
              >
                Upload Avatar
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              
                sx={{ marginTop: "16px" }}
              >
                {isSubmitting ? "Updating Profile..." : "Update Profile"}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
