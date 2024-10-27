var GVO;

onDOMLoad(() => { 	new t1inter(); });

class t1inter {
	
	constructor() {
		GVO = this;
		// this.tce = getAnswerClickE();
		document.body.addEventListener('click', GVO.bc10);
		
	}
	
	bc20() { location.reload(); }
	
	bc10(evin) {
		
		document.body.removeEventListener('click', GVO.bc10);
		
		byid('estatement').style.display = 'none';
		byid('equestion' ).style.display = 'block';
		
		qsa("[data-isqname='1']").forEach((e) => {
			e.style.visibility = 'visible';
		});
		
		qsa("[data-isqp='1'").forEach((e) => {
			e.style.visibility = 'visible';
			e.addEventListener('click', GVO.aclick);
		});
		
		byid('eclsc').style.visibility = 'hidden';
	}
	
	async aclick() {
		
		const e = this;
		
		await feedback(e.dataset.a, e.dataset.iscor === '1');
		
		if (FMODE === 'feedImm') setTimeout(() => {		document.body.addEventListener('click', GVO.bc20);	}, 10);
		else { GVO.bc20(); return; }

		byid('esrepeat').style.visibility = 'visible';
		let color = 'red';
		if (e.dataset.iscor === '1') color = 'green';
		e.style.backgroundColor = color;
		
		byid('ebagain').style.visibility = 'visible';
		

	}
}
