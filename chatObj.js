var chatPosts = [];

var enterMsg = {
  message: "has signed in!"
}

var chatroom = {

  url: 'http://tiny-tiny.herokuapp.com/collections/chattyPatty',
  init: function(){
    //init events
    //init styling
  },

  initEvents: function(){
    $('.chatbox').on('click', '.submit', chatroom.submitUsername);
    // $('.enterUsername').on('click', '.send', );
    // $('.enterUsername').on('click', '.delete', );
    // $('.enterUsername').on('click', '.exit', );
  },

  initStyling: function(){
    //add allPosts
    //get posts
  },


  submitUsername: function(event){
    event.preventDefault();
    var newUser = chatroom.getUsernameFromDom(); //put content in obj
  },

  getUsernameFromDom: function(){
    var username = sessionStorage.getItem('user');
    var message = enterMsg.message
    return {
      username: username,
      message: message
    }
  },

  sendPost: function(){

  },

  getPostFromDom: function (){

  },

  deletePostFromDom: function(){

  },

  addAllPosts: function(){

  },

  getPosts: function(){

  },

  addPost: function(){

  },

  deletePost: function(){

  },

  exitChat: function(){

  }

}
