const CleanCSS = require('clean-css');
const fs = require('fs-extra');
const ASSETS = 'assets';
const CSS = 'main.css';
const DIST = 'dist';
const INDEX = 'index.html';
const SRC = 'src';


// Removes the old dist directory and starts fresh
fs.removeSync(DIST);
fs.mkdirSync(DIST);

// Copies HTML & CSS
fs.copySync(`./${SRC}/${INDEX}`, `./${DIST}/${INDEX}`);
fs.readFile(`./${SRC}/${CSS}`, 'UTF8').then(content => {
	let output = new CleanCSS().minify(content);
	fs.writeFile(`./${DIST}/${CSS}`, output.styles); 
});

// Copies all assets
fs.copySync(`./${SRC}/${ASSETS}`, `./${DIST}/${ASSETS}`);
