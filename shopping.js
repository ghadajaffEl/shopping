
var somme=new Array(0,0,0,0,0,0);
function myFunction (x)
{
	var src=["boss.jpg","dg.jpg","guess.jpg","yves.jpg","mdm.jpg","saint.jpg"];
	var h=["BOSS THE SCENT FOR HER EAU DE TOILETTE","DOLCE GABBANA THE ONE EAU DE TOILETTE","GUESS SEDUCTIVE FEMME EAU DE TOILETTE","YVES SAINT LAURENT BLACK OPIUM EAU DE TOILETTE","MADEMOISELLE AZZARO EAU DE TOILETTE","YVES SAINT LAURENT MON PARIS EAU DE TOILETTE"];
	var price=[159.100,185.630,76,178,98,138];

	var itm=document.getElementById("article");
	var clone = itm.cloneNode(true);
	clone.style.visibility="visible";
	
	var title=clone.getElementsByTagName("h1");
	title[0].innerHTML=h[x];

	var image=clone.getElementsByTagName("img");
	image[0].src=src[x];


	var prg=clone.getElementsByTagName("P");
	prg[0].innerHTML=price[x];

	var input=clone.getElementsByTagName("input");
	var div=clone.querySelector("#nbr_article");
	var plus=document.createElement("Button");
	var textp=document.createTextNode("+");
	plus.appendChild(textp);
	var nbr=document.createElement("input");
	nbr.value="0";
	nbr.setAttribute("id","count");
	
    plus.addEventListener("click",function()
    {
    	nbr.value++;
    	var n=nbr.value;
		prg[1].innerHTML=n*price[x];
    	somme[x]=n*price[x];
	var a =sum(somme);
	document.getElementById("sum").innerHTML=a.toString();

    	
    })




    var minus=document.createElement("Button");
    minus.addEventListener("click",function()
    {	 
    	var n=nbr.value;
    	if(n>0)
    	{
    	nbr.value=n-1;
    	prg[1].innerHTML=(n-1)*price[x];
    	somme[x]=(n-1)*price[x];
    	var a =sum(somme);
		document.getElementById("sum").innerHTML=a.toString();

    }
    	
    });
    var textm=document.createTextNode("-");
	minus.appendChild(textm);
	div.appendChild(plus);
	div.appendChild(nbr);
	div.appendChild(minus);
	clone.appendChild(div);
	
	/*remove article*/
	var close=document.createElement("Button");
	close.setAttribute("id","return");
	var textc=document.createTextNode("x");
	close.appendChild(textc);
	clone.appendChild(close);
    close.addEventListener("click",function(){
    clone.parentNode.removeChild(clone);
    window.location = "#container";


    });
	prg[2].innerHTML="Bergamote Calabria fait partie de la collection Aqua Allegoria de Guerlain, première collection d’eaux fraîches de la parfumerie créée en 1999.Se promener en Calabre dans les jardins de bergamotiers. Récolter les fruits gorgés de soleil. Bergamote Calabria est une essence vive et ensoleillée.Votre fragrance dans l’emblématique flacon Abeilles Blanches.";
	document.body.appendChild(clone);

		
}
	
function sum(x){
	var s=0;
	for(i=0;i<x.length;i++)
	{
		s+=x[i];
	}
	return s;
}

