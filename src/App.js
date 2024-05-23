import React, { useState } from "react";
import './App.css';
import HomePage from "./HomePage/HomePage";
import SideBar from "./SideBar/SideBar";
import { ThemeContext } from "./AllContexts";
import likeOutlinedIcon from "./assets/like-outline-black.svg";
import dislikeOutlinedIcon from "./assets/dislike-outline-black.svg";
import likeFilledIcon from "./assets/like-filled-black.svg";
import dislikeFilledIcon from "./assets/dislike-filled-black.svg";

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarON, setSideBarON] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [pastConvo, setPastConvo] = useState(false);

  const iconsData = {likeOutlinedIcon, dislikeOutlinedIcon, likeFilledIcon, dislikeFilledIcon};

  const handleSideBar = () => setSideBarON(!sidebarON);

  const addChatMsg = (userMsg, botReply) => {
    setCurrentChat([...currentChat, userMsg, botReply]);
  }

  const clearCurrentChat = () => setCurrentChat([]);

  // const likeDislikeReply = (chatCardId, reaction) => setCurrentChat(updateByLikeDislike(chatCardId, reaction, currentChat, iconsData));

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
      <SideBar />
      <HomePage 
        // likeDislikeReply={likeDislikeReply} 
        pastConvo={pastConvo} 
        clearCurrentChat={clearCurrentChat} 
        addChatMsg={addChatMsg} 
        currentChat={currentChat} 
        handleSideBar={handleSideBar} 
        sidebarON={sidebarON}
      />
      </main>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
