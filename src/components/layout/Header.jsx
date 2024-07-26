
import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Avatar,
  Dialog,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  MenuOpen,
  MarkUnreadChatAlt,
  AccountCircle,
  Add,
  GroupAdd,
  Groups,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userNotExists } from "../../redux/reducers/auth";
import {
  setIsMobile,
  setIsNewGroup,
  setIsNotification,
  setIsSearch,
} from "../../redux/reducers/misc";
import { resetNotificationCount } from "../../redux/reducers/chat";
import AvatarCard from "../shared/AvatarCard";
import { server } from "../../constants/config";
import Profile from "../specific/Profile";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotifcationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = ({ data, chatId, user, onlineUsers }) => {
  const chat = data?.chats?.find((chat) => chat._id === chatId);
  const { avatar } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleProfile = () => {
   
    setOpenProfile(!openProfile);
  };

  const { isSearch, isNotification, isNewGroup } = useSelector(
    (state) => state.misc
  );
  const { notificationCount } = useSelector((state) => state.chat);

  const handleMobile = () => dispatch(setIsMobile(true));

  const openSearch = () => dispatch(setIsSearch(true));

  const openNewGroup = () => {
    dispatch(setIsNewGroup(true));
  };

  const openNotification = () => {
    dispatch(setIsNotification(true));
    dispatch(resetNotificationCount());
  };

  const navigateToGroup = () => navigate("/groups");

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      dispatch(userNotExists());
      toast.success(data.message);
      localStorage.removeItem("hasReloaded");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#f0f2f5",
            color: "#3b4a54",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },

              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MarkUnreadChatAlt sx={{
                  color:"#41B06E",
                  fontSize:"35px",
                
                
                }} />
              </IconButton>
            </Box>

            <Box
              onClick={toggleProfile}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              
                
              }}
            >
              <Avatar sx={{width:"50px",height:"50px",cursor:"pointer"}} src={avatar?.url} />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "block" },
                marginLeft:{
                  sm:"",
                  lg:"40px"
                }
                
                
              }}
            >
              <IconBtn
                title={"Add"}
                icon={<Add/>}
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<GroupAdd/>}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<Groups/>}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
                value={notificationCount}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <ChatNavbar chat={chat} onlineUsers={onlineUsers} />
            </Box>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuOpen sx={{fontSize:"35px"}}/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={openSearch}>
            <ListItemIcon>
              <Add/>
            </ListItemIcon>
            <ListItemText primary="Add Friend" />
          </ListItem>
          <ListItem button onClick={openNewGroup}>
            <ListItemIcon>
              <GroupAdd />
            </ListItemIcon>
            <ListItemText primary="New Group" />
          </ListItem>
          <ListItem button onClick={navigateToGroup}>
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Manage Groups" />
          </ListItem>
          <ListItem button onClick={openNotification}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button onClick={toggleProfile}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={logoutHandler}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={openProfile} onClose={toggleProfile}>
        <Profile user={user} />
      </Dialog>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotifcationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;

const ChatNavbar = ({ chat, onlineUsers }) => {
  if (!chat) {
    return null;
  }

  const { name, avatar, members } = chat;
  const isOnline = members?.some((member) => onlineUsers.includes(member));

  return (
    <Box
    sx={{
      width: {
        lg: "90%",
      },
      marginLeft: {
        lg: "7.8%",
      },
      borderLeft: 2,
      borderColor: "#e8e8e8",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0.25rem",
        marginLeft: {
          md: "3px",
        },
      }}
    >
      <AvatarCard avatar={avatar} />
      <Typography
        variant="body1"
        sx={{
          fontSize: {
            sm: "20px",
            md: "22px",
          },
          fontWeight: 550,
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        {name}
      </Typography>
      {isOnline ? (<span>Online</span>) : (<span>Offline</span>)}
    </Box>
  </Box>
  );
};

