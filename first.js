messagesDay = ['bad','excellent','so-so','too bad','normal','lovely'];
messagesWeather = ['rainy','sunny','snowy','windy','too bad'];
messagesDie = ['2 years','5 years','1 week','2 weeks'];

function getDay () {
    i = Math.floor(Math.random()*6); 

    return console.log(`Your day will be ${messagesDay[i]}`);
}

function getWeather () {
    i = Math.floor(Math.random()*5); 

    return console.log(`Today will be ${messagesWeather[i]}`);
}

function getDie () {
    i = Math.floor(Math.random()*4); 

    return console.log(`You will die in ${messagesDie[i]}`);
}

function combined () {
    getDay();
    getWeather();
    getDie();
}

combined();