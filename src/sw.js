//https://web.dev/codelab-service-workers/
//https://serviceworke.rs/
//https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html
//https://web.dev/cache-api-quick-guide/
//https://web.dev/offline-fallback-page/

//https://web.dev/customize-install/

//pristupa se preko ove adrese http://localhost:8080/puzzles


self.addEventListener('install', (event) => {
  console.log('Inside the install handler:', event);
  console.log('Inside install block; check if network access is activated and storage is avalible');

});

self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);
  console.log('Inside actiavate block');
});

self.addEventListener(fetch, (event) => {
  console.log('Inside the fetch handler:', event);
  console.log('Inside fetch block; store in storage; store every resource in storage - offline avaliblility');

});