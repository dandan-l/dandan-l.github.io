$(document).ready(function () {
  //Js to highlight the location of the current page
  //Code credit: https://stackoverflow.com/users/2854760/raj, https://stackoverflow.com/users/4635388/rohan-khude, https://stackoverflow.com/questions/4626431/highlight-the-navigation-menu-for-the-current-page
  // this will get the full URL at the address bar
  var url = window.location.href;
  var hash = window.location.hash;

  console.log(url);

  // passes on every "a" tag
  $(".nav-web a").each(function () {
    // console.log(this.href);
    // checks if its the same on the address bar
    if (url == this.href) {
      $(this).closest("li").addClass("active");
      //for making parent of submenu active
      $(this).closest("li").parent().parent().addClass("active");
    }

    //checks if it's currently on the project page
    if (
      url == "https://dandan-l.github.io/closeli.html" ||
      url == "https://dandan-l.github.io/peerbots.html"
    ) {
      $(".work-lnk").closest("li").addClass("active");
      //for making parent of submenu active
      $(".work-lnk").closest("li").parent().parent().addClass("active");
    }
  });
});
