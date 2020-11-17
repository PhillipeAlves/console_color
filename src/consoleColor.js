const { config } = require("./config");

const getSetting = (input) => {
  const [type, property] = input.split("-");
  return config[type][property];
};

const CC = (...args) => {
  const [text, ...settings] = args;
  const formatting = settings.reduce(
    (results, setting) => (results += getSetting(setting)),
    []
  );
  return [formatting, text, config.G.reset].join("");
};

module.exports = { CC };
