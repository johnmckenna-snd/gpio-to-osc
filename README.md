# gpio to osc

A simple app to send osc when a contact is open or closed. Right now, the directions on the website show how to use this with [Qlab](https://qlab.app/). The docker-compose will serve a website via nginx for simple configuration. There are no fancy things with this currently, but I'd love to add more stuff as time goes on!

## tested systems

- odroid C4 to Qlab

## how the heck do i use this thing?

Firstly, this thing works on Linux, if you're having problems make sure you are using `root` privileges. Like really, it'll run fine in the container, but as soon as the server tries to open the gpio folder it'll poop itself.

You may have to adjust some environment variables for the specific platform/gpio configuration you have. I can't really offer too much advice here as every computer is slightly different. Hopefully, I made enough env variables, if not, yell at me via pull request.

### run it

There's a docker-compose file in this directory to run the reverse-proxy, website, and server. The website will be served from port 80 on whatever the device IP is (e.g. `http://10.0.0.10/`).

1. Fire it up!

```bash
$ sudo docker-compose -f prod-compose.yml build --no-cache
$ sudo docker-compose -f prod-compose.yml up
```

2. Go to the config webpage

3. Follow the instructions to setup for Qlab or free-ball it to your hearts content.

### develop it

Do you have some neato feature you want or did I mess something up? It requires at Node v16+. Additionally, please use the linter using `npm run lint`. There's also likely a linting plugin in your editor.

```bash
// server
$ cd server && npm i && npm run dev

// website
$ cd website && npm i && REACT_APP_API_URL=http://localhost:4000 npm start
```

