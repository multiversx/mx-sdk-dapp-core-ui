import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { sass } from '@stencil/sass';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

const excludeComponents = [
  'sign-transactions-modal',
  'pending-transactions-modal',
  'ledger-connect-modal',
  'ledger-connect',
  'ledger-account-screen',
  'ledger-connect-screen',
  'ledger-confirm-screen',
  'toast-list',
  'generic-toast',
  'custom-toast',
  'simple-toast',
  'transaction-toast-details-body',
  'transaction-toast-details',
  'transaction-toast-content',
  'transaction-toast',
  'transaction-toast-wrapper',
  'sign-transaction-component',
  'wallet-connect',
  'wallet-connect-modal',
  'transaction-toast-progress',
  'token-component',
  'fungible-component',
  'balance-component',
];

export const config: Config = {
  namespace: 'sdk-dapp-core-ui',
  plugins: [sass(), tailwind(), tailwindHMR()],
  outputTargets: [
    reactOutputTarget({
      outDir: './dist/react',
      excludeComponents,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  rollupPlugins: {
    after: [nodePolyfills()],
  },
};
