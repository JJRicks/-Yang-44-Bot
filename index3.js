const Discord = require('discord.js');
//const config = require('./config.json');

const client = new Discord.Client();


client.once('ready', async () => {
    console.log("Logged in and ready!");
    client.user.setUsername(`Jacob's Edit Code`);
    
	
});
var msgToSend = "";
client.on('message', msg => {
    var beforeEdit = msg.content;
    var afterEdit = "afterEdit";
    if(msg.channel.id === "584510035657359501" || msg.channel.id === "635627814334496779" || msg.channel.id === "626608521907142669" || msg.channel.id === "629451594236297255" || msg.channel.id === "643530709260042319") {
      setTimeout(function(){ 
        afterEdit = msg.content;
        msgToSend = parseEdit(beforeEdit, afterEdit);
        if(beforeEdit != afterEdit) {
          if(msgToSend.length > 0) {
            msg.channel.send(msgToSend); 
          } else {
            console.log("Could not send empty message!");
            msg.channel.send("An empty message could not be sent. \nbeforeEdit: `" + beforeEdit + "\n` afterEdit: `" + afterEdit + "`");
          }
        }
        
    }, 20000);
    }
    
    
    var EDITMODE = "concise";
    var ExplicitWeight = 2;
    //the higher this is, the more likely you are to get a breakdown of changes
    /**
     * auto - which ever option is shortest (they may have completely deleted it)
     * brief - a series of one liners that shows each change
     * resend - brief but it sends the corrected message in its entirity
     * fullSend - send the edit before and after in its entirity
     * 
     * you can also collapse this variable into the switch in parseChange, thats the only time its used
     */
    var verbs = ["Changed","Altered","Switched","Edited","Pulled a quick one from"];
    var vOTD = verbs[0]; //verb of the day
    
    //change finding and concatination of formated changes
    function parseEdit(before, after){
      var mtchRds = 6; //match radius, how many characters have to line up to be considered a match
    
      //marks edits
      /**
       * compares texts with two pointers until an error is found, and then continues until the text matches for [matchRadius] characters again
       */
    
      
      var changeLog = []; //[start index before, stop index before, start index after, stop index after]
    
    
      var ib = 0;// starting index for before
      var ia = 0;// starting index for after
      var nextChange = [0,-1,0,-1,false];
      //start and stop in before, and after, a boolean for whether a change is being examined.
      var matchInB = -1;
      var matchInA = -1;
    
      while (ib < before.length && ia < after.length){
        // console.log("------------ while loop pass("+ib+","+ia+")--");
        if(before[ib] == after[ia] && !nextChange[4]){
          nextChange = [ib+1,-1,ia+1,-1,false];
        }else{
          nextChange[4] = true;
          matchInA = matchSgmnt(before,after,ib,mtchRds)
          matchInB = matchSgmnt(after,before,ia,mtchRds);
          if(matchInB < 0 && matchInA < 0){
          }
          else if(matchInB < 0 || matchInB > matchInA && matchInA > 0){
            nextChange[1] = ib;
            nextChange[3] = matchInA;
            ia = matchInA;
            // console.log("Pushing: "+nextChange);
            changeLog.push([...nextChange]);
            nextChange[4] = false;
          }
          else{
            nextChange[1] = matchInB;
            nextChange[3] = ia;
            ib = matchInB;
            // console.log("Pushing: "+nextChange);
            changeLog.push([...nextChange]);
            nextChange[4] = false;
          }
          
        }
    
        // console.log((ib)+", "+(ia)+"  "+before[ib]+after[ia]+" "+nextChange[4]+"\t"+matchInB+" "+matchInA)
        ib++;
        ia++;
      }
    
      // deal with unresolved change (usually from beginning due to complete replacement)
      if (nextChange[4]){
        nextChange[1] = before.length;
        nextChange[3] = after.length;
        // console.log("(Extra) Pushing: "+nextChange);
        changeLog.push([...nextChange]);
      }else if(before.length - ib != after.length - ia){
        changeLog.push([ib,before.length,ia,after.length,true]);
      }
    
    
    
    
      //review selections
      // console.log("Reviewing Selections");
      var change = [];
      var rtrn = "";
    
      var full = getFormattedChange(before,after,[0,before.length,0,after.length],"resend");
      
      if(changeLog.length < 5){
        for(var i=0; i<changeLog.length;i++){
          change = changeLog[i];
          rtrn += getFormattedChange(before,after,change,EDITMODE);
          if (i<changeLog.length-1) rtrn += "\n"
        }
      }else if(changeLog.length < 14){
        rtrn += "This message has been edited a lot!"
        for(var i=0; i<changeLog.length;i++){
          change = changeLog[i];
          rtrn += getFormattedChange(before,after,change,"shorthand");
          if (i<changeLog.length-1) rtrn += "|"
        }
      }else{
        rtrn += "idk how you even managed that... " + changeLog.length + " edits, wow \n I'm still going to try tho"
        for(var i=0; i<changeLog.length;i++){
          change = changeLog[i];
          rtrn += getFormattedChange(before,after,change,"shorthand");
          if (i<changeLog.length-1) rtrn += "|"
        }
      }
    
      if(rtrn.length > full.length*ExplicitWeight) {
        rtrn = full;
      }
    
      return rtrn;
    }
    function matchSgmnt(search,target,i,mtchRds){
      var sgmnt = search.substring(i,i+mtchRds);
      // console.log("Searching for \""+sgmnt+"\"");
      if (sgmnt.length == 0){
        return search.length();
      }
      return target.indexOf(sgmnt);
    }
    
    
    //change formatting
    function getFormattedChange(before,after,c,mode){
      //before and after are the text pre- and post- edit
      //c is [start index before, stop index before, start index after, stop index after]
      //mode is the format style for the switch()
      
      
      var r = 4; // how many characters to display before and after the change
      focusB = before.substring(c[0]-r,c[1]+r);
      focusA = after.substring(c[2]-r,c[3]+r);
    
      // add "..." before and after
      if (c[0]-r > 0) focusB = "..." + focusB;
      if (c[1]+r < before.length) focusB += "...";
      if (c[2]-r > 0) focusA = "..." + focusA;
      if (c[3]+r < after.length) focusA += "...";
    
      
      var rtrn = vOTD;
      switch(mode){
        case "DEBUG":
          rtrn += c +"[\n";
          rtrn += before[c[0]] 
                + before[c[1]] 
                + after[c[2]] 
                + after[c[3]] + "[\n";
          rtrn += focusA + "[\n";
          rtrn += focusB + "[\n";
          break;
        case "resend":
          rtrn += " \""+before+"\"\n";
          rtrn += "             to \""+after+"\"";
          break;
        case "shorthand":
          rtrn += " "+focusA+" > "+focusB+" ";
          break;
        case "concise":
        default:
          rtrn += " \""+focusB+"\"\n";
          rtrn += "             to \""+focusA+"\"";
      }
      return rtrn
    }
    
    
    
    
    ////////////////////////////////////////
    //////////////TEST CASES////////////////
    ////////////////////////////////////////
    
    function runTestCases(){
      /** 
       * test cases to include
       * 
       * no change (might as well)
       * 
       * replace beginning keep length
       * replace middle keep length
       * repace end keep length
       * replace beginning smaller length
       * replace middle smaller length
       * repace end smaller length
       * replace beginning longer length
       * replace middle longer length
       * repace end longer length
       * 
       * change beginning
       * 
       * completely replace
       * completely delete
       * 
       * 
       */
      var testCases = [
        ["hello world!","-_-"],
        ["hi world!","hello world!"],
        ["oopsies, i madep a typo!","oopsies, i made a typo!"],
        ["0opsies, i madep a typos!","oopsies, i made a typo!"],
        ["0Oopsies, i madep a typos!","oopsies, i made a typo!"],
        ["oh no the grammer nazis be comin!","!Oh no! The grammar nazis are coming!"],
        ["test","test1"]
      ]
      for(var i=0;i<testCases.length;i++){
        console.log("parseEdit(\""+testCases[i][0]+"\", \""+testCases[i][1]+"\")\n\n"+parseEdit(testCases[i][0],testCases[i][1])+"\n----");
      }
    }
    //runTestCases();
    
    ////////////////////////////////////////
    //////////////TEST CASES////////////////
    ////////////////////////////////////////
});


//jacobs edit code
client.login('NjQ2MDYxMTcwMTUwNzM1OTA0.XhQLnA.7Km8HYBEsTv3JyJRxrSlToK2qeg'); 
//client.login('NjYzODI5MTU0NzAwOTg0MzUy.Xk4YOA.40Mc_7zi5CiJigCzgA0yTZlesNY');

//yang 44 english class token oTBPWbmisx_H6DDA884tJUiqLjlBOwiOXGbODpf5c9gTMMEQwKzueOtVPkva2OpufDHK
//yang 44 english class id 710335505333485620
