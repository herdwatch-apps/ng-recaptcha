import { Provider, makeEnvironmentProviders } from "@angular/core";

import { ReCaptchaV3Service } from "./recaptcha-v3.service";
import { RecaptchaLoaderService } from "./recaptcha-loader.service";
import { RECAPTCHA_V3_SITE_KEY } from "./tokens";

export interface IRecaptchaV3Config {
  recaptchaSiteKey: string;
}

export function provideRecaptchaV3Services(config: IRecaptchaV3Config): Provider[] {
  return [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: config.recaptchaSiteKey,
    },
    ReCaptchaV3Service,
    RecaptchaLoaderService,
  ];
}

export function provideEnvironmentRecaptchaV3Services(config: IRecaptchaV3Config) {
  return makeEnvironmentProviders(provideRecaptchaV3Services(config));
}
