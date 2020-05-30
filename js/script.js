function quiz(){

        var inicio=confirm('Bem-Vindo ao Quiz!\nVoce tem certeza que deseja participar?');
        if(inicio==false){window.location.replace("index.html");}
        else{ window.alert('Clique Ok para iniciar');
        //Inicio do quiz
        var certo = "<b>Correto!</b>"; 
        var errado = "<b style='color:red;'>Errado!</b>";
        var o = new Array();
        var acertos=0; var erros=0; 
        var respostas = new Array(); 
        var p = new Array();
        var r = new Array();
        var t=4; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
        // LISTA DE PERGUNTAS
        p[1] = "Você acha que é importante fazer coleta seletiva do lixo ?";
        r[1] = 'sim';
        p[2] = "A sacolinha plástica é a grande vilã da sustentabilidade?";
        r[2] = 'sim';
        p[3] = "É necessário lavar as embalagens que vão para coleta seletiva?";
        r[3] = 'não';
        p[4] = " Reciclar é sempre a melhor opção?";
        r[4] = 'não';
       
       
        //ADICIONE MAIS PERGUNTAS AQUI COPIANDO 2 EM 2 LINHAS: P[] = PERGUNTA R[] = RESPOSTA
         for(var i=1;i<=t;i++){o[i] = i;} //gera uma sequencia de t numeros
         for(var i=1;i<=4;i++)          //embaralha a sequencia 10 vezes
         {
          n=Math.round(t*(Math.random())); 
          m=Math.round(t*(Math.random()));
          if(m==0){m++;}
          if(n==0){n++;}
          var temp = o[n];
          o[n]=o[m];
          o[m]=temp;
         } 
        for(var i=1;i<=t;i++)
        {
          respostas[o[i]] = prompt(p[o[i]],"");
           if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
         }

        
        //fim do quiz
        document.write("<style>body{background-color:#B73170;}</style>")
        document.write("<br><center><h1>Suas respostas:</h1></center><br><br>");
        document.write("<ol>");
        for(var i=1;i<=t;i++)
        {
        document.write("<li>"+respostas[o[i]]);}
        document.write("</ol>");
        document.write("<br>Total de acertos: "+acertos);
        document.write("<br>Total de erros: "+erros);
        document.write("<br><br><input type=button value='Voltar ao site' Onclick='history.go(0)'> ");
        document.write("<br><br><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}>");
        document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");
        for(var i=1;i<=t;i++)
         { document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
        document.write("</ol></div>");
       }
     
     
    
}