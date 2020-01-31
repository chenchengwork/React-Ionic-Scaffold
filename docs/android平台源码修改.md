# android 平台源码修改

1. node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/Bridge.java
```
// 在218行处,添加“忽略https证书校验”
webView.setWebViewClient(new WebViewClient() {

      // TODO 添加自定义忽略https证书校验
      @Override
      public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
        handler.proceed();
      }
     
    ....
    ....
}

```

2. node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/plugin/Camera.java
```
// 在101行处, 调用系统内的图片或拍照时, 将“英文提示文字”改成“中文提示文字”
private void showPrompt(final PluginCall call) {
    // We have all necessary permissions, open the camera
    JSObject fromPhotos = new JSObject();


    // fromPhotos.put("title", "From Photos");
    // TODO 自定定义修改
    fromPhotos.put("title", "选择图片");

    JSObject takePicture = new JSObject();
    // takePicture.put("title", "Take Picture");
    // TODO 自定定义修改
    takePicture.put("title", "拍照");

    Object[] options = new Object[] {
      fromPhotos,
      takePicture
};


```

