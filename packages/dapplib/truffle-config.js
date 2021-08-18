require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net provide hunt hidden swing skill'; 
let testAccounts = [
"0x09144e08a005663ffa07031a0ce3f9df6013e2769a52e56a7dc658448cc0cbf6",
"0x9eeadf130b25bc0e0120388dcce4323432b2d9ac5d1f73871b4eabfda46c0ba3",
"0x883189cbac990b926d176264c3b6691ca127e8fc300090b9a160d306a8ced852",
"0xb6cd6bd94cc65501da8c59d9018de5393fd185868ca94adc648b4bed75c0367d",
"0xbe68ac35c0a2ba6402140de1d27700f1faea211892b6b19899f7a14dca2b478a",
"0xcfe91e5aa9c0525b7e66cb11e29f6a7368685c081f89598e74b209529a5252bf",
"0x6ede4dd8db7b3f38e1e8fed9c9c64dc4a343e2086913e9afd858194f70f5d86e",
"0xac44bc635b423de5a9908dbae11024c216eb08999b61900355bdb1860f87ca7c",
"0x8ab10196abd21e8d05eb9250ca8186a8e6f1eb35fce134d0e3e62c0a5e6a803d",
"0x9e8425ba17ee14e983577cb7ed8563703773fc206d955e3c2d66f873bf60c727"
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

