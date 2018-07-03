<a name="вручную_комманды"></a>
### Как подключить вручную

Чтобы подключить `md-bundler` в ваш проект, воспользуйтесь командами.
```javascript
const Bundlemd = require('./build/bundle');
```

Для передачи настроек для создания бандла используйте массив из 3-х элементов.Описание элементов массива описаны [тут](#публичное_api)
```javascript
const newBundleConfig = [
  './data/',
  'bundle.md',
  filesListOrder = [
    '1.md',
    '2.md',
    '3.md'
  ]
];
```

Передайте сборщику бандла вашу конфигурацию.
```javascript
const bundle = new Bundlemd(newBundleConfig);
```

Вызовите метод `.genBundle()` для сборки бандла.
```javascript
bundle.genBundle();
```
