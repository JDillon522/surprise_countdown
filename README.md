# surprise_countdown

# Actually Read Me

### HTML
Do all your actual HTML work in the `/views/index.hbs` file.

### Styles
Do your style work in `/public/stylesheets/style.sass`

### JS
Do your script magic in `/publis/javascripts/index.js`

### Other
If you add any images or whatever put them in the `/public/images` dir. To reference them in the HTML template, the path will be `/images/imageName.png`.

Feel free to look at all the other files but dont worry about touching them.

### TO RUN
0) Clone the repo and `cd` into it.
1) From the command line run:
- `nvm --version`
- If you get a version number to to step 3. Else...
2) Run the following commands in order:
- `touch ~/.bash_profile`
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
- `nvm --version`
- You should have a version now. If not, see me and cry for help.
- `nvm install 6.9.3 && nvm alias lts 6.9.3`
- `nvm use lts`
- Whenever you open a new shell tab or window you'll have to run `nvm use lts` in order to use all the node.js goodies installed. You'll learn more on this later but NPM (Node Package Manager) will be a big part of your life.
3) Install [Nodemon](https://github.com/remy/nodemon)
- `npm install -g nodemon`
3) Run:
- `npm install`
- After thats done:
- `nodemon start`
