// // // import {
// // //   AppBar,
// // //   Backdrop,
// // //   Badge,
// // //   Box,
// // //   IconButton,
// // //   Toolbar,
// // //   Tooltip,
// // //   Typography,
// // // } from "@mui/material";
// // // import React, { Suspense, lazy, useState } from "react";
// // // import { orange } from "../../constants/color";
// // // import {
// // //   Add as AddIcon,
// // //   Menu as MenuIcon,
// // //   Search as SearchIcon,
// // //   Group as GroupIcon,
// // //   Logout as LogoutIcon,
// // //   Notifications as NotificationsIcon,
// // // } from "@mui/icons-material";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import { server } from "../../constants/config";
// // // import toast from "react-hot-toast";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { userNotExists } from "../../redux/reducers/auth";
// // // import {
// // //   setIsMobile,
// // //   setIsNewGroup,
// // //   setIsNotification,
// // //   setIsSearch,
// // // } from "../../redux/reducers/misc";
// // // import { resetNotificationCount } from "../../redux/reducers/chat";

// // // const SearchDialog = lazy(() => import("../specific/Search"));
// // // const NotifcationDialog = lazy(() => import("../specific/Notifications"));
// // // const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

// // // const Header = () => {
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();

// // //   const { isSearch, isNotification, isNewGroup } = useSelector(
// // //     (state) => state.misc
// // //   );
// // //   const { notificationCount } = useSelector((state) => state.chat);

// // //   const handleMobile = () => dispatch(setIsMobile(true));

// // //   const openSearch = () => dispatch(setIsSearch(true));

// // //   const openNewGroup = () => {
// // //     dispatch(setIsNewGroup(true));
// // //   };

// // //   const openNotification = () => {
// // //     dispatch(setIsNotification(true));
// // //     dispatch(resetNotificationCount());
// // //   };

// // //   const navigateToGroup = () => navigate("/groups");

// // //   const logoutHandler = async () => {
// // //     try {
// // //       const { data } = await axios.get(`${server}/api/v1/user/logout`, {
// // //         withCredentials: true,
// // //       });
// // //       dispatch(userNotExists());
// // //       toast.success(data.message);
// // //     } catch (error) {
// // //       toast.error(error?.response?.data?.message || "Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Box sx={{ flexGrow: 1 }} height={"4rem"}>
// // //         <AppBar
// // //           position="static"
// // //           sx={{
// // //             bgcolor: orange,
// // //           }}
// // //         >
// // //           <Toolbar>
// // //             <Typography
// // //               variant="h6"
// // //               sx={{
// // //                 display: { xs: "none", sm: "block" },
// // //               }}
// // //             >
// // //               ChattUp
// // //             </Typography>

// // //             <Box
// // //               sx={{
// // //                 display: { xs: "block", sm: "none" },
// // //               }}
// // //             >
// // //               <IconButton color="inherit" onClick={handleMobile}>
// // //                 <MenuIcon />
// // //               </IconButton>
// // //             </Box>
// // //             <Box
// // //               sx={{
// // //                 flexGrow: 1,
// // //               }}
// // //             />
// // //             <Box>
// // //               <IconBtn
// // //                 title={"Search"}
// // //                 icon={<SearchIcon />}
// // //                 onClick={openSearch}
// // //               />

// // //               <IconBtn
// // //                 title={"New Group"}
// // //                 icon={<AddIcon />}
// // //                 onClick={openNewGroup}
// // //               />

// // //               <IconBtn
// // //                 title={"Manage Groups"}
// // //                 icon={<GroupIcon />}
// // //                 onClick={navigateToGroup}
// // //               />

// // //               <IconBtn
// // //                 title={"Notifications"}
// // //                 icon={<NotificationsIcon />}
// // //                 onClick={openNotification}
// // //                 value={notificationCount}
// // //               />

// // //               <IconBtn
// // //                 title={"Logout"}
// // //                 icon={<LogoutIcon />}
// // //                 onClick={logoutHandler}
// // //               />
// // //             </Box>
// // //           </Toolbar>
// // //         </AppBar>
// // //       </Box>

// // //       {isSearch && (
// // //         <Suspense fallback={<Backdrop open />}>
// // //           <SearchDialog />
// // //         </Suspense>
// // //       )}

// // //       {isNotification && (
// // //         <Suspense fallback={<Backdrop open />}>
// // //           <NotifcationDialog />
// // //         </Suspense>
// // //       )}

