//definicion del mapa para que en el codigo aparezca

let myMap = L.map('myMap').setView([41.50184,2.10471], 15);
 L.tileLayer('https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors. This map and website was made by Fausto Salazar',
	maxZoom: 20,
	tileSize: 512,
	zoomOffset: -1,
	subdomains: 'abcd',
	accessToken: 'Mc8bK9ZTgxSCTju3fL4q2WnvlBldLlI5CBSbKYQr6epQle3wlCWfetUGuH8QwDyn'
}).addTo(myMap);

//marcadores y popups en el mapa. Para los marcadores ir a la web de instamaps y copiar la
//long y latitud de los puntos que pones, se pondran en el lugar exacto en el mapa de leaflet

let marker = L.marker([41.5005648, 2.112622]).addTo(myMap);
let marker2 = L.marker([41.5006348, 2.111622]).addTo(myMap);
let marker3 = L.marker([41.5008348, 2.111622]).addTo(myMap);
let marker4 = L.marker([41.5002042, 2.111922]).addTo(myMap);
let marker5 = L.marker([41.49776, 2.10885]).addTo(myMap);
let marker6 = L.marker([41.4975394,2.1089133]).addTo(myMap);
let marker7 = L.marker([41.4978589,2.1089265]).addTo(myMap);
let marker8 = L.marker([41.4977594,2.1087265]).addTo(myMap);
let marker9 = L.marker([41.4977032,2.108454]).addTo(myMap);
let marker10 = L.marker([41.5006409,2.1096092]).addTo(myMap);
let marker11 = L.marker([41.5007009,2.1094092]).addTo(myMap);
let marker12 = L.marker([41.501856,2.103633]).addTo(myMap);
let marker13 = L.marker([41.501856,2.103833]).addTo(myMap);
let marker14 = L.marker([41.501417,2.1030887]).addTo(myMap);
let marker15 = L.marker([41.50184,2.10371]).addTo(myMap);
let marker16 = L.marker([41.5039983,2.1003015]).addTo(myMap);
let marker17 = L.marker([41.5038913,2.10062]).addTo(myMap);
let marker18 = L.marker([41.5055253,2.1043923]).addTo(myMap);
let marker19 = L.marker([41.5055253,2.1045923]).addTo(myMap);
let marker20 = L.marker([41.5025828,2.1067232]).addTo(myMap);
let marker21 = L.marker([41.49756,2.10883]).addTo(myMap);
let marker23 = L.marker([41.49771,2.10907]).addTo(myMap);
let marker24 = L.marker([41.502816,2.107471]).addTo(myMap);
let marker25 = L.marker([41.50555,2.10309]).addTo(myMap);
let marker26 = L.marker([41.50080,2.10935]).addTo(myMap);
let marker27 = L.marker([41.50092,2.10929]).addTo(myMap);
let marker28 = L.marker([41.50063,2.10968]).addTo(myMap);
let marker30 = L.marker([41.50074,2.11153]).addTo(myMap);
let marker31 = L.marker([41.50339,2.10747]).addTo(myMap);
let marker32 = L.marker([41.50335,2.10764]).addTo(myMap);
let marker33 = L.marker([41.50130, 2.10323]).addTo(myMap);

