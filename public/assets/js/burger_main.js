// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    //////////////// create new burger from input form ////////////////
    $(".newForm").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let clientInput = $("#burgerInput").val().trim();
      let newBurger = {
        burger_name: clientInput,
        devoured: 0
        // in DB, devoured is boolean: 0 is false; 1 is true
      };
      console.log(newBurger)
  
      if (clientInput.length < 1) {
        Swal.fire({
          // background: '#fff url("/assets/img/burger-load.gif")',
          text: 'What burger would you like to have?',
          title: "Before Submit...",
          animation: false,
          imageUrl: '/assets/img/burger-load.gif',
          imageWidth: 100,
          imageHeight: 100,
          customClass: 'animated fadeIn'
        })
      } else {
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function () {
          location.reload();
        });
      }
    });
  
    //////////////// update burger condition from noDevour/devoured list to devoured/noDevour list ////////////////
    $(".devour").on("click", function (event) {
      var id = $(this).data("id");
      console.log("id is: ", id);
  
      var newState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function () {
          console.log(newState);
          // Reload the page to get the updated list
          location.reload();
        });
    });
  
  });