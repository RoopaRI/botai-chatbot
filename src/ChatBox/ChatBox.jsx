import React, { useContext, useEffect } from 'react';
import { ThemeContext } from "../AllContexts";
import DefaultHomePage from "../DefaultHomePage/DefaultHomePage";
import "./ChatBox.css";
import botai from "../assets/logo.png";
import user from "../assets/dp.png";
import likeOutlinedIcon from "../assets/like-outline-black.svg";
import dislikeOutlinedIcon from "../assets/dislike-outline-black.svg";
import sampleData from "../sampleData.json";
import { createTimeStamp, findQuestionFromSampleData, saveChatToLocal } from "../functions/functions";
import ChatCard from '../ChatCard/ChatCard';
import InputFeild from '../InputFeild/InputFeild';

export default function ChatBox (props) {
    const { currentChat, addChatMsg, clearCurrentChat, likeDislikeReply } = props;
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(()=>{
        if(!currentChat) return
        scrollToBottom();
    }, [currentChat])

    const handleFormInput = text => {
        
        // create relevant response from form input
        // create new chat cards from form input and response
        // add to currentChats

        const responseArr = findQuestionFromSampleData(sampleData, text);

        const userCard = {
            icon: user,
            name: "you",
            message: text,
            time: createTimeStamp(),
            id: `you-${new Date() / 1}`,
        }

        const botCard = {
            icon: botai,
            name: "bot ai",
            message: responseArr?.[0]?.response || "Sorry, Can't find answer",
            time: createTimeStamp(),
            id: `botAI-${new Date() / 1}`,
            like: likeOutlinedIcon,
            dislike: dislikeOutlinedIcon,
        }

        addChatMsg(userCard, botCard);
    }


    const displayCards = () => {

        if(!currentChat || !currentChat.length) return [];

        return currentChat.map(card => {
            const { icon, name, message, time, id, like, dislike } = card;
            let customClass
            if(name === "bot ai") customClass = "botCard";
            else customClass = "userCard"
            return <ChatCard like={like} dislike={dislike} id={id} likeDislikeReply={likeDislikeReply} customClass={customClass} key={id} icon={icon} name={name} message={message} time={time}/>
        })
    }

    const saveChat = () => {
        if(!currentChat || !currentChat.length) return alert("No Conversation to save.")
        saveChatToLocal(currentChat);
        clearCurrentChat();
        alert("Conversation saved!")
    }

    // Function to scroll to the bottom of the div
    function scrollToBottom() {
        var container = document.getElementById("cardsWrapper");
        if(!container) return;
        container.scrollTop = container.scrollHeight;
    }

  return (

    <div className={`ChatBody ChatBodyTheme-${theme}`}>
        {
            currentChat?.length ?
            <>
                <div className='cardsWrapper' id="cardsWrapper">
                    {displayCards()}
                </div>
                <InputFeild handleFormInput={handleFormInput} saveChat={saveChat}/>
            </>
            :
            <>
                <DefaultHomePage handleFormInput={handleFormInput} />
        <InputFeild handleFormInput={handleFormInput} />
            </>
        }      
        </div>
  );
};
