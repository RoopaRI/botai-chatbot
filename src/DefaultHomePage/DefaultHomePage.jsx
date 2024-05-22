import React from "react";
import { Box } from '@mui/material';
import Logo from "../Logo/Logo";
import Card from "../Card/Card";
import "./DefaultHomePage.css";

const subtext="Get immediate AI generated response";
export default function DefaultHomePage(){
    return(
       <Box className="container" component="section" sx={{ p: 2}}>
           <h1 className="top-heading">BOT AI</h1>
            <p className="subHeading">How Can I Help You Today?</p>
            <Logo />
            <div className="Cards">
                <Card text="Hi, what is the weather" subText={subtext}/>
                <Card text="Hi, what is my location" subText={subtext}/>
                <Card text="Hi, what is the temperature" subText={subtext}/>
                <Card text="Hi, how are you" subText={subtext}/>
            </div>
       </Box>
    );
}