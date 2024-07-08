const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname
});


module.exports = [
  ...compat.config({
    env: { node: true },
    extends: ['prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      project: './tsconfig.json',
      sourceType: 'module'
    },
    ignorePatterns: [
      './node_modules/**',
      './public/**',
      './setupTests.js'
    ],
    plugins: [
      '@typescript-eslint',
      '@typescript-eslint/tslint',
      'prefer-arrow',
      'import',
      'jest'
    ],
    settings: {
      'import/parser': '@typescript-eslint/parser',
      'import/ignore': [
        './setupTests.js',
        'node_modules',
        '\\.(coffee|hbs|svg|json)$'
      ],
      'import/extensions': [
        '.js',
        '.mjs',
        '.jsx',
        '.ts',
        '.tsx',
        '.d.ts'
      ],
      propWrapperFunctions: [
        'forbidExtraProps',
        'exact',
        'Object.freeze'
      ],
      'import/core-modules': []
    },
    globals: {
      jest: true,
      __DEV__: true,
      __TEST__: true,
      __PROD__: true,
      __SSR__: true,
      __COVERAGE__: true,
      __NODE_ENV__: true,
      __WEBPACK_MODE__: true,
      __DEV_PATH__: true,
      WebsocketHandler: true,
      getAction: true
    },
    rules: {
      'import/extensions': [
        1,
        'always',
        {
          js: 'never',
          '.js': 'never',
          jsx: 'never',
          '.jsx': 'never',
          json: 'never',
          '.json': 'never',
          ts: 'never',
          '.ts': 'never',
          tsx: 'never',
          '.tsx': 'never',
          'd.ts': 'never',
          '.d.ts': 'never',
          mjs: 'never',
          '.mjs': 'never'
        }
      ],
      'import/no-named-as-default': [0],
      'linebreak-style': ['error', 'unix'],
      'no-restricted-imports': ['error', 'lodash'],
      'no-restricted-globals': [2, 'find'],
      'no-var': 'error',
      'no-shadow': [
        'error',
        {
          hoist: 'all'
        }
      ],
      'vars-on-top': [0],
      'consistent-return': [1],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'all',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^prevState|^prevProps|^nextProps|^nextState|^_'
        }
      ],
      'default-param-last': [0],
      'no-cond-assign': [1, 'always'],
      'default-case': [
        1,
        {
          commentPattern: '^no default$'
        }
      ],
      'no-use-before-define': 'off',
      'one-var-declaration-per-line': [1, 'always'],
      'no-confusing-arrow': [
        1,
        {
          allowParens: true
        }
      ],
      'arrow-body-style': 'off',
      'prefer-arrow-callback': [
        1,
        {
          allowNamedFunctions: false,
          allowUnboundThis: true
        }
      ],
      'no-case-declarations': [1],
      'newline-per-chained-call': 'off',
      'no-restricted-syntax': [
        1,
        {
          selector: 'ForInStatement',
          message:
              // eslint-disable-next-line max-len
              'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
        },
        {
          selector: 'ForOfStatement',
          message:
              // eslint-disable-next-line max-len
              'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
        }
      ],
      'guard-for-in': [1],
      'no-mixed-operators': [
        0,
        {
          groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['**', '+'],
            ['**', '-'],
            ['**', '*'],
            ['**', '/'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof']
          ],
          allowSamePrecedence: false
        }
      ],
      'no-continue': [1],
      'func-name-matching': [
        1,
        'always',
        {
          includeCommonJSModuleExports: false
        }
      ],
      'prefer-template': 'error',
      'no-useless-escape': [1],
      'new-parens': 'error',
      'class-methods-use-this': [
        1,
        {
          exceptMethods: [
            'render',
            'getInitialState',
            'getDefaultProps',
            'getChildContext',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
            'componentDidCatch',
            'getSnapshotBeforeUpdate'
          ]
        }
      ],
      'no-return-assign': [1, 'always'],
      'no-plusplus': [
        1,
        {
          allowForLoopAfterthoughts: true
        }
      ],
      'no-restricted-properties': [
        1,
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated'
        },
        {
          object: 'global',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead'
        },
        {
          object: 'self',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead'
        },
        {
          object: 'window',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead'
        },
        {
          object: 'global',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead'
        },
        {
          object: 'self',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead'
        },
        {
          object: 'window',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead'
        },
        {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.'
        },
        {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.'
        },
        {
          object: 'Math',
          property: 'pow',
          message: 'Use the exponentiation operator (**) instead.'
        }
      ],
      'prefer-promise-reject-errors': [
        1,
        {
          allowEmptyReject: false
        }
      ],
      'one-var': ['off', 'never'],
      'object-shorthand': 'off',
      'object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true
        }
      ],
      'max-len': [
        'error',
        {
          code: 120
        }
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true
        }
      ],
      'dot-location': [2, 'property'],
      'operator-linebreak': [
        2,
        'after',
        {
          overrides: {
            '>': 'before',
            '>=': 'before',
            '<': 'before',
            '<=': 'before',
            '||': 'before',
            '&&': 'before',
            '+': 'before',
            '-': 'before'
          }
        }
      ],
      'max-statements': [
        2,
        15,
        {
          ignoreTopLevelFunctions: true
        }
      ],
      'max-depth': [1, 2],
      complexity: [
        'error',
        {
          max: 15
        }
      ],
      'max-params': [1, 3],
      'max-nested-callbacks': [2, 3],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never'
        }
      ],
      semi: ['error', 'always'],
      'prefer-const': 'error',
      'no-param-reassign': [
        1,
        {
          props: false
        }
      ],
      'dot-notation': [
        'off',
        {
          allowKeywords: true,
          allowPattern: ''
        }
      ],
      'no-console': 'off',
      curly: ['error', 'multi-line'],
      'comma-dangle': [
        'error',
        {
          objects: 'never',
          arrays: 'never',
          functions: 'never'
        }
      ],
      'func-style': [
        2,
        'declaration',
        {
          allowArrowFunctions: true
        }
      ],
      'newline-after-var': [2, 'always'],
      'new-cap': [
        2,
        {
          capIsNewExceptions: ['When', 'Then', 'Given', 'Nothing', 'T', 'F'],
          newIsCap: false,
          capIsNew: false,
          properties: true
        }
      ],
      'no-unused-expressions': [
        2,
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: false
        }
      ],
      'no-underscore-dangle': [
        0,
        {
          allowAfterThis: true,
          allow: [
            '__REDUX_DEVTOOLS_EXTENSION__',
            '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
            '__DEV__',
            '__DEV_PATH__',
            '__NODE_ENV__',
            '__INITIAL_STATE__',
            '_exception',
            '__html'
          ]
        }
      ],
      'arrow-parens': ['off', 'as-needed'],
      'quote-props': ['error', 'as-needed'],
      'no-else-return': [
        'error',
        {
          allowElseIf: true
        }
      ],
      'import/no-unresolved': [
        2,
        {
          commonjs: true,
          amd: false,
          caseSensitive: true
        }
      ],
      'import/no-commonjs': [
        0,
        {
          allowPrimitiveModules: true
        }
      ],
      'import/named': [2],
      'import/namespace': [
        2,
        {
          allowComputed: true
        }
      ],
      'import/default': [2],
      'import/prefer-default-export': [1],
      'import/newline-after-import': [0],
      'import/unambiguous': [0],
      'import/no-webpack-loader-syntax': [1],
      'import/first': [1],
      'import/no-dynamic-require': [1],
      'import/no-deprecated': [1],
      'import/no-extraneous-dependencies': [
        0,
        {
          devDependencies: [
            'test/**',
            'tests/**',
            'spec/**',
            '**/__tests__/**',
            '**/__mocks__/**',
            'test.{js,jsx}',
            'test-*.{js,jsx}',
            '**/*{.,_}{test,spec}.{js,jsx}',
            '**/jest.config.js',
            '**/jest.setup.js',
            '**/vue.config.js',
            '**/webpack.config.js',
            '**/webpack.config.*.js',
            '**/rollup.config.js',
            '**/rollup.config.*.js',
            '**/gulpfile.js',
            '**/gulpfile.*.js',
            '**/Gruntfile{,.js}',
            '**/protractor.conf.js',
            '**/protractor.conf.*.js'
          ],
          optionalDependencies: false
        }
      ],
      'jest/no-disabled-tests': ['warn'],
      'jest/no-focused-tests': ['error'],
      'jest/no-identical-title': ['error'],
      'jest/valid-expect': ['error'],
      'no-multiple-empty-lines': 'error',
      strict: ['error', 'never'],
      'import/export': ['error'],
      'import/no-mutable-exports': ['error'],
      'import/no-nodejs-modules': ['off'],
      'import/imports-first': ['off'],
      'import/no-duplicates': ['error'],
      'import/no-namespace': ['off'],
      'import/order': 'error',
      'import/no-restricted-paths': ['off'],
      'import/max-dependencies': [
        'off',
        {
          max: 10
        }
      ],
      'import/no-absolute-path': ['error'],
      'import/no-internal-modules': 'off',
      'import/no-unassigned-import': [
        'error',
        {
          // eslint-disable-next-line max-len
          allow: ['**/*.css', '**/*.scss'] // this allows, for example: `import "meteor/meteorhacks:unblock"` and `import "./some-template.html"`
        }
      ],
      'import/no-named-default': ['error'],
      'import/no-anonymous-default-export': [
        'off',
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowLiteral: false,
          allowObject: false
        }
      ],
      'import/exports-last': ['off'],
      'import/group-exports': ['off'],
      'import/no-default-export': ['off'],
      'import/no-named-export': ['off'],
      'import/no-self-import': ['error'],
      'import/no-cycle': [
        'error',
        {
          maxDepth: 1
        }
      ],
      'import/no-useless-path-segments': ['error'],
      'import/dynamic-import-chunkname': [
        'off',
        {
          importFunctions: [],
          webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
        }
      ],
      'import/no-relative-parent-imports': ['off'],
      'import/no-unused-modules': [
        'off',
        {
          ignoreExports: [],
          missingExports: true,
          unusedExports: true
        }
      ],
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true
        }
      ],
      'constructor-super': ['error'],
      'generator-star-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'no-class-assign': ['error'],
      'no-const-assign': ['error'],
      'no-dupe-class-members': ['error'],
      'no-duplicate-imports': 'error',
      'no-new-symbol': ['error'],
      'no-this-before-super': ['error'],
      'no-useless-computed-key': ['error'],
      'no-useless-constructor': ['error'],
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false
        }
      ],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true
          },
          AssignmentExpression: {
            array: true,
            object: true
          }
        },
        {
          enforceForRenamedProperties: false
        }
      ],
      'prefer-numeric-literals': ['error'],
      'prefer-reflect': ['off'],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error'],
      'require-yield': ['error'],
      'rest-spread-spacing': ['error', 'never'],
      'sort-imports': [
        'off',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }
      ],
      'symbol-description': ['error'],
      'template-curly-spacing': ['error'],
      'yield-star-spacing': ['error', 'after'],
      'init-declarations': ['off'],
      'no-catch-shadow': ['off'],
      'no-delete-var': ['error'],
      'no-label-var': ['error'],
      'no-shadow-restricted-names': ['error'],
      'no-undef': ['error'],
      'no-undef-init': ['error'],
      'no-undefined': ['off'],
      'array-bracket-newline': ['off', 'consistent'],
      'array-element-newline': [
        'off',
        {
          multiline: true,
          minItems: 3
        }
      ],
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true
        }
      ],
      camelcase: 'error',
      'capitalized-comments': [
        'off',
        'never',
        {
          line: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true
          },
          block: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true
          }
        }
      ],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'comma-style': [
        'error',
        'last',
        {
          exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false
          }
        }
      ],
      'computed-property-spacing': ['error', 'never'],
      'consistent-this': ['off'],
      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],
      'func-names': ['warn'],
      'function-paren-newline': ['error', 'consistent'],
      'id-blacklist': ['error', 'any', 'string', 'Boolean', 'Undefined'],
      'id-length': ['off'],
      'id-match': 'error',
      'implicit-arrow-linebreak': ['error', 'beside'],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true
        }
      ],
      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
          overrides: {
            return: {
              after: true
            },
            throw: {
              after: true
            },
            case: {
              after: true
            }
          }
        }
      ],
      'line-comment-position': [
        'off',
        {
          position: 'above',
          ignorePattern: '',
          applyDefaultPatterns: true
        }
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true
        }
      ],
      'lines-around-comment': ['off'],
      'lines-around-directive': [
        'error',
        {
          before: 'always',
          after: 'always'
        }
      ],
      'max-lines': [
        'off',
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true
        }
      ],
      'max-lines-per-function': [
        'off',
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true
        }
      ],
      'max-statements-per-line': [
        'off',
        {
          max: 1
        }
      ],
      'multiline-comment-style': ['off', 'starred-block'],
      'multiline-ternary': ['off', 'never'],
      'newline-before-return': ['off'],
      'no-array-constructor': ['error'],
      'no-bitwise': ['error'],
      'no-inline-comments': ['off'],
      'no-lonely-if': ['error'],
      'no-mixed-spaces-and-tabs': ['error'],
      'no-multi-assign': ['error'],
      'no-negated-condition': ['off'],
      'no-nested-ternary': ['error'],
      'no-new-object': ['error'],
      'no-spaced-func': ['error'],
      'no-tabs': ['error'],
      'no-ternary': ['off'],
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false
        }
      ],
      'no-whitespace-before-property': ['error'],
      'nonblock-statement-body-position': [
        'error',
        'beside',
        {
          overrides: {}
        }
      ],
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
          allowMultiplePropertiesPerLine: false
        }
      ],
      'operator-assignment': ['error', 'always'],
      'padded-blocks': [
        'error',
        {
          blocks: 'never',
          classes: 'never',
          switches: 'never'
        }
      ],
      'padding-line-between-statements': [
        'off',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        }
      ],
      'prefer-object-spread': ['off'],
      'require-jsdoc': ['off'],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'semi-style': ['error', 'last'],
      'sort-keys': [
        'off',
        'asc',
        {
          caseSensitive: false,
          natural: true
        }
      ],
      'sort-vars': ['off'],
      'space-before-blocks': ['error'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': ['error'],
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
          overrides: {}
        }
      ],
      'spaced-comment': 'error',
      'switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      'template-tag-spacing': ['error', 'never'],
      'unicode-bom': ['error', 'never'],
      'wrap-regex': ['off'],
      'callback-return': ['off'],
      'global-require': ['error'],
      'handle-callback-err': ['off'],
      'no-buffer-constructor': ['error'],
      'no-mixed-requires': ['off', false],
      'no-new-require': ['error'],
      'no-path-concat': ['error'],
      'no-process-env': ['off'],
      'no-process-exit': ['off'],
      'no-restricted-modules': ['off'],
      'no-sync': ['off'],
      'for-direction': ['error'],
      'getter-return': [
        'error',
        {
          allowImplicit: true
        }
      ],
      'no-async-promise-executor': ['off'],
      'no-await-in-loop': ['error'],
      'no-compare-neg-zero': ['error'],
      'no-constant-condition': ['warn'],
      'no-control-regex': ['error'],
      'no-debugger': ['error'],
      'no-dupe-args': ['error'],
      'no-dupe-keys': ['error'],
      'no-duplicate-case': ['error'],
      'no-empty': ['error'],
      'no-empty-character-class': ['error'],
      'no-ex-assign': ['error'],
      'no-extra-boolean-cast': ['error'],
      'no-extra-parens': [
        'off',
        'all',
        {
          conditionalAssign: true,
          nestedBinaryExpressions: false,
          returnAssign: false,
          ignoreJSX: 'all',
          enforceForArrowConditionals: false
        }
      ],
      'no-extra-semi': ['error'],
      'no-func-assign': ['error'],
      'no-inner-declarations': ['error'],
      'no-invalid-regexp': ['error'],
      'no-irregular-whitespace': ['error'],
      'no-misleading-character-class': ['off'],
      'no-obj-calls': ['error'],
      'no-prototype-builtins': ['error'],
      'no-regex-spaces': ['error'],
      'no-sparse-arrays': ['error'],
      'no-template-curly-in-string': ['error'],
      'no-unexpected-multiline': ['error'],
      'no-unreachable': ['error'],
      'no-unsafe-finally': ['error'],
      'no-unsafe-negation': ['error'],
      'no-negated-in-lhs': ['off'],
      'require-atomic-updates': ['off'],
      'use-isnan': ['error'],
      'valid-jsdoc': ['off'],
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: true
        }
      ],
      'accessor-pairs': ['off'],
      'array-callback-return': [
        'error',
        {
          allowImplicit: true
        }
      ],
      'block-scoped-var': ['error'],
      eqeqeq: ['error', 'smart'],
      'max-classes-per-file': ['off', 1],
      'no-alert': ['warn'],
      'no-caller': ['error'],
      'no-div-regex': ['off'],
      'no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods']
        }
      ],
      'no-empty-pattern': ['error'],
      'no-eq-null': ['off'],
      'no-eval': 'error',
      'no-extend-native': ['error'],
      'no-extra-bind': ['error'],
      'no-extra-label': ['error'],
      'no-fallthrough': ['error'],
      'no-floating-decimal': ['error'],
      'no-global-assign': [
        'error',
        {
          exceptions: []
        }
      ],
      'no-native-reassign': ['off'],
      'no-implicit-coercion': [
        'off',
        {
          boolean: false,
          number: true,
          allow: []
        }
      ],
      'no-implicit-globals': ['off'],
      'no-implied-eval': ['error'],
      // "no-invalid-this": "error",
      'no-iterator': ['error'],
      'no-labels': [
        'error',
        {
          allowLoop: false,
          allowSwitch: false
        }
      ],
      'no-lone-blocks': ['error'],
      'no-loop-func': ['error'],
      'no-magic-numbers': [
        'off',
        {
          ignore: [],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false
        }
      ],
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false
        }
      ],
      'no-multi-str': ['error'],
      'no-new': ['error'],
      'no-new-func': ['error'],
      'no-new-wrappers': 'error',
      'no-octal': ['error'],
      'no-octal-escape': ['error'],
      'no-proto': ['error'],
      'no-redeclare': ['error'],
      'no-return-await': ['error'],
      'no-script-url': ['error'],
      'no-self-assign': [
        'error',
        {
          props: false
        }
      ],
      'no-self-compare': ['error'],
      'no-sequences': ['error'],
      'no-throw-literal': ['error'],
      'no-unmodified-loop-condition': ['off'],
      'no-unused-labels': ['error'],
      'no-useless-call': ['off'],
      'no-useless-catch': ['off'],
      'no-useless-concat': ['error'],
      'no-useless-return': ['error'],
      'no-void': ['error'],
      'no-warning-comments': [
        'off',
        {
          terms: ['todo', 'fixme', 'xxx'],
          location: 'start'
        }
      ],
      'no-with': ['error'],
      'prefer-named-capture-group': ['off'],
      radix: 'error',
      'require-await': ['off'],
      'require-unicode-regexp': ['off'],
      'wrap-iife': [
        'error',
        'outside',
        {
          functionPrototypeMethods: false
        }
      ],
      yoda: ['error'],
      // "@typescript-eslint/no-invalid-this": "error",
      // "@typescript-eslint/class-name-casing": "error",
      '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit'
        }
      ],
      '@typescript-eslint/indent': [
        'warn',
        2,
        {
          SwitchCase: 1,
          CallExpression: {
            arguments: 'first'
          },
          FunctionDeclaration: {
            parameters: 'first'
          },
          FunctionExpression: {
            parameters: 'first'
          }
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
          filter: { regex: '__', match: false }
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
          filter: { regex: '__', match: false },
          leadingUnderscore: 'allow'
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase', 'snake_case'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'property',
          format: ['camelCase', 'snake_case'],
          modifiers: ['private'],
          leadingUnderscore: 'require'
        },
        {
          selector: 'method',
          format: ['camelCase', 'snake_case'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'parameterProperty',
          format: ['camelCase', 'snake_case'],
          modifiers: ['private', 'protected', 'public', 'readonly'],
          leadingUnderscore: 'require'
        },
        {
          selector: 'memberLike',
          modifiers: ['private', 'protected'],
          format: ['camelCase', 'snake_case'],
          leadingUnderscore: 'require'
        },
        {
          selector: 'typeLike',
          format: ['PascalCase', 'snake_case']
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase', 'snake_case'],
          prefix: ['T']
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase', 'snake_case'],
          prefix: ['T']
        },
        {
          selector: 'interface',
          format: ['PascalCase', 'snake_case'],
          prefix: ['I'],
          filter: { regex: '^(Window)', match: false }
        }
      ],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          },
          singleline: {
            delimiter: 'semi',
            requireLast: true
          }
        }
      ],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/quotes': ['error', 'single'],
      '@typescript-eslint/semi': ['error', 'always'],
      'no-null/no-null': 'off',
      'prefer-arrow/prefer-arrow-functions': 'warn'
    }

  })
];
