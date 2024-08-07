document.addEventListener('DOMContentLoaded', (event) => {
    console.log('El DOM ha sido completamente cargado e interpretado');
    alert('¡Hola desde JavaScript!');
});


/* 
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/credentials')
        .then(response => response.json())
        .then(data => {
            console.log('API Key:', data.apiKey);
            console.log('API Secret:', data.apiSecret);
        })
        .catch(error => console.error('Error:', error));
});*/


var mp = new MercadoPago('APP_USR-6332e380-8dc7-454b-a989-2234918334a4');
var bricksBuilder = mp.bricks();



mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "221272846-0691ce90-dce2-4e11-922b-93b678921f4d",
    },
    customization: {
        texts: {
            valueProp: 'smart_option',
        },
    },
});