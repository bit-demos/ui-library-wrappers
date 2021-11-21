import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

import { ReactWithMuiAspect } from './react-with-mui.aspect';

export class ReactWithMuiPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const reactWithMuiPreviewMain = new ReactWithMuiPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // react.registerProvider([ThemeCompositions]);

    return reactWithMuiPreviewMain;
  }
}

ReactWithMuiAspect.addRuntime(ReactWithMuiPreviewMain);
