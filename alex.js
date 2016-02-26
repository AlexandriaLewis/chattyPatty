//calvin's ajax example
// https://github.com/TIY-Charleston-Front-End-February2016/demos/commit/5389c7bf2ef128f742b5e027ed5fa35adbb6f52e

//hank's repo he's so nice
// https://github.com/hankgielarowski/chatroom/blob/master/chatroom/main.js

var chatPosts = [];

var enterMsg = {
  message: 'has signed in!'
}

// var username = "";


var chatroom = {

  url: 'http://tiny-tiny.herokuapp.com/collections/chattyPatty2',
  init: function(){
    chatroom.initEvents();
    chatroom.initStyling();
  },

  initEvents: function(){
    $('body').on('click', '.submit', chatroom.submitUsername);
    // $('.enterUsername').on('click', '.send', );
    // $('.enterUsername').on('click', '.delete', );
    // $('.enterUsername').on('click', '.exit', );
  },

  initStyling: function(){
    chatroom.getUser();
  },


  submitUsername: function(event){
    event.preventDefault();
    console.log("IT WORKED!!!!");

    username = $('input[name="userName"]').val();
    sessionStorage.setItem('user', username);
    console.log(username);

    var selected = "." + $(this).attr('rel');
    $(selected).closest('section').removeClass('inactive');
    $(selected).siblings('section').addClass('inactive');

    var newUser = chatroom.getUsernameFromDom(); //returns input in an obj
    chatroom.addUser(newUser); //puts obj into array
    $('input[name="username"]').val('');
  },

  getUsernameFromDom: function(){
    var username = sessionStorage.getItem('user');
    var message = enterMsg.message;
    console.log(username);
    return {
      username: username,
      message: message
    }
  },

  addUser: function(newPost){
    $.ajax({
      url: chatroom.url,
      method: 'POST',
      data: newPost,
      success: function(response){
        chatroom.getUser();
      },
      error: function(err){
        console.log("error", err);
      }
    })
  },

  getUser: function(){
    $.ajax({
       url: chatroom.url,
       method: 'GET',
       success: function (posts) {
         console.log(posts);
         chatroom.addUserToDom(posts);
       },
       error: function (err) {
         console.log(err);
       }
     });
  },

  addUserToDom: function (postsArr) {
    $('.chatWindow').html('');
    _.each(postsArr, function (el) {

      var header = _.template(template.header);
      var signature = _.template(template.signedIn);
      $('.chatWindow').append(header(el));
      // addPostToDom(el, templates.post, $('section'));
    })
  },

  addMessageToDom: function (postsArr) {
    // $('.chatWindow').html('');
    // _.each(postsArr, function (el) {
    //
    //   var header = _.template(template.header);
    //   var signature = _.template(template.signedIn);
    //   $('.chatWindow').append(header(el));
    //   // addPostToDom(el, templates.post, $('section'));
    // })
  },

  sendPost: function(){ //submit username

  },

  getPostFromDom: function (){

  },

  deletePostFromDom: function(){

  },

  deletePost: function(){

  },

  exitChat: function(){

  }

}

$(document).ready(function(){
//-------------------------------------------------------------->
chatroom.init();
//-------------------------------------------------------------->
})
