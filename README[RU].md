Before running tests for cli add rights the performing file - ex: chmod 755 index.js.

В проекте стараются поддерживать стиль по написанию кода от [AirBnb](docs/airBnb/). На его и настроено линтерование кода.

Для написания коментариев для документации с помощью  вы можете воспользоваться информацией [отсюда](docs/jsDoc/guide/)



const fs = require('fs'),
      cl = require('node-cl-log');

const BundleMd = require('./build/bundle');
const newBundleConfig = [
  './data/',
  'bundle.Md',
  filesListOrder = [
    '1.md',
    '2.md',
    '3.md'
  ]
];
const bundle = new BundleMd(newBundleConfig);
bundle.genBundle();
