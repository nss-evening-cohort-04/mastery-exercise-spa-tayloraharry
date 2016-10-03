var CarLot = (function(background) {
  background.resetBorderThickness = function() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
       cards[i].classList.remove("selected");
     };
  };
  background.addBorderThickness = function(selected) {
    background.resetBorderThickness();
    selected.classList.add("selected");
  };
  background.editText = function() {
    var carListing = document.getElementById("user-input").value;
    var selectedCard = document.getElementsByClassName("selected")
    if (selectedCard.length > 0) {
      var description = selectedCard[0].getElementsByTagName("p");
      description[0].innerHTML = carListing;
    }
  };
  background.clearText = function () {
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();
  }
  return background
})(CarLot || {});