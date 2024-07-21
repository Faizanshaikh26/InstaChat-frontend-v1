// import { Stack } from "@mui/material";
// import React from "react";
// import ChatItem from "../shared/ChatItem";

// const ChatList = ({
//   w = "100%",
//   chats = [],
//   chatId,
//   onlineUsers = [],
//   newMessagesAlert = [
//     {
//       chatId: "",
//       count: 0,
//     },
//   ],
//   handleDeleteChat,
// }) => {
//   return (
//     <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
//       {chats?.map((data, index) => {
//         const { avatar, _id, name, groupChat, members } = data;

//         const newMessageAlert = newMessagesAlert.find(
//           ({ chatId }) => chatId === _id
//         );

//         const isOnline = members?.some((member) =>
//           onlineUsers.includes(member)
//         );

//         return (
//           <ChatItem
//             index={index}
//             newMessageAlert={newMessageAlert}
//             isOnline={isOnline}
//             avatar={avatar}
//             name={name}
//             _id={_id}
//             key={_id}
//             groupChat={groupChat}
//             sameSender={chatId === _id}
//             handleDeleteChat={handleDeleteChat}
//           />
//         );
//       })}
//     </Stack>
//   );
// };

// export default ChatList;
import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <div
    className={`overflow-y-auto h-full box-border  ${w} border-r-[1px] border-[#ABA6A6] shadow-lg bg-[#FAFAFA] text-[#0E1514]`}
    
  >
    {chats?.map((data, index) => {
      const { _id, avatar, name, groupChat, members } = data;

      const newMessagesAlerts = newMessagesAlert?.find(
        ({ chatId }) => chatId === _id
      );

      const isOnline = members?.some((member) => onlineUsers.includes(member));

      return (
        <ChatItem
          isOnline={isOnline}
          name={name}
          avatar={avatar}
          groupChat={groupChat}
          _id={_id}
          key={_id}
          samesender={chatId === _id}
          handleDeleteChat={handleDeleteChat}
          index={index}
          newMessageAlert={newMessagesAlerts}
        />
      );
    })}
  </div>
  );
};

export default ChatList;
