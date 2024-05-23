import React from "react";
import NewChat from "../NewChat/NewChat";
import PastConversation from "../PastConversation/PastConversation";

export default function SideBar(){
    return(
        <div>
            <NewChat />
            <PastConversation />
        </div>
    );
}