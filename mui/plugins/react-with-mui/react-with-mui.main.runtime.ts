import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactWithMuiAspect } from './react-with-mui.aspect';
// import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';

export class ReactWithMuiMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * override dependencies here
       */
      react.overrideDependencies({
        dependencies: {
          '@mui/material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/react': '-',
          '@learnbit-react/ui-library-wrappers.mui.theme.theme-provider': '-',
        },
        devDependencies: {
          '@mui/material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/react': '-',
          '@learnbit-react/ui-library-wrappers.mui.theme.theme-provider': '-',
          '@types/react': '^18.0.17',
          '@types/react-dom': '^18.0.6',
        },
        peers: [
          {
            name: 'react',
            version: '18.2.0',
            supportedRange: '^18.2.0',
          },
          {
            name: 'react-dom',
            version: '18.2.0',
            supportedRange: '^18.2.0',
          },
          {
            name: '@mui/material',
            version: '5.2.1',
            supportedRange: '^5.2.1',
          },
          {
            name: '@testing-library/react',
            version: '13.4.0',
            supportedRange: '^13.4.0',
          },
          {
            name: '@learnbit-react/ui-library-wrappers.mui.theme.theme-provider',
            version: 'latest',
            supportedRange: '*',
          },
        ],
      }),
      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          },
        ],
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          },
        ],
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new ReactWithMuiMain();
  }
}

ReactWithMuiAspect.addRuntime(ReactWithMuiMain);
