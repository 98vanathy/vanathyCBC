function myFunction()
			{
				let a=document.getElementById("unit").value;
				if(a>0 && a<=180)
				{
						if(a<=30)
					{
						document.getElementById("demo").innerHTML=Number(a)*7.85+"rs";
					}
					else if(a<=60)
					{
						document.getElementById("demo").innerHTML=235.50+(Number(a)-30)*7.85+"rs";
					}
					else if(a<=90)
					{
						document.getElementById("demo").innerHTML=471+(Number(a)-60)*10+"rs";
					}
					else if(a<=120)
					{
						document.getElementById("demo").innerHTML=771+(Number(a)-90)*27.75+"rs";
					}
					else
					{
						document.getElementById("demo").innerHTML=1603.50+(Number(a)-120)*32+480+"rs";
					}
				}
				else{
					document.getElementById("demo").innerHTML="enter above 0 and below 180";
				}
				
			}