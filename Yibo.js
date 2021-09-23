
			function addLi(){
				var elem_li = document.createElement('li'); //create a li element
				elem_li.innerHTML='lorem ipsum';
				document.getElementById("ul1").appendChild(elem_li);
			}
			
			window.onload=function (){
				 var arr=['a','e','i','o','u','I','A','E','O','U'];
				 var arr1=['b','B','c','C','d','D','f','F','g','G','h','H','j','J','k','K','l','L','m','M','n','N','p','P','q','Q','r','R','s','S','t','T','v','V','w','W','x','X','y','Y','z','Z'];
				 var spanEle=document.getElementById("p1").children;
				 var slength=spanEle.length;
				 var fResult=' ';
				 var fResult2=new Array(0);
				 for(var i=0;i<slength;i++){
					 for(var j=0;j<spanEle[i].innerHTML.length;j++){
						 if(arr.includes(spanEle[i].innerHTML[j])){
							 fResult=fResult+spanEle[i].innerHTML[j]
						 }
						 
						 if(arr1.includes(spanEle[i].innerHTML[j])){
							 fResult=fResult+'#s'
						 }
						 if((spanEle[i].innerHTML[j])==','){
						 	 fResult=fResult+','
						 }
					 }
					 fResult2.push(fResult);
					 fResult=' ';
					   spanEle[i].innerHTML=fResult2[i];
				 }
			};
