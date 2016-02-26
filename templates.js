//append to div.chatWindow
var template = {
  header: [
      '<p class="welcome">Welcome,</p><p class="username"><%= username %></p>'
  ],

  post: [
    '<div class="chatPost" data-postid="<%= _id %>">',
      '<h6 class="userName"><%= username %></h6>',
      '<p class="message"><%= message %></p>',
      '<button class="delete">x</button>',
    '</div>'
  ].join("")
};