marker.bindPopup("<font size=4><b>Fausto Salazar</b></font><br><b>Institute/Faculty:</b> Building Q, Engineering faculty.<br><b>Proyects name and website:</b><a href ='https://siai.cvc.uab.es/map/mapa.html'> Map people involved in citizen science UAB.</a><br><b>About the researcher:</b><a href = 'https://siai.cvc.uab.es/map/mapa.html'> Here</a><br>")
marker2.bindPopup("<font size=4><b>Fernando Vilari??o</b></font><br><b>Institute/Faculty:</b> CVC (Centre de Visi?? per Computaci??).<br> <b>Proyects name and website:</b> <a href ='http:librarylivinglab.cvc.uab.cat'>Library living lab Sant Cugat</a> and <a href ='http://www.planttes.com/?page_id=43&lang=es'>Planttes</a>.<br><b>About the researcher:</b><a href = 'http://vi.cvc.uab.es/fernando-vilarino/'> Here</a><br><img src='./images/LOGO_LLL.png'> <img src='./images/BCT_planttesPia480x270.jpg'style='width:100px;height:80px;'>")
marker3.bindPopup("<font size=4><b>Dimosthenis Karatzas</b></font><br><b>Institute/Faculty:</b> CVC(Centre de Visi?? per Computaci??).<br> <b>Proyects name and website:</b> <a href ='http:librarylivinglab.cvc.uab.cat'>Library living lab Sant Cugat</a>.<br><b>About the researcher:</b><a href = 'http://www.cvc.uab.es/~dimos/'> Here</a><br><img src='./images/LOGO_LLL.png'>")
marker4.bindPopup("<font size=4><b>Xavier Gabarrell</b></font><br><b>Institute/Faculty:</b> Building Q, Engineering faculty.<br><b>Proyects name and website:</b><a href ='https://www.uab.cat/web/smart-er-project-1345836766934.html'>SMART-ER project(ECIU university)</a><br><b>About the researcher:</b><a href = 'https://ictaweb.uab.cat/personal_detail.php?id=52'> Here</a><br><img src='./images/ECIUSMART.jpg'style='width:200px;height:100px;'>")
marker5.bindPopup("<font size=4><b>Susana Toboso</b></font><br><b>Institute/Faculty:</b> Building Q, Engineering faculty.<br><b>Proyects name and website:</b> <a href ='https://urbag.eu/about/'>URBAG Integrated System Analysis of Urban Vegetation and Agriculture </a> and <a href ='http://dx.doi.org/10.1088/2515-7620/abffa5'> The Water-Energy-Food Nexus. Implementation on rooftops</a>.<br><b>About the researcher:</b><a href = 'https://ictaweb.uab.cat/personal_detail.php?id=4096'> Here</a><br><img src='./images/URBAG.gif'style='width:150px;height:100px;'>")
marker6.bindPopup("<font size=4><b>Victoria Reyes</b></font><br><b>Institute/Faculty:</b> Building Z, ICTA (Institut de Ci??ncia i Tecnologia Ambientals).<br> <b>Proyects name and website:</b><a href ='https://conecte.es/index.php/es/'>CONECT-e</a><br><b>About the researcher:</b><a href = 'https://ictaweb.uab.cat/personal_detail.php?id=5'> Here</a><br><img src='./images/concibe.png'style='width:150px;height:100px;'>")
marker7.bindPopup("<font size=4><b>Petra Johanna Benyei Peco</b></font><br><b>Institute/Faculty:</b>Building Z, ICTA (Institut de Ci??ncia i Tecnologia Ambientals).<br><b>Proyects name and website:</b><a href=' https://conecte.es/index.php/es/'>CONECT-e</a> and <a href='https://licci.eu/welcome-to-opentek-the-citizen-science-platform/'> OpenTEK</a><br><b>About the researcher:</b><a href = 'https://portalrecerca.uab.cat/en/persons/petra-johanna-benyei-peco-7'> Here</a><br><img src='./images/concibe.png'style='width:150px;height:100px;'><img src='./images/OPEN.jpg'style='width:150px;height:100px;'> ")
marker8.bindPopup("<font size=4><b>Jordina Belmonte</b></font><br><b>Institute/Faculty:</b> Building Z, ICTA (Institut de Ci??ncia i Tecnologia Ambientals).<br><b>Proyects name and website:</b><a href ='http://www.planttes.com/?page_id=43&lang=es'>Planttes</a><br><b>About the researcher:</b><a href = 'https://ictaweb.uab.cat/personal_detail.php?id=67&setLanguage=es'> Here</a><br><img src='./images/BCT_planttesPia480x270.jpg'style='width:100px;height:80px;'>")
marker9.bindPopup("<font size=4><b>Cristina Madrid</b></font><br><b>Institute/Faculty:</b> Building Z, ICTA (Institut de Ci??ncia i Tecnologia Ambientals).<br><b>Proyects name and website:</b><a href ='https://urbag.eu/about/'> URBAG Integrated System Analysis of Urban Vegetation and Agriculture. </a>, <a href ='http://sostenipra.ecotech.cat/login.php?referrer=settings'> Sostenipra </a>, <a href ='https://www.chistera.eu/'> CHIST-ERA</a> and <a href ='https://magic-nexus.eu/'> MAGIC - NEXUS</a>  <br><b>About the researcher:</b><a href = 'https://ictaweb.uab.cat/personal_detail.php?id=63&setLanguage=es'> Here</a><br><img src='./images/URBAG.gif'style='width:150px;height:100px;'><img src='./images/MAGIC.png'>")
marker10.bindPopup("<font size=4><b>Bernat Claramunt</b></font><br><b>Institute/Faculty:</b> Building C, CREAF (Centre de Recerca Ecol??gica i Aplicacions Forestals).<br><b>Proyects name and website:</b><a href='https://www.inaturalist.org/'>iNaturalist</a>, <a href='https://earthwatch.org/'>earthwatch</a>, <a href='https://natusfera.gbif.es/'> Natusfera</a> and COST Bioblitz. <br><b>About the researcher:</b><a href = 'http://www.creaf.cat/ca/personal/bernat-claramunt-lopez'> Here</a><br><img src='./images/inat.png'style='width:100px;height:80px'><img src='./images/earth.png'style='width:100px;height:80px'><img src='./images/natur.png'style='width:100px;height:80px'>")
marker11.bindPopup("<font size=4><b>Joan Pino</b></font><br><b>Institute/Faculty:</b> Building C, CREAF (Centre de Recerca Ecol??gica i Aplicacions Forestals).<br><b>Proyects name and website:</b><a href='https://gt20.eu/'>GroundTruth</a><br><b>About the researcher:</b><a href = 'http://www.creaf.cat/ca/personal/joan-pino-vilalta'> Here</a><br><img src='./images/Ground.jpg'style='width:150px;height:100px;'>")
marker12.bindPopup("<font size=4><b>Mireia Gal??</b></font><br><b>Institute/Faculty:</b> Building RR, Pla??a C??vica.<br><b>Proyects name and website:</b><a href='https://www.eciu.org/'>ECIU university</a><br><b>About the researcher:</b><a href = 'https://siastd.uab.es/pcde/fitxa_persona.jsf;jsessionid=-wMLPNXPZF4CpeMVwFtzRENBxiKYvlukLEhXXARR6kgGvgSttzp_!-938636730?id=777a9c484d640536&entitat=2991&colectiu=PAS'> Here</a><br><img src='./images/ECIU_Logo.png'style='width:100px;height:100px;'>")
marker13.bindPopup("<font size=4><b>Sofia Mojica Baquero</b></font><br><b>Institute/Faculty:</b> Building RR, Pla??a C??vica.<br><b>Proyects name and website:</b><a href='https://www.eciu.org/'>ECIU university</a> and <a href='https://incentive-project.eu/'>INCENTIVE</a><br><b>About the researcher:</b><a href = 'https://siastdt.uab.es/pcde/fitxa_persona.jsf;jsessionid=HzzkNWoOUDwMpQk2SIjptLoBgPAyPMVjyyroaG_DgybxDnOKaari!818199058?id=aa42e098a19cfcdb&entitat=2992&colectiu=PAS'> Here</a><br><img src='./images/ECIU_Logo.png'style='width:100px;height:100px;'><img src='./images/INCEN.jpg'style='width:150px;height:100px;'>")
marker14.bindPopup("<font size=4><b>Oscar Hern??ndez</b></font><br><b>Institute/Faculty:</b> Building N, Pla??a C??vica.<br><b>Proyects name and website:</b><a href='https://www.uab.cat/web/coneix-la-facultat/-1345808201215.html'>COMTEC</a><br><b>About the researcher:</b><a href = 'https://www.researchgate.net/profile/Oskar-Hernandez-Perez'> Here</a><br><img src='./images/COMTEC.png'style='width:150px;height:100px;'>")
marker33.bindPopup("<font size=4><b>Carmina Crusaf??n</b></font><br><b>Institute/Faculty:</b> Building N, Pla??a C??vica.<br><b>Proyects name and website:</b><a href='https://www.uab.cat/web/coneix-la-facultat/-1345808201215.html'>COMTEC</a><br><b>About the researcher:</b><a href = 'https://www.uab.cat/web/el-departament/crusafon-baques-1302242487087.html'> Here</a><br><img src='./images/COMTEC.png'style='width:150px;height:100px;'>")
marker15.bindPopup("<font size=4><b>Bego??a Mi??arro</b></font><br><b>Institute/Faculty:</b>Building RR, Pla??a C??vica. <br><b>Proyects name and website:</b><a href='https://www.eciu.org/'>ECIU university</a> and <a href='https://www.uab.cat/web/smart-er-project-1345836766934.html'>SMART-ER(ECIU university)</a><br><b>About the researcher:</b><a href = 'https://siastd.uab.es/pcde/fitxa_persona.jsf;jsessionid=0fb3b1cf0d384009bca9353ffd0a:4crB?id=3bc4e282377cb09c&entitat=1138&colectiu=PAS'> Here</a><br><img src='./images/ECIU_Logo.png'style='width:100px;height:100px;'><img src='./images/ECIUSMART.jpg'style='width:200px;height:100px;'>")
marker16.bindPopup("<font size=4><b>Xavier Ari??o</b></font><br><b>Institute/Faculty:</b> Building A, UAB rectorate.<br><b>Proyects name and website:</b><a href='https://www.eciu.org/'>ECIU university</a> and <a href='https://incentive-project.eu/'>INCENTIVE</a><br><b>About the researcher:</b><a href = 'https://siastd.uab.es/pcde/fitxa_persona.jsf;jsessionid=4ff7c7ca6266e0526cfc018ecbd0:4crB?id=a5267236ba36267f'> Here</a><br><img src='./images/ECIU_Logo.png'style='width:100px;height:100px;'><img src='./images/INCEN.jpg'style='width:150px;height:100px;'>")
marker17.bindPopup("<font size=4><b>Dulce Tienda</b></font><br><b>Institute/Faculty:</b> Building A, UAB rectorate.<br><b>Proyects name and website:</b><br> <b>About the researcher:</b><a href = 'https://edo.uab.cat/es/node/5282'> Here</a><br>")
marker18.bindPopup("<font size=4><b>Caterina Sol??</b></font><br><b>Institute/Faculty:</b> Building G5 Administration and offices, Campus de la UAB<br><b>Proyects name and website:</b><a href='http://parentstem.kku.edu.tr/es/'>PARENTSTEM</a> and <a href='https://crecim.cat/4335-2/'> ATENC!??</a>.<br><b>About the researcher:</b><a href = 'https://portalrecerca.uab.cat/en/persons/caterina-sole-martin-3'> Here</a><br><img src='./images/PAR.jpg'style='width:200px;height:100px;'><img src='./images/CRECIM.jpg'style='width:100px;height:100px;'>")
marker19.bindPopup("<font size=4><b>Digna Couso</b></font><br><b>Institute/Faculty:</b> Building G5 Administration and offices, Campus de la UAB<b>Proyects name and website:</b><a href='http://parentstem.kku.edu.tr/es/'>PARENTSTEM</a> and <a href='https://crecim.cat/4335-2/'> ATENC!??</a><br><b>About the researcher:</b><a href = 'https://gent.uab.cat/dignacouso/'> Here</a><br><img src='./images/PAR.jpg'style='width:200px;height:100px;'><img src='./images/CRECIM.jpg'style='width:100px;height:100px;'>")
marker20.bindPopup("<font size=4><b>Miquel Domen??nch</b></font><br><b>Institute/Faculty</b> Building B, Social Psycology department.<br><b>Proyects name and website:</b><br><b>About the researcher:</b><a href = 'https://espainnova.uab.cat/miquel_domenech'> Here</a> ")
marker21.bindPopup("<font size=4><b>Isabelle Anguelovski</b></font><br><b>Institute/Faculty:</b> Building Z, ICTA (Institut de Ci??ncia i Tecnologia Ambientals).<br> <b>Proyects name and website:</b><a href='http://www.bcnuej.org/'>From the urban greening orthodoxy to green justice</a><br><b>About the researcher:</b><a href = 'https://ictaweb.uab.cat/personal_detail.php?id=214'> Here</a><br><img src='./images/BCNUEJ.jpg'style='width:100px;height:100px;'>")
marker23.bindPopup("<font size=4><b>Anna Florensa</b></font><br><b>Institute/Faculty:</b> Building Z, ICTA (Institut de Ci??ncia i Tecnologia Ambientals).<br> <b>Proyects name and website:</b><a href='https://www.nius.cat/el-projecte/'> Rius</a><br><b>About the researcher:</b><a href = 'https://siastd.uab.es/pcde/fitxa_persona.jsf;jsessionid=7f106a2145187098e61b2812c99e:4crB?id=1a7934cd2700ab0c&entitat=1796&colectiu=PAS'> Here</a>.<br><img src='./images/Nius.png'style='width:220px;height:100px;'>")
marker24.bindPopup("<font size=4><b>Jordi Vallverd??</b></font><br><b>Institute/Faculty:</b> Philosophy department.<br> <b>Proyects name and website:</b><a href='https://csi-cop.eu/'>CSI-COP</a><br><b>About the researcher:</b><a href = 'https://www.uab.cat/web/el-departament/jordi-vallverdu-segura-1260171839181.html'> Here</a><br><img src='./images/SCI.png'style='width:150px;height:50px;'>")
marker25.bindPopup("<font size=4><b>Elia Tena</b></font><br><b>Institute/Faculty:</b> CRECIM (Centre de Recerca per a l???Educaci?? Cient??fica i Matem??tica).<br> <b>Proyects name and website:</b><a href='http://parentstem.kku.edu.tr/es/'>PARENTSTEM</a> and <a href='https://crecim.cat/4335-2/'> ATENC!??</a>.<br><b>About the researcher:</b><a href = 'https://portalrecerca.uab.cat/en/persons/elia-tena-gallego-7'> Here</a>.<br><img src='./images/PAR.jpg'style='width:200px;height:100px;'><img src='./images/CRECIM.jpg'style='width:100px;height:100px;'>")
marker26.bindPopup("<font size=4><b>Yolanda	Melero</b></font><br><b>Institute/Faculty:</b>Building C, CREAF (Centre de Recerca Ecol??gica i Aplicacions Forestals).<br> <b>Proyects name and website:</b><a href='http://ubms.creaf.cat/'>Observatori de papallones urbanes </a> and <a href='http://mbms.creaf.cat/'>Observatori metropolit?? de papallones </a> <br><b>About the researcher:</b><a href = 'http://www.creaf.cat/ca/personal/yolanda-melero-cavero'> Here</a>.<br><img src='./images/uBMS.png'style='width:150px;height:100px;'><img src='./images/BMS.png'style='width:200px;height:80px;'>")
marker27.bindPopup("<font size=4><b>Ester Prat</b></font><br><b>Institute/Faculty:</b>Building C, CREAF (Centre de Recerca Ecol??gica i Aplicacions Forestals).<br> <b>Proyects name and website:</b><a href='https://www.ritmenatura.cat/'> Ritme natura</a>.<br><b>About the researcher:</b><a href = 'http://www.creaf.cat/ca/personal/ester-prat-carrio'> Here</a><br><img src='./images/Ritme.png'style='width:150px;height:50px;'>")
marker28.bindPopup("<font size=4><b>Anabel S??nchez</b></font><br><b>Institute/Faculty:</b>Building C, CREAF (Centre de Recerca Ecol??gica i Aplicacions Forestals).<br> <b>Proyects name and website:</b><a href='http://www.mosquitoalert.com/'> Mosquito Alert </a> and <a href='http://www.alertaforestal.com/'> Alerta Forestal </a><br><b>About the researcher:</b><a href = 'http://www.creaf.cat/ca/personal/anabel-sanchez-plaza'> Here</a><br><img src='./images/Mosquito.jpg'style='width:100px;height:100px;'><img src='./images/Alert.jpg'style='width:100px;height:100px;'>")
marker30.bindPopup("<font size=4><b>Alicia Forn??s</b></font><br><b>Institute/Faculty:</b> CVC(Centre de Visi?? per Computaci??).<br> <b>Proyects name and website:</b><a href='http://dag.cvc.uab.es/xarxes/'> XARXES </a><br><b>About the researcher:</b><a href = 'http://www.cvc.uab.es/~afornes/'> Here</a><br>")
marker31.bindPopup("<font size=4><b>Bruna ??lvarez</b></font><br><b>Institute/Faculty:</b> Department of Social and Cultural Anthropology.<br> <b>Proyects name and website:</b><a href='https://ddd.uab.cat/pub/afin/afinSPA/afin_a2019m4n113iSPA.pdf'> SexAFIN </a><br><b>About the researcher:</b><a href = 'https://www.uab.cat/web/el-departament/m-bruna-alvarez-1345654934378.html'> Here</a><br><img src='./images/AFIN.png'style='width:150px;height:100px;'>")
marker32.bindPopup("<font size=4><b>Chandra Kala Clemente Mart??nez</b></font><br><b>Institute/Faculty:</b> Department of Social and Cultural Anthropology.<br> <b>Proyects name and website:</b> <a href='https://www.researchgate.net/project/On-parental-desires-and-children-rights-interdisciplinary-perspectives-on-reproductive-decisions-and-the-origins-in-assisted-reproduction-with-gamete-and-embryo-donation-surrogacy-and-adoption-in-Spa'> Journeys to the origins </a>. <br><b>About the researcher:</b><a href = 'https://www.uab.cat/web/-1345693129055.html'> Here</a><br><img src='./images/AFIN.png'style='width:150px;height:100px;'>")

