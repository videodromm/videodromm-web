# videodromm-web
Assets library browser 

Made with nodejs, reactjs. 
Based on this article: https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

####Setup

######Setup nodejs 7

On Linux

``` sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

If needed, compile from the source:

``` sh
wget http://nodejs.org/dist/node-latest.tar.gz 
tar -xzf node-latest.tar.gz
cd node-7xx
./configure
make
sudo make install
```

######Git workflow:
Fork and clone your repo into your home folder.

``` sh
git clone https://github.com/videodromm/videodromm-web (replace videodromm by your name)
cd videodromm-web
npm install -g webpack (as root)
npm install
npm start
```

######Contribute
Code, than commit and push to your fork then do a pull request.

######Roadmap
- [ ] Websocket client for netdromm server https://github.com/videodromm/netdromm
- [ ] Authentication (on the server, passport? )
- [ ] Library of shaders (React)
- [ ] Library of images (jpg/png) (React)
- [ ] Build a React UI to control the remote clients via netdromm websocket server
- [ ] Reactify the glsleditor 
