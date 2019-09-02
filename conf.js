const conf = {
  'editor.fontSize': 16,

  'editor.tabSize': 2,
  'editor.hover.enabled': false,
  'editor.wordWrap': 'off',
  'editor.cursorBlinking': 'solid',
  'editor.cursorStyle': 'line',
  'vim.overrideCopy': true,
  'vim.sneak': true,

  'vim.useSystemClipboard': true,
  'editor.autoClosingBrackets': 'always',
  'editor.lineHeight': 29,
  'terminal.integrated.fontSize': 16,
  'terminal.integrated.shell.windows': 'C:\\Program Files\\Git\\Bin\\bash.exe',
  'explorer.confirmDragAndDrop': false,
  'window.zoomLevel': 0,
  'editor.fontFamily': 'Fira Code',
  'editor.fontLigatures': true,
  'editor.autoIndent': true,
  'editor.fontWeight': '100',
  'files.exclude': {
    '**/.git': true,
    '**/.svn': true,
    '**/.hg': true,
    '**/CVS': true,
    '**/.DS_Store': true,
    '**/node_modules**': true
  },
  'workbench.colorCustomizations': {
    'editorCursor.foreground': '#FFD700',
    'editorCursor.background': '#000000'
  },
  'workbench.tree.renderIndentGuides': 'always',
  'workbench.iconTheme': 'vscode-icons',
  'emmet.includeLanguages': {
    javascript: 'javascriptreact'
    //     // "vue-html": "html",
  },
  'html.autoClosingTags': true,
  'javascript.updateImportsOnFileMove.enabled': 'always',
  'vim.scroll': 16,
  'workbench.editor.showTabs': true,
  'workbench.activityBar.visible': true,
  'editor.quickSuggestions': {
    other: true,
    comments: false,
    strings: false
  },
  'typescript.format.enable': false,
  'prettier.semi': false,
  'prettier.singleQuote': true,
  'prettier.jsxSingleQuote': true,
  // "prettier.arrowParens": false,
  // "prettier.singleQuote": true,
  // "prettier.proseWrap": "always",
  // "prettier.stylelintIntegration": true,
  // "prettier.eslintIntegration": true,
  'files.autoSave': 'onFocusChange',
  'editor.formatOnSave': true,
  'editor.formatOnPaste': true,
  'editor.formatOnType': true,
  // "eslint.autoFixOnSave": true,
  // "eslint.enable": true,
  'editor.occurrencesHighlight': false,
  'search.exclude': {
    '**/node_modules': true,
    '**/bower_components': true,
    '**/coverage': true,
    '**/dist': true,
    '**/build': true,
    '**/.build': true,
    '**/.gh-pages': true
  },
  'workbench.sideBar.location': 'right',
  'vim.normalModeKeyBindingsNonRecursive': [
    {
      before: ['q'],
      after: ['%']
    },
    {
      before: ['@'],
      after: ['*']
    }
  ],
  'vim.insertModeKeyBindings': [
    {
      before: ['j', 'k'],
      after: ['<esc>']
    }
  ],
  // Bind p in visual mode to paste without overriding the current register
  'vim.visualModeKeyBindingsNonRecursive': [
    {
      before: ['p'],
      after: ['p', 'g', 'v', 'y']
    },
    {
      before: ['q'],
      after: ['%']
    },

    // in visual mode to indent/outdent lines (repeatable)
    {
      before: ['>'],
      commands: ['editor.action.indentLines']
    },
    {
      before: ['<'],
      commands: ['editor.action.outdentLines']
    }
  ],
  'vim.visualModeKeyBindings': [
    //   {
    //     "before": ["v", "#"],
    //     "after": ["#"]
    //   },
    //   {
    //     "before": ["v", "$"],
    //     "after": ["*"]
    //   },
    //   {
    //     "before": ["v", "!"],
    //     "after": ["^"]
    //   },
    {
      before: ['v', 'q'],
      after: ['%']
    }
  ],
  // "vim.normalModeKeyBindings": [
  //   {
  //     "before": ["@"],
  //     "after": ["$"]
  //   },
  //   {
  //     "before": ["!"],
  //     "after": ["^"]
  //   },
  //   {
  //     "before": ["q"],
  //     "after": ["%"]
  //   },
  //   {
  //     "before": ["s"],
  //     "after": ["y", "i", "w"]
  //   },
  //   {
  //     "before": ["$"],
  //     "after": ["*"]
  //   }
  // ],
  'editor.parameterHints.enabled': false,
  'editor.minimap.enabled': false,
  'editor.renderControlCharacters': false,
  'editor.renderWhitespace': 'none',
  'window.enableMenuBarMnemonics': false,
  'extensions.autoUpdate': false,
  'typescript.validate.enable': false,
  'breadcrumbs.filePath': 'off',
  'breadcrumbs.symbolPath': 'off',
  // "[javascript]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "eslint.packageManager": "yarn",
  // "[json]": {
  //   "editor.defaultFormatter": "remimarsal.prettier-now"
  // },
  'prettier.printWidth': 80,
  'git.ignoreLegacyWarning': true,
  'editor.acceptSuggestionOnEnter': 'off',
  'peacock.favoriteColors': [
    {
      name: 'Angular Red',
      value: '#b52e31'
    },
    {
      name: 'Auth0 Orange',
      value: '#eb5424'
    },
    {
      name: 'Azure Blue',
      value: '#007fff'
    },
    {
      name: 'C# Purple',
      value: '#68217A'
    },
    {
      name: 'Gatsby Purple',
      value: '#639'
    },
    {
      name: 'Go Cyan',
      value: '#5dc9e2'
    },
    {
      name: 'Java Blue-Gray',
      value: '#557c9b'
    },
    {
      name: 'JavaScript Yellow',
      value: '#f9e64f'
    },
    {
      name: 'Mandalorian Blue',
      value: '#1857a4'
    },
    {
      name: 'Node Green',
      value: '#215732'
    },
    {
      name: 'React Blue',
      value: '#00b3e6'
    },
    {
      name: 'Something Different',
      value: '#832561'
    },
    {
      name: 'Vue Green',
      value: '#42b883'
    }
  ]
  // "workbench.colorTheme": "Capo-Dark",

  //   "bracketPairColorizer.scopeLineRelativePosition": false,
  //   "bracketPairColorizer.showHorizontalScopeLine": false,
  //   "bracketPairColorizer.showVerticalScopeLine": false,
}
