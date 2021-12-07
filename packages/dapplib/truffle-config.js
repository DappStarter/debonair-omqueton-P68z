require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remember unit imitate private fringe thank'; 
let testAccounts = [
"0x76d4dce352975b18514574b17a56471eafacebeae37cb6a2c38a8f4a73337597",
"0x89a1001498eac96f8125848d5f054aee35edba5b31d10ab36da78bdad98883bb",
"0x899d46925796e42b418167130a542ba98da43d2efa2f3a3c3dea6e86b36def19",
"0xb8e85703f0bb3a196631f8e2080919411423dd15b9e7d90b972ce0f9a55ff566",
"0x223f00057e9e1c82a799f66e6ef93e993e29fae19b9240fc09e4a2515b4e672b",
"0xefb94de0c3d252342699e633d9074047325c24bc62bec9337d86f04f771b961c",
"0x801b41a58cf563ec1131a1a0cfb78b0b8936e52565ab2e5d58b977bd34dfb497",
"0x8fc1a86c6452ae14632a25d28f09de4acc9ce148760bc482c7bf07ae73e32ed5",
"0xe00b1e2144ab4b850884121c287fbb8e1172848a9be59c686a922885b01ce226",
"0x85a0a95404fb47fe0250e8258497ce65eac8646a80fcb271c9a2cba087c6c0ff"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

