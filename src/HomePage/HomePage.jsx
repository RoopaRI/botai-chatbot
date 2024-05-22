import React, {useState} from "react";
import "./HomePage.css";
import data  from "../sampleData.json";
import DefaultHomePage from "../DefaultHomePage/DefaultHomePage";
import { TextField } from '@mui/material';

export default function HomePage(){
    const [showChat, setShowChat] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [ chatHistory, setChatHistory] = useState([]);
    const [messages, setMessages] = useState([
        {
          message: "Hi I am BOT AI",
          sender:  true,
        }
      ]);

      const handleInputChange = (e) => {
        setInputValue(e.target.value)
      }

      const handleMessages = () => {
        const newMessages = [
          ...messages,
          { message : question, sender: 'user'},
          { message : response, sender: 'bot'},
        ];    
        setMessages(newMessages);
        setChatHistory([...chatHistory, { question, response }]);
      }

      const handleAsk = () => {
        // setShowChat(true);
        // console.log("true");
        const question = (inputValue.trim().toLowerCase());
        setQuestion(question);
        const foundQuestion = data.find(item => item.question.toLowerCase().includes(question));
        
        if(foundQuestion){
          setResponse(foundQuestion.response);
          setShowChat(true);
        }else{
          setResponse("Sorry, Coudnt find the response for this question")
          setShowChat(true);
        }
        handleMessages(question, response);
        setInputValue('');
        setShowChat(true);
      };

    return(
        <div className="container">
            <div className="left-container">
                <h3>NewChat</h3>
                
            </div>
            <div className="right-container">
                {showChat ? (null
            //   <ChatBox messages={messages}/>
                ): (
                <DefaultHomePage/>
                )}
            </div>
            
        <div className="input-area">
              <TextField 
                style={{outline: 'none'}} 
                fullWidth className="chatbox" 
                id="outlined-basic" 
                label="Ask your question here..." 
                variant="outlined" 
                value={inputValue} 
                onChange={handleInputChange}
              />
              <button className="btn" onClick={handleAsk}>Ask</button>
              <button className="btn">Save</button>
              
            </div>
        </div>
    );
}