const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  extends: [
    'airbnb-typescript/base',
  ],
  plugins: [
    'import',
    'optimize-regex',
  ],

  rules: {
    // для текущего проекта
    '@typescript-eslint/camelcase': OFF,
    'react/prop-types': OFF,
    'no-underscore-dangle': [ERROR, { 'allowAfterThis': true }],
    'func-names': [ERROR, 'as-needed', { 'generators': 'never' }],

    // экспорт по дефолту, отдаём преимущество именованному экспорту
    'import/prefer-default-export': OFF,
    // оператор всегда впереди при переносе выражений на новую строку
    'operator-linebreak': [ERROR, 'before'],
    // отключена обязательная привязка label к полю ввода
    'jsx-a11y/label-has-associated-control': OFF,
    // перенос строки, отключен т.к. в windows и unix системах различное поведение
    'linebreak-style': OFF,
    // return в функции, отключен из-за конфликтов в switch/case
    'consistent-return': OFF,
    // не всегда методы класса должны использовать логику с this
    'class-methods-use-this': OFF,
    // Переопределение входящих параметров
    'no-param-reassign': [ERROR, { props: false }],
    // минимальная длина имен (по-умолчанию от 2 символов)
    'id-length': [ERROR, { exceptions: ['_', 'i', 'j', 'x', 'y', 'z', 'a', 'b', 'e', 'k', 'v'] }],
    // базовый отступ 2 пробела, у case 2 пробела от switch
    'indent': [ERROR, 2, {
      SwitchCase: 1,
      MemberExpression: 1,
      ignoredNodes: ['JSXElement'],
    }],
    // длина строки
    'max-len': [WARN, { code: 150, 'ignoreStrings': true }],
    // импорт зависимостей
    'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],
    // кавычки вокруг ключей объектов, единообразно с остальными ключами объекта
    'quote-props': [ERROR, 'consistent'],
    // запрет на использование alert
    'no-alert': ERROR,
    // обязательное использование расширений при импорте файлов (кроме js)
    'import/extensions': [ERROR, {
      'ts': 'never',
      'tsx': 'never',
      'svg': 'always',
      'png': 'always',
      'json': 'always'
    }],
    // ++ только для for-цикла
    'no-plusplus': [ERROR, { 'allowForLoopAfterthoughts': true }],
    // можно писать с большой буквы только имена классов (конструкторов)
    'new-cap': [ERROR, {
      'capIsNewExceptions': [
        'SortableContainer',
        'SortableElement',
        'List',
        'Map',
        'Set',
      ],
    }],
    // расположение скобок у объектов
    'object-curly-newline': [ERROR, {
      'ObjectPattern': { 'consistent': true },
      'ObjectExpression': { 'consistent': true },
    }],
    // порядок импортов
    'import/order': [
      ERROR,
      {
        alphabetize: { order: 'asc', caseInsensitive: false },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'unknown'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: [''],
        pathGroups: [
          {
            pattern: '+(express)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '+(common|constants|hooks|utils)/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '+(models)/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
  overrides: [],
};
