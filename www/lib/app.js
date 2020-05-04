// This is a JavaScript file
{
  var a="";
  var b="";
  var result=0;
  var o=false;
  var conta="";


 $('#visor .ope').html('');

 $(document).on('click','.num',function(){   
  var num = $(this).html();    
  if(o){
    b+=num;
  }else{
    a+=num;
  }
  Tvisor(num);     
  console.log("A: "+a);
  console.log("B: "+b);
  console.log("Conta: "+conta);
 });

$(document).on('click','.sinal',function(){
  var sinal = $(this).html();
  Tvisor($(this).html());

    if(o){
      o=false;
    }
    o =true;  

    if(sinal == "="){            
        Conta(conta)                                  
    }
    else if(sinal == "CE"){
        LimpaVisor();
    }
    else if(sinal == "+"){
      conta="somar";
    }
    else if(sinal == "-"){
      conta="subtrair";
    }
    else if(sinal == "x"){
      conta="multiplicar";
    }
    else if(sinal == "/"){
      conta="dividir";
    } 
    else if(sinal == "n!"){
      conta="fatorial";
    } 
    else if(sinal == "√"){
      conta="raizq";
    } 

});
  function Conta(conta){
    if(conta == "somar")
      result = parseFloat(a)+parseFloat(b);
    else if(conta == "subtrair")
      result = parseFloat(a)-parseFloat(b);
    else if(conta == "multiplicar")
      result = parseFloat(a)*parseFloat(b);
    else if(conta == "dividir")
      result = parseFloat(a)/parseFloat(b);
    else if(conta == "fatorial")
      result = Fatorial(parseFloat(a));
    else if(conta == "raizq")
      result = Math.sqrt(parseFloat(a));
    
    $('#resultado').html(result);
  }

  function Tvisor(texto){
    var atual = $('#visor .ope').html();
    $('#visor .ope').html(atual+texto);
  }
  function visor(){
    return $('#visor .ope').html();
  }
  function LimpaVisor(){
    $('#visor .ope').html(" ");
    a="";
    b="";
    result=0;
    o=false;
    conta="";
     $('#resultado').html(" ");
  }

  
  function Fatorial(num){
    var fat =num;
    for(i=num;i>1;i--){
      fat*=i-1;      
    }
    return fat;
  }
 
}