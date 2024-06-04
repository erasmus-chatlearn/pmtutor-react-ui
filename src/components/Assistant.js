import { WebChatContainer } from "@ibm-watson/assistant-web-chat-react";
import "./Assistant.css";
import React, {useEffect, useState, useCallback} from "react";

const webChatOptions = {
  integrationID: process.env.REACT_APP_IBM_WEBCHAT_INTEGRATION_ID,
  region: process.env.REACT_APP_IBM_WEBCHAT_REGION,
  serviceInstanceID: process.env.REACT_APP_IBM_WEBCHAT_SERVICE_INSTANCE_ID,
  openChatByDefault: true,
  hideCloseButton: true,
  clientVersion: "7.6.0"
};

const fetchUser = async (setUser, setError) => {
  try {
    const response = await fetch('/user');
    const data = await response.json();
    setUser({userId: data.sub, username: data.name});
  } catch (err) {
    setError(err.message);
  }
}

function Assistant() {
  document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);
  document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);

  const [instance, setInstance] = useState(null);
  const [user, setUser] = useState({userId: null, username: null});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser(setUser, setError);
  }, []);

  const setInitialContextVars = useCallback((event) => {
    event.data.context.skills['main skill'] = event.data.context.skills['main skill'] || { user_defined: {} };
    event.data.context.skills['main skill'].user_defined.user_basic_info = user;
  }, [user]);

  const onBeforeRender = useCallback(async (instance) => {
    instance.updateUserID(user.userId);
    instance.once({type:"pre:send", handler:setInitialContextVars});
    instance.updateCSSVariables({
      'BASE-z-index': '8000',
      'BASE-font-family': '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      '$ui-background': '#ffffff',
      '$focus': '#acd2d2',
      '$interactive-01': '#acd2d2',
      '$ui-01': '#ffffff',
      '$inverse-02' : '#acd2d2',
      '$selected-ui' : '#acd2d2',
      '$inverse-01' : '#000000',
      '$inverse-hover-ui' : '#acd2d2',
    });
    const logoutBtn = document.getElementById("confirm-logout-btn");
    logoutBtn.addEventListener('click', function clickListener() {
      instance.destroySession();
    });
    instance.once({type: 'chat:ready', handler: () => {
      const messageInput = instance.elements.getMessageInput();
      messageInput.getHTMLElement().maxLength = 2048;
    }});
    setInstance(instance);
  }, [user, setInitialContextVars]);

  const onAfterRender = useCallback(async (instance) => {
    instance.changeView('mainWindow');
  }, [instance]);

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
      <>
        {
          user.userId ? <WebChatContainer config={webChatOptions} onBeforeRender={onBeforeRender} onAfterRender={onAfterRender}/> : <p>Loading...</p>
        }
      </>
  );
}

export default Assistant;
