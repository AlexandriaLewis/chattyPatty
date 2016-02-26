//calvin's ajax example
// https://github.com/TIY-Charleston-Front-End-February2016/demos/commit/5389c7bf2ef128f742b5e027ed5fa35adbb6f52e

//hank's repo he's so nice
// https://github.com/hankgielarowski/chatroom/blob/master/chatroom/main.js

var chatPosts = [];

var enterMsg = {
  message: 'has signed in!'
}

var chatroom = {

  url: 'http://tiny-tiny.herokuapp.com/collections/chattyPatty',
  init: function(){
    //init events
    //init styling
  },

  initEvents: function(){
    $('.chatbox').on('click', '.submit', chatroom.submitUsername);
    $('.enterUsername').on('click', '.send', );
    $('.chatWindow').on('click', '.delete', chatroom. );
    // $('.enterUsername').on('click', '.exit', );
  },

  initStyling: function(){
    //add allPosts
    //get posts
  },


  submitUsername: function(event){
    event.preventDefault();
    var newUser = chatroom.getUsernameFromDom(); //put content in obj
    addPost(newUser);
    addAllPosts(newUser);
  },

  getUsernameFromDom: function(){
    var username = sessionStorage.getItem('user');
    var message = enterMsg.message
    return {
      username: username,
      message: message
    }
  },

  sendPost: function(event){
    event.preventDefault();
    var newPost = chatroom.getPostFromDom();
      // console.log(newPost);
    chatroom.addPost(newPost);
    $('input').val('');
  },

  getPostFromDom: function (){

  },

  deletePostFromDom: function(){

  },

  addAllPosts: function(){

  },

  getPosts: function(){

  },

  addPost: function(newPost){
    chatPosts.push(newPost);
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

  deletePost: function deletePost (idx){
    $.ajax({
      url: chatroom.url + idx,
      method: 'DELETE',
      success: function(response){
      console.log(response);
      getUser.getPosts());
  }
})
},
  exitChat: function(){

  }
}
