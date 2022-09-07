import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react';
import UAuth from '@uauth/js';
import { UAuthConnector } from '@uauth/web3-react';
import type { AbstractConnector } from '@web3-react/abstract-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

// Instanciate your other connectors.
export const injected = new InjectedConnector({ supportedChainIds: [1, 4, 5] });

export const walletconnect = new WalletConnectConnector({
  infuraId: 'c57d500279994e2ca6e832456b0ed250',
  qrcode: true,
});

export const gnosisconnect = new SafeAppConnector({});

export const uauth = new UAuthConnector({
  uauth: new UAuth({
    clientID: '0ef4d6a7-91da-4cf4-be75-a1222e06828b',
    redirectUri: 'http://localhost:3000',
    scope: 'openid wallet',
  }),
  connectors: { injected, walletconnect },
});

const connectors: Record<string, AbstractConnector> = {
  injected,
  walletconnect,
  uauth,
};

export default connectors;
