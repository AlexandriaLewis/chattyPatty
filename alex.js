//calvin's ajax example
// https://github.com/TIY-Charleston-Front-End-February2016/demos/commit/5389c7bf2ef128f742b5e027ed5fa35adbb6f52e

//hank's repo he's so nice
// https://github.com/hankgielarowski/chatroom/blob/master/chatroom/main.js

var chatPosts = [
  {
    username: "welcomBot",
    message: "Welcome to the chat!"
  }
];

var enterMsg = {
  message: 'has signed in!'
}

// var username = "";


var chatroom = {

  url: 'http://tiny-tiny.herokuapp.com/collections/chattyPatty3',
  init: function(){
    chatroom.initEvents();
    chatroom.initStyling();
  },

  initEvents: function(){
    $('body').on('click', '.submit', chatroom.submitUsername);
    $('body').on('click', '.send', chatroom.submitPost);
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

      // var header = _.template(template.header);
      var signature = _.template(template.post);
      // $('div.header').html(header(el));
      $('.chatWindow').append(signature(el));
    })
  },

  submitPost: function (event) {
    event.preventDefault();
    var   newPost = chatroom.getPostFromDom();
    console.log(newPost);
      chatroom.addPost(newPost);

      $('input').val('');
  },

  getPostFromDom: function() {
    var username = ; //IMPORTANT QUESTION HOW DO?
    var message = $('input[name="message"]').val();
    return {
      username: username,
      message: message
    }
  },

  addPost: function(newPost){
    $.ajax({
      url: chatroom.url,
      method: 'POST',
      data: newPost,
      success: function(response){
        chatroom.getPosts();
      },
      error: function(err){
        console.log("error", err);
      }
    })
  },

  getPosts: function getPosts() {

   $.ajax({
     url: chatroom.url,
     method: 'GET',
     success: function (chatPosts) {
       console.log(chatPosts);
       chatroom.addAllPostsToDom(chatPosts);
     },
     error: function (err) {
       console.log(err);
     }
   });

 },

   addAllPostsToDom: function (chatArr) {
     $('.chatWindow').html('');
     _.each(chatArr, function (el) {

       var tmpl = _.template(template.post);
       $('.chatWindow').append(tmpl(el));
     })
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
