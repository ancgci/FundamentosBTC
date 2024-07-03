# Projeto de Carteiras Bitcoin na Testnet

![GitHub repo size](https://img.shields.io/github/repo-size/ancgci/FundamentosBTC)
![GitHub contributors](https://img.shields.io/github/contributors/ancgci/FundamentosBTC)
![GitHub stars](https://img.shields.io/github/stars/ancgci/FundamentosBTC?style=social)
![GitHub forks](https://img.shields.io/github/forks/ancgci/FundamentosBTC?style=social)
![GitHub issues](https://img.shields.io/github/issues/ancgci/FundamentosBTC)
![GitHub license](https://img.shields.io/github/license/ancgci/FundamentosBTC)

## Descrição

Este projeto foi desenvolvido durante o bootcamp da DIO para Desenvolvedor Blockchain. Utilizamos a rede testnet do Bitcoin para criar e gerenciar carteiras, realizar transações e explorar os conceitos de blockchain e criptomoedas. Foi utilizado o software Electrum para a criação e gerenciamento das carteiras no computador.

## Ferramentas Utilizadas

- **Electrum**: Software de carteira Bitcoin que permite a criação e gestão de endereços, bem como a realização de transações.
- **Bitcoin Testnet**: Rede de teste do Bitcoin que permite a realização de transações sem a necessidade de usar moedas reais.

## Carteiras Criadas

Durante o projeto, criamos duas carteiras na rede testnet do Bitcoin utilizando o script `createWallet.js` contido na pasta `src`.

### Carteira Test 1

- **Endereço**: `muUwNvfZyrgTzLNGkmtuA8T6XfxpUR6AVn`
- **Chave Privada**: `cVymbbWqZjKXnwEa2zVDUd5XCMZEEFonpzP9nnxdNvHDX4bK6CoS`
- **Seed**: `true basket multiply raw charge aerobic canoe spy ill naive pair label`

### Carteira Test 2

- **Endereço**: `mxJuuWx4JSbbpABfLo2Fqcw8dfZMTQBH4p`
- **Chave Privada**: `cQRkNkLNtiD8aDYPULZ7BaKpjQZjVQUAMPv2hgmEjpqy8muaNH6i`
- **Seed**: `benefit head fiber arm honey again orbit harbor hat comfort raccoon cart`

## Transações Realizadas

Realizamos uma transação de envio de bitcoins entre as duas carteiras criadas:

- **De**: `muUwNvfZyrgTzLNGkmtuA8T6XfxpUR6AVn`
- **Para**: `mxJuuWx4JSbbpABfLo2Fqcw8dfZMTQBH4p`

## Passos para Configuração

1. **Instalação do Electrum**:
   - Baixe e instale o Electrum do [site oficial](https://electrum.org/#download).
   - Siga as instruções para instalação no seu sistema operacional.

2. **Configuração da Rede Testnet no Electrum**:
   - Clique com o botão direito no ícone do Electrum e selecione "Propriedades".
   - No campo "Destino", adicione ` --testnet` ao final do caminho. Deve ficar algo como `C:\Caminho\Para\Electrum\electrum.exe --testnet`.

3. **Criação das Carteiras**:
   - Execute o script `createWallet.js` contido na pasta `src` para gerar as carteiras Testnet.
   - Anote o endereço, a chave privada e a seed das carteiras criadas.

4. **Importação de Carteiras no Electrum**:
   - Abra o Electrum configurado para a Testnet.
   - Importe uma das carteiras Testnet abastecidas anteriormente com a faucet de Bitcoin Testnet.

5. **Realização de Transações**:
   - Utilize a interface do Electrum para realizar transações entre as carteiras criadas.
   - Verifique o status das transações na rede Testnet.

## Conclusão

Este projeto proporcionou uma experiência prática com a criação e gestão de carteiras Bitcoin, bem como a realização de transações na rede testnet. Foi uma excelente oportunidade para aprender os fundamentos do blockchain e das criptomoedas em um ambiente controlado e sem riscos financeiros.

## Licença

Este projeto é licenciado sob os termos da MIT License.

