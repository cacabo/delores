module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [
      1, { "extensions": [ ".js", ".jsx" ] }
    ],
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
        "some": [ "nesting", "id" ]
      },
      "allowChildren": false
    }]
  }
};
