### 重点：语音识别和语音合成###
 [语音识别和语音合成简介](https://www.zhangxinxu.com/wordpress/2017/01/html5-speech-recognition-synthesis-api/)

 1. 语音识别 `speech Recongnition`：指的是`语音转文字`
    [Web Speech API_demo] (https://www.audero.it/demo/web-speech-api-demo.html)
    [speech Recongnition_解析](https://xiaotianxia.github.io/blog/vuepress/js/speech_in_js_recognition.html)
    [speech Recongnition_demo](https://github.com/mdn/web-speech-api/tree/master/)
     - 使用基本流程如下：
         - (1) 创建SpeechRecognition的新实例。由于到目前为止，浏览器还没有广泛支持，所以需要webKit的前缀：
              > var newRecogniation = new webkitSpeechRecognition()

         - (2) 设置是持续听还是听到声音之后就关闭接收。通过设置continuous属性值实现。一般聊天沟通使用false属性值，如果是写文章写公众号之类的则可以设置为true，如下示意：
             > newRecognition.continuous = true;

         - (3) 控制语音识别的开启和停止，可以使用start()和stop()方法：
             > // 开启  newRecognition.start();
               // 停止  newRecognition.stop();
         - (4) 对识别到的结果进行处理，可以使用一些事件方法，比方说onresult：
          ```
           newRecognition.onresult = function(event) {
                console.log(event);
            }
           ```


 2. 语音合成 `Speech Synthesis`:指的是`文字转语音`
    [Speech Synthesis_demo](https://xiaotianxia.github.io/blog/vuepress/js/speech_in_js_synthesis.html)
    [demo语音](https://mdn.github.io/web-speech-api/speak-easy-synthesis/)
    [demo代码](https://github.com/mdn/web-speech-api)
    [语音合成基本介绍](https://blog.csdn.net/qq_40571631/article/details/89738575)
    [WAI-ARIA无障碍网页应用属性完全展示”](https://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/)
     - 基本语法：
          > var utterThis = new window.SpeechSynthesisUtterance('你好，世界！');
            window.speechSynthesis.speak(utterThis);
     - 属性：
       - text – 要合成的文字内容，字符串。
       - lang – 使用的语言，字符串， 例如："zh-cn"
       - voiceURI – 指定希望使用的声音和服务，字符串。
       - volume – 声音的音量，区间范围是0到1，默认是1。
       - rate – 语速，数值，默认值是1，范围是0.1到10，表示语速的倍数，例如2表示正常语速的两倍。
       - pitch – 表示说话的音高，数值，范围从0（最小）到2（最大）。默认值为1

     - 因此上面的代码也可以写作：
         > `var utterThis = new window.SpeechSynthesisUtterance();
           utterThis.text = '你好，世界！';`

     - 接下来是speechSynthesis对象，主要作用是触发行为，例如读，停，还原等：
       - speak() – 只能接收SpeechSynthesisUtterance作为唯一的参数，作用是读合成的话语。
       - stop() – 立即终止合成过程。
       - pause() – 暂停合成过程。
       - resume() – 重新开始合成过程。
       - getVoices – 此方法不接受任何参数，用来返回浏览器支持的语音包列表，是个数组 `注意:必须添加在voiceschanged事件中才能生效`

     - speechSynthesis属性 默认是false
        - pending - true 如果队列中有尚未开始说话的话语。
        - speaking -  true 如果当前正在说话。
        - paused -  true 如果当前暂停了话语。

     - SpeechSynthesisVoice 属性
        - name - 描述语音的人类可读名称。
        - voiceURI - 指定该语音的语音合成服务的位置的URI。
        - lang - 此语音的语言代码。
        - default- true如果这是浏览器使用的默认语音，则设置为。
        - localService - API可以使用本地和远程服务来处理语音合成。如果此属性设置为true语音合成，则此语音由本地服务处理。如果false是正在使用的远程服务

    ![chrome获取到getVoice的语言](/api/file/getImage?fileId=6073f21a09eb7d0509005a60)

    ![chrome获取到speechSynthesis](/api/file/getImage?fileId=6073f26809eb7d0509005a61)

    ![chrome 获取到的属性](/api/file/getImage?fileId=6073f2a109eb7d0509005a62)