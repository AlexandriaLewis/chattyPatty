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

  url: 'http://tiny-tiny.herokuapp.com/collections/chattyPatty',
  init: function(){
    chatroom.initEvents();
    chatroom.initStyling();
  },

  initEvents: function(){
    $('body').on('click', '.submit', chatroom.submitUsername);
    $('body').on('click', '.send', chatroom.submitPost);
    $('body').on('click', '.delete', chatroom.deletePostFromDom);
    $('body').on('click', '.exit', chatroom.exitChat);
  },

  initStyling: function(){
    var i = 1;
    var refresh = setInterval(function() { chatroom.addAllPostsToDom }, 2000);
  },


  submitUsername: function(event){
    event.preventDefault();


    username = $('input[name="userName"]').val();
    sessionStorage.setItem('user', username);


    var selected = "." + $(this).attr('rel');
    $(selected).closest('section').removeClass('inactive');
    $(selected).siblings('section').addClass('inactive');

    var newUser = chatroom.getUsernameFromDom(); //returns input in an obj
    chatroom.addUser(newUser); //puts obj into array
    $('p.username').html(username);
    $('input[name="username"]').val('');
  },

  getUsernameFromDom: function(){
    var username = sessionStorage.getItem('user');
    var message = enterMsg.message
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
      // $('div.header').append(header(el));
      $('.chatWindow').append(signature(el));
    })
  },

  submitPost: function (event) {
    event.preventDefault();
    var   newPost = chatroom.getPostFromDom();
      chatroom.addPost(newPost);

      $('input[name="message"]').val('');
  },
  getPostFromDom: function() {
    var username = sessionStorage.getItem('user');
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

  deletePostFromDom: function(event){
    var postId = $(this).closest('div').data('postid');
    console.log(postId);
    chatroom.deletePost(postId);

    chatroom.addAllPostsToDom();
  },

  deletePost: function (postId){
    $.ajax({
      url: chatroom.url + '/' + postId,
      method: 'DELETE',
      success: function(response){
      console.log(response);
      chatroom.getPosts();
  }
})
},

  exitChat: function(){
    var selected = "." + $(this).attr('rel');
    clearInterval(timer);
    $(selected).closest('section').removeClass('inactive');
    $(selected).siblings('section').addClass('inactive');
    }
  }
  $(document).ready(function(){
  //-------------------------------------------------------------->
  chatroom.init();
})
