function populatePage (inventory) {
  var carContainer = document.getElementById("car-container")
  var buildInventory;

  buildInventoryString = "";
  for (var i = 0; i < inventory.length; i++) {

    if (i % 3 === 0 ) {
      console.log("i",i );
      buildInventoryString += `<div class="row">`
    }

    buildInventoryString += `<div id="card"class="col-md-4 card" style="border: 2px solid ${inventory[i].color};">`;
    buildInventoryString += `<h2>${inventory[i].make}</h2>`;
    buildInventoryString += `<h2>${inventory[i].model}</h2>`;
    buildInventoryString += `<h4>Year: ${inventory[i].year}</h4>`;
    buildInventoryString += `<h5>Price: $${inventory[i].price}</h5>`;
    buildInventoryString += `<p>${inventory[i].description}</p>`;
    buildInventoryString += `</div>`;

    if ( (i+1) % 3 === 0){
      buildInventoryString += `</div>`;
    };

  };

  carContainer.innerHTML += buildInventoryString;
  CarLot.buildEvents();
};
CarLot.loadInventory(buildDomOutput);

function buildDomOutput() {
  var carLotInventory = CarLot.getInventory();
  populatePage(carLotInventory)
};



