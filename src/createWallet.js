const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

const network = bitcoin.networks.testnet;

const path = "m/49'/1'/0'/0/0";

let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

let root = bip32.fromSeed(seed, network);

let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcadress = bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;


console.log('address:', btcadress);
console.log('private key:', account.toWIF());
console.log('seed:', mnemonic);