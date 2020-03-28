(()=>{
	// REGISTER SERVICE WORKER
	if("serviceWorker" in navigator){
		window.addEventListener('load',()=>{
			navigator.serviceWorker.register('sw.js').then((registration) => {
				console.log('Service worker registered.',registration);
			},(err)=>{
				console.log(err);
			});
		});
	}
	else{
		alert('No service worker support in this browser');
	}

	// BACKGROUND SYNC FOR OFFLINE APPS
	
})();



