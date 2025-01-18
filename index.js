const QRCode = require('qrcode');
const JsBarcode = require('jsbarcode');
const { createCanvas } = require('canvas');

const COLORS = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    green: '#008000',
    blue: '#0000FF',
    yellow: '#FFFF00',
    cyan: '#00FFFF',
    magenta: '#FF00FF',
    orange: '#FFA500',
    purple: '#800080',
    pink: '#FFC0CB',
    brown: '#A52A2A',
    grey: '#808080',
    lime: '#00FF00',
    indigo: '#4B0082',
};

class BarcodeQRGenerator {
    static async generateQRCode(data, options = {}) {
        try {
            const qrCode = await QRCode.toDataURL(data);
            return qrCode;
        } catch (error) {
            throw new Error(`Error generating QR Code: ${error.message}`);
        }
    }    

    static generateBarcode(data, options = {}) {
        try {
            const canvas = createCanvas();
            const defaultOptions = {
                format: 'CODE128',
                width: 2,
                height: 100,
                displayValue: true,
                lineColor: COLORS.black, // default to black
            };

            const { color } = options;
            const config = {
                ...defaultOptions,
                lineColor: COLORS[color] || COLORS.black, // default to black if no valid color is provided
                ...options,
            };

            JsBarcode(canvas, data, config);
            return canvas.toDataURL();
        } catch (error) {
            throw new Error(`Error generating Barcode: ${error.message}`);
        }
    }
}

module.exports = BarcodeQRGenerator;