/*PERCENT BAR FUNCTIONS*/
	var element = document.getElementsByClassName('element');
	var resizer = document.getElementsByClassName('resizer');
	var pricebar = document.getElementById('pricebar');
	var pricebarpct = document.getElementById('display-pct');
	var _this ="";
	var pct, pctLeft;

	for(var i = 0; i < element.length; i++)
	{
	   element[i].addEventListener('mousedown', mySelf, false);
	   resizer[i].addEventListener('mousedown', initResize, false);
	}
	
	function mySelf(e){
		_this = this;
	}
	
	function initResize(e) {
	   window.addEventListener('mousemove', Resize, false);
	   window.addEventListener('mouseup', stopResize, false);
	   console.log("1: ");
	}
	function Resize(e) {
		var sumWidth = 0;
		for(var i = 0; i < element.length; i++)
		{
			
			sumWidth = sumWidth + element[i].clientWidth;
			pct = Math.round((element[i].clientWidth / pricebar.offsetWidth) * 100);
			element[i].getElementsByTagName('span')[0].innerHTML =pct + '%';
		}
          
		var combinedWidth = sumWidth + e.clientX - _this.offsetLeft -_this.offsetWidth;
		    pctLeft = Math.round((sumWidth / pricebar.offsetWidth) * 100);
		
			if(combinedWidth<pricebar.offsetWidth){
				//_this.style.width = (e.clientX - _this.offsetLeft) + 'px';
				pct = Math.round(((e.clientX - _this.offsetLeft) / pricebar.offsetWidth) * 100);
				/*don't let it go to 0% (0=1%)*/
				if(pct>0){
					_this.style.width = pct + '%';
				}
				
			}else{
				if(sumWidth<pricebar.offsetWidth && pctLeft < 100){
					//_this.style.width = _this.offsetWidth + 1 + 'px';
					_this.style.width = Math.round((_this.offsetWidth / pricebar.offsetWidth) * 100) + 1 + '%';
				}
				
			}
	   	 	
	   //element.style.height = (e.clientY - element.offsetTop) + 'px';
       //console.log("3: "+(100-pctLeft));
	   pricebarpct.innerHTML = 100-pctLeft + '%';
	}
	function stopResize(e) {
	    window.removeEventListener('mousemove', Resize, false);
	    window.removeEventListener('mouseup', stopResize, false);
		
	}	
/*END*/