// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definir a Rede
// Bitcoin  = Rede Principal
// TestNET = Rede Teste
const network = bitcoin.networks.testnet;

// Função assíncrona para criar a carteira
async function createWallet() {
  // Criando a mnemonic para a seed (carteira)
  const path = `m/49'/1'/0'/0`;

  let mnemonic = bip39.generateMnemonic();
  const seed = await bip39.mnemonicToSeed(mnemonic); // Aguarda a Promise resolver

  // Criando a Raiz da Carteira HD
  let root = bip32.fromSeed(seed, network);

  // Criando uma Conta - par pvt-pub keys
  let account = root.derivePath(path);

  let btcAddress = bitcoin.payments.p2pkh({
    pubkey: account.publicKey, // Corrigido para 'pubkey' em vez de 'pubKey'
    network: network,
  }).address;

  console.log('Carteira Gerada com sucesso!');
  console.log('Endereço: ', btcAddress);
  console.log('Chave Privada: ', account.toWIF());
  console.log('Seed', mnemonic);
}

// Chama a função para criar a carteira
createWallet();

