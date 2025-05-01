import {IPATool} from './src/ipa.js';
const ipaTool = new IPATool();

await ipaTool.downipa({
    // 你想要保存文件的路径,留空为当前目录
    path: './app',

    //你想要下载的应用程序的ID
    APPID: '1215494034',

    //版本id,下载旧版本需要填写,留空默认下新版本
    appVerId: '',

    // Apple ID 邮箱
    APPLE_ID: 'aoole@gmail.com',

    // Apple ID 密码
    PASSWORD: 'Aa112233',

    //两步验证代码
    CODE: ''

});

