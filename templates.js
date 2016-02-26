//append to div.chatWindow
var template = {
  header: [
    '<div class="header">',
      '<p class="welcome">Welcome,</p><p class="username"><%= username =></p>',
    '</div>'
  ].join(""),

  signedIn: [
    '<div class="signIn">',
      '<h6 class="userName"><%= username =></h6>',
      '<p class="message">has signed in!</p>',
      '<button class="delete">x</button>',
    '</div>',
  ].join(""),

  post: [
    '<div class="chatPost">',
      '<h6 class="userName"><%= username =></h6>',
      '<p class="message"><%= message =></p>',
      '<button class="delete">x</button>',
    '</div>'
  ].join("")
};
