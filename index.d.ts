declare module 'react-native-xupdate-new' {
  ///XUpdate初始化参数
  export class InitArgs {
    debug: boolean
    isPost: boolean
    isPostJson: boolean
    isWifiOnly: boolean
    isAutoMode: boolean
    supportSilentInstall: boolean
    enableRetry: boolean
    retryContent: string
    retryUrl: string
    params: any
  }

  export class UpdateArgs {
    constructor(url: string)
    url: string
    params: any
    supportBackgroundUpdate: boolean
    isAutoMode: boolean
    isCustomParse: boolean
    themeColor: string
    topImageRes: string
    widthRatio: number
    heightRatio: number
    overrideGlobalRetryStrategy: boolean
    enableRetry: boolean
    retryContent: string
    retryUrl: string
  }

  export class UpdateEntity {
    ///是否有新版本
    hasUpdate: boolean
    ///是否强制安装：不安装无法使用app
    isForce: boolean
    ///是否可忽略该版本
    isIgnorable: boolean

    //===========升级的信息=============//
    ///版本号
    versionCode: number
    ///版本名称
    versionName: string
    ///更新内容
    updateContent: string
    ///下载地址
    downloadUrl: string
    ///apk的大小
    apkSize: number
    ///apk文件的加密值（这里默认是md5值）
    apkMd5: string

    //这5个值必须传
    constructor(
      hasUpdate: boolean,
      versionCode: number,
      versionName: string,
      updateContent: string,
      downloadUrl: string,
    )
  }

  export class UpdateParser {
    parseJson: (json: string) => UpdateEntity

    constructor(parser: (json: string) => UpdateEntity)
  }

  export type XUpdateType = {
    init: (initArg: InitArgs) => Promise<any>
    update: (updateArgs: UpdateArgs) => Promise<string>
    setCustomParser: (parser: UpdateParser) => {}
    addErrorListener: (cb: (error: string) => void) => void
  }

  export const XUpdate: XUpdateType
}
