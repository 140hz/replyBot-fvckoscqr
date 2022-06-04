console.log('el contestador bot se ha inicializado');

var Twit = require('twit');

var replie = [' STFU, LEAVE ME ALONE', ' a como chilla la ardilla', ' aja aja', ' el lunes sin falta carnal', ' tes chingando lol', ' vemos', ' no estoy'];

var T = new Twit({
    consumer_key:         'OWQPvEP5ugxvYNi9ZUYHY8mnl',
    consumer_secret:      'pUWKwGqmBBof8sIQ0zIDWgksA0l5MQYlgBGIcn7RdO52iPWVHo',
    access_token:         '2422708117-iGpySGUt8mV2ANcTvxmV49ec0ywgLDs5ab10879',
    access_token_secret:  'usa6kDYZUyhil35R4ZBtyT4BMkZqFD1T9LqxpYT1TUvm2',
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
