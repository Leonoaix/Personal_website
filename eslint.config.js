import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

// Handle __dirname and __filename in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ['dist'], // Ignore dist directory
    files: ['src/**/*.{ts,tsx}'], // Target TypeScript and TSX files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      ecmaVersion: 2020, // ECMAScript 2020 support
      sourceType: 'module', // ES module support
      globals: globals.browser, // Browser-related global variables
    },
    plugins: {
      '@typescript-eslint': tseslint, // TypeScript ESLint plugin as object
      'react-hooks': reactHooks, // React Hooks plugin as object
      'react-refresh': reactRefresh, // React Refresh plugin as object
      prettier: prettier, // Prettier plugin as object
      react: react, // React plugin as object
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Prettier integration
      'prettier/prettier': 'error',

      // React specific rules
      'react/react-in-jsx-scope': 'off', // Disable for React 17+
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react/jsx-key': 'warn',
      'react/no-unused-state': 'warn',
      'react/no-array-index-key': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-pascal-case': 'warn',

      // React Hooks rules
      ...reactHooks.configs.recommended.rules, // React Hooks recommended rules

      // React Refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
