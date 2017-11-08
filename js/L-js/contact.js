// $(function(){
// 	$('.contact input').focus(function(){
// 		$(this).css({border:"3px solid #e82281"})
// 	})
// 	$('.contact input').blur(function(){
// 		$(this).css({border:"3px solid #ffc9e3"})
// 	})
// 	$('.contact #three').focus(function(){
// 		$(this).css({border:"3px solid #e82281"})
// 	})
// 	$('.contact #three').blur(function(){
// 		$(this).css({border:"3px solid #ffc9e3"})
// 	})
// })



window.onload=function(){

	// 表单焦点事件
	var input=document.getElementsByClassName("int");
	for(var i=0;i<input.length;i++){
		console.log(input[i])
		input[i].onfocus=function(){
			this.style.border="3px solid #e70f77";
		}
		input[i].onblur=function(){
			this.style.border="3px solid #ffc9e3";
		}
	}



}