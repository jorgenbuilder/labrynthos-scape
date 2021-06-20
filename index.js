const r = require('request-promise');
const cheerio = require('cheerio');
const host = 'https://labyrinthos.co';

run();

async function run () {
    const links = await getAllLinks();
    let cardData = [];
    for (link of links) {
        cardData.push(await getCardData(link));
    }
    console.log(cardData);
}

async function getAllLinks () {
    const html = await r(`${host}/blogs/tarot-card-meanings-list`).catch(console.error);
    const linkEls = cheerio.load(html)('.grid__item h3 a');
    let links = [];
    // console.log(`Found ${linkEls.length} links to tarot cards pages.`);
    for (let link of linkEls) {
        links.push(link.attribs.href);
    }
    return links;
}

async function getCardData (link) {
    const html = await r(`${host}${link}`).catch(console.error);
    const $ = cheerio.load(html);

    $('meta').remove();
    $('blockquote').remove();

    $('div').each((i, el) => {
        if (!$(el).attr('class') && !$(el).attr('id')) {
            $(el).after($(el).children());
            $(el).remove();
        }
    });

    $('p').each((i, el) => {
        let next = $(el).next();
        while (next && next[0] && next[0].name === 'p') {
            const text = $(el).text() + '\n\n' + $(next).text();
            $(el).text(text);
            $(next).remove();
            next = $(el).next();
        }
    });
    
    const name = $($('h1')[1]).text().split(' Keywords')[0];
    const description = $('table + img + h1 + p').text();
    const keywordsGeneralUpright = $($('table tr:nth-of-type(2) td:nth-of-type(1)')[0]).text().split(', ');
    const keywordsGeneralReversed = $($('table tr:nth-of-type(2) td:nth-of-type(2)')[0]).text().split(', ');
    const keywordsLoveUpright = $($('table tr:nth-of-type(2) td:nth-of-type(1)')[1]).text().split(', ');
    const keywordsCareerUpright = $($('table tr:nth-of-type(2) td:nth-of-type(2)')[1]).text().split(', ');
    const keywordsLoveReversed = $($('table tr:nth-of-type(2) td:nth-of-type(1)')[2]).text().split(', ');
    const keywordsCareerReversed = $($('table tr:nth-of-type(2) td:nth-of-type(2)')[2]).text().split(', ');
    const meaningUpright = $('.grid.cta.app + h1 + p').text();
    const meaningReversed = $('#rev + p').text();
    const meaningLoveUpright = $('#up + p + table + h2 + p').text();
    const meaningLoveReversed = $('#rev + p + table + h2 + p').text();
    const meaningCareerUpright = $('#up + p + table + h2 + p + h2 + p').text();
    const meaningCareerReversed = $('#rev + p + table + h2 + p + h2 + p').text();
    // console.log(
    //     '\x1b[2m', 'Name:', '\x1b[0m', name, '\n',
    //     '\x1b[2m', 'Description:', '\x1b[0m', description, '\n',
    //     '\x1b[2m', 'Upright Keywords:', '\x1b[0m', keywordsGeneralUpright.join(', '), '\n',
    //     '\x1b[2m', 'Reversed Keywords:', '\x1b[0m', keywordsGeneralReversed.join(', '), '\n',
    //     '\x1b[2m', 'Love Upright Keywords:', '\x1b[0m', keywordsLoveUpright.join(', '), '\n',
    //     '\x1b[2m', 'Love Reversed Keywords:', '\x1b[0m', keywordsLoveReversed.join(', '), '\n',
    //     '\x1b[2m', 'Career Upright Keywords:', '\x1b[0m', keywordsCareerUpright.join(', '), '\n',
    //     '\x1b[2m', 'Career Reversed Keywords:', '\x1b[0m', keywordsCareerReversed.join(', '), '\n',
    //     '\x1b[2m', 'Meaning Upright:', '\x1b[0m', meaningUpright, '\n',
    //     '\x1b[2m', 'Meaning Reversed:', '\x1b[0m', meaningReversed, '\n',
    //     '\x1b[2m', 'Meaning Love Upright:', '\x1b[0m', meaningLoveUpright, '\n',
    //     '\x1b[2m', 'Meaning Love Reversed:', '\x1b[0m', meaningLoveReversed, '\n',
    //     '\x1b[2m', 'Meaning Career Upright:', '\x1b[0m', meaningCareerUpright, '\n',
    //     '\x1b[2m', 'Meaning Career Reversed:', '\x1b[0m', meaningCareerReversed, '\n',
    // );
    const obj = {
        name,
        description,
        keywordsGeneralUpright,
        keywordsGeneralReversed,
        keywordsLoveUpright,
        keywordsLoveReversed,
        keywordsCareerUpright,
        keywordsCareerReversed,
        meaningUpright,
        meaningReversed,
        meaningLoveUpright,
        meaningLoveReversed,
        meaningCareerUpright,
        meaningCareerReversed,
    };
    for (const [k, v] in obj) {
        if (v === '') {
            throw new Error(`${k} for card ${name} is blank.`)
        }
    }
    return obj;
}