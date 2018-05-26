var page = require('webpage').create(),
  system = require('system'),
  t, address,
  hour;

hour = new Date().getHours();
// console.log(hour);

// TIMEOUT
page.settings.resourceTimeout = 6666;
page.onResourceTimeout = function (e) {
  phantom.exit(1);
};

if (hour > 0 && hour < 7) // Timer, to run between 1.00AM and 6.59AM
{

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];

try {

	page.open(address, function(status) {
	  if (status !== 'success') {
    	console.log('FAIL to load the address');
  	} else {
    	t = Date.now() - t;
    	console.log('Loading ' + system.args[1]);
    	console.log('Loading time ' + t + ' msec');
 	 }

   page.render('pictures/' + address + '.jpg', {format: 'jpeg', quality: '17'});	// JPEG screenshots

  	phantom.exit();
	});

    } finally {

	setTimeout(function() {
	phantom.exit(1);
	}, 9999);
	      }
}
else
phantom.exit();
