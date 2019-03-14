// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method,i,newPresetArray) => {
    if(method !== 'GET' &&  method !== 'PUT')return [400,[]];
    if(method === 'GET') return [200,presets[i]];
    presets[i] = newPresetArray;
    return[200,newPresetArray]

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
