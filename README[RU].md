Before running tests for cli add rights the performing file - ex: chmod 755 index.js.

В проекте стараются поддерживать стиль по написанию кода от [AirBnb](docs/airBnb/). На его и настроено линтерование кода.

Для написания коментариев для документации с помощью  вы можете воспользоваться информацией [отсюда](docs/jsDoc/guide/)



const BundleMd = require('node-md-bundler');
const newBundleConfig = [
  './data/',
  'bundle.md',
  filesListOrder = [
    '1.md',
    '2.md',
    '3.md'
  ]
];
const bundle = new BundleMd(newBundleConfig);
bundle.genBundle();
