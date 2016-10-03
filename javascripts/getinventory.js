var CarLot = (function () {
  var inventory = [];
  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("failed", executeOnFail);
      inventoryLoader.addEventListener("load", executeOnLoad);
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      function executeOnFail() {
          alert("Error loading page")
      };
      function executeOnLoad() {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);
      };
    },
  };
})(CarLot || {});