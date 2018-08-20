const {Base64} = require('js-base64');

const input = document.getElementById('input');
const output = document.getElementById('output');
const encode = document.getElementById('encode');
const decode = document.getElementById('decode');

encode.onclick = () => {
  output.value = Base64.encodeURI(input.value);
};

decode.onclick = () => {
  output.value = Base64.decode(input.value);
}

