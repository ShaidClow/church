//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=41; attempts=0; attemptsMax=1;
var score=0; scoreMax=41; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#fff"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Bien!!!"; messageTime=""; messageError="Esa no era!!!"; messageErrorG="Esa no era!!!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FFFF"; borderTime="#FF0000";borderError="#00FFFF"; borderAttempts="#FF0000";
var wordsGame="VGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){
    valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Como se llamaban los papás de Jesús?",
"¿En qué ciudad nació Jesús?",
"¿En qué pusieron al niño al nacer?",
"¿Qué es un pesebre?",
"¿Quién se le apareció a los pastores?",
"¿Qué le llevaron los sabios al niño?",
"¿Qué hicieron con Jesús a los ocho días de nacido?",
"¿Qué significa Jesús?",
"¿Quién presentó o ungió a Jesús?",
"¿Quién era Rey cuando nació Jesús?",
"¿Qué mandó a hacer Herodes cuando supo del nacimiento de Jesús?",
"¿Cómo se llamaban los hermanos de Jesús?",
"¿Cuantos años tenía Jesús cuando fue a la fiesta de la pascua con sus padres?",
"¿Con quién encontraron a Jesús cuando se extravío?",
"¿En qué año nació Jesús?",
"¿En el año 15 quién era Emperador y quién gobernador?",
"¿Quién predicó el arrepentimiento?",
"¿Qué vestidura usaba Juan el Bautista?",
"¿Qué comía Juan el Bautista?",
"¿Qué significa Bautismo?",
"¿Qué punto de fe habla del Bautismo?",
"¿Quién dejó ejemplo del Bautismo y su función?",
"¿Donde fué bautizado el Señor Jesús?",
"¿Qué recibió el Señor Jesús al bautizarse?",
"¿A qué edad fué bautizado el Señor Jesús?",
"¿Qué es el espiritu Santo?",
"¿A qué edad inició su ministerio el Señor Jesús?",
"¿Qué es la Biblia?",
"¿Cuantos libros tiene la biblia?",
"¿Cómo se divide la Biblia?",
"¿Cuantos libros tiene el antiguo testamento?",
"¿Cuantos libros tiene el nuevo testamento?",
"¿Cómo se llaman los primeros 5 libros de la biblia?",
"¿Qué libro no forma parte del Pentateuco?",
"¿Quién escribió el pentateuco?",
"¿Con qué otro nombre se conoce al pentateuco?",
"¿Qué significa Genesis?",
"¿Qué significa Exodo?",
"¿En qué libro encontramos las leyes que Dios dió al Pueblo?",
"¿Cuál es el libro de la repetición?",
"¿Quién escribió la Biblia?"];
var answers1=["MUpvc+kgeSBNYXJpYQ","MEFicmFoYW0geSBTYXJh","MEVsY2FuYSB5IEFuYQ","MEpvc+kgeSBNaXJpYW0"];
var answers2=["MUJlbGVu","MEplcnVzYWxlbQ","ME5hemFyZXRo","MEdhbGlsZWE"];
var answers3=["MVBlc2VicmU","MENhbWE","MEN1bmE","MENlc3Rv"];
var answers4=["MURvbmRlIGNvbWVuIGxvcyBhbmltYWxlcw","MFVuIG1hbm9qbyBkZSB0cmlnbw","MFVuYSBjYXNh","MFVuYSBjYW1h"];
var answers5=["MVVuIGFuZ2Vs","MFVuIGhvbWJyZQ","MFVuIG1hZ28","MFVuIHJleQ"];
var answers6=["MU9ybyxpbmNpZW5zbywgbWlycmE","MEp1Z3VldGVz","ME9ybyxwbGF0YSxtaXJyYQ","MENvYnJlLHBlcmZ1bWVzLG9ybw"];
var answers7=["MUxsZXZhcmxvIGFsIHRlbXBsbw","MEJhdXRpemFybG8","MExsZXZhcmxvIGEgRWdpcHRv","MExsZXZhcmxvIGNvbiBsb3MgZG9jdG9yZXM"];
var answers8=["MVNhbHZhZG9y","MEF5dWRh","MFBheg","MEd1ZXJyZXJv"];
var answers9=["MVphY2FyaWFz","MEp1YW4","MEhlcm9kZXM","MFpvcm9iYWJlbA"];
var answers10=["MUhlcm9kZXM","MERhdmlk","MFNhbG9tb24","MENlc2Fy"];
var answers11=["MU1hdGFyIGEgbG9zIG5p8W9z","MENhbWJpYXIgbmnxb3MgY29uIG90cm8gcHVlYmxv","MFVuYSBFc3RhdHVh","MEZpZXN0YQ"];
var answers12=["MVNhbnRpYWdvL0p1YW4","ME1hcmNvcy9MdWNhcw","MEZlbGlwZS9Ub21hcw","MFBlZHJvL1NhbnRpYWdv"];
var answers13=["MTEy","MDg","MDE1","MDM"];
var answers14=["MUNvbiBsb3MgZG9jdG9yZXMgZGUgbGEgTGV5","MENvbiBzdXMgYWJ1ZWxvcw","MENvbiBKdWFu","MFByZWRpY2FuZG8gZW4gZWwgbWFy"];
var answers15=["MTQgYS5D","MDQgZC5D","MDggZC5D","MDggYS5D"];
var answers16=["MVRpYmVyaW8vUGlsYXRv","MFRpYmVyaW8vSGVyb2Rlcw","ME5lcvNuL1BpbGF0bw","MEF1Z3VzdG8vUGlsYXRv"];
var answers17=["MUp1YW4","MEplc/pz","MFBhYmxv","MFBlZHJv"];
var answers18=["MVBpZWwgZGUgQ2FtZWxsbw","MFBpZWwgZGUgVG9ybw","MFBpZWwgZGUgTGXzbg","MFBpZWwgZGUgQ2FicmE"];
var answers19=["MUxhbmdvc3RhL21pZWw","MFBlc2NhZG8vQWd1YQ","MENhcm5lL2xlY2hl","MExlZ3VtYnJlcy9WaW5v"];
var answers20=["MVN1bWVyZ2ly","MExpbXBpYXI","ME1vamFy","MEFndWEgbGltcGlh"];
var answers21=["MTI4","MDE","MDEw","MDE4"];
var answers22=["MUplc/pz","MFBhYmxv","ME5pY29kZW1v","MEp1YW4"];
var answers23=["MVJpbyBKb3JkYW4","MFJpbyBFdWZyYXRlcw","MFJpbyBOaWxv","ME1hciBkZSBHYWxpbGVh"];
var answers24=["MUVzcGlyaXR1IFNhbnRv","MFBheg","ME1pbmlzdGVyaW8","MFVuYSBwYWxvbWE"];
var answers25=["MTI4","MDE4","MDMw","MDMy"];
var answers26=["MUVsIHBvZGVyIGRlIERpb3M","MFVuIHRhbGVudG8","MFVuYSBoYWJpbGlkYWQ","MFVuYSBwYWxvbWE"];
var answers27=["MTMw","MDEy","MDI1","MDMy"];
var answers28=["MUNvbmp1bnRvIGRlIGxpYnJvcw","MFVuIGxpYnJv","MFVuIHJvbGxvIGFudGlndW8","MEN1ZW50b3M"];
var answers29=["MTY2","MDI3","MDM5","MDcw"];
var answers30=["MTIgVGVzdGFtZW50b3M","MDY2IGxpYnJvcw","MDMgUGFydGVz","MERpZmVyZW50ZXMgQ2xhc2lmaWNhY2lvbmVz"];
var answers31=["MTM5","MDE5","MDM4","MDI3"];
var answers32=["MTI3","MDI4","MDgy","MDM5"];
var answers33=["MVBlbnRhdGV1Y28","MENhbm9uaWNvcw","MEhpc3Rvcmljb3M","MExleQ"];
var answers34=["MUpvc3Vl","MEV4b2Rv","MExldml0aWNv","MEdlbmVzaXM"];
var answers35=["MU1vaXNlcw","MEpvc3Vl","MEpvc2U","MEFicmFoYW0"];
var answers36=["MVRvcmE","MFRhbmFq","MFJvbGxvcw","MEdlbmVzaXM"];
var answers37=["MVByaW5jaXBpbw","MFNhbGlkYQ","MEh1ZXJ0bw","MFRpZXJyYQ"];
var answers38=["MVNhbGlkYQ","MFJlZ3Jlc28","MEV4aWxpbw","MEVnaXB0bw"];
var answers39=["MUxldml0aWNv","MEV4b2Rv","MERldXRlcm9ub21pbw","ME51bWVyb3M"];
var answers40=["MURldXRlcm9ub21pbw","MEdlbmVzaXM","MEpvc3Vl","MEp1ZWNlcw"];
var answers41=["MUhvbWJyZXMgaW5zcGlyYWRvcyBwb3IgRGlvcw","MEFuZ2VsZXM","MFRlb2xvZ29z","MEplc/pz"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,
    answers11,answers12,answers13,answers14,answers15,answers16,answers17,answers18,answers19,answers20,
    answers21,answers22,answers23,answers24,answers25,answers26,answers27,answers28,answers29,answers30
    ,answers31,answers32,answers33,answers34,answers35,answers36,answers37,answers38,answers39,answers40,answers41];
var err=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var ima=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp4=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogv=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Test_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
