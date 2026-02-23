const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/locales/en.json'), 'utf8'));
const es = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/locales/es.json'), 'utf8'));

function getKeys(obj, prefix = '') {
    return Object.keys(obj).reduce((res, el) => {
        if (Array.isArray(obj[el])) {
            return res;
        } else if (typeof obj[el] === 'object' && obj[el] !== null) {
            return [...res, ...getKeys(obj[el], prefix + el + '.')];
        }
        return [...res, prefix + el];
    }, []);
}

const enKeys = getKeys(en);
const esKeys = getKeys(es);

const missingInEs = enKeys.filter(k => !esKeys.includes(k));
const missingInEn = esKeys.filter(k => !enKeys.includes(k));

console.log('Missing in es.json:', missingInEs);
console.log('Missing in en.json:', missingInEn);
