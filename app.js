//Prevent from seeing the spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1. Hide the spoilers
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")
//3. When the button is pressed, show the spoiler
$(".spoiler button").click(function(){
  $(this).prev().show();
  $(this).remove();
});
