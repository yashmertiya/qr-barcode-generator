
# Barcode and QR Code Generator

This package allows you to generate barcodes and QR codes with custom styling, including support for multiple colors for barcodes. By default, the QR code is black and white, but you can easily customize the colors of the barcode lines.

## Installation

To install this package, use npm:

```bash
npm install qr-barcode-generator
```

## Usage

### 1. Generating a QR Code

To generate a QR code, simply call the `generateQRCode` method, passing in the data you want to encode.

```javascript
const BarcodeQRGenerator = require('qr-barcode-generator');

// Generate QR Code
BarcodeQRGenerator.generateQRCode('Hello World!')
    .then((qrCode) => {
        console.log("QR Code Base64 String: ", qrCode);
    })
    .catch(console.error);
```

By default, the QR code is black on a white background.

### 2. Generating a Barcode

To generate a barcode, call the `generateBarcode` method, passing in the data and optional configuration.

```javascript
const BarcodeQRGenerator = require('qr-barcode-generator');

// Generate Barcode with custom color
const barcode = BarcodeQRGenerator.generateBarcode('123456789', { color: 'blue' });
console.log("Barcode Base64 String:", barcode);
```

The `generateBarcode` function accepts the following optional settings:

- `color`: Customize the line color of the barcode (default: `black`).
  - Valid colors: `black`, `white`, `red`, `green`, `blue`, `yellow`, `cyan`, `magenta`, `orange`, `purple`, `pink`, `brown`, `grey`, `lime`, `indigo`.

### Available Barcode Colors

You can choose from the following colors for the barcode lines:

- `black`: `#000000`
- `white`: `#FFFFFF`
- `red`: `#FF0000`
- `green`: `#008000`
- `blue`: `#0000FF`
- `yellow`: `#FFFF00`
- `cyan`: `#00FFFF`
- `magenta`: `#FF00FF`
- `orange`: `#FFA500`
- `purple`: `#800080`
- `pink`: `#FFC0CB`
- `brown`: `#A52A2A`
- `grey`: `#808080`
- `lime`: `#00FF00`
- `indigo`: `#4B0082`


#### Generating a Barcode with Color Customization

To generate a barcode with custom color (using one of the predefined color names):

```javascript
const barcode = BarcodeQRGenerator.generateBarcode('123456789', { color: 'blue' });
console.log("Barcode with Blue Color:", barcode);
```

### 3. Example of Full Usage

```javascript
const BarcodeQRGenerator = require('qr-barcode-generator');

// Generate QR Code
BarcodeQRGenerator.generateQRCode('Hello World!').then((qrCode) => {
    console.log("QR Code with Custom Colors:", qrCode);
}).catch(console.error);

// Generate Barcode with custom color
const barcode = BarcodeQRGenerator.generateBarcode('123456789', { color: 'blue' });
console.log("Barcode with Blue Color:", barcode);
```

## License

MIT License. See LICENSE file for more information.

---

### Notes:
- The barcode generation allows for complete color customization from a list of predefined colors. If no color is provided, the default will be black.
