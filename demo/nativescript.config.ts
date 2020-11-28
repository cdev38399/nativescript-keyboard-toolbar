import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.demo',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    requireModules: {
      0: 'nativescript-keyboard-toolbar',
    },
  },
  appPath: 'app',
} as NativeScriptConfig
