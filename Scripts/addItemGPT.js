document.getElementById("addItemForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const link = formData.get("itemLink");
  const image = formData.get("itemImage");
  const section = formData.get("itemSection");

  // Create a new item element
  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.innerHTML = `
      <a href="${link}" target="_blank">Link</a>
      <div class="section">${section}</div>
  `;

  // Add the new item to the "addedItems" container
  const addedItems = document.getElementById("addedItems");
  addedItems.appendChild(newItem);

  // Clear the form
  this.reset();

  // Redirect to the home page
  window.location.href = "index.html";
});