// // //       {isNewGroup && (
// // //         <Suspense fallback={<Backdrop open />}>
// // //           <NewGroupDialog />
// // //         </Suspense>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // const IconBtn = ({ title, icon, onClick, value }) => {
// // //   return (
// // //     <Tooltip title={title}>
// // //       <IconButton color="inherit" size="large" onClick={onClick}>
// // //         {value ? (
// // //           <Badge badgeContent={value} color="error">
// // //             {icon}
// // //           </Badge>
// // //         ) : (
// // //           icon
// // //         )}
// // //       </IconButton>
// // //     </Tooltip>
// // //   );
// // // };

// // // export default Header;
// // import {
// //   AppBar,
// //   Backdrop,
// //   Badge,
// //   Box,
// //   IconButton,
// //   Toolbar,
// //   Tooltip,
// //   Typography,
// // } from "@mui/material";
// // import React, { Suspense, lazy, useState } from "react";
// // import { orange } from "../../constants/color";
// // import {
// //   Add as AddIcon,
// //   Menu as MenuIcon,
// //   Search as SearchIcon,
// //   Group as GroupIcon,
// //   Logout as LogoutIcon,
// //   Notifications as NotificationsIcon,
// // } from "@mui/icons-material";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { server } from "../../constants/config";
// // import toast from "react-hot-toast";
// // import { useDispatch, useSelector } from "react-redux";
// // import { userNotExists } from "../../redux/reducers/auth";
// // import {
// //   setIsMobile,
// //   setIsNewGroup,
// //   setIsNotification,
// //   setIsSearch,
// // } from "../../redux/reducers/misc";
// // import { resetNotificationCount } from "../../redux/reducers/chat";

// // const SearchDialog = lazy(() => import("../specific/Search"));
// // const NotifcationDialog = lazy(() => import("../specific/Notifications"));
// // const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const { isSearch, isNotification, isNewGroup } = useSelector(
// //     (state) => state.misc
// //   );
// //   const { notificationCount } = useSelector((state) => state.chat);

// //   const handleMobile = () => dispatch(setIsMobile(true));

// //   const openSearch = () => dispatch(setIsSearch(true));

// //   const openNewGroup = () => {
// //     dispatch(setIsNewGroup(true));
// //   };

// //   const openNotification = () => {
// //     dispatch(setIsNotification(true));
// //     dispatch(resetNotificationCount());
// //   };

// //   const navigateToGroup = () => navigate("/groups");

// //   const logoutHandler = async () => {
// //     try {
// //       const { data } = await axios.get(`${server}/api/v1/user/logout`, {
// //         withCredentials: true,
// //       });
// //       dispatch(userNotExists());
// //       toast.success(data.message);
// //     } catch (error) {
// //       toast.error(error?.response?.data?.message || "Something went wrong");
// //     }
// //   };

// //   return (
// //     <>
// //       <Box sx={{ flexGrow: 1 }} height={"4rem"}>
// //         <AppBar
// //           position="static"
// //           sx={{
// //             bgcolor: "#f0f2f5",
// //             color:"#3b4a54"
// //           }}
// //         >
// //           <Toolbar>
// //             <Typography
// //               variant="h6"
// //               sx={{
// //                 display: { xs: "none", sm: "block" },
// //               }}
// //             >
// //               ChattUp
// //             </Typography>

// //             <Box
// //               sx={{
// //                 display: { xs: "block", sm: "none" },
// //               }}
// //             >
// //               <IconButton color="inherit" onClick={handleMobile}>
// //                 <MenuIcon />
// //               </IconButton>
// //             </Box>
// //             <Box
// //               sx={{
// //                 flexGrow: 1,
// //               }}
// //             />
// //             <Box>
// //               <IconBtn
// //                 title={"Search"}
// //                 icon={<SearchIcon />}
// //                 onClick={openSearch}
// //               />

// //               <IconBtn
// //                 title={"New Group"}
// //                 icon={<AddIcon />}
// //                 onClick={openNewGroup}
// //               />

// //               <IconBtn
// //                 title={"Manage Groups"}
// //                 icon={<GroupIcon />}
// //                 onClick={navigateToGroup}
// //               />

// //               <IconBtn
// //                 title={"Notifications"}
// //                 icon={<NotificationsIcon />}
// //                 onClick={openNotification}
// //                 value={notificationCount}
// //               />

// //               <IconBtn
// //                 title={"Logout"}
// //                 icon={<LogoutIcon />}
// //                 onClick={logoutHandler}
// //               />
// //             </Box>
// //           </Toolbar>
// //         </AppBar>
// //       </Box>

