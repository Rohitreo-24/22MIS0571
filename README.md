The project demonstrates:

API integration
Token-based authentication
React frontend development
Node.js backend development
Sorting notifications based on priority

Technologies Used
Frontend
React.js
Axios
Backend
Node.js
Express.js

Project Structure

22MIS0571
├───logging_middleware
├───notification_app_be
│   └───node_modules
│       ├───accepts
│       ├───agent-base
│       │   ├───dist
│       │   │   └───src
│       │   └───src
│       ├───asynckit
│       │   └───lib
│       ├───axios
│       │   ├───dist
│       │   │   ├───browser
│       │   │   ├───esm
│       │   │   └───node
│       │   └───lib
│       │       ├───adapters
│       │       ├───cancel
│       │       ├───core
│       │       ├───defaults
│       │       ├───env
│       │       │   └───classes
│       │       ├───helpers
│       │       └───platform
│       │           ├───browser
│       │           │   └───classes
│       │           ├───common
│       │           └───node
│       │               └───classes
│       ├───body-parser
│       │   └───lib
│       │       └───types
│       ├───bytes
│       ├───call-bind-apply-helpers
│       │   ├───.github
│       │   └───test
│       ├───call-bound
│       │   ├───.github
│       │   └───test
│       ├───combined-stream
│       │   └───lib
│       ├───content-disposition
│       ├───content-type
│       ├───cookie
│       ├───cookie-signature
│       ├───cors
│       │   └───lib
│       ├───debug
│       │   └───src
│       ├───delayed-stream
│       │   └───lib
│       ├───depd
│       │   └───lib
│       │       └───browser
│       ├───dunder-proto
│       │   ├───.github
│       │   └───test
│       ├───ee-first
│       ├───encodeurl
│       ├───es-define-property
│       │   ├───.github
│       │   └───test
│       ├───es-errors
│       │   ├───.github
│       │   └───test
│       ├───es-object-atoms
│       │   ├───.github
│       │   └───test
│       ├───es-set-tostringtag
│       │   └───test
│       ├───escape-html
│       ├───etag
│       ├───express
│       │   └───lib
│       ├───finalhandler
│       ├───follow-redirects
│       ├───form-data
│       │   ├───lib
│       │   └───node_modules
│       │       ├───mime-db
│       │       └───mime-types
│       ├───forwarded
│       ├───fresh
│       ├───function-bind
│       │   ├───.github
│       │   └───test
│       ├───get-intrinsic
│       │   ├───.github
│       │   └───test
│       ├───get-proto
│       │   ├───.github
│       │   └───test
│       ├───gopd
│       │   ├───.github
│       │   └───test
│       ├───has-symbols
│       │   ├───.github
│       │   └───test
│       │       └───shams
│       ├───has-tostringtag
│       │   ├───.github
│       │   └───test
│       │       └───shams
│       ├───hasown
│       │   └───.github
│       ├───http-errors
│       ├───https-proxy-agent
│       │   └───dist
│       ├───iconv-lite
│       │   ├───encodings
│       │   │   └───tables
│       │   ├───lib
│       │   │   └───helpers
│       │   └───types
│       ├───inherits
│       ├───ipaddr.js
│       │   └───lib
│       ├───is-promise
│       ├───math-intrinsics
│       │   ├───.github
│       │   ├───constants
│       │   └───test
│       ├───media-typer
│       ├───merge-descriptors
│       ├───mime-db
│       ├───mime-types
│       ├───ms
│       ├───negotiator
│       │   └───lib
│       ├───object-assign
│       ├───object-inspect
│       │   ├───.github
│       │   ├───example
│       │   └───test
│       │       └───browser
│       ├───on-finished
│       ├───once
│       ├───parseurl
│       ├───path-to-regexp
│       │   └───dist
│       ├───proxy-addr
│       ├───proxy-from-env
│       ├───qs
│       │   ├───.github
│       │   ├───dist
│       │   ├───lib
│       │   └───test
│       ├───range-parser
│       ├───raw-body
│       ├───router
│       │   └───lib
│       ├───safer-buffer
│       ├───send
│       ├───serve-static
│       ├───setprototypeof
│       │   └───test
│       ├───side-channel
│       │   ├───.github
│       │   └───test
│       ├───side-channel-list
│       │   ├───.github
│       │   └───test
│       ├───side-channel-map
│       │   ├───.github
│       │   └───test
│       ├───side-channel-weakmap
│       │   ├───.github
│       │   └───test
│       ├───statuses
│       ├───toidentifier
│       ├───type-is
│       │   └───node_modules
│       │       └───content-type
│       │           └───dist
│       ├───unpipe
│       ├───vary
│       └───wrappy
└───notification_app_fe
    ├───node_modules
    │   ├───.bin
    │   ├───.cache
    │   │   ├───babel-loader
    │   │   └───default-development
    │   ├───@adobe
    │   │   └───css-tools
    │   │       ├───dist
    │   │       │   ├───cjs
    │   │       │   ├───esm
    │   │       │   └───umd
    │   │       └───docs
    │   ├───@alloc
    │   │   └───quick-lru
    │   ├───@babel
    │   │   ├───code-frame
    │   │   │   └───lib
    │   │   ├───compat-data
    │   │   │   └───data
    │   │   ├───core
    │   │   │   ├───lib
    │   │   │   │   ├───config
    │   │   │   │   │   ├───files
    │   │   │   │   │   ├───helpers
    │   │   │   │   │   └───validation
    │   │   │   │   ├───errors
    │   │   │   │   ├───gensync-utils
    │   │   │   │   ├───parser
    │   │   │   │   │   └───util
    │   │   │   │   ├───tools
    │   │   │   │   ├───transformation
    │   │   │   │   │   ├───file
    │   │   │   │   │   └───util
    │   │   │   │   └───vendor
    │   │   │   ├───node_modules
    │   │   │   │   ├───.bin
    │   │   │   │   └───semver
    │   │   │   │       └───bin
    │   │   │   └───src
    │   │   │       └───config
    │   │   │           └───files
    │   │   ├───eslint-parser
    │   │   │   ├───lib
    │   │   │   │   ├───convert
    │   │   │   │   ├───utils
    │   │   │   │   └───worker
    │   │   │   └───node_modules
    │   │   │       ├───.bin
    │   │   │       ├───eslint-visitor-keys
    │   │   │       │   └───lib
    │   │   │       └───semver
    │   │   │           └───bin
    │   │   ├───generator
    │   │   │   └───lib
    │   │   │       ├───generators
    │   │   │       └───node
    │   │   ├───helper-annotate-as-pure
    │   │   │   └───lib
    │   │   ├───helper-compilation-targets
    │   │   │   ├───lib
    │   │   │   └───node_modules
    │   │   │       ├───.bin
    │   │   │       └───semver
    │   │   │           └───bin
    │   │   ├───helper-create-class-features-plugin
    │   │   │   ├───lib
    │   │   │   └───node_modules
    │   │   │       ├───.bin
    │   │   │       └───semver
    │   │   │           └───bin
    │   │   ├───helper-create-regexp-features-plugin
    │   │   │   ├───lib
    │   │   │   └───node_modules
    │   │   │       ├───.bin
    │   │   │       └───semver
    │   │   │           └───bin
    │   │   ├───helper-define-polyfill-provider
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   │       ├───browser
    │   │   │       ├───node
    │   │   │       └───visitors
    │   │   ├───helper-globals
    │   │   │   └───data
    │   │   ├───helper-member-expression-to-functions
    │   │   │   └───lib
    │   │   ├───helper-module-imports
    │   │   │   └───lib
    │   │   ├───helper-module-transforms
    │   │   │   └───lib
    │   │   ├───helper-optimise-call-expression
    │   │   │   └───lib
    │   │   ├───helper-plugin-utils
    │   │   │   └───lib
    │   │   ├───helper-remap-async-to-generator
    │   │   │   └───lib
    │   │   ├───helper-replace-supers
    │   │   │   └───lib
    │   │   ├───helper-skip-transparent-expression-wrappers
    │   │   │   └───lib
    │   │   ├───helper-string-parser
    │   │   │   └───lib
    │   │   ├───helper-validator-identifier
    │   │   │   └───lib
    │   │   ├───helper-validator-option
    │   │   │   └───lib
    │   │   ├───helper-wrap-function
    │   │   │   └───lib
    │   │   ├───helpers
    │   │   │   └───lib
    │   │   │       └───helpers
    │   │   ├───parser
    │   │   │   ├───bin
    │   │   │   ├───lib
    │   │   │   └───typings
    │   │   ├───plugin-bugfix-firefox-class-in-computed-class-key
    │   │   │   └───lib
    │   │   ├───plugin-bugfix-safari-class-field-initializer-scope
    │   │   │   └───lib
    │   │   ├───plugin-bugfix-safari-id-destructuring-collision-in-function-expression
    │   │   │   └───lib
    │   │   ├───plugin-bugfix-safari-rest-destructuring-rhs-array
    │   │   │   └───lib
    │   │   ├───plugin-bugfix-v8-spread-parameters-in-optional-chaining
    │   │   │   └───lib
    │   │   ├───plugin-bugfix-v8-static-class-fields-redefine-readonly
    │   │   │   └───lib
    │   │   ├───plugin-proposal-class-properties
    │   │   │   └───lib
    │   │   ├───plugin-proposal-decorators
    │   │   │   └───lib
    │   │   ├───plugin-proposal-nullish-coalescing-operator
    │   │   │   └───lib
    │   │   ├───plugin-proposal-numeric-separator
    │   │   │   └───lib
    │   │   ├───plugin-proposal-optional-chaining
    │   │   │   └───lib
    │   │   ├───plugin-proposal-private-methods
    │   │   │   └───lib
    │   │   ├───plugin-proposal-private-property-in-object
    │   │   │   └───lib
    │   │   ├───plugin-syntax-async-generators
    │   │   │   └───lib
    │   │   ├───plugin-syntax-bigint
    │   │   │   └───lib
    │   │   ├───plugin-syntax-class-properties
    │   │   │   └───lib
    │   │   ├───plugin-syntax-class-static-block
    │   │   │   └───lib
    │   │   ├───plugin-syntax-decorators
    │   │   │   └───lib
    │   │   ├───plugin-syntax-flow
    │   │   │   └───lib
    │   │   ├───plugin-syntax-import-assertions
    │   │   │   └───lib
    │   │   ├───plugin-syntax-import-attributes
    │   │   │   └───lib
    │   │   ├───plugin-syntax-import-meta
    │   │   │   └───lib
    │   │   ├───plugin-syntax-json-strings
    │   │   │   └───lib
    │   │   ├───plugin-syntax-jsx
    │   │   │   └───lib
    │   │   ├───plugin-syntax-logical-assignment-operators
    │   │   │   └───lib
    │   │   ├───plugin-syntax-nullish-coalescing-operator
    │   │   │   └───lib
    │   │   ├───plugin-syntax-numeric-separator
    │   │   │   └───lib
    │   │   ├───plugin-syntax-object-rest-spread
    │   │   │   └───lib
    │   │   ├───plugin-syntax-optional-catch-binding
    │   │   │   └───lib
    │   │   ├───plugin-syntax-optional-chaining
    │   │   │   └───lib
    │   │   ├───plugin-syntax-private-property-in-object
    │   │   │   └───lib
    │   │   ├───plugin-syntax-top-level-await
    │   │   │   └───lib
    │   │   ├───plugin-syntax-typescript
    │   │   │   └───lib
    │   │   ├───plugin-syntax-unicode-sets-regex
    │   │   │   └───lib
    │   │   ├───plugin-transform-arrow-functions
    │   │   │   └───lib
    │   │   ├───plugin-transform-async-generator-functions
    │   │   │   └───lib
    │   │   ├───plugin-transform-async-to-generator
    │   │   │   └───lib
    │   │   ├───plugin-transform-block-scoped-functions
    │   │   │   └───lib
    │   │   ├───plugin-transform-block-scoping
    │   │   │   └───lib
    │   │   ├───plugin-transform-class-properties
    │   │   │   └───lib
    │   │   ├───plugin-transform-class-static-block
    │   │   │   └───lib
    │   │   ├───plugin-transform-classes
    │   │   │   └───lib
    │   │   ├───plugin-transform-computed-properties
    │   │   │   └───lib
    │   │   ├───plugin-transform-destructuring
    │   │   │   └───lib
    │   │   ├───plugin-transform-dotall-regex
    │   │   │   └───lib
    │   │   ├───plugin-transform-duplicate-keys
    │   │   │   └───lib
    │   │   ├───plugin-transform-duplicate-named-capturing-groups-regex
    │   │   │   └───lib
    │   │   ├───plugin-transform-dynamic-import
    │   │   │   └───lib
    │   │   ├───plugin-transform-explicit-resource-management
    │   │   │   └───lib
    │   │   ├───plugin-transform-exponentiation-operator
    │   │   │   └───lib
    │   │   ├───plugin-transform-export-namespace-from
    │   │   │   └───lib
    │   │   ├───plugin-transform-flow-strip-types
    │   │   │   └───lib
    │   │   ├───plugin-transform-for-of
    │   │   │   └───lib
    │   │   ├───plugin-transform-function-name
    │   │   │   └───lib
    │   │   ├───plugin-transform-json-strings
    │   │   │   └───lib
    │   │   ├───plugin-transform-literals
    │   │   │   └───lib
    │   │   ├───plugin-transform-logical-assignment-operators
    │   │   │   └───lib
    │   │   ├───plugin-transform-member-expression-literals
    │   │   │   └───lib
    │   │   ├───plugin-transform-modules-amd
    │   │   │   └───lib
    │   │   ├───plugin-transform-modules-commonjs
    │   │   │   └───lib
    │   │   ├───plugin-transform-modules-systemjs
    │   │   │   └───lib
    │   │   ├───plugin-transform-modules-umd
    │   │   │   └───lib
    │   │   ├───plugin-transform-named-capturing-groups-regex
    │   │   │   └───lib
    │   │   ├───plugin-transform-new-target
    │   │   │   └───lib
    │   │   ├───plugin-transform-nullish-coalescing-operator
    │   │   │   └───lib
    │   │   ├───plugin-transform-numeric-separator
    │   │   │   └───lib
    │   │   ├───plugin-transform-object-rest-spread
    │   │   │   └───lib
    │   │   ├───plugin-transform-object-super
    │   │   │   └───lib
    │   │   ├───plugin-transform-optional-catch-binding
    │   │   │   └───lib
    │   │   ├───plugin-transform-optional-chaining
    │   │   │   └───lib
    │   │   ├───plugin-transform-parameters
    │   │   │   └───lib
    │   │   ├───plugin-transform-private-methods
    │   │   │   └───lib
    │   │   ├───plugin-transform-private-property-in-object
    │   │   │   └───lib
    │   │   ├───plugin-transform-property-literals
    │   │   │   └───lib
    │   │   ├───plugin-transform-react-constant-elements
    │   │   │   └───lib
    │   │   ├───plugin-transform-react-display-name
    │   │   │   └───lib
    │   │   ├───plugin-transform-react-jsx
    │   │   │   └───lib
    │   │   ├───plugin-transform-react-jsx-development
    │   │   │   └───lib
    │   │   ├───plugin-transform-react-pure-annotations
    │   │   │   └───lib
    │   │   ├───plugin-transform-regenerator
    │   │   │   └───lib
    │   │   │       └───regenerator
    │   │   ├───plugin-transform-regexp-modifiers
    │   │   │   └───lib
    │   │   ├───plugin-transform-reserved-words
    │   │   │   └───lib
    │   │   ├───plugin-transform-runtime
    │   │   │   ├───lib
    │   │   │   │   ├───babel-7
    │   │   │   │   └───get-runtime-path
    │   │   │   ├───node_modules
    │   │   │   │   ├───.bin
    │   │   │   │   ├───babel-plugin-polyfill-corejs3
    │   │   │   │   │   ├───core-js-compat
    │   │   │   │   │   ├───esm
    │   │   │   │   │   └───lib
    │   │   │   │   └───semver
    │   │   │   │       └───bin
    │   │   │   └───src
    │   │   │       └───get-runtime-path
    │   │   ├───plugin-transform-shorthand-properties
    │   │   │   └───lib
    │   │   ├───plugin-transform-spread
    │   │   │   └───lib
    │   │   ├───plugin-transform-sticky-regex
    │   │   │   └───lib
    │   │   ├───plugin-transform-template-literals
    │   │   │   └───lib
    │   │   ├───plugin-transform-typeof-symbol
    │   │   │   └───lib
    │   │   ├───plugin-transform-typescript
    │   │   │   └───lib
    │   │   ├───plugin-transform-unicode-escapes
    │   │   │   └───lib
    │   │   ├───plugin-transform-unicode-property-regex
    │   │   │   └───lib
    │   │   ├───plugin-transform-unicode-regex
    │   │   │   └───lib
    │   │   ├───plugin-transform-unicode-sets-regex
    │   │   │   └───lib
    │   │   ├───preset-env
    │   │   │   ├───data
    │   │   │   ├───lib
    │   │   │   │   └───polyfills
    │   │   │   └───node_modules
    │   │   │       ├───.bin
    │   │   │       └───semver
    │   │   │           └───bin
    │   │   ├───preset-modules
    │   │   │   ├───lib
    │   │   │   │   └───plugins
    │   │   │   │       ├───transform-async-arrows-in-class
    │   │   │   │       ├───transform-edge-default-parameters
    │   │   │   │       ├───transform-edge-function-name
    │   │   │   │       ├───transform-jsx-spread
    │   │   │   │       ├───transform-safari-block-shadowing
    │   │   │   │       ├───transform-safari-for-shadowing
    │   │   │   │       └───transform-tagged-template-caching
    │   │   │   └───src
    │   │   │       └───plugins
    │   │   │           ├───transform-async-arrows-in-class
    │   │   │           ├───transform-edge-default-parameters
    │   │   │           ├───transform-edge-function-name
    │   │   │           ├───transform-jsx-spread
    │   │   │           ├───transform-safari-block-shadowing
    │   │   │           ├───transform-safari-for-shadowing
    │   │   │           └───transform-tagged-template-caching
    │   │   ├───preset-react
    │   │   │   └───lib
    │   │   ├───preset-typescript
    │   │   │   └───lib
    │   │   ├───runtime
    │   │   │   ├───helpers
    │   │   │   │   └───esm
    │   │   │   └───regenerator
    │   │   ├───template
    │   │   │   └───lib
    │   │   ├───traverse
    │   │   │   └───lib
    │   │   │       ├───path
    │   │   │       │   ├───inference
    │   │   │       │   └───lib
    │   │   │       └───scope
    │   │   │           └───lib
    │   │   └───types
    │   │       └───lib
    │   │           ├───asserts
    │   │           │   └───generated
    │   │           ├───ast-types
    │   │           │   └───generated
    │   │           ├───builders
    │   │           │   ├───flow
    │   │           │   ├───generated
    │   │           │   ├───react
    │   │           │   └───typescript
    │   │           ├───clone
    │   │           ├───comments
    │   │           ├───constants
    │   │           │   └───generated
    │   │           ├───converters
    │   │           ├───definitions
    │   │           ├───modifications
    │   │           │   ├───flow
    │   │           │   └───typescript
    │   │           ├───retrievers
    │   │           ├───traverse
    │   │           ├───utils
    │   │           │   └───react
    │   │           └───validators
    │   │               ├───generated
    │   │               └───react
    │   ├───@bcoe
    │   │   └───v8-coverage
    │   │       ├───dist
    │   │       │   └───lib
    │   │       │       └───_src
    │   │       └───src
    │   │           ├───lib
    │   │           └───test
    │   ├───@csstools
    │   │   ├───normalize.css
    │   │   ├───postcss-cascade-layers
    │   │   │   └───dist
    │   │   ├───postcss-color-function
    │   │   │   └───dist
    │   │   │       └───css-color-4
    │   │   ├───postcss-font-format-keywords
    │   │   │   └───dist
    │   │   ├───postcss-hwb-function
    │   │   │   └───dist
    │   │   ├───postcss-ic-unit
    │   │   │   └───dist
    │   │   ├───postcss-is-pseudo-class
    │   │   │   └───dist
    │   │   │       └───split-selectors
    │   │   │           └───complex
    │   │   ├───postcss-nested-calc
    │   │   │   └───dist
    │   │   ├───postcss-normalize-display-values
    │   │   │   └───dist
    │   │   ├───postcss-oklab-function
    │   │   │   └───dist
    │   │   │       └───css-color-4
    │   │   ├───postcss-progressive-custom-properties
    │   │   │   └───dist
    │   │   │       └───custom
    │   │   ├───postcss-stepped-value-functions
    │   │   │   └───dist
    │   │   ├───postcss-text-decoration-shorthand
    │   │   │   └───dist
    │   │   ├───postcss-trigonometric-functions
    │   │   │   └───dist
    │   │   ├───postcss-unset-value
    │   │   │   └───dist
    │   │   └───selector-specificity
    │   │       └───dist
    │   ├───@emotion
    │   │   ├───babel-plugin
    │   │   │   ├───dist
    │   │   │   ├───node_modules
    │   │   │   │   ├───convert-source-map
    │   │   │   │   └───source-map
    │   │   │   │       ├───dist
    │   │   │   │       └───lib
    │   │   │   └───src
    │   │   │       └───utils
    │   │   ├───cache
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   │       └───conditions
    │   │   ├───hash
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   ├───is-prop-valid
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   ├───memoize
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   ├───react
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   ├───jsx-dev-runtime
    │   │   │   │   └───dist
    │   │   │   ├───jsx-runtime
    │   │   │   │   └───dist
    │   │   │   ├───src
    │   │   │   │   └───conditions
    │   │   │   ├───types
    │   │   │   └───_isolated-hnrs
    │   │   │       └───dist
    │   │   ├───serialize
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   │       └───conditions
    │   │   ├───sheet
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   │       └───conditions
    │   │   ├───styled
    │   │   │   ├───base
    │   │   │   │   └───dist
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   │       └───conditions
    │   │   ├───unitless
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   ├───use-insertion-effect-with-fallbacks
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   │       └───conditions
    │   │   ├───utils
    │   │   │   ├───dist
    │   │   │   │   └───declarations
    │   │   │   │       └───src
    │   │   │   └───src
    │   │   │       └───conditions
    │   │   └───weak-memoize
    │   │       ├───dist
    │   │       │   └───declarations
    │   │       │       └───src
    │   │       └───src
    │   ├───@eslint
    │   │   ├───eslintrc
    │   │   │   ├───conf
    │   │   │   ├───dist
    │   │   │   ├───lib
    │   │   │   │   ├───config-array
    │   │   │   │   └───shared
    │   │   │   └───node_modules
    │   │   │       ├───.bin
    │   │   │       ├───argparse
    │   │   │       │   └───lib
    │   │   │       └───js-yaml
    │   │   │           ├───bin
    │   │   │           ├───dist
    │   │   │           └───lib
    │   │   │               ├───schema
    │   │   │               └───type
    │   │   └───js
    │   │       └───src
    │   │           └───configs
    │   ├───@eslint-community
    │   │   ├───eslint-utils
    │   │   └───regexpp
    │   ├───@humanwhocodes
    │   │   ├───config-array
    │   │   ├───module-importer
    │   │   │   ├───dist
    │   │   │   └───src
    │   │   └───object-schema
    │   │       └───src
    │   ├───@istanbuljs
    │   │   ├───load-nyc-config
    │   │   │   └───node_modules
    │   │   │       └───camelcase
    │   │   └───schema
    │   ├───@jest
    │   │   ├───console
    │   │   │   └───build
    │   │   ├───core
    │   │   │   └───build
    │   │   │       ├───assets
    │   │   │       ├───cli
    │   │   │       ├───lib
    │   │   │       └───plugins
    │   │   ├───environment
    │   │   │   └───build
    │   │   ├───fake-timers
    │   │   │   └───build
    │   │   ├───globals
    │   │   │   └───build
    │   │   ├───reporters
    │   │   │   ├───build
    │   │   │   └───node_modules
    │   │   │       └───source-map
    │   │   │           ├───dist
    │   │   │           └───lib
    │   │   ├───schemas
    │   │   │   └───build
    │   │   ├───source-map
    │   │   │   ├───build
    │   │   │   └───node_modules
    │   │   │       └───source-map
    │   │   │           ├───dist
    │   │   │           └───lib
    │   │   ├───test-result
    │   │   │   └───build
    │   │   ├───test-sequencer
    │   │   │   └───build
    │   │   ├───transform
    │   │   │   ├───build
    │   │   │   └───node_modules
    │   │   │       ├───convert-source-map
    │   │   │       └───source-map
    │   │   │           ├───dist
    │   │   │           └───lib
    │   │   └───types
    │   │       └───build
    │   ├───@jridgewell
    │   │   ├───gen-mapping
    │   │   │   ├───dist
    │   │   │   │   └───types
    │   │   │   ├───src
    │   │   │   └───types
    │   │   ├───remapping
    │   │   │   ├───dist
    │   │   │   ├───src
    │   │   │   └───types
    │   │   ├───resolve-uri
    │   │   │   └───dist
    │   │   │       └───types
    │   │   ├───source-map
    │   │   │   ├───dist
    │   │   │   ├───src
    │   │   │   └───types
    │   │   ├───sourcemap-codec
    │   │   │   ├───dist
    │   │   │   ├───src
    │   │   │   └───types
    │   │   └───trace-mapping
    │   │       ├───dist
    │   │       ├───src
    │   │       └───types
    │   ├───@leichtgewicht
    │   │   └───ip-codec
    │   │       └───types
    │   ├───@mui
    │   │   ├───core-downloads-tracker
    │   │   ├───icons-material
    │   │   │   └───utils
    │   │   ├───material
    │   │   │   ├───Accordion
    │   │   │   ├───AccordionActions
    │   │   │   ├───AccordionDetails
    │   │   │   ├───AccordionSummary
    │   │   │   ├───Alert
    │   │   │   ├───AlertTitle
    │   │   │   ├───AppBar
    │   │   │   ├───Autocomplete
    │   │   │   ├───Avatar
    │   │   │   ├───AvatarGroup
    │   │   │   ├───Backdrop
    │   │   │   ├───Badge
    │   │   │   ├───BottomNavigation
    │   │   │   ├───BottomNavigationAction
    │   │   │   ├───Box
    │   │   │   ├───Breadcrumbs
    │   │   │   ├───Button
    │   │   │   ├───ButtonBase
    │   │   │   ├───ButtonGroup
    │   │   │   ├───Card
    │   │   │   ├───CardActionArea
    │   │   │   ├───CardActions
    │   │   │   ├───CardContent
    │   │   │   ├───CardHeader
    │   │   │   ├───CardMedia
    │   │   │   ├───Checkbox
    │   │   │   ├───Chip
    │   │   │   ├───CircularProgress
    │   │   │   ├───className
    │   │   │   ├───ClickAwayListener
    │   │   │   ├───Collapse
    │   │   │   ├───colors
    │   │   │   ├───Container
    │   │   │   ├───CssBaseline
    │   │   │   ├───darkScrollbar
    │   │   │   ├───DefaultPropsProvider
    │   │   │   ├───Dialog
    │   │   │   ├───DialogActions
    │   │   │   ├───DialogContent
    │   │   │   ├───DialogContentText
    │   │   │   ├───DialogTitle
    │   │   │   ├───Divider
    │   │   │   ├───Drawer
    │   │   │   ├───Fab
    │   │   │   ├───Fade
    │   │   │   ├───FilledInput
    │   │   │   ├───FormControl
    │   │   │   ├───FormControlLabel
    │   │   │   ├───FormGroup
    │   │   │   ├───FormHelperText
    │   │   │   ├───FormLabel
    │   │   │   ├───generateUtilityClass
    │   │   │   ├───generateUtilityClasses
    │   │   │   ├───GlobalStyles
    │   │   │   ├───Grid
    │   │   │   ├───Grow
    │   │   │   ├───Icon
    │   │   │   ├───IconButton
    │   │   │   ├───ImageList
    │   │   │   ├───ImageListItem
    │   │   │   ├───ImageListItemBar
    │   │   │   ├───InitColorSchemeScript
    │   │   │   ├───Input
    │   │   │   ├───InputAdornment
    │   │   │   ├───InputBase
    │   │   │   ├───InputLabel
    │   │   │   ├───internal
    │   │   │   │   └───svg-icons
    │   │   │   ├───LinearProgress
    │   │   │   ├───Link
    │   │   │   ├───List
    │   │   │   ├───ListItem
    │   │   │   ├───ListItemAvatar
    │   │   │   ├───ListItemButton
    │   │   │   ├───ListItemIcon
    │   │   │   ├───ListItemSecondaryAction
    │   │   │   ├───ListItemText
    │   │   │   ├───ListSubheader
    │   │   │   ├───locale
    │   │   │   │   └───utils
    │   │   │   ├───Menu
    │   │   │   ├───MenuItem
    │   │   │   ├───MenuList
    │   │   │   ├───MobileStepper
    │   │   │   ├───Modal
    │   │   │   ├───NativeSelect
    │   │   │   ├───node_modules
    │   │   │   │   └───react-is
    │   │   │   │       └───cjs
    │   │   │   ├───NoSsr
    │   │   │   ├───OutlinedInput
    │   │   │   ├───OverridableComponent
    │   │   │   ├───Pagination
    │   │   │   ├───PaginationItem
    │   │   │   ├───Paper
    │   │   │   ├───PigmentContainer
    │   │   │   ├───PigmentGrid
    │   │   │   ├───PigmentStack
    │   │   │   ├───Popover
    │   │   │   ├───Popper
    │   │   │   ├───Portal
    │   │   │   ├───Radio
    │   │   │   ├───RadioGroup
    │   │   │   ├───Rating
    │   │   │   ├───ScopedCssBaseline
    │   │   │   ├───Select
    │   │   │   │   └───utils
    │   │   │   ├───Skeleton
    │   │   │   ├───Slide
    │   │   │   ├───Slider
    │   │   │   ├───Snackbar
    │   │   │   ├───SnackbarContent
    │   │   │   ├───SpeedDial
    │   │   │   ├───SpeedDialAction
    │   │   │   ├───SpeedDialIcon
    │   │   │   ├───Stack
    │   │   │   ├───Step
    │   │   │   ├───StepButton
    │   │   │   ├───StepConnector
    │   │   │   ├───StepContent
    │   │   │   ├───StepIcon
    │   │   │   ├───StepLabel
    │   │   │   ├───Stepper
    │   │   │   ├───styles
    │   │   │   ├───SvgIcon
    │   │   │   ├───SwipeableDrawer
    │   │   │   ├───Switch
    │   │   │   ├───Tab
    │   │   │   ├───Table
    │   │   │   ├───TableBody
    │   │   │   ├───TableCell
    │   │   │   ├───TableContainer
    │   │   │   ├───TableFooter
    │   │   │   ├───TableHead
    │   │   │   ├───TablePagination
    │   │   │   ├───TablePaginationActions
    │   │   │   ├───TableRow
    │   │   │   ├───TableSortLabel
    │   │   │   ├───Tabs
    │   │   │   ├───TabScrollButton
    │   │   │   ├───TextareaAutosize
    │   │   │   ├───TextField
    │   │   │   ├───themeCssVarsAugmentation
    │   │   │   ├───ToggleButton
    │   │   │   ├───ToggleButtonGroup
    │   │   │   ├───Toolbar
    │   │   │   ├───Tooltip
    │   │   │   ├───transitions
    │   │   │   ├───types
    │   │   │   ├───Typography
    │   │   │   ├───Unstable_TrapFocus
    │   │   │   ├───useAutocomplete
    │   │   │   ├───useLazyRipple
    │   │   │   ├───useMediaQuery
    │   │   │   ├───usePagination
    │   │   │   ├───useScrollTrigger
    │   │   │   ├───utils
    │   │   │   ├───version
    │   │   │   ├───zero-styled
    │   │   │   └───Zoom
    │   │   ├───private-theming
    │   │   │   ├───defaultTheme
    │   │   │   ├───ThemeProvider
    │   │   │   └───useTheme
    │   │   ├───styled-engine
    │   │   │   ├───GlobalStyles
    │   │   │   └───StyledEngineProvider
    │   │   ├───system
    │   │   │   ├───borders
    │   │   │   ├───Box
    │   │   │   ├───breakpoints
    │   │   │   ├───colorManipulator
    │   │   │   ├───compose
    │   │   │   ├───Container
    │   │   │   ├───createBox
    │   │   │   ├───createBreakpoints
    │   │   │   ├───createStyled
    │   │   │   ├───createTheme
    │   │   │   ├───cssContainerQueries
    │   │   │   ├───cssGrid
    │   │   │   ├───cssVars
    │   │   │   ├───DefaultPropsProvider
    │   │   │   ├───display
    │   │   │   ├───flexbox
    │   │   │   ├───getThemeValue
    │   │   │   ├───GlobalStyles
    │   │   │   ├───Grid
    │   │   │   ├───InitColorSchemeScript
    │   │   │   ├───memoize
    │   │   │   ├───merge
    │   │   │   ├───palette
    │   │   │   ├───positions
    │   │   │   ├───propsToClassKey
    │   │   │   ├───responsivePropType
    │   │   │   ├───RtlProvider
    │   │   │   ├───shadows
    │   │   │   ├───sizing
    │   │   │   ├───spacing
    │   │   │   ├───Stack
    │   │   │   ├───style
    │   │   │   ├───styled
    │   │   │   ├───styleFunctionSx
    │   │   │   ├───ThemeProvider
    │   │   │   ├───typography
    │   │   │   ├───useMediaQuery
    │   │   │   ├───useTheme
    │   │   │   ├───useThemeProps
    │   │   │   ├───useThemeWithoutDefault
    │   │   │   └───version
    │   │   ├───types
    │   │   └───utils
    │   │       ├───appendOwnerState
    │   │       ├───capitalize
    │   │       ├───chainPropTypes
    │   │       ├───clamp
    │   │       ├───ClassNameGenerator
    │   │       ├───composeClasses
    │   │       ├───contains
    │   │       ├───createChainedFunction
    │   │       ├───debounce
    │   │       ├───deepmerge
    │   │       ├───deprecatedPropType
    │   │       ├───elementAcceptingRef
    │   │       ├───elementTypeAcceptingRef
    │   │       ├───exactProp
    │   │       ├───extractEventHandlers
    │   │       ├───fastDeepAssign
    │   │       ├───fastObjectShallowCompare
    │   │       ├───formatMuiErrorMessage
    │   │       ├───generateUtilityClass
    │   │       ├───generateUtilityClasses
    │   │       ├───getActiveElement
    │   │       ├───getDisplayName
    │   │       ├───getEventTarget
    │   │       ├───getReactElementRef
    │   │       ├───getReactNodeRef
    │   │       ├───getScrollbarSize
    │   │       ├───getValidReactChildren
    │   │       ├───HTMLElementType
    │   │       ├───integerPropType
    │   │       ├───isEventHandler
    │   │       ├───isFocusVisible
    │   │       ├───isHostComponent
    │   │       ├───isMuiElement
    │   │       ├───isObjectEmpty
    │   │       ├───mergeSlotProps
    │   │       ├───node_modules
    │   │       │   └───react-is
    │   │       │       └───cjs
    │   │       ├───omitEventHandlers
    │   │       ├───ownerDocument
    │   │       ├───ownerWindow
    │   │       ├───ponyfillGlobal
    │   │       ├───refType
    │   │       ├───requirePropFactory
    │   │       ├───resolveComponentProps
    │   │       ├───resolveProps
    │   │       ├───setRef
    │   │       ├───types
    │   │       ├───unsupportedProp
    │   │       ├───useControlled
    │   │       ├───useEnhancedEffect
    │   │       ├───useEventCallback
    │   │       ├───useForcedRerendering
    │   │       ├───useForkRef
    │   │       ├───useId
    │   │       ├───useIsFocusVisible
    │   │       ├───useLazyRef
    │   │       ├───useLocalStorageState
    │   │       ├───useOnMount
    │   │       ├───usePreviousProps
    │   │       ├───useRovingTabIndex
    │   │       ├───useSlotProps
    │   │       ├───useTimeout
    │   │       └───visuallyHidden
    │   ├───@nicolo-ribaudo
    │   │   └───eslint-scope-5-internals
    │   │       └───node_modules
    │   │           ├───eslint-scope
    │   │           │   └───lib
    │   │           └───estraverse
    │   ├───@nodelib
    │   │   ├───fs.scandir
    │   │   │   └───out
    │   │   │       ├───adapters
    │   │   │       ├───providers
    │   │   │       ├───types
    │   │   │       └───utils
    │   │   ├───fs.stat
    │   │   │   └───out
    │   │   │       ├───adapters
    │   │   │       ├───providers
    │   │   │       └───types
    │   │   └───fs.walk
    │   │       └───out
    │   │           ├───providers
    │   │           ├───readers
    │   │           └───types
    │   ├───@pmmmwh
    │   │   └───react-refresh-webpack-plugin
    │   │       ├───client
    │   │       │   └───utils
    │   │       ├───lib
    │   │       │   ├───runtime
    │   │       │   └───utils
    │   │       ├───loader
    │   │       │   └───utils
    │   │       ├───options
    │   │       ├───overlay
    │   │       │   ├───components
    │   │       │   └───containers
    │   │       ├───sockets
    │   │       │   └───utils
    │   │       └───types
    │   │           ├───lib
    │   │           ├───loader
    │   │           └───options
    │   ├───@popperjs
    │   │   └───core
    │   │       ├───dist
    │   │       │   ├───cjs
    │   │       │   ├───esm
    │   │       │   │   ├───dom-utils
    │   │       │   │   ├───modifiers
    │   │       │   │   └───utils
    │   │       │   └───umd
    │   │       └───lib
    │   │           ├───dom-utils
    │   │           ├───modifiers
    │   │           └───utils
    │   ├───@rollup
    │   │   ├───plugin-babel
    │   │   │   ├───dist
    │   │   │   └───types
    │   │   ├───plugin-node-resolve
    │   │   │   ├───dist
    │   │   │   │   ├───cjs
    │   │   │   │   └───es
    │   │   │   └───types
    │   │   ├───plugin-replace
    │   │   │   ├───dist
    │   │   │   ├───src
    │   │   │   └───types
    │   │   └───pluginutils
    │   │       ├───dist
    │   │       │   ├───cjs
    │   │       │   └───es
    │   │       ├───node_modules
    │   │       │   └───@types
    │   │       │       └───estree
    │   │       └───types
    │   ├───@rtsao
    │   │   └───scc
    │   ├───@rushstack
    │   │   └───eslint-patch
    │   │       ├───lib-commonjs
    │   │       │   ├───eslint-bulk-suppressions
    │   │       │   │   └───cli
    │   │       │   │       └───utils
    │   │       │   └───exports
    │   │       ├───lib-dts
    │   │       │   ├───eslint-bulk-suppressions
    │   │       │   │   └───cli
    │   │       │   │       └───utils
    │   │       │   └───exports
    │   │       └───lib-esm
    │   │           ├───eslint-bulk-suppressions
    │   │           │   └───cli
    │   │           │       └───utils
    │   │           └───exports
    │   ├───@sinclair
    │   │   └───typebox
    │   │       ├───compiler
    │   │       ├───conditional
    │   │       ├───errors
    │   │       ├───format
    │   │       ├───guard
    │   │       └───value
    │   ├───@sinonjs
    │   │   ├───commons
    │   │   │   ├───lib
    │   │   │   │   └───prototypes
    │   │   │   └───types
    │   │   │       └───prototypes
    │   │   └───fake-timers
    │   │       └───src
    │   ├───@surma
    │   │   └───rollup-plugin-off-main-thread
    │   │       └───tests
    │   │           └───fixtures
    │   │               ├───amd-function-name
    │   │               │   └───build
    │   │               ├───assets-in-worker
    │   │               │   └───build
    │   │               │       └───assets
    │   │               ├───dynamic-import
    │   │               │   └───build
    │   │               ├───import-meta
    │   │               │   └───build
    │   │               ├───import-meta-worker
    │   │               │   └───build
    │   │               ├───import-worker-url
    │   │               │   └───build
    │   │               ├───import-worker-url-custom-scheme
    │   │               │   └───build
    │   │               ├───module-worker
    │   │               │   └───build
    │   │               ├───more-workers
    │   │               │   └───build
    │   │               ├───public-path
    │   │               │   └───build
    │   │               ├───simple-bundle
    │   │               │   └───build
    │   │               ├───single-default
    │   │               │   └───build
    │   │               ├───url-import-meta-worker
    │   │               │   └───build
    │   │               └───worker
    │   │                   └───build
    │   ├───@svgr
    │   │   ├───babel-plugin-add-jsx-attribute
    │   │   │   └───lib
    │   │   ├───babel-plugin-remove-jsx-attribute
    │   │   │   └───lib
    │   │   ├───babel-plugin-remove-jsx-empty-expression
    │   │   │   └───lib
    │   │   ├───babel-plugin-replace-jsx-attribute-value
    │   │   │   └───lib
    │   │   ├───babel-plugin-svg-dynamic-title
    │   │   │   └───lib
    │   │   ├───babel-plugin-svg-em-dimensions
    │   │   │   └───lib
    │   │   ├───babel-plugin-transform-react-native-svg
    │   │   │   └───lib
    │   │   ├───babel-plugin-transform-svg-component
    │   │   │   └───lib
    │   │   ├───babel-preset
    │   │   │   └───lib
    │   │   ├───core
    │   │   │   └───lib
    │   │   ├───hast-util-to-babel-ast
    │   │   │   └───lib
    │   │   ├───plugin-jsx
    │   │   │   └───lib
    │   │   ├───plugin-svgo
    │   │   │   └───lib
    │   │   └───webpack
    │   │       └───lib
    │   ├───@testing-library
    │   │   ├───dom
    │   │   │   ├───dist
    │   │   │   │   ├───@testing-library
    │   │   │   │   └───queries
    │   │   │   ├───node_modules
    │   │   │   │   └───aria-query
    │   │   │   │       └───lib
    │   │   │   │           ├───etc
    │   │   │   │           │   └───roles
    │   │   │   │           │       ├───abstract
    │   │   │   │           │       ├───dpub
    │   │   │   │           │       ├───graphics
    │   │   │   │           │       └───literal
    │   │   │   │           └───util
    │   │   │   └───types
    │   │   ├───jest-dom
    │   │   │   ├───dist
    │   │   │   ├───node_modules
    │   │   │   │   └───dom-accessibility-api
    │   │   │   │       └───dist
    │   │   │   │           └───polyfills
    │   │   │   └───types
    │   │   │       └───__tests__
    │   │   │           ├───bun
    │   │   │           ├───jest
    │   │   │           ├───jest-globals
    │   │   │           └───vitest
    │   │   ├───react
    │   │   │   ├───dist
    │   │   │   │   └───@testing-library
    │   │   │   └───types
    │   │   └───user-event
    │   │       └───dist
    │   │           ├───keyboard
    │   │           │   ├───plugins
    │   │           │   └───shared
    │   │           ├───type
    │   │           └───utils
    │   │               ├───click
    │   │               ├───edit
    │   │               ├───focus
    │   │               └───misc
    │   ├───@tootallnate
    │   │   └───once
    │   │       └───dist
    │   ├───@types
    │   │   ├───aria-query
    │   │   ├───babel__core
    │   │   ├───babel__generator
    │   │   ├───babel__template
    │   │   ├───babel__traverse
    │   │   ├───body-parser
    │   │   ├───bonjour
    │   │   ├───connect
    │   │   ├───connect-history-api-fallback
    │   │   ├───eslint
    │   │   │   └───rules
    │   │   ├───eslint-scope
    │   │   ├───estree
    │   │   ├───express
    │   │   │   └───node_modules
    │   │   │       └───@types
    │   │   │           └───express-serve-static-core
    │   │   ├───express-serve-static-core
    │   │   ├───graceful-fs
    │   │   ├───html-minifier-terser
    │   │   ├───http-errors
    │   │   ├───http-proxy
    │   │   ├───istanbul-lib-coverage
    │   │   ├───istanbul-lib-report
    │   │   ├───istanbul-reports
    │   │   ├───json-schema
    │   │   ├───json5
    │   │   ├───mime
    │   │   ├───node
    │   │   │   ├───assert
    │   │   │   ├───compatibility
    │   │   │   ├───dns
    │   │   │   ├───fs
    │   │   │   ├───inspector
    │   │   │   ├───path
    │   │   │   ├───readline
    │   │   │   ├───stream
    │   │   │   ├───test
    │   │   │   ├───timers
    │   │   │   ├───ts5.6
    │   │   │   │   └───compatibility
    │   │   │   ├───ts5.7
    │   │   │   │   └───compatibility
    │   │   │   ├───util
    │   │   │   └───web-globals
    │   │   ├───node-forge
    │   │   ├───parse-json
    │   │   ├───prettier
    │   │   ├───prop-types
    │   │   ├───q
    │   │   ├───qs
    │   │   ├───range-parser
    │   │   ├───react
    │   │   │   └───ts5.0
    │   │   ├───react-transition-group
    │   │   ├───resolve
    │   │   ├───retry
    │   │   ├───semver
    │   │   │   ├───classes
    │   │   │   ├───functions
    │   │   │   ├───internals
    │   │   │   └───ranges
    │   │   ├───send
    │   │   ├───serve-index
    │   │   ├───serve-static
    │   │   │   └───node_modules
    │   │   │       └───@types
    │   │   │           └───send
    │   │   ├───sockjs
    │   │   ├───stack-utils
    │   │   ├───trusted-types
    │   │   │   └───lib
    │   │   ├───ws
    │   │   ├───yargs
    │   │   └───yargs-parser
    │   ├───@typescript-eslint
    │   │   ├───eslint-plugin
    │   │   │   ├───dist
    │   │   │   │   ├───configs
    │   │   │   │   ├───rules
    │   │   │   │   │   ├───enum-utils
    │   │   │   │   │   └───naming-convention-utils
    │   │   │   │   └───util
    │   │   │   └───docs
    │   │   │       └───rules
    │   │   ├───experimental-utils
    │   │   │   ├───dist
    │   │   │   └───_ts3.4
    │   │   │       └───dist
    │   │   ├───parser
    │   │   │   ├───dist
    │   │   │   └───_ts3.4
    │   │   │       └───dist
    │   │   ├───scope-manager
    │   │   │   └───dist
    │   │   │       ├───definition
    │   │   │       ├───lib
    │   │   │       ├───referencer
    │   │   │       ├───scope
    │   │   │       └───variable
    │   │   ├───type-utils
    │   │   │   ├───dist
    │   │   │   └───_ts3.4
    │   │   │       └───dist
    │   │   ├───types
    │   │   │   ├───dist
    │   │   │   │   └───generated
    │   │   │   └───_ts3.4
    │   │   │       └───dist
    │   │   │           └───generated
    │   │   ├───typescript-estree
    │   │   │   ├───dist
    │   │   │   │   ├───create-program
    │   │   │   │   ├───jsx
    │   │   │   │   ├───parseSettings
    │   │   │   │   └───ts-estree
    │   │   │   └───_ts3.4
    │   │   │       └───dist
    │   │   │           ├───create-program
    │   │   │           ├───jsx
    │   │   │           ├───parseSettings
    │   │   │           └───ts-estree
    │   │   ├───utils
    │   │   │   ├───dist
    │   │   │   │   ├───ast-utils
    │   │   │   │   │   └───eslint-utils
    │   │   │   │   ├───eslint-utils
    │   │   │   │   │   └───rule-tester
    │   │   │   │   ├───ts-eslint
    │   │   │   │   └───ts-eslint-scope
    │   │   │   ├───node_modules
    │   │   │   │   ├───eslint-scope
    │   │   │   │   │   └───lib
    │   │   │   │   └───estraverse
    │   │   │   └───_ts3.4
    │   │   │       └───dist
    │   │   │           ├───ast-utils
    │   │   │           │   └───eslint-utils
    │   │   │           ├───eslint-utils
    │   │   │           │   └───rule-tester
    │   │   │           ├───ts-eslint
    │   │   │           └───ts-eslint-scope
    │   │   └───visitor-keys
    │   │       ├───dist
    │   │       └───_ts3.4
    │   │           └───dist
    │   ├───@ungap
    │   │   └───structured-clone
    │   │       ├───.github
    │   │       │   └───workflows
    │   │       ├───cjs
    │   │       └───esm
    │   ├───@webassemblyjs
    │   │   ├───ast
    │   │   │   ├───esm
    │   │   │   │   ├───transform
    │   │   │   │   │   ├───ast-module-to-module-context
    │   │   │   │   │   ├───denormalize-type-references
    │   │   │   │   │   └───wast-identifier-to-index
    │   │   │   │   └───types
    │   │   │   ├───lib
    │   │   │   │   ├───transform
    │   │   │   │   │   ├───ast-module-to-module-context
    │   │   │   │   │   ├───denormalize-type-references
    │   │   │   │   │   └───wast-identifier-to-index
    │   │   │   │   └───types
    │   │   │   └───scripts
    │   │   ├───floating-point-hex-parser
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───helper-api-error
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───helper-buffer
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───helper-numbers
    │   │   │   ├───esm
    │   │   │   ├───lib
    │   │   │   └───src
    │   │   ├───helper-wasm-bytecode
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───helper-wasm-section
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───ieee754
    │   │   │   ├───esm
    │   │   │   ├───lib
    │   │   │   └───src
    │   │   ├───leb128
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───utf8
    │   │   │   ├───esm
    │   │   │   ├───lib
    │   │   │   ├───src
    │   │   │   └───test
    │   │   ├───wasm-edit
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───wasm-gen
    │   │   │   ├───esm
    │   │   │   │   └───encoder
    │   │   │   └───lib
    │   │   │       └───encoder
    │   │   ├───wasm-opt
    │   │   │   ├───esm
    │   │   │   └───lib
    │   │   ├───wasm-parser
    │   │   │   ├───esm
    │   │   │   │   └───types
    │   │   │   └───lib
    │   │   │       └───types
    │   │   └───wast-printer
    │   │       ├───esm
    │   │       └───lib
    │   ├───@xtuc
    │   │   ├───ieee754
    │   │   │   └───dist
    │   │   └───long
    │   │       ├───dist
    │   │       └───src
    │   ├───abab
    │   │   └───lib
    │   ├───accepts
    │   │   └───node_modules
    │   │       └───negotiator
    │   │           └───lib
    │   ├───acorn
    │   │   ├───bin
    │   │   └───dist
    │   ├───acorn-globals
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───acorn
    │   │           ├───bin
    │   │           └───dist
    │   ├───acorn-import-phases
    │   │   └───src
    │   ├───acorn-jsx
    │   ├───acorn-walk
    │   │   └───dist
    │   ├───address
    │   │   └───lib
    │   ├───adjust-sourcemap-loader
    │   │   ├───codec
    │   │   │   └───utility
    │   │   └───lib
    │   │       └───process
    │   ├───agent-base
    │   │   ├───dist
    │   │   │   └───src
    │   │   └───src
    │   ├───ajv
    │   │   ├───dist
    │   │   ├───lib
    │   │   │   ├───compile
    │   │   │   ├───dot
    │   │   │   ├───dotjs
    │   │   │   └───refs
    │   │   └───scripts
    │   ├───ajv-formats
    │   │   ├───dist
    │   │   ├───node_modules
    │   │   │   ├───ajv
    │   │   │   │   ├───dist
    │   │   │   │   │   ├───compile
    │   │   │   │   │   │   ├───codegen
    │   │   │   │   │   │   ├───jtd
    │   │   │   │   │   │   └───validate
    │   │   │   │   │   ├───refs
    │   │   │   │   │   │   ├───json-schema-2019-09
    │   │   │   │   │   │   │   └───meta
    │   │   │   │   │   │   └───json-schema-2020-12
    │   │   │   │   │   │       └───meta
    │   │   │   │   │   ├───runtime
    │   │   │   │   │   ├───standalone
    │   │   │   │   │   ├───types
    │   │   │   │   │   └───vocabularies
    │   │   │   │   │       ├───applicator
    │   │   │   │   │       ├───core
    │   │   │   │   │       ├───discriminator
    │   │   │   │   │       ├───dynamic
    │   │   │   │   │       ├───format
    │   │   │   │   │       ├───jtd
    │   │   │   │   │       ├───unevaluated
    │   │   │   │   │       └───validation
    │   │   │   │   └───lib
    │   │   │   │       ├───compile
    │   │   │   │       │   ├───codegen
    │   │   │   │       │   ├───jtd
    │   │   │   │       │   └───validate
    │   │   │   │       ├───refs
    │   │   │   │       │   ├───json-schema-2019-09
    │   │   │   │       │   │   └───meta
    │   │   │   │       │   └───json-schema-2020-12
    │   │   │   │       │       └───meta
    │   │   │   │       ├───runtime
    │   │   │   │       ├───standalone
    │   │   │   │       ├───types
    │   │   │   │       └───vocabularies
    │   │   │   │           ├───applicator
    │   │   │   │           ├───core
    │   │   │   │           ├───discriminator
    │   │   │   │           ├───dynamic
    │   │   │   │           ├───format
    │   │   │   │           ├───jtd
    │   │   │   │           ├───unevaluated
    │   │   │   │           └───validation
    │   │   │   └───json-schema-traverse
    │   │   │       ├───.github
    │   │   │       │   └───workflows
    │   │   │       └───spec
    │   │   │           └───fixtures
    │   │   └───src
    │   ├───ajv-keywords
    │   │   └───keywords
    │   │       ├───dot
    │   │       └───dotjs
    │   ├───ansi-escapes
    │   │   └───node_modules
    │   │       └───type-fest
    │   │           ├───source
    │   │           └───ts41
    │   ├───ansi-html
    │   │   └───bin
    │   ├───ansi-html-community
    │   │   └───bin
    │   ├───ansi-regex
    │   ├───ansi-styles
    │   ├───any-promise
    │   │   └───register
    │   ├───anymatch
    │   ├───arg
    │   ├───argparse
    │   │   └───lib
    │   │       ├───action
    │   │       │   ├───append
    │   │       │   └───store
    │   │       ├───argument
    │   │       └───help
    │   ├───aria-query
    │   │   └───lib
    │   │       ├───etc
    │   │       │   └───roles
    │   │       │       ├───abstract
    │   │       │       ├───dpub
    │   │       │       ├───graphics
    │   │       │       └───literal
    │   │       └───util
    │   ├───array-buffer-byte-length
    │   │   ├───.github
    │   │   └───test
    │   ├───array-flatten
    │   ├───array-includes
    │   │   ├───.github
    │   │   └───test
    │   ├───array-union
    │   ├───array.prototype.findlast
    │   │   ├───.github
    │   │   └───test
    │   ├───array.prototype.findlastindex
    │   │   ├───.github
    │   │   └───test
    │   ├───array.prototype.flat
    │   │   ├───.github
    │   │   └───test
    │   ├───array.prototype.flatmap
    │   │   ├───.github
    │   │   └───test
    │   ├───array.prototype.reduce
    │   │   └───test
    │   ├───array.prototype.tosorted
    │   │   ├───.github
    │   │   └───test
    │   ├───arraybuffer.prototype.slice
    │   │   └───test
    │   ├───asap
    │   ├───ast-types-flow
    │   │   └───lib
    │   ├───async
    │   │   ├───dist
    │   │   └───internal
    │   ├───async-function
    │   │   ├───.github
    │   │   └───test
    │   ├───asynckit
    │   │   └───lib
    │   ├───at-least-node
    │   ├───autoprefixer
    │   │   ├───bin
    │   │   ├───data
    │   │   └───lib
    │   │       └───hacks
    │   ├───available-typed-arrays
    │   │   ├───.github
    │   │   └───test
    │   ├───axe-core
    │   │   └───locales
    │   ├───axios
    │   │   ├───dist
    │   │   │   ├───browser
    │   │   │   ├───esm
    │   │   │   └───node
    │   │   ├───lib
    │   │   │   ├───adapters
    │   │   │   ├───cancel
    │   │   │   ├───core
    │   │   │   ├───defaults
    │   │   │   ├───env
    │   │   │   │   └───classes
    │   │   │   ├───helpers
    │   │   │   └───platform
    │   │   │       ├───browser
    │   │   │       │   └───classes
    │   │   │       ├───common
    │   │   │       └───node
    │   │   │           └───classes
    │   │   └───node_modules
    │   │       └───form-data
    │   │           └───lib
    │   ├───axobject-query
    │   │   └───lib
    │   │       ├───etc
    │   │       │   └───objects
    │   │       └───util
    │   ├───babel-jest
    │   │   └───build
    │   ├───babel-loader
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───schema-utils
    │   │           ├───declarations
    │   │           │   ├───keywords
    │   │           │   └───util
    │   │           └───dist
    │   │               ├───keywords
    │   │               └───util
    │   ├───babel-plugin-istanbul
    │   │   └───lib
    │   ├───babel-plugin-jest-hoist
    │   │   └───build
    │   ├───babel-plugin-macros
    │   │   └───dist
    │   ├───babel-plugin-named-asset-import
    │   ├───babel-plugin-polyfill-corejs2
    │   │   ├───esm
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───semver
    │   │           └───bin
    │   ├───babel-plugin-polyfill-corejs3
    │   │   ├───core-js-compat
    │   │   ├───esm
    │   │   └───lib
    │   ├───babel-plugin-polyfill-regenerator
    │   │   ├───esm
    │   │   └───lib
    │   ├───babel-plugin-transform-react-remove-prop-types
    │   │   ├───lib
    │   │   └───src
    │   ├───babel-preset-current-node-syntax
    │   │   ├───.github
    │   │   │   └───workflows
    │   │   └───src
    │   ├───babel-preset-jest
    │   ├───babel-preset-react-app
    │   │   └───node_modules
    │   │       └───@babel
    │   │           └───plugin-proposal-private-property-in-object
    │   │               └───lib
    │   ├───balanced-match
    │   │   └───.github
    │   ├───baseline-browser-mapping
    │   │   └───dist
    │   ├───batch
    │   ├───bfj
    │   │   ├───src
    │   │   └───test
    │   │       └───unit
    │   ├───big.js
    │   ├───binary-extensions
    │   ├───bluebird
    │   │   └───js
    │   │       ├───browser
    │   │       └───release
    │   ├───body-parser
    │   │   ├───lib
    │   │   │   └───types
    │   │   └───node_modules
    │   │       ├───debug
    │   │       │   └───src
    │   │       ├───iconv-lite
    │   │       │   ├───encodings
    │   │       │   │   └───tables
    │   │       │   └───lib
    │   │       └───ms
    │   ├───bonjour-service
    │   │   ├───dist
    │   │   │   └───lib
    │   │   │       └───utils
    │   │   └───types
    │   ├───boolbase
    │   ├───brace-expansion
    │   ├───braces
    │   │   └───lib
    │   ├───browser-process-hrtime
    │   ├───browserslist
    │   ├───bser
    │   ├───buffer-from
    │   ├───builtin-modules
    │   ├───bytes
    │   ├───call-bind
    │   │   ├───.github
    │   │   └───test
    │   ├───call-bind-apply-helpers
    │   │   ├───.github
    │   │   └───test
    │   ├───call-bound
    │   │   ├───.github
    │   │   └───test
    │   ├───callsites
    │   ├───camel-case
    │   │   ├───dist
    │   │   └───dist.es2015
    │   ├───camelcase
    │   ├───camelcase-css
    │   ├───caniuse-api
    │   │   └───dist
    │   ├───caniuse-lite
    │   │   ├───data
    │   │   │   ├───features
    │   │   │   └───regions
    │   │   └───dist
    │   │       ├───lib
    │   │       └───unpacker
    │   ├───case-sensitive-paths-webpack-plugin
    │   ├───chalk
    │   │   └───source
    │   ├───char-regex
    │   ├───check-types
    │   │   └───src
    │   ├───chokidar
    │   │   ├───lib
    │   │   ├───node_modules
    │   │   │   └───glob-parent
    │   │   └───types
    │   ├───chrome-trace-event
    │   │   └───dist
    │   ├───ci-info
    │   ├───cjs-module-lexer
    │   │   └───dist
    │   ├───clean-css
    │   │   ├───lib
    │   │   │   ├───optimizer
    │   │   │   │   ├───configuration
    │   │   │   │   │   └───properties
    │   │   │   │   ├───level-0
    │   │   │   │   ├───level-1
    │   │   │   │   │   ├───property-optimizers
    │   │   │   │   │   └───value-optimizers
    │   │   │   │   │       └───color
    │   │   │   │   └───level-2
    │   │   │   │       └───properties
    │   │   │   ├───options
    │   │   │   ├───reader
    │   │   │   ├───tokenizer
    │   │   │   ├───utils
    │   │   │   └───writer
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───cliui
    │   │   └───build
    │   │       └───lib
    │   ├───clsx
    │   │   └───dist
    │   ├───co
    │   ├───coa
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───ansi-styles
    │   │       ├───chalk
    │   │       │   └───types
    │   │       ├───color-convert
    │   │       ├───color-name
    │   │       ├───escape-string-regexp
    │   │       ├───has-flag
    │   │       └───supports-color
    │   ├───collect-v8-coverage
    │   ├───color-convert
    │   ├───color-name
    │   ├───colord
    │   │   └───plugins
    │   ├───colorette
    │   ├───combined-stream
    │   │   └───lib
    │   ├───commander
    │   │   ├───lib
    │   │   └───typings
    │   ├───common-tags
    │   │   ├───dist
    │   │   ├───es
    │   │   │   ├───codeBlock
    │   │   │   ├───commaLists
    │   │   │   ├───commaListsAnd
    │   │   │   ├───commaListsOr
    │   │   │   ├───html
    │   │   │   ├───inlineArrayTransformer
    │   │   │   ├───inlineLists
    │   │   │   ├───oneLine
    │   │   │   ├───oneLineCommaLists
    │   │   │   ├───oneLineCommaListsAnd
    │   │   │   ├───oneLineCommaListsOr
    │   │   │   ├───oneLineInlineLists
    │   │   │   ├───oneLineTrim
    │   │   │   ├───removeNonPrintingValuesTransformer
    │   │   │   ├───replaceResultTransformer
    │   │   │   ├───replaceStringTransformer
    │   │   │   ├───replaceSubstitutionTransformer
    │   │   │   ├───safeHtml
    │   │   │   ├───source
    │   │   │   ├───splitStringTransformer
    │   │   │   ├───stripIndent
    │   │   │   ├───stripIndents
    │   │   │   ├───stripIndentTransformer
    │   │   │   ├───TemplateTag
    │   │   │   ├───trimResultTransformer
    │   │   │   └───utils
    │   │   │       └───readFromFixture
    │   │   └───lib
    │   │       ├───codeBlock
    │   │       ├───commaLists
    │   │       ├───commaListsAnd
    │   │       ├───commaListsOr
    │   │       ├───html
    │   │       ├───inlineArrayTransformer
    │   │       ├───inlineLists
    │   │       ├───oneLine
    │   │       ├───oneLineCommaLists
    │   │       ├───oneLineCommaListsAnd
    │   │       ├───oneLineCommaListsOr
    │   │       ├───oneLineInlineLists
    │   │       ├───oneLineTrim
    │   │       ├───removeNonPrintingValuesTransformer
    │   │       ├───replaceResultTransformer
    │   │       ├───replaceStringTransformer
    │   │       ├───replaceSubstitutionTransformer
    │   │       ├───safeHtml
    │   │       ├───source
    │   │       ├───splitStringTransformer
    │   │       ├───stripIndent
    │   │       ├───stripIndents
    │   │       ├───stripIndentTransformer
    │   │       ├───TemplateTag
    │   │       ├───trimResultTransformer
    │   │       └───utils
    │   │           └───readFromFixture
    │   ├───commondir
    │   │   ├───example
    │   │   └───test
    │   ├───compressible
    │   ├───compression
    │   │   └───node_modules
    │   │       ├───debug
    │   │       │   └───src
    │   │       └───ms
    │   ├───concat-map
    │   │   ├───example
    │   │   └───test
    │   ├───confusing-browser-globals
    │   ├───connect-history-api-fallback
    │   │   └───lib
    │   ├───content-disposition
    │   ├───content-type
    │   ├───convert-source-map
    │   ├───cookie
    │   ├───cookie-signature
    │   ├───core-js
    │   │   ├───actual
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───es
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───features
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───bigint
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───observable
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───full
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───bigint
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───observable
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───internals
    │   │   ├───modules
    │   │   ├───proposals
    │   │   ├───stable
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───stage
    │   │   └───web
    │   ├───core-js-compat
    │   ├───core-js-pure
    │   │   ├───actual
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───es
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───features
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───bigint
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───observable
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───full
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───bigint
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───observable
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───internals
    │   │   ├───modules
    │   │   ├───proposals
    │   │   ├───stable
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───array-buffer
    │   │   │   ├───async-disposable-stack
    │   │   │   ├───async-iterator
    │   │   │   ├───data-view
    │   │   │   ├───date
    │   │   │   ├───disposable-stack
    │   │   │   ├───dom-collections
    │   │   │   ├───dom-exception
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───instance
    │   │   │   ├───iterator
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───typed-array
    │   │   │   ├───url
    │   │   │   ├───url-search-params
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───stage
    │   │   └───web
    │   ├───core-util-is
    │   │   └───lib
    │   ├───cosmiconfig
    │   │   └───dist
    │   ├───cross-spawn
    │   │   └───lib
    │   │       └───util
    │   ├───crypto-random-string
    │   ├───css-blank-pseudo
    │   │   └───dist
    │   ├───css-declaration-sorter
    │   │   ├───dist
    │   │   ├───orders
    │   │   └───src
    │   ├───css-has-pseudo
    │   │   └───dist
    │   ├───css-loader
    │   │   └───dist
    │   │       ├───plugins
    │   │       └───runtime
    │   ├───css-minimizer-webpack-plugin
    │   │   ├───dist
    │   │   ├───node_modules
    │   │   │   └───source-map
    │   │   │       ├───dist
    │   │   │       └───lib
    │   │   └───types
    │   ├───css-prefers-color-scheme
    │   │   └───dist
    │   ├───css-select
    │   │   └───lib
    │   │       └───pseudo-selectors
    │   ├───css-select-base-adapter
    │   │   └───test
    │   ├───css-tree
    │   │   ├───data
    │   │   ├───dist
    │   │   ├───lib
    │   │   │   ├───common
    │   │   │   ├───convertor
    │   │   │   ├───definition-syntax
    │   │   │   ├───generator
    │   │   │   ├───lexer
    │   │   │   ├───parser
    │   │   │   ├───syntax
    │   │   │   │   ├───atrule
    │   │   │   │   ├───config
    │   │   │   │   ├───function
    │   │   │   │   ├───node
    │   │   │   │   ├───pseudo
    │   │   │   │   │   └───common
    │   │   │   │   └───scope
    │   │   │   ├───tokenizer
    │   │   │   ├───utils
    │   │   │   └───walker
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───css-what
    │   │   └───lib
    │   │       ├───commonjs
    │   │       └───es
    │   ├───css.escape
    │   ├───cssdb
    │   ├───cssesc
    │   │   ├───bin
    │   │   └───man
    │   ├───cssnano
    │   │   ├───src
    │   │   │   ├───postcss-discard-comments
    │   │   │   ├───postcss-discard-empty
    │   │   │   └───postcss-normalize-whitespace
    │   │   └───types
    │   ├───cssnano-preset-default
    │   │   ├───src
    │   │   └───types
    │   ├───cssnano-utils
    │   │   ├───src
    │   │   └───types
    │   ├───csso
    │   │   ├───dist
    │   │   ├───lib
    │   │   │   ├───clean
    │   │   │   ├───replace
    │   │   │   │   ├───atrule
    │   │   │   │   └───property
    │   │   │   └───restructure
    │   │   │       └───prepare
    │   │   └───node_modules
    │   │       ├───css-tree
    │   │       │   ├───data
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       │       ├───common
    │   │       │       ├───convertor
    │   │       │       ├───definition-syntax
    │   │       │       ├───generator
    │   │       │       ├───lexer
    │   │       │       ├───parser
    │   │       │       ├───syntax
    │   │       │       │   ├───atrule
    │   │       │       │   ├───config
    │   │       │       │   ├───function
    │   │       │       │   ├───node
    │   │       │       │   ├───pseudo
    │   │       │       │   │   └───common
    │   │       │       │   └───scope
    │   │       │       ├───tokenizer
    │   │       │       ├───utils
    │   │       │       └───walker
    │   │       ├───mdn-data
    │   │       │   ├───api
    │   │       │   ├───css
    │   │       │   └───l10n
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───cssom
    │   │   └───lib
    │   ├───cssstyle
    │   │   ├───lib
    │   │   │   ├───properties
    │   │   │   └───utils
    │   │   └───node_modules
    │   │       └───cssom
    │   │           └───lib
    │   ├───csstype
    │   ├───damerau-levenshtein
    │   │   ├───scripts
    │   │   └───test
    │   ├───data-urls
    │   │   └───lib
    │   ├───data-view-buffer
    │   │   ├───.github
    │   │   └───test
    │   ├───data-view-byte-length
    │   │   ├───.github
    │   │   └───test
    │   ├───data-view-byte-offset
    │   │   ├───.github
    │   │   └───test
    │   ├───debug
    │   │   └───src
    │   ├───decimal.js
    │   ├───dedent
    │   │   └───dist
    │   ├───deep-is
    │   │   ├───example
    │   │   └───test
    │   ├───deepmerge
    │   │   └───dist
    │   ├───default-gateway
    │   ├───define-data-property
    │   │   ├───.github
    │   │   └───test
    │   ├───define-lazy-prop
    │   ├───define-properties
    │   │   └───.github
    │   ├───delayed-stream
    │   │   └───lib
    │   ├───depd
    │   │   └───lib
    │   │       └───browser
    │   ├───dequal
    │   │   ├───dist
    │   │   └───lite
    │   ├───destroy
    │   ├───detect-newline
    │   ├───detect-node
    │   ├───detect-port-alt
    │   │   ├───.vscode
    │   │   ├───bin
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───debug
    │   │       │   └───src
    │   │       └───ms
    │   ├───didyoumean
    │   ├───diff-sequences
    │   │   ├───build
    │   │   └───perf
    │   ├───dir-glob
    │   ├───dlv
    │   │   └───dist
    │   ├───dns-packet
    │   ├───doctrine
    │   │   └───lib
    │   ├───dom-accessibility-api
    │   │   └───dist
    │   │       └───polyfills
    │   ├───dom-converter
    │   │   └───lib
    │   ├───dom-helpers
    │   │   ├───activeElement
    │   │   ├───addClass
    │   │   ├───addEventListener
    │   │   ├───animate
    │   │   ├───animationFrame
    │   │   ├───attribute
    │   │   ├───camelize
    │   │   ├───camelizeStyle
    │   │   ├───canUseDOM
    │   │   ├───childElements
    │   │   ├───childNodes
    │   │   ├───cjs
    │   │   ├───clear
    │   │   ├───closest
    │   │   ├───collectElements
    │   │   ├───collectSiblings
    │   │   ├───contains
    │   │   ├───css
    │   │   ├───esm
    │   │   ├───filterEventHandler
    │   │   ├───getComputedStyle
    │   │   ├───getScrollAccessor
    │   │   ├───hasClass
    │   │   ├───height
    │   │   ├───hyphenate
    │   │   ├───hyphenateStyle
    │   │   ├───insertAfter
    │   │   ├───isDocument
    │   │   ├───isInput
    │   │   ├───isTransform
    │   │   ├───isVisible
    │   │   ├───isWindow
    │   │   ├───listen
    │   │   ├───matches
    │   │   ├───nextUntil
    │   │   ├───offset
    │   │   ├───offsetParent
    │   │   ├───ownerDocument
    │   │   ├───ownerWindow
    │   │   ├───parents
    │   │   ├───position
    │   │   ├───prepend
    │   │   ├───querySelectorAll
    │   │   ├───remove
    │   │   ├───removeClass
    │   │   ├───removeEventListener
    │   │   ├───scrollbarSize
    │   │   ├───scrollLeft
    │   │   ├───scrollParent
    │   │   ├───scrollTo
    │   │   ├───scrollTop
    │   │   ├───siblings
    │   │   ├───text
    │   │   ├───toggleClass
    │   │   ├───transitionEnd
    │   │   ├───triggerEvent
    │   │   └───width
    │   ├───dom-serializer
    │   │   └───lib
    │   │       └───esm
    │   ├───domelementtype
    │   │   └───lib
    │   │       └───esm
    │   ├───domexception
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───webidl-conversions
    │   │           └───lib
    │   ├───domhandler
    │   │   └───lib
    │   ├───domutils
    │   │   └───lib
    │   ├───dot-case
    │   │   ├───dist
    │   │   └───dist.es2015
    │   ├───dotenv
    │   │   ├───lib
    │   │   └───types
    │   ├───dotenv-expand
    │   │   └───lib
    │   ├───dunder-proto
    │   │   ├───.github
    │   │   └───test
    │   ├───duplexer
    │   │   └───test
    │   ├───ee-first
    │   ├───ejs
    │   │   ├───bin
    │   │   └───lib
    │   ├───electron-to-chromium
    │   ├───emittery
    │   ├───emoji-regex
    │   │   └───es2015
    │   ├───emojis-list
    │   ├───encodeurl
    │   ├───enhanced-resolve
    │   │   └───lib
    │   │       └───util
    │   ├───entities
    │   │   └───lib
    │   │       └───maps
    │   ├───error-ex
    │   ├───error-stack-parser
    │   │   └───dist
    │   ├───es-abstract
    │   │   ├───2015
    │   │   │   └───tables
    │   │   ├───2016
    │   │   │   └───tables
    │   │   ├───2017
    │   │   │   └───tables
    │   │   ├───2018
    │   │   │   └───tables
    │   │   ├───2019
    │   │   │   └───tables
    │   │   ├───2020
    │   │   │   ├───BigInt
    │   │   │   ├───Number
    │   │   │   └───tables
    │   │   ├───2021
    │   │   │   ├───BigInt
    │   │   │   ├───Number
    │   │   │   └───tables
    │   │   ├───2022
    │   │   │   ├───BigInt
    │   │   │   ├───Number
    │   │   │   └───tables
    │   │   ├───2023
    │   │   │   ├───BigInt
    │   │   │   ├───Number
    │   │   │   └───tables
    │   │   ├───2024
    │   │   │   ├───BigInt
    │   │   │   ├───Number
    │   │   │   └───tables
    │   │   ├───2025
    │   │   │   ├───BigInt
    │   │   │   ├───Number
    │   │   │   └───tables
    │   │   ├───5
    │   │   ├───helpers
    │   │   │   └───records
    │   │   └───operations
    │   ├───es-array-method-boxes-properly
    │   │   ├───.github
    │   │   └───test
    │   ├───es-define-property
    │   │   ├───.github
    │   │   └───test
    │   ├───es-errors
    │   │   ├───.github
    │   │   └───test
    │   ├───es-iterator-helpers
    │   │   ├───.github
    │   │   ├───aos
    │   │   ├───Iterator
    │   │   ├───Iterator.concat
    │   │   ├───Iterator.from
    │   │   ├───Iterator.prototype
    │   │   ├───Iterator.prototype.constructor
    │   │   ├───Iterator.prototype.drop
    │   │   ├───Iterator.prototype.every
    │   │   ├───Iterator.prototype.filter
    │   │   ├───Iterator.prototype.find
    │   │   ├───Iterator.prototype.flatMap
    │   │   ├───Iterator.prototype.forEach
    │   │   ├───Iterator.prototype.includes
    │   │   ├───Iterator.prototype.map
    │   │   ├───Iterator.prototype.reduce
    │   │   ├───Iterator.prototype.some
    │   │   ├───Iterator.prototype.take
    │   │   ├───Iterator.prototype.toArray
    │   │   ├───Iterator.zip
    │   │   ├───Iterator.zipKeyed
    │   │   ├───IteratorHelperPrototype
    │   │   ├───test
    │   │   │   └───helpers
    │   │   └───WrapForValidIteratorPrototype
    │   ├───es-module-lexer
    │   │   ├───dist
    │   │   └───types
    │   ├───es-object-atoms
    │   │   ├───.github
    │   │   └───test
    │   ├───es-set-tostringtag
    │   │   └───test
    │   ├───es-shim-unscopables
    │   │   ├───.github
    │   │   └───test
    │   ├───es-to-primitive
    │   │   ├───.github
    │   │   ├───helpers
    │   │   └───test
    │   ├───escalade
    │   │   ├───dist
    │   │   └───sync
    │   ├───escape-html
    │   ├───escape-string-regexp
    │   ├───escodegen
    │   │   ├───bin
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───eslint
    │   │   ├───bin
    │   │   ├───conf
    │   │   ├───lib
    │   │   │   ├───cli-engine
    │   │   │   │   └───formatters
    │   │   │   ├───config
    │   │   │   ├───eslint
    │   │   │   ├───linter
    │   │   │   │   └───code-path-analysis
    │   │   │   ├───rule-tester
    │   │   │   ├───rules
    │   │   │   │   └───utils
    │   │   │   │       ├───patterns
    │   │   │   │       └───unicode
    │   │   │   ├───shared
    │   │   │   └───source-code
    │   │   │       └───token-store
    │   │   ├───messages
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───argparse
    │   │       │   └───lib
    │   │       ├───find-up
    │   │       ├───js-yaml
    │   │       │   ├───bin
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       │       ├───schema
    │   │       │       └───type
    │   │       ├───locate-path
    │   │       ├───p-limit
    │   │       └───p-locate
    │   ├───eslint-config-react-app
    │   ├───eslint-import-resolver-node
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───debug
    │   │       │   └───src
    │   │       └───resolve
    │   │           ├───.github
    │   │           ├───bin
    │   │           ├───example
    │   │           ├───lib
    │   │           └───test
    │   │               ├───dotdot
    │   │               │   └───abc
    │   │               ├───module_dir
    │   │               │   ├───xmodules
    │   │               │   │   └───aaa
    │   │               │   ├───ymodules
    │   │               │   │   └───aaa
    │   │               │   └───zmodules
    │   │               │       └───bbb
    │   │               ├───node_path
    │   │               │   ├───x
    │   │               │   │   ├───aaa
    │   │               │   │   └───ccc
    │   │               │   └───y
    │   │               │       ├───bbb
    │   │               │       └───ccc
    │   │               ├───pathfilter
    │   │               │   └───deep_ref
    │   │               ├───precedence
    │   │               │   ├───aaa
    │   │               │   └───bbb
    │   │               ├───resolver
    │   │               │   ├───baz
    │   │               │   ├───browser_field
    │   │               │   ├───dot_main
    │   │               │   ├───dot_slash_main
    │   │               │   ├───empty_main
    │   │               │   ├───false_main
    │   │               │   ├───incorrect_main
    │   │               │   ├───invalid_main
    │   │               │   ├───missing_index
    │   │               │   ├───missing_main
    │   │               │   ├───multirepo
    │   │               │   │   └───packages
    │   │               │   │       ├───package-a
    │   │               │   │       └───package-b
    │   │               │   ├───nested_symlinks
    │   │               │   │   └───mylib
    │   │               │   ├───null_main
    │   │               │   ├───other_path
    │   │               │   │   └───lib
    │   │               │   ├───quux
    │   │               │   │   └───foo
    │   │               │   ├───same_names
    │   │               │   │   └───foo
    │   │               │   ├───symlinked
    │   │               │   │   ├───package
    │   │               │   │   └───_
    │   │               │   │       ├───node_modules
    │   │               │   │       └───symlink_target
    │   │               │   └───without_basedir
    │   │               └───shadowed_core
    │   │                   └───node_modules
    │   │                       └───util
    │   ├───eslint-module-utils
    │   │   └───node_modules
    │   │       └───debug
    │   │           └───src
    │   ├───eslint-plugin-flowtype
    │   │   └───dist
    │   │       ├───bin
    │   │       ├───configs
    │   │       ├───rules
    │   │       │   ├───arrayStyle
    │   │       │   └───typeColonSpacing
    │   │       └───utilities
    │   ├───eslint-plugin-import
    │   │   ├───config
    │   │   │   └───flat
    │   │   ├───docs
    │   │   │   └───rules
    │   │   ├───lib
    │   │   │   ├───core
    │   │   │   ├───exportMap
    │   │   │   └───rules
    │   │   ├───memo-parser
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───debug
    │   │       │   └───src
    │   │       ├───doctrine
    │   │       │   └───lib
    │   │       └───semver
    │   │           └───bin
    │   ├───eslint-plugin-jest
    │   │   ├───docs
    │   │   │   └───rules
    │   │   └───lib
    │   │       ├───processors
    │   │       └───rules
    │   ├───eslint-plugin-jsx-a11y
    │   │   ├───docs
    │   │   │   └───rules
    │   │   ├───lib
    │   │   │   ├───configs
    │   │   │   ├───rules
    │   │   │   └───util
    │   │   │       └───implicitRoles
    │   │   ├───__mocks__
    │   │   └───__tests__
    │   │       ├───src
    │   │       │   ├───rules
    │   │       │   └───util
    │   │       │       └───implicitRoles
    │   │       └───__util__
    │   │           └───helpers
    │   ├───eslint-plugin-react
    │   │   ├───configs
    │   │   ├───lib
    │   │   │   ├───rules
    │   │   │   └───util
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───doctrine
    │   │       │   └───lib
    │   │       ├───resolve
    │   │       │   ├───.github
    │   │       │   ├───bin
    │   │       │   ├───example
    │   │       │   ├───lib
    │   │       │   └───test
    │   │       │       ├───dotdot
    │   │       │       │   └───abc
    │   │       │       ├───module_dir
    │   │       │       │   ├───xmodules
    │   │       │       │   │   └───aaa
    │   │       │       │   ├───ymodules
    │   │       │       │   │   └───aaa
    │   │       │       │   └───zmodules
    │   │       │       │       └───bbb
    │   │       │       ├───node_path
    │   │       │       │   ├───x
    │   │       │       │   │   ├───aaa
    │   │       │       │   │   └───ccc
    │   │       │       │   └───y
    │   │       │       │       ├───bbb
    │   │       │       │       └───ccc
    │   │       │       ├───pathfilter
    │   │       │       │   └───deep_ref
    │   │       │       ├───precedence
    │   │       │       │   ├───aaa
    │   │       │       │   └───bbb
    │   │       │       ├───resolver
    │   │       │       │   ├───baz
    │   │       │       │   ├───browser_field
    │   │       │       │   ├───dot_main
    │   │       │       │   ├───dot_slash_main
    │   │       │       │   ├───empty_main
    │   │       │       │   ├───false_main
    │   │       │       │   ├───incorrect_main
    │   │       │       │   ├───invalid_main
    │   │       │       │   ├───missing_index
    │   │       │       │   ├───missing_main
    │   │       │       │   ├───multirepo
    │   │       │       │   │   └───packages
    │   │       │       │   │       ├───package-a
    │   │       │       │   │       └───package-b
    │   │       │       │   ├───nested_symlinks
    │   │       │       │   │   └───mylib
    │   │       │       │   ├───null_main
    │   │       │       │   ├───other_path
    │   │       │       │   │   └───lib
    │   │       │       │   ├───quux
    │   │       │       │   │   └───foo
    │   │       │       │   ├───same_names
    │   │       │       │   │   └───foo
    │   │       │       │   ├───symlinked
    │   │       │       │   │   ├───package
    │   │       │       │   │   └───_
    │   │       │       │   │       ├───node_modules
    │   │       │       │   │       └───symlink_target
    │   │       │       │   └───without_basedir
    │   │       │       └───shadowed_core
    │   │       │           └───node_modules
    │   │       │               └───util
    │   │       └───semver
    │   │           └───bin
    │   ├───eslint-plugin-react-hooks
    │   │   └───cjs
    │   ├───eslint-plugin-testing-library
    │   │   ├───configs
    │   │   ├───create-testing-library-rule
    │   │   ├───node-utils
    │   │   ├───rules
    │   │   └───utils
    │   ├───eslint-scope
    │   │   ├───dist
    │   │   └───lib
    │   ├───eslint-visitor-keys
    │   │   ├───dist
    │   │   └───lib
    │   ├───eslint-webpack-plugin
    │   │   ├───dist
    │   │   ├───node_modules
    │   │   │   ├───jest-worker
    │   │   │   │   └───build
    │   │   │   │       ├───base
    │   │   │   │       └───workers
    │   │   │   └───supports-color
    │   │   └───types
    │   ├───espree
    │   │   ├───dist
    │   │   └───lib
    │   ├───esprima
    │   │   ├───bin
    │   │   └───dist
    │   ├───esquery
    │   │   └───dist
    │   ├───esrecurse
    │   ├───estraverse
    │   ├───estree-walker
    │   │   ├───dist
    │   │   ├───src
    │   │   └───types
    │   ├───esutils
    │   │   └───lib
    │   ├───etag
    │   ├───eventemitter3
    │   │   └───umd
    │   ├───events
    │   │   ├───.github
    │   │   └───tests
    │   ├───execa
    │   │   └───lib
    │   ├───exit
    │   │   ├───lib
    │   │   └───test
    │   │       └───fixtures
    │   ├───expect
    │   │   └───build
    │   ├───express
    │   │   ├───lib
    │   │   │   ├───middleware
    │   │   │   └───router
    │   │   └───node_modules
    │   │       ├───debug
    │   │       │   └───src
    │   │       └───ms
    │   ├───fast-deep-equal
    │   │   └───es6
    │   ├───fast-glob
    │   │   ├───node_modules
    │   │   │   └───glob-parent
    │   │   └───out
    │   │       ├───managers
    │   │       ├───providers
    │   │       │   ├───filters
    │   │       │   ├───matchers
    │   │       │   └───transformers
    │   │       ├───readers
    │   │       ├───types
    │   │       └───utils
    │   ├───fast-json-stable-stringify
    │   │   ├───.github
    │   │   ├───benchmark
    │   │   ├───example
    │   │   └───test
    │   ├───fast-levenshtein
    │   ├───fast-uri
    │   │   ├───.github
    │   │   │   └───workflows
    │   │   ├───benchmark
    │   │   ├───lib
    │   │   ├───test
    │   │   │   └───fixtures
    │   │   └───types
    │   ├───fastq
    │   │   └───test
    │   ├───faye-websocket
    │   │   └───lib
    │   │       └───faye
    │   │           └───websocket
    │   │               └───api
    │   ├───fb-watchman
    │   ├───file-entry-cache
    │   ├───file-loader
    │   │   ├───dist
    │   │   └───node_modules
    │   │       └───schema-utils
    │   │           ├───declarations
    │   │           │   ├───keywords
    │   │           │   └───util
    │   │           └───dist
    │   │               ├───keywords
    │   │               └───util
    │   ├───filelist
    │   │   └───node_modules
    │   │       ├───brace-expansion
    │   │       │   └───.github
    │   │       └───minimatch
    │   │           └───lib
    │   ├───filesize
    │   │   └───lib
    │   ├───fill-range
    │   ├───finalhandler
    │   │   └───node_modules
    │   │       ├───debug
    │   │       │   └───src
    │   │       └───ms
    │   ├───find-cache-dir
    │   ├───find-root
    │   │   └───test
    │   ├───find-up
    │   ├───flat-cache
    │   │   └───src
    │   ├───flatted
    │   │   ├───cjs
    │   │   ├───esm
    │   │   ├───golang
    │   │   │   └───pkg
    │   │   │       └───flatted
    │   │   ├───php
    │   │   ├───python
    │   │   └───types
    │   ├───follow-redirects
    │   ├───for-each
    │   │   ├───.github
    │   │   └───test
    │   ├───fork-ts-checker-webpack-plugin
    │   │   ├───lib
    │   │   │   ├───error
    │   │   │   ├───eslint-reporter
    │   │   │   │   ├───issue
    │   │   │   │   ├───reporter
    │   │   │   │   └───types
    │   │   │   ├───formatter
    │   │   │   │   └───types
    │   │   │   ├───hooks
    │   │   │   ├───issue
    │   │   │   ├───logger
    │   │   │   ├───profile
    │   │   │   ├───reporter
    │   │   │   │   └───reporter-rpc
    │   │   │   ├───rpc
    │   │   │   │   ├───error
    │   │   │   │   └───rpc-ipc
    │   │   │   │       └───error
    │   │   │   ├───typescript-reporter
    │   │   │   │   ├───extension
    │   │   │   │   │   └───vue
    │   │   │   │   │       └───types
    │   │   │   │   ├───file-system
    │   │   │   │   ├───issue
    │   │   │   │   ├───profile
    │   │   │   │   └───reporter
    │   │   │   ├───utils
    │   │   │   │   ├───array
    │   │   │   │   ├───async
    │   │   │   │   └───path
    │   │   │   └───watch
    │   │   └───node_modules
    │   │       ├───cosmiconfig
    │   │       │   └───dist
    │   │       ├───fs-extra
    │   │       │   └───lib
    │   │       │       ├───copy
    │   │       │       ├───copy-sync
    │   │       │       ├───empty
    │   │       │       ├───ensure
    │   │       │       ├───fs
    │   │       │       ├───json
    │   │       │       ├───mkdirs
    │   │       │       ├───move
    │   │       │       ├───move-sync
    │   │       │       ├───output
    │   │       │       ├───path-exists
    │   │       │       ├───remove
    │   │       │       └───util
    │   │       ├───schema-utils
    │   │       │   ├───declarations
    │   │       │   │   ├───keywords
    │   │       │   │   └───util
    │   │       │   └───dist
    │   │       │       ├───keywords
    │   │       │       └───util
    │   │       └───tapable
    │   │           └───lib
    │   ├───form-data
    │   │   └───lib
    │   ├───forwarded
    │   ├───fraction.js
    │   │   ├───dist
    │   │   ├───examples
    │   │   ├───src
    │   │   └───tests
    │   ├───fresh
    │   ├───fs-extra
    │   │   └───lib
    │   │       ├───copy
    │   │       ├───empty
    │   │       ├───ensure
    │   │       ├───fs
    │   │       ├───json
    │   │       ├───mkdirs
    │   │       ├───move
    │   │       ├───output-file
    │   │       ├───path-exists
    │   │       ├───remove
    │   │       └───util
    │   ├───fs-monkey
    │   │   ├───docs
    │   │   │   └───api
    │   │   └───lib
    │   │       └───util
    │   ├───fs.realpath
    │   ├───function-bind
    │   │   ├───.github
    │   │   └───test
    │   ├───function.prototype.name
    │   │   ├───.github
    │   │   ├───helpers
    │   │   └───test
    │   ├───functions-have-names
    │   │   ├───.github
    │   │   └───test
    │   ├───generator-function
    │   │   ├───.github
    │   │   └───test
    │   ├───gensync
    │   │   └───test
    │   ├───get-caller-file
    │   ├───get-intrinsic
    │   │   ├───.github
    │   │   └───test
    │   ├───get-own-enumerable-property-symbols
    │   │   └───lib
    │   ├───get-package-type
    │   ├───get-proto
    │   │   ├───.github
    │   │   └───test
    │   ├───get-stream
    │   ├───get-symbol-description
    │   │   ├───.github
    │   │   └───test
    │   ├───glob
    │   ├───glob-parent
    │   ├───glob-to-regexp
    │   ├───global-modules
    │   ├───global-prefix
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───which
    │   │           └───bin
    │   ├───globals
    │   ├───globalthis
    │   │   └───test
    │   ├───globby
    │   ├───gopd
    │   │   ├───.github
    │   │   └───test
    │   ├───graceful-fs
    │   ├───graphemer
    │   │   └───lib
    │   ├───gzip-size
    │   ├───handle-thing
    │   │   ├───lib
    │   │   └───test
    │   ├───harmony-reflect
    │   ├───has-bigints
    │   │   ├───.github
    │   │   └───test
    │   ├───has-flag
    │   ├───has-property-descriptors
    │   │   ├───.github
    │   │   └───test
    │   ├───has-proto
    │   │   ├───.github
    │   │   └───test
    │   ├───has-symbols
    │   │   ├───.github
    │   │   └───test
    │   │       └───shams
    │   ├───has-tostringtag
    │   │   ├───.github
    │   │   └───test
    │   │       └───shams
    │   ├───hasown
    │   │   └───.github
    │   ├───he
    │   │   ├───bin
    │   │   └───man
    │   ├───hoist-non-react-statics
    │   │   ├───dist
    │   │   ├───node_modules
    │   │   │   └───react-is
    │   │   │       ├───cjs
    │   │   │       └───umd
    │   │   └───src
    │   ├───hoopy
    │   ├───hpack.js
    │   │   ├───bin
    │   │   ├───lib
    │   │   │   └───hpack
    │   │   ├───node_modules
    │   │   │   ├───isarray
    │   │   │   ├───readable-stream
    │   │   │   │   ├───doc
    │   │   │   │   │   └───wg-meetings
    │   │   │   │   └───lib
    │   │   │   │       └───internal
    │   │   │   │           └───streams
    │   │   │   ├───safe-buffer
    │   │   │   └───string_decoder
    │   │   │       └───lib
    │   │   ├───test
    │   │   └───tools
    │   ├───html-encoding-sniffer
    │   │   └───lib
    │   ├───html-entities
    │   │   ├───dist
    │   │   │   ├───commonjs
    │   │   │   └───esm
    │   │   └───src
    │   ├───html-escaper
    │   │   ├───cjs
    │   │   ├───esm
    │   │   └───test
    │   ├───html-minifier-terser
    │   │   └───src
    │   ├───html-webpack-plugin
    │   │   └───lib
    │   ├───htmlparser2
    │   │   └───lib
    │   ├───http-deceiver
    │   │   ├───lib
    │   │   └───test
    │   ├───http-errors
    │   ├───http-parser-js
    │   ├───http-proxy
    │   │   └───lib
    │   │       └───http-proxy
    │   │           └───passes
    │   ├───http-proxy-agent
    │   │   └───dist
    │   ├───http-proxy-middleware
    │   │   └───dist
    │   │       └───handlers
    │   ├───https-proxy-agent
    │   │   └───dist
    │   ├───human-signals
    │   │   └───build
    │   │       └───src
    │   ├───iconv-lite
    │   │   ├───.github
    │   │   ├───.idea
    │   │   │   ├───codeStyles
    │   │   │   └───inspectionProfiles
    │   │   ├───encodings
    │   │   │   └───tables
    │   │   └───lib
    │   ├───icss-utils
    │   │   └───src
    │   ├───idb
    │   │   └───build
    │   ├───identity-obj-proxy
    │   │   └───src
    │   │       ├───test-redirections
    │   │       └───__tests__
    │   ├───ignore
    │   ├───immer
    │   │   ├───compat
    │   │   │   └───pre-3.7
    │   │   │       └───dist
    │   │   ├───dist
    │   │   │   ├───core
    │   │   │   ├───plugins
    │   │   │   ├───types
    │   │   │   └───utils
    │   │   └───src
    │   │       ├───core
    │   │       ├───plugins
    │   │       ├───types
    │   │       └───utils
    │   ├───import-fresh
    │   │   └───node_modules
    │   │       └───resolve-from
    │   ├───import-local
    │   │   └───fixtures
    │   ├───imurmurhash
    │   ├───indent-string
    │   ├───inflight
    │   ├───inherits
    │   ├───ini
    │   ├───internal-slot
    │   │   ├───.github
    │   │   └───test
    │   ├───ipaddr.js
    │   │   └───lib
    │   ├───is-array-buffer
    │   │   ├───.github
    │   │   └───test
    │   ├───is-arrayish
    │   ├───is-async-function
    │   │   └───test
    │   ├───is-bigint
    │   │   ├───.github
    │   │   └───test
    │   ├───is-binary-path
    │   ├───is-boolean-object
    │   │   ├───.github
    │   │   └───test
    │   ├───is-callable
    │   │   ├───.github
    │   │   └───test
    │   ├───is-core-module
    │   │   └───test
    │   ├───is-data-view
    │   │   ├───.github
    │   │   └───test
    │   ├───is-date-object
    │   │   ├───.github
    │   │   └───test
    │   ├───is-docker
    │   ├───is-extglob
    │   ├───is-finalizationregistry
    │   │   ├───.github
    │   │   └───test
    │   ├───is-fullwidth-code-point
    │   ├───is-generator-fn
    │   ├───is-generator-function
    │   │   └───test
    │   ├───is-glob
    │   ├───is-map
    │   │   ├───.github
    │   │   └───test
    │   ├───is-module
    │   ├───is-negative-zero
    │   │   ├───.github
    │   │   └───test
    │   ├───is-number
    │   ├───is-number-object
    │   │   ├───.github
    │   │   └───test
    │   ├───is-obj
    │   ├───is-path-inside
    │   ├───is-plain-obj
    │   ├───is-potential-custom-element-name
    │   ├───is-regex
    │   │   └───test
    │   ├───is-regexp
    │   ├───is-root
    │   ├───is-set
    │   │   ├───.github
    │   │   └───test
    │   ├───is-shared-array-buffer
    │   │   ├───.github
    │   │   └───test
    │   ├───is-stream
    │   ├───is-string
    │   │   ├───.github
    │   │   └───test
    │   ├───is-symbol
    │   │   ├───.github
    │   │   └───test
    │   ├───is-typed-array
    │   │   ├───.github
    │   │   └───test
    │   ├───is-typedarray
    │   ├───is-weakmap
    │   │   ├───.github
    │   │   └───test
    │   ├───is-weakref
    │   │   ├───.github
    │   │   └───test
    │   ├───is-weakset
    │   │   ├───.github
    │   │   └───test
    │   ├───is-wsl
    │   ├───isarray
    │   ├───isexe
    │   │   └───test
    │   ├───istanbul-lib-coverage
    │   │   └───lib
    │   ├───istanbul-lib-instrument
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   └───semver
    │   │   │       └───bin
    │   │   └───src
    │   ├───istanbul-lib-report
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───make-dir
    │   ├───istanbul-lib-source-maps
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───istanbul-reports
    │   │   └───lib
    │   │       ├───clover
    │   │       ├───cobertura
    │   │       ├───html
    │   │       │   └───assets
    │   │       │       └───vendor
    │   │       ├───html-spa
    │   │       │   ├───assets
    │   │       │   └───src
    │   │       ├───json
    │   │       ├───json-summary
    │   │       ├───lcov
    │   │       ├───lcovonly
    │   │       ├───none
    │   │       ├───teamcity
    │   │       ├───text
    │   │       ├───text-lcov
    │   │       └───text-summary
    │   ├───iterator.prototype
    │   │   ├───.github
    │   │   └───test
    │   ├───jake
    │   │   ├───bin
    │   │   ├───lib
    │   │   │   ├───task
    │   │   │   └───utils
    │   │   └───test
    │   │       ├───integration
    │   │       │   └───jakelib
    │   │       └───unit
    │   ├───jest
    │   │   ├───bin
    │   │   └───build
    │   ├───jest-changed-files
    │   │   └───build
    │   ├───jest-circus
    │   │   └───build
    │   │       └───legacy-code-todo-rewrite
    │   ├───jest-cli
    │   │   ├───bin
    │   │   └───build
    │   │       ├───cli
    │   │       └───init
    │   ├───jest-config
    │   │   └───build
    │   ├───jest-diff
    │   │   └───build
    │   ├───jest-docblock
    │   │   └───build
    │   ├───jest-each
    │   │   └───build
    │   │       └───table
    │   ├───jest-environment-jsdom
    │   │   └───build
    │   ├───jest-environment-node
    │   │   └───build
    │   ├───jest-get-type
    │   │   └───build
    │   ├───jest-haste-map
    │   │   └───build
    │   │       ├───crawlers
    │   │       ├───lib
    │   │       └───watchers
    │   ├───jest-jasmine2
    │   │   └───build
    │   │       └───jasmine
    │   ├───jest-leak-detector
    │   │   └───build
    │   ├───jest-matcher-utils
    │   │   └───build
    │   ├───jest-message-util
    │   │   └───build
    │   ├───jest-mock
    │   │   └───build
    │   ├───jest-pnp-resolver
    │   ├───jest-regex-util
    │   │   └───build
    │   ├───jest-resolve
    │   │   └───build
    │   ├───jest-resolve-dependencies
    │   │   └───build
    │   ├───jest-runner
    │   │   └───build
    │   ├───jest-runtime
    │   │   └───build
    │   ├───jest-serializer
    │   │   └───build
    │   ├───jest-snapshot
    │   │   └───build
    │   ├───jest-util
    │   │   └───build
    │   ├───jest-validate
    │   │   └───build
    │   ├───jest-watch-typeahead
    │   │   ├───build
    │   │   │   ├───file_name_plugin
    │   │   │   ├───lib
    │   │   │   ├───test_name_plugin
    │   │   │   └───types
    │   │   └───node_modules
    │   │       ├───@jest
    │   │       │   ├───console
    │   │       │   │   ├───build
    │   │       │   │   └───node_modules
    │   │       │   │       └───slash
    │   │       │   ├───test-result
    │   │       │   │   └───build
    │   │       │   └───types
    │   │       │       └───build
    │   │       ├───@types
    │   │       │   └───yargs
    │   │       ├───ansi-styles
    │   │       ├───emittery
    │   │       ├───jest-message-util
    │   │       │   ├───build
    │   │       │   └───node_modules
    │   │       │       └───slash
    │   │       ├───jest-regex-util
    │   │       │   └───build
    │   │       ├───jest-util
    │   │       │   └───build
    │   │       ├───jest-watcher
    │   │       │   ├───build
    │   │       │   │   └───lib
    │   │       │   └───node_modules
    │   │       │       ├───string-length
    │   │       │       └───strip-ansi
    │   │       ├───pretty-format
    │   │       │   └───build
    │   │       │       └───plugins
    │   │       │           └───lib
    │   │       ├───react-is
    │   │       │   ├───cjs
    │   │       │   └───umd
    │   │       ├───slash
    │   │       ├───string-length
    │   │       │   └───node_modules
    │   │       │       └───char-regex
    │   │       └───strip-ansi
    │   │           └───node_modules
    │   │               └───ansi-regex
    │   ├───jest-watcher
    │   │   └───build
    │   │       └───lib
    │   ├───jest-worker
    │   │   ├───build
    │   │   │   ├───base
    │   │   │   └───workers
    │   │   └───node_modules
    │   │       └───supports-color
    │   ├───jiti
    │   │   ├───bin
    │   │   ├───dist
    │   │   │   └───plugins
    │   │   └───lib
    │   ├───js-tokens
    │   ├───js-yaml
    │   │   ├───bin
    │   │   ├───dist
    │   │   └───lib
    │   │       └───js-yaml
    │   │           ├───schema
    │   │           └───type
    │   │               └───js
    │   ├───jsdom
    │   │   └───lib
    │   │       └───jsdom
    │   │           ├───browser
    │   │           │   ├───parser
    │   │           │   └───resources
    │   │           ├───level2
    │   │           ├───level3
    │   │           └───living
    │   │               ├───aborting
    │   │               ├───attributes
    │   │               ├───constraint-validation
    │   │               ├───cssom
    │   │               ├───custom-elements
    │   │               ├───domparsing
    │   │               ├───events
    │   │               ├───fetch
    │   │               ├───file-api
    │   │               ├───generated
    │   │               ├───helpers
    │   │               │   └───svg
    │   │               ├───hr-time
    │   │               ├───mutation-observer
    │   │               ├───navigator
    │   │               ├───nodes
    │   │               ├───range
    │   │               ├───selection
    │   │               ├───svg
    │   │               ├───traversal
    │   │               ├───websockets
    │   │               ├───webstorage
    │   │               ├───window
    │   │               └───xhr
    │   ├───jsesc
    │   │   ├───bin
    │   │   └───man
    │   ├───json-buffer
    │   │   └───test
    │   ├───json-parse-even-better-errors
    │   ├───json-schema-traverse
    │   │   └───spec
    │   │       └───fixtures
    │   ├───json-stable-stringify-without-jsonify
    │   │   ├───example
    │   │   └───test
    │   ├───json5
    │   │   ├───dist
    │   │   └───lib
    │   ├───jsonfile
    │   ├───jsonpath
    │   │   ├───bin
    │   │   ├───generated
    │   │   ├───include
    │   │   ├───lib
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   └───esprima
    │   │   │       ├───bin
    │   │   │       └───test
    │   │   └───test
    │   │       └───data
    │   ├───jsonpointer
    │   ├───jsx-ast-utils
    │   │   ├───.github
    │   │   ├───lib
    │   │   │   └───values
    │   │   │       └───expressions
    │   │   ├───src
    │   │   │   └───values
    │   │   │       └───expressions
    │   │   └───__tests__
    │   │       └───src
    │   ├───keyv
    │   │   └───src
    │   ├───kind-of
    │   ├───kleur
    │   ├───klona
    │   │   ├───dist
    │   │   ├───full
    │   │   ├───json
    │   │   └───lite
    │   ├───language-subtag-registry
    │   │   └───data
    │   │       └───json
    │   ├───language-tags
    │   │   └───lib
    │   ├───launch-editor
    │   │   └───editor-info
    │   ├───leven
    │   ├───levn
    │   │   └───lib
    │   ├───lilconfig
    │   │   └───dist
    │   ├───lines-and-columns
    │   │   └───build
    │   ├───loader-runner
    │   │   └───lib
    │   ├───loader-utils
    │   │   └───lib
    │   │       └───hash
    │   ├───locate-path
    │   ├───lodash
    │   │   └───fp
    │   ├───lodash.debounce
    │   ├───lodash.memoize
    │   ├───lodash.merge
    │   ├───lodash.sortby
    │   ├───lodash.uniq
    │   ├───loose-envify
    │   ├───lower-case
    │   │   ├───dist
    │   │   └───dist.es2015
    │   ├───lru-cache
    │   ├───lz-string
    │   │   ├───bin
    │   │   ├───libs
    │   │   ├───reference
    │   │   ├───tests
    │   │   │   └───lib
    │   │   │       └───jasmine-1.3.1
    │   │   └───typings
    │   ├───magic-string
    │   │   └───dist
    │   ├───make-dir
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───semver
    │   │           └───bin
    │   ├───makeerror
    │   │   └───lib
    │   ├───math-intrinsics
    │   │   ├───.github
    │   │   ├───constants
    │   │   └───test
    │   ├───mdn-data
    │   │   ├───api
    │   │   ├───css
    │   │   └───l10n
    │   ├───media-typer
    │   ├───memfs
    │   │   └───lib
    │   │       └───internal
    │   ├───merge-descriptors
    │   ├───merge-stream
    │   ├───merge2
    │   ├───methods
    │   ├───micromatch
    │   ├───mime
    │   │   └───src
    │   ├───mime-db
    │   ├───mime-types
    │   ├───mimic-fn
    │   ├───min-indent
    │   ├───mini-css-extract-plugin
    │   │   ├───dist
    │   │   │   └───hmr
    │   │   └───types
    │   │       └───hmr
    │   ├───minimalistic-assert
    │   ├───minimatch
    │   ├───minimist
    │   │   ├───.github
    │   │   ├───example
    │   │   └───test
    │   ├───mkdirp
    │   │   └───bin
    │   ├───ms
    │   ├───multicast-dns
    │   ├───mz
    │   ├───nanoid
    │   │   ├───.claude
    │   │   ├───async
    │   │   ├───bin
    │   │   ├───non-secure
    │   │   └───url-alphabet
    │   ├───natural-compare
    │   ├───natural-compare-lite
    │   ├───negotiator
    │   │   └───lib
    │   ├───neo-async
    │   ├───no-case
    │   │   ├───dist
    │   │   └───dist.es2015
    │   ├───node-exports-info
    │   │   ├───.github
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   └───semver
    │   │   │       └───bin
    │   │   └───test
    │   ├───node-forge
    │   │   ├───dist
    │   │   ├───flash
    │   │   │   └───swf
    │   │   └───lib
    │   ├───node-int64
    │   ├───node-releases
    │   │   └───data
    │   │       ├───processed
    │   │       └───release-schedule
    │   ├───normalize-path
    │   ├───normalize-url
    │   ├───npm-run-path
    │   ├───nth-check
    │   │   └───lib
    │   │       └───esm
    │   ├───nwsapi
    │   │   ├───dist
    │   │   └───src
    │   │       └───modules
    │   ├───object-assign
    │   ├───object-hash
    │   │   └───dist
    │   ├───object-inspect
    │   │   ├───.github
    │   │   ├───example
    │   │   └───test
    │   │       └───browser
    │   ├───object-keys
    │   │   └───test
    │   ├───object.assign
    │   │   ├───.github
    │   │   ├───dist
    │   │   └───test
    │   ├───object.entries
    │   │   └───test
    │   ├───object.fromentries
    │   │   └───test
    │   ├───object.getownpropertydescriptors
    │   │   └───test
    │   ├───object.groupby
    │   │   ├───.github
    │   │   └───test
    │   ├───object.values
    │   │   └───test
    │   ├───obuf
    │   │   └───test
    │   ├───on-finished
    │   ├───on-headers
    │   ├───once
    │   ├───onetime
    │   ├───open
    │   ├───optionator
    │   │   └───lib
    │   ├───own-keys
    │   │   ├───.github
    │   │   └───test
    │   ├───p-limit
    │   ├───p-locate
    │   ├───p-retry
    │   ├───p-try
    │   ├───param-case
    │   │   ├───dist
    │   │   └───dist.es2015
    │   ├───parent-module
    │   ├───parse-json
    │   ├───parse5
    │   │   └───lib
    │   │       ├───common
    │   │       ├───extensions
    │   │       │   ├───error-reporting
    │   │       │   ├───location-info
    │   │       │   └───position-tracking
    │   │       ├───parser
    │   │       ├───serializer
    │   │       ├───tokenizer
    │   │       ├───tree-adapters
    │   │       └───utils
    │   ├───parseurl
    │   ├───pascal-case
    │   │   ├───dist
    │   │   └───dist.es2015
    │   ├───path-exists
    │   ├───path-is-absolute
    │   ├───path-key
    │   ├───path-parse
    │   ├───path-to-regexp
    │   ├───path-type
    │   ├───performance-now
    │   │   ├───lib
    │   │   ├───src
    │   │   └───test
    │   │       └───scripts
    │   ├───picocolors
    │   ├───picomatch
    │   │   └───lib
    │   ├───pify
    │   ├───pirates
    │   │   └───lib
    │   ├───pkg-dir
    │   ├───pkg-up
    │   │   └───node_modules
    │   │       ├───find-up
    │   │       ├───locate-path
    │   │       ├───p-locate
    │   │       └───path-exists
    │   ├───possible-typed-array-names
    │   │   ├───.github
    │   │   └───test
    │   ├───postcss
    │   │   └───lib
    │   ├───postcss-attribute-case-insensitive
    │   │   └───dist
    │   ├───postcss-browser-comments
    │   ├───postcss-calc
    │   │   ├───src
    │   │   │   ├───lib
    │   │   │   └───__tests__
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-clamp
    │   ├───postcss-color-functional-notation
    │   │   └───dist
    │   ├───postcss-color-hex-alpha
    │   │   └───dist
    │   ├───postcss-color-rebeccapurple
    │   │   └───dist
    │   ├───postcss-colormin
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-convert-values
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-custom-media
    │   │   └───dist
    │   ├───postcss-custom-properties
    │   │   └───dist
    │   │       └───lib
    │   ├───postcss-custom-selectors
    │   │   └───dist
    │   ├───postcss-dir-pseudo-class
    │   │   └───dist
    │   ├───postcss-discard-comments
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-discard-duplicates
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-discard-empty
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-discard-overridden
    │   │   └───src
    │   ├───postcss-double-position-gradients
    │   │   └───dist
    │   ├───postcss-env-function
    │   │   └───dist
    │   ├───postcss-flexbugs-fixes
    │   │   └───bugs
    │   ├───postcss-focus-visible
    │   │   └───dist
    │   ├───postcss-focus-within
    │   │   └───dist
    │   ├───postcss-font-variant
    │   ├───postcss-gap-properties
    │   │   └───dist
    │   ├───postcss-image-set-function
    │   │   └───dist
    │   │       └───lib
    │   ├───postcss-import
    │   │   └───lib
    │   ├───postcss-initial
    │   │   ├───.github
    │   │   │   └───workflows
    │   │   ├───.vscode
    │   │   ├───lib
    │   │   └───~
    │   │       └───.config
    │   │           └───configstore
    │   ├───postcss-js
    │   ├───postcss-lab-function
    │   │   └───dist
    │   │       └───css-color-4
    │   ├───postcss-loader
    │   │   └───dist
    │   ├───postcss-logical
    │   │   └───dist
    │   ├───postcss-media-minmax
    │   ├───postcss-merge-longhand
    │   │   ├───src
    │   │   │   └───lib
    │   │   │       └───decl
    │   │   └───types
    │   │       └───lib
    │   │           └───decl
    │   ├───postcss-merge-rules
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-minify-font-values
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-minify-gradients
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-minify-params
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-minify-selectors
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-modules-extract-imports
    │   │   └───src
    │   ├───postcss-modules-local-by-default
    │   │   ├───node_modules
    │   │   │   └───postcss-selector-parser
    │   │   │       └───dist
    │   │   │           ├───selectors
    │   │   │           └───util
    │   │   └───src
    │   ├───postcss-modules-scope
    │   │   ├───node_modules
    │   │   │   └───postcss-selector-parser
    │   │   │       └───dist
    │   │   │           ├───selectors
    │   │   │           └───util
    │   │   └───src
    │   ├───postcss-modules-values
    │   │   └───src
    │   ├───postcss-nested
    │   ├───postcss-nesting
    │   │   └───dist
    │   │       └───lib
    │   │           └───merge-selectors
    │   ├───postcss-normalize
    │   ├───postcss-normalize-charset
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-normalize-display-values
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-normalize-positions
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-normalize-repeat-style
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-normalize-string
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-normalize-timing-functions
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-normalize-unicode
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-normalize-url
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-normalize-whitespace
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-opacity-percentage
    │   ├───postcss-ordered-values
    │   │   ├───src
    │   │   │   ├───lib
    │   │   │   └───rules
    │   │   └───types
    │   │       ├───lib
    │   │       └───rules
    │   ├───postcss-overflow-shorthand
    │   │   └───dist
    │   ├───postcss-page-break
    │   ├───postcss-place
    │   │   └───dist
    │   ├───postcss-preset-env
    │   │   └───dist
    │   ├───postcss-pseudo-class-any-link
    │   │   └───dist
    │   ├───postcss-reduce-initial
    │   │   ├───src
    │   │   │   └───data
    │   │   └───types
    │   ├───postcss-reduce-transforms
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-replace-overflow-wrap
    │   ├───postcss-selector-not
    │   │   └───dist
    │   ├───postcss-selector-parser
    │   │   └───dist
    │   │       ├───selectors
    │   │       └───util
    │   ├───postcss-svgo
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   ├───commander
    │   │   │   │   └───typings
    │   │   │   ├───css-tree
    │   │   │   │   ├───data
    │   │   │   │   ├───dist
    │   │   │   │   └───lib
    │   │   │   │       ├───common
    │   │   │   │       ├───convertor
    │   │   │   │       ├───definition-syntax
    │   │   │   │       ├───generator
    │   │   │   │       ├───lexer
    │   │   │   │       ├───parser
    │   │   │   │       ├───syntax
    │   │   │   │       │   ├───atrule
    │   │   │   │       │   ├───config
    │   │   │   │       │   ├───function
    │   │   │   │       │   ├───node
    │   │   │   │       │   ├───pseudo
    │   │   │   │       │   │   └───common
    │   │   │   │       │   └───scope
    │   │   │   │       ├───tokenizer
    │   │   │   │       ├───utils
    │   │   │   │       └───walker
    │   │   │   ├───mdn-data
    │   │   │   │   ├───api
    │   │   │   │   ├───css
    │   │   │   │   └───l10n
    │   │   │   ├───sax
    │   │   │   │   └───lib
    │   │   │   ├───source-map
    │   │   │   │   ├───dist
    │   │   │   │   └───lib
    │   │   │   └───svgo
    │   │   │       ├───bin
    │   │   │       ├───dist
    │   │   │       ├───lib
    │   │   │       │   └───svgo
    │   │   │       └───plugins
    │   │   ├───src
    │   │   │   └───lib
    │   │   └───types
    │   │       └───lib
    │   ├───postcss-unique-selectors
    │   │   ├───src
    │   │   └───types
    │   ├───postcss-value-parser
    │   │   └───lib
    │   ├───prelude-ls
    │   │   └───lib
    │   ├───pretty-bytes
    │   ├───pretty-error
    │   │   ├───.github
    │   │   │   └───workflows
    │   │   ├───lib
    │   │   ├───src
    │   │   └───test
    │   ├───pretty-format
    │   │   ├───build
    │   │   │   └───plugins
    │   │   │       └───lib
    │   │   └───node_modules
    │   │       └───ansi-styles
    │   ├───process-nextick-args
    │   ├───promise
    │   │   ├───domains
    │   │   ├───lib
    │   │   ├───setimmediate
    │   │   └───src
    │   ├───prompts
    │   │   ├───dist
    │   │   │   ├───dateparts
    │   │   │   ├───elements
    │   │   │   └───util
    │   │   └───lib
    │   │       ├───dateparts
    │   │       ├───elements
    │   │       └───util
    │   ├───prop-types
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───react-is
    │   │           ├───cjs
    │   │           └───umd
    │   ├───proxy-addr
    │   │   └───node_modules
    │   │       └───ipaddr.js
    │   │           └───lib
    │   ├───proxy-from-env
    │   ├───psl
    │   │   ├───data
    │   │   ├───dist
    │   │   └───types
    │   ├───punycode
    │   ├───q
    │   ├───qs
    │   │   ├───.github
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───test
    │   ├───querystringify
    │   ├───queue-microtask
    │   ├───raf
    │   ├───randombytes
    │   ├───range-parser
    │   ├───raw-body
    │   │   └───node_modules
    │   │       └───iconv-lite
    │   │           ├───encodings
    │   │           │   └───tables
    │   │           └───lib
    │   ├───react
    │   │   └───cjs
    │   ├───react-app-polyfill
    │   ├───react-dev-utils
    │   │   └───node_modules
    │   │       ├───find-up
    │   │       ├───loader-utils
    │   │       │   └───lib
    │   │       │       └───hash
    │   │       ├───locate-path
    │   │       ├───p-limit
    │   │       └───p-locate
    │   ├───react-dom
    │   │   └───cjs
    │   ├───react-error-overlay
    │   │   └───lib
    │   ├───react-is
    │   │   ├───cjs
    │   │   └───umd
    │   ├───react-refresh
    │   │   └───cjs
    │   ├───react-router
    │   │   ├───dist
    │   │   │   ├───development
    │   │   │   │   └───lib
    │   │   │   │       └───types
    │   │   │   └───production
    │   │   │       └───lib
    │   │   │           └───types
    │   │   └───node_modules
    │   │       └───cookie
    │   │           └───dist
    │   ├───react-router-dom
    │   │   └───dist
    │   ├───react-scripts
    │   │   ├───bin
    │   │   ├───config
    │   │   │   ├───jest
    │   │   │   └───webpack
    │   │   │       └───persistentCache
    │   │   ├───lib
    │   │   ├───scripts
    │   │   │   └───utils
    │   │   ├───template
    │   │   └───template-typescript
    │   ├───react-transition-group
    │   │   ├───cjs
    │   │   │   └───utils
    │   │   ├───config
    │   │   ├───CSSTransition
    │   │   ├───dist
    │   │   ├───esm
    │   │   │   └───utils
    │   │   ├───ReplaceTransition
    │   │   ├───SwitchTransition
    │   │   ├───Transition
    │   │   ├───TransitionGroup
    │   │   └───TransitionGroupContext
    │   ├───read-cache
    │   ├───readable-stream
    │   │   └───lib
    │   │       └───internal
    │   │           └───streams
    │   ├───readdirp
    │   ├───recursive-readdir
    │   ├───redent
    │   ├───reflect.getprototypeof
    │   │   └───test
    │   ├───regenerate
    │   ├───regenerate-unicode-properties
    │   │   ├───Binary_Property
    │   │   ├───General_Category
    │   │   ├───Property_of_Strings
    │   │   ├───Script
    │   │   └───Script_Extensions
    │   ├───regenerator-runtime
    │   ├───regex-parser
    │   │   └───lib
    │   │       └───typings
    │   ├───regexp.prototype.flags
    │   │   └───test
    │   ├───regexpu-core
    │   │   └───data
    │   ├───regjsgen
    │   ├───regjsparser
    │   │   └───bin
    │   ├───relateurl
    │   │   └───lib
    │   │       ├───parse
    │   │       ├───relate
    │   │       └───util
    │   ├───renderkid
    │   │   ├───docs
    │   │   │   └───images
    │   │   └───lib
    │   │       ├───ansiPainter
    │   │       ├───layout
    │   │       │   └───block
    │   │       │       ├───blockAppendor
    │   │       │       ├───blockPrependor
    │   │       │       ├───lineAppendor
    │   │       │       ├───linePrependor
    │   │       │       └───lineWrapper
    │   │       └───renderKid
    │   │           ├───styleApplier
    │   │           └───styles
    │   │               └───rule
    │   │                   └───declarationBlock
    │   ├───require-directory
    │   ├───require-from-string
    │   ├───requires-port
    │   ├───resolve
    │   │   ├───.claude
    │   │   ├───.github
    │   │   ├───bin
    │   │   ├───example
    │   │   ├───lib
    │   │   └───test
    │   │       ├───dotdot
    │   │       │   └───abc
    │   │       ├───module_dir
    │   │       │   ├───xmodules
    │   │       │   │   └───aaa
    │   │       │   ├───ymodules
    │   │       │   │   └───aaa
    │   │       │   └───zmodules
    │   │       │       └───bbb
    │   │       ├───node_path
    │   │       │   ├───x
    │   │       │   │   ├───aaa
    │   │       │   │   └───ccc
    │   │       │   └───y
    │   │       │       ├───bbb
    │   │       │       └───ccc
    │   │       ├───pathfilter
    │   │       │   └───deep_ref
    │   │       ├───precedence
    │   │       │   ├───aaa
    │   │       │   └───bbb
    │   │       ├───resolver
    │   │       │   ├───baz
    │   │       │   ├───browser_field
    │   │       │   ├───dot_main
    │   │       │   ├───dot_slash_main
    │   │       │   ├───false_main
    │   │       │   ├───incorrect_main
    │   │       │   ├───invalid_main
    │   │       │   ├───multirepo
    │   │       │   │   └───packages
    │   │       │   │       ├───package-a
    │   │       │   │       └───package-b
    │   │       │   ├───nested_symlinks
    │   │       │   │   └───mylib
    │   │       │   ├───other_path
    │   │       │   │   └───lib
    │   │       │   ├───quux
    │   │       │   │   └───foo
    │   │       │   ├───same_names
    │   │       │   │   └───foo
    │   │       │   ├───symlinked
    │   │       │   │   ├───package
    │   │       │   │   └───_
    │   │       │   │       ├───node_modules
    │   │       │   │       └───symlink_target
    │   │       │   └───without_basedir
    │   │       └───shadowed_core
    │   │           └───node_modules
    │   │               └───util
    │   ├───resolve-cwd
    │   ├───resolve-from
    │   ├───resolve-url-loader
    │   │   ├───docs
    │   │   ├───lib
    │   │   │   ├───engine
    │   │   │   └───join-function
    │   │   └───node_modules
    │   │       ├───convert-source-map
    │   │       ├───picocolors
    │   │       ├───postcss
    │   │       │   └───lib
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───resolve.exports
    │   │   └───dist
    │   ├───retry
    │   │   ├───example
    │   │   └───lib
    │   ├───reusify
    │   │   ├───.github
    │   │   │   └───workflows
    │   │   └───benchmarks
    │   ├───rimraf
    │   ├───rollup
    │   │   └───dist
    │   │       ├───bin
    │   │       ├───es
    │   │       │   └───shared
    │   │       └───shared
    │   ├───rollup-plugin-terser
    │   │   └───node_modules
    │   │       ├───jest-worker
    │   │       │   └───build
    │   │       │       ├───base
    │   │       │       └───workers
    │   │       └───serialize-javascript
    │   │           └───.vscode
    │   ├───run-parallel
    │   ├───safe-array-concat
    │   │   ├───.github
    │   │   └───test
    │   ├───safe-buffer
    │   ├───safe-push-apply
    │   │   ├───.github
    │   │   └───test
    │   ├───safe-regex-test
    │   │   ├───.github
    │   │   └───test
    │   ├───safer-buffer
    │   ├───sanitize.css
    │   ├───sass-loader
    │   │   └───dist
    │   ├───sax
    │   │   └───lib
    │   ├───saxes
    │   ├───scheduler
    │   │   └───cjs
    │   ├───schema-utils
    │   │   ├───declarations
    │   │   │   ├───keywords
    │   │   │   └───util
    │   │   ├───dist
    │   │   │   ├───keywords
    │   │   │   └───util
    │   │   └───node_modules
    │   │       ├───ajv
    │   │       │   ├───dist
    │   │       │   │   ├───compile
    │   │       │   │   │   ├───codegen
    │   │       │   │   │   ├───jtd
    │   │       │   │   │   └───validate
    │   │       │   │   ├───refs
    │   │       │   │   │   ├───json-schema-2019-09
    │   │       │   │   │   │   └───meta
    │   │       │   │   │   └───json-schema-2020-12
    │   │       │   │   │       └───meta
    │   │       │   │   ├───runtime
    │   │       │   │   ├───standalone
    │   │       │   │   ├───types
    │   │       │   │   └───vocabularies
    │   │       │   │       ├───applicator
    │   │       │   │       ├───core
    │   │       │   │       ├───discriminator
    │   │       │   │       ├───dynamic
    │   │       │   │       ├───format
    │   │       │   │       ├───jtd
    │   │       │   │       ├───unevaluated
    │   │       │   │       └───validation
    │   │       │   └───lib
    │   │       │       ├───compile
    │   │       │       │   ├───codegen
    │   │       │       │   ├───jtd
    │   │       │       │   └───validate
    │   │       │       ├───refs
    │   │       │       │   ├───json-schema-2019-09
    │   │       │       │   │   └───meta
    │   │       │       │   └───json-schema-2020-12
    │   │       │       │       └───meta
    │   │       │       ├───runtime
    │   │       │       ├───standalone
    │   │       │       ├───types
    │   │       │       └───vocabularies
    │   │       │           ├───applicator
    │   │       │           ├───core
    │   │       │           ├───discriminator
    │   │       │           ├───dynamic
    │   │       │           ├───format
    │   │       │           ├───jtd
    │   │       │           ├───unevaluated
    │   │       │           └───validation
    │   │       ├───ajv-keywords
    │   │       │   ├───dist
    │   │       │   │   ├───definitions
    │   │       │   │   └───keywords
    │   │       │   └───src
    │   │       │       ├───definitions
    │   │       │       └───keywords
    │   │       └───json-schema-traverse
    │   │           ├───.github
    │   │           │   └───workflows
    │   │           └───spec
    │   │               └───fixtures
    │   ├───select-hose
    │   │   ├───lib
    │   │   └───test
    │   ├───selfsigned
    │   │   └───test
    │   ├───semver
    │   │   ├───bin
    │   │   ├───classes
    │   │   ├───functions
    │   │   ├───internal
    │   │   └───ranges
    │   ├───send
    │   │   └───node_modules
    │   │       └───debug
    │   │           ├───node_modules
    │   │           │   └───ms
    │   │           └───src
    │   ├───serialize-javascript
    │   ├───serve-index
    │   │   ├───node_modules
    │   │   │   ├───debug
    │   │   │   │   └───src
    │   │   │   ├───depd
    │   │   │   │   └───lib
    │   │   │   │       ├───browser
    │   │   │   │       └───compat
    │   │   │   ├───http-errors
    │   │   │   ├───ms
    │   │   │   └───statuses
    │   │   └───public
    │   │       └───icons
    │   ├───serve-static
    │   ├───set-cookie-parser
    │   │   └───lib
    │   ├───set-function-length
    │   │   └───.github
    │   ├───set-function-name
    │   │   └───.github
    │   ├───set-proto
    │   │   ├───.github
    │   │   └───test
    │   ├───setprototypeof
    │   │   └───test
    │   ├───shebang-command
    │   ├───shebang-regex
    │   ├───shell-quote
    │   │   ├───.github
    │   │   └───test
    │   ├───side-channel
    │   │   ├───.github
    │   │   └───test
    │   ├───side-channel-list
    │   │   ├───.github
    │   │   └───test
    │   ├───side-channel-map
    │   │   ├───.github
    │   │   └───test
    │   ├───side-channel-weakmap
    │   │   ├───.github
    │   │   └───test
    │   ├───signal-exit
    │   ├───sisteransi
    │   │   └───src
    │   ├───slash
    │   ├───sockjs
    │   │   └───lib
    │   ├───source-list-map
    │   │   └───lib
    │   ├───source-map
    │   │   └───lib
    │   ├───source-map-js
    │   │   └───lib
    │   ├───source-map-loader
    │   │   └───dist
    │   ├───source-map-support
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───sourcemap-codec
    │   │   └───dist
    │   │       └───types
    │   ├───spdy
    │   │   ├───lib
    │   │   │   └───spdy
    │   │   └───test
    │   ├───spdy-transport
    │   │   └───lib
    │   │       └───spdy-transport
    │   │           └───protocol
    │   │               ├───base
    │   │               ├───http2
    │   │               └───spdy
    │   ├───sprintf-js
    │   │   ├───demo
    │   │   ├───dist
    │   │   ├───src
    │   │   └───test
    │   ├───stable
    │   ├───stack-utils
    │   │   └───node_modules
    │   │       └───escape-string-regexp
    │   ├───stackframe
    │   │   └───dist
    │   ├───static-eval
    │   │   ├───example
    │   │   └───test
    │   ├───statuses
    │   ├───stop-iteration-iterator
    │   │   ├───.github
    │   │   └───test
    │   ├───string-length
    │   ├───string-natural-compare
    │   ├───string-width
    │   │   └───node_modules
    │   │       └───emoji-regex
    │   │           └───es2015
    │   ├───string.prototype.includes
    │   │   ├───.github
    │   │   │   └───workflows
    │   │   └───tests
    │   ├───string.prototype.matchall
    │   │   ├───.github
    │   │   └───test
    │   ├───string.prototype.repeat
    │   │   └───tests
    │   ├───string.prototype.trim
    │   │   └───test
    │   ├───string.prototype.trimend
    │   │   └───test
    │   ├───string.prototype.trimstart
    │   │   └───test
    │   ├───stringify-object
    │   ├───string_decoder
    │   │   └───lib
    │   ├───strip-ansi
    │   ├───strip-bom
    │   ├───strip-comments
    │   │   └───lib
    │   ├───strip-final-newline
    │   ├───strip-indent
    │   ├───strip-json-comments
    │   ├───style-loader
    │   │   └───dist
    │   │       └───runtime
    │   ├───stylehacks
    │   │   ├───src
    │   │   │   ├───dictionary
    │   │   │   └───plugins
    │   │   └───types
    │   │       ├───dictionary
    │   │       └───plugins
    │   ├───stylis
    │   │   ├───dist
    │   │   │   └───umd
    │   │   └───src
    │   ├───sucrase
    │   │   ├───bin
    │   │   ├───dist
    │   │   │   ├───esm
    │   │   │   │   ├───parser
    │   │   │   │   │   ├───plugins
    │   │   │   │   │   │   └───jsx
    │   │   │   │   │   ├───tokenizer
    │   │   │   │   │   ├───traverser
    │   │   │   │   │   └───util
    │   │   │   │   ├───transformers
    │   │   │   │   └───util
    │   │   │   ├───parser
    │   │   │   │   ├───plugins
    │   │   │   │   │   └───jsx
    │   │   │   │   ├───tokenizer
    │   │   │   │   ├───traverser
    │   │   │   │   └───util
    │   │   │   ├───transformers
    │   │   │   ├───types
    │   │   │   │   ├───parser
    │   │   │   │   │   ├───plugins
    │   │   │   │   │   │   └───jsx
    │   │   │   │   │   ├───tokenizer
    │   │   │   │   │   ├───traverser
    │   │   │   │   │   └───util
    │   │   │   │   ├───transformers
    │   │   │   │   └───util
    │   │   │   └───util
    │   │   ├───node_modules
    │   │   │   └───commander
    │   │   │       └───typings
    │   │   ├───register
    │   │   └───ts-node-plugin
    │   ├───supports-color
    │   ├───supports-hyperlinks
    │   ├───supports-preserve-symlinks-flag
    │   │   ├───.github
    │   │   └───test
    │   ├───svg-parser
    │   │   └───dist
    │   ├───svgo
    │   │   ├───bin
    │   │   ├───lib
    │   │   │   └───svgo
    │   │   ├───node_modules
    │   │   │   ├───ansi-styles
    │   │   │   ├───chalk
    │   │   │   │   └───types
    │   │   │   ├───color-convert
    │   │   │   ├───color-name
    │   │   │   ├───css-select
    │   │   │   │   └───lib
    │   │   │   ├───css-what
    │   │   │   │   └───lib
    │   │   │   ├───dom-serializer
    │   │   │   ├───domutils
    │   │   │   │   ├───lib
    │   │   │   │   ├───node_modules
    │   │   │   │   │   └───domelementtype
    │   │   │   │   └───test
    │   │   │   │       └───tests
    │   │   │   ├───escape-string-regexp
    │   │   │   ├───has-flag
    │   │   │   ├───nth-check
    │   │   │   └───supports-color
    │   │   └───plugins
    │   ├───symbol-tree
    │   │   └───lib
    │   ├───tailwindcss
    │   │   ├───lib
    │   │   │   ├───cli
    │   │   │   │   ├───build
    │   │   │   │   ├───help
    │   │   │   │   └───init
    │   │   │   ├───css
    │   │   │   ├───lib
    │   │   │   ├───postcss-plugins
    │   │   │   │   └───nesting
    │   │   │   ├───public
    │   │   │   ├───util
    │   │   │   └───value-parser
    │   │   ├───nesting
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   ├───lilconfig
    │   │   │   │   └───src
    │   │   │   ├───postcss-load-config
    │   │   │   │   └───src
    │   │   │   └───yaml
    │   │   │       ├───browser
    │   │   │       │   └───dist
    │   │   │       │       ├───compose
    │   │   │       │       ├───doc
    │   │   │       │       ├───nodes
    │   │   │       │       ├───parse
    │   │   │       │       ├───schema
    │   │   │       │       │   ├───common
    │   │   │       │       │   ├───core
    │   │   │       │       │   ├───json
    │   │   │       │       │   └───yaml-1.1
    │   │   │       │       └───stringify
    │   │   │       └───dist
    │   │   │           ├───compose
    │   │   │           ├───doc
    │   │   │           ├───nodes
    │   │   │           ├───parse
    │   │   │           ├───schema
    │   │   │           │   ├───common
    │   │   │           │   ├───core
    │   │   │           │   ├───json
    │   │   │           │   └───yaml-1.1
    │   │   │           └───stringify
    │   │   ├───peers
    │   │   ├───scripts
    │   │   ├───src
    │   │   │   ├───cli
    │   │   │   │   ├───build
    │   │   │   │   ├───help
    │   │   │   │   └───init
    │   │   │   ├───css
    │   │   │   ├───lib
    │   │   │   ├───postcss-plugins
    │   │   │   │   └───nesting
    │   │   │   ├───public
    │   │   │   ├───util
    │   │   │   └───value-parser
    │   │   ├───stubs
    │   │   └───types
    │   │       └───generated
    │   ├───tapable
    │   │   └───lib
    │   ├───temp-dir
    │   ├───tempy
    │   │   └───node_modules
    │   │       └───type-fest
    │   │           └───source
    │   ├───terminal-link
    │   ├───terser
    │   │   ├───bin
    │   │   ├───dist
    │   │   ├───lib
    │   │   │   ├───compress
    │   │   │   └───utils
    │   │   ├───node_modules
    │   │   │   └───commander
    │   │   │       └───typings
    │   │   └───tools
    │   ├───terser-webpack-plugin
    │   │   ├───dist
    │   │   └───types
    │   ├───test-exclude
    │   ├───text-table
    │   │   ├───example
    │   │   └───test
    │   ├───thenify
    │   ├───thenify-all
    │   ├───throat
    │   ├───thunky
    │   ├───tinyglobby
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───fdir
    │   │       │   └───dist
    │   │       └───picomatch
    │   │           └───lib
    │   ├───tmpl
    │   │   └───lib
    │   ├───to-regex-range
    │   ├───toidentifier
    │   ├───tough-cookie
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───universalify
    │   ├───tr46
    │   │   └───lib
    │   ├───tryer
    │   │   ├───lib
    │   │   ├───src
    │   │   └───test
    │   ├───ts-interface-checker
    │   │   └───dist
    │   ├───tsconfig-paths
    │   │   ├───lib
    │   │   │   └───__tests__
    │   │   │       └───data
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   ├───json5
    │   │   │   │   ├───dist
    │   │   │   │   └───lib
    │   │   │   └───strip-bom
    │   │   └───src
    │   │       └───__tests__
    │   │           └───data
    │   ├───tslib
    │   │   └───modules
    │   ├───tsutils
    │   │   ├───node_modules
    │   │   │   └───tslib
    │   │   │       ├───modules
    │   │   │       └───test
    │   │   │           └───validateModuleExportsMatchCommonJS
    │   │   ├───typeguard
    │   │   │   ├───2.8
    │   │   │   ├───2.9
    │   │   │   ├───3.0
    │   │   │   ├───3.2
    │   │   │   └───next
    │   │   └───util
    │   ├───type-check
    │   │   └───lib
    │   ├───type-detect
    │   ├───type-fest
    │   │   ├───source
    │   │   └───ts41
    │   ├───type-is
    │   ├───typed-array-buffer
    │   │   ├───.github
    │   │   └───test
    │   ├───typed-array-byte-length
    │   │   ├───.github
    │   │   └───test
    │   ├───typed-array-byte-offset
    │   │   ├───.github
    │   │   └───test
    │   ├───typed-array-length
    │   │   ├───.github
    │   │   └───test
    │   ├───typedarray-to-buffer
    │   │   └───test
    │   ├───typescript
    │   │   ├───bin
    │   │   └───lib
    │   │       ├───cs
    │   │       ├───de
    │   │       ├───es
    │   │       ├───fr
    │   │       ├───it
    │   │       ├───ja
    │   │       ├───ko
    │   │       ├───pl
    │   │       ├───pt-br
    │   │       ├───ru
    │   │       ├───tr
    │   │       ├───zh-cn
    │   │       └───zh-tw
    │   ├───unbox-primitive
    │   │   ├───.github
    │   │   └───test
    │   ├───underscore
    │   │   ├───amd
    │   │   ├───cjs
    │   │   └───modules
    │   ├───undici-types
    │   ├───unicode-canonical-property-names-ecmascript
    │   ├───unicode-match-property-ecmascript
    │   ├───unicode-match-property-value-ecmascript
    │   │   └───data
    │   ├───unicode-property-aliases-ecmascript
    │   ├───unique-string
    │   ├───universalify
    │   ├───unpipe
    │   ├───unquote
    │   ├───upath
    │   │   └───build
    │   │       └───code
    │   ├───update-browserslist-db
    │   ├───uri-js
    │   │   └───dist
    │   │       ├───es5
    │   │       └───esnext
    │   │           └───schemes
    │   ├───url-parse
    │   │   └───dist
    │   ├───util-deprecate
    │   ├───util.promisify
    │   │   └───.github
    │   │       └───workflows
    │   ├───utila
    │   │   ├───lib
    │   │   └───test
    │   ├───utils-merge
    │   ├───uuid
    │   │   └───dist
    │   │       ├───bin
    │   │       ├───esm-browser
    │   │       ├───esm-node
    │   │       └───umd
    │   ├───v8-to-istanbul
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───convert-source-map
    │   ├───vary
    │   ├───w3c-hr-time
    │   │   └───lib
    │   ├───w3c-xmlserializer
    │   │   └───lib
    │   ├───walker
    │   │   └───lib
    │   ├───watchpack
    │   │   ├───lib
    │   │   └───types
    │   ├───wbuf
    │   │   └───test
    │   ├───web-vitals
    │   │   ├───dist
    │   │   │   └───modules
    │   │   │       └───lib
    │   │   │           └───polyfills
    │   │   └───src
    │   │       └───lib
    │   │           └───polyfills
    │   ├───webidl-conversions
    │   │   └───lib
    │   ├───webpack
    │   │   ├───bin
    │   │   ├───hot
    │   │   ├───lib
    │   │   │   ├───asset
    │   │   │   ├───async-modules
    │   │   │   ├───cache
    │   │   │   ├───config
    │   │   │   ├───container
    │   │   │   ├───css
    │   │   │   ├───debug
    │   │   │   ├───dependencies
    │   │   │   ├───electron
    │   │   │   ├───errors
    │   │   │   ├───esm
    │   │   │   ├───hmr
    │   │   │   ├───ids
    │   │   │   ├───javascript
    │   │   │   ├───json
    │   │   │   ├───library
    │   │   │   ├───logging
    │   │   │   ├───node
    │   │   │   ├───optimize
    │   │   │   ├───performance
    │   │   │   ├───prefetch
    │   │   │   ├───rules
    │   │   │   ├───runtime
    │   │   │   ├───schemes
    │   │   │   ├───serialization
    │   │   │   ├───sharing
    │   │   │   ├───stats
    │   │   │   ├───url
    │   │   │   ├───util
    │   │   │   │   └───hash
    │   │   │   ├───wasm
    │   │   │   ├───wasm-async
    │   │   │   ├───wasm-sync
    │   │   │   ├───web
    │   │   │   └───webworker
    │   │   ├───node_modules
    │   │   │   ├───eslint-scope
    │   │   │   │   └───lib
    │   │   │   ├───estraverse
    │   │   │   └───mime-db
    │   │   └───schemas
    │   │       └───plugins
    │   │           ├───asset
    │   │           ├───container
    │   │           ├───css
    │   │           ├───debug
    │   │           ├───ids
    │   │           ├───json
    │   │           ├───optimize
    │   │           ├───schemes
    │   │           └───sharing
    │   ├───webpack-dev-middleware
    │   │   ├───dist
    │   │   │   └───utils
    │   │   └───types
    │   │       └───utils
    │   ├───webpack-dev-server
    │   │   ├───bin
    │   │   ├───client
    │   │   │   ├───clients
    │   │   │   ├───modules
    │   │   │   │   ├───logger
    │   │   │   │   └───sockjs-client
    │   │   │   ├───overlay
    │   │   │   └───utils
    │   │   ├───lib
    │   │   │   └───servers
    │   │   ├───node_modules
    │   │   │   └───ws
    │   │   │       └───lib
    │   │   └───types
    │   │       ├───bin
    │   │       └───lib
    │   │           └───servers
    │   ├───webpack-manifest-plugin
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───webpack-sources
    │   │           └───lib
    │   ├───webpack-sources
    │   │   └───lib
    │   │       └───helpers
    │   ├───websocket-driver
    │   │   └───lib
    │   │       └───websocket
    │   │           └───driver
    │   │               └───hybi
    │   ├───websocket-extensions
    │   │   └───lib
    │   │       └───pipeline
    │   ├───whatwg-encoding
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───iconv-lite
    │   │           ├───encodings
    │   │           │   └───tables
    │   │           └───lib
    │   ├───whatwg-fetch
    │   │   └───dist
    │   ├───whatwg-mimetype
    │   │   └───lib
    │   ├───whatwg-url
    │   │   └───dist
    │   ├───which
    │   │   └───bin
    │   ├───which-boxed-primitive
    │   │   ├───.github
    │   │   └───test
    │   ├───which-builtin-type
    │   │   └───test
    │   ├───which-collection
    │   │   ├───.github
    │   │   └───test
    │   ├───which-typed-array
    │   │   ├───.github
    │   │   └───test
    │   ├───word-wrap
    │   ├───workbox-background-sync
    │   │   ├───build
    │   │   ├───lib
    │   │   └───src
    │   │       └───lib
    │   ├───workbox-broadcast-update
    │   │   ├───build
    │   │   ├───src
    │   │   │   └───utils
    │   │   └───utils
    │   ├───workbox-build
    │   │   ├───build
    │   │   │   ├───lib
    │   │   │   ├───schema
    │   │   │   └───templates
    │   │   ├───node_modules
    │   │   │   ├───@apideck
    │   │   │   │   └───better-ajv-errors
    │   │   │   │       ├───dist
    │   │   │   │       │   ├───lib
    │   │   │   │       │   └───types
    │   │   │   │       └───src
    │   │   │   │           ├───lib
    │   │   │   │           └───types
    │   │   │   ├───ajv
    │   │   │   │   ├───dist
    │   │   │   │   │   ├───compile
    │   │   │   │   │   │   ├───codegen
    │   │   │   │   │   │   ├───jtd
    │   │   │   │   │   │   └───validate
    │   │   │   │   │   ├───refs
    │   │   │   │   │   │   ├───json-schema-2019-09
    │   │   │   │   │   │   │   └───meta
    │   │   │   │   │   │   └───json-schema-2020-12
    │   │   │   │   │   │       └───meta
    │   │   │   │   │   ├───runtime
    │   │   │   │   │   ├───standalone
    │   │   │   │   │   ├───types
    │   │   │   │   │   └───vocabularies
    │   │   │   │   │       ├───applicator
    │   │   │   │   │       ├───core
    │   │   │   │   │       ├───discriminator
    │   │   │   │   │       ├───dynamic
    │   │   │   │   │       ├───format
    │   │   │   │   │       ├───jtd
    │   │   │   │   │       ├───unevaluated
    │   │   │   │   │       └───validation
    │   │   │   │   └───lib
    │   │   │   │       ├───compile
    │   │   │   │       │   ├───codegen
    │   │   │   │       │   ├───jtd
    │   │   │   │       │   └───validate
    │   │   │   │       ├───refs
    │   │   │   │       │   ├───json-schema-2019-09
    │   │   │   │       │   │   └───meta
    │   │   │   │       │   └───json-schema-2020-12
    │   │   │   │       │       └───meta
    │   │   │   │       ├───runtime
    │   │   │   │       ├───standalone
    │   │   │   │       ├───types
    │   │   │   │       └───vocabularies
    │   │   │   │           ├───applicator
    │   │   │   │           ├───core
    │   │   │   │           ├───discriminator
    │   │   │   │           ├───dynamic
    │   │   │   │           ├───format
    │   │   │   │           ├───jtd
    │   │   │   │           ├───unevaluated
    │   │   │   │           └───validation
    │   │   │   ├───fs-extra
    │   │   │   │   └───lib
    │   │   │   │       ├───copy
    │   │   │   │       ├───copy-sync
    │   │   │   │       ├───empty
    │   │   │   │       ├───ensure
    │   │   │   │       ├───fs
    │   │   │   │       ├───json
    │   │   │   │       ├───mkdirs
    │   │   │   │       ├───move
    │   │   │   │       ├───move-sync
    │   │   │   │       ├───output
    │   │   │   │       ├───path-exists
    │   │   │   │       ├───remove
    │   │   │   │       └───util
    │   │   │   ├───json-schema-traverse
    │   │   │   │   ├───.github
    │   │   │   │   │   └───workflows
    │   │   │   │   └───spec
    │   │   │   │       └───fixtures
    │   │   │   ├───source-map
    │   │   │   │   └───lib
    │   │   │   ├───tr46
    │   │   │   │   └───lib
    │   │   │   ├───webidl-conversions
    │   │   │   │   └───lib
    │   │   │   └───whatwg-url
    │   │   │       └───lib
    │   │   └───src
    │   │       ├───lib
    │   │       ├───schema
    │   │       └───templates
    │   ├───workbox-cacheable-response
    │   │   ├───build
    │   │   └───src
    │   ├───workbox-core
    │   │   ├───build
    │   │   ├───models
    │   │   │   └───messages
    │   │   ├───src
    │   │   │   ├───models
    │   │   │   │   └───messages
    │   │   │   ├───utils
    │   │   │   └───_private
    │   │   ├───utils
    │   │   └───_private
    │   ├───workbox-expiration
    │   │   ├───build
    │   │   ├───models
    │   │   └───src
    │   │       └───models
    │   ├───workbox-google-analytics
    │   │   ├───build
    │   │   ├───src
    │   │   │   └───utils
    │   │   └───utils
    │   ├───workbox-navigation-preload
    │   │   ├───build
    │   │   └───src
    │   ├───workbox-precaching
    │   │   ├───build
    │   │   ├───src
    │   │   │   └───utils
    │   │   └───utils
    │   ├───workbox-range-requests
    │   │   ├───build
    │   │   ├───src
    │   │   │   └───utils
    │   │   └───utils
    │   ├───workbox-recipes
    │   │   ├───build
    │   │   └───src
    │   ├───workbox-routing
    │   │   ├───build
    │   │   ├───src
    │   │   │   └───utils
    │   │   └───utils
    │   ├───workbox-strategies
    │   │   ├───build
    │   │   ├───plugins
    │   │   ├───src
    │   │   │   ├───plugins
    │   │   │   └───utils
    │   │   └───utils
    │   ├───workbox-streams
    │   │   ├───build
    │   │   ├───src
    │   │   │   └───utils
    │   │   └───utils
    │   ├───workbox-sw
    │   │   ├───build
    │   │   └───controllers
    │   ├───workbox-webpack-plugin
    │   │   ├───build
    │   │   │   └───lib
    │   │   ├───node_modules
    │   │   │   ├───source-map
    │   │   │   │   ├───dist
    │   │   │   │   └───lib
    │   │   │   └───webpack-sources
    │   │   │       └───lib
    │   │   └───src
    │   │       └───lib
    │   ├───workbox-window
    │   │   ├───build
    │   │   ├───src
    │   │   │   └───utils
    │   │   └───utils
    │   ├───wrap-ansi
    │   ├───wrappy
    │   ├───write-file-atomic
    │   ├───ws
    │   │   └───lib
    │   ├───xml-name-validator
    │   │   └───lib
    │   ├───xmlchars
    │   │   ├───xml
    │   │   │   ├───1.0
    │   │   │   └───1.1
    │   │   └───xmlns
    │   │       └───1.0
    │   ├───y18n
    │   │   └───build
    │   │       └───lib
    │   │           └───platform-shims
    │   ├───yallist
    │   ├───yaml
    │   │   ├───browser
    │   │   │   ├───dist
    │   │   │   └───types
    │   │   ├───dist
    │   │   └───types
    │   ├───yargs
    │   │   ├───build
    │   │   │   └───lib
    │   │   │       ├───typings
    │   │   │       └───utils
    │   │   ├───helpers
    │   │   ├───lib
    │   │   │   └───platform-shims
    │   │   └───locales
    │   ├───yargs-parser
    │   │   └───build
    │   │       └───lib
    │   └───yocto-queue
    ├───public
    └───src
