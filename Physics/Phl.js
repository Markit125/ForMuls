var visible = false;
function ari(){
	if(!visible){
		var th = document.getElementById('Themes');
		//th.innerHTML += '<ol><li><a href = Average Values.html">Средние величины</a></li></ol>';
		th.insertAdjacentHTML('afterend', '<ol id = "mas"><li><a href = "AtomicTheory.html">Теория атома</a></li></ol>');
		visible = true;
	}
	else{
		var mas = document.getElementById('mas');
		mas.innerHTML = '';
		visible = false;
	}
}