$(document).ready(function() {

  $("#no-fav").removeClass("error-hide")

  $(function() {
    const $created = $("#created1")

    $created.on("click", function(event) {
      $("#created2").removeClass("hide")
      $("#contributed2").addClass("hide")
      $("#favourites2").addClass("hide")
      $("#created1").addClass("sub-nav-active")
      $("#favourites1").removeClass("sub-nav-active")
      $("#contributed1").removeClass("sub-nav-active")
      $("#no-contribute").addClass("error-hide")
      $("#no-fav").removeClass("error-hide")
    })
  })

  $(function() {
    const $fav = $("#favourites1")

    $fav.on("click", function(event) {
      $("#favourites2").removeClass("hide")
      $("#contributed2").addClass("hide")
      $("#created2").addClass("hide")
      $("#contributed1").removeClass("sub-nav-active")
      $("#created1").removeClass("sub-nav-active")
      $("#favourites1").addClass("sub-nav-active")
      $("#no-contribute").addClass("error-hide")
      $("#no-fav").removeClass("error-hide")
    })
  })

  $(function() {
    const $contribute = $("#contributed1")

    $contribute.on("click", function(event) {
      $("#contributed2").removeClass("hide")
      $("#favourites2").addClass("hide")
      $("#created2").addClass("hide")
      $("#contributed1").addClass("sub-nav-active")
      $("#favourites1").removeClass("sub-nav-active")
      $("#created1").removeClass("sub-nav-active")
      $("#no-fav").addClass("error-hide")
      $("#no-contribute").removeClass("error-hide")
    })
  })


  $(function () {
    const $heart = $(".heart-div")

    $heart.on("click", function(event){
      console.log("banana")
    })
  })

  // $.get(`/api/users/${mapId}/fav`, data => {
  //   console.log("DATA", data)
  //   if (data.val) $('.heart-div').addClass('fav-icon-like');
  //   else $('.heart-div').addClass('fav-icon-not');
  // });
})
