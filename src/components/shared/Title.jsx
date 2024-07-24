import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "InstaChat",
  description = "InstaChat brings your conversations to life with quick messaging, easy file sharing, and dynamic group chats",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
