import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeProvider } from '@my-org/my-scope.mui.theme.theme-provider';

import { ReactWithMuiAspect } from './react-with-mui.aspect';

export class ReactWithMuiPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const reactWithMuiPreviewMain = new ReactWithMuiPreviewMain();

    react.registerProvider([
      ThemeProvider,
    ]);

    return reactWithMuiPreviewMain;
  }
}

ReactWithMuiAspect.addRuntime(ReactWithMuiPreviewMain);
