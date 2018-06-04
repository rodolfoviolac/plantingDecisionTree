# Planting Decision API 

[![Build Status](https://travis-ci.org/rodolfoviolac/plantingDecisionTree.svg?branch=master)](https://travis-ci.org/rodolfoviolac/plantingDecisionTree)
[![Maintainability](https://api.codeclimate.com/v1/badges/dbe6a39c5a2e2b18166c/maintainability)](https://codeclimate.com/github/rodolfoviolac/plantingDecisionTree/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dbe6a39c5a2e2b18166c/test_coverage)](https://codeclimate.com/github/rodolfoviolac/plantingDecisionTree/test_coverage)

This is a RestFull API made in NODE.JS design to response all questions about:  When is a good time to planting.


This project was developed to cover the needs for the development of a software analysis plantation for the subject of Software Engineering at UFRGS.

# Features:

  - Predict Planting

# Routes:
### [POST] /predict:

Input:
```javascript
{
    "previsao": "Sol",      // Options: String "Sol", "Chuva" or "Nublado"
    "climaAtual": "Sol",    // Options: String "Sol", "Chuva" or "Nublado"
    "temperatura": "25",    // Options: Number +-
    "ph": "3",              // Options: Number 0-14
    "luminosidade": "22",   // Options: Number 0-24
    "umidade": "55",        // Options: Number 0-100
    "pluviometrico": "0"    // Options: Number 0-100
}
```
Return:
```javascript
{
    "resultado": "73" // Options: Number 0-100
}
```    

# Responses Codes:
##### [200]: OK
##### [400]: Bad Request


### Development:

Open your favorite Terminal and run these commands.

`$ git clone`

`$ npm install`

`$ npm start`

Once done, the API will be listening on port 3000

### Developers:
##### [Rodolfo Viola](https://github.com/rodolfoviolac)