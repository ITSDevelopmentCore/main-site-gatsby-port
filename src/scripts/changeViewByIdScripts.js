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
