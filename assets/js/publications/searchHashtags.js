const searchInputDropdown = document.getElementById('publicationTrends');
const dropdownOptions = document.querySelectorAll('.dropdown-item');

searchInputDropdown.addEventListener('input', () => {
  const query = searchInputDropdown.value.toLowerCase();
  showOptions();
  const valueExist = !!query.length;

  if (valueExist) {
    dropdownOptions.forEach((el) => {
      const elText = el.textContent.trim().toLowerCase();
      const isIncluded = elText.includes(query);
      if (!isIncluded) {
        el.style.display = 'none';
      }
    });
  }
});

const showOptions = () => {
  dropdownOptions.forEach((el) => {
    el.style.display = 'flex';
  })
}