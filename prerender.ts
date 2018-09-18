import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { readFileSync, writeFileSync } from 'fs';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';

const { AppServerModuleNgFactory } = require('./dist/universal-hackathon-server/main');
const indexHtmlDev = readFileSync(__dirname + '/src/index.html', 'utf-8').toString();

enableProdMode();

export const render = (url: string) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: indexHtmlDev,
    url
  })
    .then(html => {
      console.log(`Pre-rendering successful, saving ${url}`);
      writeFileSync(`./static/${url}`, html);
    })
    .catch(error => console.error('Error occurred:', error));
};

render(`${process.argv[3]}.html`);
