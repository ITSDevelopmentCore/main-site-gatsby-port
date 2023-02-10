export function changeThemeSwitcherState(checked) {
    if (checked)
        document.getElementById('themeSwitcher').checked = true;
    else
        document.getElementById('themeSwitcher').checked = false;

}

export function hideDarkThemeModal() {
    document.getElementById('modal-dark-theme').classList.remove('fixed');
    document.getElementById('modal-dark-theme').classList.add('hidden');
}

export function showDarkThemeModal() {
    document.getElementById('modal-dark-theme').classList.add('fixed');
    document.getElementById('modal-dark-theme').classList.remove('hidden');
}

export function showModalAccepted() {
    document.getElementById('feedback-request-accepted-modal').classList.add('block');
    document.getElementById('feedback-request-accepted-modal').classList.remove('hidden');
}

export function hideModalAccepted() {
    document.getElementById('feedback-request-accepted-modal').classList.remove('block');
    document.getElementById('feedback-request-accepted-modal').classList.add('hidden');
}

export function showMobileMenu()
{
    document.getElementById('dropdownMenuMobile').classList.remove('hidden');
    document.getElementById('dropdownMenuMobile').classList.add('block');
}

export function hideMobileMenu()
{
    document.getElementById('dropdownMenuMobile').classList.add('hidden');
    document.getElementById('dropdownMenuMobile').classList.remove('block');
}

export function readMore()
{
  var dots = document.getElementById('dots');
  var more = document.getElementById('more');

  if(dots.style.display === "none"){
    dots.style.display="inline";
    more.style.display = "none";
  }else{
    dots.style.display="none";
    more.style.display = "inline";
  }
}
