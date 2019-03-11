
function dropdownMenu() {
  let navDropdownEl = document.querySelector('#navDropdown')

  if(navDropdownEl.className === 'nav' ){
    navDropdownEl.className += ' active'
  } else {
    navDropdownEl.className = 'nav '
  }
}

window.onload = function(){
  let dropdownClickEl = document.querySelector('#dropdownClick')
    
  dropdownClickEl.addEventListener('click', dropdownMenu)
}