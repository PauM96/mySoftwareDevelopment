document.getElementById("addItemForm").addEventListener("submit", function(event) {

  event.preventDefault();
  const formData = new FormData(this);

  const newItem = document.createElement("a");
  newItem.href = formData.get("itemLink");
  
  const img = document.createElement("img");
  img.src = formData.get("itemImage");

  const selectedSection = formData.get("itemSection");
  
  const itemsSection = document.getElementById(`${selectedSection}itemSection`);
  itemsSection.appendChild(newItem);

  this.reset();
  window.location.href = "index.html";
});