const inventory = [];

export function addItem(item) {
  inventory.push(item);
  console.log(`Item "${item}" added to inventory.`);
}

export function removeItem(item) {
  const index = inventory.indexOf(item);
  if (index > -1) {
    inventory.splice(index, 1);
    console.log(`Item "${item}" removed from inventory.`);
  } else {
    console.log(`Item "${item}" not found in inventory.`);
  }
}

export function listItems() {
  console.log("Current Inventory:", inventory.length ? inventory : "Empty");
}
