var exp2 = false;
function exph2(){
	if(!exp2){
		var th = document.getElementById('Exp2');
		th.insertAdjacentHTML('afterend', "<div id = 'exampleP2'><h4>Энергия связи ядра изотопа литий-8:</h4><p class = 'p'>В предыдущем примере мы нашли Δm&nbsp;= 0,04350704&nbsp;а.е.м.</p><p class = 'p'>E<sub>св</sub>&nbsp;= 0,04350704&nbsp;а.е.м.·931,5&nbsp;МэВ/а.е.м.&nbsp;= <b>40,527&nbsp;МэВ</b>&nbsp;= <nobr>40,527&nbsp;МэВ·1,6·10<sup>-19</sup>&nbsp;Дж/МэВ&nbsp;= <b>6,4843·10<sup>-18</sup>&nbsp;Дж</b></nobr></p></div>");
		exp2 = true;
	}
	else{
		var masp2 = document.getElementById('exampleP2');
		masp2.innerHTML = '';
		exp2 = false;
	}
}