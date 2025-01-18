const BarcodeQRGenerator = require('./index');

// Generate QR Code with custom color (default colors are black for dark and white for light)
BarcodeQRGenerator.generateQRCode('Hello World!').then((qrCode) => {
    console.log("Q  R:",qrCode);
}).catch(console.error);

// Generate Barcode with custom color
const barcode = BarcodeQRGenerator.generateBarcode('123456789', { color: 'blue' });
console.log("B A R C O D E:",barcode);