// //       {isSearch && (
// //         <Suspense fallback={<Backdrop open />}>
// //           <SearchDialog />
// //         </Suspense>
// //       )}

// //       {isNotification && (
// //         <Suspense fallback={<Backdrop open />}>
// //           <NotifcationDialog />
// //         </Suspense>
// //       )}

// //       {isNewGroup && (
// //         <Suspense fallback={<Backdrop open />}>
// //           <NewGroupDialog />
// //         </Suspense>
// //       )}
// //     </>
// //   );
// // };

// // const IconBtn = ({ title, icon, onClick, value }) => {
// //   return (
// //     <Tooltip title={title}>
// //       <IconButton color="inherit" size="large" onClick={onClick}>
// //         {value ? (
// //           <Badge badgeContent={value} color="error">
// //             {icon}
// //           </Badge>
// //         ) : (
// //           icon
// //         )}
// //       </IconButton>
// //     </Tooltip>
// //   );
// // };

// // export default Header;

// import {
//   AppBar,
//   Backdrop,
//   Badge,
//   Box,
//   Drawer,
//   IconButton,
//   Toolbar,
//   Tooltip,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Stack,
//   Avatar,
// } from "@mui/material";
// import React, { Suspense, lazy, useState } from "react";
// import {
//   Add as AddIcon,
//   Menu as MenuIcon,
//   Search as SearchIcon,
//   Group as GroupIcon,
//   Logout as LogoutIcon,
//   Notifications as NotificationsIcon,
//   MenuOpen,
//   MarkUnreadChatAlt,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { userNotExists } from "../../redux/reducers/auth";
// import {
//   setIsMobile,
//   setIsNewGroup,
//   setIsNotification,
//   setIsSearch,
// } from "../../redux/reducers/misc";
// import { resetNotificationCount } from "../../redux/reducers/chat";
// import AvatarCard from "../shared/AvatarCard";
// import { server } from "../../constants/config";

// const SearchDialog = lazy(() => import("../specific/Search"));
// const NotifcationDialog = lazy(() => import("../specific/Notifications"));
// const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

// const Header = ({ data, chatId,user ,onlineUsers}) => {
//   const chat = data?.chats?.find((chat) => chat._id === chatId);
  
