const searchInputDropdown = document.getElementById('search-input-dropdown');
const dropdownOptions = document.querySelectorAll('.input-group-dropdown-item');

searchInputDropdown.addEventListener('input', () => {
  const filter = searchInputDropdown.value.toLowerCase();
  showOptions();
  const valueExist = !!filter.length;

  if (valueExist) {
    dropdownOptions.forEach((el) => {
      const elText = el.textContent.trim().toLowerCase();
      const isIncluded = elText.includes(filter);
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



const data2 = {
    columns: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
    rows: [
      ['Tiger Nixon', 'System Architect', '	Edinburgh', 61, '2011/04/25', '$320,800'],
      ['Sonya Frost', 'Software Engineer', 'Edinburgh', 23, '2008/12/13', '$103,600'],
      ['Jena Gaines', 'Office Manager', 'London', 30, '2008/12/19', '$90,560'],
      ['Quinn Flynn', 'Support Lead', 'Edinburgh', 22, '2013/03/03', '$342,000'],
      ['Charde Marshall', 'Regional Director', 'San Francisco', 36, '2008/10/16', '$470,600'],
      ['Haley Kennedy', 'Senior Marketing Designer', 'London', 43, '2012/12/18', '$313,500'],
      ['Tatyana Fitzpatrick', 'Regional Director', 'London', 19, '2010/03/17', '$385,750'],
      ['Michael Silva', 'Marketing Designer', 'London', 66, '2012/11/27', '$198,500'],
      ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', 64, '2010/06/09', '$725,000'],
      ['Gloria Little', 'Systems Administrator', 'New York', 59, '2009/04/10', '$237,500'],
    ],
  };
  
  const instance = new mdb.Datatable(document.getElementById('datatable'), data2)
  
  document.getElementById('datatable-search-input').addEventListener('input', (e) => {
    instance.input-group(e.target.value);
  });