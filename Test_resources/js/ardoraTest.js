//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
    randOrder();
    paintQuestion();
    if (tiAval){
        parent.iniciaActividade()
    }
    if ((tiTime) && (tiButtonTime)){
        paintButtonTime();
    }
}

//preguntas aleatorias
function randOrder(){
    if (tiRandOrder){var rA=[];for (var i = 0; i < ans.length; i++) {
            rA.push(i);
        }
    while (rA.length > 0) {
        var randN=Math.floor(Math.random() * rA.length);
        r_order.push(rA[randN]);
        rA.splice(randN, 1);}
    } else{   
        for (var i=0; i<ans.length; i++) {
            r_order.push(i);
        }
    }; 
    indexTag=r_order[iT];
}

//Preguntas y checkbox
function paintQuestion(){
    randomSort();
    document.getElementById("ardoraTag").innerHTML=tags[indexTag];
    var inH='<ul>';
        for (i = 0; i < actualAnswers.length; i++) {
            inH=inH+'<li class="checkbox-grid"><input id="check'+i.toString()+'" type="checkbox" name="check'+i.toString()+'" value="check'+i.toString()+'"><label for="check'+i.toString()+'">'+testWords(actualAnswers[i]).substr(1)+'</label></li>';
            }
        inH=inH+"</ul>";
    document.getElementById("ardoraChecks").innerHTML=inH;
    if (actualAnswers.length>10){ 
        $(".checkbox-grid").css("width","50%");
    }else{
        $(".checkbox-grid").css("width","100%");
    }
}



function randomSort(){
    while (actualAnswers.length>0){actualAnswers.splice(0,1);}var randArray=[].concat(ans[indexTag]);
    while (randArray.length>0){var randN=Math.floor(Math.random()*randArray.length);actualAnswers.push(randArray[randN]);randArray.splice(randN,1);}
}


//Acciones
function isCorrect(){
    $.each($("audio"), function () {$(this).get(0).pause();}); 
        var correct=true;
    for (i = 0; i < actualAnswers.length ; i++) {
        if ($("#check"+i.toString()).is(":checked")){
        if (testWords(actualAnswers[i]).substr(0,1).localeCompare("0")==0){correct=false};
    }else{
        if (testWords(actualAnswers[i]).substr(0,1).localeCompare("1")==0){correct=false};
            }
        }
            if (correct) {
                successes++;
                score=score+scoreInc;
                if (successes==ans.length){ 
                    showMessage("Ok");
            }else{
                iT++;
                indexTag=r_order[iT];
                paintQuestion();
            }
        }else {
            attempts++;
            score=score-scoreDec;
            if (err[indexTag].length>0){
                messageError=err[indexTag];
            }else{messageError=messageErrorG;}
            if (tiAttempts) {if (attempts > attemptsMax) {
                showMessage("Attempts");
            } else {
                showMessage("Error");
            }
        } else {showMessage("Error");
        }
    }
}


function showSol(oldTypeGame){ 
    for (i = 0; i < actualAnswers.length; i++) {
        if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("0") == 0) {
            $("#check" + i.toString()).prop("checked", false);
        }
    if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("1") == 0) {
        $("#check" + i.toString()).prop("checked", true);}
    }
}

function paintBack(){}
function testWords(input) {
    var output = ""; 
    var chr1, chr2, chr3 = ""; 
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    var btest = /[^A-Za-z0-9\+\/\=]/g; 
    if (btest.exec(input)) { 
        alert("Invalid characters");
    } 
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do { 
            enc1 = wordsStr.indexOf(input.charAt(i++)); 
            enc2 = wordsStr.indexOf(input.charAt(i++)); 
            enc3 = wordsStr.indexOf(input.charAt(i++));
            enc4 = wordsStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        } 
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } 
    while (i < input.length);return unescape(output);
}

Array.prototype.in_array=function(){
    for(var j in this){ 
        if(this[j]==arguments[0]){
            return true;
        }
    }
    return false;
}
