# ui-library-wrappers

This repo illustrates, and provides base components for, creating components that customise UI Libraries, using Bit.

## MUI

The first library we have implemented is the react-based MUI library. 

Things to note:

- As opposed to the general installation of MUI, which is aimed at installation in applications, for bit components the 3 packages MUI advises to install - `@emotion/styled`, `@emotion/react` and `@mui/material` must be set as peerDependencies in the bit workspace, as they are all required to be present in the consuming application and must be singletons.

``` json
"teambit.dependencies/dependency-resolver": {

    "policy": {
      ...
      "peerDependencies": {
        "@emotion/react": "11.6.0",
        "@emotion/styled": "11.6.0",
        "@mui/material": "5.1.1",
        "react": "17.0.2",
        "react-dom": "17.0.2"
      }
  },
```

Note also that in order to ensure that compositions render correctly in all environments, you need the dependency override settings as configured in the `react-with-mui` environment (see the `.main.runtime.ts` file), also in this Scope. We recommend simply using this env for your MUI override components, and if required to fork and extend it yourselves where needed (e.g. if you need to override webpack or typescript configs).
