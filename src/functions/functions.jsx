export const createTimeStamp = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm;
    return timeString;
}


export const findQuestionFromSampleData = (array, substring) => {

    const str = substring.toLowerCase()
    if(str === "hi" || str === "hii" || str === "hello" || str === "hey"){
        return ([{response: "Hello, how may I help you?"}]);
    }
    return array.filter(obj => obj.question.toLowerCase().includes(substring.toLowerCase()));
}


export const saveChatToLocal = currentChat => {
    
    const newConvo = {id: `convo-${new Date()/1}`, conversation: currentChat}
    let allConvo = [ newConvo ];
        
    const pastConvo = JSON.parse(window.localStorage.getItem("pastConversations"));
    if(pastConvo){  
        allConvo = [newConvo, ...pastConvo];
    }

    window.localStorage.setItem("pastConversations", JSON.stringify(allConvo));
}