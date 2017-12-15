window.onload = function() {
	document.getElementById('button').onclick = function() {
		localStorage.setItem('name value',document.getElementById('full_name').value);
		localStorage.setItem('email value',document.getElementById('email').value);
		localStorage.setItem('password value',document.getElementById('password').value);
		localStorage.setItem('pole value',document.getElementById('role').value);
	}
	
}