//   const {avatar }=user
  
  
 

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   const { isSearch, isNotification, isNewGroup } = useSelector(
//     (state) => state.misc
//   );
//   const { notificationCount } = useSelector((state) => state.chat);

//   const handleMobile = () => dispatch(setIsMobile(true));

//   const openSearch = () => dispatch(setIsSearch(true));

//   const openNewGroup = () => {
//     dispatch(setIsNewGroup(true));
//   };

//   const openNotification = () => {
//     dispatch(setIsNotification(true));
//     dispatch(resetNotificationCount());
//   };

//   const navigateToGroup = () => navigate("/groups");

//   // const logoutHandler = async () => {
//   //   try {
//   //     const { data } = await axios.get(`${server}/api/v1/user/logout`, {
//   //       withCredentials: true,
//   //     });
//   //     dispatch(userNotExists());
//   //     toast.success(data.message);
//   //   } catch (error) {
//   //     toast.error(error?.message)
//   //   }
//   // };
//   const logoutHandler = async () => {
//     try {
//       const { data } = await axios.get(`${server}/api/v1/user/logout`, {
//         withCredentials: true,
//       });
//       dispatch(userNotExists());
//       toast.success(data.message);
  
//       // Clear the flag in local storage
//       localStorage.removeItem("hasReloaded");
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something went wrong");
//     }
//   };
  
//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }} height={"4rem"}>
//         <AppBar
//           position="static"
//           sx={{
//             bgcolor: "#f0f2f5",
//             color: "#3b4a54",
//           }}
//         >
//           <Toolbar>
//             <Box
//               sx={{
//                 display: { xs: "block", sm: "none" },
//               }}
//             >
//               <IconButton color="inherit" onClick={handleMobile}>
//                 <MarkUnreadChatAlt />
//               </IconButton>
//             </Box>


//               <Box sx={{
//                 display:{
//                   xs:"none",
//                   sm:"block",
//                 }
//               }}>
//             <Avatar src={avatar.url}/>
//               </Box>

//               <Box
//                 sx={{
//                   display: { xs: "none", sm: "block", md: "block" },
//                 }}
//               >
//                 <IconBtn
//                   title={"Search"}
//                   icon={<SearchIcon />}
//                   onClick={openSearch}
//                 />

//                 <IconBtn
//                   title={"New Group"}
//                   icon={<AddIcon />}
//                   onClick={openNewGroup}
//                 />

//                 <IconBtn
//                   title={"Manage Groups"}
//                   icon={<GroupIcon />}
//                   onClick={navigateToGroup}
//                 />

//                 <IconBtn
//                   title={"Notifications"}
//                   icon={<NotificationsIcon />}
//                   onClick={openNotification}
//                   value={notificationCount}
//                 />

//                 <IconBtn
//                   title={"Logout"}
//                   icon={<LogoutIcon />}
//                   onClick={logoutHandler}
//                 />
//               </Box>
//               <Box
//                 sx={{
//                   flexGrow: 1,
//                 }}
//               >
//                 <ChatNavbar chat={chat}  onlineUsers={onlineUsers}/>
//               </Box>
         

//             <Box
//               sx={{
//                 display: { xs: "block", sm: "none" },
//               }}
//             >
//               <IconButton color="inherit" onClick={toggleDrawer}>
//                 <MenuOpen />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
//         <List>
//           <ListItem button onClick={openSearch}>
//             <ListItemIcon>
//               <SearchIcon />
//             </ListItemIcon>
//             <ListItemText primary="Search" />
//           </ListItem>
//           <ListItem button onClick={openNewGroup}>
//             <ListItemIcon>
//               <AddIcon />
//             </ListItemIcon>
//             <ListItemText primary="New Group" />
//           </ListItem>
//           <ListItem button onClick={navigateToGroup}>
//             <ListItemIcon>
//               <GroupIcon />
//             </ListItemIcon>
//             <ListItemText primary="Manage Groups" />
//           </ListItem>
//           <ListItem button onClick={openNotification}>
//             <ListItemIcon>
//               <NotificationsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Notifications" />
//           </ListItem>
//           <ListItem button onClick={logoutHandler}>
//             <ListItemIcon>
//               <LogoutIcon />
//             </ListItemIcon>
//             <ListItemText primary="Logout" />
//           </ListItem>
//         </List>
//       </Drawer>

//       {isSearch && (
//         <Suspense fallback={<Backdrop open />}>
//           <SearchDialog />
//         </Suspense>
//       )}

//       {isNotification && (
//         <Suspense fallback={<Backdrop open />}>
//           <NotifcationDialog />
//         </Suspense>
//       )}

//       {isNewGroup && (
//         <Suspense fallback={<Backdrop open />}>
//           <NewGroupDialog />
//         </Suspense>
//       )}
//     </>
//   );
// };

// const IconBtn = ({ title, icon, onClick, value }) => {
//   return (
//     <Tooltip title={title}>
//       <IconButton color="inherit" size="large" onClick={onClick}>
//         {value ? (
//           <Badge badgeContent={value} color="error">
//             {icon}
//           </Badge>
//         ) : (
//           icon
//         )}
//       </IconButton>
//     </Tooltip>
//   );
// };

// export default Header;

// const ChatNavbar = ({ chat,onlineUsers }) => {
//   if (!chat) {
//     return null
    
//   }

//   const { name, avatar ,members} = chat;
  
//   const isOnline = members?.some((member) => onlineUsers.includes(member));

//   return (
//     <Box className="  lg:w-[90%] lg:ml-[11.8%] border-l-2 border-[#e8e8e8]" >
//       <Box className="flex items-center p-1 md:p- ml-3 ">
//         <AvatarCard  avatar={avatar} />
//         <Typography variant="body1" sx={{
//           fontSize:{
//             sm:"20px",
//             md:"22px"
//           }
//         }}>
//           {name}
//         </Typography>
//         {
//           isOnline ? (<span>Online</span>):(<span>Offline</span>)
//         }
//       </Box>
//     </Box>
//   );
// };

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
              <Avatar sx={{width:"50px",height:"50px",cursor:"pointer"}} src={avatar.url} />
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
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
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
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button onClick={openNewGroup}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="New Group" />
          </ListItem>
          <ListItem button onClick={navigateToGroup}>
            <ListItemIcon>
              <GroupIcon />
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
    <Box className="lg:w-[90%] lg:ml-[7.8%] border-l-2 border-[#e8e8e8]">
      <Box className="flex items-center p-1 md:p- ml-3 ">
        <AvatarCard avatar={avatar} />
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              sm: "20px",
              md: "22px"
            },
            fontWeight:"550",
            
            marginLeft: "20px",
            marginRight:"20px"

           
          }}
        >
          {name}
        </Typography>
        {/* {isOnline ? (<span>Online</span>) : (<span>Offline</span>)} */}
      </Box>
    </Box>
  );
};

