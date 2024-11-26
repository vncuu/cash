// Command Search Functionality
document.getElementById('command-search').addEventListener('input', function() {
  let searchQuery = this.value.toLowerCase();
  let commandItems = document.querySelectorAll('.command-item');
  let searchOutput = document.getElementById('search-output');
  
  searchOutput.innerHTML = ''; // Clear previous results

  commandItems.forEach(function(item) {
    let commandName = item.querySelector('h4').textContent.toLowerCase();
    if (commandName.includes(searchQuery)) {
      searchOutput.innerHTML += `<p>${item.querySelector('h4').textContent}</p>`;
    }
  });

  if (searchOutput.innerHTML === '') {
    searchOutput.innerHTML = '<p>No results found.</p>';
  }
});

// Tab Switching Functionality
function showTab(tab) {
  document.querySelectorAll('.tab-content').forEach(function(tabContent) {
    tabContent.classList.add('hidden');
  });

  document.getElementById(tab).classList.remove('hidden');
}
