// Modules
import { useState } from "react";

// Components
import * as avatar from "@zag-js/avatar";
import { useMachine, normalizeProps } from "@zag-js/react";

// API
import { createAvatarByName } from "../api/avatars";

// Styles
import '../styles/login.css';

const Login = () => {
  const [avatarImage, setAvatarImage] = useState('');
  const [state, send] = useMachine(avatar.machine({ id: "1" }));
  const avatarApi = avatar.connect(state, send, normalizeProps);

  const setAvatarImageUrl = (fullname) => {
    const newAvatar = createAvatarByName(fullname);

    setAvatarImage(newAvatar);
  }

  return (
    <div>
      <div {...avatarApi.rootProps}>
        <h2>login</h2>
        <span {...avatarApi.fallbackProps}>AU</span>
        <img alt="PA" src={avatarImage ?? ''} {...avatarApi.imageProps} />
      </div>
      <button onClick={() => setAvatarImageUrl('Anonymous User')}>Get avatar</button>
    </div>
  )
}

export default Login;
