var chatPosts = [
  {
    username: "welcomeBot",
    message: "Welcome to the chat!"
  }
];

var chatroom = {

  url: 'http://tiny-tiny.herokuapp.com/collections/chattyPatty',
  init: function(){
    //init events
    //init styling
  },

  initEvents: function(){
    $('.chatbox').on('click', '.submit', chatroom.submitUsername);
    // $('.enterUsername').on('click', '.delete', );
    // $('.enterUsername').on('click', '.send', );
    // $('.enterUsername').on('click', '.exit', );
  },

  initStyling: function(){
    //add allPosts
    //get posts
  },


  submitUsername: function(event){
    event.preventDefault();
    var newUser = chatroom.getUsernameFromDom();
  },

  getUsernameFromDom: function(){
    var username = sessionStorage.getItem('user');
    return {
      username: username
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
