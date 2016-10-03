var CarLot = (function(eventHandlers) {
  eventHandlers.buildEvents = function() {
    var carCard = document.getElementsByClassName("card");
    for (var i = 0; i < carCard.length; i++) {
      carCard[i].addEventListener("click", function (e){
        var selected = e.currentTarget;
        eventHandlers.addBorderThickness(selected);
        eventHandlers.clearText();
      });
    };
    var enteredText = document.getElementById("user-input");
    enteredText.addEventListener("keyup", function(){
      CarLot.editText();
    });
  };
  return eventHandlers
}(CarLot || {}));