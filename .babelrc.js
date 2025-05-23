/* eslint-disable prettier/prettier */
module.exports = {
  "presets": ['next/babel', '@babel/preset-typescript'],
  "plugins": [
    [
      'styled-components',
      {
        "ssr": true,
        "displayName": true,
      },
    ],
  ],
  "env": {
    "test": {
      "plugins": [
        [
          'styled-components',
          {
            "ssr": false,
            "displayName": false,
          },
        ],
      ],
    },
  },
};
