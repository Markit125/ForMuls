var exp1 = false;
function exph1(){
	if(!exp1){
		var th = document.getElementById('Exp1');
		th.insertAdjacentHTML('afterend', "<div id = 'exampleP1'><table><tr><td class = 'td'><h4>Дефект масс изотопа литий-8:</h4><p class = 'p'>m<sub>атома</sub>&nbsp;= 8,02248736&nbsp;а.е.м.(из табличных данных)</p><p class = 'p'>Δm = 4·1,00728 а.е.м.&nbsp;+ <nobr>(8-4)·1,00867&nbsp;а.е.м. </nobr>- 8,02248736&nbsp;а.е.м.&nbsp;+ 4·0,0005486&nbsp;а.е.м.&nbsp;= <b>0,04350704&nbsp;а.е.м.</b></td><td class = 'td'><img class = 'form' height = '200rem' src = 'Images/Litium8.png' alt = 'Литий'></td></tr></table></div>");
		exp1 = true;
	}
	else{
		var masp1 = document.getElementById('exampleP1');
		masp1.innerHTML = '';
		exp1 = false;
	}
}