function contains(a, obj) {
  var i = a.length;
  while (i--) {
    if (a[i].indexOf(obj) !== -1) {
      return i;
    }
  }
  return false;
}

var GLOBAL_strings = {};
GLOBAL_strings.en_US = {
  "button_animals" : "./images/buttons/animals_en.jpg",
  "button_animals_selected" : "./images/buttons/animals_en_selected.jpg",
  "button_food" : "./images/buttons/food_en.jpg",
  "button_food_selected" : "./images/buttons/food_en_selected.jpg",
  "button_mix" : "./images/buttons/mix_en.jpg",
  "button_mix_selected" : "./images/buttons/mix_en_selected.jpg",
  "flagImage" : "./images/buttons/us.png",
  "goBack" : "Go back alphabet",
  "url" : "english.js" 
};

GLOBAL_strings.de_DE = {
  "button_animals" : "./images/buttons/animals_de.jpg",
  "button_animals_selected" : "./images/buttons/animals_de_selected.jpg",
  "button_food" : "./images/buttons/food_de.jpg",
  "button_food_selected" : "./images/buttons/food_de_selected.jpg",
  "button_mix" : "./images/buttons/mix_de.jpg",
  "button_mix_selected" : "./images/buttons/mix_de_selected.jpg",
  "flagImage" : "./images/buttons/de.png",
  "goBack" : "Zurückgehen Alphabet",
  "url" : "deutsch.js"
};

GLOBAL_strings.es_ES = {
  "button_animals" : "./images/buttons/animals_es.jpg",
  "button_animals_selected" : "./images/buttons/animals_es_selected.jpg",
  "button_food" : "./images/buttons/food_es.jpg",
  "button_food_selected" : "./images/buttons/food_es_selected.jpg",  
  "button_mix" : "./images/buttons/mix_es.jpg",
  "button_mix_selected" : "./images/buttons/mix_es_selected.jpg",
  "flagImage" : "./images/buttons/es.png",
  "goBack" : "Voler al alfabeto",
  "url" : "espanol.js"
};

GLOBAL_strings.ca_ES = {
  "button_animals" : "./images/buttons/animals_ca.jpg",
  "button_animals_selected" : "./images/buttons/animals_ca_selected.jpg",
  "button_food" : "./images/buttons/food_ca.jpg",
  "button_food_selected" : "./images/buttons/food_ca_selected.jpg",
  "button_mix" : "./images/buttons/mix_ca.jpg",
  "button_mix_selected" : "./images/buttons/mix_ca_selected.jpg",
  "flagImage" : "./images/buttons/ca.png",
  "goBack" : "Tornar a l'alfabet",
  "url" : "catala.js"
};

GLOBAL_strings.fr_FR = {
  "button_animals" : "./images/buttons/animals_fr.jpg",
  "button_animals_selected" : "./images/buttons/animals_fr_selected.jpg",
  "button_food" : "./images/buttons/food_fr.jpg",
  "button_food_selected" : "./images/buttons/food_fr_selected.jpg",
  "button_mix" : "./images/buttons/mix_fr.jpg",
  "button_mix_selected" : "./images/buttons/mix_fr_selected.jpg",  
  "flagImage" : "./images/buttons/fr.png",
  "goBack" : "Voler al alfabeto",
  "url" : "francais.js"
};

var GLOBAL_supportedLanguages = ['ca', 'de', 'en', 'es', 'fr'];
var GLOBAL_supportedLocales = ['ca_ES', 'de_DE', 'en_US', 'es_ES', 'fr_FR'];

var GLOBAL_alphabet = false;
var GLOBAL_language = false;

//mirem als settings si ja tenim l'idioma configurat
var GLOBAL_idiomSettings = Titanium.App.Properties.getString('idioma');
// fall back to device language
var GLOBAL_languageIndex = contains(GLOBAL_supportedLanguages, Ti.Platform.locale);
var GLOBAL_idioma;
if (GLOBAL_idiomSettings) {
  GLOBAL_idioma = Titanium.App.Properties.getString('idioma');
} else if (GLOBAL_languageIndex !== false) {
  GLOBAL_idioma = GLOBAL_supportedLocales[GLOBAL_languageIndex];
} else {
  GLOBAL_idioma = 'en_US';
}

// this sets the background color of the master UIView (when there are no
// windows/tab groups on it)
Titanium.UI.setBackgroundColor('black');

//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    backgroundColor : 'black',
    barColor : 'transparent',
    fullscreen : true
});

var viewIni = Titanium.UI.createView({
    backgroundColor : 'black'
});

/************************/
//Copyright
/************************/
var buttonCopyright = Titanium.UI.createButton({
    font : {fontSize: 12, fontWeight: 'bold', fontFamily: 'Helvetica Neue'},
    title : 'Images Credits',
    color : 'white',
    selectedColor : 'white',
    backgroundImage : './images/buttons/copyrightbutton.jpg',
    height : 30,
    width : 140,
    top : 451,
    left : 0
});


