// Chat.jsx
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Skeleton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import MessageComponent from "../components/shared/MessageComponent";
import { getSocket } from "../socket";
import {
  ALERT,
  CHAT_JOINED,
  CHAT_LEAVED,
  NEW_MESSAGE,
  START_TYPING,
  STOP_TYPING,
} from "../constants/events";
import { useChatDetailsQuery, useGetMessagesQuery } from "../redux/api/api";
import { useErrors, useSocketEvents } from "../hooks/hook";
import { useInfiniteScrollTop } from "6pp";
import { useDispatch } from "react-redux";
import { setIsFileMenu } from "../redux/reducers/misc";
import { removeNewMessagesAlert } from "../redux/reducers/chat";
import { TypingLoader } from "../components/layout/Loaders";
import { useNavigate } from "react-router-dom";
import whatsAppBg from '../assets/images/whats-appbg.jpg';
import recivemessagenotisound from '../assets/sounds/whatsappreceive.mp3';
import sendmessagenotisound from '../assets/sounds/whatsapprsend.mp3';

const Chat = ({ chatId, user }) => {
  const socket = getSocket();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recivemessagenoti = new Audio(recivemessagenotisound);
  const sendmessagenoti = new Audio(sendmessagenotisound);

  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [fileMenuAnchor, setFileMenuAnchor] = useState(null);

  const [IamTyping, setIamTyping] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const typingTimeout = useRef(null);

  const chatDetails = useChatDetailsQuery({ chatId, skip: !chatId });

  const oldMessagesChunk = useGetMessagesQuery({ chatId, page });

  const { data: oldMessages, setData: setOldMessages } = useInfiniteScrollTop(
    containerRef,
    oldMessagesChunk.data?.totalPages,
    page,
    setPage,
    oldMessagesChunk.data?.messages
  );

  const errors = [
    { isError: chatDetails.isError, error: chatDetails.error },
    { isError: oldMessagesChunk.isError, error: oldMessagesChunk.error },
  ];

  const members = chatDetails?.data?.chat?.members;

  const messageOnChange = (e) => {
    setMessage(e.target.value);

    if (!IamTyping) {
      socket.emit(START_TYPING, { members, chatId });
      setIamTyping(true);
    }

    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    typingTimeout.current = setTimeout(() => {
      socket.emit(STOP_TYPING, { members, chatId });
      setIamTyping(false);
    }, 2000);
  };

  const handleFileOpen = (e) => {
    dispatch(setIsFileMenu(true));
    setFileMenuAnchor(e.currentTarget);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Emitting the message to the server
    socket.emit(NEW_MESSAGE, { chatId, members, message });
    console.log('Message sent:', message); // Debug log for sent message
    sendmessagenoti.play();
    setMessage("");
  };

  useEffect(() => {
    socket.emit(CHAT_JOINED, { members, chatId });

    return () => {
      socket.emit(CHAT_LEAVED, { members, chatId });
    };
  }, [chatId, members]);

  useEffect(() => {
    if (oldMessagesChunk.data?.messages) {
      setMessages(oldMessagesChunk.data.messages);
      console.log("Fetched messages:", oldMessagesChunk.data.messages); // Debug log for fetched messages
    }
  }, [oldMessagesChunk.data]);

  useEffect(() => {
    dispatch(removeNewMessagesAlert({ chatId }));
  }, [chatId]);

  useErrors(errors);

  const newMessagesListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;

      // Play the notification sound if the message is from another user
      if (data.message.sender._id !== user._id) {
        recivemessagenoti.play();
      }

      setMessages((prev) => [...prev, data.message]);
      console.log("New message received:", data.message); // Debug log for received message
    },
    [chatId, user._id]
  );

  const alertListener = useCallback((data) => {
    if (data.chatId !== chatId) return;

    setUserTyping(data.typing);
  }, [chatId]);

  const eventHandlers = {
    [NEW_MESSAGE]: newMessagesListener,
    [ALERT]: alertListener,
  };

  useSocketEvents(socket, eventHandlers);

  useEffect(() => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!chatId) {
    return (
      <Stack justifyContent={"center"} height={"100%"} spacing={"1rem"}>
        <Skeleton
          variant="circular"
          animation="wave"
          width={150}
          height={150}
          sx={{ margin: "0 auto" }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          height={100}
          width={"80%"}
          sx={{ margin: "0 auto" }}
        />
      </Stack>
    );
  }

  const allMessages = [...oldMessages, ...messages];

  return (
    <Fragment>
      <FileMenu
        fileMenuAnchor={fileMenuAnchor}
        setFileMenuAnchor={setFileMenuAnchor}
        chatId={chatId}
        members={members}
      />

      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
        style={{
          backgroundImage: `url(${whatsAppBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {allMessages.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}

        {userTyping && <TypingLoader />}

        <div ref={bottomRef} />
      </Stack>

      <Stack
        height={"10%"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"0.5rem"}
        bgcolor={orange}
        component={"form"}
        onSubmit={submitHandler}
      >
        <IconButton onClick={handleFileOpen}>
          <AttachFileIcon />
        </IconButton>
        <InputBox
          type={"text"}
          value={message}
          placeholder={"Enter your message..."}
          onChange={messageOnChange}
        />
        <IconButton type={"submit"}>
          <SendIcon />
        </IconButton>
      </Stack>
    </Fragment>
  );
};

export default AppLayout()(Chat);

