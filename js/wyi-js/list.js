window.onload=function(){
	var imgbox=document.querySelectorAll('.imgbox');
	var left=document.querySelectorAll('.imgbox .left');
	var angel=document.querySelectorAll('.angel');
	var mask=document.querySelectorAll('.mask');
	var square=document.querySelectorAll('.square');
	var line=document.querySelectorAll('.line');
	var little_line=document.querySelectorAll('.little-line');
	console.log(mask);
	console.log(square);
	console.log(angel);
	for(let i=0;i<imgbox.length;i++){
		imgbox[i].onmouseenter=function(){
			for(var j=0;j<imgbox.length;j++){
				angel[j].style.display="block";
				square[j].style.display="none";
				left[j].style.cssText='background:rgb(153,153,153);width:160px';	
				mask[j].style.cssText='border-bottom: 40px solid rgb(153,153,153);';
				line[j].style.cssText='left:40px;';
				little_line[j].style.cssText='left:100px';	
			}
			square[i ].style.display="block";
			left[i].style.cssText='background:rgb(252,24,115);position:absolute;left:-50px;top:0;width:210px';	
			mask[i].style.cssText='border-bottom: 40px solid rgb(252,24,115);';
			line[i].style.cssText='left:65px;';
			little_line[i].style.cssText='left:125px';
			angel[i].style.display="none";				
		}
		imgbox[i].onmouseleave=function(){
			angel[i].style.display="block";
			square[i].style.display="none";
			left[i].style.cssText='background:rgb(153,153,153);width:160px';	
			mask[i].style.cssText='border-bottom: 40px solid rgb(153,153,153);';
			line[i].style.cssText='left:40px;';
			little_line[i].style.cssText='left:100px';	
		}
	}	
}