buttonCopyright.addEventListener('click', function(){ 
    var webview = Titanium.UI.createWebView({url:'https://docs.google.com/document/pub?id=1hcT9y3JRGh-pjRZ_0pWnCYKsxUXBd5aseW-uGoKZSfU&amp;embedded=true'});
    
    var buttonBack = Titanium.UI.createButton({
      backgroundImage : './images/buttons/fletxa.png',
      width : 40,
      height : 35  
    });
    
    var  windowCopyright = Titanium.UI.createWindow({
        title : "Copyright",
        barColor: 'black',
        leftNavButton : buttonBack  
    });
    
    buttonBack.addEventListener('click', function() {   
        windowCopyright.close();  
    });
    
    windowCopyright.add(webview);
    windowCopyright.open({modal:true});     
});

buttonCopyright.show();

function categoryButtonClick(e) {   
  if (GLOBAL_alphabet === false) {
    GLOBAL_alphabet = true;    
    viewIni.hide();
    var imageWindow = Titanium.UI.createWindow({
        buttonType : e.source.name,
        idioma : GLOBAL_idioma,
        alphabet : GLOBAL_alphabet,
        strings : GLOBAL_strings,
        url : 'idioma.js'
    });
   
    imageWindow.showMainWindow = function() {
      viewIni.show();
    }; 
    imageWindow.open();
    
    GLOBAL_alphabet = false;
  }
}


//alphabet 1 button
var button1 = Titanium.UI.createButton({   
   backgroundImage : GLOBAL_strings[GLOBAL_idioma].button_animals,
   //backgroundSelectedImage : GLOBAL_strings[GLOBAL_idioma].button_animals_selected,
   backgroundColor : 'black',
   top : 64,
   height : 75,
   width : 300,
   name : 'Animals'
});
button1.addEventListener('click', categoryButtonClick);
      
//alphabet 2 button food
var button2 = Titanium.UI.createButton({
    backgroundImage : GLOBAL_strings[GLOBAL_idioma].button_food,
    //backgroundSelectedImage : GLOBAL_strings[GLOBAL_idioma].button_food_selected,
    top : 203,
    height : 75,
    width : 300,
    name : 'Food'
});
button2.addEventListener('click', categoryButtonClick);


//alphabet 3 button pupurri
var button3 = Titanium.UI.createButton({
    backgroundImage : GLOBAL_strings[GLOBAL_idioma].button_mix,
    //backgroundSelectedImage : GLOBAL_strings[GLOBAL_idioma].button_mix_selected,
    bottom : 64,
    height : 75,
    width : 300,
    name : 'Mix'
});
button3.addEventListener('click', categoryButtonClick);

//function language menu
function languagesFunction (){
  buttonCopyright.hide();
  buttonLanguage.hide();
  buttonFlag.hide();
  if (GLOBAL_language === false) {    
    GLOBAL_language = true;
  	var t = Titanium.UI.create2DMatrix();
  	t = t.scale(0);
  
  	var w = Titanium.UI.createWindow({
  		backgroundColor:'black',
  		//backgroundImage : './images/buttons/blackIdiom.jpg',
  		borderWidth:4,
  		borderColor:'#999',
  		height:360,
  		width:300,
  		borderRadius:10,
  		transform:t,
  		url: 'language.js'
  	});
  	w.supportedLocales = GLOBAL_supportedLocales;
  	w.idioma = GLOBAL_idioma;
  	w.languageWindowClose = function(newIdioma) {
      //change buttons images
      buttonCopyright.show();
      buttonLanguage.show();
      buttonFlag.show();
      button1.backgroundImage = GLOBAL_strings[newIdioma].button_animals;  
      button2.backgroundImage = GLOBAL_strings[newIdioma].button_food;  
      button3.backgroundImage = GLOBAL_strings[newIdioma].button_mix;  
      button1.backgroundSelectedImage = GLOBAL_strings[newIdioma].button_animals_selected;  
      button2.backgroundSelectedImage = GLOBAL_strings[newIdioma].button_food_selected;  
      button3.backgroundSelectedImage = GLOBAL_strings[newIdioma].button_mix_selected; 	
      //deixar-ho aqui perque es veu amb la finestra dels idiomes oberta
      buttonFlag.backgroundImage = GLOBAL_strings[newIdioma].flagImage;
      GLOBAL_idioma = newIdioma;
      GLOBAL_language = false; 
  	};
  	w.open();  	
  }


}


//create flag image
var buttonFlag = Titanium.UI.createButton ({
    bottom : 11,
    height : 11,
    width : 16,
    right : 30,
    //left:30,
    backgroundImage : GLOBAL_strings[GLOBAL_idioma].flagImage
});
buttonFlag.show();

buttonFlag.addEventListener ('click', function() {
    languagesFunction();
});

//create change idiom button
var buttonLanguage = Titanium.UI.createButton({
    bottom : 6,
    height : 20,
    width : 20,
    right: 10,
    //left : 10,
    //backgroundSelectedImage : './images/buttons/info2.png',
    backgroundImage : './images/buttons/info.png'
});
buttonLanguage.show();
 

//click buttonLanguage
buttonLanguage.addEventListener('click', function() {
    languagesFunction();
});

win.add(viewIni);

viewIni.add(buttonFlag);
viewIni.add(buttonLanguage);
viewIni.add(button1);
viewIni.add(button2);
viewIni.add(button3);
viewIni.add(buttonCopyright);

// test for loading in a root-level include
//Ti.include("welcome.js");

win.open();