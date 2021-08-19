import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'DigiShopInside',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins : {
    "SplashScreen": {
      "launchShowDuration": 2000,
      "launchAutoHide": true
    }
  }
};

export default config;
