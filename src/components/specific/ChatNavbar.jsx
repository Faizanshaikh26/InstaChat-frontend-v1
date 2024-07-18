import React from 'react'

function ChatNavbar({data,chatId}) {
    const chat = data?.chats?.find((chat) => chat._id === chatId);
    
    
  return (
   <div>
    {chat.name}
   </div>
  )
}

export default ChatNavbar