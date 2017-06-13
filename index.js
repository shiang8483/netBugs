'use strict'

let cheerio = require('cheerio');
let https = require('https');

//大主宰
let url = 'https://tw.hjwzw.com/Book/Chapter/33644';

https.get(url, (res) => {
    res.setEncoding('utf-8');
    let chunkData;;
    res.on('data', (data) => {
        chunkData += data;
    });

    res.on('end', () => {
        let $ = cheerio.load(chunkData);
        let titles = [];
        $('#tbchapterlist tr td a').each((index, ele) => {           
            titles.push($(ele).text());
        });
        console.log(titles);
    });
});