// DICHIARAZIONI VARIABILI O OGGETTI
    var i=0; //indice			
	var Domande=["Frau1","Frau2","Frau3","Frau4"]; //Lista Domande
	var V_nd=[1,2,4]; //Domande da scegliere
	var V_Domande=[]; //Domande scelte,Parallelo a V_Risposte
	var V_Risposte=[]; //Risposte date,Parallelo a V_Domande
	
	
	
   //$(window).on('load',function () {alert('Finestra caricata completamente, compresa la grafica');});
   $(window).on('load',function () {$('#indietro').attr("src","../images/indietroDisabled.png");});
	
	
// RIEMPIO VETTORE DOMANDE SCELTE	
	for(j=0;j<V_nd.length;j++) 
	{
		V_Domande[j]=Domande[V_nd[j]-1];
	}
	
	
	
// FUNZIONAMENTO FRECCE		
	function GestioneFrecce()
	{
		if(i==0)
		{			
			$('#indietro').attr("src","../images/indietroDisabled.png");
		}
		else
		{
			$('#indietro').attr("src","../images/indietroEnabled.png");	
		}
		if(i==V_Domande.length-1)
		{
	    	$('#avanti').attr("src","../images/avantiDisabled.png");
		}
		else
		{
		    $('#avanti').attr("src","../images/avantiEnabled.png");
		}
	}/* valore=document.getElementByName("rd:checked").value; */
	
	
// CAMBIO DOMANDA NEL DIV	FATTO
	function DomandaAvanti()
	{     
				$("#Domanda").text(V_Domande[++i]);
		if(i>V_Domande.length)
		{
			i=V_Domande.length;
		}				if(V_Risposte[i]==undefined)		 {			  console.log("sono entrato in freccia molto")			  $("#MI").prop("checked",false);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }		if(V_Risposte[i]=="Molto Importante")		 {			  console.log("sono entrato in freccia molto")			  $("#MI").prop("checked",true);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Abbastanza Importante")		 {			 console.log("sono entrato in freccia abbastanza")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",true);			 $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Poco Importante")		 {			 console.log("sono entrato in freccia poco")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",false);			 $("#PI").prop("checked",true);		 }		
	}
	//FATTO
	function DomandaIndietro()
	{
		$("#Domanda").text(V_Domande[--i]);  		
		if(i<0)
		{
			i=0;
		}				if(V_Risposte[i]==undefined)		 {			  console.log("sono entrato in freccia molto")			  $("#MI").prop("checked",false);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }		if(V_Risposte[i]=="Molto Importante")		 {			  console.log("sono entrato in freccia molto")			  $("#MI").prop("checked",true);			  $("#AI").prop("checked",false);			  $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Abbastanza Importante")		 {			 console.log("sono entrato in freccia abbastanza")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",true);			 $("#PI").prop("checked",false);		 }		 if(V_Risposte[i]=="Poco Importante")		 {			 console.log("sono entrato in freccia poco")			 $("#MI").prop("checked",false);			 $("#AI").prop("checked",false);			 $("#PI").prop("checked",true);		 }
	}
					//ONCLICK DEI RADIOBUTTON	function risposta(arg1)	  {	  	   console.log("sono entrato in risposta")	    	   V_Risposte[i]=arg1;			  }
  // STAMPARE DATI DA FILE ESTERNI CSV
	var n=5;
	var  r = ['1','2','3','4','5','6','7','8','9'];
	var out ="";
	$("#export").click(function (event) 
	{
		var outputFile="risposta.csv"; //nome del file.csv scaricato
		
		for (i=0;i<n;i++)
		{
			out= out + r[i] + "\r" + ";"; //dati dentro il file.csv
		}
		
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
	
	
	
// FUNZIONAMENTO RADIO BUTTON 	
	$(function() {

            $('input[name="rd"]').click(function() {

                // identifico l'oggetto cliccato
                var $radio = $(this);

                if ($radio.data('waschecked') == true) {
                    // caso radio button selezionato
                    // tolgo la proprietà checked
                    $radio.prop('checked', false);
                    // tolgo la proprietà waschecked
                    $radio.data('waschecked', false);
                } else { // caso radio button non selezionato
                    // aggiungo la proprietà waschecked
                    $radio.data('waschecked', true);
                }

                // rimuove tutti gli attributi waschecked dagli altri radio button
                $radio.siblings('input[name="rd"]').data('waschecked', false);
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
/* 


$('#Risposte input:radio').click(function() 
{
    if ($(this).val() === 'Molto importante')
	{
      //V_Risposte[i]=$(this).val();
	  V_Risposte[i]=$("input[type=text][name=rd]").val();
    } 
	else if ($(this).val() === 'Abbastanza importante') 
	{
	  V_Risposte[i]=$("input[type=text][name=rd]").val();
    } 
	else if ($(this).val() === 'Poco importante') 
	{
	  V_Risposte[i]=$("input[type=text][name=rd]").val();
    } 
});	













function test (){
  var file = fileInput.files[0];
  var textType = /text.;
  var domande=[];
  var csvType = 'application/vnd.ms-excel';

  if (file.type.match(csvType)) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("csvData").innerHTML=reader.result; //stampa su html 
	  
    }
    reader.readAsText(file);  
  } else {
    fileDisplayArea.innerText = "File non supportato!";
  }
} */




