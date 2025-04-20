import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Prettier 플러그인을 import
import eslintConfigPrettier from 'eslint-config-prettier'; // Prettier 설정을 import
import parserTs from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // 필요에 따라 조정
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...pluginTs.configs.recommended.rules, // 기본 recommended 룰
      'prettier/prettier': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  // Prettier 설정
  {
    plugins: {
      prettier: eslintPluginPrettier, // Prettier 플러그인 로드
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error', // Prettier 규칙을 ESLint 에러로 처리
    },
  },
];

export default eslintConfig;
