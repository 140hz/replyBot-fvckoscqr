console.log('el contestador bot se ha inicializado');

var Twit = require('twit');

var replie = [' STFU, LEAVE ME ALONE', ' a como chilla la ardilla', ' aja aja', ' el lunes sin falta carnal', ' tes chingando lol', ' vemos', ' no estoy'];

var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
       // optional - requires SSL certificates to be valid.
})

var stream = T.stream('statuses/filter', { track: '@fvckoscqr' });

stream.on('tweet',tweetEvent);

function tweetEvent(eventMsg) {
    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;

    if(replyto == 'fvckoscqr'){
        var newTweet = '@' + from + replie[Math.floor(Math.random() * replie.length)];
        tuit(newTweet);
    }
}


function tuit(txt){

    var tweet = {
        status: txt
    }
    T.post('statuses/update',tweet, tweeted);
    function tweeted (err, data, response) {
        if(err){
            console.log('error en el camino!');
        }else{
            console.log('funciono el tuit!!!')
        }
        console.log(data)
      }

}