//Script para el desplegable de la pagina.
document.getElementById("select").addEventListener('change',function(e){
	let coord = e.target.value.split(",");
	myMap.flyTo(coord,20);
	if (coord == "41.50549,2.10401") {
		myMap.flyTo(coord,19);
	}
})

let btn = document.querySelector("#btn");
let text = document.querySelector("#enlace");
btn.addEventListener("click",()=>{
	change();
});
function change(){
	if(btn.classList.contains("bx-sun")){
		btn.classList.replace("bx-sun","bx-moon");
		colordark();
	}
	else{
		btn.classList.replace("bx-moon", "bx-sun");
		colorwhite();
	}
}
function colorwhite(){
 document.body.style.backgroundColor ='#E3F4E3';
 document.getElementById("titulo").style.color = 'black';
 document.getElementById("caja-texto").style.color = 'black';
 document.getElementById("btn").style.color = 'black';
 document.getElementById("footer").style.color = 'black';
 let x = document.getElementById("select");
	x.style.color = 'black';
	let y= document.getElementsByClassName("opciones");
	let i;
	for(i=0; i<y.length;i++){
		y[i].style.backgroundColor = '#E3F4E3';
	}	
}
function colordark(){
	document.body.style.backgroundColor ='#1B1D1E';
	document.getElementById("titulo").style.color = 'white';
	document.getElementById("caja-texto").style.color = 'white';
	document.getElementById("btn").style.color = 'white';
	document.getElementById("footer").style.color = 'white';
	let x = document.getElementById("select");
	x.style.color = 'white';
	let y= document.getElementsByClassName("opciones");
	let i;
	for(i=0; i<y.length;i++){
		y[i].style.backgroundColor = '#1B1D1E';
	}
}
