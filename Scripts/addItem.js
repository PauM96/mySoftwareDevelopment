document.getElementById("addItemForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values from the form
  const link = document.getElementById("itemLink").value;
  const section = document.getElementById("itemSection").value;

  // Create a new item element
  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.innerHTML = `
      <a href="${link}" target="_blank">Link</a>
      <div class="section">${section}</div>
  `;

  // Add the new item to the "addedItems" container
  document.getElementById("addedItems").appendChild(newItem);

  // Clear the form
  document.getElementById("addItemForm").reset();
});