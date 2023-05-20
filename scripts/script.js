const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");

let entries = 0;

// Function to handle form submission
const handleForm = (e) => {
  event.preventDefault();

  // Create a new div for the entry
  const entryDiv = document.createElement("div");
  entryDiv.className = "single-entry";
  entryDiv.innerHTML = entryTextbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);

  // Clear the entry textbox
  entryTextbox.value = "";

  // Create a button to display the entry
  const displayEntryButton = document.createElement("button");
  displayEntryButton.className = "display-entry-button";
  displayEntryButton.innerText = ++entries;
  entriesNav.appendChild(displayEntryButton);

  // Event listener for displaying the entry when the button is clicked
  displayEntryButton.addEventListener("click", function () {
    const allEntries = document.querySelectorAll(".single-entry");
    allEntries.forEach((element) => (element.style.display = "none"));
    entryDiv.style.display = "block";
  });
};

// Event listener for form submission
entryForm.addEventListener("submit", handleForm);
