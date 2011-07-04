var languageWin = Titanium.UI.currentWindow;
var supportedLocales = languageWin.supportedLocales;
var idioma = languageWin.idioma;

// create first transform to go beyond normal size
var t1 = Titanium.UI.create2DMatrix();
t1 = t1.scale(1.1);
var a = Titanium.UI.createAnimation();
a.transform = t1;
a.duration = 200;

// when this animation completes, scale to normal size
a.addEventListener('complete', function() {    		
	var t2 = Titanium.UI.create2DMatrix();
	t2 = t2.scale(1.0);
	languageWin.animate({transform:t2, duration:200});    
});

a.removeEventListener('complete', function() {    		
	var t2 = Titanium.UI.create2DMatrix();
	t2 = t2.scale(1.0);
	languageWin.animate({transform:t2, duration:200});    
});

// create a button to close window
var buttonClose = Titanium.UI.createButton({
    backgroundImage : './images/buttons/fletxa.png',
    width : 40,
    height : 35,  
		top : 15,
		left : 15
});
languageWin.add(buttonClose);
buttonClose.addEventListener('click', function() {
  var t3 = Titanium.UI.create2DMatrix();
  t3 = t3.scale(0);
  languageWin.languageWindowClose(idioma);
  languageWin.close({transform:t3,duration:300});
});

buttonClose.removeEventListener('click', function() {
  var t3 = Titanium.UI.create2DMatrix();
  t3 = t3.scale(0);
  languageWin.languageWindowClose(idioma);
  languageWin.close({transform:t3,duration:300});
});


//
//CODI TABLE
//
var data = [];      
  
data[0] = Ti.UI.createTableViewRow({backgroundImage : './images/buttons/montjuic.jpg', backgroundColor: 'transparent', title : 'Català', leftImage : './images/buttons/ca.png', height : 60, color : 'black'});
data[1] = Ti.UI.createTableViewRow({backgroundImage : './images/buttons/brandenburg.jpg', backgroundColor: 'transparent', title : 'Deutsch', leftImage : './images/buttons/de.png', height : 60, color : 'black'});
data[2] = Ti.UI.createTableViewRow({backgroundImage : './images/buttons/brooklynbridge.jpg', backgroundColor: 'transparent', title : 'English', leftImage : './images/buttons/us.png', height : 60, color : 'black'}); 
data[3] = Ti.UI.createTableViewRow({backgroundImage : './images/buttons/escorial.jpg', backgroundColor: 'transparent', title : 'Español', leftImage : './images/buttons/es.png', height : 60, color : 'black'}); 
data[4] = Ti.UI.createTableViewRow({backgroundImage : './images/buttons/sacrecoeur.jpg', backgroundColor: 'transparent', title : 'Français', leftImage : './images/buttons/fr.png', height : 60, color : 'black'}); 
        
// create table view
var tableView = Titanium.UI.createTableView({
  separatorStyle : Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
  //backgroundColor:'#336699',
	data : data,
  	top : 56
});
  
//check initial idiom row
for (var i = 0; i < supportedLocales.length; i++) {
  if (supportedLocales[i] === idioma) {
    data[i].hasCheck = true; 
  } else{
    data[i].hasCheck = false;
  }    	   
}      
  
  
tableView.addEventListener('click',function(e) {                     
  idioma = supportedLocales[e.index];
                
  Titanium.App.Properties.setString('idioma', idioma);  
    
  //check actual idiom row 
  for (var i = 0, length = supportedLocales.length; i < length; i++) {
	  if (supportedLocales[i] === idioma) {
      data[i].hasCheck = true;  
    } else{
      data[i].hasCheck = false;
    }    	   
	}                    
	//close the idiom window
	var t3 = Titanium.UI.create2DMatrix();
  t3 = t3.scale(0);
  languageWin.languageWindowClose(idioma);
  languageWin.close({transform:t3,duration:300});
                                     
});	             

// add table view to the window
languageWin.add(tableView);
   
languageWin.open(a);
//
//FI CODI TABLE
//  
