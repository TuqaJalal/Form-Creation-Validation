async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the HTML elements--
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the Loading Message
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    // loop and append---
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.append(userList);
  } catch {
    // Clear the Loading Message
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});
