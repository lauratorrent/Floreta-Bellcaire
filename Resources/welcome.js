(function()
{
	// window container
	var welcomeWindow = Titanium.UI.createWindow({
		touchEnabled:false
	});

	// black view
	var welcomeView = Titanium.UI.createView({
		backgroundColor:'black',
		backgroundImage : '../images/buttons/initialScreen.jpg',
		touchEnabled:false,
		fullcreen : true
	});
	welcomeWindow.add(welcomeView);
	welcomeWindow.open();

	var t = Ti.UI.create2DMatrix().translate(-200,200).scale(0);
	welcomeWindow.animate({transform:t,delay:2000,duration:5000},function()
	{
		welcomeWindow.close();
	});
})();

