// DICHIARAZIONI VARIABILI O OGGETTI    var i=0; //indice			
	var Domande=[]; //Lista Domande	//localStorage.setItem("Domande",Domande);
		var V_Risposte=[]; //Risposte date DA SPEDIRE
	//03/02/2018	    //PARTIRE CON LA FRECCIA DISABLITATA	  $ (function()       {					           console.log("indietro disabled1");		   		   		    //localStorage.getItem("Domande"); PROVA VARIABILE GLOBALE						$("#indietro").attr("src","../images/indietroDisabled.png");      });
    //PARTIRE CON LA PRIMA DOMANDA      $ (function()       {					          			$(".domanda").text(Domande[i]);      });			
    // FUNZIONAMENTO FRECCE	ABILITATE E DISABILITATE	
	function GestioneFrecce()
	{
		if(i==0)
		{			            console.log("indietro disabled");
			$('#indietro').attr("src","../images/indietroDisabled.png");
		}
		else
		{
			$('#indietro').attr("src","../images/indietroEnabled.png");	
		}
		if(i>=Domande.length-1)
		{
	    	$('#avanti').attr("src","../images/avantiDisabled.png");
		}
		else
		{
		    $('#avanti').attr("src","../images/avantiEnabled.png");
		}
	}
	
    // CAMBIO DOMANDA NEL DIV	FRECCIA IN AVANTI, INOLTRE SETTO I RADIO CHECCATI E NON IN BASE ALLE PRECEDENTI RISPOSTE
	function DomandaAvanti()
	{     						 		 if($(":radio[name=rd]:checked").length==0)		 {			 			 V_Risposte[i]=undefined;			 		 }		 		$(".domanda").text(Domande[++i]);		if(i>=(Domande.length-1))       {	     console.log("il cazzo di bottone deve APPARIRE");	     $(".btnEnd").removeClass("btnEnd");	     $(".btnEnd").addClass("bottonefine");       }
		if(i>Domande.length)
		{
			i=Domande.length;
		}				  if(V_Risposte[i]==undefined)		 {			  console.log("sono entrato in freccia undefined")			  $("#MI").prop("checked",false);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }  		if(V_Risposte[i]=="Molto Importante")		 {			  console.log("sono entrato in freccia molto")			  $("#MI").prop("checked",true);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Abbastanza Importante")		 {			 console.log("sono entrato in freccia abbastanza")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",true);			 $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Poco Importante")		 {			 console.log("sono entrato in freccia poco")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",false);			 $("#PI").prop("checked",true);		 }  		
	}
	    //CAMBIO DOMANDA NEL DIV	FRECCIA IN IDNIETRO ,INOLTRE SETTO I RADIO CHECCATI E NON IN BASE ALLE PRECEDENTI RISPOSTE
	function DomandaIndietro()
	{
		$(".domanda").text(Domande[--i]);  		
				if(i<0)
		{
			i=0;
		}				  if(V_Risposte[i]==undefined)		 {			  console.log("sono entrato in freccia molto")			  $("#MI").prop("checked",false);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }  		if(V_Risposte[i]=="Molto Importante")		 {			  console.log("sono entrato in freccia molto")			  $("#MI").prop("checked",true);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Abbastanza Importante")		 {			 console.log("sono entrato in freccia abbastanza")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",true);			 $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Poco Importante")		 {			 console.log("sono entrato in freccia poco")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",false);			 $("#PI").prop("checked",true);		 } 
	}
				//ONCLICK DEI RADIOBUTTON SALVO LA RISPOSTA SUL VETTORE RISPOSTE	 function risposta(arg1)	  {	  	   console.log("sono entrato in risposta")	    	   V_Risposte[i]=arg1;			  } 
  // STAMPARE DATI DA FILE ESTERNI CSV (DUBBIA UTILITA' POSSIBILE RIMOZIONE)
	/* var n=5;
	var  r = ['1','2','3','4','5','6','7','8','9'];
	var out ="";
	$("#export").click(function (event) 
	{
		var outputFile="risposta.csv"; //nome del file.csv scaricato		
		for (i=0;i<n;i++)
		{
			out= out + r[i] + "\r" + ";"; //dati dentro il file.csv
		} */
		
		// Data URI
		var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(out);

		// For IE (tested 10+)
		if (window.navigator.msSaveOrOpenBlob) 
		{
			var blob = new Blob([decodeURIComponent(encodeURI(out))], {type: "text/csv;charset=utf-8;"});
			navigator.msSaveBlob(blob, outputFile);
		} 
		else
		{
			$(this)
			.attr({
					'download': outputFile
					,'href': csvData
				  });
		}
	});
	
// FUNZIONAMENTO RADIO BUTTON 	(NON FUNZIONANO CORRETTAMENTE)
	$(function() {
            $('input[name="rd"]').click(function() {

                // identifico l'oggetto cliccato
                var $radio = $(this);		

                if ($radio.data('waschecked') == true) {
                    // caso radio button selezionato                    console.log("was checked");
                    // tolgo la proprietà checked
                    $radio.prop('checked', false);
                    // tolgo la proprietà waschecked
                    $radio.data('waschecked', false);
                } else { // caso radio button non selezionato
                    // aggiungo la proprietà waschecked                    console.log("non was checked");
                    $radio.data('waschecked', true);					$radio.data('checked', true);
                }

                // rimuove tutti gli attributi waschecked dagli altri radio button
                /* $radio.siblings('input[name="rd"]').data('waschecked', false); */				$("radio").data("waschecked",false);								
            });
        });

// CARICAMENTO VETTORE DOMANDE DA FILE
  function test (){
  var file = fileInput.files[0];
  var textType = /text.*/;
  var domande=[];
  var csvType = 'application/vnd.ms-excel';
  var index=0;
  
  if (file.type.match(csvType)) {
    var reader = new FileReader();
    reader.onload = function(e) 
	{
		if(index<V_nd.length)
		{
			console.log("qui");
			domande[index]=$("csvData").rows[index].text;
		}
		//document.getElementById("csvData").innerHTML=reader.result; //stampa su html 
	  
		}
			reader.readAsText(file);  
		} 
} 
//ALTRO CARICAMENTO DOMANDE DA FILE 	function hide() {$("#Avanti").style.visibility = "hidden";}function importDomande(){  var file = fileInput.files[0];  var textType = /text.*/;  var csvType = 'application/vnd.ms-excel';  if (file.type.match(csvType)) {    var reader = new FileReader();    reader.onload = function(e) {	  Domande = reader.result;      console.log(Domande);	  var res = Domande.split("\n");    for (var i=0; i<res.length; i++)		console.log(i+"-> "+res[i]);    }    reader.readAsText(file);	$("Avanti").style.visibility = "visible";	$("CaricaCSV").style.visibility = "hidden"; 	$("fileInput").style.visibility = "hidden";	$("span").style.visibility = "hidden";	$("testoIniziale").style.visibility = "hidden";	}    else {    fileDisplayArea.innerText = "File non supportato!";    }    }  


