#!/usr/bin/env node

// Get the 'posting' WIF from a given username and password

var args = process.argv.slice(2)

if (args.length < 2) {
  process.stderr.write('usage: npm run wif $username $password\n')
  process.exit()
}

const TESTNET = {
  STEEMD_URL: 'http://testnet.steem.vc',
  CHAIN_PREFIX: 'STX',
  CHAIN_ID: '79276aea5d4877d9a25892eaa01b0adf019d3e5cb12a97478df3298ccdd01673'
}

var dotenv = require('dotenv')
var steem = require('@steemit/steem-js')

dotenv.config()

steem.config.set('address_prefix', process.env.CHAIN_PREFIX || TESTNET.CHAIN_PREFIX)
steem.config.set('chain_id', process.env.CHAIN_ID || TESTNET.CHAIN_ID)

steem.api.setOptions({ url: process.env.STEEMD_URL || TESTNET.STEEMD_URL })

var wif = steem.auth.toWif(args[0], args[1], 'posting')

process.stdout.write(wif)
