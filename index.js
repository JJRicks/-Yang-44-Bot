/*const Discord = require('discord.js');
const fs = require('fs');
//testing 123
const client = new Discord.Client();

var responsesArray1 = [`Yang has said "44" `];
var responsesArray2 = [` times.`];

var count = 0;
fs.readFile('./count.txt', function(err, data) {
    count = data;
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("the 44 game");
    
});
client.on('message', msg => {
    //JJRicks id 284889295125479425
    //Yang id 147869832275034112
    //James id 221378647351754752
 
    //msg.content.includes('44')
    


    if (msg.member.id === '147869832275034112' && msg.content.includes('44')) {
        count += (msg.content.match(/44/g)||[]).length;
        fs.writeFile('./count.txt', count, function (err) {
            if (err) throw err;
            console.log(count);
        });
        msg.channel.send(responsesArray1[0] + count + responsesArray2[0]);
        if(count === 44) {
            msg.channel.send("wow he said it 44 times, how cool is that")
        }
    }
    /*
    if (msg.member.id === '147869832275034112' && msg.content.includes('44')) {
        count++;
        fs.writeFile('./count.txt', count, function (err) {
            if (err) throw err;
            console.log(count);
        });
        msg.channel.send(responsesArray1[0] + count + responsesArray2[0]);
        if(count === 44) {
            msg.channel.send("wow he said it 44 times, how cool is that")
        }
    }
    */
   const Discord = require('discord.js');
   const fs = require('fs');
   
   const client = new Discord.Client();
   
   var responsesArray1 = [`You've heard the old joke, `];
   var responsesArray2 = [` drums and a cymbal fall off a cliff. `];
   var funFactArray = ["The Fiat 147 was a three-door hatchback compact car produced in Brazil from 1976 until 1986", 
   "148 is the second number to be both a heptagonal number[1] and a centered heptagonal number[2] (the first is 1)",
   "149 is the 35th prime number, and with the next prime number, 151, is a twin prime, thus 149 is a Chen prime.",
   "In Round 20 of the 2011 AFL season, Geelong inflicted the worst ever defeat on the Gold Coast Suns by 150 points.",
   "MG 151 cannon was a 15 mm autocannon during World War II",
   "The Baade 152 was the first German jet passenger airliner in 1958",
   "British Rail Class 153 is a single-car diesel multiple unit train",
   "With just 17 cuts, a pancake can be cut up into 154 pieces (Lazy caterer's sequence).",
   "155 is the number for the International Operator in the United Kingdom",
   "156 is the number of hourly gongs a clock strikes in one day (78 AM gongs and 78 PM gongs)",
   "Ken Carpenter held the US record in discus, and won the NCAA national title with a toss of 157 feet in 1936.",
   "158 is the number of digits in the decimal expansion of 100!, the product of all the natural numbers up to and including 100.",
   "The state of Georgia has 159 counties",
   "160 is the hymn everyone in seminary always asked me to play, because it's only one verse and two bars long.",
   "161 is the sum of five consecutive prime numbers: 23, 29, 31, 37, and 41",
   "162 is the total number of baseball games each team plays during a regular season in Major League Baseball.",
   "Russ Howell at the Long Beach, California World Championship in 1977 performed a world record 163 full rotations in freestyle skateboarding tricks.",
   "Caproni Ca.164 was a training biplane produced in Italy prior to World War II",
   "The British Rail Class 165 Network Turbo is a fleet of suburban diesel multiple units. https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Reading_-_GWR_165102_Basingstoke_service.JPG/450px-Reading_-_GWR_165102_Basingstoke_service.JPG",
   "HD 166 is the 6th magnitude star in the constellation Andromeda",
   "Pips are dots on the face of a die, denoting its value. The pip count at the start of a backgammon game is 167",
   "168 is the number of hours in a week, or 7 x 24 hours",
   "Nice.",
   "0",
   "0",
   "0",
   "0",
   "0",
   "This is the Gibson ES-175 jazz guitar: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gibson_ES-175_jl.png/263px-Gibson_ES-175_jl.png",
   "The Heinkel He 176 was a German rocket-powered aircraft",
   "177 is the police emergency telephone number in Morocco. Also yeah he totally hacked it.",
   "DO-178B, Software Considerations in Airborne Systems and Equipment Certification is a guidance for software development",
   "179 is a strictly non-palindromic number. It is not a palindromic number in any base.",
   "180 is the maximum possible score in one turn at darts (three triple 20s).",
   "0",
   "0",
   "0",
   "0",
   "0",
   `"Hey, did you hear that there was a new school shooting in California :grinning:"`,
   `"wefwahfwahfwa"`,
   `"Ha! Mine's shorter!"`,
   `"Don't worry, I am a responsible arsonist"`,
   `"why on earth would you ever use a flashlight to illuminate your way when you could use fire"`,
   `"0"`,
   `"0"`,
   `"jacobs music is math videos"`,
   `"heehee michael bubble"`,
   `"baba yetu is the single greatest song ever"`,
   `"candy corn"`,
   `"doing little hops and bops"`,
   `"yall ever just want to be a bird"`,
   `"i have too many drug searches to not be on a watchlist"`,
   `"i need no headphone jack"`,
   `"apple products dont suck"`];
   
   var count = 0;
   fs.readFile('./count.txt', function(err, data) {
       count = parseInt(data, 10);
   });
   client.on('ready', () => {
       console.log(`Logged in as ${client.user.tag}!`);
       //client.user.setActivity("44");
       client.user.setActivity('for 24hr time', { type: 'WATCHING' });
       client.user.setUsername('Time-Converter-Bot');
       
       
   });
   client.on('message', msg => {
       //JJRicks id 284889295125479425
       //Yang id 147869832275034112
       //James id 221378647351754752
       //test
       //msg.content.includes('44')

       if(/*msg.member.id === '284889295125479425' && */ msg.content.match(/[u||U||Ù||Û||Ü||ù||ú||û||ü||ð||°||◦||θ||δ||ο||σ||o||O||0||Θ||Ò||Ó||Ô||Õ||Ö||Ø||Θ||Φ||*||.||()||@][^A-Za-z0-9]*[w||W||ψ||ω||Ψ][^A-Za-z0-9]*[u||U||Ù||Û||Ü||ù||ú||û||ü||ð||°||◦||θ||δ||ο||σ||o||O||0||Θ||Ò||Ó||Ô||Õ||Ö||Ø||Θ||Φ||*||.||()||@]/g)){
        //msg.react(606013202244829196);
        msg.channel.send(`nuh uh, no way pal`);
    
        //client.emojis.get("606013202244829196")
           //.then(reaction => console.log(typeof reaction));
        
        //setTimeout(msg.react('2️⃣'), 1000);
        //1️⃣ 647182609637441556
        //2️⃣ 647182609625120788
        //3️⃣ 647182609259954215
        //4️⃣ 647182609524457529
        //5️⃣ 647182609272799247
        //6️⃣ 647182609641766943
        //7️⃣ 647182609381588994
        //8️⃣ 647182609469931531
        //9️⃣ 647182609633509386
        //emoji 10 647182609650024463
        //0️⃣ 647182609633378335
        //🅿 647182609511612422
        //Ⓜ️ 647182609654480896
        //A 647185584162340876
        //11 647186445080985610
    }
       
       if(msg.member.id === '284889295125479425' && msg.content.includes('!44test_noiterate')) {
           msg.channel.send(responsesArray1[0] + parseInt(count, 10) + responsesArray2[0]  /*" Did you know? Yang once said: " + funFactArray[count-147]*/);
       }
       if (msg.member.id === '147869832275034112' && msg.content.includes('44')) {
           count += parseInt((msg.content.match(/u[^A-Za-z0-9]*w[^A-Za-z0-9]*u/g)||[]).length, 10);
           fs.writeFile('./count.txt', parseInt(count, 10), function (err) {
               if (err) throw err;
               console.log(count);
           });
           msg.channel.send(responsesArray1[0] + parseInt(count, 10) + responsesArray2[0] /*" Did you know? Yang once said: " + funFactArray[count-147]*/);
           if(count === 44) {
               msg.channel.send("wow he said it 44 times, how cool is that")
           }
       }
       if(msg.member.id === '147869832275034112' && msg.content.includes('4̶4̶')) {
           count++;
           msg.channel.send(responsesArray1[0] + parseInt(count, 10) + responsesArray2[0] /*" Did you know? Yang once said: " + funFactArray[count-147]*/);
           if(count === 44) {
               msg.channel.send("wow he said it 44 times, how cool is that")
           }
       }
       if(msg.member.id === '147869832275034112' && msg.content.includes('four')) {
        count++;
        msg.channel.send(responsesArray1[0] + parseInt(count, 10) + responsesArray2[0]  /*" Did you know? Yang once said: " + funFactArray[count-147]*/);
        if(count === 44) {
            msg.channel.send("wow he said it 44 times, how cool is that")
        }
        if(msg.member.id === '147869832275034112' && msg.content.includes('ɥɥ') || msg.content.includes('4­4') || msg.content.includes('4­­4')) {
            count++;
            msg.channel.send(responsesArray1[0] + parseInt(count, 10) + responsesArray2[0] + " *Have ideas for bot messages? Submit here!* `discord (dot) gg/f4pdXf`" /*" Did you know? Yang once said: " + funFactArray[count-147] */);
            if(count === 44) {
                msg.channel.send("wow he said it 44 times, how cool is that")
            }
        }
    }


    
    if(msg.member.id === '221378647351754752' && msg.content == 'ping'){
        msg.reply('pong');
    }

    if(msg.member.id === '284889295125479425' && msg.content == 'ping'){
        msg.reply('pong');
    }

    if(msg.member.id === '284889295125479425' && msg.content.includes('!reboot')){
        msg.channel.send('rebooting....');
        msg.channel.send('implemented');
    }
    if(msg.member.id === '284889295125479425' && msg.content.includes('!shutdown')){
        msg.channel.send(`Shutting down...`);
    }
    if(msg.member.id === '481219393582399489' && msg.content.includes('back') || msg.content.includes('Back')){
        msg.channel.send('to the future');
    }
    
    
    if(msg.content.includes('13:')){
        msg.react(client.emojis.get("647182609637441556"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('14:')){
        msg.react(client.emojis.get("647182609625120788"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('15:')){
        msg.react(client.emojis.get("647182609259954215"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('16:')){
        msg.react(client.emojis.get("647182609524457529"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('17:')){
        msg.react(client.emojis.get("647182609272799247"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('18:')){
        msg.react(client.emojis.get("647182609641766943"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('19:')){
        msg.react(client.emojis.get("647182609381588994"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('20:')){
        msg.react(client.emojis.get("647182609469931531"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('21:')){
        msg.react(client.emojis.get("647182609633509386"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('22:')){
        msg.react(client.emojis.get("647182609650024463"));
        // setTimeout(function(){ 
        //     msg.react('0️⃣');
        // }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('23:')){
        msg.react(client.emojis.get("647186445080985610"));
        // setTimeout(function(){ 
        //     msg.react('1️⃣');
        // }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609511612422"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 2000);
    }
    if(msg.content.includes('00:')){
        msg.react(client.emojis.get("647182609637441556"));
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609625120788"));
        }, 1000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647185584162340876"));
        }, 2000);
        setTimeout(function(){ 
            msg.react(client.emojis.get("647182609654480896"));
        }, 3000);
    }
    /*
    if(msg.member.id != '646061170150735904' && msg.content.includes('uwu') || msg.content.includes('owo')){
        msg.channel.send(`uwu what's this???`);
        msg.channel.send(`huggy wuggy`);
        msg.channel.send(`X3`);
        msg.channel.send('nuzzles u');
        msg.channel.send(':3');
        msg.channel.send('*blushes*');
    */
    //} 
    /*
    if(msg.member.id != '646061170150735904' && msg.content.includes('Oho now')){
        msg.channel.send(`Looks great`);
    }*/
    /*
    if(msg.member.id != '646061170150735904' && msg.content.includes('oof')){
        msg.channel.send(`big sad`);
    
    }*/
    /*
    if(msg.member.id != '646061170150735904' && msg.content.includes('my boy')){
        msg.channel.send(`this peace is what all true warriors strive for`);
    
    }
    */ 
    if(msg.member.id === '284889295125479425' && msg.content === '!manualiterate') {
        count++;
        fs.writeFile('./count.txt', count, function (err) {
            if (err) throw err;
            console.log(count);
        });
        msg.channel.send(responsesArray1[0] + count + responsesArray2[0] /* + " Did you know? " + funFactArray[count-147] */ );
        if(count === 44) {
            msg.channel.send("wow he said it 44 times, how cool is that")
        }
    }
    // function sendMessageThing() {
    //     client.channels.get(646063225346981898).send(`test`);
    // }

    if(msg.member.id === '221378647351754752' && msg.content === '!manualiterate') {
        count++;
        fs.writeFile('./count.txt', count, function (err) {
            if (err) throw err;
            console.log(count);
        });
        msg.channel.send(responsesArray1[0] + count + responsesArray2[0]) /*+ " Did you know? " + funFactArray[count-147]) */;
        if(count === 44) {
            msg.channel.send("wow he said it 44 times, how cool is that")
        }
    }
});

client.login('NjQ2MDYxMTcwMTUwNzM1OTA0.XdLpZA._x1pNvCnkqLoSP1cEKRRsMz1eOU');