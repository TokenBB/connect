# Connect

Let's you run an instance of SteemConnect that's connected to a testnet.

NB: This is a work in progress

## Install

Make sure to copy `sample.env` to `.env` and to make the appropriate changes to
the file so the config fits your particular setup.

```
mkdir testnet-connect
cd testnet-connect
git clone https://github.com/TokenBB/connect.git .
npm install
docker-compose build
```

## Usage

```
docker-compose up
```

## Notes

This was tested on Ubuntu 18.04 with the latest version of Docker and Docker Compose.
