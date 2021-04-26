// jshint esversion:6
var tweet = "";
var preTweet = `<div class="tweet-feed">
<div class="row">
  <div class="photo-holder col-1"><img src="images/profile-picture.png" class="profile-photo" alt="" /></div>
  <div class="col-10">
    <div class="tweet">
      <div class="tweet-header">
        <span class="profile-name">Elon Tusk</span>
        <span class="username">@longtusk</span>
      </div>

      <p>`;
var postTweet = `</p>
<div class="reactions">
<button type="button" class="btn comment far fa-comment"></button>
<button type="button" class="btn retweet fas fa-retweet"></button>
 <button type="button" class="btn like far fa-heart"></button>
 <button type="button" class="btn share fas fa-share-alt"></button>
 </div>
</div>
</div>
</div>
</div>`;

function likeEventListner() {
  $(".reactions .like").off();
  $(".reactions .like").click(function (e) {
    $(this).toggleClass("fas far liked");
  });
}
function postTweetFeed(tweet) {
  var posting = preTweet + tweet + postTweet;
  $("#postbox").after(posting);
  likeEventListner();
  tweet = "";
}

function loadTweet(data) {
  $(".feed").append(preTweet + data + postTweet);
  likeEventListner();
}


// tweet character counter
likeEventListner();
$(".post-input").keydown(function (e) {
  $(".post-input").removeClass("placeholder");
  var charRemaining = 280 - ($(".post-input").text()).length;
  $("#char-counter").text("");
$("#char-counter").append(charRemaining);
if(charRemaining < 0){
  $("#char-counter").css("color", "red");
}
else{
  $("#char-counter").css("color", "");
}
});

$(".post-tweet").click(function (e) {
  //posting tweet
  tweet = $(".post-input").text();
  $(".post-input").empty();
  postTweetFeed(tweet);
});

//reaction buttons

// infinte scroll
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    loadTweet(sentence());
  }
});

$(".login-panel button").click(function () {
  console.log($("#password").text);
});

// random sentence generation

var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content =
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    " because some " +
    nouns[rand1] +
    " " +
    adverbs[rand1] +
    " " +
    verbs[rand1] +
    " " +
    preposition[rand1] +
    " a " +
    adjectives[rand2] +
    " " +
    nouns[rand5] +
    " which, became a " +
    adjectives[rand3] +
    ", " +
    adjectives[rand4] +
    " " +
    nouns[rand6] +
    ".";

  return content;
}
