import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Stack, Typography } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useUnsendChatMutation } from "../../redux/api/api";
import { setIsUnsendMenu } from "../../redux/reducers/misc";

const UnsendChatMenu = ({ unSendMenuAnchor }) => {
  const dispatch = useDispatch();
  const { isUnsendMenu, selectedUnsendMessage } = useSelector(
    (state) => state.misc
  );

  const [unsendChat, { isSuccess }] = useUnsendChatMutation();

  const closeHandler = () => {
    dispatch(setIsUnsendMenu(false));
    unSendMenuAnchor.current = null;
  };

  const unsendChatHandler = () => {
    closeHandler();
    if (selectedUnsendMessage) {
      unsendChat(selectedUnsendMessage);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      // Refresh the chat list or remove the message from local state
    }
  }, [isSuccess]);

  return (
    <Menu
      open={isUnsendMenu}
      onClose={closeHandler}
      anchorEl={unSendMenuAnchor.current}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Stack
        sx={{
          width: "10rem",
          padding: "0.5rem",
          cursor: "pointer",
        }}
        direction={"row"}
        alignItems={"center"}
        spacing={"0.5rem"}
        onClick={unsendChatHandler}
      >
        <DeleteIcon />
        <Typography>Unsend Message</Typography>
      </Stack>
    </Menu>
  );
};

export default UnsendChatMenu;