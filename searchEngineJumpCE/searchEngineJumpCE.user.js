(function(){
// ==UserScript==
// @name           searchEngineJump 简化改进版
// @author         NLF && ywzhaiqi
// @contributor    ted423
// @description    方便的在各个引擎之间跳转。自定义搜索列表的 NLF 修改版。
// @version        4.1.3.3
// version        4.0.1.0
// @created        2011-7-2
// @namespace      http://userscripts.org/users/NLF
// @homepage       https://github.com/ywzhaiqi/userscript
// homepage       http://userscripts.org/scripts/show/84970
// downloadURL    https://userscripts.org/scripts/source/84970.user.js
// updateURL      https://userscripts.org/scripts/source/84970.meta.js
// include        *
// match          *://*/*

// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @run-at         document-end

// @include        /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|search|#|$|\?)(?:.(?!&tbm=))*$/
// @include        /^https?:\/\/wen\.lu\//
// @include        /^https?:\/\/www\.baidu\.com\/(?:s|baidu|)/
// @include        /^https?:\/\/[^.]*\.bing\.com\/search/
// @include        /^https?:\/\/www\.so\.com\/s\?/
// @include        /^https?:\/\/www\.sogou\.com\/(?:web|sogou)/
// @include        /^https?:\/\/scholar\.google(?:\.\D{1,3}){1,2}\/scholar\?/
// @include        /^https?:\/\/baike\.baidu\.com\/(?:sub)?view\//
// @include        /^https?:\/\/[a-z]{2,3}\.baike\.com\/[a-z]/
// @include        /^https?:\/\/..\.wikipedia\.org\/w\/index\.php(?!.*\?search=%s)/
// @include        /^https?:\/\/(?:en|zh|ja)\.wikipedia\.org\/(wiki\/|w\/index\.php\?search=%s)/
// @include        /^https?:\/\/zhidao\.baidu\.com\/(search|question)/
// @include        /^https?:\/\/www\.zhihu\.com\/search\?/
// @include        /^https?:\/\/wenku\.baidu\.com\/search\?/
// @include        /^https?:\/\/www\.docin\.com\/search\.do/
// @include        /^https?:\/\/www\.soku\.com\/[a-z]/
// @include        /^https?:\/\/www\.bilibili\.com\/search\?/
// @include        /^https?:\/\/www\.acfun\.tv\/search/
// @include        /^https?:\/\/www\.youtube\.com\/results/
// @include        /^https?:\/\/www\.nicovideo\.jp\/search\//
// @include        /^https?:\/\/v\.baidu\.com\/(v|#)/
// @include        /^https?:\/\/video\.so\.com\//
// @include        /^https?:\/\/v\.qq\.com\/search\.html\?/
// @include        /^https?:\/\/.*\.bing\.com\/video/
// @include        /^https?:\/\/so\.iqiyi\.com\/so\/q/
// @include        /^https?:\/\/so\.letv\.com\/s\?/
// @include        /^https?:\/\/so\.tv\.sohu\.com\/mts\?/
// @include        /^https?:\/\/so\.56\.com\/video\//
// @include        /^https?:\/\/so\.ku6\.com\/search/
// @include        /^https?:\/\/www\.dongting\.com\/#/
// @include        /^https?:\/\/music\.baidu\.com\/search/
// @include        /^https?:\/\/cgi\.music\.soso\.com/
// @include        /^https?:\/\/mp3\.sogou\.com\/music\.so/
// @include        /^https?:\/\/so\.yinyuetai\.com\/mv\?/
// @include        /^https?:\/\/so\.1ting\.com\//
// @include        /^https?:\/\/www\.songtaste\.com\/search/
// @include        /^https?:\/\/www\.xiami\.com\/search/
// @include        /^https?:\/\/\w{2,10}\.google(?:\.\D{1,3}){1,2}\/search\?(.*tbs=sbi)|(.*tbm=isch)/
// @include        /^https?:\/\/image\.baidu\.c(om|n)\/i/
// @include        /^https?:\/\/\image\.so\.com\/i\?/
// @include        /^https?:\/\/.*\.bing\.com\/images\/search/
// @include        /^https?:\/\/pic\.sogou\.com\/pic/
// @include        /^https?:\/\/image\.youdao\.com\/search/
// @include        /^https?:\/\/huaban\.com\/search\/\?/
// @include        /^https?:\/\/www\.flickr\.com\/search/
// @include        /^http:\/\/(..|...)\.picsearch\.com\/index\.cgi/
// @include        /^http:\/\/www\.pixiv\.net\/search\.php/
// @include        /^http:\/\/www\.deviantart\.com\/\?q/
// @include        /^http:\/\/img\.jpger\.info\//
// @include        /^https?:\/\/www\.yyets\.com\/search\//
// @include        /^https?:\/\/bt\.ktxp\.com\/search\.php\?/
// @include        /^http:\/\/oabt\.org\/\?topic_title=/
// @include        /^https?:\/\/share\.dmhy\.org\/topics\/list/
// @include        /^https?:\/\/kickass\.to\/usearch\//
// @include        /^https?:\/\/www\.nyaa\.se\/\?page/
// @include        /^https?:\/\/www\.ed2000\.com\/FileList\.asp/
// @include        /^https?:\/\/search\.t\.qq\.com\/index\.php\?(.*QQ%E6%97)/
// @include        /^https?:\/\/www\.btspread\.com\/search\//
// @include        /^https?:\/\/(www\.)?torrentkitty\.(com|org)\/search\//
// @include        /^https?:\/\/btdigg\.org\/search\?/
// @include        /^https?:\/\/s8?\.etao\.com\/search/
// @include        /^https?:\/\/search\.jd\.com\/Search\?/
// @include        /^https?:\/\/s\.taobao\.com\/search/
// @include        /^https?:\/\/searchex\.yixun\.com\/html\?/
// @include        /^https?:\/\/(search)\.suning\.com\//
// @include        /^https?:\/\/list\.tmall\.com\/\/?search/
// @include        /^https?:\/\/www\.amazon\.cn\/s\/ref/
// @include        /^https?:\/\/search\.dangdang\.com\/\?key/
// @include        /^https?:\/\/s\.paipai\.com\/[a-z]/
// @include        /^https?:\/\/se?\.wanggou\.com\/[a-z]/
// @include        /^https?:\/\/s\.mall\.360\.cn\/search/
// @include        /^https?:\/\/dict\.youdao\.com\/search/
// @include        /^https?:\/\/www\.iciba\.com/
// @include        /^https?:\/\/dict\.cn\/./
// @include        /^https?:\/\/dict\.hjenglish\.com\/(en|w)/
// @include        /^https?:\/\/dict\.hjenglish\.com\/(404\/)?jp/
// @include        /^https?:\/\/www\.zdic\.net\/sousuo/
// @include        /^https?:\/\/translate\.google\./
// @include        /^https?:\/\/fanyi\.baidu\.com/
// @include        /^https?:\/\/fanyi\.youdao\.com/
// @include        /^https?:\/\/(cn|www)\.bing\.com\/dict\/search\?/
// @include        /^https?:\/\/www\.bing\.com\/translator/
// @include        /^https?:\/\/fy\.iciba\.com/
// @include        /^https?:\/\/search\.t\.qq\.com\/index|user\.php\?(?!.*QQ%E6%97)/
// @include        /^https?:\/\/s\.weibo\.com\/weibo|user\//
// @include        /^https?:\/\/shooter\.cn\/search/

// ==/UserScript==


'use strict';

var prefs = {
    openInNewTab: false,  // 是否在新页面打开.
    hideEnglineLabel: 2,  // 是否隐藏前几个搜索的文字部分。0：不隐藏，1：根据高度自行判断，2：隐藏

    engineListDataType: 'normal',

    debug: false,
};


var engineListIntroduce = getMStr(function() {/*
<div>
	<h2>分类规则：</h2>
    <i>【名称最好不要更改，类别跟站点规则有个对应关系】</i>
	<p>1、"音乐-5" 或 "音乐-音悦Tai"，代表类别是 "音乐"，图标使用下面的第5个，即音悦台的图标，否则使用默认的第1个。</p>
	<p>2、"dev--百度百科"，代表插入到 "百度百科" 搜索的前面</p>
	<p>3、"其它--购物"，代表插入到 "购物" 类别的最后一个</p>
</div>
<div>
	<h2>搜索引擎规则：</h2>
    <code>名称，地址（%s 关键字）， 编码（特殊的填gbk），站点图标</code>
	<p>1、"//" 开头会被忽略</p>
	<p>2、中间分隔符：中文逗号（，） 或 英文逗号 + 空格（, ）</p>
	<p>3、编码可省略，可直接填站点图标，站点图标也可省略</p>
	<p>4、POST 方式</p>
</div>
 */});

function introduceToHtml() {
	return engineListIntroduce.replace(/(（.*?）)/g, '<span>$1</span>')
			.replace(/"(.*?)"/g, '<span>$1</span>')
}

var engineListData = {};

engineListData.custom = '';

engineListData.normal = getMStr(function(){/*
网页
    Google, https://www.google.com.hk/search?q=%s&ie=utf-8&safe=off
    // wen.lu, https://wen.lu/search?q=%s&hl=zh-CN&safe=off&ie=utf-8, www.google.com.hk
    百度, http://www.baidu.com/s?wd=%s&ie=utf-8
    必应, http://cn.bing.com/search?q=%s
    360, http://www.so.com/s?ie=utf-8&q=%s
    搜狗, http://www.sogou.com/web?query=%s
    // 搜搜, http://www.soso.com/q?query=%s&utf-8=ie
    // 有道, http://www.youdao.com/search?q=%s&ue=utf8
    // DuckDuckGo, https://duckduckgo.com/?q=%s&kl=cn-zh
    // Wolfram, http://www.wolframalpha.com/input/?i=%s
图片-pixiv
    Google, https://www.google.com.hk/search?q=%s&tbm=isch
    百度, http://image.baidu.cn/i?ie=utf-8&word=%s
    // 360, http://image.so.com/i?ie=utf-8&q=%s&src=tab_web
    // 必应, http://cn.bing.com/images/search?q=%s
    花瓣, http://huaban.com/search/?q=%s
    有道, http://image.youdao.com/search?q=%s
    pixiv, http://www.pixiv.net/search.php?word=%s
    flickr, http://www.flickr.com/search/?q=%s
    picsearch, http://cn.picsearch.com/index.cgi?q=%s
    deviantART, http://www.deviantart.com/?q=%s
    jpg4, http://img.jpg4.info/index.php?feed=%s
音乐-音悦Tai
    Songtaste, http://www.songtaste.com/search.php?keyword=%s, gbk
    百度音乐, http://music.baidu.com/search?ie=utf-8&oe=utf-8&key=%s
    360音乐, http://s.music.so.com/s?ie=utf-8&q=%s, http://www.so.com/favicon.ico
    // 搜狗音乐, http://mp3.sogou.com/music.so?query=%s, gbk
    天天动听, http://www.dongting.com/#a=searchlist&q=%s
    一听, http://so.1ting.com/all.do?q=%s
    音悦Tai, http://so.yinyuetai.com/mv?keyword=%s
    虾米音乐, http://www.xiami.com/search?key=%s
    酷我音乐, http://sou.kuwo.cn/ws/NSearch?key=%s
    雷电音乐, http://www.leidian.com/s?q=%s&ie=utf-8&t=music
    网易云音乐, http://music.163.com/#/search/m/?s=%s
    百度歌词, http://music.baidu.com/search/lrc?key=%s
视频-搜库
    豆瓣电影, http://movie.douban.com/subject_search?search_text=%s&cat=1002, www.douban.com
    搜库, http://www.soku.com/v?keyword=%s
    // google视频, https://www.google.com/search?q=%s&safe=off&hl=zh-CN&tbm=vid
    百度视频, http://v.baidu.com/v?word=%s&ie=utf-8
    bilibili, http://www.bilibili.tv/search?keyword=%s
    acfan, http://www.acfun.tv/search.aspx#query=%s
    人人影视, http://www.yyets.com/search/index?keyword=%s
    youtube, http://www.youtube.com/results?search_query=%s
    vimeo, http://vimeo.com/search?q=%s
    时光网, http://search.mtime.com/search/?q=%s
    视频站--豆瓣电影
        优酷, http://www.soku.com/search_video/q_%s, www.youku.com
        奇艺, http://so.iqiyi.com/so/q_%s
        乐视, http://so.letv.com/s?wd=%s
        腾讯, http://v.qq.com/search.html?ms_key=%s
        搜狐, http://so.tv.sohu.com/mts?wd=%s
        网易, http://so.v.163.com/search/000-0-0000-1-1-0-%s/
        新浪, http://video.sina.com.cn/search/noresult.php?k=%s
        56 视频, http://so.56.com/video/%s/?
        ku6 视频, http://so.ku6.com/search?q=%s&ie=utf-8&oe=utf-8
        迅雷看看, http://search.kankan.com/search.php?keyword=%s
        niconico, http://www.nicovideo.jp/search/%s
知识-2
    百度百科, http://baike.baidu.com/search/word?pic=1&sug=1&word=%s
    维基(zh), http://zh.wikipedia.org/wiki/%s
    维基(en), http://en.wikipedia.org/wiki/%s
    知乎, http://www.zhihu.com/search?q=%s
    互动百科, http://so.baike.com/s/doc/%s
    // 萌娘百科, http://zh.moegirl.org/index.php?search=%s
    文库-豆丁文档-百度百科
        百度文库, http://wenku.baidu.com/search?word=%s&ie=utf-8
        豆丁文档, http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=%s
        // 爱问共享, http://ishare.iask.sina.com.cn/search.php?key=%s, gbk
        百度知道, http://zhidao.baidu.com/search?word=%s
        网易公开课, http://c.open.163.com/search/search.htm?query=%s#/search/all
        Google 学术, https://scholar.google.com/scholar?hl=zh-CN&q=%s&btnG=&lr=%s
        维普，http://lib.cqvip.com/zk/search.aspx
            - E: (Keyword_C=%s+Title_C=%s), H: 题名或关键词=%s 与 范围=全部期刊
    开发--百度百科
        stackoverflow, http://stackoverflow.com/search?q=%s
        MDN, https://developer.mozilla.org/en-US/search?q=%s
        MDN（Google）, https://www.google.com/search?num=30&hl=zh-CN&newwindow=1&q=%s&sitesearch=developer.mozilla.org, developer.mozilla.org
        github, https://github.com/search?q=%s
        krugle, http://opensearch.krugle.org/document/search/#query=%s
        npm, https://www.npmjs.org/search?q=%s
社交
    新浪微博, http://s.weibo.com/weibo/%s
    豆瓣, http://www.douban.com/search?source=suggest&q=%s
    百度贴吧, http://tieba.baidu.com/f?kw=%s&ie=utf-8
    腾讯微博, http://search.t.qq.com/index.php?k=%s
    Twitter, https://twitter.com/search/%s
    Facebook, https://www.facebook.com/search/results.php?q=%s
    Google+, https://plus.google.com/s/%s
购物
    一淘, http://s.etao.com/search?q=%s
    惠惠, http://www.huihui.cn/search?q=%s
    易迅, http://searchex.yixun.com/html?charset=utf-8&as=1&key=%s
    360购物, http://s.mall.360.cn/search.html?query=%s
    淘宝, http://s.taobao.com/search?q=%s
    天猫, http://list.tmall.com/search_product.htm?q=%s&type=p
    京东, http://search.jd.com/Search?keyword=%s&enc=utf-8
    苏宁, http://search.suning.com/%s/
    国美, http://www.gome.com.cn/search?question=%s
    当当, http://search.dangdang.com/search.php?key=%s, gbk
    亚马逊, http://www.amazon.cn/s/ref=nb_sb_noss?field-keywords=%s
    其它--购物
        ebay, http://www.ebay.com/sch/i.html?_nkw=%s
        QQ网购, http://se.wanggou.com/comm_search?KeyWord=%s, gbk
下载-种子快搜
    下载搜索, https://www.google.com/cse?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q
    网盘搜索, http://so.baiduyun.me/search.php?wd=%s
    我乐盘, http://www.56pan.com/s.php?q=%s&wp=0
    种子快搜, http://www.searchbt.net/btsearch.php?query=%s
    bt 天堂, http://www.bttiantang.com/s.php?q=%s
    我爱P2P, http://oabt.org/?topic_title=%s
    VeryCD, http://www.verycd.com/search/folders/%s
    射手字幕, http://www.shooter.cn/search/%s
    影视--下载搜索
        丫丫下载站, http://www.yayaxz.com/search/%s
        天天美剧, http://www.ttmeiju.com/search.php?keyword=%s&range=0&mozcharset=gbk
        极影动漫, http://bt.ktxp.com/search.php?keyword=%s
        动漫花园, http://share.dmhy.org/topics/list?keyword=%s
    电驴-ed2000-下载搜索
        simpledCD, http://simplecd.me/search/entry/?query=%s
        ed2000, http://www.ed2000.com/FileList.asp?SearchWord=%s
        海盗湾, https://kickass.to/usearch/%s/
        btspread, http://www.btspread.com/search/%s
        torrentkitty, http://www.torrentkitty.org/search/%s
        BTDigg, https://btdigg.org/search?q=%s
软件
    Firefox 附加组件, https://addons.mozilla.org/zh-cn/firefox/search/?q=%s
    Chrome 应用商店, https://chrome.google.com/webstore/search-extensions/%s?hl=zh-CN
    greasyfork, https://greasyfork.org/scripts/search?q=%s
    userscripts, http://www.google.com.hk/search?q=site:userscripts-mirror.org+inurl:scripts+inurl:show+%s, userscripts.org
    华彩软件, http://www.huacolor.com/search.asp?word=%s, gbk
    绿软联盟, http://www.xdowns.com/i.asp?q=%s, gbk
    绿软家园, http://www.downg.com/search.asp?action=s&sType=ResName&catalog=&keyword=%s, gbk
    创e下载园, http://www.7edown.com/query.asp?q=%s, gbk
    西西软件, http://so.cr173.com/?keyword=%s, gbk, http://www.cr173.com/favicon.ico
    pc6下载站, http://so.pc6.com/?keyword=%s, gbk, http://www.pc6.com/favicon.ico
    卡饭论坛, http://bds.kafan.cn/cse/search?q=%s&s=15563968344970452529
翻译
    google翻译, http://translate.google.com.hk/?q=%s
    百度翻译, http://fanyi.baidu.com/#auto/zh/%s
    有道翻译, http://fanyi.youdao.com/translate?i=%s
    bing 翻译, http://www.bing.com/translator/?&text=%s&from=&to=zh-chs
    抓鸟翻译, http://dict.zhuaniao.com/collab/translate.php?translation_query=%s
    有道词典, http://dict.youdao.com/search?q=%s
    爱词霸, http://www.iciba.com/%s
    海词, http://dict.cn/%s
    沪江EN, http://dict.hjenglish.com/w/%s
    必应词典, http://www.bing.com/dict/search?q=%s&go=&qs=bs&form=CM
    大耳朵, http://dict.bigear.cn/w/%s/
    汉典, http://www.zdic.net/sousuo/?q=%s
    nciku, http://www.nciku.com/search/all/%s
// 小说
//     booklink, http://booklink.me/after_search.php
//         - name: %s, search_type: book
//     起点中文, http://sosu.qidian.com/searchresult.aspx?keyword=%s
//     创世中文, http://chuangshi.qq.com/search/searchindex?type=all&value=%s
//     纵横中文, http://search.zongheng.com/search/all/%s/1.html

*/});

engineListData.simple = getMStr(function(){/*
网页
    Google, http://www.google.com.hk/search?q=%s&ie=utf-8
    wen.lu, https://wen.lu/search?q=%s&hl=zh-CN&safe=off&ie=utf-8&oe=utf-8
    百度, http://www.baidu.com/s?wd=%s&ie=utf-8
    必应, https://cn.bing.com/search?q=%s
    360搜索, http://www.so.com/s?ie=utf-8&q=%s
视频-youtube
    搜库, http://www.soku.com/v?keyword=%s
    奇艺, http://so.iqiyi.com/so/q_%s
    乐视, http://so.letv.com/s?wd=%s,
    腾讯, http://v.qq.com/search.html?ms_key=%s
    搜狐, http://so.tv.sohu.com/mts?wd=%s,
    acfan, http://www.acfun.tv/search.aspx#query=%s
    bilibili, http://www.bilibili.tv/search?keyword=%s
    youtube, https://www.youtube.com/results?search_query=%s,
音乐-5
    百度音乐, http://music.baidu.com/search?ie=utf-8&oe=utf-8&key=%s
    天天动听, http://www.dongting.com/#a=searchlist&q=%s
    一听, http://so.1ting.com/all.do?q=%s
    虾米音乐, http://www.xiami.com/search?key=%s
    音悦Tai, http://so.yinyuetai.com/mv?keyword=%s
    酷我音乐, http://sou.kuwo.cn/ws/NSearch?key=%s
    网易云音乐, http://music.163.com/#/search/m/?s=%s
    歌词, http://music.baidu.com/search/lrc?key=%s
图片-flickr
    google图片, https://www.google.com/search?q=%s&safe=off&hl=zh-CN&tbm=isch
    百度图片, http://image.baidu.com/i?ie=utf-8&word=%s
    pixiv, http://www.pixiv.net/search.php?word=%s,
    flickr, http://www.flickr.com/search/?q=%s,
    picsearch, http://cn.picsearch.com/index.cgi?q=%s
    deviantART, http://www.deviantart.com/?q=%s,
    jpg4, http://img.jpg4.info/index.php?feed=%s,
    easyicon, http://www.easyicon.net/iconsearch/%s/
知识-3
    百度百科, http://baike.baidu.com/search/word?pic=1&sug=1&word=%s
    知乎, http://www.zhihu.com/search?q=%s
    维基百科, http://zh.wikipedia.org/wiki/%s,
    萌娘百科, http://zh.moegirl.org/index.php?search=%s
    互动百科, http://so.baike.com/s/doc/%s
    百度文库, http://wenku.baidu.com/search?word=%s&ie=utf-8
    豆丁文档, http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=%s
社交
    新浪微博, http://s.weibo.com/weibo/%s
    豆瓣, http://www.douban.com/search?source=suggest&q=%s
    百度贴吧, http://tieba.baidu.com/f?kw=%s&ie=utf-8
    腾讯微博, http://search.t.qq.com/index.php?k=%s
    Twitter, https://twitter.com/search/%s,
    Facebook, https://www.facebook.com/search/results.php?q=%s,
    Google+, https://plus.google.com/s/%s
购物
    一淘, http://s.etao.com/search?q=%s
    惠惠, http://www.huihui.cn/search?q=%s
    易迅, http://searchex.yixun.com/html?charset=utf-8&as=1&key=%s
    360购物, http://s.mall.360.cn/search.html?query=%s
    淘宝, http://s.taobao.com/search?q=%s
    天猫, http://list.tmall.com/search_product.htm?q=%s&type=p, gbk
    京东, http://search.jd.com/Search?keyword=%s&enc=utf-8
    苏宁, http://search.suning.com/%s/
    当当, http://search.dangdang.com/search.php?key=%s, gbk
    亚马逊, http://www.amazon.cn/s/ref=nb_sb_noss?field-keywords=%s
下载-2
    我乐盘, http://www.56pan.com/s.php?q=%s&wp=0,
    网盘搜索, http://so.baiduyun.me/search.php?wd=%s
    人人影视, http://www.yyets.com/search/index?keyword=%s
    射手字幕, http://www.shooter.cn/search/%s
    ed2000, http://www.ed2000.com/FileList.asp?SearchWord=%s,
    simpledCD, http://simplecd.me/search/entry/?query=%s,
    种子快搜, http://www.searchbt.net/btsearch.php?query=%s
    下载搜索, https://www.google.com/cse?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q
翻译
    google翻译, https://translate.google.com/?q=%s
    百度翻译, http://fanyi.baidu.com/#auto/zh/%s
    有道词典, http://dict.youdao.com/search?q=%s
    爱词霸, http://www.iciba.com/%s
    海词, http://dict.cn/%s
    百度词典, http://dict.baidu.com/s?wd=%s&ie=utf-8&oe=utf-8
    汉典, http://www.zdic.net/search/?q=%s

*/});

engineListData.wenke = getMStr(function(){/*
网页
    disconnect, https://search.disconnect.me/searchTerms/search?location_option=US&option=&from_homepage=&lang=&ses=Google&query=%s
    谷搜客, http://gusouk.com/search?q=%s
    谷歌镜像, https://www.sssis.com/search?q=%s
    Google, https://www.google.com/search?hl=zh-CN&q=%s
    必应, http://www.bing.com/search?q=%s
    百度, http://www.baidu.com/s?wd=%s
    360搜索, http://www.so.com/s?q=%s
    搜狗, http://www.sogou.com/web?query=%s
    SimilarSite, http://www.similarsitesearch.com/q.php?URL=%s
    DuckDuckGo, https://duckduckgo.com/?q=%s
视频
    A站, http://www.acfun.tv/search.aspx#query=%s
    B站, http://www.bilibili.tv/search?keyword=%s
    优酷, http://www.soku.com/search_video/q_%s
    土豆, http://so.tudou.com/nisearch/%s
    56, http://so.56.com/video/%s/?
    酷6, http://so.ku6.com/search?q=%s
    youtube, https://www.youtube.com/results?search_query=%s
    nicovideo, http://www.nicovideo.jp/search/%s
    爱奇艺, http://so.iqiyi.com/so/q_%s
    乐视, http://so.letv.com/s?wd=%s
    搜狐, http://so.tv.sohu.com/mts?wd=%s
    pps, http://so.iqiyi.com/pps/?q=%s
音乐
    网易云音乐, http://music.163.com/#/search/m/?s=%s
    百度, http://music.baidu.com/search?key=%s&ie=utf-8&oe=utf-8
    虾米, http://www.xiami.com/search?key=%s
    Songtaste, http://www.songtaste.com/search.php?type=&keyword=%s, gbk
    一听, http://so.1ting.com/song?q=%s
    酷我, http://sou.kuwo.cn/ws/NSearch?key=%s
    搜狗, http://mp3.sogou.com/music.so?query=%s&ie=utf-8&oe=utf-8
图片
    谷歌, http://www.google.com/search?tbm=isch&q=%s
    picsearch, http://cn.picsearch.com/index.cgi?q=%s
    flickr, https://www.flickr.com/search/?w=all&q=%s
    deviantart, http://www.deviantart.com/?qh=&section=&q=%s
    findicons, http://findicons.com/search/%s
    easyicon, http://www.easyicon.net/iconsearch/%s
    iconpng, http://www.iconpng.com/search/tag=%s
    百度, http://image.baidu.com/i?word=%s&ie=utf-8&oe=utf-8
    搜狗, http://pic.sogou.com/pics?query=%s, gbk
    必应, http://cn.bing.com/images/search?q=%s
    有道, http://image.youdao.com/search?q=%s
ACG
    pixiv, http://www.pixiv.net/search.php?s_mode=s_tag&word=%s
    Safebooru, http://safebooru.org/index.php?page=post&s=list&tags=%s
    Gelbooru, http://gelbooru.com/index.php?page=post&s=list&tags=%s
    nico静画, http://seiga.nicovideo.jp/search/%s
    Danbooru, http://danbooru.donmai.us/posts?utf8=✓&tags=%s&commit=Go
    sankaku, http://chan.sankakucomplex.com/post/index?tags=%s
    yande, https://yande.re/post?tags=%s
    konachan, http://konachan.com/post?page=2&tags=%s
    Zerochan, http://www.zerochan.net/%s
    anime-pictures, http://anime-pictures.net/pictures/view_posts/0?search_tag=%s
    anime-girls, http://anime-girls.ru/qsearch.php?q=%s
下载
    极影动漫, http://bt.ktxp.com/search.php?keyword=%s
    动漫花园, http://share.dmhy.org/topics/list?keyword=%s
    VeryCD, http://www.verycd.com/search/entries/%s
    人人影视, http://www.yyets.com/search/index?keyword=%s
    射手字幕, http://shooter.cn/search/%s
    idown, http://idown.org/search/search.php?ie=GB2312&q=%s, gbk
    盘搜, http://www.pansou.com/s.php?wp=0&op=&ty=gn&op=gn&q=%s
    我乐盘, http://www.56pan.com/s.php?q=%s
    Download, https://www.google.com/cse?q=%s&cx=006100883259189159113%3Atwgohm0sz8q
    电驴资源, http://www.google.com/cse?cx=006422944775554126616%3Agbrsbrjbfug&ie=UTF-8&q=%s
    ED2000, http://www.ed2000.com/FileList.asp?PageIndex=2&SearchWord=%s&searchMethod=ED2000
    笔下文学, http://www.baidu.com/s?wd=%s&ct=2097152&si=www.bxwx.org&sts=www.bxwx.org
    txt下载, http://www.txtxiazai.org/s/%s
BT
    磁力搜索, http://www.btcherry.com/search?keyword=%s
    kickass, http://kickass.to/usearch/?q=%s
    tokyotosho, http://www.tokyotosho.info/search.php?terms=%s
    BT资源, http://www.google.com/cse?cx=006422944775554126616%3Aw19ixdep_3o&ie=UTF-8&q=%s
    BTDigg, https://btdigg.org/search?q=%s
    Torrentz, http://torrentz.eu/search?f=%s
    ViTorrent, http://www.vitorrent.org/%s.html
    TorrentProject, http://torrentproject.se/?t=%s
    torrentkitty, http://www.torrentkitty.org/search/%s
    YourBittorrent, http://yourbittorrent.com/?q=%s
    BitSnoop, http://bitsnoop.com/search/all/%s
翻译
    海词, http://dict.cn/%s
    爱词霸, http://www.iciba.com/%s/
    大耳朵, http://dict.bigear.cn/w/%s/
    谷歌翻译, http://translate.google.cn/#auto/zh-CN/%s
    百度翻译, http://fanyi.baidu.com/#auto/zh/%s
    沪江日语, http://dict.hjenglish.com/jp/cj/%s
    沪江英语, http://dict.hjenglish.com/w/%s
    有道词典, http://dict.youdao.com/search?q=%s&ue=utf8
    必应词典, http://cn.bing.com/dict/search?q=%s
知识
    MDN, https://developer.mozilla.org/en-US/search?q=%s
    维基(zh), https://zh.wikipedia.org/wiki/%s
    维基(en), https://en.wikipedia.org/wiki/%s
    谷歌学术, https://scholar.google.com/scholar?hl=zh-CN&q=%s
    互动百科, http://so.baike.com/s/doc/%s
    萌娘百科, http://zh.moegirl.org/index.php?search=%s, gbk
    百度文库, http://wenku.baidu.com/search?word=%s, gbk
    百度百科, http://baike.baidu.com/searchword/?word=%s&pic=1&sug=1, gbk
    github, https://github.com/search?utf8=✓&q=%s
    krugle, http://opensearch.krugle.org/document/search/#query=%s
    知乎, http://www.zhihu.com/search?q=%s
火狐
    mozillaZine, http://www.google.com/cse?cx=003258325049489668794%3Aru2dpahviq8&q=%s, kb.mozillazine.org
    附件组件, https://addons.mozilla.org/zh-CN/firefox/search/?q=%s
    火狐社区, http://mozilla.com.cn/search/?q=%s
    userscripts镜像, http://webextender.net/scripts/search?q=%s
    userstyles, https://userstyles.org/styles/browse/%s
    greasyfork, https://greasyfork.org/zh-CN/scripts/search?q=%s
    火狐贴吧, http://tieba.baidu.com/f/search/res?ie=utf-8&kw=firefox&qw=%s&rn=100&un=&sm=1s
    卡饭, http://bds.kafan.cn/cse/search?q=%s&s=15563968344970452529
    火狐官方帮助, https://support.mozilla.org/zh-CN/search?q=%s
软件
    华彩软件, http://www.huacolor.com/search.asp?word=%s, gbk
    绿软联盟, http://zhannei.baidu.com/cse/search?s=1955694951866873337&q=%s
    绿软家园, http://www.downg.com/search.asp?action=s&sType=ResName&catalog=&keyword=%s, gbk
    创e下载园, http://www.7edown.com/query.asp?q=%s, gbk
    西西软件园, http://so.cr173.com/?keyword=%s, gbk
    绿茶软件园, http://www.33lc.com/index.php?m=search&c=index&a=init&typeid=2&siteid=1&q=%s, gbk
    pc6下载站, http://so.pc6.com/?keyword=%s, gbk
    快乐无极, http://www.oyksoft.com/search.asp?action=s&sType=ResName&keyword=%s, gbk
购物
    淘宝, http://s.taobao.com/search?q=%s
    天猫, http://list.tmall.com/search_product.htm?q=%s, gbk
    京东, http://search.jd.com/Search?keyword=%s&enc=utf-8
    一号店, http://search.yhd.com/c0-0/k%s
    亚马逊, http://www.amazon.cn/s/field-keywords=%s
    当当, http://search.dangdang.com/?key=%s, gbk

*/});


var engineListDataStr = '';


// rules 和 engineList 的对应
var categoryMap = {
    'web': '网页',
    'video': '视频',
    'music': '音乐',
    'image': '图片',
    'knowledge': '知识',
    'sociality': '社交',
    'shopping': '购物',
    'download': '下载',
    'translate': '翻译',
};

function isTheSameCategory(c1, c2) {
    return (categoryMap[c1] || c1) == (categoryMap[c2] || c2);
}

// 根据规则把搜索引擎列表插入到指定网站
// 以下数据来自原版和 ted423 的版本
var rules = [
    // 网页
    // /////////////第一个可以当模板看
    {name: "google网页搜索",// 你要加载的网站的名字(方便自己查找)
        // 是否启用.
        enabled: true,
        // 在哪个网站上加载,正则.
        // url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
        url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|search|#|$|\?)(?:.(?!&tbm=))*$/,
        // 是否要监视标题的变化
        mutationTitle: true,
        // 加载哪个类型的列表:
        // ['web'|'music'|'video'|'image'|'download'|'shopping'|'translate'|'knowledge'|'sociality']
        engineList: 'web',
        // 给引擎列表的样式
        style: '\
           border-bottom: 1px solid #E5E5E5;\
           border-top: 1px solid #E5E5E5;\
           padding-left: 135px;\
        ',

        // 插入文档,相关
        // target 将引擎跳转工具栏插入到文档的某个元素
           // (请使用xpath匹配,比如: '//*[@id="subform_ctrl"]'  或者 css匹配(请加上 'css;' 的前缀),比如: 'css;#subform_ctrl' );
        // keyword 使用 xpath 或者 css选中一个form input元素 或者 该项是一个函数，使用返回值
        // where 四种:
           // 'beforeBegin'(插入到给定元素的前面) ;
           // 'afterBegin'(作为给定元素的第一个子元素) ;
           // 'beforeEnd' (作为给定元素的最后一个子元素) ;
           // 'afterEnd'(插入到给定元素的后面);.
        insertIntoDoc: {
               /*keyword: function () {
               var input = document.getElementById('lst-ib');
               if (input) return input.value;
           }, */
           keyword: '//input[@name="q"]',
           target: 'css;#rcnt',
           where: 'beforeBegin',
        },
        // 自定义样式，我新增的
        stylish: '',
    },
    {name: "wen.lu网页搜索",
        enabled: true,
        url: /^https?:\/\/wen\.lu\//i,
        engineList: 'web',
        style: '\
            border-bottom: 1px solid #E5E5E5;\
            border-top: 1px solid #E5E5E5;\
            padding-left: 135px;\
            ',
        insertIntoDoc: {
            keyword: '//input[@name="q"]',
            target: 'css;#rcnt',
            where: 'beforeBegin',
        },
    },
    {name: "baidu 网页搜索",
        // 新增了百度简洁搜索：http://www.baidu.com/s?wd=firefox&ie=utf-8&tn=baidulocal
        url: /^https?:\/\/www\.baidu\.com\/(?:s|baidu|)/,
        mutationTitle: true,
        enabled: true,
        engineList: 'web',
        style: '\
           border-top:1px solid #D9E1F7;\
           border-bottom:1px solid #D9E1F7;\
           padding-left: 138px;\
        ',
        insertIntoDoc: {
           keyword: function() {
               var input = document.querySelector('input#kw') || document.querySelector('input[name="wd"]');
               if (input) return input.value;
           },
           target: 'id("container") | html/body/table[2]',
           where: 'beforeBegin',
        },
    },
    {name: "必应网页搜索",
        url: /^https?:\/\/[^.]*\.bing\.com\/search/,
        enabled: true,
        engineList: 'web',
        style: '\
           border-top: 1px solid #E6E6E6;\
           border-bottom: 1px solid #E6E6E6;\
           margin-top:5px;\
           margin-left: 100px;\
        ',
        insertIntoDoc: {
           keyword: 'css;#sb_form_q',
           target: 'css;#b_header',
           where: 'beforeEnd',
        },
    },
    {name: "360搜索",
        url: /^https?:\/\/www\.so\.com\/s\?/,
        engineList: 'web',
        enabled: true,
        style: '\
           border-bottom: 1px solid #E0E0E0;\
           border-top: 1px solid #E0E0E0;\
           margin-bottom: 10px;\
        ',
        insertIntoDoc: {
           keyword: 'css;#keyword',
           target: 'css;#container',
           where: 'beforeBegin',
        },
        stylish: '#head{ margin-bottom: 0; }'
    },
    {name: "搜狗网页搜索",
        url: /^https?:\/\/www\.sogou\.com\/(?:web|sogou)/,
        enabled: true,
        engineList: 'web',
        style: "\
           border-top: 1px solid #ccc;\
           border-bottom: 1px solid #ccc;\
           margin-bottom: 10px;\
           padding-left: 35px;\
        ",
        insertIntoDoc: {
           keyword: 'css;#upquery',
           target: 'css;#wrapper',
           where: 'beforeBegin',
        },
        stylish: '.header{ margin-bottom: 5px; }'
    },
    // {name: "雅虎网页搜索",
    //     url: /^https?:\/\/search\.yahoo\.com\/search/,
    //     engineList: '网页',
    //     enabled: true,
    //     style: "\
    //     text-align:left;\
    //     border-top:1px solid #D4E9F7;\
    //     border-bottom:1px solid #D4E9F7;\
    //     ",
    //     insertIntoDoc: {
    //     keyword: 'css;#yschsp',
    //     target: 'css;#hd',
    //     where: 'afterEnd'
    //     }
    // },

    // 知识
    {name: "谷歌学术",
        enabled: true,
        url: /^https?:\/\/scholar\.google(?:\.\D{1,3}){1,2}\/scholar\?/,
        engineList: "知识",
        style: '\
             border-bottom:1px solid #E5E5E5;\
             border-top:1px solid #E5E5E5;\
             z-index:999;\
             position:relative;\
             ',
        insertIntoDoc: {
           target: 'css;#gs_ab',
           keyword: '//input[@name="q"]',
           where: 'beforeBegin'
        }
    },
    {name: "百度百科",
        url: /^https?:\/\/baike\.baidu\.com\/(?:sub)?view\//,
        engineList: "知识",
        enabled: true,
        style: "\
            border-top: 1px solid #2B6DAE;\
            text-align: center;\
            z-index: 999999;\
        ",
        insertIntoDoc: {
            keyword: 'css;input#word',
            target: 'css;#nav',
            // where: 'beforeBegin',
            where: 'afterEnd',
        },
    },
    {name: "互知识",
        url: /^https?:\/\/[a-z]{2,3}\.baike\.com\/[a-z]/,
        enabled: true,
        engineList: "知识",
        style: '\
            z-index:99;\
            margin:0 auto;\
        ',
        insertIntoDoc: {
            keyword: function() {
                var input;
                if (document.getElementsByClassName('ac_input')[0] != undefined) {
                    if (document.getElementsByClassName('ac_input')[0].value != "")
                        input = document.getElementsByClassName('ac_input')[0].value;
                    else if (document.getElementsByClassName('blue')[0].innerHTML != "") input = document.getElementsByClassName('blue')[0].innerHTML;
                    else input = document.evaluate("//h1", document, null, 9, null).singleNodeValue.innerHTML;
                } else if (document.getElementsByClassName('blue')[0].innerHTML != "") input = document.getElementsByClassName('blue')[0].innerHTML;
                else input = document.evaluate("//h1", document, null, 9, null).singleNodeValue.innerHTML;
                return input;
            },
            target: 'css;.wraper',
            where: 'beforeBegin'
        }
    },
    {name: "wiki",
        url: /^https?:\/\/..\.wikipedia\.org\/w\/index\.php(?!.*\?search=%s)/,
        enabled: true,
        engineList: "知识",
        style: '\
              border-top:1px solid #D9E1F7;\
              border-bottom:1px solid #D9E1F7;\
              margin-top:5px;\
        ',
        insertIntoDoc: {
            keyword: 'css;#searchInput',
            target: 'css;#siteNotice',
            where: 'beforeBegin'
        }
    },
    {name: "wiki",
        url: /^https?:\/\/(?:en|zh|ja)\.wikipedia\.org\/(wiki\/|w\/index\.php\?search=%s)/,
        enabled: true,
        engineList: "知识",
        style: '\
              border-top:1px solid #D9E1F7;\
              border-bottom:1px solid #D9E1F7;\
              padding-left: 0;\
        ',
        insertIntoDoc: {
            keyword: function() {
                return document.evaluate("//span[@dir='auto']", document, null, 9, null).singleNodeValue.innerHTML;
            },
            target: 'css;#siteNotice',
            where: 'beforeBegin'
        }
    },
    {name: "百度知道",
        url: /^https?:\/\/zhidao\.baidu\.com\/(search|question)/,
        enabled: true,
        engineList: "知识",
        style: '\
            margin-bottom: 8px;\
        ',
        insertIntoDoc: {
            keyword: 'css;input#kw',
            target: 'css;#body',
            where: 'beforeBegin'
        }
    },
    {name: "知乎",
        url: /^https?:\/\/www\.zhihu\.com\/search\?/,
        enabled: true,
        engineList: "知识",
        style: '\
            text-align;center;\
            border-bottom:1px solid #D9E1F7;\
            text-align: center;\
        ',
        insertIntoDoc: {
            keyword: 'css;input#q',
            target: 'css;.zu-top',
            where: 'afterEnd'
        },
        // stylish: '.sej-engine > img {padding-bottom: 3px;}'
    },
    {name: "百度文库",
        url: /^https?:\/\/wenku\.baidu\.com\/search\?/,
        enabled: true,
        engineList: "知识",
        style: '\
              border-top:1px solid #D9E1F7;\
              border-bottom:1px solid #D9E1F7;\
        ',
        insertIntoDoc: {
            keyword: 'css;input#kw',
            target: 'css;#hd',
            where: 'afterEnd'
        }
    },
    {name: "豆丁",
        url: /^https?:\/\/www\.docin\.com\/search\.do/,
        enabled: true,
        engineList: "知识",
        style: '\
            margin:0 auto;\
            padding-top:65px;\
            border-top:1px solid #00000;\
            border-bottom:1px solid #D9E1F7;\
        ',
        insertIntoDoc: {
            keyword: 'css;input#topsearch',
            target: 'css;.nav',
            where: 'beforeBegin'
        }
    },

    // 视频
    {name: "soku",
        url: /^https?:\/\/www\.soku\.com\/[a-z]/,
        engineList: "视频",
        enabled: true,
        style: "\
           border-bottom: 1px solid #EEEEEE;\
           border-top: 1px solid #EEEEEE;\
           text-align: center;\
        ",
        insertIntoDoc: {
           keyword: 'css;#headq',
           target: 'css;.sk_header',
           where: 'afterEnd'
        },
    },
    {name: "bilibili",
        url: /^https?:\/\/www\.bilibili\.com\/search\?/,
        enabled: true,
        engineList: "视频",
        style: "\
           border-top: 1px solid #E7E7E7;\
           border-bottom: 1px solid #E7E7E7;\
           width: 980px;\
           margin: 0 auto;\
        ",
        insertIntoDoc: {
           keyword: 'css;#search-keyword',
           target: 'css;body > .z',
           where: 'beforeBegin',
        },
    },
    {name: "acfan",
        url: /^https?:\/\/www\.acfun\.tv\/search/,
        enabled: true,
        engineList: "视频",
        style: "\
           border-top: 1px solid #FFFFFF;\
           border-bottom: 1px solid #FFFFFF;\
           margin-bottom: 5px;\
        ",
        insertIntoDoc: {
           keyword: 'css;#input-search-mainer',
           target: 'css;#mainer',
           where: 'beforeBegin',
        },
    },
    {name: "youtube",
        url: /^https?:\/\/www\.youtube\.com\/results/,
        enabled: true,
        engineList: "视频",
        style: "\
           border-top: 1px solid #E8E8E8;\
           border-bottom: 1px solid #E8E8E8;\
        ",
        insertIntoDoc: {
           keyword: 'css;#masthead-search-term',
           target: 'css;#page-container',
           where: 'beforeBegin',
        },
    },
    {name: "niconico",
        url: /^https?:\/\/www\.nicovideo\.jp\/search\//,
        enabled: true,
        engineList: "视频",
        style: "\
           border-top: 1px solid #E8E8E8;\
           border-bottom: 1px solid #E8E8E8;\
           text-align: center;\
        ",
        insertIntoDoc: {
           keyword: 'css;#search_united',
           target: 'css;.tagListBox',
           where: 'beforeBegin',
        },
    },
    {name: "百度视频",
        url: /^https?:\/\/v\.baidu\.com\/(v|#)/,
        enabled: true,
        engineList: "video",
        style: "\
        	margin:0 auto;\
        	width: 984px;\
		",
        insertIntoDoc: {
           keyword: 'css;#kw',
           target: 'css;#navbar',
           where: 'beforeBegin'
        }
    },
    {name: "360视频",
        url: /^https?:\/\/video\.so\.com\//,
        engineList: "video",
        enabled: true,
        style: "\
               text-align:left;\
               top:-20px;\
               margin-left:5px;\
               ",
        insertIntoDoc: {
           keyword: 'css;#kw',
           target: 'css;#head',
           where: 'afterEnd'
        }
    },
    {name: "腾讯视频",
        url: /^https?:\/\/v\.qq\.com\/search\.html\?/,
        engineList: "video",
        enabled: true,
        style: "",
        insertIntoDoc: {
           keyword: 'css;#iWordMid',
           target: 'css;.mod_big_search',
           where: 'afterEnd'
        }
    },
    // {name: "sogou视频",
    //     url: /^https?:\/\/v\.sogou\.com\/v\?/,
    //     engineList: "video",
    //     enabled: true,
    //     style: "\
    //            top:-10px;\
    //            border-top:1px solid #D9E1F7;\
    //            border-bottom:1px solid #D9E1F7;\
    //            ",
    //     insertIntoDoc: {
    //        keyword: 'css; #form_query',
    //        target: 'css;.header',
    //        where: 'afterEnd'
    //     }
    // },
    // {name: "soso视频",
    //     url: /^https?:\/\/video\.soso\.com\/v\?/,
    //     engineList: "video",
    //     enabled: true,
    //     style: "\
    //            top:-10px;\
    //            margin:0 auto;\
    //            border-top:1px solid #D9E1F7;\
    //            border-bottom:1px solid #D9E1F7;\
    //            ",
    //     insertIntoDoc: {
    //        keyword: 'css; #form_query',
    //        target: 'css;#s_search',
    //        where: 'afterEnd'
    //     }
    // },
    {name: "bing视频",
        url: /^https?:\/\/.*\.bing\.com\/video/,
        enabled: true,
        engineList: "video",
        style: '\
            left: 5px;\
            border-collapse:separate;\
        ',
        insertIntoDoc: {
           keyword: 'css;#sb_form_q',
           target: 'css;#rfPane',
           where: 'afterBegin'
        },
        stylish: '#vm_res { position: relative; top: 54px; }',
    },
    {name: "iqiyi",
        url: /^https?:\/\/so\.iqiyi\.com\/so\/q/,
        enabled: true,
        engineList: "video",
        style: '\
               margin:0 auto;\
               ',
        insertIntoDoc: {
           keyword: 'css;#data-widget-searchword',
           target: 'css;#destinationBox',
           where: 'afterEnd'
        },
    },
    {name: "Letv",
        url: /^https?:\/\/so\.letv\.com\/s\?/,
        enabled: true,
        engineList: "video",
        style: "\
               margin:0 auto;\
               border-top: 1px solid #FFFFFF;\
               border-bottom: 1px solid #FFFFFF;\
               ",
        insertIntoDoc: {
           keyword: function() {
               var input = document.getElementsByClassName("i-t")[1].value;
               if (input) return input;
           },
           target: 'css;.So-search',
           where: 'afterEnd',
        },
    },
    {name: "搜狐",
        url: /^https?:\/\/so\.tv\.sohu\.com\/mts\?/,
        enabled: true,
        engineList: "video",
        style: "\
               margin:0 auto;\
               border-top: 1px solid #FFFFFF;\
               border-bottom: 1px solid #FFFFFF;\
               ",
        insertIntoDoc: {
           keyword: 'css;#gNewSearch2',
           target: 'css;.ss-head',
           where: 'beforeEnd',
        },
    },
    {name: "56视频",
        url: /^https?:\/\/so\.56\.com\/video\//,
        enabled: true,
        engineList: "video",
        style: "\
               position:relative;\
               top:-20px;\
               margin:0 auto;\
               ",
        insertIntoDoc: {
           keyword: 'css;.search_keyword',
           target: 'css;.header_wrap',
           where: 'beforeEnd'
        }
    },
    {name: "ku6",
        url: /^https?:\/\/so\.ku6\.com\/search/,
        engineList: "video",
        enabled: true,
        style: "\
               word-break:keep-all;\
               white-space:nowrap;\
               position:relative;\
               left:-70px;\
               ",
        insertIntoDoc: {
           keyword: 'css;#bdvSearvhInput',
           target: 'css;.ckl_header',
           where: 'beforeEnd'
        }
    },

    // 音乐
    {name: "天天动听",
        url: /^https?:\/\/www\.dongting\.com\/#/,
        enabled: true,
        engineList: "music",
        style: "\
            margin-left:23%;\
            background-color:#E2E2E2;\
            position: fixed;\
            right:0;\
        ",
        insertIntoDoc: {
            keyword: 'css;.searchBox',
            target: 'css;.head',
            where: 'beforeEnd'
        }
    },
    {name: "百度音乐",
        url: /^https?:\/\/music\.baidu\.com\/search/,
        enabled: true,
        engineList: "music",
        style: "\
            border-top:1px solid #CDEAF6;\
            padding-left: 80px;\
        ",
        insertIntoDoc: {
            keyword: 'css;#ww',
            target: 'css;.nav',
            where: 'beforeBegin'
        }
    },
    {name: "qq音乐",
        url: /^https?:\/\/cgi\.music\.soso\.com/,
        enabled: true,
        engineList: "music",
        style: "\
            margin:2px auto;\
        ",
        insertIntoDoc: {
            keyword: 'css;#search_input',
            target: 'css;#search_result',
            where: 'beforeBegin'
        }
    },
    {name: "搜狗音乐",
        url: /^https?:\/\/mp3\.sogou\.com\/music\.so/,
        enabled: true,
        engineList: "music",
        style: "\
            text-align:left;\
            margin-left:30px;\
        ",
        insertIntoDoc: {
            keyword: 'css;#queryinput',
            target: 'css;#header_sogou',
            where: 'afterEnd'
        }
    },
    {name: "音悦台",
        url: /^https?:\/\/so\.yinyuetai\.com\/mv\?/,
        enabled: true,
        engineList: "music",
        style: "\
            margin:0 auto;\
        ",
        insertIntoDoc: {
            keyword: '//input[@name="keyword"]',
            target: 'css;.search_title',
            where: 'beforeBegin'
        },
    },
    {name: "一听音乐",
        url: /^https?:\/\/so\.1ting\.com\//,
        enabled: true,
        engineList: "music",
        style: "\
            margin:0 auto;\
            width: 960px;\
        ",
        insertIntoDoc: {
            keyword: 'css;#keyword',
            target: 'css;.nav',
            where: 'beforeBegin'
        }
    },
    {name: "songtaste",
        url: /^https?:\/\/www\.songtaste\.com\/search/,
        enabled: true,
        engineList: "music",
        style: "\
            margin:0 auto;\
            word-break:keep-all;\
            white-space:nowrap;\
            background-color:#E6E6E6;\
        ",
        insertIntoDoc: {
            keyword: 'css;#sb',
            target: 'css;head',
            where: 'beforeBegin'
        }
    },
    {name: "xiami",
        url: /^https?:\/\/www\.xiami\.com\/search/,
        enabled: true,
        engineList: "music",
        style: "\
            word-break:keep-all;\
            margin-right: 205px;\
        ",
        insertIntoDoc: {
            keyword: 'css;#search_text',
            target: 'css;.more_cols_left_inner',
            where: 'beforeBegin'
        }
    },

    // 图片
    {name: "谷歌图片",
        url: /^https?:\/\/\w{2,10}\.google(?:\.\D{1,3}){1,2}\/search\?(.*tbs=sbi)|(.*tbm=isch)/,
        enabled: true,
        engineList: "image",
        style: '\
            border-top:1px solid #ccc;\
            border-bottom:1px solid #ccc;\
            ',
        insertIntoDoc: {
            keyword: 'css;input[name=q]',
            target: 'css;#top_nav',
            where: 'beforeBegin'
        }
    },
    {name: "百度图片",
        url: /^https?:\/\/image\.baidu\.c(om|n)\/i/,
        enabled: true,
        engineList: "image",
        style: '\
            margin-left:40px;\
            ',
        insertIntoDoc: {
            keyword: 'css;input#kw',
            target: 'css;#search',
            where: 'afterEnd'
        }
    },
    {name: "360图片",
        url: /^https?:\/\/\image\.so\.com\/i\?/,
        enabled: true,
        engineList: "image",
        style: '\
            word-break:keep-all;\
            white-space:nowrap;\
            position:relative;\
            z-index:50;\
            text-align:left;\
            ',
        insertIntoDoc: {
            keyword: 'css;input#search_kw',
            target: 'css;#searchBox',
            where: 'afterBegin'
        },
        etc: function() {
            document.getElementById("searchBox").style.height = '80px';
        }
    },
    {name: "bing图片",
        url: /^https?:\/\/.*\.bing\.com\/images\/search/,
        enabled: true,
        engineList: "image",
        style: '\
            top:-5px;\
            margin-left:5px;\
            border-collapse:separate;\
            ',
        insertIntoDoc: {
            keyword: 'css;#sb_form_q',
            target: 'css;#rfPane',
            where: 'beforeEnd'
        },
        etc: function() {
            document.getElementById("rf_hold").style.height = '120px';
        }
    },
    {name: "搜狗图片",
        url: /^https?:\/\/pic\.sogou\.com\/pic/,
        engineList: "image",
        enabled: true,
        style: "\
            top:-9px;\
            border-top:1px solid #BFBDEA;\
            border-bottom:1px solid #BFBDEA;\
            ",
        insertIntoDoc: {
            keyword: 'css;#form_querytext',
            target: 'css;.fix_area',
            where: 'beforeEnd'
        },
        etc: function() {
            document.getElementsByClassName("hd_fix")[0].style.height = '130px';
            document.getElementsByClassName("hd_fix")[0].nextElementSibling.style.height = '130px';
        }
    },
    {name: "有道图片",
        url: /^https?:\/\/image\.youdao\.com\/search/,
        engineList: "image",
        enabled: true,
        style: "\
            border-top:1px solid #EBF1FF;\
            border-bottom:1px solid #EBF1FF;\
            ",
        insertIntoDoc: {
            keyword: 'css;#query',
            target: 'css;#w',
            where: 'beforeBegin'
        }
    },
    {name: "花瓣",
        url: /^https?:\/\/huaban\.com\/search\/\?/,
        engineList: "image",
        enabled: true,
        style: "\
            border-top:1px solid #EBF1FF;\
            ",
        insertIntoDoc: {
            keyword: 'css;#query',
            target: 'css;#search_switch',
            where: 'afterEnd'
        }
    },
    {name: "flickr",
        url: /^https?:\/\/www\.flickr\.com\/search/,
        engineList: "image",
        enabled: true,
        style: "\
            position:fixed;\
            top:80px;\
            z-index:1999;\
            background-color:#FFFFFF;\
            width:100%;\
            border-top:1px solid #EBF1FF;\
            border-bottom:1px solid #EBF1FF;\
            ",
        insertIntoDoc: {
            keyword: function() {
            if (document.getElementById("autosuggest-input"))
                var input = document.getElementById("autosuggest-input").value;
            else input = "";
            return input;
            },
            target: 'css;#content',
            where: 'afterBegin'
        },
        etc: function() {
            setTimeout(function() {
            document.getElementsByTagName("section")[0].style.setProperty("top", "31px", "important");
            }, 1500);
        }
    },
    {name: "picsearch",
        url: /^http:\/\/(..|...)\.picsearch\.com\/index\.cgi/,
        engineList: "image",
        enabled: true,
        style: "\
            margin-top:80px;\
            ",
        insertIntoDoc: {
            keyword: 'css;input[name=q]',
            target: 'css;#header',
            where: 'beforeEnd'
        }
    },
    {name: "pixiv",
        url: /^http:\/\/www\.pixiv\.net\/search\.php/,
        engineList: "image",
        enabled: true,
        style: "\
            margin: 0 auto;\
            width: 970px;\
            font-family: 微软雅黑;\
        ",
        insertIntoDoc: {
            keyword: 'css;input[name=word]',
            target: 'css;body',
            where: 'beforeBegin'
        }
    },
    {name: "deviantart",
        url: /^http:\/\/www\.deviantart\.com\/\?q/,
        engineList: "image",
        enabled: true,
        style: "\
            margin-bottom:10px;\
            ",
        insertIntoDoc: {
            keyword: 'css;#searchInput',
            target: 'css;.browse-top-bar',
            where: 'afterEnd'
        }
    },
    {name: "jpg4",
        url: /^http:\/\/img\.jpger\.info\//,
        engineList: "image",
        enabled: true,
        style: "\
            margin-top:300px;\
            ",
        insertIntoDoc: {
            keyword: 'css;input[name=feed]',
            target: '//div[@align="center"]',
            where: 'beforeEnd'
        }
    },

    // 下载
    {name: "人人影视",
        url: /^https?:\/\/www\.yyets\.com\/search\//,
        engineList: "下载",
        enabled: true,
        style: '\
            border-bottom: 1px solid #00AFFF;\
            text-align: center;\
        ',
        insertIntoDoc: {
            keyword: 'css;#keyword',
            target: 'css;.topBox',
            where: 'afterEnd',
        },
    },
    {name: "极影",
        url: /^https?:\/\/bt\.ktxp\.com\/search\.php\?/,
        engineList: "下载",
        enabled: true,
        style: "\
            border-bottom: 1px solid #CAD9EA;\
            border-top: 1px solid #CAD9EA;\
            background-color: white;\
            text-align: center;\
        ",
        insertIntoDoc: {
            keyword: 'css;#top-search-wd',
            target: 'css;head',
            where: 'beforeBegin',
        },
    },
    {name: "我爱p2p",
        url: /^http:\/\/oabt\.org\/\?topic_title=/,
        engineList: "下载",
        enabled: true,
        style: "\
            border-bottom: 1px solid #3BA1DC;\
            border-top: 1px solid #3BA1DC;\
            text-align: center;\
        ",
        insertIntoDoc: {
            keyword: 'css;#username',
            target: 'css;#seamain',
            where: 'afterEnd',
        },
    },
    {name: "dmhy",
        url: /^https?:\/\/share\.dmhy\.org\/topics\/list/,
        engineList: "download",
        enabled: true,
        style: "\
               margin:0 auto;\
               ",
        insertIntoDoc: {
           keyword: 'css;#keyword',
           target: 'css;.quick_search',
           where: 'afterEnd'
        }
    },
    {name: "kickass",
        url: /^https?:\/\/kickass\.to\/usearch\//,
        engineList: "download",
        enabled: true,
        style: "\
               margin:0 auto;\
               ",
        insertIntoDoc: {
           keyword: 'css;#search_box',
           target: 'css;.headmainpart',
           where: 'afterEnd'
        }
    },
    {name: "nyaa",
        url: /^https?:\/\/www\.nyaa\.se\/\?page/,
        engineList: "download",
        enabled: true,
        style: "\
               margin:0 auto;\
               top:44px;\
               ",
        insertIntoDoc: {
           keyword: 'css;.inputsearchterm',
           target: 'css;#topbar',
           where: 'afterEnd'
        }
    },
    {name: "ed2000",
        url: /^https?:\/\/www\.ed2000\.com\/FileList\.asp/,
        engineList: "download",
        enabled: true,
        style: "\
               border: 1px solid #E5E5E5;\
               ",
        insertIntoDoc: {
           keyword: 'css;input[name=SearchWord]',
           target: 'css;.topsearch',
           where: 'afterEnd'
        },
    },
    {name: "旋风分享",
        url: /^https?:\/\/search\.t\.qq\.com\/index\.php\?(.*QQ%E6%97)/,
        engineList: "download",
        enabled: true,
        style: "\
               margin:0 auto;\
               border-top:1px solid #D4E9F7;\
               border-bottom:1px solid #D4E9F7;\
               ",
        insertIntoDoc: {
           keyword: function() {
               return getElement('css;#k2').value.substring(9)
           },
           target: 'css;.soso',
           where: 'beforeEnd'
        }
    },
    {name: "btspread",
        url: /^https?:\/\/www\.btspread\.com\/search\//,
        enabled: true,
        engineList: "download",
        style: '\
               word-break:keep-all;\
               white-space:nowrap;\
               ',
        insertIntoDoc: {
           keyword: 'css;input#search-keyword',
           target: 'css;.form-search',
           where: 'afterEnd'
        }
    },
    {name: "torrentkitty",
        url: /^https?:\/\/(www\.)?torrentkitty\.(com|org)\/search\//,
        enabled: true,
        engineList: "download",
        style: '\
               border-top:1px solid #FFFFFF;\
               border-bottom:1px solid #FFFFFF;\
               margin:0 auto;\
               margin-top:50px;\
               ',
        insertIntoDoc: {
           keyword: function() {
               return document.getElementsByTagName("h2")[0].innerHTML.slice(19, -1);
           },
           target: 'css;.wrapper',
           where: 'afterEnd'
        }
    },
    {name: "BTDigg",
        url: /^https?:\/\/btdigg\.org\/search\?/,
        enabled: true,
        engineList: "download",
        style: '\
               margin:0 auto;\
               border-top:1px solid #D4E9F7;\
               border-bottom:1px solid #D4E9F7;\
               ',
        insertIntoDoc: {
           keyword: 'css;input#searchq',
           target: 'css;.pager',
           where: 'beforeBegin'
        }
    },

    // 购物
    {name: "一淘",
        url: /^https?:\/\/s8?\.etao\.com\/search/,
        enabled: true,
        engineList: "shopping",
        style: "\
           border-top:1px solid #D4E9F7;\
           border-bottom:1px solid #D4E9F7;\
           margin:0 auto;\
           word-break:keep-all;\
           white-space:nowrap;\
        ",
        insertIntoDoc: {
           keyword: 'css;#J_searchIpt',
           target: 'css;#etao-header-bd',
           where: 'beforeBegin'
        }
    },
    {name: "京东",
        url: /^https?:\/\/search\.jd\.com\/Search\?/,
        enabled: true,
        engineList: "shopping",
        style: "\
           margin:0 auto;\
           border-bottom:1px solid #E5E5E5;\
           border-top:1px solid #E5E5E5;\
           margin-bottom:3px;\
        ",
        insertIntoDoc: {
           keyword: 'css;#key',
           target: 'css;#nav-2013',
           where: 'beforeBegin'
        }
    },
    {name: "淘宝搜索",
        url: /^https?:\/\/s\.taobao\.com\/search/,
        enabled: true,
        engineList: "购物",
        style: "\
           border-bottom: 1px solid #E5E5E5;\
           border-top: 1px solid #E5E5E5;\
        ",
        insertIntoDoc: {
           keyword: 'css;#q',
           target: 'css;.tb-container',
           where: 'beforeBegin',
        },
    },
    {name: "易迅",
        url: /^https?:\/\/searchex\.yixun\.com\/html\?/,
        enabled: true,
        engineList: "shopping",
        style: "\
           text-align: center;\
           background-color:#FFFFFF;\
        ",
        insertIntoDoc: {
           keyword: 'css;#q_show',
           target: 'css;.ic_header',
           where: 'beforeEnd'
        }
    },
    {name: "苏宁",
        url: /^https?:\/\/(search)\.suning\.com\//,
        enabled: true,
        engineList: "shopping",
        style: "\
           border-top:1px solid #E5E5E5;\
           margin:0 auto;\
        ",
        insertIntoDoc: {
           keyword: 'css;#searchKeywords',
           target: 'css;.g-header',
           where: 'afterEnd'
        }
    },
    {name: "天猫",
        url: /^https?:\/\/list\.tmall\.com\/\/?search/,
        enabled: true,
        engineList: "shopping",
        style: "\
           margin:0 auto;\
           border-bottom:1px solid #E5E5E5;\
           border-top:1px solid #E5E5E5;\
           margin-bottom:3px;\
        ",
        insertIntoDoc: {
           keyword: 'css;#mq',
           target: 'css;#mallNav',
           where: 'beforeBegin'
        }
    },
    {name: "亚马逊",
        url: /^https?:\/\/www\.amazon\.cn\/s\/ref/,
        enabled: true,
        engineList: "shopping",
        style: "\
           border-bottom:1px solid #E5E5E5;\
           border-top:1px solid #E5E5E5;\
           margin-bottom:3px;\
        ",
        insertIntoDoc: {
           keyword: 'css;#twotabsearchtextbox',
           target: 'css;#navbar',
           where: 'beforeEnd'
        }
    },
    {name: "当当",
        url: /^https?:\/\/search\.dangdang\.com\/\?key/,
        enabled: true,
        engineList: "shopping",
        style: "\
           margin:0 auto;\
           border-bottom:1px solid #E5E5E5;\
           border-top:1px solid #E5E5E5;\
           margin-bottom:3px;\
        ",
        insertIntoDoc: {
           keyword: 'css;#key_S',
           target: 'css;#bd',
           where: 'beforeBegin'
        }
    },
    {name: "拍拍",
        url: /^https?:\/\/s\.paipai\.com\/[a-z]/,
        enabled: true,
        engineList: "shopping",
        style: "\
           text-align:left;\
        ",
        insertIntoDoc: {
           keyword: 'css;#KeyWord',
           target: 'css;.mod_s',
           where: 'beforeEnd'
        }
    },
    {name: "QQ网购",
        url: /^https?:\/\/se?\.wanggou\.com\/[a-z]/,
        enabled: true,
        engineList: "shopping",
        style: "\
           margin:0 auto;\
           background-color:#C8C8C8;\
           border-bottom:1px solid #E5E5E5;\
           border-top:1px solid #E5E5E5;\
           margin-bottom:3px;\
        ",
        insertIntoDoc: {
           keyword: 'css;#KeyWord',
           target: 'css;.wg_header',
           where: 'afterEnd'
        }
    },
    {name: "360购物",
        url: /^https?:\/\/s\.mall\.360\.cn\/search/,
        enabled: true,
        engineList: "shopping",
        style: "\
           margin:0 auto;\
           word-break:keep-all;\
           white-space:nowrap;\
           border-bottom:1px solid #E5E5E5;\
           border-top:1px solid #E5E5E5;\
        ",
        insertIntoDoc: {
           keyword: 'css;#mall_keyword',
           target: 'css;.header',
           where: 'afterEnd'
        }
    },

    // 词典
    {name: "有道词典",
        url: /^https?:\/\/dict\.youdao\.com\/search/,
        enabled: true,
        engineList: "translate",
        style: "\
            margin:0 auto;\
            position:absolut;\
            border-bottom:1px solid #D4E9F7;\
            border-top:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#query',
            target: 'css;#scontainer',
            where: 'beforeBegin'
        }
    },
    {name: "爱词霸",
        url: /^https?:\/\/www\.iciba\.com/,
        enabled: true,
        engineList: "translate",
        style: "\
            margin-top:85px;\
            ",
        insertIntoDoc: {
            keyword: 'css;#s',
            target: 'css;.header',
            where: 'beforeEnd'
        }
    },
    {name: "海词",
        url: /^https?:\/\/dict\.cn\/./,
        enabled: true,
        engineList: "translate",
        style: "\
            position:relative;\
            left:-150px;\
            top:-410px;\
            width:90px;\
            border:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#q',
            target: 'css;.floatsidenav',
            where: 'beforeEnd'
        }
    },
    {name: "沪江英语",
        url: /^https?:\/\/dict\.hjenglish\.com\/(en|w)/,
        enabled: true,
        engineList: "translate",
        style: "\
            margin:0 auto;\
            border-bottom:1px solid #D4E9F7;\
            border-top:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#w',
            target: 'css;#xd_search',
            where: 'beforeEnd'
        },
        etc: function() {
            document.getElementById("xd_search").style.height = "130px";
            document.getElementById("wrapper").style.top = "20px";
        }
    },
    {name: "沪江日语",
        url: /^https?:\/\/dict\.hjenglish\.com\/(404\/)?jp/,
        enabled: true,
        engineList: "translate",
        style: "\
            margin:0 auto;\
            border-bottom:1px solid #D4E9F7;\
            border-top:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#w',
            target: 'css;#xd_search',
            where: 'beforeEnd'
        },
        etc: function() {
            document.getElementById("xd_search").style.height = "120px";
            document.getElementById("wrapper").style.top = "10px";
        }
    },
    {name: "汉典",
        url: /^https?:\/\/www\.zdic\.net\/sousuo/,
        enabled: true,
        engineList: "translate",
        style: "\
            word-break:keep-all;\
            white-space:nowrap;\
            margin:0 auto;\
            border-bottom:1px solid #D4E9F7;\
            border-top:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#q',
            target: 'css;.secpan',
            where: 'afterEnd'
        }
    },

    // 翻译
    {name: "google翻译",
        url: /^https?:\/\/translate\.google\./,
        enabled: true,
        engineList: "translate",
        style: "\
            margin:0 auto;\
            border-bottom:1px solid #D4E9F7;\
            border-top:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#source',
            target: 'css;#gt-c',
            where: 'beforeBegin'
        }
    },
    {name: "百度翻译",
        url: /^https?:\/\/fanyi\.baidu\.com/,
        enabled: true,
        engineList: "translate",
        style: "\
            text-align:left;\
            margin-bottom:10px;\
            margin-top:0px;\
            border-bottom:1px solid #D4E9F7;\
            border-top:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#baidu_translate_input',
            target: 'css;.header',
            where: 'beforeBegin'
        }
    },
    {name: "有道翻译",
        url: /^https?:\/\/fanyi\.youdao\.com/,
        enabled: true,
        engineList: "translate",
        style: "\
            margin: 0 auto;\
            max-width: 1000px;\
            ",
        insertIntoDoc: {
            keyword: 'css;#inputText',
            target: '//body/*[1]',
            where: 'beforeBegin'
        }
    },
    {name: "bing词典",
        url: /^https?:\/\/(cn|www)\.bing\.com\/dict\/search\?/,
        enabled: true,
        engineList: "translate",
        style: "\
            margin-top:80px;\
            border-top:1px solid #D4E9F7;\
            border-bottom:1px solid #D4E9F7;\
            word-break:keep-all;\
            white-space:nowrap;\
            ",
        insertIntoDoc: {
            keyword: 'css;#sb_form_q',
            target: 'css;#sb_form',
            where: 'afterEnd'
        }
    },
    {name: "bing翻译",
        url: /^https?:\/\/www\.bing\.com\/translator/,
        enabled: true,
        engineList: "translate",
        style: "\
            margin:5px auto;\
            word-break:keep-all;\
            white-space:nowrap;\
            ",
        insertIntoDoc: {
            keyword: 'css;#InputText',
            target: 'css;#Wrapper',
            where: 'afterBegin'
            // target: 'css;body',
            // where: 'beforeBegin'
        }
    },
    {name: "爱词霸翻译",
        url: /^https?:\/\/fy\.iciba\.com/,
        enabled: true,
        engineList: "translate",
        style: "\
            position:fixed;\
            width:90px;\
            top:100px;\
            left:40px;\
            border:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#inputC',
            target: 'css;body',
            where: 'beforeBegin'
        }
    },
    {name: "QQweibo",
        url: /^https?:\/\/search\.t\.qq\.com\/index|user\.php\?(?!.*QQ%E6%97)/,
        engineList: "sociality",
        enabled: true,
        style: "\
            margin:0 auto;\
            border-top:1px solid #D4E9F7;\
            border-bottom:1px solid #D4E9F7;\
            ",
        insertIntoDoc: {
            keyword: 'css;#k2',
            target: 'css;.soso',
            where: 'beforeEnd'
        }
    },
    {name: "weibo",
        url: /^https?:\/\/s\.weibo\.com\/weibo|user\//,
        engineList: "sociality",
        enabled: true,
        style: "\
            word-break:keep-all;\
            white-space:nowrap;\
            ",
        insertIntoDoc: {
            keyword: 'css;.searchInp_form',
            target: 'css;#pl_common_searchTop',
            where: 'afterEnd'
        }
    },
    {name: "射手字幕",
        url: /^https?:\/\/shooter\.cn\/search/,
        engineList: "web",
        enabled: true,
        style: "\
            margin:0 auto;\
            word-break:keep-all;\
            white-space:nowrap;\
            ",
        insertIntoDoc: {
            keyword: 'css;#key',
            target: 'css;#site_header',
            where: 'afterEnd'
        }
    },
];

var rule_default = {
	name: "通用规则",
    url: /.*/,
    enabled: true,
    style: "\
        margin: 0 auto;\
        max-width: 970px;\
    ",
    insertIntoDoc: {
        keyword: 'css;input[name="q"], input[name=word]',
        target: 'css;body',
        where: 'beforeBegin'
    }
};


if (typeof exports !== 'undefined') {
    exports.rules = rules;
}


var ICON_DATA = {"addons.mozilla.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAq5JREFUOI19k09sVFUUxn/nvvtmOjOGNsCj5U9baqKJRtMaFkLbGMBEDWFDWLA0YeEOWFTdmLhzZVIICxNYsDNBNyw0lMRFcdGxlhZKEKVAO8Up0jZtsS3zZt68efewmEoJNT05q5Pv++XLvecIm9T7Z9jrpcwFnOxHcIgOVhN3ZrSf4ma+F/Xx11tv5O//pNOLd3RibkTPDZxKer/wh1/W2M0ApXCleSH8m3zxR8J4hbbGTgOy52WNtxlg9360kpQOehlnnasxOT1ZmZkvfDXzm47+p5FXTd2fe4eBS6i0AzRvbwk/7DmadeoYzF8N5xZms3WnPgJO/h9g6ujBEx07trVQczGxi/jjyXWcU95q7sFIPfT8wizXh68VNr6BSkcQBFx78N1aQF2bw1DxMuoUVehuPw4qHbbnNG002CuvpRpbV8pPvwGIJcRPm3VAvVEHW9IBQXYv1q8nsZI25/pOnH3vnbYDMvpw8NvLv/aHVV3N2rRB1gCqdU7WNtFi39abY+Ph4uJQSkSfWady6HF0W/66P4Cj6ncf2ucXno1uTKAQ5PZwe2i8tLg0dzpadT8sp0ksYMpumenSGEGuDd+zeCmwxiCynkAdGB9K5VBc4u6OXSQEkN4v7UDnu50fBTu3mcmpQvnp0pL2ftKVLYa3EBEytpGc2YpTpRqX+fexxPfGCrVqNTIYZm2lVvts/M7493JXWmux6zeY82piPN+QSzUR/ZNNhoYnKgj6ZtfuzJZd4u/b0eprbBm+OtFu64eRfPBiD/rM+dhVAEiZDDfyDyurYXQM4M+R6StdR3bmVqIlMtJU/4VX18D4TBUn51/f3h4QR45SKcr+3p/8AnCgj4ZqHONLA/PFZYzVqQ2AOK59em9k5lKS5w0AY9dP13jM3fp5dheAeDyoJcnJ56T9NnCniYbJAAAAAElFTkSuQmCC","anime-girls.ru":"data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAADt8v8AS01lADk9SAAEAAAAws3jAAMACQDJy90A8vj/AAIEDABUU1wA9Pj/AFJWbgD4/v8A4Of6AJOWpADM0ukACwoMAAoLDwCnq74A4ev9AAwJEgAODBIAEw8bABYQFQAnKSkAUk9RABYTFQAAAAoAPTxGAE5PYwAAABMAAgIQAAMGCgAFBgoABwQNAAQEFgAHCQoAHiAhAAoJEwAOCQoA4ur7AOPq+wAPDQ0ASEhYADk6OACtsMUA6vD7AEpOYQDu8PsAExQiAFBQXgAAAwsAFhscABoXGQAHBgIAAwYLABwaGQBBQU0AQEFWALu7ywANCgUADAkLADAyPADP0+UACQ0OAAsLEQDl6/YAHiArAOTs+QAgISUA0NfoAObq/ADBx9QAIyYrADs2PwAAAgAAEhUdAEA7PADt9P8A7vT/AF9jfAA8PUsAAwMDANfk9ADa4fQABQMDAPL3/wAAABUA8/f/AIyPpAA/REUAeX6NAAQICQBUVGIAGBgmAPX6/wD2+v8AzM7gAAYGDACNkaoA+Pr/AOHn9AALCgYACQgSAOPo9wD9/f8ADAwMAODt/QBJRVEADQ4SAG91fAAdIDUAEg0PAOvs+gAOEBgAAAAEABITIQABAQcAFxYYABUUJADc4/IABgQQAN/l+ACnq7AACQgKAGppfQCCf4gACAcQAAsICgAKCQ0ACw0HAOTp8gAMChAAEBAQAAwNIgAREhYAFBETABIUHAAAAAUAs7fCACgsLQAAAw4ABQQIAAMHCAAYHRwABgkOAODo+QAKDREA5Or/AA4NEQAMEBEA5u3/ABEPDgDn7/wA6u75AFxhcADn8/8ASkpiACQmLgA7OEgAPzo8AIeLpAAAAgMAAAAGAFRRUwAAAQkA8/L8AAAADwDx9v8AzM3XAAQGBgDz+f8A9Pn/ABkcGgAFAw8A9vn/APj8/wDN1OMACwYPAKqouwDk6PoACw4MAOLp/QCXlqoA5O/9ACEiLADm7/0A0tvvANbX7AB1cogAsrPBAAEBAQBPUFoAAAAHAAEABwAYGBgAAAcKAKSksAAJBAEABgQKAN3k+ADf5/gAV1ljAOPm9QAMCA0A4ub+AOTo+wDp6fUAhIOXABIRDQCus8IAw8fZAJ2grgAAAQIAUFFVACcnMwAAAAgAxczfAC0tMwADAxEAAQcUAAYFDgAFCgsA3+X8AFZYagAKCA4A4ev8AOPq+QAeJCsAEA4OABAMEQDq7PYA5+z/AOjs/wBISlwAXl9tAOjv/wARExQA6/L/ABQVEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5NwLoTpRbsRzYiIWK9TKc0yNL28tYE8Me4nBrl5Dc6KRCLmv6A/ZsQerDhsmFapLitppMMgEuw26RF+Lc4C/LAV+pnETnGu4kih4VtXlgXPCCc/LyVPi4lQpZajWfOHddZ6aaLR6lN+XP76p56OTXIrArNMG6c227EjYxTsCipZnMhJZHWRH4y6DOdu3YcGR4RzQV53OAJlCsOt3s11yIDYZbL0eUE7uWAq8fXmVUrU8A0qfAWNG0lvqhiMUGmaCTSdwo+Cnm9ijpXQfssyY76Q9iMfXMT4zISRBf4SOw62FJRFih0VFbeY1VSrtj4yQqkA3SWo4EHYXoMbRGN5aNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","anime-pictures.net":"data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAQUFBAENDQwBEREQARkZGAEdHRwBISEgATExMAFVVVQBWVlYAWlpaAGBgYABwcHAAdHR0AIODgwCGhoYAioqKAJ+fnwCurq4AuLi4ALu7uwC8vLwAvb29AMTExADJyckAzMzMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkJDhkZGRkZGRkZBQgZGRkZAAAZGRkAABkZGQAAGRkZGQAAGRkZAAAZGRkAABkZGRkAABkZGQAAGRkZAAAZGRkZAAAZGRkAABkZGQAAGRkZGQAAGRkZAAAZGRkAABQPCwYAAAcNEwAAGRkVAAACAAAAAAAAAAQAABkZBgEBAwwRFhgXEhAKAAAZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","baike.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAitJREFUOI2FkU1I03EYxz//v5ubpm6WZB7KWUFMaIcdKorKxC4SQUVoQXYJAiG6dakO1aWOQUHRKSiKIvMQWdTZW0nhS4fcf0uXL/kyc+h/m9u3g7qXtug5Pb+H5/k83+/zMwL79OHrcLiNJLmogE0eg9l5QQIwARewnNdTDoFm30eosVQq3r5bLHivpIt7qLEE7mJA5/kJQUhXrk5LkjrOTQhGNfDFLgS4/wGgLqydgYj2toxraCQhvJYam8O60D1ZBDDXLcXjGV72/Aago93F929pWg+Wk0oJYiIyJtqOVFAcawo6uyZEtaXjp6NKpqSnz2NKr/m+e39ODx7Na3pmRc9exDQfSxdbgJD8wYgglJXY07ugvve5Y+4K/pCj3lLwwFgxoP1kVHgs7Tk8Lkk6eiwqd4MlNlrqvjy1tsQqWEJlHmDZzuhN3+q2azd+afP2sPzBiPzBiJxbLL3qXVRn10/hDKm1PZpVYOC2pGVf9iS3bs9y594i2+rNglONjGZ4/aSO3c0utjc5MQwwKsIUdF2/WXoYwL/D5MTZGT4N2BhGrp5VEFvIUOuN4A+WlfiqPCWf0ySTTTidfynIp/4v7EQmmzvWE0+NycVLG3j4eAmv18BOCdsGDKiuBJfTYHZJnDrjproqZ9HAY0kxX7YwOJwkHk/T0OCkcesqf3AoweRUCofDpOVQZW7YG8YR8Pv6DW94PwmgDKpqwWGWVpARzM0JkoALAn5f/x8SGsh2ARqUqwAAAABJRU5ErkJggg==","bds.kafan.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADQ0lEQVQ4ja3M/U/UBRzA8c+l5UhL0yRcOlMc8nTxYF0UKiiHHjCZTzN0rZZIOCdzroYYWyrkzDXi5I674+F46DiQ4+kUAckElAcD8QYejzaSBgxSlLX0B2v17oev6y/ovb1/fYn8H3VuSGT4TBG2ee9RKH7YRYNdFYZNFUb5/PexL/iAMpWGMlXYf9tEg1PCERGRai8dT6Ye0JKUSUNsCoVLIjCpQjCJGvv63bgtNZjlbfIklLwX3sEoAeRKMDbRKECpaJi4cYeH3YOM2pso8ozCIL7kyBraU7N5+vgPipZGYhR/ckVNXUQikzddtOiOK0CxBDFa2YzdOx6rZySOoA+xr4qhdLWO2eH7uPRlzI1N0nbkHE26o0x09vMPcG3LEQUYsziZ7nEzYmvgXuUPPOwd4dncUx7dn2Kw6DLGeYHUbT3E9X0nMb6opkdvZ9Y9RrEqVAGGjZU8co3yvVc0elmLQfzp+spC80cncFtqaE06S5asJEdWczFgD7N99xgodjKQWaIAFYsieHBnhGufnubG4bNciUwmR3zRizfjDV00xKSgl3WYFoQw0djFpejPuLo/jd87hxSg9s0dTLb1Uh64l4m2Xv5+9if1uqMUvhzOVJsLy0saLEs13E63cDujgCxZx/QtN/0nTM+BlTuY6ejD6hGGyUODbf0uSry2Uht+ELfFQbnfTu7mVmFbu52mXV/w29AvALTvS38OrIpnuqOPgsWbMYkak6gxiA/1GxOZueVmpv9nnNpkqiMSGLI6+bXdxU9nTPw1+0QBanz28nhonMKFGzFJIGbZQJ4EYV22hbnhcTrTDFwQX+o2HcIZlYxZFcp38hZ1wQcUoHxxJD1fF2Ce/y7WN6Iwihqj+KMXX4wSiEH8MUswF8SbbFmDQfwwSABW8VGA7o8zcMal0JpynoGsCq4fSKdx/0l+/OQ0TQlpVIUkUOKlpXlPKvVxx2iMP07LwQy6D59XgPH8y7jzaxk0OGhNymTQ4GCgwEn7l0aGS65w8/NsrsYdo+9cCb3flHL3WxuuU/kMnipUAOerWjp2plK5fDtlHptwrIjF8Xo0Za9sxuGpo2pFLBdf01LtFUPF8m1ULtFSsTCCS4u0/AupiSiXVgwZtgAAAABJRU5ErkJggg==","bitsnoop.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVQ4jWNggIKjp/X+k4IZkAGpmlEMIVcz3BB0gV0HDP5PmGL+v7DYBgVPmGL+f9cBA/wG7Dpg8L+swhpDMwyXVVhjGIJiALLNZRXW/1evN/q/er0RiqETppjjNgDZtgVLTODiC5aYoMgRZcCGrUb/j57W+791l+H/JSuMyTNg6y5DrGFBtBdINgA9EJeuMv4/e4Hp/9JyIgOR4mikOCHRPT9QlCNh+gBHym6qezaHoAAAAABJRU5ErkJggg==","booklink.me":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAoNJREFUOI2FUl1Ik2EYPe/3zb+5ypw1oawu0vxLK9KYJppmN7Ec/VBBd911EWFJElaWhiIiBF0E0U0YdKMJZaVmEKvNJDWKNdGmk8if6ZbCmtv3vd/3dDGcfwPP5Xvec97zPOcFIoCGHc2z7W02EEWiN4azpZksx0vI+bK9Yy3XKa02FSIZiFrtPx4VDe+H9xVjT5+8ox/fH14kArlc9alNdeSxWJ4t3WXr4rvGm/rr71ctut3hF5jCkZCdgwWHHTwoQVdcIh2+VRMDAJrVYldj/41rVX5JBhNC4VQAEKIx99MOxhh0KbswdcRYGU5AIyMN4x3t1UyrDbqHhmL8M9MhQrPKG6QoYAAS8vJx4E5tOLkw57AbJ3u64ep8HeOfmUbsjp3QFxSCOIcqSyBFgRoMYFNmFlTO4fvSh0m7vW7JQLPtlLnkl0bzwtvTfd7ncCDx4CFodDr4xsewNSsbC04n4pOToUoy9MYCLPTZ4B34un+5Bcaw96TpQlJO7iuRMZAURGDWje1Hi8CDQSTsSwcxBl1qKsTYWHAiBPtsFXNv33R+lCg+PAuNjjZarl65KeiTwEQRkscDJoqAIIA4B4ggREeDZBlMVRHFZWhPn+tdrtFPsDfeJvfgQEjI1jUMyDLi0jMUZjDMMEnevJiXfy+8avL+vvv521CoPkUB1rQAWUZiWhrGioqrzWZz8/IOALQSwfm8tZYHAtAZDNhiLKQoziGqKqCqgKogLiNTnSgtv75SHP5IlxiDx2p9PK/i8p/8vMqKsvJHUyPDNfMDg7l+m/WszzkK6JNmTSZTy/q5NsDfD71t1hNlNNjwYDESr4l0uBKfjpWe2TPh6vKm7O6KxP8HwH4ZNGgYNI4AAAAASUVORK5CYII=","bt.ktxp.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAATJJREFUOI2lk7FuwjAQhj9XXTLlAXAr1gx0RAp7HsF5B4+BV+iKGf0O4RGyE8TKkBVVYa3IlNEdEmhKAkXiFutOvu9+3/kE5rThKXsGYE6b117QOgmEQI4W5X+Ml15Ei5IiSwH1iIi+AoDxNAfyjiJFXSkOu5AgitFifR/Q2BvWhYAESjx/zXhKN/nvE6yTWLfEnDYcdk2iFitgC0BdKTx/fl3lF6BFiRaLzqW8PRWQ8/0lGehLv4l1ZQA47lOsSygyhRZbRpMVdRXeB1iX4PnN6D4/3gFJEBmsWwIhnp/fBlgnOe4TYN7xFVosgDVFpi79uKFAtlXPZhhNZlgnqStDEBmKLG3VDAC0ONPD1o8vvufHaLEgiGKa8aadOle70IwzuZY6aIO70Pz/1UMAQDy7zj8aNHFPVHD7/gAAAABJRU5ErkJggg==","btdigg.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAexJREFUOI2Vk09I03EYxj9fZyHOP4dodqohhnnYyEAIoj+LgrIo6FzUoaBL0Dk97OC8FS6idohOQoegbGSprCRsEF7CnxQLXVsm5JbiXPuBTH48HVyyVqF74L09n+f9fuF9kET55JQ6aStLSrGDEfGiKJuwGJbEir5S6a+hpBXSFFhgmeSJB3nP5wyTl5YszgziflWw6I7Ty0Bqz+Is0f2UyUgCIMa18Gzx4fG67aQz0+asI+EyZsPolHwBf9DYzA900XOzGe96wCzRph98yI9bQZVD/5Ij0dxG4nL9944GdlGbZ47Hc+dnXDk8m8EALmNw1yu5yMf7DqtPjCTi9PLWCm26vVzbWpW47s521N7FvClYBKqBHYlj7v54FqvLFGUziHs4O226t5xQCtnhZ9RExMsli9PVvADA49PoRexTJqXYgQyTN15bt65U+40GP2PGVpbIT09iLW3aq4GP+nvMIfqoWcM+fKEx9rTFp6GtBhiDxr+FFvLMUduMd8JF3YRtk6i8vv9tD/iDNTvp9Daxe70LDqu0u6+OBPxB40gbZ1sOAbT4NNS4l08283faOJcG+KNZM3re2pch/U49hKbQI/EsNIXeq//e7TyJLxoJSmJZyQ3mr3r+nrAYK8omIqIpxfbZypJT6kil7xfWVjgCwbJmkAAAAABJRU5ErkJggg==","c.open.163.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAHBJREFUOI2tUUEOwDAIYkv//2V3cjGIrMvGyRKKqMBHHIoMIAZx0zeifs4PipMGLMx3rdlkqaguMsMaTLvYMgggagKz2HddeazTCdQOuIGMyOfbOWcDd6rvWq9JNKVg3AZK6LjH+Cnk6OMSpxEc/wsuqQI6C+HzarEAAAAASUVORK5CYII=","chan.sankakucomplex.com":"data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////////Z6P+51f+51f+51f+51f+51f+51f+51f+51f+51f+51f+51f+51f+51f+51f/Z6P/a6f80hP8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv80hf/a6P////+Vv/8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv8ddv+WwP/////////y9/9Plf8ddv8sgP+jx/+uzv+uzv+uzv+uzv+szf+kyP+kyP+oy//y9/////////////+00v8fd/8ddv+KuP////////////////+Ywf8off8qfv+y0P/////////////////+/v9vqP8ddv8rf//R4//////////a6P80hf8ddv9wqf/9/v/////////////////////T5P8tgP8ddv9vqP/+/v/+/v93rf8ddv8ugf/S5P////////////////////////////+Ou/8ddv8geP+00f+51P8geP8ddv+Ou//////////////////////////////////u9P9Hj/8ddv9Tl/9Tlv8ddv9Jkf/t9P////////////////////////////////////+szf8ed/8ddv8ddv8ed/+rzf/////////////////////////////////////////9/v9mov8ddv8ddv9mo//8/f/////////////////////////////////////////////M4P8off8off/M4P////////////////////////////////////////////////////+Gtf+Gtv/////////////////////////////////////////////////////////o8f/o8f////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","chrome.google.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAitJREFUOI29kr1rFEEYh5+Znd3bvSRE0NgaxGChlWBjEQiCTUwUo4mtgiJa+FEKksbCf0CCoOAXAVEkoBAQUkQRtRRsglgkJpdcTIi522zudufmtdjg+XGd4FtM8fK+DzPPb+AfS7Vqjsoo+57ufwGSurwVjHWdGpju+3tctwKcK11IKpXqqrWNmrW2Vo3j1Ud7FpJWswZgYWnpknKuV5RYcdTa2opR/0D/hoNQOwBX84Mwmp2bvyfOhU6JQeT17u7u2wZAOdcbFYvDaZoiGqrVGD8wF5WAKAGBOI7xfXNWxMP4hmQzAcgBosSmaUqapltahCzNEPLlrYMsyxABQVAi9ucTxGlE504FBb6P+9NXwyFZBrjf7BtyAuAhSoM47JPH6KkJvMhHCdikjjt8HHViBNEaEER+SUF5Gm08TBxTHxmC8QdIw8OlCpsqxHrI+H3s6SH0RoJnDMozzRtEUUTU3sH7qyfpmVtBujrQC8t4WYJk0MiKuLpPo7SKDJwn/PgKoytNQEEHfCi95ebRhDsP65ivy/g3LjPTN0yhq85e+4x08RZ+cRuh/wVXfknaeaQJCFTA9OIU2c52Js90MhwNcuXgNaRUISxrwvA6YwdWoHI3VybPWXeDTQdO0NUsppjBxLFO3u06xJuZCuX1BvNrlsnP3/lU7cvTFKDxDZF81wB4Wq8FpoApeKhigfIOy8YUzDofrRSzm5qe7ZsQ5/mpIATlrbX62v+/fgAefAFi66hmrwAAAABJRU5ErkJggg==","chuangshi.qq.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAiBJREFUOI19kr1OVFEUhb99uAwDAgXC8GeIIqJoZ0VhYmlM7H0AWwtfwQexs/ExTExsCIYoQfEnkvA3BoiGmcDcc89eFvfOgGhcyc5pdvZZ39rb9PTZQy4NvziUT1sIYMZ/JSF3LlvYo916YsWDR7s7zeZ0GB6G/v5e0z/VHR4j3moxOzm5Z6vTcxoqEv2jIxAC85vrvf6vC0vYRUdmzG+u87Exy0mWkZ10OmBG/ddPbv3Y5cNYA6n87GZzh28zcxiGEDeaO3xqzOLutFJBnhIhSuRyFve3eT82hWNgAcfYaFxhYX+bQiK6cHfylDg+PqbjIkqEiLi7v83q+BRuwgK9chNr41Ms7G4RlYgxEnHyPCchEiIr3Hk9McXy9haSCCEQQqhwjdPTU9YmZwAoioIklS8iCTIHXNBut/m8uMT5yATMvFvBq6WklCi6AyQSkCHhlHwCwrnUXaJer5PQXw4KCQeyJFV/lQrnPCRESolU3UWMkULlIO86SAgE7k6SMMSd719KB+4cHR31BtRqNRJCKvmTicwRVvE5UMhZmbtWNZb3MGBlqKtXryNEjLHE7iK4IM9zJt++oVarEUIgz3NijEji4N59bm9uEGOk3W7T6XSIEgLs5dCIvMLoR3+ECNAHZGYUFbNLRAyszCurw0ELxh2RrLu8MwUgVHYdwCjvBWMQDvtejU2cbHQ6ywU2CMbFEobLqqTOagA7eDw6+vw35qFgAXs/rFQAAAAASUVORK5CYII=","cn.bing.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABF0lEQVQokWP8v5OBJMAEZ/34zUyMBhYI9Z+BIXKOr4zgZ3vVJyHGN4mygYGB4cl73l3X5Yl1EgS8/sxFmgYIKF9nv+K0xr03/JhSLFg1yAl9WnlGY+UZDRGe76YKz80VX+jLvMJnQ7bDeU7WPwwMDG++cG6/otSw2eo/ficxMDDMidtpofSMsJNkBT8zMDDce8O/7KTW2UfiBDSI831NsbnUu9vk6B0ZuBuEeb4nWF5lxNQgJ/RJWfRj4xarf/+hssxM//z174Ya3+Bg/YtuAyMDg4Lwx/03ZeEShrKvkm0uSQt8QXMSI3LiO3RbduYhfW6230nWl7H6GF0DAwPD77/MzEz/mBj/Y1WN7mkGBgZW5r9Y1cEBAGO4WQnBHqV2AAAAAElFTkSuQmCC","cn.picsearch.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAlVJREFUOI1Fk72OHEUUhb9zq3tmdke7wgHCgAjWYBHxY8lIBAgkeIWNic1LkPAUhBZyTEBsmcCIALBAliBzYMTPwhphze56erpuHYJu7EqqknOq6p7vSDcdYaDQMoAd0mLaQ7QUpTMtxbPVARVFQBfCrWE3pDaLGtDjTKRG1phFW6ACAgq0JeqYxKXryVqhiSgJBJC4FcBIjcuvHvL69cuM28r9uydsHiUtskdakjWR/PSRLUXLgiKQFthn3Ph4/5fbt97z3S8/4PjGayhGFHqCohLFQGB3uAmYDFvugBEIVstFjcAA64M93Hro2KNlJUqgSJwVG168esBqv+NiAycPTgHx3W8Hb9z58R9UzP17pyhGmrjpfinGQfOAzOFzf3z/zQ+fvH300mH35+PK9be+4t+TM6JUWq6QRuwKrFEnqLucowNbBJu/j17YZ70q7WgRsVp3SKLlAhB2j1SwG+5sUGBPLMDIdjx69+ufN92Vl83vf11w/ng7x1ywB6QVMAArQuULkyNQiVJoaaBDMou9nt2TETuQKvZiNjFRBtwKjqxceXN9dvveMXd+OubTz98HGjYMF5MYCooeaMBAlIEo3WTcacErl3799sNrlz4CoqX5TGAXQEgNO2nJfA5EUHcxDT2As/NWhtGxG82jzQ57JEpDqiiSxV5DAsX/oCUAURKLW+6XydV3nidkTh5uOX14jm0kP/3/dFWZYZvAipITB9OAhJTYS8BzeUCaWunWz9kn/dKMQ0HqUVcCUXAWSt9Rd0aC0ic5TqWaav4M97oTUoed+D+5m0iQNdfFwwAAAABJRU5ErkJggg==","danbooru.donmai.us":"data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXoCkAF+ApABegaQAX4GkAF+BpQBfgqYAYIKmAGGEpwBihagAY4apAGOHqgBliKwAZYmsAGaJrQBmiq0AZ4quAGiLrwBojLEAao6yAGuPswBsj7UAbJC1AG2QtQBskbUAbZK3AG+TuABwk7kAb5S4AHCUuQBwlLoAcZS6AHCVugBxlboAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQDAwMDAgIEBAAAAAAAAAAEAwMEAQQDAwQABAAAAAAABAQEAwMCBAQEAAQDAAAAAAMDAwQDAwQDAwAEAQAAAAALCwoJCAYEAgQABwUAAAAAFBUUExIREA4MAA8NAAAAACAgHiAgHRoZFwAYFgAAAAAgICAgIR8fHiAAISEAAAAAIB4gISEgISAeAB4eAAAAAAAAAAAAAAAAAAAeIAAAAAAAICAcICAgICAgACAAAAAAAAAgIB4gIR8bICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AACADwAAgAcAAIADAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAMABAADgAQAA8AEAAP//AAA=","developer.mozilla.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAmpJREFUOI2tkkuIjWEYx3/v933nnO8ccwyNaZKUGQskpUZKbiklZUNIclmIUjSLoaYsJAuXNKJckpGyMlhgQZLIQslolLBRGhIzMWac+S7v7bGYRp2w818+T8/v+T8X+N8qXH6985+5C/2b6ZW6mAKITz9bqpw7FMLarHkG1uRfENXL7jkdAOVTT48qpbaquNI2NrkJsuQJgepm19w7Kj7x5G4QN6zDZCiTk1WbcFEBDGCtkH+3RHGh7A2IJ21sHu9bjCGrPQ7QJpbaKJKmYAyulsPXUXraG7m2rEUtNK6wPnak32pgLWgDaQq1UchNIUIbJBQQz9hQjYNLpnNy24LfM25btByIOHfvLftuv4M5U8ZBTsA5ibxx4EEnmmOrZtO1cUHdkn6Mpihgz+rZVMKAvY8GyUsKygLOEqAt3lgwlmolAuq3DKCUIklztq9qJTu+gg1NRcgMaEsg1mK1pUV5hr+nWPkTMAEZyzQAS2dWIclBm3EHBWP5muT0vx9k+KeuK4xCxaRJZSqlEo3VKh+HEjrvvwclYDyROIvyggoUt14M0Pl5hObJ8W/Az0Sorr8EpYj21qn0ffIwswFyA+IIfG4RYwm1gWqBnt7+Ogc9t1/ClCJqWom+kQSmV8aLtYXcEqp563YgtOEcIULfiOLIxeeUrSYVOHvjJV8QQicoCZCwCNaACDg7EIl1QAAqxOv0NaF7RUt5U9eDD0Wuv4GGjCAqIU57gZuoeBZRcTHOgzMqEm2UaH2DxB/gYcfAxP+w8eoOpkadKnWxN8l57uw/Uzfblms9eNcKa7rn//VuE1p5OP5nbsOVtl/P3CxSS89FqwAAAABJRU5ErkJggg==","dict.baidu.com":"data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AzMzMzMzMzMzP/////////M/4zMd8zI/8z/zMzMzMz/zP/MzMzMzP/M/4zMzMzI/8z/+MzMzI//zPjIjMzIjI/M/Mz4zI/Mz8z8zP///4yPzPjIjI+Mj//M///Mz8zP/8z//8zPzM//zP//jI/4///M/////////8zMzMzMzMzMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dict.bigear.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAhpJREFUOI19kz9oU1EUxn/vpUkTWxqJaWxFjNrENljFFixuulkwIDgIFqQ6dHEVF5XOOhUHMdCl6mCliw5BRRdBocVSMwmmiSViaBJDmjz7Xv6+dx1CXt+D6AffcM4933c4954rAcwupsVvpYnX46BS1bFibNiD2ymR+KnZ8oMDTp7OjUjS5UdJsV1uALA2f5JkrsbCuxwbGRWA93fGGPA4mImlSBfqNpPh/S7kVHYHVVUZH3IAcGLIzZPZo8hGjamgiwFPO3/74kFUVbUxld1BRuggdPz9DoTFPXrGx59qw4xHh/fRqbVS7hRs5jWsDlfOBtgqVM1YqbboBtMgua2RKe4JAl4X58JeM17/oXQ3aCp59LqGMHTuvdw0Dw70O3l4LWzG8a8FhKEjDANh6Oh1jaaSp6ellkAtAbCah8VjEnOXTtm6bOUqfPi49v8ROniw/IWNzYItV96tMxkOdDcQRosOO5Ake9FEKMDKfJSV+SgyOlaN3J6rTaNV58XdaSZC9m6K1uBbpsRkOMDN6XGsGtn6pof9fUxFDgHw+HWC+OoWANniLq8+pwA4fdxv24MeYeztvlbbW9WrF0Zx9bSvKHLER2RmCoDUrxJWjSz0Jh0WSxWevU0AMOj14O3rtY0iBCzF17Fq5F5f0Ja4H3vDwvInGk37r9z4nuX8rRilsmLW9vqCSAAjN56LWiHV9Zn+BXcgRHrpuvQXfrwoITm0R3oAAAAASUVORK5CYII=","dict.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAnBJREFUOI1tk8FrVFcUxn/3vTedZDJpknFSK7RosIppigkVi1AFu2ilCN2J3XYt4q4ENy7j3rV/QKGlm0LBRat0UxCqItjSSCK1aWPGyTjJOJOXvPMdF+/NGNELl8s593znnu+e8wWAs0/8C2De0q3Z7Vaz5nLc+1u4HBVnVB1bL01O3pNz9da+cCOcfeKfp0/XflaWxewCqZ9Eym3r+4VLKEQ2fGj6y8QDl5XtxHnwm1+VaRfYizOL5cwntpV+lAOFu3OODifemWBT8G51mPpQmXa3x0/LK3zfga6DJOSi98/S0ShtrtWlPPtcr82Fj2eoVYbprySOOTi5h0ufHOX6zD5GLUUyZEbabNQTV5+vODIcAxCHwA9/LVEplRgpJcyMj3B66n0O753kylSHi4uN/B9kJK/wihyAKMDv5Ymc97b4cbXLYvM+Zz7Yz2eHpjjw9788tAiXiGQalJSZ2MqMNMt9ZrnfTPyykUJS4sHqGtPlOL+XkcgspyCxYSmrnec0ul1yvwZ3EVCvDIE7EU4fl8hUtEu0t1MebzynsdnFrOh3wfWr+ii1oTIAt9s9pIAkEpMNAnccVtZb9LKMU3GKR06Mc3JvjfOzHwLw28NHLGfgMuRFBf0EB8erfD2XB37D62ul1ebbO4svp9KdJKq+3dxuNfe4BJ68AQadNOW7e39ybanBetE1dxFGx56GE//5r527t09LoqodKm7IgSJoy5ymGZlT6MIHc1M+/unNRLBgzim3LH4mp1V8ziuzP9CJXqo0BAtjEwsB4Nj/fsbFfOf+H3PZZnvctVtMBaiwQ2Xk2VvTs3fDRG1h+b1w4wXrDym+dya4ZgAAAABJRU5ErkJggg==","dict.hjenglish.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAASFJREFUOI2dk72KwkAURs9kIg6oAWGxWHvB3sZO8C18CGtfwJ9ii3Q2PoCtlZWwjXa+wKKIdop2URM2OFu4G8zGQOIdBu53+eZcZoYrhBZvQAeokC6+gIEJdHBppDwM8I4C87FzURbJy3zEefg+4GnvGaRiPKpRZsTW2Ea2k3WYqzk1VYsQjEjlSUgkderMmFFV1WSAJUtatOjRw8EBoECBPv2Qz4wD7NkzdscAnNWZLl0AGv/eO9EVFiyC3MKilCmlA1y5hrQSKh2gTDnINZqjf0wOyBk52rQDvWLF5XYJdOwjNmlyUicsLCQyqNvYIV8sIPu7/sLHx8Zm6A7jARMm7NiFDDdubNgw1VPW3jrSSAgtPl4cJlB8msCA+6+8NM4/TNlSzRktZZcAAAAASUVORK5CYII=","dict.youdao.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAQBJREFUOI3NkrFqwzAQhn/JgSylOBgypdAgKGhzHiEvkTV5gz5KyBO0a+nUNUuTJ6gzBGUReE8MXjNY6mLBb4V4bW/67k736+444K9NsOOVXlWueQOAVMo6gZgJa0qv9KJyzUeID+xpFGpkR82a98C1cymltnfiXQGv9CRwJpNSWFO27gPH7woAGBPviJ+IewWGxAfiCfGeCwaRwCPx0itdALhGHRR9AucAlWtyAN+4tY5APMIxk8mCA7y0TCYFLfa2A2HNFcAn2vvwSqcAfujJJm4nPqQ1gK/WzQG8Vq55pt9nvQKX6YuPH4RiAHNhTR3nOiOkUtZ8aW3hhi/0/9kvWWFQQDml5pQAAAAASUVORK5CYII=","dict.zhuaniao.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQ4EaVTzU8TURCf2tJuS7tQtlRb6UKBIkQwkRRSEzkQgyEc6lkOKgcOph78Y+CgjXjDs2i44FXY9AMTlQRUELZapVlouy3d7kKtb0Zr0MSLTvL2zb75eL838xtTvV6H/xELBptMJojeXLCXyobnyog4YhzXYvmCFi6qVSfaeRdXdrfaU1areV5KykmX06rcvzumjY/1ggkR3Jh+bNf1mr8v1D5bLuvR3qDgFbvbBJYIrE1mCIoCrKxsHuzK+Rzvsi29+6DEbTZz9unijEYI8ObBgXOzlcrx9OAlXyDYKUCzwwrDQx1wVDGg089Dt+gR3mxmhcUnaWeoxwMbm/vzDFzmDEKMMNhquRqduT1KwXiGt0vre6iSeAUHNDE0d26NBtAXY9BACQyjFusKuL2Ry+IPb/Y9ZglwuVscdHaknUChqLF/O4jn3V5dP4mhgRJgwSYm+gV0Oi3XrvYB30yvhGa7BS70eGFHPoTJyQHhMK+F0ZesRVVznvXw5Ixv7/C10moEo6OZXbWvlFAF9FVZDOqEABUMRIkMd8GnLwVWg9/RkJF9sA4oDfYQAuzzjqzwvnaRUFxn/X2ZlmGLXAE7AL52B4xHgqAUqrC1nSNuoJkQtLkdqReszz/9aRvq90NOKdOS1nch8TpL555WDp49f3uAMXhACRjD5j4ykuCtf5PP7Fm1b0DIsl/VHGezzP1KwOiZQobFF9YyjSRYQETRENSlVzI8iK9mWlzckpSSCQHVALmN9Az1euDho9Xo8vKGd2rqooA8yBcrwHgCqYR0kMkWci08t/R+W4ljDCanWTg9TJGwGNaNk3vYZ7VUdeKsYJGFNkfSzjXNrSX20s4/h6kB81/271ghG17l+rPTAAAAAElFTkSuQmCC","duckduckgo.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAxVJREFUOI1tk09sVGUUxX/f996bmb43w7TTqZNOK+2kjRYUNyyMDSlJNS5EEhpjoLghRjck/omGiAu3xEZN3EhcSqQYEhFDqgs3RCLUhEQqtUhpEWo72NYOdNqZzpt5733XBQZRvMtzzz05yblH8Z+Rl7bsAA4BeZDoLqos4BbwgRr99Yf7+erfx499jwQJ/PI0VmwzsWTX36s5hN9R8ihYvhqd2vmAQHVv3w1Xm29XnMwLzjP7cvWpi9TOj6JbutG2A4BrqaWWuD61EfKcd/JqAUADyP6t51xLjRUrwcGK15rzO3ppe/84+ZM3UekcQeVPIgPrgeSK1eiga6kx2b/1HICW4b4BBGepJsNhGKI3tZEb3IUCnHwXnZ//SGrPW5jaGkYUoVEs1WQYwZHhvgFdCTiMqGt+ZFqj6jzJV9/h5+kSUSQArFcDakNvQriEiGAE/Mi0IupaJeCwTtpWthKaXhEQA4ETx7YCJq4uAJDyHI4cHye9+z2isk9UUUikqISmN2lbWb3sh45nWZ2RAXQTG8V5Ms1JvLh9L52jh55Eb66SfWWR7g/n0fkAV1mdy37o2CKIETCAslNUpyYoPDVAezaJ+Ncxs72EJWhqh8pUO3NHkpiKRtIgguhc3GmUG1FRCYjdRG1i/J8nkQYKWDpVoPhpD41lG2+7DwLlRlTMxZ2GXqmHq5mYnhXAaIf4jUusN4K7Ck1bmHmjGydXJ/10Fe0Z1sYTYEEmpmdX6uGqznp6BKV7bNQdQeMsT1Ne/OOeC69/N+tnFKWjKUpnkpiGwlbcQemerKdHtDpx5Ww9QBXcxDGNhliaxuwM38x9yeXSJRYHn+DC8xm+eC2PExm00hTcxLF6gFInrpy1ARJfTfY3hh5feCQV/3jGdw/Upy43z7ZVGbn4Os3JNImdeQq3FY5htSsV/ywIoxcTp3/pfKBM1T3bLrimHrF9128/vfvyPrfuxFoSHeSu3yrxyY4x5tt7NhDL+3qy/3/bCCBD256dL99+++GYl4kG9z605teSLdPnF4uLywsdm9yP1OnJ7+7n/wVUUVTTSR0H+QAAAABJRU5ErkJggg==","en.wikipedia.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAXdJREFUOI2lk7GKIkEQhv9eDhNBxDP0BXwKQZDBXEERQfABxFjFfDAyXRMTwWg1NTUUAxMDMRgTE1t0QAMTv01u59DZOw6voq6/+/+KoqsECHgHLP8e9pdHX+ZX490AVtJPvRZHA/CiWZL0Zq1VpVKRMUapVEqr1UqtVkvGGOVyOa3Xa1WrVRljNBwONZ/PZYxRsVjU+XyWvppxHIdmsxk0VyqVgnwymTCbzYK7bDYbnAPAYrFAEpfLBQDP85DE4XCgUCgEhuVyyXg8DgMAkskkvV4vyMvlMpLYbreBVqvVHr7hATCdTtHvrthsNkhiv98DYK3Fdd0/AwAkMRqNAHBdF8dxqNfrAHQ6Ha7X698Bg8EASfi+T7/fZ7fbIQnP82i328/Pw4Db7YYk0ul0oOXzeSRxPB5DgB/PgxGJRNRoNJTJZAKt2+0qGo0qkUiEJ4lvlsj3fe73+4N2Op1C1QH7JunjGRqLxWSMedDi8fh3k/wh/nOdPwFzSo2/XSRfAgAAAABJRU5ErkJggg==","fanyi.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAgFJREFUOI2Nk7FrFFEQxn/zbt/eGT3ibTQhECu7iEWaaEBIY8BWEEUSO3t7GzsRG8FGsBbB/AEinKCXUmxTxnTnIV5yl0tyt/t231js3bJJCjPw8R7DfMPMNzOiOgKqzX6/v+qcs5zDrLVuenq6BayJqjZV9a5z7jzcchJE5Kv0er2kVrtgVRUAGQdo6V82Hb8iwmg0dCZJEpu7FUFzlgERBcNJCHnMGEmS2ABANUetKsiLDvQ9n9Yv82izBzUDmXLRCkdO0ZfzDGMtKgryynPHKFEOn8+iClOhYVM9O38c925OsfGxy7vHDVyqRTOaF6njCvIWdjsJv/ccg+OMpQXL1s4xS2/arC+GzNUN3iuqOQcUU5aqag2337d5+qHDwdDz6nOXWwuWH8/miV3G6y9dbMWUJBVMni1H7DzNJ1fRLAU8i7OGg6OY5be7zF6CG3OGzHvKnOD0mEbOk6YpVWtYiAJc5mlUPNciy9Apeio+mEyggFesZuwfOr5t9+gPPZUs5ft2jziD+8sRk50pRJxAUaoBbP3c51dnyMadK6xcn+JvN+bhygwPlhtk3lPmSLvd0Xq9XmQNKgIieK+YQl8pxpZ5LTZxMBgQhGHogOKI0mySHfyZBT5pYWidiaJGKwjOaPlfC4KAKIpaojpCtdrsdvdWnUvOec6hm5mJWiLx2j8C6h0I4+zCfgAAAABJRU5ErkJggg==","fanyi.youdao.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAQBJREFUOI3NkrFqwzAQhn/JgSylOBgypdAgKGhzHiEvkTV5gz5KyBO0a+nUNUuTJ6gzBGUReE8MXjNY6mLBb4V4bW/67k736+444K9NsOOVXlWueQOAVMo6gZgJa0qv9KJyzUeID+xpFGpkR82a98C1cymltnfiXQGv9CRwJpNSWFO27gPH7woAGBPviJ+IewWGxAfiCfGeCwaRwCPx0itdALhGHRR9AucAlWtyAN+4tY5APMIxk8mCA7y0TCYFLfa2A2HNFcAn2vvwSqcAfujJJm4nPqQ1gK/WzQG8Vq55pt9nvQKX6YuPH4RiAHNhTR3nOiOkUtZ8aW3hhi/0/9kvWWFQQDml5pQAAAAASUVORK5CYII=","findicons.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAABFa6z/T3Wx/2CCuf9niL3/bZLK/0Zce/8YFxT/HBwS/xkXEv87TGL/bJDJ/2qQuf8+TMz/JiTr/y4y6f9SVuj/UXay/1h9uP9dgrz/YIfB/1h+tf8TFBP/Eg0A/xQQAP8NDQD/CAgD/1FznP9Udcf/EhLk/x8g6P8jKOb/fH7s/2OGvP9ehLz/X4W+/2KMyP9ScZr/HxAA/ywXAP8qFgD/HhUA/wcDAP9BXnL/MD7i/w4M6v8jJeX/WVvr/5ec4/9ojcD/YIe+/12HwP98odP/gJa0/zggDP+IcVb/Ykcq/y4ZAP8NBAD/Q2J7/0Nb2v8TDuf/NTXo/2ht5P88Wrr/aIvE/12Fwv9pkcb/nLjb/6C/4v9WTEz/qI92/7mnlv8lBgD/ISEi/1+Lvf9ejsP/NlnA/yZFxP8eRrX/KU2n/1x+zP9SeMv/ZIjP/5663f+lw+T/n73a/3p7ff9hW1v/SFdp/2mXwf9lm9L/QXq9/yhjt/8mW7j/H0ml/yZFk/9QdsX/UXnK/1qFzv98ptn/m73i/6jN6/+Yx+z/eLHe/3Sx4/9lo9f/N260/zRgof87Y6P/G0me/yRZpf8qTZb/QHS3/ztyuv9Fca7/T2yV/1B1pv9Ofrv/Xp3S/2Ci1f9ZndL/OnO4/26Prv86PDj/aYV4/4mjt/8YQZH/M1+n/zhvtf82Yqj/ka+y/xkeEv9ujH//qsfY/0Nwr/9KlND/Q4nI/3iYv//a8uf/U3Vm/4Otnf/2//L/Z3mT/ydVo/8qWaT/gZ68/9Xu5f+Hq57/tNLK/+X48//A1Nz/QHa2/0eHw//C1t3/6vn4/+v//P/u/vz/9////76/rP8pUJf/K1CY/6/Dx//h8/L/6vr7/+n3+P/j8vP/8P75/4akyf9Cern/3u7t/+36+f/2////9v////r////Qxp//LVCU/ydMlP+4xL//6/v9/+r4+P/v+vr/7vr7//j///+putT/IFin/8zf6P/3////8/////b//////NH/iYt+/yFJm/8gR5n/h5KV//7/7f/w////9P////T///////7/dYel/xharv9bgLX/6ezh//3/6//177z/o55+/z9cnP8vV6D/LVmk/x9AiP+2tJH/+/bI////5////+H/wcCn/z5fm/8ydb//JmSx/zlVi/9ndYf/UmWG/1hurP9DYaX/L16n/zZpr/8VPZH/FzqH/1dpgP+BiIP/cXuE/2F1pP9Ofr//L3G6/zR0u/8mYa//EkCY/xxFmP8qU57/HlWj/0Jur/9Gc7T/OWqv/ytQnP8dQJP/GT6S/zxcpv9Sfbv/PXe7/z93uv8+drj/PnW4/z51uP86b7T/NWqw/0h1tP9sir3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","gelbooru.com":"data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAc5JREFUeNqMkr1rU2EUxn/nzXuv5VYEFULBQkuGCBEHl1pIdVBEHSoqrllUnMRCB1f9EwQXhTooOkpdrHQoClWkWFEoRSSK+EXQasEgaW5y73scEpNe84FnOu/HeZ7nnPMIU7UTwCRgiYCIzhDAA0zi1gEPLXAGKFAFMwC5YSE3JGwPoB5DqaysluDTmkId2JIA8S1VYvFh+qjh4kHD6E7pEKDAi4/KzaeOe8uO0DVVQWQLecOFvGEiI/QKAcZGhLGRFKvflaX3CrbxZu8UUh0FC2+Vx0Vlo67khoTJvUJ6a3cCu/kQRnB6JmLulf6VCArBIFw+kuLKcYOX6gMw/SBm7qXCYPJTJYarszGLHxylsia20QJYr8DMcwdBc0HxP1o9WHit4CdpW+mbb0qtAviQ3gb7hrv3vPxZ+fm7tYU2wK+NZlKHiYxw/6ztCnDsRsT8ijaMtdlbOwL+K2LXY4jZtOAHUAuhuAbXFx0awZ5dwuFsb48kFJwbNxDCyhfl0t2Yqdsxt5ZcX0WmPQ64dirFyf3S8HzTgqZ/R2LDiNi3DRTfwux5y7NDypOi8nVdObBb+gE4++6HPsqmBc+0yfIZYXxUKFdhwOtdDMz/GQCfgpOVo7ktkQAAAABJRU5ErkJggg==","github.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAgRJREFUOI2Fk79rU1EUx7/nPrEOpVNy33v3vSQkTUAJCO0bMhfqoCBIwMElf0W7WHBwzlwQXJSiCJ21g5A5WiyIwaGt1T4IJTVTW2mF3K9D8pr01dIz3R/n873nfDlXkIparXY33t9/RmvnBoNBEQAcx9kTpbZy+fzzdrv9dTJfkkWLRCOXe//37Ox+WnQybk5NfXgdxw8WRMYCLRJPPO8HrC1CBCT/C4sIQAJK7b09OCgtiEABQCMMN2BtUTlOB0otQyQeEX2I9EfrGEotK8fpwNpiIww3AABRFM17WtPNZhkasw4A2+SFKkhie7TPGbPuZrP0tGYURfM3unG8kiQrEQcAKnJuzbj08UYlot04XhFX658gCwCw1euJScHp6JKY05ojsV+K1hYAgMDpdTAAGBEQOAUAWltQQxYQ4Na1dNLFOJdKOc5u0melVKpfB1dKpXriiXKcXaXITWBoytHx8ZtqtTp7FVytVmePTk5enZtObqrFen1JRDA9M/MU5Mf+4eFO6Pvfy+XywwS8Uyg8Cjzv2+9eb4fWTifni/X60tAYY9Z8rdlsNjNBELwzvv8pPQfJrCQzYIxZu1Ce8bwvrtZ/blcq9x43GsHk3aSApzWN73++1F+LRC4IXnpa03ddTlbQJeFrTVdr5o150brirwxf63SgM5nV9LnOZFbZ6VzK/wdC3dHy5PPGZwAAAABJRU5ErkJggg==","greasyfork.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAP8A/wD/oL2nkwAAAVlJREFUOI2Vkz/KwkAUxCckaApDEgwKWgTZyjsEPJSQA3iFFHaW3sAbeABbIaD4p1ARiZEUFjtf8cVFiYk68Jpl97fzZt8CRQkAYwBLAPe8lvmaeLP/RZMgCGiaJgGU1aTs8AIA+/0+t9stDcOogiwKNwNgHMes1+sUQnwDUU7EYDCg7/tst9tcrVYKstlsPkEEAIxd1+XxeGSn02Gr1eJ6vaau6xyNRtzv96zVamWAMfKEaVmWgjSbTe52Oz40m83KAEsDQA8A0jSFEAJxHCOKInS7XRXQ6XQqC74H/L+zolqWxSRJKKVUDg6HAxuNxjsHd9XCc9m2zfl8zul0yvP5TCklL5cLXdcttIA8iNKkHcfh7XajlJLX65WO41DTtJcQRRUAAD3PY5ZlCvLUjhrtSRVA0zR6nsc0TUmSw+Hw7UgvPjmxbZthGFLX9cIof+UEHz7TQz995z+tLSOuavpeRQAAAABJRU5ErkJggg==","gusouk.com":"data:image/png;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAAASCwAAEgsAAAAAAAAAAAAA9IVCSvSFQuf0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULk9IVCSvSFQub0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQuf0hUL/9IVC//SFQv/0hUL/9Y1O//rIq//+7+f//eXX//vUvf/7z7X/96Fu//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vYwv/97OH/9ZRZ//SFQv/0hUL/9IhG//zbx//3om7/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/97uX/+buW//SFQv/0hUL/9IVC//SFQv/5upT/+9O6//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+b6b//zezP/0iEf/9IVC//SFQv/1klf//ezh//vPtP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/3qXr/+siq//m8lv/5wqD//vTu//3t4//1klb/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0h0b//vbx//zi0//1j1H/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/2nmn/+bmS/////v/4sIX/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/5uJH///v5//eoef/1jU//+82y//afav/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL//vXw//vOs//0hUL/9IVC//ekcf/96+D/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//728v/4sIX/9IVC//SFQv/4s4n///v4//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/6yKn/+byX//SFQv/0hkT//eTV//vWv//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IZE//m6lP/5u5b//OHQ///+/f/6y6//96d3//SFQv/0hUL/9IVC//SFQv/0hULm9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULm9IVCSfSFQub0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULm9IVCSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAASCwAAEgsAAAAAAAAAAAAA9IVCAPSFQif0hUKt9IVC8vSFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQvL0hUKt9IVCJ/SFQgD0hUIo9IVC7/SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULv9IVCKPSFQq30hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUKt9IVC8fSFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQvP0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9YtL//i2jv/828f//vLr///7+P///Pv//vTu//3n2v/6zbH/96Nw//SFQ//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//ekcv/+8+z////////////+9fD/+9K5//m9mf/4to7/+buV//vSuf/++PT//OPT//aYYP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/2l13///r3/////////fv/+b2Z//SIRv/0hUL/9IVC//SFQv/0hUL/9IVC//WNT//84M///vXv//aZYf/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vPtP////////////i0i//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//WQUv///Pr//OPU//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL//eTV///////+9O7/9IVD//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//3m2P//////9ppi//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/718H///////3s4f/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL//vDn///////4soj/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//erff////////38//WTWP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//iziv////////////iwhf/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//rMsP///////eXW//WSVv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/4sYb///z7/////////Pv/9ZFV//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//ixhv/+8Of//vn1//rMsP/4rH//9plh//WQUv/1j1L/+s2x//////////////////m9mf/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SGQ//2nmn/+buW//vNsv/82sb//e3j/////////////////////v/5wZ//9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/83Mj////////////++fb/+K+C//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9ZRZ/////////////vTt//aaYv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/1lFr////////////6xqf/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//ehbf/70bj//end//3o2////v3///////3l1//0iEb/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/5wqD////////////96t7/96Z2//WOUP/2nWf//NvH//zcyP/1i0z/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/96l6/////////////vLr//WPUf/0hUL/9IVC//SFQv/0h0b//end//3k1f/0iUn/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/8387////////////4sYf/9IVC//SFQv/0hUL/9IVC//SFQv/6w6L///////nBn//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC///69////////vj1//SIR//0hUL/9IVC//SFQv/0hUL/9IVC//m+mv///////e3j//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL///r3///////8387/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+syw///////++fb/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/95NX///////vUvP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/97OH///////7y6//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//i2jv///////N/O//SFQv/0hUL/9IVC//SFQv/0hUL/96Nx////////////+s2x//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IdF//zh0P//+/j/9ZJW//SFQv/0hUL/9IVC//SKSv/96t7///////738v/1k1f/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9YxN//vUvf/96+D/96Z0//WNT//3om///ebY/////////Pv/+LKI//WVW//0h0X/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//agbP/7zbL//enc//749P////////////////////////////3r4P/3p3f/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULx9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC8/SFQq30hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUKt9IVCJ/SFQu/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC7/SFQif0hUIA9IVCJfSFQq30hULx9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC8fSFQq30hUIl9IVCAIAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAB","huaban.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAU9JREFUOI19001rFEEUheGne3qmFYOJGgTBhZqMGl26E7fi//WnCIK6URCEKEEXJiYmM+2iTpFmnMmF6o/bp95z+1ZVM9h9jRtoMc2A3zjED9zFXu4zDNGfdEn0mIwAHe7gDR7iAl8Cm8SgrZcBy9FYJPcMj2Owhed4ENgi2qH1fywjfoTziBdoAnwSAzhfBVzgHvYzeRxDQHsZA07qL1TBJC7NKL8OMlcaetjieDRhB7cj2hSD0uh9fGzxS2nmMoDpBvdVSI/jFt9cdr5PNVdFE7PvOGhxpGyYqbJkV0UbwGdlT8xrE98rK7BuWZvkO2VlPuBrvm13eTjCO7yKsLrV3pziZyo9w7UYb1UxfMJb5QxU50lc/wbUj35zQNcMdldLnuMltvNeezNzeU6mqeJ0HQBu4QWeBjRLNd0IcB1/NgFq7Cjb9n6gN0dV9Dj7B8VNVpBJb3UkAAAAAElFTkSuQmCC","idown.org":"data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTU/8jIyP/IyMj/yMjI/8jIyP/IyMj/yMjI/8jIyP/IyMj/yMjI/8jIyP/IyMj/yMjI/9TU1P8AAAAA1NTU/wUFBf8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8GBgb/1NTU/8jIyP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/9PT0//IyMj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/T09P/yMjI/wAAAP8AAAD/AAAA//Pz8///////////////////////////////////////AAAA/wAAAP8AAAD/09PT/8jIyP8AAAD/AAAA/zo6Ov/u7u7/7u7u/+7u7v/u7u7/+/v7//7+/v///////////wAAAP8AAAD/AAAA/9PT0//IyMj/AAAA/wAAAP8BAQH/AgIC/wICAv8CAgL/UVFR//j4+P/+/v7//v7+//7+/v8AAAD/AAAA/wAAAP/T09P/yMjI/wAAAP8AAAD/AAAA/wAAAP8AAAD/T09P//b29v///////v7+//39/f//////AAAA/wAAAP8AAAD/09PT/8jIyP8AAAD/AAAA/wAAAP8AAAD/UVFR//f39////////v7+/42Njf/V1dX//////wAAAP8AAAD/AAAA/9PT0//IyMj/AAAA/wAAAP8AAAD/UFBQ//f39//+/v7//v7+/42Njf8BAQH/1NTU//7+/v8AAAD/AAAA/wAAAP/T09P/yMjI/wAAAP8AAAD/AAAA//b29v///////////4+Pj/8BAQH/AAAA/9TU1P//////AAAA/wAAAP8AAAD/09PT/8jIyP8AAAD/AAAA/0NDQ////////v7+/46Ojv8BAQH/AAAA/wAAAP/U1NT//f39/wAAAP8AAAD/AAAA/9PT0//IyMj/AAAA/wAAAP8AAAD/bm5u/wEBAf8AAAD/AAAA/wAAAP8AAAD/WFhY/wAAAP8AAAD/AAAA/wAAAP/T09P/yMjI/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/09PT/9TU1P8ICAj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/CgoK/9TU1P8AAAAA1NTU/8jIyP/IyMj/yMjI/8jIyP/IyMj/yMjI/8jIyP/IyMj/yMjI/8jIyP/IyMj/yMjI/9TU1P8AAAAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAA==","image.baidu.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAl5JREFUOI2dU89LlFEUPXfmm09HyaCsTDOLNrqLtNwVSC4K2tRKBAtqU5hhUS2KChSKqH+gaBHVRqSCIKpdi6ggXIQ/spmx0tEcHacxa3Le9947LcZvZtRWXXhwz73vXc47915BzzABAJYALWABGJPDxgLW5rD2/SJsNBwA4OUG/I9J+0sEYLkqEY0oXu9JcmgwSwCIRRW/xLzVF41GANYuiylF3LuTlocPfuLWjRTGogonjk6j61QCY1G1ooBdziD9w8B1BdYAa8sD4jqQ1JxB5rcRz7OSmjPLC2gDBybHYPybh54rSZaGA2hpDUs6ZbCzsQRNzWEcO742/2Zi3EPt1lCeAXBxgCTZ9yjN7VURu7f5qyXJWCTLxT+WvsUiWbYdibPtcNx+n/JIkjjQR8fXYNsOFzVbHKncEMTzZ79Q3+Ciu3MapWFB55l1eNy/gLGYwtyMkckJzarNjsBaOLC5f+1qCqP7wnrOJDTqG1w52znDTyNZhFyR5Kzltd5Kefc2g+rqECs3Bos00DkGwSBw8FC5TMU1zp1OYHREwVMUTxFvXmfk0vlZ3ry9SSbjGnV1ISl0QReUjUU8dJ1MYHhQQSlKseAjQ1npvZpETa0j8DPGIOB3gQSe9C1w6KOi94+ZmZ8nP7xfRHxcF5LWwoEpMAi5gmyWECEEQmsJCCTkCAkikyGmJnXRILGggQjQ1lEh8QkPn0cVKtYEZN/+MgDA0/4FmU9bNO4uQUtrmRQzEHS8Iu+3+iECGACwYmbz5gJo9IHsuQtB+wtC68KaGru0qku+NYBmbpXzh/n1/wuHC2lVjJEkmAAAAABJRU5ErkJggg==","image.baidu.com":"data:image/png;base64,AAABAAIAEBAAAAEACABoBQAAJgAAABAQAAABACAAaAQAAI4FAAAoAAAAEAAAACAAAAABAAgAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAL8UFQCYMwAAmjQAAJ06AAChPQAAuSQaANkOGQDBFBQAwBIeAMAfHwDaEBoA2hMdAMARIwDEHiwA2xYgANoYIgDbGiQA2x4nANwcJgDbHigAwyUlAMMsKwDcJSoA3SMtAN0kLQDeKzQA3i82AMUzMADBOTYAxDA8AN4wNwDfMDkA3zU9AKNBAAClQwAApkQAAKhHAACqSQAArU0AAK9QAACyVAAAtFcAALhaAAC5XgAAvWEAAL9lAADCaAAAxGsAAMZuAADIcgAAy3QAAM12AADPeQAA0HoAANJ+AADEOkMA4DpBAOE+RgDCRUYAzUpHAM1LSwDQQlEA0E9VAMJTUwDNU1IAx19aANFXVADQWFgA4UFHAOJESwDiRk0A4klQAOJNUgDjS1QA41FYAORTWQDkV10A5VpgAOVeZQDUbWsA2HJvAMx2dgDFf38A13F0ANR3fQDbfHoA5WBnAOZjaQDnZmwA52tvAOdscQDpcXYA6XR4ANOAAADVggAA336BAOp8ggDUgoAA3YaEAN2IhwDqgYYA7IeLAOuJjQDtj5MA7ZKWAOGWmADmo6AA56ilAOelqwDlqaoA6q6rAPCipgDwpaoA8amsAPGsrgDus64A6K2zAOe2tgDqubQA87K1APS9wADrxsQA7MvIAPbIygDxzs4A/8zMAPXRxAD11MkA+NbLAPfS0wDz1NAA+NHTAPjS1AD41NUA9NjWAPbf3AD42doA+dvdAPnd3gD+6dQA/u3bAPrg4QD75ucA/u/hAPvo6QD87+gA/O7vAP7y5gD68+wA/ff3AP748gD++vYA/vf4AP75+QD//v4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////ACEhISEhISEhISEhISEhISEh//////////////////8hIf//jlk6SmhoORpXkf//ISH//2UHCwsHBwsLEXD//yEh//9hDw8RDxERDxh5//8hIf//hUYREQ8RDxlOi///ISH//5aLShERDxFLi3n//yEh//9yaYtGFBhNi0pKi/8hIf98IUp4i1lai2YaEXz/ISH/cREhhf+W//+LTU2O/yEh/45OWf9nhf9ycnyO//8hIf//k/9cIU58IUV8////ISH/////XBhOiyFHi////yEh/////4llgv+Li/////8hIf//////////////////ISEhISEhISEhISEhISEhISEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAABAAAAAgAAAAAQAgAAAAAABABAAAAAAAAAAAAAAAAAAAAAAAALhbAP+0VwD/slQA/69RAP+tTgD/q0oA/6hHAP+mRAD/o0IA/6I+AP+gPAD/njoA/5w4AP+bNgD/mjQA/5gzAP+6XgD////////////////+////zP///8b////G////xv///8b////G////xv///8z///////////////+aNQD/vWEA////////////+uDh/+dlbP/hPkb/40tU/+2Pk//tj5P/4DtD/94rNP/lYGf/++jp////////////mzYA/79lAP////////7+/+uBh/7aDxn+2hAa/9oQG/7ZDhn+2g8Z/9oTHv7aEx3+2xkj//Cipv7//////////504AP/CaAD////////+/v/qfIL+2xYg/tsXIf/bGCL/2xgi/9sYIv/bGCL/2xYg/t0jLf/0vcD+//////////+eOwD/xGsA////////////+NLU/+JES//cHCb/2xgi/9sYIv/bGCL/2xgi/90lL//lWmH/+dzd////////////oD0A/8dvAP////////////339//5293/4khQ/9seKP7bGCL/2xgi/9sYIv/jUFj++dvd//S+wf7//v///////6NAAP/JcwD////////8/P/xqaz+7ZKW/vnb3f/iR0/+2x4n/t0kLP/kV13++dvd/+JOU//iSlH++d7f/v////+lQwD/zHUA///////2yMr/3zQ8/+NMUv/zsrX/+dvd/+Zjaf/nbHH/+dvd/+yHi//eMDf/2xok//bIy/7/////qEcA/853AP//////8KWq/9oYIf7fNz7+//////nb3f/+9/j////////////5293/5FNZ/+NSWf775uf//////6pJAP/QegD///////rg4f/lXmT+52ds/vGsrv/mX2b/7ZKW///////tkpb/7ZKW//bIy//64eL///////////+tTQD/0n0A/////////////O7v///////pcXb/3zA5/+ZfZv/2yMv/3i82/+FBR//2yMv/////////////////r1AA/9N/AP/////////////////++fn/6XR4/9wlKv7lW2D++dvd/+A6QP7iRkz++dvd/////////////////7JUAP/VgQD///////////////////////jZ2v7qgYX+99LT/v/////42tv++dvd/v////////////////////+0VwD/1oMA////////////////////////////////////////////////////////////////////////////uFoA/9aDAP/WgwD/1YEA/9OAAP/TfgD/0HsA/895AP/NdgD/y3QA/8hxAP/GbQD/xGsA/8JoAP+/ZQD/vWEA/7leAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","image.so.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAepJREFUOI2dks1LVGEUxn/nvffONaEJnRKTsSCipFWMlS2GmaJNGLRrIcJUuOkfqFzULlq4GNpoyzZKizahJEg0MKvCIQgMXTRQRuCMZAghjs3ce1pc7zQfQuiBB14O53nOx/PKiMbS3g4Tvwq1S+wjui/ai5bLA7mxfGRt56f27occhntUSnZl/WBkgMq69tr4zcljbpx7p5+S6EoBsLT5nsniOOXK6p4iRj0I0e8O8PxCnq+bK4zlU4zlUyxvfGRyMEe/O0BjbQi5uhBVAFV4cv4lnzcWmf6SRUzQQX3InLnPue5BHn0aQaRlAhTQQC0RSzP/fQbLBsuRADbMfntBIpZGvaC2Ebbu3kA9xVMPABEJCsK3QNX/g3qKtoxgGtUK5RzDJ0bbutw8eZdCOdeWR8EOO4EwtfSYqSsLWGLxbu0VANeO3+L22Yds17b+EZtc0OCACJQqq9x5m6Tv0CmyQ3Nkh+Zw6MAxEaKRLt4M/8D3g/oQkp6N1jXVB9/TwKIwq+DVlA+jvwHYrm1xfb6v7kbTDUTAWIKxg+uHbtgR4fL0YXz1mFl51uSGpF5HW7ZqD1Xwq4pXVcQItiv1f2IiMSn9T0AEjCPYHSYg744fiUnJ9CSdTGfcFPeyqGk9wBjq5M64KfYkncxfsy7Xo0OJblsAAAAASUVORK5CYII=","image.youdao.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAQBJREFUOI3NkrFqwzAQhn/JgSylOBgypdAgKGhzHiEvkTV5gz5KyBO0a+nUNUuTJ6gzBGUReE8MXjNY6mLBb4V4bW/67k736+444K9NsOOVXlWueQOAVMo6gZgJa0qv9KJyzUeID+xpFGpkR82a98C1cymltnfiXQGv9CRwJpNSWFO27gPH7woAGBPviJ+IewWGxAfiCfGeCwaRwCPx0itdALhGHRR9AucAlWtyAN+4tY5APMIxk8mCA7y0TCYFLfa2A2HNFcAn2vvwSqcAfujJJm4nPqQ1gK/WzQG8Vq55pt9nvQKX6YuPH4RiAHNhTR3nOiOkUtZ8aW3hhi/0/9kvWWFQQDml5pQAAAAASUVORK5CYII=","img.jpg4.info":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAIAAACHs/j/AAAAB3RJTUUH3QUZBA8bjXFPywAAA+xJREFUeJyVlFtsVFUYhde/9z5z2jPDtNNSCx1LLySKESu3YBQjYqIGI9EoYGpMMCFq0ERMAKMmEk3kwQDqq4lGTUgEQ0KIcrEgWlTAsVasaIEibaVDa+lcmDkz58ycffbvA5fok3E9rof1sPKtRdpogBlSEgEIjSYi/B8xsxIKgDZagA1DCM5fPvdeLjMqSDAbZv7vFDAYho0SKu2mxwpjgoQwJgRgvD92fLT1x74BAhkDw8zMxrD5RzJf1VWXQIaNIpUJshu+2LC3Z68goUgoQFB00YoXBm3pgUxECQYbhhIC4CBkImJmEBFJAFe6MEYLEiVdOj58LMbRSrHCYEUkQn8MpZ8bTU7UPeD6yBYqiXgkastfRrzpdTKZsLXRJBSxDsaGRa2jyy5bttXUrKTqHeq9USYTdkIZBYYAa5Zx33NP7NuUSvVXA2zbnV656eCer85s/yQ198mjn345qIQMslOjOz4YHzp9/qU1x9avHc/lFcnR/GhmIjO35bZitWjDJiLBDKHi8dbVMnar65Ybp8n25shfwyfnt5sPX+5avqTplXcPVwI/vevjkxNTjcuWtzy/KX/m97znkxCpidSsplbt6Ihj+1E/7+cVERk24DLBCAFm9iu6tdmZObNZ1Ta89nTsiR8OZ4t5nTqqo9NrAXXnssuJG3Ljk5P+5L4T+8q58s6fdp2VZ/sH+9sb2hQAIrrWL4go0KExbFuCAK9cnj87FotNU4895a5fd7G3x9ZB/OFVs+d1JSL1W+7fUsgVIlFr89ebl7TfvWzufQrMADP9iyhSdjprsqXit33nn1m1wDKIrli9dP5dlZ3vn/l8z7ydPW0zZjBzS7IlmUwCCHq1rtHxhrhgUgYCQKBhWAAIDTJF3n3o9LG+Uw8urFs0b46qicG93HhhSCbbq2MXLz3X7RWLAAc60KH2Qm9xYrHne1P5KSVMVqkoUJnIoPPmVmYueZWO6ZUXV97EymFIIS1RKhzf/pbpnNO25J5b9n9/Yc2jR95+86Et7whTZbAt7I2PbPQ9n4lVcWjbb6dSkYaljZ3dszs7iChX1BC1qjYemAiFVSGk+82BkSOH7n19a1IAQOTVNw4c7Kkw20JcWZtmbdUoEKlI2wYz+V1VOncsWByf5vgBO5QvlMvnRqY6Zs0IATZGzbm9zi38ufFZ5/FuHVQm0umFa9dJXWUpBMmBXwfcouu6bjQapZBZAAZg1swAKAy8qUzOrnHq6+tAxMZIaV2aHD+1+zOLw/qOzoauBQ1NTRHLIlCpXBoZHnFd13GcarVKQVhlY0jIa6AA18+KQ2YmIhNqS9kAKgAAi0MAhvnKlUmS16H4G/RUIZBbMjsmAAAAAElFTkSuQmCC","ishare.iask.sina.com.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQ4EaVTzU8TURCf2tJuS7tQtlRb6UKBIkQwkRRSEzkQgyEc6lkOKgcOph78Y+CgjXjDs2i44FXY9AMTlQRUELZapVlouy3d7kKtb0Zr0MSLTvL2zb75eL838xtTvV6H/xELBptMJojeXLCXyobnyog4YhzXYvmCFi6qVSfaeRdXdrfaU1areV5KykmX06rcvzumjY/1ggkR3Jh+bNf1mr8v1D5bLuvR3qDgFbvbBJYIrE1mCIoCrKxsHuzK+Rzvsi29+6DEbTZz9unijEYI8ObBgXOzlcrx9OAlXyDYKUCzwwrDQx1wVDGg089Dt+gR3mxmhcUnaWeoxwMbm/vzDFzmDEKMMNhquRqduT1KwXiGt0vre6iSeAUHNDE0d26NBtAXY9BACQyjFusKuL2Ry+IPb/Y9ZglwuVscdHaknUChqLF/O4jn3V5dP4mhgRJgwSYm+gV0Oi3XrvYB30yvhGa7BS70eGFHPoTJyQHhMK+F0ZesRVVznvXw5Ixv7/C10moEo6OZXbWvlFAF9FVZDOqEABUMRIkMd8GnLwVWg9/RkJF9sA4oDfYQAuzzjqzwvnaRUFxn/X2ZlmGLXAE7AL52B4xHgqAUqrC1nSNuoJkQtLkdqReszz/9aRvq90NOKdOS1nch8TpL555WDp49f3uAMXhACRjD5j4ykuCtf5PP7Fm1b0DIsl/VHGezzP1KwOiZQobFF9YyjSRYQETRENSlVzI8iK9mWlzckpSSCQHVALmN9Az1euDho9Xo8vKGd2rqooA8yBcrwHgCqYR0kMkWci08t/R+W4ljDCanWTg9TJGwGNaNk3vYZ7VUdeKsYJGFNkfSzjXNrSX20s4/h6kB81/271ghG17l+rPTAAAAAElFTkSuQmCC","kb.mozillazine.org":"data:image/x-icon;base64,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","kickass.to":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAApFJREFUOI11kl9IU2EYxn/n7GzTLXNuNsPMUstS0grCSo3KiKKLIoMuukilughKgxICI8uruomwUAojoSi9saCSCpLQoosoCgJJCofK/Lc2zbYz/c4566JOOLUHPvie53l53u/jfeEvYiO301obKyenh5qrTe3p/VMP7zcdU2drL9prWu9er+w3uWRe7t2seuNNXVwCMDw6GbZaLbZU9yKr6Y8Hp2bsVquyOClBBlifn3F+aWHtVRkg5m9yJ9gtxbquoesa3lSnMyU5wWpyXddwJyfanA5FNvmTl5+qARQA39D4CbvNImmaxmxsKKlgec5WJgI+ejqvxHmeFEd6zH/DrQC86u7d40lxAiDLCilLstD1GdIyCgHw+z6gzwmXAGLGPgtAWemqWqfD6jUMg0Snh13ll1m5ZjsWxQbAkvR81m7cz0RwiNCPAQzDwDAMQpPhXhnA0DRZEwJNCKLqL96/bmHM3/uvm+9rD8HxfoJj/Zh1mhCoqqooALIlNiI0kQcgfo7T+/kFnqW5eNPzCE8F6H7eyELYtnnFFxlgTba7e3ayJgSJDtef8Q33MdfThCASiZKgxDplgL3bs+5EIlGEEP+OYnMAMB2NIITA5VkR548GpkakzPqgDCBlNgyOBab6ZncIBQYAyC0oo+JMG7vL6+JeULDafQtANv/TcG7LkYgajQlNIDTBu65WxIyKJMmo4Qmetddjev6xydChk48uxa0ywLW60hbD4JjJXZ4MXJ5lDH7/iK4LAMKqMC6eLtop5dzonhcAUF+zqcNusxyUpXkWvyJCrz5acNhb1NoRt1Bz8bbtQNXjLl+zK8lmN7VAKPrt2oXiMin71uCCM10ID67vOFt7Yl1XrO944f9qfgPzlVRSGGdqnwAAAABJRU5ErkJggg==","konachan.com":"data:image/png;base64,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","lib.cqvip.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAclJREFUOI2dk71rU1EYxn/n9ralH7EfptQIGjOYjJYiLqVbcTKrkzoIInUQHMRNtBT/gkIoldAtIsXWStNAJ4VQp+iapZrWqIkXWts0Nwm55zjccJNDex36TOfwPuf3nPd8CICjxJziDArMPhfmUWJOGedG+HH95glDpH7A3xcPMIaDWM8SAFy9OI5TKuKUiySngsoEsDdTjE7HCV4Ka4DD+UcA9N9+CEA0GgXAHByitvkGAANAVSv0f85oi5vf8jS+ZOm6cJndyAShUMirOb93qX380AYA1NIprL2CZ7LfL7vpdx67/QYC7drKa5BSB8jDfQa+fnLH1i/q2Qxm7BqF82E9/ed3L10DANhry1h7BezMW5CSgbtPGO3r1dPfJb10ABNA1iUgkKUyzN7iuFXcf3oPgLJnF4B+4yaAU5Uo5Za7xkP0La1ympyFV9hb6xrIBVQcdyoEzZ0ijZkbqBNPS7UWdqinBWhWVYdJ0X0lwlBqRfPW5l9yvLHesgmE6AC4Z9BWPb/Dn8nJU9toB7ky/Cw9sRhjuRxjuRyD8bgvyhfQyOcxtrfpLZWopNO+APM/++RgcZHucBgcx9cjAJJTwTN95/tZS/wDqtSnKoXyohQAAAAASUVORK5CYII=","list.tmall.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAGZJREFUOI3tk7sNgDAMRN9FQazFAkybBVgroggVyKaIwGkouMqydR/LsgAKNAJYQSrQJmB+Sa7ADiQCZMvJtrm0Z5ts0lWngLmDS2CVbaJ732I4wS/wBYHcG/bu7xLUgPPJEYy98wFzzBFa8D+TTAAAAABJRU5ErkJggg==","movie.douban.com":"data:image/png;base64,AAABAAIAEBAAAAEACABoBQAAJgAAACAgAAABACAAqBAAAI4FAAAoAAAAEAAAACAAAAABAAgAAAAAAAABAAATCwAAEwsAAAABAAAAAQAAEXcAABp0DwAadhAAL4QiADqILgA8jC8AQ402AEWROABHkDsAU5lHAFOaSABJl0kAS5lJAFCaSQBQm0kAVJ5OAGKjVwByqWgAhrZ+AJO/iwCaw5MArMymANfo0QDe7NwA4O3eAOfy4wD3+vUA/P38AP3+/AD+/v4A///+AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAcAEBUVFRUVFRUVFRUVFRAAABQfHx8fHx8fHx8fHx8UAAAAAAATHxEBAREfEwAAAgIAAAICGBsBAQEBHxgAAgICAAACCR8cBAYGBB8aCQIAAgAACB8fHx8fHx8fHx8IAAIAAAgfFwUFBQUFBRcfCAACAAAIHxkBAQEBAQEWHwgAAgAACB8XDwsODQwLFx8IAAIAAAgfHR8eHh4eHh8fCAAAAAACAgICAgICAgICAgICAAADEhISEhISEhISEhISAwAACh8fHx8fHx8fHx8fHwoAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAEAAAEwsAABMLAAAAAAAAAAAAABF3AEoRdwDnEXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AOQRdwBKEXcA5hF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AOcRdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP+RwIn////////////4+/j/GnwK/xF3AP8RdwD/EXcA/xF3AP8afAr/+Pv4////////////kcCJ/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/9Xn0v///////////77auf8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP++2rn////////////V59L/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8rhhz/////////////////erNw/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/3qzcP////////////////8rhhz/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/26sZP////////////////81jCf/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/NYwn/////////////////26sZP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/vdm4////////////5PDi/y+IIP8viCD/L4gg/y+IIP8viCD/L4gg/y+IIP8viCD/5PDi////////////vdm4/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/0+bQ/////////////////////////////////////////////////////////////////////////////////////////////////9Pm0P8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP/T5tD/////////////////////////////////////////////////////////////////////////////////////////////////0+bQ/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/9Pm0P///////////9vq2P+Iu4D/iLuA/4i7gP+Iu4D/iLuA/4i7gP+Iu4D/iLuA/4i7gP+Iu4D/iLuA/4i7gP/b6tj////////////T5tD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/0+bQ////////////tdWw/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/7XVsP///////////9Pm0P8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP/T5tD///////////+11bD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/tdWw////////////0+bQ/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/9Pm0P///////////7XVsP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP+11bD////////////T5tD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/0+bQ////////////tdWw/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/7XVsP///////////9Pm0P8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP/T5tD////////////b6tj/iLuA/4i7gP+Iu4D/iLuA/4i7gP+Iu4D/iLuA/4i7gP+Iu4D/iLuA/4i7gP+Iu4D/2+rY////////////0+bQ/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/9Pm0P/////////////////////////////////////////////////////////////////////////////////////////////////T5tD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/0+bQ/////////////////////////////////////////////////////////////////////////////////////////////////9Pm0P8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/+Lu4P//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4u7g/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/4u7g///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////i7uD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP/i7uD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Lu4P8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AOYRdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwDmEXcASRF3AOYRdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA/xF3AP8RdwD/EXcA5hF3AEkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","mozilla.com.cn":"data:image/png;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAMDcwADwyqYABAQEAAgICAAMDAwAERERABYWFgAcHBwAIiIiACkpKQBVVVUATU1NAEJCQgA5OTkAgHz/AFBQ/wCTANYA/+zMAMbW7wDW5+cAkKmtAAAAMwAAAGYAAACZAAAAzAAAMwAAADMzAAAzZgAAM5kAADPMAAAz/wAAZgAAAGYzAABmZgAAZpkAAGbMAABm/wAAmQAAAJkzAACZZgAAmZkAAJnMAACZ/wAAzAAAAMwzAADMZgAAzJkAAMzMAADM/wAA/2YAAP+ZAAD/zAAzAAAAMwAzADMAZgAzAJkAMwDMADMA/wAzMwAAMzMzADMzZgAzM5kAMzPMADMz/wAzZgAAM2YzADNmZgAzZpkAM2bMADNm/wAzmQAAM5kzADOZZgAzmZkAM5nMADOZ/wAzzAAAM8wzADPMZgAzzJkAM8zMADPM/wAz/zMAM/9mADP/mQAz/8wAM///AGYAAABmADMAZgBmAGYAmQBmAMwAZgD/AGYzAABmMzMAZjNmAGYzmQBmM8wAZjP/AGZmAABmZjMAZmZmAGZmmQBmZswAZpkAAGaZMwBmmWYAZpmZAGaZzABmmf8AZswAAGbMMwBmzJkAZszMAGbM/wBm/wAAZv8zAGb/mQBm/8wAzAD/AP8AzACZmQAAmTOZAJkAmQCZAMwAmQAAAJkzMwCZAGYAmTPMAJkA/wCZZgAAmWYzAJkzZgCZZpkAmWbMAJkz/wCZmTMAmZlmAJmZmQCZmcwAmZn/AJnMAACZzDMAZsxmAJnMmQCZzMwAmcz/AJn/AACZ/zMAmcxmAJn/mQCZ/8wAmf//AMwAAACZADMAzABmAMwAmQDMAMwAmTMAAMwzMwDMM2YAzDOZAMwzzADMM/8AzGYAAMxmMwCZZmYAzGaZAMxmzACZZv8AzJkAAMyZMwDMmWYAzJmZAMyZzADMmf8AzMwAAMzMMwDMzGYAzMyZAMzMzADMzP8AzP8AAMz/MwCZ/2YAzP+ZAMz/zADM//8AzAAzAP8AZgD/AJkAzDMAAP8zMwD/M2YA/zOZAP8zzAD/M/8A/2YAAP9mMwDMZmYA/2aZAP9mzADMZv8A/5kAAP+ZMwD/mWYA/5mZAP+ZzAD/mf8A/8wAAP/MMwD/zGYA/8yZAP/MzAD/zP8A//8zAMz/ZgD//5kA///MAGZm/wBm/2YAZv//AP9mZgD/Zv8A//9mACEApQBfX18Ad3d3AIaGhgCWlpYAy8vLALKysgDX19cA3d3dAOPj4wDq6uoA8fHxAPj4+ADw+/8ApKCgAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8ACgoKCgoKCgoKCgoKCgoKCgoKCgoHAQEMbQoKCgoKCgoAAAdDH/kgHRIAAAAAAAAAAADrHfn5ASQQAAAAAAAAAArsBx0B+fkgHesAAAAAAAD/Cgwf+fn5IA4dEus/IvcACgcMAfkg+QEB+SABHushbf8QHR/5HQH5+QEdHetEHx4K7B/5+QH5+fkdDBL5+SBE/wwdJfkf+fn5AR8g+fkfEArsCh/5+QEeJR/5+SAeBwAACgoe+SAlHwFAEhAfAAAAAPcKHh8eASYBHhAMAAAAAAAA9EMdIB8gHh0dBwAAAAAAAAAA7BAdQ+wHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AADwfwAAwH8AAMB/AAAAPwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAgAcAAIAPAADADwAA8D8AAP//AAA=","mp3.sogou.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAqBJREFUOI1tk12IVWUUhp93fXv2OQ2p0e40plGRqZVJYF3a4YyG0o9F4BiJ1kWSBXWRCP1BF12kNyJdxCihiEigRCCJ1QieHCFvRCIwlEDnD2uUE+NQjM3e+1tduEdkaF2un4f3XawlZoU3s5XAm4hehx4AwThOG9ivwc7p2/t12+A8oB+jBfQD3wHDVflBYB3wDpFTwNsa7Fy/BfBmdhdwEuMiYqvancnZygC8N5uLs5fIUmCVBjsTM4AjGAViM0FLMG0k6AlM3cA/uI8QOUcZT1D6VSKHiAQNdjbIm1kL4xDicUwvFKaDRWKJEqPWpRtAnM79Di+ilMeYun9G9N04vxHZZMAWYI/anUlMW4vEEqWBWnf4gZotILX5ad0eq6X2VpraAEF3Vhb7gS2GaFULg0SXlBhKDephNd3pF8xJn2ZOellH//hKx8efI7EPqpUcQ7SsdBo4owAE217r0jchsVgE6yrrYXOZhpOYhnzTAzu8b2FDx8djBRgtnYYJHDAAHfvzL317pS/In0rElwFGcSii35cXfEjpF/zFnlUVwARuJkYQSwF8beMNf77nHn09+ov2XX6XqXxRmMrXJkW86GXk39zvpvCdFeBRE8OG8yPQB0Dp7wND/tL8A/7KgteYnH6Sv/MJpooxny7xPELpMxbW4wzIm9kyxGnECoyXCfbejWCLlOimSIDoeOHUyzhO9PVEH8M5R+SZmUP6HONZxBq1OxO+prGMoBVI9wNzcZ8k+nmcExq4NuW92U4iUac6HyeVnE+JPIzxk7ey1zVw7Vfg/P+dMwBpGKGIZ279QqXCgG2IjxA/A0dxfudm12LgEWphF/fWPyGPr3J9ep2+v3pWs+HezBrABqAX8VCVHgLaGMuZl2bUwnYdHhsG+A9Izgq2ecXgSgAAAABJRU5ErkJggg==","music.163.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAjxJREFUOI2NU79LI0EYfRMzY4yJlwuIokhAtLJPGlvFRv+BeIoQxMLC5jobO8+zOBCthdN0NgoSUmhlCtFWLSz8AaK7m9WYeEk2u/uu8LIaY3EPBmb45r1vvu/NJwgoSPmzBkw+CRHFf+AL+aiA36jVvoNS/tKU4qcrGOSfjQ26pRLtqys+z801xKnUsrCkzH/MrEZHEUilYGWzCK+vw8pk4OvpQUssBqO7G3BdAECENP0NZCkRXltDYGYGNE04Z2cAgNLCApzra4hQyCMDwJMQUd/7zHVyZXMT+cFB0LYBAKHVVQSSSeDfuQH1eh5HRkiSlXSamlI0YjF+hHN7SzMeb+iDJ1DZ2aFbLtPo7aWmFKv7+6Rts3pwQLdYZGFyko5h0DVNGv39noBXghweRi2Xg6vrEOEw1NgYKtvbsPb2IEIhuA8PKExMQHR0oH1x0avAE/B1doK6DgAQgQAgBGDbXiNbBgZgn5ygdnQENT7uCfjrG/f+Hr6+vte9rsM+PUVgagr+eBxwHNRyOS8mo2/GeS+wslnIRMITeU4mAb8fvq4uFFMpOOfngBDwDw3BubxsdsGMx0nHYTWTodbWRk0p6pFIQ8cL09MkydLSUrMLmlJ8WV5+tXJ3l0Ys9kZub2dxfp6sVmlfXFCPRt8ELCnz3sXWVr6srJCuS7dcpn1zw0o6TefujiRZOz72bNaUoiVl/tNhMhMJlre2SJKuadI6POTz7Cy1YPDjMP0Q9XG2gG8FIb42/9VmvB/nv3oNoTLXs7TMAAAAAElFTkSuQmCC","music.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAf9JREFUOI2lk01PU0EYhZ873N60SqgIiUgrAZGPmGgQCEk3JpCov8BEd25duHfhv3Dj0oTEBdGYmBhjgi7BRGgtKIpIb1sUXIi0BOjHbXtc8CHX6oJ4VjOZOc+cd94ZKza6Ep+erV2iXONIcgyxIZOwaMpI+Y6jmfdkhbOYv52cSBaxLJdnz7cAeDm5zeOnm/WEcg0IuvpTN2+tqb03rdjoV31JlQUpQUpTbwq+fQRdmcPA9Z+7aSJtDazmxOk2w0rWg1MWGAiFrLoQ9v7g22qFaCRL/2CA6dcRtrbFvbvNtLbaXBlxuDoW5EzUZnHJo68ncAixV8LEk7yaO9OixdX7hZIkaSNX1U6hJknK5auCZUFKM/FCfQlnuxw20jVYF73nHB5NbNJ8IsOxUIb5DyU+LZYJRQwtXYalpVJ9AkmKvyvqx3pVHxdLgpT6BzPqHcjIaU/LzXii0RUsKzlXPEhgEXSlQucB7+1skZGx7/R1G6y9O6tUwHEspl5FaWiAxuO7C1Yoja8Lc/NFRobXfGYA24ZSWUQvZvE8+brgA9x/kKfjvN+8r4ANIRsejuf+DejptsltiWoVPA+2C2KnsDsHKJZFuMln+f0OAO7cPslMwmPhc4WOiGHggoMkXkyWSE5XuHwtwI3rYR/g/z5TUxY7NmQSVjh79O8cMMSGTeIXkOIf821WbFwAAAAASUVORK5CYII=","oabt.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsElEQVQ4jX2Qz0/TZxzH36uZxihgpiMmtqtdBNt+C6hxMiYmHrzs4C7uuOxP2NEDiSg6UXBB+20b6ui3VWelhHwrymWSaLeMaqKcNHrz98UDVWmxVVr62qHoIEOf5JXnyfv9fF558shvB3iP1zZotv002368i3K/HWCr7aPZ9uK1jSW53h98tkFbajt7RvbSkdpNW2onPrsFv23gH21l1/C3fDfcSVtqB77lBK6km/5sP7OlAoVCnr7JPlxJN1ttH99caudp7hmFUoG+f/pxJd3/F2y66CI6FYUS8BaCWRNn0kWz7aV9uIPiuyIA0amzOC9uJpBuJZBuXSqI3Ikw/2aearHKwORpnAsv6EjtJl/KAxC6HWbD+Ua+GvHgGnF/TDDP6ewZnEkP7lEPTQkvr4uvAej5+yQKCcXrkLV2eQFF6Ln+K45BB7JWsjrYyMybGQC6M73IFErUI6u+JjDsFlzJzYRvhyjPVijNlBi7ewWdEp8NfM5vN02q1SoARzK96JhQ2IHiDchIb8ef3sbaWD09fx2nnC+Ty+Uo5Auk749x41GGxeth7hFHbpxg74Xv0eAq1DTawpoLjSgoDmWOU8mXmZ6eplyc+zD07OVzJh9nl4jO3BxEQaEV8XW1zzBF94Lg1ctX/PlggrF7V0hM/cGWs200RtwMTZ3j3ov7ZJ/cYt/wDyi6Esn6AsXXI9NBd6aXSr5MpVDml/GD6KQDmXXo9wYUa0DmalZFNrIisgFF61D8SyTLg+JfI7Oew5lTVPJzMFuha+IECq1DiS3IaqJ2z4MsN7I2IcuFLCdSzEBxAwWdHM2E4B0wB4cmBpDprHWxFhQzFhH4L1OiE53rREO72Hb+Z7omwnRdC9Ma/wkNtde6xHLsqe26egBdPYDGf0Tp/Si1r8bl/Wh8ofsE/wKkk2wuOwlZkQAAAABJRU5ErkJggg==","opensearch.krugle.org":"data:image/x-icon;base64,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","pic.sogou.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEzz2FRM89msTPPasEz32zBM99swTPfasEz32axM/9pgZTvirHFX5HwAAAAAAAAAAAAAAAAAAAAATPPYCEzz2dBM99u0TPvazEz72ZBM99j8TPfY/Ez72ZBM+9ogWRfcVHlv6kBxW+ecWR/c0AAAAAAAAAAATPPYEEzz2qBM+9tATPvYuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRfdqFEH2MQAAAAAAAAAAEzz2hhM+9soTP/YQAAAAABVE9isWR/ddF0j3eRdI94cWR/d5FUX3ThVE9wkAAAAAEz/2iBM99oYAAAAAEzz2KxM99u4TPvYgE0D2bxVD99wXSPf/GEz4/xlO+P8ZTvj/GEz4/xdI9/8VQ/foFEH2PBM/9iATPvbuEzz2KxM89pMTPvaQAAAAABRC9tAXSPf0GEz4oBpP+FkaUvg0G1P5NhtT+bwZT/j/F0j3/xVD98gAAAAAEz72kBM89pMTPfbaEz72OwAAAAAVRfdfF0j3FAAAAAAAAAAAIGD6BSBf+kYfXPrYHFX5/xlN+P8WRvfKAAAAABM+9jwTPfbZEz32+BM99hQAAAAAAAAAAAAAAAAdWPkwIWL7lCVq/OIlavz/IWL7/x5Y+v8aUPjtF0r3QgAAAAATPvYUEz32+BM99vkTPfYSAAAAABhK9xIaUPirHlj6/SFi+/8la/z/JWv8/yJj++YeWvqHG1P5FQAAAAAAAAAAEz72EhM99vkTPfbkEz72LwAAAAAWR/eeGU34/xxV+f8fXfr6ImL7oiJk+0EhYPoGAAAAAAAAAAAXSPcCAAAAABM+9i8TPfbkEzz2pBM+9nwAAAAAFUP3wBdJ9/8aT/j/HFX5txxX+REcVvkNG1P4JxlN+GUXSPe3FUT3iwAAAAATPvZ7Ezz2pBM89kATPvbkEz/2DhRB9lkVRPf7F0n3/xlN+P8aUPj3GlD49RlN+P4XSfj/FUT3/RRB9n8TP/YOEz725BM89kAAAAAAEzz2qhM+9qYTP/YDFEL2KRVE94MWR/evF0n3uRdJ+K4WSPeQFkb3XhRD9hkTQPYDEz72pxM89qoAAAAAAAAAABM89hATPPbOEz72pxM/9g4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATP/YOEz72pxM89s4TPPYQAAAAAAAAAAAAAAAAEzz2DxM89qYTPvbmEz72fRM+9jATPvYREz72ERM+9jATPvZ9Ez725hM89qcTPPYPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEzz2PBM89p8TPfbgEz329xM99vcTPfbgEzz2nxM89j0AAAAAAAAAAAAAAAAAAAAA8AMAAMABAACH+QAAiAkAAAAAAAAgBAAAJgQAADgEAAAgDAAAIDQAACAEAAAAAAAAgAEAAIfhAADAAwAA8A8AAA==","plus.google.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACEklEQVQokZWRS2hTURCG/zk3j+ZlcvvQpBprjBFBqlEu2gpuqzTRihWRrgSFLgRXuhCpO6GrCoKICxdFpW4UadG6EqSIIKVScWGJMU2bmhtpXo1pTHLvuS5uGmuCC2dzZob/Y+b8Q9FQL/4nDH9SVeFrGQgGVEqaUgFANhdziP8AVEVod3c9eVWOf7MeOqL3fn2eT1y50MAw/eGria5Hk7mXL1Yuhb/2eAGsf5pbOh9snsAAaNWKrX8IQPX7MmvbDrMjN/XMeuCwad9xcA5AlWN/TyDiP/MAWvYf1Ip5IlLyeQBKKgHGVDkWmE3WGQaADMb1mdeV5bgrfNbadw5qWewf+HHnNlmcqhzjURkAj8o6Q3VbeSruGr5hCUo2qSfzdDw9dhNcDcwmN38gInlYvSBne2bsanb8PgBnX9jo72atnojkWRAJwIJIEckjuH01QJUXtwwN73m/uvXarcLMG6G1bdfEtHGHT+jwMr8bAPO7BbevthJfy3TefWzeHYidDIIEaNzUfXTng4nih3fJ65eZQ1TlmK7esLVUsAal3PQkNDBXBxO3lefeZqeek8msi+rqDZeYAEA8PWg7MchzKZ6V7WcuiqGB9MN7ZLE3HI6ioV5NqRp9ez0jo8ZOr96tJpbk0ZHKl3lqsTYCi6eOAYCi8EJGK5cADURktpHdSQYjmsLwcUXeVNaWhqKgmG5WA/gN0x/ITLhc4AYAAAAASUVORK5CYII=","s.etao.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAIdJREFUOI21UrENwCAMcxBThz7DD9zDKdzDD/zSD9opiEZBgVZ4I4oT2wHYgZjrHXO9Z3qJCQBQUni9LZQUyH1VyYvoDxkAnOZ31gIA+J7EGVhD+j5XUiB/nNfsRgkzA3khWVcHWBmUFKiFyISV4Hp4raiFKS0w1I+0dMZRs1bX1DQFI4nb8QCzyUofF6/fJwAAAABJRU5ErkJggg==","s.mall.360.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAArlJREFUOI1d00uIlnUUBvDf//1u8804jYaRNUJOiaW0ECLFUCPHVS4qDFqIi1ICQ6LbQomictEiaCGBuRAlKGwXBJHoaBfyRkWiuDEtQ2smEkd0fH3f7/ve02LKwrM6i+dcnnOeJ7klfgrLJnn+u+PW/PK7O8qgPmR80Spfjsh2rE3V8f/j07/JoTCjYPeJg56+s79tfLLjr8tdxy4ydDeXprgxxZqXfDIsbdyUIr/ZYCzMaE6lb+d1Zi6eO3MmSlymyo3/Gd7/jP05ecW584w+6YfHV1nxYpKDycj2RsyPiPUR8XpEbIyqWhqdckZ0clHl4sAhMXeLaL4irBOPnPQROBGWRwxFxLqIOBARP0fE51EWz8XKN9qxckuK8qqIa+Kbr8S9W4U1ov2yyCMtqS9iE20MYwTzcFXVG3T0fK7sUl1BixUPMjbA2EJm99H3R9pcr/c8qlbggohTup0JVe+kovhNo07ZoyiQk5XcM4sNS5CB5Sk6umrNmjRft7PA6LYjDv86oVEjZeQFUeAGK4cZ20C9gUEMZGVdhVQSZynGNXvXdQu6jekXRQ8VajQb6E5vI9BPiusu6BlWEhndKlNVFFOVodemNXLlTVpB1qFekorpYgPNXzKXHDx3il37uXGZRq/Sikor0Jue2EIr0ahI3X/4t9CofZ1dmWvH5qN832Ppxxz88b+Drb6P1SNkXRTooJdoZ7TqygXZBwmWHbP3tqOeKXFhnA8f5rEH6BWJXlKLTOpm0wLtqzHUdO3+2XsG09lnE7wX2lvfdrh/wuLb55CCtYNsW9rQ16oTLVKb/gGGBuy7q3vki2xydHu6mN8007uh/dYuO4t91hvELBqJtXMaRkcGZX39Tha5008N7hmWv7A7TeS3OhlsD0sWn7YzveOMV+thazv6P511ZmHM2flEzH7oVvzf1nM6nTuV3nYAAAAASUVORK5CYII=","s.music.so.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAOrz5FDq8+2w6vPv8Orz7/Dq8+/w6vPv8Orz7/Dq8+/w6vPv8Orz7/Dq8+/w6vPv8Orz7/Dq8+/w6vPtsOrz5FDrA+5w6wPv8OsD7/DrA+/w6wPv8OsD7/DrA+/w6wPv8OsD7/DrA+/w6vPf8OrTz/Dq49/w6vPv8OsD7/DrA+5w6wPv8OsD7/DrA+/w6wPv8OsD7/DrA+/w6wPv8OsD7/DrA+/w6vPf8Nqjv/DKU4/w2nOf8Orj3/DrA+/w6wPv8OsT//DrE//w6xP/8OsT//DrA+/w6uPf8NrT3/Da09/w6tPf8Nqjv/DKM3//z+/f+E0pv/Dq49/w6xP/8OsT//DrI//w6yP/8Osj//DrA+/w2tPP8Nqjv/Dak6/w2pOv8NqDr/DKQ3////////////9Pv2/w6xPv8Osj//DrI//w6zP/8Osz//DrI+/w2uPP8hsUr/pN+1/+D05v/g9Ob/itag////////////8frz/w6yPv8Osz//DrM//w6zP/8OtED/DrRA/w6xPv8stlT/5fbq/4LWm/8tvVj/Lb1Y/4LWm//5/fr/7vnx/w2wPv8OtED/DrRA/w60QP8OtED/DrVA/w61QP8NsT7/r+O+/3/VmP8OtED/DrVA/w61QP8OtED/gtaa/6zivP8NsT7/DrVA/w61QP8OtUD/DrVA/w62QP8OtkD/DbI+//H68/8kt07/DrVA/w62QP8OtkD/DrVA/yG3TP/u+fH/DbI+/w62QP8OtkD/DrZA/w62QP8OuEH/DrhB/w61P//0+/b/JLdO/w20P/8Ot0D/DrdA/w20P/8htkz/9Pv2/w61P/8OuEH/DrhB/w64Qf8OuEH/DrlB/w65Qf8OuED/tejE/3/VmP8NsDz/DbI9/w2yPf8NsDz/gtaa/7XoxP8OuED/DrlB/w65Qf8OuUH/DrlB/w67Qv8Ou0L/DrtC/zbFYP/r+e//h9mf/yy7Vf8su1X/gteb/+v57/82xWD/DrtC/w67Qv8Ou0L/DrtC/w67Qv8OvkP/Dr5D/w6+Q/8OvkP/KsVY/7DpwP/u+vL/7vry/7Xqxf8txlr/Dr5D/w6+Q/8OvkP/Dr5D/w6+Q/8OvkP/DsBD/w7AQ/8OwEP/DsBD/w7AQ/8OwEP/DsBD/w7AQ/8OwEP/DsBD/w7AQ/8OwEP/DsBD/w7AQ/8OwEP/DsBD/w7CROcOwkT/DsJE/w7CRP8OwkT/DsJE/w7CRP8OwkT/DsJE/w7CRP8OwkT/DsJE/w7CRP8OwkT/DsJE/w7CROcPw0Q/D8NEyQ/DRP8Pw0T/D8NE/w/DRP8Pw0T/D8NE/w/DRP8Pw0T/D8NE/w/DRP8Pw0T/D8NE/w/DRMkPw0Q/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","s.taobao.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAS9JREFUOI2Vk71Kw1AUx39X0tkla6Fv0A7GqfgA4lh9goC0YNaCu0PWDC2BvIDEzRKcq1sWV7dC3czgrnAcbm8+b0T/cLiX8/E/H/dcJSLw8iBsU/6Fs0uYzpRTBt/ea8NiAqvX6t6DIvRxQRy2Kby/AQIocAaVlzOAKG9GZjE8JbjDEUXo45SG4FSfUa6dzq/1PfCaBIZws9an3F2JzMdS4uZEiw11/XwsHxfHcmRtsJ058LqVHFARLCa6dFNivfco787CjMmqNdlMUE/2ZgWgBxd49mw9FVQE5u1t6AkG00I9+PurOQuoFsr4ZXGLoO24WVfv3E6QxQ2bkudUitDHHY76W7Cg2O9wlwnKfKYi9AFKomK/+5XAXSYwnSlEpCmHDevoe8S6ie7jp/prKz9mycYrcJcFPQAAAABJRU5ErkJggg==","s.weibo.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAkRJREFUOI21kklI1HEUxz+/WWxRUStT1ApyYsacii6WC50KuuipbjlgdQwKD22HCIIEwTwUQZlODEgbCHUpJOwi0SIImmRJ2VChZuYyrsz8f98OLih1EKIvvMvjvc/7Pt6Df5RZbaEaKcVQgejDcMccn8+7Vj1qDdWIyrhDAxapkSN/daCCIMicBQ6AHpredxEAhQFRhOUNhjorql0utq8AyB885KBHg4lEmowhz+3+ZT70bATQDWA93+MJcrxuCoAmxOgSQIHgqaFE4np8GTDP43kP3EJUYEmn31yloXs/ln3AU+CEWZhcOeQkInFrpfGY0ci4YMYIN56UNOyGdIzXS17c+5n67ovE2ItDJqLIKFDIsGM1OzkFA4OkXqsltawE96ZMnKlJpj/2EaupxfnUz5aszFf0JhcbXqMmjiLWIX/wfnRzrgaPhSRrrZX0oKXFNoTD6uvvt5qX/Xn+gqKZORrdUeDIHzy4tGcs3z/6zV8oSZqenRWwIrq6urSoKB59zfdLgWD3Yr9rbCKWlnyySgD3mptVXl5Oa2urQqEQgNrb21mA4UpKlQCkuSVAXkpq28zzNgOQnJJiiouL8fl8JhKJAJjSsjIAM/X4CdbIJLlcgKlZdvtClJE1MnLpsiTpSl2dALurtEQvOzutJE2E79ovoB++gBQInl7+O/NnDBTCWOz25PRsZdK5M2uT9uyGhMP02w5i9TeR25Cdm/0CVGV6e6J/AJbcbPXBwPBO4uOHgQy8aXNsy+nA43pmenv4L/oNMx4gOdtWhgoAAAAASUVORK5CYII=","safebooru.org":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAdHTD/REli/0JIav9AQ2b/Vl96/2Bqg/9ha4T/YmuE/2Bpgv9ga4P/XmmD/1hcfP8+OWH/Pzxi/1RXcP82PEL/P0do/4aOwv+Kmtf/tMP3/7rN/v+80P7/vtL//7fH9v+ywPH/vc78/7rP/f+3yP3/qbPw/4aJzv+dotH/a3eA/0JOb/99hMT/qrX0/625+v+1wP3/vsr+/8XW/v/K3P3/ytv+/8XX/v+9zv3/sL/5/6m2+P+iqvP/pq3d/2t3gP9MWHb/qbXu/6207v+blcf/rqzZ/8nP+v/a5v//5/b+/+f1///k8P//1uD//8DH+f+yt/H/rbLv/7K97P9rd4D/SE11/6Wt5f+ylJz/uYaB/7eKh/+/sLX/6ff//+v6/v/r+v7/6ff//+Tt9v+ujpH/qYWF/6qLk//Cy+T/a3mC/0ZKcf/DvNj/uZua/3Q4M/96PDj/roWG/+Lx/v/l9P//5vT//+Xz///V1t3/qG5r/2wyKv+LSUT/pJKW/2d2f/9DQWH/t5ik/3FBO/9nLyf/bTUu/5d1ev/T4f7/1OX//9Xl///U5P7/x8bX/5l0b/9iKyL/bDMr/4tzev9QXnH/T1Fy/4Vofv9wPjj/ZC4l/2gxKf+Rd4z/v8/6/8na/v/J2/3/yNj+/7m20v9nMSr/Yisi/2kzLP+OdoT/QEpl/11kgv+jqdj/dF1x/2E8Pv9jPkb/g3uo/7LC9//A0v7/wNP+/7vM/f+Pjr//Yjs+/2c2Mv9pQEX/eXCV/1hmdv9jbIP/wNT+/77R/f+2x/j/sL7z/6e17v+0xvn/us/8/7nN/f+rvvT/n6zo/5qf1/+Tk8r/j47S/5247f9odX3/ZnB+/73P8f/B1f3/vNH9/7jM/v+2yv3/t8z9/7jN/f+mtvL/mLXp/6e48/+qtvX/mqLp/5Oo5v+oy/b/b3l+/3F5gf/r9/v/zNzu/7zP7/+0yPD/v9H1/8ze/f+ywPX/kqvn/5zA8f+brub/oLHr/4id2f+Vuen/oLzg/3d9f/9mbHf/8v7+//H9///u+v//6Pf+/+Ty///N2fr/ma/q/5/F9v+fufD/p7Xu/6S55f+pyvb/qdD9/6q74f9/gYH/bG95/+n0+//y/v7/7/3//+v5///c5/z/r8Dt/6nR+v+43vn/na/k/7jH7P/L5vb/ttv8/7TY+v+wwOT/goOE/3+Bgv/L0uv/8v7+/+/9/v/p+P7/vsjs/8Tk+//B5P3/ttPy/7PC6v/U7fb/1vX//7Xa/f+t1Pj/t8fr/4SEhP9ERET/Zmh5/3d+hP98g4P/b3V//3R7gf9neoP/coCD/19pef9weH//d4OE/29/hP9fcoP/Wm+B/15oe/9ERET/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","scholar.google.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAjpJREFUOI2Vk01IVFEYhp9zzp07P3fESkw0JCtBU6RFkBAk/RG0mhZt06DFFCUt2pnbIBKhVSRFQRlBEFnRogLpZxNlUIYLy4VFSZciqZnxMvfeM6fFHcdBlOhbnQPned/3fN85YvihydyfYsTShQbK5WsoalYtISCecNxDnWRFz3nzvRrO+9CzRbKn3SIsrQADSsHQEx+tHNeqhnM+7NoiGTqSXN0euPc6oOBDjV1okMvh4X/AJ695pGNgynv5P/CZmx5PP2lilkCpSESuBk/MaPZfKPAzF3n9yBnGpjRKwu4ui4EDNoUA5MEOtaLz48kA94/h1gsfgPoaQUNaoM3SGWNAjk9rtp7N0z6QR5zOEZQ731ovSSgY+xBWgNIKU5G2giZHsCEt2LFW8mgiAGBnh4Xrwcx8ZPlt3rAQGBa7rsoLq1otbcPggyKb1ku2tSiGMnFqU5DzDH0jC9QlBDnfMPlF83ZWE1cg9p7LG5bVXN7Q1SS5cyoFQKCh99ICs78MqRj8LhqSlsBWVBJFB0swVzBsb1a01kkWrxxTcLs/RfdGSTGE2ngEQ5VAoKGtXvBq0GH0RJLD3TH6r3uMvvQrBhePJonbUKrKbEH0IDwNV7JR5PefNZnLHi01guczmqIPx/bZUXM3K55N66UEoXJcY6CpVlRUE7ZACFAC1sQFd98tjXL8oyZWzh0qx5WZTrIly3G/zpcYexONsK1RcqM3QfM6QUejZKQvQTGE41c9hIm+c6gcN9NJ9i9w7NfmSrS+SwAAAABJRU5ErkJggg==","se.wanggou.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAB70lEQVQokZWRv2tTURTHv+fcd/Nem6SEmjSRSIVYRRQstlhxtENAoShS0MF/wMW/oItCBycXERERxEEcxEEHEeygCHFyUSLysDS0GgxNW9Mmr+/HPQ4vbYiQwe907hc+l/P9HqrkSvgfWX0vEQAg6g6xiAYCpDUxG99n2943TccTEVIck3uACDvO8KmTeiy79e7D6FyZHBvEMMZbXvHcH0G9AREQ7QHGqJF0dv5yemaq8/nr+K0FiAmbG6Q1K7X1sVJ/8Lhd/Q6R/pUUw7JAQBQ2nr34dfe+Hi/mrl89MHdBpVO123c8d/mf0L3wEgQm8NtfqqsLiwRk5y/ZpcNe1eWB/RGBmZhNGG6+XYpa20PHJlQmPRjoYgBz+KclUURKgYj3d4hL6F1AYl9gTKKQJ62j7baEIcc2BREnk/ahg6bd6f1thAKjUqnstSuAdFzX7HgWiHR+LDU1mSnPDp043nz1RiCkWBfyqelJ5+iRTHk2fXb699Pn3jeXNFvs2Jny+eLNGxIEm0vv64+eiAjrxOjF8si5M+w4uyu1n/cerr98HTY3oBR9yk/oYsGeKJmddrBW92urZCeSM6dJazDDmLCx7tfWolYrro4quZKEEXYDMEFbpBQg0vFhpJvEUqQVuFuPBYAsBUv1nWDYxgD9Ba2py+DGJDtQAAAAAElFTkSuQmCC","search.dangdang.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAqRJREFUOI1Nks1vVWUQxn8z73vu6T33K9AmCoobITXVBFCDMeZqGgjiR4hbcGFIjCtCTYxx5caEv4JUWejGleu6YYOxtOrGoEgk6SUopUU0YHvPec/7jotzwc5m5sls5vc8IwuXv7H9g1303RSKUKbAX1VFrsquvEWIkbtVaHSrBXjKWHIvF36+eu1zP9vfzQfPDlnZHGFm7G53me1OMybxw50RM0Wv0Rb56e4tzIw9nQHdosvC1V/w3azN8uZNXvnqM4gVL+8/wncnz7K6PmK4+BEvzb3K9+8ssLq+xvDr8xAq3pp7jS/eOINzGV4sEi1BGEMIjOuapgx8QVs9AMEMygrqkioGDEMJ+O0UeLzd492Dx7AYeHHPAQB6WRtU6WY5AAf6M5w+eBRS4MgTs0RqoiX8Vqh5sjPg3OGjGGAmXF5fY2VjDXLP7fIfLt2+gRfPuReOkWLksaJHHSMhKX4mL1jeuMn8xY/BTYHLINagBlmf1dGvzN/4FGiB85Aq3p4bsvj6e0xlit+KFXuLPqcOn8BJhgqYCCKCkmFEzCIK/DF+wNJvK2SqAKSY8P/WgX2dAQuHjpNU8CYYRhLQiZeigiJc2RyxdP0KaooAKoqfyTs7ENogDszA2SQNgSQgBlkGrkBVMSDh8GUK7O30OfX8CbxkiCiPyhKGIAhOHLe2/2bp9x8xSZMYI/5BqNhXDPjw0HEQefgBjRdmzQyoelbujFi6vgzJaCASfjovWN4YMX/xE/BT/yM8umSCItbsQsX9qpwgKD4aPN2b5uRz82Su1SAIJDHEwBIIiohhCrEcM3zqGXI8Zgn/Z9pG2zkX3nyfHfCNeYBMIIwdppK4lu6RLHk58+2Xi+NyTGZKBJwDIigOUJLUJCKKkiw1PYHr5p6t8tJ/92gp0/nKl64AAAAASUVORK5CYII=","search.disconnect.me":"data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///xP///9H////ff///43///+B////af///0X///8f////B////xP///9H////ff///4////9r////Af///wH///8Zd3d3r0NDQ/9BQUH/Tk5O925ubuGxsbGt////X////yX///8fd3d3rzs7O/8qKir/IiIi/////xP///8Z////LXp6erNERET/RERE/0NDQ/8+Pj7/MjIy/3BwcNX///9b////MXR0dK06Ojr/Kioq/yIiIv////9H////X////2d4eHi5Pj4+/0JCQv9ERET/Q0ND/zs7O/8wMDD/eXl5x////01iYmKjMjIy/ycnJ/8iIiL/fn5+v4eHh9N/f3/PUFBQ1UFBQc9BQUHlQ0ND/0RERP9AQED/NTU1/yoqKv/Jycl9WVlZey8vL8csLCzJKioqx0JCQv83Nzf/KCgo/0BAQN3///8l////A3Nzc1dISEj1Q0ND/zk5Of8pKSn/VVVVz////yn///8B////Af///wFCQkL/Nzc3/ygoKP9AQEDd////Jf///wH///8Nb29vpURERP87Ozv/Kioq/zIyMvH///8v////Af///wH///8BQkJC/zc3N/8oKCj/QEBA3f///yX///8B////Da2trWtDQ0P/Ozs7/yoqKv8iIiL/////L////wH///8B////AUJCQv83Nzf/KCgo/0FBQd3///8l////Bf///yW9vb2FQkJC/zg4OP8pKSn/IiIi/////yf///8B////Af///wFCQkL/Ojo6/y4uLv9LS0vh////Rf///zf///9jioqKzUBAQP8zMzP/JiYm/zMzM+H///8Z////Af///wH///8BQ0ND/z8/P/87Ozv/Xl5e6f///4v///+PmpqazUNDQ/86Ojr/LS0t/yQkJP9ERESp////C////wH///8B////AURERP9DQ0P/Q0ND/0xMTPtoaGjtRERE/0NDQ/89PT3/MTEx/yYmJv8iIiL/e3t7Nf///wH///8B////Af///wFERET/RERE/0RERP9DQ0P/QkJC/0BAQP87Ozv/MTEx/ycnJ/8jIyP/RkZGc////wX///8B////Af///wH///8BOzs7/zs7O/87Ozv/Ojo6/zc3N/8zMzP/LS0t/yYmJv8jIyP/Ozs7ff///wX///8B////Af///wH///8B////ASoqKv8qKir/Kioq/yoqKv8pKSn/JiYm/y0tLckyMjKbU1NTKf///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==","search.jd.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAB70lEQVQokZWRv2tTURTHv+fcd/Nem6SEmjSRSIVYRRQstlhxtENAoShS0MF/wMW/oItCBycXERERxEEcxEEHEeygCHFyUSLysDS0GgxNW9Mmr+/HPQ4vbYiQwe907hc+l/P9HqrkSvgfWX0vEQAg6g6xiAYCpDUxG99n2943TccTEVIck3uACDvO8KmTeiy79e7D6FyZHBvEMMZbXvHcH0G9AREQ7QHGqJF0dv5yemaq8/nr+K0FiAmbG6Q1K7X1sVJ/8Lhd/Q6R/pUUw7JAQBQ2nr34dfe+Hi/mrl89MHdBpVO123c8d/mf0L3wEgQm8NtfqqsLiwRk5y/ZpcNe1eWB/RGBmZhNGG6+XYpa20PHJlQmPRjoYgBz+KclUURKgYj3d4hL6F1AYl9gTKKQJ62j7baEIcc2BREnk/ahg6bd6f1thAKjUqnstSuAdFzX7HgWiHR+LDU1mSnPDp043nz1RiCkWBfyqelJ5+iRTHk2fXb699Pn3jeXNFvs2Jny+eLNGxIEm0vv64+eiAjrxOjF8si5M+w4uyu1n/cerr98HTY3oBR9yk/oYsGeKJmddrBW92urZCeSM6dJazDDmLCx7tfWolYrro4quZKEEXYDMEFbpBQg0vFhpJvEUqQVuFuPBYAsBUv1nWDYxgD9Ba2py+DGJDtQAAAAAElFTkSuQmCC","search.kankan.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADIUlEQVQ4jX2SfUyUBRzHvyBBjHMneKbNzpTUZtOyLXUFIW3h3MzcKqZttbFenZWzNTcHMpGXkztwolYovqAoWDjf1jHSIHChYrwccIfPPc/g4HY8z3N3wJ0ded0d6Lc/KDaT/P7/+fxeAQAfNcxNNnS+dXC/7b3TxjsfmPZ1bNpc3rh0PmozZ2h7nMlp0tiyPCWgy2tqisF/s+7q3IRDwmdWs1LIBkcKLdJa2mxvULy9+L7YmPijoXnL67pOYW2SwLxMOWw6MRbZWtzv004J3r298f0Cxy7mCCk8J8zhyW4dd/0W2553bWblxSuaFucPGGw5vyj/1cbq1egY/0krRUJb3BHrF9LImklB545TWdI2bhPW87j4AnMtTwc+aYp/5t8C504m6cWCWENfaZwxs974PFrHW2EPcblr3P+hK7gGb/cY2jZIOdxs38p8KYPbOxZ3PTIngDvZsct7K55YucpsTsb1yCiEEOfYghZkCCeG0vrKmSqW8WPpK2ZZ0lunEzyUS8Gq6BsB4lYwgNeEy+5XHGYuFBuYIlbzza5sa2YtZjxWUOWpR72PuHB3FCuERvuKwR5qxAHOkwTqb173La2p0f0vXCbvjTrrIc6MEIc9d7Gwt61umcvLaPEeY8U/GPermzHfOjIeAUsVHUqUM1FH/oGLVGoOyF2YbbEWLVHCjBMjhC3MqOY/idIh8xRY4k7AATULJrUfR4eJ0z6iQCUMClfXDH8ObauUkSxPUCdFiI4wcStMVAwTRrkF+9VamNR+HPYSZ/1ExSixRyH2uTmzTLWmVw48CVztTtAP/DXw0uDEJNwcIa7cI773EuVeospHnPITRg+RIxNFKmFUJvSFjrSpLp+1+r/Z6LnPBe0Roi5MXAoR1WPEUT9R4iVylUm4UGF0sULtbmnnQ/v5+qYrfpMz2LZDecCnfg4RlWPEIR9R5CF2y0TOEGMKFcaXyNRk2/OnvU6B3b3onb6A+KXzAVN/CXL+sVEmmtycVaxydpmbiaVOn26v8Olj/yO97vd5L17rLU+94fW8fHmE+iMyk0x9Lk1u93fane3PTcf8DU66zKoIw+cZAAAAAElFTkSuQmCC","search.mtime.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACdElEQVQ4jXWQSUjUcRiGX2f+Mxp1aDkWdenSoeXQoVvXDkGKUIlChSVUQlBQQYlEHSIiLx5Kk0AQCwrKAkdaxK10LHGKxshtmmbcR8dZXP/zezpY5jD1wnP5lvd7+eT8Zhe7AyaaHYbsELiD4A6Aa8j8ZdBg9Ruc/hQOn02Wdxm9TkZ1p+28rP5U1D0C7jHIeT/Fru4Irp/gCqRjDcKWhhCbOhdRJ+gdqHYqIet7ClcQXCE40THGooH9YbAG1tAPOa1RPoVi1E/9Xn4Oqoojp99gDYI1kOKhbxKApzFw+NfwFQrfhAAILoD1ClQLuhdHDp/B2QfOD0l8I3EADLDbD/q4gsMTpW88AYBtYGcDqNKgWzGU1QNZvbDZEyGxaPNHdZOglhWONI6wVsdfg27b6FoU/blywDOeNrSUggMdNo7HM7QPz6b1KnoMurGArswgdYO64HxrugFAOL7Em+8RjEmvt4UNKk+gyzNInaA2qOmZyDD4n+ZtsMqm0aUppFbQizmahmZ5nhmC+iBUD6Qy6vsqxtGFEaRGg1U1yk2/wVlv45/++8j4kmFzzRx762YzDE7XjaIzA0hPFtnzKEhuYxJVRCh6Ob06VOmNoetDWNf7WbDTH3H/3QQq7EWqinLy2TDbK4LoSh+ui59p6osxHl9mx9VedLoLFXfRGUhP0T2UQEe7kO6GKWv6gUo/ouIOVNhMdsFbNha9RXmeFXI9VDf/TDOIzdtsPOVFKh+cvdoQQIXNKN+DDr9Eh15kcPbBl9XllIFIfJmD5b6kNpzzlK4v7U2o4APKb0V5Lf8k53g720q8bCvxsvWMl3XHWpKO3cW3fwEfwhA4+zaCkgAAAABJRU5ErkJggg==","search.suning.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABZUlEQVQokbWSvUtCYRTGn9d7Tc1EuWVuugTWUAQaaf0JrkZrQbW6KU5abc5NgRAELrW61NKWUkpkUFFoghBo3tKLXvXe69uQnxR9DJ3tnOf8OM85HILwJX4fgqj6QzcAYBioSahJ31fYvgDQiAsA8Sd68lBFrwZAPnagIcePZsh2CoLI9pPuaKOWiXhsAPzxfKWpQMOCIZ8sdacPxtbiZKkmrR/n4k/CF0uTQJIEEoadVKWhAFiK3gVPCma9enWOQ11CQx4CmDbNB+eF3QWfy2LUMlfP9fNCrSOpSDnkPNucGQK8dpPVpDlIl9ccEwD2LkqD3nhRNuvVA0Cb+pYtSpveF+tT41pelGMZHhQjBABabcrXZW6U7QNu65jbZog/VDx2E4Bo+kWsNs0E3lkOQOzmtSQqPYAFkHtrOfdvGRVJbkwrlB5e8+Wwk9OxmaK4cpQ9zVYf+SanYzq3+ffnYyGIfwLeARKUkv/QvgXRAAAAAElFTkSuQmCC","search.t.qq.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAs9JREFUOI19k8trnVUUxX/7nPM97k3uI2nMbZpEsDWmlFSoNKKCdCCtDyjprLU4yMyBAzMQhP4DDjSjYsGBgw5sOxGplCqKiEJLqXJ9FaSNqfhIor2Nyb239/V953zHwdUmo67R3uy1F4vN2rL3S//yjk7tXd+qDwGAB4St+n/Itl6Q3GCzMbhzQQ5+vLpRT7IyfovsgU3n2fAe72FICWUtKLbrCUVxPdOpb5R9MHBf/V7maXvP4kyZ2UqMIHxX63LqxiZpBiUt9110bSdSvdThModzjlpiOTJkqJ/czdyjRW6sd/m+1uHQZJ6VE49wvBKw0rM41+f3rMMk1oK1JJlnf05x9oVJFq//xRvVddCq7+wKLEwVOP3cJLc/WubbuiVWgkstMnbmuldRjpXEUT22h/V2yuFPfgMlvPX4CPlA8Xr1DmTwwbNjPDlRYOrCLXZFGpIeJu12EOugnXBg5yBz53+AdpPLR6d5ce8oAM+M55k99xOvft2h+dpT0GqSWI1Yi/FpD2dTSC0An639A60uM2MFnPOIeA6Ol6DV5F6jf+hQEtKOR5OhPKBEwPWH8w+XITIUQ4PWglKKc9XfwWieGC8CkLRStBIEMEopRGuIQz6/+TfaGH6cn+W9a79y4dZdKnHAp6sN8IrFw9N89UsNwgCtNR4wWhkkCKkYOHJ5iVcmClQKhjevrYFR0HCgAj48NsWhPQ9ROX2VkXyMFsFLitGBRoLwv3BkLDw9wjtX/2CmUuTi3GN0bca+SoHVZsK+96tYE5JX/TBliceIMpgwwnsPPmN6tM3blxKeH85xaakOAqeurHJxrc2uOKAYbf2Gcw6jTV8gyTwvDTuW1/+EaIKfexnf3GwAkFPC7tLA9k9ARPAuxaiBUlOHUUE7z3DcZWmzx44oJtaOmAdAKVyaWhn/ws8P310+o5zNJR7aTlEy2YNWESATlWyOTi38C7dMLjj/5npVAAAAAElFTkSuQmCC","search.yhd.com":"data:image/png;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AFNW0wAFAMcAsbT3AIJ+8AAoItYAzdb3AGtl8gAbE+8APkHOAI+Q4wAXEdAA3+P4AGll3QDy8vwAnDgRERfMzJmcOBERF8zMmczKEREXzMzMzMzRERfMzMzMzHERHczMzMzDQREfbMzMzMOxERGszMzMw+EREaPMzMzDoRERI8zMxmzPERHjzMzGTX8REVPMzMzLERERs8zMzMOnER9DzMzMzDyxEUPMzMzMzDJxTMzMnMzMw8TczJkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","search.zongheng.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACgUlEQVQ4jU2T20+TURDEZ89XtYpaxNYoFVEuBlBjJDFKNBr/aaGlgmIoGK0VVIpGbiriDUW8le9yfj58lPiwL5PZObsze1TrEHMnA16ddaz1i/UhI9reZGtYbA2LH8Pi82VHtL3Jar/jdbeYP2k8OW5UDwvVC+Jl0bHcI9YHHF8uGwA/R8SvEcfv62L7qvDA+oBYPmc0io5aXswcEZrLi8YZ8aZPfLggtoYdJNC8KaLbIrwpflwXeNgYEit9xosuMV9wzLQLeQAPHoCQBI/3EN9y+Dsiuu34c81aBCCh1YMHPTthLHSJlX7xadAB4JMd4hsivCWiG+LniEjiv3hgtTdgoUs8PSGm24VqedEoiqWegPeDIvYJxAk++kPrIf42IQrBxyz1GM+L4mnLg1pH6urrbrF6XpDEfL2kvRQ2rxhfroiNIQdRzGK3MXdK1HNKU6jmjHo+YKFTvOk2IOLdoOPDBcfHi2JjSLwdEGt9GSDhRVHUC6KaM6YOCU23idljRq0gFjoFwHKvWOs1ls87VvqMpZ50QjzMF8Rsh3jYZkwdEJrMpqM8zgXU80YchzSKjsYZsdglFk8bjaKY7xRxHPO4PeU/zBqVjEOVfWLqgJhuE7NHlcbUbO5FBpDsNPHhDj6B6mFxPysmnCgFQhWJSsZxP5uqAhCFzLSL2aNGNSceHTGSOAQSJvcbE0HaPC6hVlbex7sHlYCHyayYOiQeHBST+1uH9N8RpTRUlnFXRsmMsoyypWaNZ8S9jO1VQkxFYlSOkhljEiUzNC5RNlHSbpnhvae0i5cVMK70M5UVpBwnKtpdIVVzjP0nEn77RtnEqIkxl2I737cYlajIUlyOksQ/495yz1qygQQAAAAASUVORK5CYII=","searchex.yixun.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkklEQVQ4jY1Sz0dEURQ+76VW0Wpo1SIxNM17d5M2s4qIaFWifYtaDhnTnHMpERER/QfRqn8grSJq02pIqfTj3UNEtEt8Ld57M+/VyDvczT3f/e53vu8QFSgsUh+aNF4E25tAqI4GjfwLGmtqyYjCiKIqL1XD7s2IYklOcWVrSHtGFKGohuJ2cgQBR/Nx072PNu6HjCim5BH3toxd2coRGFEY1o8C0v0DWB9Z+Yaj9YTkrgMMJdrsynN7RERgmoX1AeudZ0nDlqvHCtxR53JiI5oxrB/x/G4ZTSrBegrrA0L1HAHrsRFF2HLd+8paezBVEHBUhngn8e+/DtNsyPoQ416ns7JqibufX9y/0vOx9Xcr64/DiYHflbX2YCYBXTWiCNnl5oX19+MxvAss0kAnKXY3ObcNu8PEmP08gfcE672nKQTsthOC64CjcsYYd54a2I2Qqsnc8xkDz7peZTxIEwhYFzLytyH+HhWpUPTz96ad2GVMyvPfDUy2NU/QipaMuHYKqMkt5uSy5+PkXBRSVqR+ANUmTj8l7J3rAAAAAElFTkSuQmCC","seiga.nicovideo.jp":"data:image/png;base64,AAABAAIAEBAAAAEAGABoAwAAJgAAACAgAAABABgAqAwAAI4DAAAoAAAAEAAAACAAAAABABgAAAAAAEADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMzAAAAAAAAAAAAAAAAAAAAMzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAAAAAAAAAAAAAMzMz////////////////////////////////////////////MzMzAAAAAAAAAAAAMzMz////////////////MzMzMzMzMzMz////////////////MzMzAAAAAAAAAAAAMzMz////////////////////MzMz////////////////////MzMzAAAAAAAAAAAAMzMz////////////////////////////////////////////MzMzAAAAAAAAAAAAMzMz////////MzMz////////////////////MzMz////////MzMzAAAAAAAAAAAAMzMz////////MzMz////////////////////MzMz////////MzMzAAAAAAAAAAAAMzMz////////////////////////////////////////////MzMzAAAAAAAAAAAAAAAAMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMzMzMzMzMzMzMzAAAAMzMzAAAAMzMzMzMzMzMzMzMzAAAAAAAAAAAAAAAAMzMzAP8zAP8zAP8zAP8zMzMzMzMzMzMzAP8zAP8zAP8zAP8zMzMzAAAAAAAAAAAAAAAAMzMzAP8zAP8zAP8zMzMzAAAAMzMzAP8zAP8zAP8zMzMzAAAAAAAAAAAAAAAAAAAAAAAAMzMzMzMzMzMzAAAAAAAAAAAAMzMzMzMzMzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA998AAMAHAACAAwAAgAMAAIADAACAAwAAgAMAAIADAACAAwAAwAcAAP7/AADChwAAgAMAAMEHAADjjwAA//8AACgAAAAgAAAAQAAAAAEAGAAAAAAAgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8zMzMzMzP///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8zMzMzMzP///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8zMzMzMzP///////////////////////////////////////8zMzMzMzP///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///////8AAAAAAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////////////////////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////////////////////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////8zMzMzMzMzMzMzMzMzMzMzMzP///////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////8zMzMzMzMzMzMzMzMzMzMzMzP///////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////8zMzMzMzP///////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////8zMzMzMzP///////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////////////////////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////////////////////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////8zMzMzMzP///////////////////////////////////////8zMzMzMzP///////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////8zMzMzMzP///////////////////////////////////////8zMzMzMzP///////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////8zMzMzMzP///////////////////////////////////////8zMzMzMzP///////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////8zMzMzMzP///////////////////////////////////////8zMzMzMzP///////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////////////////////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzP///////////////////////////////////////////////////////////////////////////////////////8zMzMzMzP///8AAAAAAAAAAAAAAAAAAAD///////8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////8zMzMzMzP///////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////8AAAD///8zMzMzMzP///8AAAD///////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///////8zMzMzMzP///////8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///////8zMzMzMzP///////8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///////8AAAAAAAAAAAAAAAAAAAD///8zMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzMzMzMzMzMzMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzMzMzMzMzMzMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzP///8AAAAAAAAAAAAAAAAAAAD///////8zMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzP///////8zMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzP///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///8zMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzP///////8zMzMzMzMA/zMA/zMA/zMA/zMA/zMA/zMzMzMzMzP///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8zMzMzMzMzMzMzMzMzMzMzMzP///////8AAAAAAAD///////8zMzMzMzMzMzMzMzMzMzMzMzP///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8zMzMzMzMzMzMzMzMzMzMzMzP///8AAAAAAAAAAAAAAAD///8zMzMzMzMzMzMzMzMzMzMzMzP///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAD/n/n//w/w//gAAB/wAAAP4AAAB8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAAD4AAAB/AAAA/4AAAf+AQgH/AAAA/gAAAHwAAAA8AAAAPgAAAH8AAAD/gBgB/8A8A//g/gfw==","share.dmhy.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACkklEQVQokQXByW8bVRwA4Pd72+yLHU+8UUpC2iJAigCxCIG4IHHgv+QPQOoVceDCCYkWoaY9RLh1FMdOvM543sy8le+D5zMrAVnr1nuNDc8yFAUOE7QTcHcvf77Eu5X77BGVyv36nztaRCVxxuHFqhoPw9Cil+9q5gdS1NvWfTJOz33jTclt5XoB+ukp+eWFprsGiwOa3xrn5OWHcjThm0M3HUXPPMyRuynRRabzyDlE/not1iWnN8vaKvzB4zjN8O0Ox8gWRaAt0kY2hLw+GOkgIkS3ugxD2zVUS+7j47joaaOPAjFQGwty7yoD7wW45ngh0XZR9vIITCcaRf2UbVbk+e/zj588GiagwP/tz63rCAv04+9OQuuu3jRXcxx5dX4a5KOUtkrFWdJoerOW4z5fr2tM2s+/HoUKr3btciEXG3R2xgLPPByOMaSYWaAEcdYZOFoEeRoOwnToqclE14LM1p3F7adn3uWFlzDSB4qtZ2uh92t5cZonfst8uKvL6xUA0CK3gwB/+0XhE1CoHY+ynVC021N5ePjxmwIT5Byb3xmn/ZQhsZU+Yj98dQJMCUOdiGezKj9PaHusvv9yKIUqW2wwiMYCkH7CnLVAoT6i2nZv58fpaaJtF6qINsg77GUcgHKEGRMOqFuWDBIawKvr6nqJDVFeg549RVObNlLT3gn/42oT82QyUlESoqqT4DMOugHPJ1EoCInOz+gkxjEj/1y3lFM3KbLbmxKNY8J03uP+W7ItUTFAT4Lwo/dD45xHnOoUUI9Sgn2KexkPAkI5zvpIVHWRBH+/ur8vO6DAqAuJ6yw0zpu9q4MQ05ghi02/SJYPMtCsquxkyM209++bhvJuMuBKWW2I6Gwew/SE/A+znmA1RQ8eXQAAAABJRU5ErkJggg==","shooter.cn":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////ALa24w+kpN2FOjq1lQAAlpwGBqKyAgKgzhMTqOIbG6n/bm7J/2FhxMVFRbimVVW/Z7GxtACKitAC////AP///wAxMbGlICCt/wgIn/93d8z/kZHV/wAAmv8bG6j/qqre//v7/P/5+fz/dHTK/wgIn/lDQ49QMDCyAP///wAAAJdVISGq9gQEoPcAAJz5ysrq/LCw4PwfH6j9urrl/p+f2v/MzOv//////YaG0fgAAJr/PT2+wSAgrAD///8AAACcppub2fbJyer6DAyf/nh4zP+jo9z9bGzI/0REt/8AAJP/kJDU//7+/v56esv7AACa/jk5s7EgIKwAAwNeQxUVpbk2NrTTx8fp/qqq3v11dcv+y8vr/np6zP4/P7X/Fxem/5CQ1f/////9dHTI/QAAmf4oKLDioKDdAwAAimFeXsHWzc3r9GBgw/2/v+f96Oj1/tXV7v7o6Pb//////pKS1v+Li9P//////nR0yf0AAJr/EhKp8NnZ8gMDA4s/DQ2gy6ys3/nw8Pn8srLi/vr6/P9/f87+MDCv/2ZmxP8dHaf/jIzT//////5nZ8X+AACZ/hwcrPT///8IDg6sKAAAmLE2NrP76ur2+42N1P3AwOb9xcXp/jc3sv8/P7T+IyOq/4+P1P/////+WVm//gAAl/sWFqr9eHjNgwAAwBAAAJqoNze1//Ly+fqfn9v9kZHV/M/P6/7Fxen//////f/////w8Pj//v7+/paW1v8UFKT9AACd/jQ0tez///8AAACZrEJCuP7+/v76d3fM/ISEz/yMjNP+Cwuh/19fwv6pqd7/7Oz2/v7+/f7////+2dnw/lNTvvw4OLX/////AAAAmLxWVr/9/f3++t7e8f3Bweb9mZnZ/QAAmf4AAJz+AACZ/omJ0v/////939/y//T0+v2NjdP7LCyu+v///wAAAJeMhobR//////eKitL8WFi9/NPT7v1CQrb/AACf/QAAnP+AgM7+/////mlpxf4eHqj+Bwei+jExsvz///8AFhaiOqur3+2bm9n/Ghqp+L6+5vr////7f3/P/AAAnf0AAJz7f3/O+v39/ftlZcP7AACX+QAAn/43N7X/////AP///wBKSrg/AACblCcnrObGxun/xMTo/wUFoP8AAKD/AACb/3l5zP//////w8Po/w8PpP8AAJ7sCAile////wD///8A////AP///wB4eMtwSEi6ulNTv78BAaDMAACh8wEBns6GhtG94uLlvLGx4cgVFaemCAieOQcHngD///8A////AP///wD///8A////AHBwxyk0NLFBLCyxRQAAoJcPD6g8////A////wAAAI0w////AP///wD///8A4AMAAMADAADAAQAAgAEAAIABAAAAAQAAgAEAAIAAAACAAAAAgAAAAIAAAACAAAAAwAAAAOAAAADwAwAA/38AAP//MIAwMXsic24iOiIzMTAxMDEwMzEyMDUyOTE1NTgwMzY2MDg2NjEiLCJsZXZlbCI6IjEiLCJzaXRlTmFtZSI6IsnkytbN+CIsImRpc3BsYXlOYW1lIjoiyeTK1s34IiwiZG9tYWluIjoid3d3LnNob290ZXIuY24iLCJzaXRlQWRkcmVzcyI6IjIxMC41MS41OC43NCw3Mi4xNC4xODguOTQsMjEwLjUxLjUwLjcxIiwic2l0ZU93bmVyIjoiyc+6o8nkytbQxc+iv8a8vNPQz965q8u+IiwiZGlzcGxheUltYWdlIjoiaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQVVDQVlBQUFBTitpb2VBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1RXbERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk4zV0pQM0ZqN2Y5MlVQVmtMWThMR1hiSUVBSWlPc0NNZ1FXYUlRa2dCaGhCQVNRTVdGaUFwV0ZCVVJuRWhWeElMVkNraWRpT0tnS0xoblFZcUlXb3RWWERqdUg5eW50WDE2NyszdCs5Zjd2T2VjNS96T2VjOFBnQkVTSnBIbW9tb0FPVktGUERyWUg0OVBTTVRKdllBQ0ZVamdCQ0FRNXN2Q1p3WEZBQUR3QTNsNGZuU3dQL3dCcjI4QUFnQncxUzRrRXNmaC80TzZVQ1pYQUNDUkFPQWlFdWNMQVpCU0FNZ3VWTWdVQU1nWUFMQlRzMlFLQUpRQUFHeDVmRUlpQUtvTkFPejBTVDRGQU5pcGs5d1hBTmlpSEtrSUFJMEJBSmtvUnlRQ1FMc0FZRldCVWl3Q3dNSUFvS3hBSWk0RXdLNEJnRm0yTWtjQ2dMMEZBSGFPV0pBUFFHQUFnSmxDTE13QUlEZ0NBRU1lRTgwRElFd0RvRERTditDcFgzQ0Z1RWdCQU1ETGxjMlhTOUl6RkxpVjBCcDM4dkRnNGlIaXdteXhRbUVYS1JCbUNlUWluSmViSXhOSTV3Tk16Z3dBQUJyNTBjSCtPRCtRNStiazRlWm01Mnp2OU1XaS9tdndieUkrSWZIZi9yeU1BZ1FBRUU3UDc5cGY1ZVhXQTNESEFiQjF2MnVwV3dEYVZnQm8zL2xkTTlzSm9Gb0swSHI1aTNrNC9FQWVucUZReUR3ZEhBb0xDKzBsWXFHOU1PT0xQdjh6NFcvZ2kzNzIvRUFlL3R0NjhBQnhta0NacmNDamcvMXhZVzUycmxLTzU4c0VRakZ1OStjai9zZUZmLzJPS2RIaU5MRmNMQldLOFZpSnVGQWlUY2Q1dVZLUlJDSEpsZUlTNlg4eThSK1cvUW1UZHcwQXJJWlB3RTYyQjdYTGJNQis3Z0VDaXc1WTBuWUFRSDd6TFl3YUM1RUFFR2MwTW5uM0FBQ1R2L21QUUNzQkFNMlhwT01BQUx6b0dGeW9sQmRNeGdnQUFFU2dnU3F3UVFjTXdSU3N3QTZjd1IyOHdCY0NZUVpFUUF3a3dEd1FRZ2JrZ0J3S29SaVdRUmxVd0RyWUJMV3dBeHFnRVpyaEVMVEJNVGdONStBU1hJSHJjQmNHWUJpZXdoaThoZ2tFUWNnSUUyRWhPb2dSWW83WUlzNElGNW1PQkNKaFNEU1NnS1FnNllnVVVTTEZ5SEtrQXFsQ2FwRmRTQ1B5TFhJVU9ZMWNRUHFRMjhnZ01vcjhpcnhITVpTQnNsRUQxQUoxUUxtb0h4cUt4cUJ6MFhRMEQxMkFscUpyMFJxMEhqMkF0cUtuMFV2b2RYUUFmWXFPWTREUk1RNW1qTmxoWEl5SFJXQ0pXQm9teHhaajVWZzFWbzgxWXgxWU4zWVZHOENlWWU4SUpBS0xnQlBzQ0Y2RUVNSnNncENRUjFoTVdFT29KZXdqdEJLNkNGY0pnNFF4d2ljaWs2aFB0Q1Y2RXZuRWVHSTZzWkJZUnF3bTdpRWVJWjRsWGljT0UxK1RTQ1FPeVpMa1Rnb2hKWkF5U1F0SmEwamJTQzJrVTZRKzBoQnBuRXdtNjVCdHlkN2tDTEtBckNDWGtiZVFENUJQa3Z2SncrUzNGRHJGaU9KTUNhSWtVcVNVRWtvMVpUL2xCS1dmTWtLWm9LcFJ6YW1lMUFpcWlEcWZXa2x0b0haUUwxT0hxUk0wZFpvbHpac1dROHVrTGFQVjBKcHBaMm4zYUMvcGRMb0ozWU1lUlpmUWw5SnI2QWZwNSttRDlIY01EWVlOZzhkSVlpZ1pheGw3R2FjWXR4a3ZtVXltQmRPWG1jaFVNTmN5RzVsbm1BK1liMVZZS3ZZcWZCV1J5aEtWT3BWV2xYNlY1NnBVVlhOVlA5VjVxZ3RVcTFVUHExNVdmYVpHVmJOUTQ2a0oxQmFyMWFrZFZidXBOcTdPVW5kU2oxRFBVVitqdmwvOWd2cGpEYktHaFVhZ2hraWpWR08zeGhtTklSYkdNbVh4V0VMV2NsWUQ2eXhybUUxaVc3TDU3RXgyQmZzYmRpOTdURk5EYzZwbXJHYVJacDNtY2MwQkRzYXg0UEE1Mlp4S3ppSE9EYzU3TFFNdFB5MngxbXF0WnExK3JUZmFldHErMm1MdGN1MFc3ZXZhNzNWd25VQ2RMSjMxT20wNjkzVUp1amE2VWJxRnV0dDF6K28rMDJQcmVla0o5Y3IxRHVuZDBVZjFiZlNqOVJmcTc5YnYwUjgzTURRSU5wQVpiREU0WS9ETWtHUG9hNWhwdU5Id2hPR29FY3RvdXBIRWFLUFJTYU1udUNidWgyZmpOWGdYUG1hc2J4eGlyRFRlWmR4clBHRmlhVExicE1Ta3hlUytLYzJVYTVwbXV0RzAwM1RNek1nczNLellyTW5zampuVm5HdWVZYjdadk52OGpZV2xSWnpGU29zMmk4ZVcycFo4eXdXV1RaYjNySmhXUGxaNVZ2VlcxNnhKMWx6ckxPdHQxbGRzVUJ0WG13eWJPcHZMdHFpdG02M0VkcHR0M3hUaUZJOHAwaW4xVTI3YU1lejg3QXJzbXV3RzdUbjJZZllsOW0zMnp4M01IQklkMWp0ME8zeHlkSFhNZG14d3ZPdWs0VFREcWNTcHcrbFhaeHRub1hPZDh6VVhwa3VReXhLWGRwY1hVMjJuaXFkdW4zckxsZVVhN3JyU3RkUDFvNXU3bTl5dDJXM1UzY3c5eFgyciswMHVteHZKWGNNOTcwSDA4UGRZNG5ITTQ1Mm5tNmZDODVEbkwxNTJYbGxlKzcwZVQ3T2NKcDdXTUczSTI4UmI0TDNMZTJBNlBqMWwrczdwQXo3R1BnS2ZlcCtIdnFhK0l0ODl2aU4rMW42WmZnZjhudnM3K3N2OWovaS80WG55RnZGT0JXQUJ3UUhsQWIyQkdvR3pBMnNESHdTWkJLVUhOUVdOQmJzR0x3dytGVUlNQ1ExWkgzS1RiOEFYOGh2NVl6UGNaeXlhMFJYS0NKMFZXaHY2TU13bVRCN1dFWTZHendqZkVINXZwdmxNNmN5MkNJamdSMnlJdUI5cEdaa1grWDBVS1NveXFpN3FVYlJUZEhGMDl5eldyT1JaKzJlOWp2R1BxWXk1Tzl0cXRuSjJaNnhxYkZKc1kreWJ1SUM0cXJpQmVJZjRSZkdYRW5RVEpBbnRpZVRFMk1ROWllTnpBdWRzbWpPYzVKcFVsblJqcnVYY29ya1g1dW5PeTU1M1BGazFXWkI4T0lXWUVwZXlQK1dESUVKUUx4aFA1YWR1VFIwVDhvU2JoVTlGdnFLTm9sR3h0N2hLUEpMbW5WYVY5ampkTzMxRCttaUdUMFoxeGpNSlQxSXJlWkVaa3JrajgwMVdSTmJlck0vWmNka3RPWlNjbEp5alVnMXBsclFyMXpDM0tMZFBaaXNya3cza2VlWnR5aHVUaDhyMzVDUDVjL1BiRld5RlROR2p0Rkt1VUE0V1RDK29LM2hiR0Z0NHVFaTlTRnJVTTk5bS91cjVJd3VDRm55OWtMQlF1TEN6MkxoNFdmSGdJcjlGdXhZamkxTVhkeTR4WFZLNlpIaHA4Tko5eTJqTHNwYjlVT0pZVWxYeWFubmM4bzVTZzlLbHBVTXJnbGMwbGFtVXljdHVydlJhdVdNVllaVmtWZTlxbDlWYlZuOHFGNVZmckhDc3FLNzRzRWE0NXVKWFRsL1ZmUFY1YmRyYTNrcTN5dTNyU091azYyNnM5MW0vcjBxOWFrSFYwSWJ3RGEwYjhZM2xHMTl0U3Q1MG9YcHE5WTdOdE0zS3pRTTFZVFh0Vzh5MnJOdnlvVGFqOW5xZGYxM0xWdjJ0cTdlKzJTYmExci9kZDN2ekRvTWRGVHZlNzVUc3ZMVXJlRmRydlVWOTlXN1M3b0xkanhwaUc3cS81bjdkdUVkM1Q4V2VqM3VsZXdmMlJlL3JhblJ2Yk55dnY3K3lDVzFTTm8wZVNEcHc1WnVBYjlxYjdacDN0WEJhS2c3Q1FlWEJKOSttZkh2alVPaWh6c1BjdzgzZm1YKzM5UWpyU0hrcjBqcS9kYXd0bzIyZ1BhRzk3K2lNbzUwZFhoMUh2cmYvZnU4eDQyTjF4eldQVjU2Z25TZzk4Zm5rZ3BQanAyU25ucDFPUHozVW1keDU5MHo4bVd0ZFVWMjlaMFBQbmo4WGRPNU10MS8zeWZQZTU0OWQ4THh3OUNMM1l0c2x0MHV0UGE0OVIzNXcvZUZJcjF0djYyWDN5KzFYUEs1MDlFM3JPOUh2MDMvNmFzRFZjOWY0MXk1ZG4zbTk3OGJzRzdkdUp0MGN1Q1c2OWZoMjl1MFhkd3J1VE54ZGVvOTRyL3krMnYzcUIvb1A2biswL3JGbHdHM2crR0RBWU0vRFdRL3ZEZ21IbnY2VS85T0g0ZEpIekVmVkkwWWpqWStkSHg4YkRScTk4bVRPaytHbnNxY1R6OHArVnY5NTYzT3I1OS85NHZ0THoxajgyUEFMK1l2UHY2NTVxZk55NzZ1cHJ6ckhJOGNmdk01NVBmR20vSzNPMjMzdnVPKzYzOGU5SDVrby9FRCtVUFBSK21QSHA5QlA5ejduZlA3OEwvZUU4L3NsMHA4ekFBQUFJR05JVWswQUFIb2xBQUNBZ3dBQStmOEFBSURwQUFCMU1BQUE2bUFBQURxWUFBQVhiNUpmeFVZQUFBYVJTVVJCVkhqYTdKbGJiQnhYR2NmL1oyWm5kbWIyNmwzdmV1MzEyazdxV0lsZHk1U2tqaFZLbTBSY1dxb0lWQkFQcUtoQTgxQUVqNFVVaFpjaWtGSUNVa0dsS0R6UXQ5SW9Fa1doVXBPS3VrblRrcWFOVXFlNTJJa2RPMTdiYTJlOTk5M1p1Yy9oQVlGd3N0N2RzV09lZktSOW1UbHp6bmQrMy8vOHY1bXpoRktLUm0xUnpRblVZbHBNWFJ0bUs4dGZadlJpVjhYVGRvYVRQR2RFcG5LenpidXRnczFXdDVGNm9DOHV6UGg2QS96dWFrWFpyNlZuOXBVV2IrMjZQclhFVGkrVTZJNFl3L1QwYmtsN3VuZThRNkpiM2xaNTdrSkZVNmIzUkxmUlRhd09RVStuSjU1WHI0Lzk0b016bDBRcXFZaHNiVU80TFF4SjhHTWhMMk4rNGlwSzR5bDBkOGF3KzhuUGo2WWVlUHg3ai9yYTV6YXgzdHRjdFM3TzVPZTR1RTk1VEw5MTRZZS8rczAveE1od053NDlsVUQ3MkRqdzNqbllYZ1lQUTRLNXF3OXY5Ky9Fa1Y5K1RMT3BhM3NQdkJqL2RsSmkvOURGUnRWTnRBMFVmVG41V1NnbXVRNWFxZkZuWDM3MS9UNFNNUERTai95d2o3NEw1YlZMc0V3YjJXRTNvdWMwV0QwZXlyMzRhUEZLenlDT0hwa0lQbjJnTTdYdnFTZGZmN004OE1kbmVydW43NW5zaGIvL1p6SlNJNVo2OXhxMTlUeTcxcmxxOHZ4dnB5TUhWdHhnN3U3cHRrc0JaZWJDb1VPSFQvYWQvakNOSHp4ZUFINTNFdFZYTGtJM0dOUDJDeFZQRWpvSmlySjlXeWI2ejk3VmR5bGphdjl3R0lkZnV0a3hldXlWNTZYazZONEdnZEFhQVpNbUZuTDNncWxEUUU1K2pSSks3a3BzM1NTdkFQM0d0VG5lRGV4WnpoUUN4MDlyNk50QmtMQUx3RHNwaUFBRWx1Z3VteW1HWm5YRjhBdHBQOCtEVGVrKyt0NjhzdTl6ZXU1R09velJUeTNFbEN2RFB6bjdpYTlSMW1zQXFIY05UU2lKTnRtM0ZpVGlRTW5VNlU1YUFUcHFKYi9RbmgxOXdWS3kxUFR3Y1BzcG1Lb05HQlFzUUFYTmNnbWFIU0lCanlnVTlURERjUkFBbnMzYmpHQlROZFRLVTk3cm9iMzIyTGY2ODJlL1dVZFZ0UlpHVm9HQURiSVpKN3VEMWtpSW94aFdGRU8yT3QvSjVjNG5YRG5DZW9JeExOMVdVT0JaeExiNmdadGxvZzRsT09YWkVZNUliakRYc3h6LzhtbEtKSTdGQTc2T0d5bUNzdWtpN2VHcWFXVm1CYmMxTmJDS212NFg5bjJ0Tnc3R3Btc1llN1ZubXdLK0FyVEhaWXN5RThwR3VPdUJ3VVFZSDQxeCtHUmN4WUZuMmlEM0I2RjJob2s5NUFQclptRjB4aUd6dytERktuSnhjSDk5WFlOaXN0amVXYVNtTzVpMXlveTV3Y1dJcktJMko0a2tEbXRDSS90YkZmZ0swREZqN3VHcWJLaCt6c0RlN1JtYy95aUJWMCtrTVBoWUZmNytHRXJ2endKbkowSENiaUJqb3JnemhuWU9PUEdHakpQblJUd3lvR0NMbExLcVJWOHhhQ2E3SFBvcFhjZENuZGdMcVRFV3JRT2VPdHdSTmVkZEFicEkrY1d3VVpDc2FoVmYzYjZFWTcyZE9IV2xFOVAvdklyOXNYRklJMUdZY1E4UUZjQkFnZlRXRlZnZnEvaUFIUUZDUG54OTV5UmFSZHU4bzhCYjVpSzVKb05wMXV1YWZTVmNTMUdyQjVBMHNaUGdTTkZwZDg5a1I5RG5JaTJENmtQeU5QZjlrU1Q3MitNZE9JY3dFbmtWK2ppRk9DdkQ2bkxCbmpKaDZpSGtVTUdFRmNUUWpqU2U2RXVEanorb0NnWGJWOGhGcHUrREt2K2Y3ODVrRGQ2OXRpOURSaXRIV1YyMVM0WjZzNFVWdGozM1NGSzh0aHpEbno3YmhaUE1OdGlhaEJHeWhFaEd4NmNGRVZOTUVBV0p3SWo3OGRyK2k0Z0hDWmJ2eVBteXhvbHVXMDlzNEdKb25TSzFIbThtRGkyczZjSzZBblRHTk9iVmxvVE9aNmVsa3ViU1duaUZPL3FOcTdqeGxRaDdhVGxpRjdRb0h2UVYwSVZGUW5QYkVTaEVxTituTUNQK0NYTjNmRUhPS04wa1ozTCtXU00ydDREV0R6ZElsWTI4ZHkyRmtEaFVmajNyYUF6NlZrWDRtNG5CMEVNdDRZTUJiZEpmV3F4a29uUkIzN3BGRnA4WTBBbGxsbTFMMTB5cUJ2QkZMeVhFWGVWUXV1VXlzbk5WamVtc0VuZVBPTFVZbkxxdFJYK3ZSWHZlM09EUDMwWUZpZHhQVVBmVk9uNzZ0ZTlveDg2ZStmT1NFSkhhUE1aekxNZTZqR0pXcTRJeEJOMFFXSmpFa25wVjZ2VmFqTHJBUVMxWnV1MDM3T0NRS1FYYVhCSW85Sngvek92ck9YWDR1MC9URFZBemNaZ01KMk0xcS9EMVd3Y0FpQzRFNHE3Q2x6eU0xU0VIRXZOY29JY1NVNmUya2lPMlVnWmpLQ0lEbTFpYXBWdVV5dkIwR0VRTVFyVVpVc2dyWVlrVjlpeEw0VFlBTS9kRStPK0RsbzArK0NIclNCSlpaNUtiQjUyVXJWSXg3ejJSeUJIUlRjb2RpU0J0RGJoVWlTR1VzQkIwVXN3enVxWXp1c3V2MlpUMzZlVUtrOU5NTzFrUjB5bFpQTDdJaFA5Q0pDbTFlVERhNEpnVUFINTk2aTFHeWt4RmNybHNiMEM3TTJSVUt3T0NaY1F0YWxQUk5sdE5HNnhNMlVsRzlKaGxpODlXcVB0eXU0KzU3QTdGYnYvNDRNODMvOWFxMGY0MUFLSzZDZFJ3M0NTcUFBQUFBRWxGVGtTdVFtQ0MiLCJub3RCZWZvcmUiOiIyMDEyLTA1LTI5Iiwibm90QWZ0ZXIiOiIyMDEzLTA1LTI5IiwiZmxhZyI6IjAiLCJpc3N1ZXIiOiLNs9K70MXIzs34wuciLCJzaWduYXR1cmVYIjoiMzg4MjM2ODFGOEQwMDQ5N0I3QjQzN0I2MTYwRDhEQTkzRDNFNTkwRDg3N0MzNjk5REY4OUE1RTkyNTg0MUFFRiIsInNpZ25hdHVyZVkiOiI2MDRFMTNDNEFCRjNCRTdBNTQ3QzUyMTREQkRFQ0IxOTE0RjI2N0Y5MUY4NTgxQkEzRjdDQkY0QTU4MzlDODE2Iiwic2l0ZUxvZ28iOiJpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRk1BQUFBVUNBTUFBQURHTWZIbUFBQURBRkJNVkVYLy8vK2pBUUVBQUFEcTZ1UE9iM081dWJYOS9mMEJBQVQ5L3ZWb1oyYkZ4Yi9hMnRicXQ3U3BxS1VLQ2d2OS91MlltSlhJeU1WNWVYWUZCUWJQam83ei92MmRBUUVFQXdtcEFRR3VMRFAwOU9zVEVoVEhlNEQ5L3VKRFFrTWJHeHNrSkNMZHNhMzUrdTRBQUFMNzZPaisrLy81K3ZIRVRWU3lTRTh6TXpNcktpdmo0OTM2K3ZuNStmVDkvK244L1BxTGk0angvdlRWMWM0Q0FnUDQvdjVMU2t2KzlQVDUrOXhVVTFLeEFRUHMvdnppa0kvOS92ZzhPenYrLy9ELzlmNm5DQk5iV2wzNzJ0bUVnNE9MaTRTL2IzQWNIQ0NrQWduNi9PMzYrL1grL3ZLMHRLNnRIU2tDQWdENDVOenB4TUVFQXdHbHBaLzgvZkQ2K3YybVFFSC8rUG4zeHNEKy9maURoSDMzK092Mjl2QUtDd2F0QVFxVkFRR3BGQjM0L3ZuNCt1Z1JFZzc3L1BQNysvR2VLQzR0TERCMGRIRDcvTy84Ky9icjE5bjgzK01OREJEeTgrYjgvdlBHWFdYNy9QZENReitkQXdreU1pNFZGQmp1N3VtVGxJLzY3ZkM0UUR6ZHg4YWRDeGJLZjNaa1pHRCsvUHNsSkNqZnZiZjYxTTBIQmd2LzgrdzlQRUNhQndGSlNrVlNVazc3L09paEJnSWFHeGROUzFFaElSK2JGaGVOQXdZckt5WUhCd0wxeU04QUFnRkZSRWZXWVdGQlFFUmVYV0ZVVTFpK01UU1dBZ3haV2xZd0x6TVFEeEVaRng3Mjl2aTVZMmdEQWdZNU9EemUzdGsyTlRjRUJRQ2lDQW1KR1JjZ0h5T2REQXorNytILytQTGtwcVd5TlVMZWVuLysrKzNZbnAycUJRTTVPalhEUGtVQ0FBTDMrZVFvSnl5MUlCL2swc25PenNaTlRrcFdWMUdIaDRXOXZiK1ZCd0dzQ0FteXNiSklSMGxXVmxRTkR3bTFYbHNIQndlSmlJb3VMaTRORFF5VUNRdXVycXVHaFlxa0ZBZU5pNDlzYkdtdXJhOGZIaDJkbTZDU2taTmlZV1QvL2UrUWtJelQwdFdURlE0ZEhSeFlWMW1Oam9uUHpzeHFhVzc5K3VrQ0JBS2ZvSnJyenM5UFRrNC9QejZ0cnFaZlgxeEdSa0ErUHpyKysvSi9mM3Y5L2Z2eG82U2lHeU42ZVh3RUJBUVZGUkVYRnhWUlVGT0FmMytIaDRHaW9hTHc4TysrdnJsd2NHeDBjM1RQM09La0lRL3ZwNjRZR0Jrdkx5b21KaWJuMzhwR1JrT2NuSmdoSUNZMU5qSDlSN1dsQUFBQUFYUlNUbE1BUU9iWVpnQUFCSVJKUkVGVWVOcXRWSHRNVTJjVVAvMkt2WmVDQThMRHltT0VzaXJLbFlldGdxemlJMHlnQXl3VUpEQUlyQzZJRzZSdUVHZUVMVTZrbVVhMFJyWUU3SWd6ZE1zMlpXTmt3Smk0eXBRZ2dSR0d5QmdQTFlZTHJWb1FCWUcwc1B0b04xbmlQNHYzai91ZDh6dm4vTzY1NTN6bmNPR2xQYVVUWm9uU2FSZ0F2VFJLVVVzS0o4WmlJWjduRE5YYUJBSUkza3AzU2cybERwSlJWSXpNd3VRL2pwNUJIZ0VrdlBhcDRDMkpoR01IbzZmYzJsZ3Bub0JITll5RXo3T0lPdVg0Y3FQL0h5bHovSWN3YmZYenY5L0l3TXJESHpUYXc2OVVoRzB2ZEpoMDVpTm5BWmVGaE04cWoxaWFwY1FROEt5ajgzV3ZkMUpZL2paeUdyZFE2ZUVYa3kvV05uRWpMRWI5MkZpa3E1SGNJUFVKR01JdFBiRXhJd1pieXIrZTFwSG52OVplSVY0ZDcyYzRsY2F2dEFOWk12NndQRHoxWi93ejdSSk55YnNWTzI3MG13TFE2ajY2TUpsdzU1ektPcS9YN2Z6dHg0L0hFNFNFUHJCMW82SXpuenZaUFV3eldQSFlKY2Z5Q1VQVWh2WFBScG12YkJlTEU5Rk1DUVlIeEcrRHFueVJ4cVQ0SXNMRWFvQzRCbkZnelpvQ2tsZFlKSFpIS3NpUUkxUWpmc3luZkI1aUVUY2ZzNGxtSFkzeUZIQjI3T1hZaXJsTGp1UlNOVW4xQURmaFV1REhNR2k1V0tPaXNzVWZvY1E4Q0tFN2tvZE1hZ0tFMVNoUUdFMDVLS0s3VVFRV3pmNzc0YlRka0pORENqbGxPeWcxRXpTWWs0eHRZQWpXQytER0ZENnVEY3QxOHl1RS9kVlloczZQc1E0SEZsUHZnZ3JrYm12TUhvMlB2VWZ4U1JNOHYxaEYydFZZaFFoQzE3a2oyR1N6TUp6c2MxSXpCUXFLNnlTS2dZMHNKeUFxM2ZncS83Wm1rRVhMWkxMTE43QkxNcHU3WkNjSDNzK1hLT0NzWnc1YUxYTjRWOTNIekFFZWZNSTNJVjBVdklyV3R1MDlBaTRGMExCcThXcm9uZXZ3SHNIajRVbFVsNThjY0VqK3hTYzV1enZWTEQvdGE3YW4wQVhIZ3pSMVBJUE0vMEUvTi9sYXlFemNzTzZkcklZVzhVenRsc1RFeXJsNncvUkNiZ1p4RTV6bWJzOXMzVFZ2VFA5MjFMM2RLdThUZ1JFbXJkKzNLSnJxTUk4M1B0eDl5UEhMd2JzVjdCU2hJTitPMHZWSnN3K01DNVRhakNFVFFuSWtQcU5INk5pWlJKTUpZWWZHQTVVRTRQVzVWU2I2cmgxajRsd1EzUkFwRjZITUZDa050S2dkUzFUMm9lSndCRjYzQWp5and1MnBYNFpDUDlDdmNjTHVJcGVHTUFySUU4dEliWXEzdElnZTNtRG13b2h3RFZPOTZNQUJKUnZGVmJwTUY1ZmFPZllKdkNRNTRlazhzTTFSajd4S0hQYmRsdDg5UnQyS1ZuZU5BWXh5T2gydlRZMTR2NUxOSDhodGE2UEg1ZW5DcFIrR3FOUFFIamFZU25lQVdKemRwM1BWV0ZnSzhpY0gyWTNsWHQ1OWhsTmtoa2hsV3ZWVWdPbUpXZFM4RkZPMkRDQmJVR1J2enRTWXlyNnBEMWtXZEZncHQ5UjFSNzFwVHBnbzc1dHpNNHJNQW5lUDJ2NzVhY1NTVm95NGRpeHZGYllDelVtVzlFMGN2TkRyUERnd3VYeXEyM0NkTS9ZWGxGWVo3NTN2S2JOWXJQZk1lVjhZQ0NNVjFEKzMxdWMySGUxKzZwT3prZFdaelc3dFQ3MU1FL3l1U2xzbFNNZURIclBVWmVTczNHclltM1gyZFlURC9FcWJhaVowOHg0V2szcnF2ZGN1c250czArZk80WGp4aVJjdlZqWHdYbWdqOE1oRS9GOU5haGRVMEpxOC8zK3Y4dEQvYm1wbVZBQ1hOdjM1dk9Gdk5CNlJrU1h2dHNnQUFBQUFTVVZPUks1Q1lJST0iLCJzaWduYXR1cmVYMSI6IkIyNzY2ODE1Nzk4MzJGMjNFNzJEQUZDRDYwNEE2MTJFMjFBNDI3NzQ5REY4NTgzQzdBQjRBOTJEM0I0MDA4RDAiLCJzaWduYXR1cmVZMSI6IkU5MUZCMTY1OURCOTREOTUyN0ZFQjI1RTVDNzE5QkFBNEVDMzc5RUYyOENCREEzQUZEMTg4NjVGRTQ1Q0YzODAifQ==","simplecd.me":"data:image/x-icon;base64,R0lGODlhEAAQAPcAAAtDfdfZ157SGiNswn2Qqv///+L77XioqE+ATNX2WV6RuLToY0uFmqXTwyhhln6uTUWEwKDJjFGV6CVkrczMzLPoDHyrd0h6dOr7bChZi6issleNvoq/2G6GoFGR2oO3MTZheit0zH6shLbj3mKVaxRPjp+0yu/9jPf39z1srF16mjZztT2D3W2q6iJZna3hjTdjn+Pl4oulwVmX2JXMRqOko57P+2OVT5zWIVOQy7ftLWaEsF6Wf2Oh31iSqj6G2WWg6PDw8Jyioz54rTNqth1OgbS7xIK7N8vxabDlDBlVm1yVwjl6xLe3t0JzhzJZgjNjooOtrUyEiuD4YzR6zUF1rlGEV/v+n1aLrUqN3tje4XSLqzRnkzFyv0qCzWCKmmCb4Gqia7TsDb3wb2KQZV+V0SVZlmGGspeswPX87BhRkxpXoWOk76fbEqnQzSxhoIKxU16e67Cyr3a08kRqlzt80TBorc/X2OTk5CpsvClfpbPjj0eL2GSbxUZ3ed7f3e/371t6p+L5b7btCjl0qStalTN2zTNmmVmFV22l4TR609LZ32GUsUWEwp3Jl+v7bXKGmxpTjT16uEKH3Y6oxGOMrWOk6i5sviFSnLW1vU52sDB0x2OJth9doQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAQABAAAAj4AAsIFBgEj0E8QVAMXBjkTqAMAAAUOqNFIUM0Rb64MZBmxAYzJoIMRCGjRJQrJyLsaWCDwxpKFhepqeLokaAxGF4kmrNEzaICKDhNODRmypQFSA4AAQKB0BkUQd50iUQjgVURZSz9GODjTZAgSjZ1QqADjgUFM/goCtHIxVcXhvI4OGLlghQGkphQqeM26iYqTIbwCOPnBiIuK5hASRjoEossHnIw+CBGjAASdgKhQGFEzyQJcXpgEVA5iZNCRghuIZKFTYs+ZNpUQJShg0iBfwik8AImEaMHIJ5ACrCwAB4NOzSlgEFHhZA/xQWioNCkRg05FCwKDAgAOw==","so.1ting.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAcZJREFUOI2FkbFuE0EQhr9d+05nJzImGAQhQEQKJEuJREdLg2iokxLlBZB4AnqkyxsEUVFRIwo3UUQqJJKYUCCRM2CRBPlsbCd3Pnt3KeAiX+4sT7ezM9/8/4xgQrieMgftMJGrXnZ4vpgT4zlxsQmg7odEBpq//xDpEb3BiEd3ygR2kaVZKwGR482fOxF1P6TV6XB0fEykI32l32etYumP9Z9cGnQ5OBMJWfnxx4+Ao0LQua6GQzCSaKTkyrUZ7t8qSado8e7kFCzjrO9F0eaKbacsvDg0p7tfvxd7Ct2PRrLs5PWze2X58HZJ+8FQ3ihaOla9/oVfr6pi/hzgespULMVdMeBkoImUZnWpnFjinh9S69nsnsnW66qopCxsNdqohRmeLpb+TzIahASjDULWejYAcXMKAPDBa7N6sygLUgBC7vgjbGHkVjeXOmEmAKAghQbkRuPcMqWKzCpNA9b++ZYbDZ058WIksNX5Cp2hntaTDYinNZhNFLieMq6nzEvPvMkCpCS6njL7fsjynAPAdrPLt1z5/acH4vFUC7GS5TmHfT+kdtjCD4Y8ucrbSRYyrxDbcT1ltptd8oJgEmBqxDuY9P8X5C3Fm03V9t4AAAAASUVORK5CYII=","so.56.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAJdJREFUOI3tkMENwjAUQ9+vUCboKYtkjb9OJug6XcOL9MQEXMoBBUL4pXeEpUhR7O9vB/6wdrkuy35b1w9Bcmeu1SJNlswAtlL2yL0fHjVZMoDLONQIACS+DQNMo8FWyt5Oix1p2nvY7QhZsj5Ncn99YrQlMui55P6o0Ec+w6g7rZAlO+KzZBPAXKsl9zcyuT8jj3zP/QDuy7haePMLdCMAAAAASUVORK5CYII=","so.baiduyun.me":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAP8A/wD/oL2nkwAAAkZJREFUOI2dkktIVWEUhb99jucmappaaoWhVpoOnAimkFQUVERQNGjSQEdNmlhUowY1CCwIykE1aRRhL8ogEgwKoUF60RLBiY8oMXvce339nnOunrMbmMjNjOiHNfhZa6+9YS06OztzjDFtnuf5vu/rv8DzPN8Y0xaNRnPEGNNm2/YJ/uMFQfBAXNf1RSTyPwaqmkwDiaimEvMhvPxoMRCziNjQsClgZ5H+wUIi4rpuCqMK13ug75tQnC3MzUPcU05WKQdKV1pYqotDSxhNhHQMutRtSHKlIeDanoAcfO72eKgqv+stUJagiQTm7TuyhwYoW7sAgGNBoeMzFk/S/0NIBst6UMSYOQXoGA54+N7l4pPzbJ4cY3JHNXNnL/Bd07nZJ3ihBUBuOpyrhe25i38xxuhIPKCxfY6KfIurhUOs6e3G3H/EneLDtO9uJC/T5nRtOo4Frd0+GY7SdjwT2xLSVOHNiMd43HDrUB7rCquhtprhrl5el9VjXI8bB3Op32ID8DkBLV2zjMTT2ZafRpqqYmlAbNrjUyJJZYGDvxDSXN5EnxRwe28mdcUOS1HvK3MYnHDYmCWoKjIzM6sxE1DTOkYyVI5WZfLhi0//xDyX9udypiEnJbaYC69GlWMVQsQWLFUlL8PieVMRlVuzuDcW8NVxaDmynuZd2StiG5zwufxinJgJFi+YmppOqXIYKiIgIn+rMCKCqiatMAyeLhZEfxHLotWwxIdh8MyuqanpLCkpLRWRchGxV12bekFSNXwcjUZP/QSDYmz/rzanVgAAAABJRU5ErkJggg==","so.baike.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABXUlEQVQokY3ST4iOURQG8N+9943FpFEyISVZqFnYIAspSklZWWgUalJfdl/Jjo1iMdnOQtkNwoIpY4GFyEJKyoKFhckoi9GkGeze97sW7+v7Y4zm6dnc0/Oc53TuCTlnd4etEmOLId9ev1o1KHTif1vOKYbkUijc2oCoswK3n3RqQShMbXRzM+p6VNVMAxxt2z/pzRVT21TJmW+olYUqQe4bY3iHPZc8OGzhg62HHL0DN7YICV1D6BlOvPT5mfmPzn2FJy2zjymEjKhMA2x9gpmzjt2TO5a+OHjN8UddwWBCWisWru9WJfdPN4Hjz43sUqU6oVD2Gdrv4ddPUqNuvbBuk5m28p8GTB5oKuPTRnbCxCjoGpqRoguvYGmRAp5O+DHv+1zzROgMbmnNkHcPVX8+fvYt6LuDEGpDhL1jMH25N/1yNAn1LR05j1775YhRLhFyzi7uW1H3F66+/g3vPINrw3y1XQAAAABJRU5ErkJggg==","so.cr173.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9klEQVQ4jWNgGAUooGC/gUDNfiOf2j16EWXb9dQZGBgYHBoYWHK32WoR1Nxz1K545ln3D9nb1X44Ljfc67tWd1ftPuUzVVsUt1RvdF+GV/OUk55Vt9/v/h+6ye6W5XxLDZi4w1IDg7I9Kq+T1joswam5Zqe64rmXy391H3P7E7TC2Ahd3maFQaj9AqvFDAwMDGmb1UTKdyr11++RX5yzUTHGoYGBhaH1kHrpupsF/2MXKp7AZoFDAwOLQwMDi8N8BY6MzWpmpTtUUhr3KQVX71S4F7lSLYCh6YDKwpaDGv+DuhRmYDOgdLtiaNgm/ffOqw2fOK40sI7borXSeaHO+eDlWoYMDAwMDLX7lDeW71H7Hz5RcTYOXzKGbTR4k7Zd+3/qZvVo67nqvCqTVNjhsoV71Dtydmr+j12i9sx4JgMrNgMydmi9Kd6t/itlo6I4hmzsJnXFuK06P8PX6/4PWqReg6GggYGpYq/au+Ldau9DVzEwY3VjyHqd4tBNBv9DVmr/DV+iMSlhtZZtyjpVzfytmq5N+5W3tx1S/l+1T+V70kZ1XhzeZGAwX2ji779O71LGFrV/RZuU/xdsVPqfslnlacQGrRL3FQb+7isM/H1X6BkxMDAw4jSEgYGBQW+2uYzVElNT0wXW2iWLSrhDV4VidzYUAADa9LS0UGU18wAAAABJRU5ErkJggg==","so.iqiyi.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVQ4jbWTwQqDMAyG+ygehea2kycfQrYHEbbWnsRXGFiDnjwNxvDibYed9wB7Dh8hO2yRThSUskBoS8KXnzQRwte0DQNTQ5410BVtREUbkWlg1jmeNdCZGnJtw0CYBoZpQtFGpBB6190Y52e1fIjvY9iqnAt7t0BoBFKVTE8oa41A7AqhV5VMNQIdyzDm071rBBoBCqHX+JG0BOB+/ACOZRivAahKXh2F9+0KrExGgJXJIoCIdnMABnOR/wHOt8PsLywCpvZ8XfbcqFVz4D2J3rvgu41vsG9tMDaoIaoAAAAASUVORK5CYII=","so.ku6.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAMlJREFUOI21k70NwjAQhR8/JcWNkB28gEfICKGh9gYxPVLSUiUlHWtEQpHoaNmAMAB6NIlFSDAJP09yc/L7dHd+BjyKoogAGAQBffd6VZsez+dmrfVwwE/NY2d/npkiMqoDAqC1lrt90oGFYfgW5AAFwTMNN4ntgOI4fglqAQqCBwpPF0tjTAuilHKQqa+lGypcxWKVHJFlmauXZdmEDHMfYAbBojLYriuk6dLVlVLI83zyvx30vULTsk8dE8YkUUS+SqH7ujVosO5GSKCASFkQvgAAAABJRU5ErkJggg==","so.letv.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAATBJREFUOI3Vkk1OwkAUx3/TCNONigcw1BA3zRixF5AjwA3kBMAJjCdATyA3gCPgBWoNTePGhMgBhLCZgWTqwtaQ8rHnrebl/T9e3n/g6Et8X6ufhbUVgGqpPD37jK6KoNQP6kATuAemwJtIwgGAmNT8dBN885WIArkfG90tiirpjoGWc2i91A+6OVlJd6Ske6eke6GkO4iNbgDDgwJLazsZORJJ2ALmwOPS2gZAbHTj5IC7FxvtAczWKy/1g/fY6Ho+r5bK01PHedorAHj5Y2FtZWF0/dxx5pel8gh4EUkYAewVEEk4ntT8/15J91kkYa+wZWUrBSXdEfCRtbex0U2AzL2Xx5dF298SKIi1ZuvVa/5PdszbIvWDIbATALT5u3w/NvphgxgBPZGE433mR1S/q3t0ftQUGjgAAAAASUVORK5CYII=","so.pc6.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQUlEQVQ4ja2RX2hSURzHf+BTMHraYg89xR6CvQQHosZkDBn4oA9BKxhjWNlg65+RDyExgmoIyYhGsJMs7KEFNza3iUM0uk5nThku3JwtEy3lOu7SXe9Vr9vL6elczAx62BcOh9/v/Pj8zu/7AzgOpYqH3d68bPDmZUNkv67LletdzTWcyLXrPSbn/ZDN9hdgLl2dGAoIJUtM9I+HxeQlViC+vDxC33meb7u4aFgDjEiP0xBoCbDERD+NX+9Wph7FJB+N9R6TEzAiHQ5NIf5r92xLwL1IeTO2L/dF+br2TkTcer4lvQcAwNvzRsCInLD3SOtcHLX0YC5dnRhkBdkYErLGkJC1xqUPfKXSyTCMqsOhKQBGZDnN6v5pYvMIVMtpVgcYEcCInHJo9ug9uTH78L8Ad9esUxTQfP6AJEpy7ydOHmoGDLjGVgAjol68wbozQe2XQqL75uqTGeVHjUoKR8j5o2ZKlORemlMvGf2AEfHmPvfRHMMwqpNv1CXAiHAi1w4AAIHC4eVBVpCfxaWFK/4D6dvB0TkAgH7XqA8wIu5MUNvYjPqRKuZPAwCAeaO8vpCtmQEAVvdqV5PCEQIAGA9MTgNGxBx+YVXG5b930bUqxNsRcduTk40AADvF2gUKcGeCWlr89uvSsDsT1J6fHwkDRuQa+9iuAF4lqzMPouXoR04evh4Scq6f9VsNRnqaN3DmnT6V4flOBcDzfNvLHcluiYn+2VTNxjCMqtE066bDPOAaW+l3jfoskemninnHod9asVv3rmSJ4QAAAABJRU5ErkJggg==","so.tudou.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAADWmhww1poc/9aaHO8AAAAAAAAAANaaHJ/Wmhz/1pocj9aaHBDWmhyf1poc/9aaHP/Wmhz/1poc39aaHDAAAAAA1pocQNaaHP/Wmhz/AAAAANaaHJ/Wmhz/1poc/9aaHK/WmhyA1poc/9aaHP/Wmhy/1poc79aaHP/WmhzfAAAAANaaHEDWmhz/1poc/9aaHK/Wmhz/1poc/9aaHM/WmhwQ1pocv9aaHP/WmhyfAAAAANaaHEDWmhz/1poc/9aaHDDWmhxA1poc/9aaHP/Wmhz/1poc/9aaHM/WmhwQAAAAANaaHL/Wmhz/1pocgAAAAAAAAAAA1poc/9aaHP/WmhxA1pocQNaaHP/Wmhz/1poc/9aaHP/Wmhzv1pocMAAAAADWmhy/1poc/9aaHIAAAAAAAAAAANaaHP/Wmhz/1pocQNaaHEDWmhz/1poc/9aaHGDWmhz/1poc/9aaHO/Wmhww1pocv9aaHP/WmhyAAAAAAAAAAADWmhz/1poc/9aaHEDWmhxA1poc/9aaHP8AAAAA1pocYNaaHP/Wmhz/1pocgNaaHL/Wmhz/1pocgAAAAAAAAAAA1poc/9aaHP/WmhxA1pocINaaHK/WmhyPAAAAAAAAAADWmhxg1pocv9aaHDDWmhxw1pocv9aaHDAAAAAAAAAAANaaHK/WmhyvAAAAACCB9BAggfSAIIH0vyCB9P8ggfTvIIH0ryCB9DAAAAAAAAAAACCB9EAggfSvIIH0/yCB9M8ggfSAIIH0EAAAAAAggfSvIIH0/yCB9P8ggfT/IIH0/yCB9P8ggfTvIIH0ICCB9FAggfT/IIH0/yCB9P8ggfT/IIH0/yCB9L8AAAAAIIH0jyCB9P8ggfSPIIH0ICCB9FAggfT/IIH0/yCB9EAggfTfIIH0/yCB9M8ggfRAIIH0cCCB9P8ggfT/IIH0YAAAAAAggfRAIIH0nyCB9M8ggfT/IIH0/yCB9P8ggfRAIIH0/yCB9P8ggfRQAAAAAAAAAAAggfTPIIH0/yCB9IAggfRQIIH0/yCB9P8ggfT/IIH0/yCB9P8ggfSPAAAAACCB9P8ggfT/IIH0UAAAAAAAAAAAIIH0zyCB9P8ggfSAIIH0vyCB9P8ggfTfIIH0YCCB9GAggfSAIIH0UAAAAAAggfTfIIH0/yCB9M8ggfQQIIH0YCCB9P8ggfT/IIH0YCCB9I8ggfT/IIH0/yCB9P8ggfT/IIH0/yCB9L8AAAAAIIH0UCCB9P8ggfT/IIH0/yCB9P8ggfT/IIH0zwAAAAAggfQQIIH0ryCB9P8ggfT/IIH0/yCB9N8ggfRQAAAAAAAAAAAggfRQIIH03yCB9P8ggfT/IIH0nyCB9BAAAAAAGAEAABABAAAAEAAAARgAAAEYAAAAGAAAEBgAABgZAAABgQAAAAEAAAAAAACAGAAAARgAAAEAAAABAQAAAYEAAA==","so.tv.sohu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAmZJREFUOI1tk12IjGEUx/+7tWHt+MrXLrbIR+yUC7JZLjbN1ZZ8zYUi5IISUpLEha8SWTfbTkhqyLLWsPkWkRLCbFHG7NovZt73ndlhmVmzjY+dn4vZ2d3XOHVuzvM/v/M8zzknD5DNEt8n6P6tGj1/VKq+XqnbKtWk4l653C9VWbVZhY4/Nj0w6OdOV3P+jJdYdLgtboXLuOjxmTMEdTW+oWeDopPVHsLhY2+CzVeCH1tvkE67bRAQ8e6SHveCJPvWtdsB1xs9kn5JQhJLFld0/AYHTe8qciCpXlnlgsu1DRlAIqFsYr/HAZH4oU8SVLha6fo6wgZ58XSXOVvwLTZDwGlJFCgPSZBObwJE9ItCEoYcmBLUNRweCrHmCRovXNKaFSubJJGfqZ4eEHVlAWMxC4uxVALzl7ZjRuYC4ujeJ+xZG8zv6OwcK0npTFMiyrE80ZtSWkkZb59N/1wyOSBJmuWMRl+/mJP/S9KUQfWoXEA/RHEhqfTew92SpLY2Bz/7pO2rVvs9Ejs1gmESKZhjf8IYQhKs3dhEomfgD5JzpyXY4g6KN35vROK2RhGWCGzd4QdEpEufJcISPHi8zdaFO3f3GxJ4z/pErFshiYjGYWoclgRHTngBcfWalx9J+xy8Dy4zJAwJjJAzEzx8vD4sYRZMxNCYTNXKqmZe+TcQ7xGpn+JDyyL2HboVyiYfPHDPPsqVVS2mhDV+JoZGEu6/fmiIZ2OsXtOSuwsgDh2vNyViC11Ey8oxi6ZiFEzE0OgBGHsP3Pz/MmXdsKZzqtbH8vWByDQnZtFUWOQKcKrGR1uH81/9X2z+NiZq2fggAAAAAElFTkSuQmCC","so.v.163.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAHBJREFUOI2tUUEOwDAIYkv//2V3cjGIrMvGyRKKqMBHHIoMIAZx0zeifs4PipMGLMx3rdlkqaguMsMaTLvYMgggagKz2HddeazTCdQOuIGMyOfbOWcDd6rvWq9JNKVg3AZK6LjH+Cnk6OMSpxEc/wsuqQI6C+HzarEAAAAASUVORK5CYII=","so.yinyuetai.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAA1FJREFUOI01y91Pm2UYwOHf/TzP+/alpUBLKbQVGLAsjsncHEbMjGYSd2YWjItH+g/4Z+zMxBM925kx0ajZptGoiQZ1OlmMMDbHtm7sg4EyVlZKP+nn7YHx9Eou+XT79Pn7C8zdfPCnxnszRMM9ZNcWOHJglvWtu6gqI0P7Wb4zz4HhGaq1ErnCQybHXpCx41xwa5fN3GvH50glM/RFk/RF+yUc9vTkzGm5eW8RpaOT49MSChk9dvBVCqUd2co/0OnJE/y48OWcy24safzGABevfUa6/xCJ3pQuZb8i3p3WW2vLKB2qtapeXvmcVlvIFx/p37nrGDy9vb6EvPl+VGvNEgPdw3o4fYpCZUtubH+rzWZFnA2DoK1WVYxFpzNvMxo/Kovr3+id7XkJvKg649o61vccH7yzSL1T4utL7+lTsUF+uHtWrQkAaGhVz5xaYGpihuz6rxoOCpTrG1psbWHUVDmUmkUcLK3O0zJlhhJJUtFnQFqo7LEvdpSp8RkqlRLfXfmQoNsjGc2A6WCMQZzxBKBSL3Pr8aKEIvDsyLT4LhAxVU4fOyMIfL/8EXudXQnCBi/kxFqDMRY1VhTAGstmJav1TpHMUEL7o2lNRV/i6eEjWq4WufbPz4TDgfoB+D5qjMU4zwcRATAi7NYfy3p+lb54lxwePyjHJ95iIJaRv+7/zuruOUKBJ10RcL6I9QzGWPv/BwOeByubV3Fem/2jaV6efB2AS/c/QYzg+YIfAueBMRZjrcM6o/AfeB5aa5ZZfXRbY7GINiJXWMtd0eUnHxN4SUKB0SAi+CGj1hqcs12yU92gs4fuVnJYGxHPBLryMCsjqSE0sqgX75yViJ9WEPKlghSKO5ov58U6p/LuF6Odtpapt57gTIBvk6DQ0SbNdgtBMAacCRCBZrtBs90g8LoQsbhEdJwj+2a5/vAnBnr20R3EWNmY5/mJN1jLXUW1w1jyKH/cO89k5gTVvSJbxVWmRma5tjaPS/SkZbBvlHJ9SrtD/fSE45Kv7teh2IjstYoIqoOxERlOTGoqPk6ptiOe73Swb1T682ncxIvehd9+OTeXK2Xp8hOEbITtyir1Rl0LtU1UlfXt22wWr7NTztFo1ag2cjwpbnLold4L/wL2H274oi0GggAAAABJRU5ErkJggg==","sosu.qidian.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAp5JREFUOI11k8tLlFEYxn/nMjpOjRRO5kxZaVZWRhHYsmjdBYoWBdWiCCoJofsFFSuSVlFuosuu/o0ggoiIVhlhiVLOp6NTyZTN5fvO97aY0SmoszlwXt6X9/ec51HCQqB2E6i7IElwIRhA8Z+jAQ+kG4rvlNCwCXjsUexUGHRDI+HXKSAEbKUnAGR+gqBIUfMaOK6EhmcT6J2meSmmtYUFZ04we+8BbmwM93kSANOyDCKR8gwRyBdw6QxJwmcWXNI0JojfuIZd14bd2I5JJQmGP5E71wtKEe+/ikklIXQQrYWSz8yRUzCRTiI0DHkkZDK5XrI79kjxxSvJbt8tk8n14pEQj4Rkmjsk07JFMs0dkt25V4rPX0pm9VYR4u/0HJdSqqqbAqWqxPhB5V3/WYCySg7T2ER8oBe7ZjV2w1rqB3oJhkfIne1B1daw6Ml9sBYKRaiLQqkE+QKgsWBwU1lyV/qx7Wupv36F3NWbBB9HCL9NY9rawFp+9A3gRkbBGCRfJMxMA4Z5BH4WcGPjSMkH/Q8PKFVGMAZVG5n3iQUfs6qVeP9l8o+eopuWUH+rh+D9MLmLfTCbB98n3nepjGA0Lj1B7kIfTE9hQcAabFsrkc7NSKHE7OBDSs9fEn6bAYSZI6cxrStRNRFQCvmVR7K5OQ0U5AtIoUD04H5UXZTovl0EQx9w3mjZu01LiHUdwyQSALgvaXIj/XMbRLRLZ5g5fBKiNVAK0CtSxE4c5dfTGCiIHTrA7OBDwswUaA2+Tzj9HdDagvIE1+4mxiv+F1x6nHwsxsLzXeAcP2/fxX/75q88CQYwnhIWd4B57BFuq2ovKAy6ZTmgcKNjVYdVYpVCvwZ3TJXjHOkAcwdYVlmjcgWVJgPVH6/E2XWDG/oN4DwRs+MYb7cAAAAASUVORK5CYII=","sou.kuwo.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAohJREFUOI19kkloU2EQgL957+U1r62mUdugVosbqEFxwbpvICLiSXFB8KwXpSJWvCrqVRGPglDcUERxQaVKEYp1gUi1oOC+dDFqkzZJm+T9bzwUlVrtnIZh5mOG+WCYmNeikQUPdftwPc7fhRnNWuEKyxSeF3J9CSvsXQLO/Q9g/V0oBiwtKjssmN/veBeyhmPDbfAbsKpFR5/6oIcqHZZmfbY9WyJX4uXUibJn+XMNDwcBIHZPVy66+DJY+ERvAei7vRMae/XkxjsfzaEXj5/qmemPtJ7jWs8q3Y/9a05+Jdq5b102Nre+LNlWSfvb8YVMX7QudYDmVIQt2bPsSp4m3/4VRIhNrvluT4tf4MOr3QKgLzasR+SaCRxHjYf50Y//5R2fe1w+5cqoLUsjIyJYsbGUTJmKPaoCert9OXV4m2jbhvkgTcZo+Z+DBD9diUkJVrmF5pLY46rBN/Q9aMJbsRo30v6KW/dXO0ASuC3CJtWBk7QYIteYwFtRixZ+UGhtxU52U3zzniCVIZh5B8QvSl1PhyXxGx8lfn2zpboG3xgNHLKPugh6U4jnIbaL35GmvzlB8XUP4VklOFUhcMcNfqPMvnnf7sx8y7R2YjIp8BykNIy4HuaLwXwug8JInOrRSEk1uGP/IVLI7lCCgeGwDb1NBF1X0VwECZegRUif7iGfAEIDgMEqW7zGc+ZI3qCeAZPB8sqxKgLCtaMITYnR19KBeGMgVKVDAaI7o1F3ZHferCVvwIlgV0VxJidxp9fgzphGeN5yn4C7+OkTg0T6LVTjSptCcDTVmdtfGq8RJ1qKOBUq4iXAaQDrvEw60jXExCGgy4u3UjPxIKWh2wTSILMa2v7V9xMBAgjjowQMpAAAAABJRU5ErkJggg==","stackoverflow.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAcxJREFUOI2Vkk1IVHEUxX//aV45r/eMwiKhj0VDEDpgLQw3CbaJEgKh2lUSOWALC8tNQRS50uhrCII0oqBVUKumwIiCDHIjThOIuZEmnNJiyvea3sdt08C8ZvThgf/m3HMP597/RURY1rvaVJCbe/bK+DNEhChhuKQuYLAZSCKA0Z7DKRwGRgAioQYGY3a0sYtYogO9AWACqC+Vww2EdExTF21HHv9jpoHmUnnxEVIqjUEMM9GKy+WYpo6ATIGK/yp6fUZoghr6FlTjlomfjrA2mkRo+O2obfzJXDfczzO4RQCUiAQb7Tws5OBbFqYfQtE6nf2Uu7Z90+oP0cJsP80pm6aOJyV5pUF+jJcPemX9ho35RLx+hMiK+9g/njM/9Yavr32S0lour7qDtp3rFCvXDOK7u1+9n0yDYle87l3toWxLhbj8SI4ePyni2Ij1/Y7MvG2X0fPI/EdkLrND5jJD8mWUYye6pbwnkMA0TRCfp7fO7Cs4WpeKaLgvBlAKqauRyQPnhtFXPQoECBj4nguazsHkla1EAh/Uhu/vrzZu1R109vZLrWkEOM/zSN0YPKvrerjBvbu3VTUewLKspQ26T/XI/9xSqLyDZeIvIoDgsnAkj5oAAAAASUVORK5CYII=","support.mozilla.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADZ0lEQVQ4jW2Te0zVdRjGf/1jW+ZwgSMvyyDO9/c7QodLNmWMhCnJhnILAuISICFggYQUywHNUsLLSq5aO+aAzRIbSQvIAWIhRJxVpCduyjkczgEOEAPOcoJ0Pv3BVoP5/v28nz3PnveVpDUT+Z0xLabNei+9Z34pR2cjW2ezH+5ZWIy+NT14sNkSt1YvSZIkTRR5hBy8qHsqodE4nNO7wGutUwS0TBLWOkNExyyhrTO82mymom/UXtxlHL6uTd2wCjBXIj+qLy9YTGvUE1jZzhVtHJENX6JpsbK39S+8WqbY+o0B/6tDtA/0UftL/z8LnZn+/wFMRwXj7wgmCmQmSwWd2j08UTOAdM3Akw0mpGsG1mn1bPu0lxa9BbutiaE/zyxND/htkHTHgzLmz77A+Nsy4+/JTJ4SWLWu6PJ2Ulady7pLetZ/fgeHMh2bSm4TVN4ND/thrpK5O8oZyVioeWDNUmHOkLHkyUx+KGP9zBXzuWSqv67CsbQLp6I2Nud/j9OxJrZk1TMy0oZ9voqpP1x+lWY/cbOPJQrG3hJYjspMHJexlqmIzDvJpvxmnPNbcMz+lqdT63CMu8DHl7WMjzaCrYFpnWpOsha62Q2xAlOKwJQluOGtJj7qEJsTL+KcUsOzKbU4RZXxTNhZHPafoOhcASwZ4O8OxjteWpTuZcjLg+EyhjcEhhTBj35q6pNfYWvoCXYlFJDx/pu4xRbj5H8M511HqKsOwT6TCbNFLDS5LEvdMZqp34MV7kcJ7scLjIkCS67MxAcykyWCoVMKeRlhbPHNZrtHNLbfklgeTeLR3XWMnJeNUkeET1O3v8LdEBnD6wJjgsCQLNMe58mViJfx8onhOU0K29TxVOR681C3ngc/bWTm0nZ603eclHT7XB1u+KqXf96joD+wAhlNFuhTd3A6ZDf7PPcSuzuAjsMabFrBdLUbE6WC3nS1vT/JzVeSJEmq8/KobPNW6AlYgYxErzgxHRKYM2UsOYKZYhXThSrM2QLzERX6WNXoqnOuld1v/vCiwm0/hb79CoPh/0cypa7UPJYmGI4VdB5w73rsU112cf/oqqxevLVToSdQoS9Ypj9UZjBcMBwpuBmottd4q7967PIqNypVUJXscfq8h9cX5Rrv6gpPz3ev+8jBDV7Pb1yr/RfBdBf1T+5Z1wAAAABJRU5ErkJggg==","tieba.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAl5JREFUOI2dU89LlFEUPXfmm09HyaCsTDOLNrqLtNwVSC4K2tRKBAtqU5hhUS2KChSKqH+gaBHVRqSCIKpdi6ggXIQ/spmx0tEcHacxa3Le9947LcZvZtRWXXhwz73vXc47915BzzABAJYALWABGJPDxgLW5rD2/SJsNBwA4OUG/I9J+0sEYLkqEY0oXu9JcmgwSwCIRRW/xLzVF41GANYuiylF3LuTlocPfuLWjRTGogonjk6j61QCY1G1ooBdziD9w8B1BdYAa8sD4jqQ1JxB5rcRz7OSmjPLC2gDBybHYPybh54rSZaGA2hpDUs6ZbCzsQRNzWEcO742/2Zi3EPt1lCeAXBxgCTZ9yjN7VURu7f5qyXJWCTLxT+WvsUiWbYdibPtcNx+n/JIkjjQR8fXYNsOFzVbHKncEMTzZ79Q3+Ciu3MapWFB55l1eNy/gLGYwtyMkckJzarNjsBaOLC5f+1qCqP7wnrOJDTqG1w52znDTyNZhFyR5Kzltd5Kefc2g+rqECs3Bos00DkGwSBw8FC5TMU1zp1OYHREwVMUTxFvXmfk0vlZ3ry9SSbjGnV1ISl0QReUjUU8dJ1MYHhQQSlKseAjQ1npvZpETa0j8DPGIOB3gQSe9C1w6KOi94+ZmZ8nP7xfRHxcF5LWwoEpMAi5gmyWECEEQmsJCCTkCAkikyGmJnXRILGggQjQ1lEh8QkPn0cVKtYEZN/+MgDA0/4FmU9bNO4uQUtrmRQzEHS8Iu+3+iECGACwYmbz5gJo9IHsuQtB+wtC68KaGru0qku+NYBmbpXzh/n1/wuHC2lVjJEkmAAAAABJRU5ErkJggg==","torrentproject.se":"data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9/e8b/f3vAf397wL9/e8DZv1qGQDjRgYAujgFALU1FQC0NR0AujgEAOBFAiX4Vwb9/e8I/f3vBP397wP9/e8H/f3vCf397wH9/e8BAAAAAAC1NRsAtTWIALU10QC1Nf8AtTX3ALU13QC1NYsAtTUfAPJMCP397wL9/e8B/f3vAf397wH9/e8BAAAAAAC1NWQAriv2ALU1/wC1Nf8AtTX/ALU1/wC1Nf8AtTX/ALU19gC1NWUA1kIB/f3vAf397ykAAAAAAAAAAAC1NWQAtTX/GdZl/5v5d/8AtzT/ALU1/wC1Nf8AtzT/m/l3/xfUZf8AtTX/ALU1ZQDoSQP9/e8GAAAAAAC1NRsAtTX2ALU1/wCsL//9/e//4P25/wCmJf8ApiX/4P25//397/8AqjD/ALU1/wC1NfYAtTUbV/tlCgDtTQEAtTWIALU1/wC1Nf8AtzT/2v2y//397//9/e///f3v//397//U/av/ALc0/wC1Nf8AtTX/ALU1iADpSQ0AxToBALU10QC1Nf8AtTX/ALU1/5T4dP/9/e///f3v//397//9/e//i/Z0/wC1Nf8AtTX/ALU1/wC1NdEAxDoKALc1AQC1NfcAtTX/ALU1/wCsL//a/bL//f3v//397//9/e///f3v/9T9q/8AqjD/ALU1/wC1Nf8AtTX3ALc1BgC4NQsAtTX3ALc0/13nYP/a/bL//f3v//397//9/e///f3v//397//9/e//1P2r/1LkYP8AtzT/ALU1+AC3NQgAyzwMALU12AzSZf/a/bL/2v2y/9r9sv/a/bL//f3v//397//a/bL/2v2y/9r9sv/a/bL/C89l/wC1NdwAyTwQAPJMBwC1NakAtTX/ALU1/wC1Nf8AtTX/ALFG//397//9/e//ALFG/wC1Nf8AtTX/ALU1/wC1Nf8AtTWgAPJMGij8WgYAtTUqALU1+QC1Nf8AtTX/ALU1/wC3NP/a/bL/2v2y/wC3NP8AtTX/ALU1/wC1Nf8AtTX3ALU1JCj8WhQAAAAAAOdIAwC1NY8AtTX/ALU1/wC1Nf8AtTX/lPh0/5T4dP8AtTX/ALU1/wC1Nf8AtTX/ALU1agDnSAv9/e8C/f3vAQAAAAAA3kMDALU1jQC1Nf0AtTX/ALU1/wCxRv8AsUb/ALU1/wC1Nf8AtTX4ALU1ZwDeQwH9/e8C/f3vC/397wT9/e8BAAAAAADoSAQAtTVJALU1oAC1Nd8AtTX/ALU1+gC1Nd8AtTWPALU1HwDoSAEAAAAA/f3vBP397wv9/e8V/f3vAgAAAAAAAAAAAAAAAADgRQIAujgBALU1BAC0NQgAujgMAOFGAzT6WwEAAAAA/f3vA/397xj9/e9N//8AAPgfAADwDwAA4AcAAMADAACAAQAAgAEAAIABAACAAQAAgAEAAIABAADAAwAAwAcAAOAPAAD4HwAA//8AAA==","torrentz.eu":"data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZZjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8IAAA/DcAAPw7AAD8PQAA/CAAAPw/AAD8PwAA/D8AAPw/AAD8PwAA/D8AAPw/AAB8PgAAAAAAAAAAAACAAQAA","translate.google.cn":"data:image/x-icon;base64,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","translate.google.com":"data:image/png;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAAASCwAAEgsAAAAAAAAAAAAA9IVCSvSFQuf0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULk9IVCSvSFQub0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQuf0hUL/9IVC//SFQv/0hUL/9Y1O//rIq//+7+f//eXX//vUvf/7z7X/96Fu//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vYwv/97OH/9ZRZ//SFQv/0hUL/9IhG//zbx//3om7/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/97uX/+buW//SFQv/0hUL/9IVC//SFQv/5upT/+9O6//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+b6b//zezP/0iEf/9IVC//SFQv/1klf//ezh//vPtP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/3qXr/+siq//m8lv/5wqD//vTu//3t4//1klb/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0h0b//vbx//zi0//1j1H/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/2nmn/+bmS/////v/4sIX/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/5uJH///v5//eoef/1jU//+82y//afav/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL//vXw//vOs//0hUL/9IVC//ekcf/96+D/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//728v/4sIX/9IVC//SFQv/4s4n///v4//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/6yKn/+byX//SFQv/0hkT//eTV//vWv//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IZE//m6lP/5u5b//OHQ///+/f/6y6//96d3//SFQv/0hUL/9IVC//SFQv/0hULm9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULm9IVCSfSFQub0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULm9IVCSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAASCwAAEgsAAAAAAAAAAAAA9IVCAPSFQif0hUKt9IVC8vSFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQvL0hUKt9IVCJ/SFQgD0hUIo9IVC7/SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULv9IVCKPSFQq30hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUKt9IVC8fSFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQvP0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9YtL//i2jv/828f//vLr///7+P///Pv//vTu//3n2v/6zbH/96Nw//SFQ//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//ekcv/+8+z////////////+9fD/+9K5//m9mf/4to7/+buV//vSuf/++PT//OPT//aYYP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/2l13///r3/////////fv/+b2Z//SIRv/0hUL/9IVC//SFQv/0hUL/9IVC//WNT//84M///vXv//aZYf/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vPtP////////////i0i//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//WQUv///Pr//OPU//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL//eTV///////+9O7/9IVD//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//3m2P//////9ppi//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/718H///////3s4f/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL//vDn///////4soj/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//erff////////38//WTWP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//iziv////////////iwhf/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//rMsP///////eXW//WSVv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/4sYb///z7/////////Pv/9ZFV//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//ixhv/+8Of//vn1//rMsP/4rH//9plh//WQUv/1j1L/+s2x//////////////////m9mf/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SGQ//2nmn/+buW//vNsv/82sb//e3j/////////////////////v/5wZ//9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/83Mj////////////++fb/+K+C//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9ZRZ/////////////vTt//aaYv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/1lFr////////////6xqf/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//ehbf/70bj//end//3o2////v3///////3l1//0iEb/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/5wqD////////////96t7/96Z2//WOUP/2nWf//NvH//zcyP/1i0z/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/96l6/////////////vLr//WPUf/0hUL/9IVC//SFQv/0h0b//end//3k1f/0iUn/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/8387////////////4sYf/9IVC//SFQv/0hUL/9IVC//SFQv/6w6L///////nBn//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC///69////////vj1//SIR//0hUL/9IVC//SFQv/0hUL/9IVC//m+mv///////e3j//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL///r3///////8387/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+syw///////++fb/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/95NX///////vUvP/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/97OH///////7y6//0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//i2jv///////N/O//SFQv/0hUL/9IVC//SFQv/0hUL/96Nx////////////+s2x//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IdF//zh0P//+/j/9ZJW//SFQv/0hUL/9IVC//SKSv/96t7///////738v/1k1f/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9YxN//vUvf/96+D/96Z0//WNT//3om///ebY/////////Pv/+LKI//WVW//0h0X/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//agbP/7zbL//enc//749P////////////////////////////3r4P/3p3f/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hULx9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC8/SFQq30hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUKt9IVCJ/SFQu/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC7/SFQif0hUIA9IVCJfSFQq30hULx9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC8fSFQq30hUIl9IVCAIAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAB","translate.google.com.hk":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAqpJREFUOI11001onFUUxvH/ve/XkMaxRTsNbTJdKK0REhRtxEAEIQitgq0gRUVddyMShXbnQtBGQXBba1RQQa1SpaUgaktpukhUaKQG+0UqJkrVTOJk3nfeufee4yK0q+Tsz4+Hh3OMarO2uNh4x1pbanCkaYpooNVsIXh8x0X1eu+siWvjrDFGw/KnedF+JktjrDV8/c0pJAh7dj+Kc448b1OpJGy8426zFhDPz/9Z9PRsZuC+Ufp6e4iiCAU++OgYV679wdnvP6Ys3Vq7q0BXd0ae5/w0fZIzpyd58IFBVIVXD77B1OQxGo0lsixdHxAvhMjjOiXtsuSLL08AsP/px/mvuYKIEETXBayEgAQhBM9joyNMTc8wNT3DI8MDJKZNGjmyqLN+ghACcWy5+Osljk58ztCuQTTkjLzbS4iqBBFEhJHDqsFDEBAVFIsIh2LBAwkXZmZ55aXn2dZXx1Dy/pEqd2YOCYoX5fqip8sK3YmgQVCTEFzeb33HRc51eOHZ3fyyfC/imoROgRdBghJU8apcH+/w1l5hqQ2qoAAmCrZe3zZr4oyx4zt47XSNl4/vQKMKiCCqtErlwHDg3EXL6KCy7JXVThWwWBNvGa/V7jLfnpmc2JwKPy/EE1v77jebumJEhL8KZd9DwsGv4MIcjA0rub8ZQbC36vSt6uXZ81yeXwDgnh5oFMJT/cJtFTjwMGQWnhwy/F2CqiLArfP8bEp3dlWZaTVJjYXg4OgPBW/u8xQlTF6CoqO8/pzhicPCXCPCqpuIbwL7h8xvH57T7dXb+d2VJCIQG2HhH+Xt7+DGipJ72JAoA1uUK/8KiQprPgjAi++p/ng1px0MG2IlMquxW06xCGkU44qlT+L1gOk5DiVS9HfbKCAWQRCgYhQVwRUrWdS9dex/jz5vVhnOMvMAAAAASUVORK5CYII=","twitter.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAZhJREFUOI2lk7Frk1EUxX/n5n2fTdJAUxDpInTsJjiIg1ulWAQ7OnRQF7eu/RcKncTJpS6C4FKIIIgg/g0WFOxQxEFqbJpam6Rf0ncdmoSYNFromd67955zL+fdJ3fnIgi3K+eoEgBPgQRYwcm68SthpgBENoBHZ3LF0tHP75uWpADETva4MD3zAnEDuGZEZpv16kPE626nv9A63H9paR5kIMOSCVq/asvu1N25b4gd5XI0D2p3O9nxD4kHqD920d0nYMgnCXd2gA0TkJam30lGp9W43NivPm8d1Bpy3iCejbVFPJEgAHMCyRQ9uikXAPLNw9od/LRyFI7BJ3cI7nxuN3/f8hhtxPqzuIBk0aEOYABJfnLRQpqNG3cY6eTU2564AZh4H/LFTQtJ+zwCEqs9Xw2gu4xf40k7+W/3UrmCs9W728Bh9VKxvJCWyh/+Qf5mcG8w1hfQ6WgL2VH95hjyR8HV4XgA5l2sNfZ2rysEpNxAWqSlqSqwbmJ9eJ8ANF/xwddakZjDKTh8AV5JbLv3fRoVuOh3/gMl6IU0jgqB8AAAAABJRU5ErkJggg==","userscripts.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaUlEQVQ4jY3STUjTcRzH8a+mLozoUNTFQ3qQXYygQ6cO4aEyUlY6lz3L/g5WUOJDGatTRBhWsHSKa2o+pCKtgnmIWBPx6b/Z2oObc1v778nU9vD/WyCdPh0yW6Lm7/x7vX/w/X2JNj9pp8vkR2rvN3JqbQ+qbqlGCiWSvVvc/xeXyOSl6vZu3jhmxhcujEAoAkmF4jYRpf8XF0sZ5mlrF0xjZvgCYcTiPITlH7iirB8moswtsUTKMM26XnwcN8PHhRCL80jwAroG9DhVLKskItHmWMYwbS8HYRqfhp8LIZZIIsELmJnzoazyxhQR7SOijA3xuQsMo+nsB2udQSAY+Y2TAtzeALyBEEanplEhr+4loh0bBTLvPGjitX16PFLrwIWjSCQFfJ7xwO7yggt/RSzBwznrw0VFbfdGg8y++/AZmjsGoH7xChabC6zVCdbqhMfPYX5xCbywjJWVn7DYnCi9pKwnorTUwC7pteu6IcMH9AwZ8HrYiJHJaTjcXgQj86u/8B28sIxYksfjFh1PRFmpAdHB/AJxVc09t3GMxXvTBCYtdjjcXvi5CCLzC1iKxbH4LQ6PP4gnLZ0CEWWnBtKJaHdOnrhAUa2atdhcsLvm4PFzCEVX8VIcsz4OA2+GcbK4vG59gFanuycnN/cQU6OKsp8cf1/+g/UGFBaVNhDRftpkoTJOnCkvadJ0wThpg9XhXsP9egOOF51tIKIDRLRz/RDXAtLLSoMrsIC3RhbPOwfh9vrR1jO0LUxEJJKcl7ePmu1o7X0HtbYPTZqObWMioqy8PHH+VWUd26jWgrmpih4+eqxkK/wLdLSQIruD/tMAAAAASUVORK5CYII=","userstyles.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADDklEQVQ4jWXQ3U9TBxjH8ZNFRJ1UYAi0pz0lDba09Ch7ZWEyQtjktS6zHaask4zAgCYytkRbIFumnaKj2TQxc3QM416MI4EwozhTLzBLll4wFtGadWYTEbqNhKwsWbkp57sraWW/P+Dz5PkKgiAIGzduIE+9lXz1VvLVGag1mYiaHLRiHtlZKnK2bEbKeBxpWwa6LBW67EzS09IQHq7QmMv3M26u3XITvN1FKHKSqfB5Ll3+jFf3VWLT5jJR+RR3DtiIvNPCXd9hinWaJGAyq5l+cJTp+aP8PNfPkYHXsTts9PT04PP58Hg8NOzZQ4O5kImW14ie6EOWxCRgNkv8+tcX3JkP0NppIxgMsrq6SuoURSEajeJutBPtXwcUWwz88XeQgVPdjIxcBGB5eRm/3097ezsej4dQKEQsFuOgs5Fof++jgLXYxD//Rqirr2J2dhaAiatXqKqx0tzyEhV6DbYSGYfdzpt11USPe5GllAaSVsPpj0+yU7YQDocBWFlZIfB5ALe7A9sLz+PZ/QxfN9Zzra2J+eO9yKkRt2dvw7W3gpryEvr6ev/3fyKRIBQKYa+r5dtWJ/P+D9ZFNIj8fv00v1z1IxslhoaGSCQSrN/CwgKuynIenPkIq6RNAkUFGiLf9XNj2MuBht08XaKirKwId2cbZ89+yuLi4hri7XiLPwc/QdanACZ9PuEL71O2y4jD4WDfXhX3bj7Gb1MbaHVtoaa6eu2tN5xOakqsPKHKSAJGXR63hr2UykZisRiTk5N0d7XQ3PQs+x1VjI6OoigK8XicipdreXdgELVO/yhwc+gQpfIOlpaWUBRlLd7Dy/F4nEOHPbQdOcWFn+YoMFlSgVxmznkZ7nHxYumTdL99kEBgkPHxccbGxvjw2DGqX7Hz3vkrfDM9x+WZWQqMqYCUT3jER2TsBN2uWro6y/nxRgcXv2rC6XiO+v3NDP5wly+n7nNp5j7Xb99DbzQngc3paVgMIhaDiDonE1GdxU6rll1WEVGdxfbcPAqMFgwmM4VFFoxFZtI3bUIQBOE/EDAl6FFoKc0AAAAASUVORK5CYII=","v.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAl5JREFUOI2dU89LlFEUPXfmm09HyaCsTDOLNrqLtNwVSC4K2tRKBAtqU5hhUS2KChSKqH+gaBHVRqSCIKpdi6ggXIQ/spmx0tEcHacxa3Le9947LcZvZtRWXXhwz73vXc47915BzzABAJYALWABGJPDxgLW5rD2/SJsNBwA4OUG/I9J+0sEYLkqEY0oXu9JcmgwSwCIRRW/xLzVF41GANYuiylF3LuTlocPfuLWjRTGogonjk6j61QCY1G1ooBdziD9w8B1BdYAa8sD4jqQ1JxB5rcRz7OSmjPLC2gDBybHYPybh54rSZaGA2hpDUs6ZbCzsQRNzWEcO742/2Zi3EPt1lCeAXBxgCTZ9yjN7VURu7f5qyXJWCTLxT+WvsUiWbYdibPtcNx+n/JIkjjQR8fXYNsOFzVbHKncEMTzZ79Q3+Ciu3MapWFB55l1eNy/gLGYwtyMkckJzarNjsBaOLC5f+1qCqP7wnrOJDTqG1w52znDTyNZhFyR5Kzltd5Kefc2g+rqECs3Bos00DkGwSBw8FC5TMU1zp1OYHREwVMUTxFvXmfk0vlZ3ry9SSbjGnV1ISl0QReUjUU8dJ1MYHhQQSlKseAjQ1npvZpETa0j8DPGIOB3gQSe9C1w6KOi94+ZmZ8nP7xfRHxcF5LWwoEpMAi5gmyWECEEQmsJCCTkCAkikyGmJnXRILGggQjQ1lEh8QkPn0cVKtYEZN/+MgDA0/4FmU9bNO4uQUtrmRQzEHS8Iu+3+iECGACwYmbz5gJo9IHsuQtB+wtC68KaGru0qku+NYBmbpXzh/n1/wuHC2lVjJEkmAAAAABJRU5ErkJggg==","v.qq.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAs9JREFUOI2Nk12IVGUAhp/v/M05O+fMjOvuuJqF/VmWoKbCmmKLEkQ3/chSXnTlhRclBAqxCJEk5YVeSIUghWZgF2G7dGEiWAZZragsBiWtse2P6+46szM7Z86cc+Y7Zz5volb60ffqfW+eq/cRzMvWcYXS2WoZnDtTFNxLjPnDF4xoIctkBp6tqWEVcMIz2d/f8d8wob5ZAm79R1zX2K3eXXet0cOo+RBZBywbDI+4PebQdo+9ve4/QUJ9sfQt5MSBn7rgUgfkJYRiNUPqbb43X8K0wbYh5+EvbvL6sUXis/kAjTk2U8sSzGUYn4Tp8krKs0Ns1F5mn16kp3GS2SqUSni/NjmxW6ofzoRqHkBSJDC4WneZnIFtq4+xY/0EY2WPCR82mW+y33ycFf4F6nNwfowNX0pae2bUc38CZDuNlKtxEd+HsFmnmLuPvi01uqxeRiu3kEnKa7lNbI93ks7BzzdTcSXl66d/Uy9oaSQXRvUWQRzQDKFcmyVo+kgV0bvmI9Z3HWGqep2xagePOUdZFx1Hq0lalQjbZI8RhYkK/JREBjQl3Jye4nd9lLybQ1Lj7C/vo1k6cVJFpVCttaMbPobpkSoGDClbsR9IdBWRJJCxsrTpC7h4bYCB4TfozIHrQAb4auY4N5KnyBciLKPz8OknxSEDQ4WxamGIFCEg7zlcGPmY/qF36MgCEUyGPVxsvIeWWUjWbRC7y/u+XSkOABiFgj51K8eyNi2h4BocPP0KpoCCBfXGgwyW+pjSu1ngRFhmGN6wVz0//ow4//eVl9ev2zN0P6EnXPbAs6BS3cJ3Ey/yR7qGghPS5pRo5h8eHD73QDcn73yjUJd0GEk/Hezc9ejm/kc2NMuLQbPBSWnzbAzbLuurenZVesXn/+rCX22HQl9badjBtKMpiei8f0hlC5/4FT5k5//IdMf6QFFYwrZ6iVMiD/LVuyt9G7VHLU/p9/aUAAAAAElFTkSuQmCC","video.sina.com.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAkdJREFUOI3Fk0tIlAEURo+jYuGjppzxkVZOVpapWFi6SIM0ihyCMAhBUAkzctOiRYuQIJHETasIMymIWqUo2cPArBAKUSm1siyifOT4GicbJ+f3a+ELIaJNdODu7rncC9+Ff42SYtGlsl49akz/eylrX5YaalsAlBxXom+D0pvuqwDaGY/8lnpNi9LhA+j8ubPyBbLtt0hIShJAflEpww6YmloPgMt5heaW2gVvaZaPz2WO5iTz/KmblFQLPT0fKL94E5stlO7XEBgUJ4DCU/lMuaYXNQBtj4GSMyIo+DEeTwZerz8eN5j8wOMBw4CZnxAQMI6vrxmHAzbG+PgUn57fICyygoAV0N6WyegIfP4EJl8IDmG26SGaBtb6gzXarMBg/Kxh8N1VClyYu7/k5BflHtPs7iTpSbMkqW9wUP3j45IkOYZlVJRrEjQRZdFwWIiUntY3J+9KREUFMhK3SpLKKisFLKuunh5JkvHyhQZAX6PDNBBulooLQPGxW3Rov3S/Uc2trQJ0vbpaR+x2GYahlSaTAC0wlJ6m99ZV+hixRsrNwYR7upexMZh0MuV2c62qioLCQurq64m0WMjIzGSzzYbX6wXgx8Q4biA0ZPUwEVHzGYiy5mmDVXJOqPr2HRmSOjo7Zc/OVrbdrgdNTZIk540atYFeRVmlvXuylqcv2nJQMKqaar2ru6tnra3q6O3VjMslb3ub+gry1AYa2bZpSMk7Un8f4dAQBCcUzD3BWwc4+8E5C11aF9qglITjCjf/6Qv+A78AuIw+c7Rme+YAAAAASUVORK5CYII=","vimeo.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVQ4jaWTvw2CQBTGGYQQF2ACJsAFmMAJmMAJnMAJ7LQgFBQ0mlDYEGJjYSLxggLhMKIBzWd15E7+RPQlr3n5vt/7czlJXhJdsaLTyL5gSCpWdJKXRJd+MfMQaYhBc5NGTQCoToxNUgIA5oeirpt+Dlq+AAC0fMHwsiZAX6c4Fk/wwbp+xmx/EwGam9Qd+DC8DKafI6BVP4CNaXiZIDT9vBZ21RtH5LuxO5h+XteOxbP7iCP7gunuKohVJxbWm2xpP0Bfp8K4vNmOHv3PyLLtoAGtoDrxd4BFeBfMbJU2bSuAf9ZNUnaaOwFD8t/PRCR5RcaKFZHh5nMor8j4DUIXDtllgAeRAAAAAElFTkSuQmCC","webextender.net":"data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKwSURBVHjabJNJTBNRGID/mc5MQYVWVNCGTbEtNZGDBj1ogolEMR5UJA2LBmMoIokxERIj8ehJjx6MYIQoJgq4JIa6gEARkKJFTa2iFFtKWwp2oeDCzNQ+31DQCc5L/nmT/P/3749ACAFBECBxiEPFFds0Ws399DRVhtX2udc97ig0PmgOLBkIbOwjAR8uMRRdvXF7pqv/NfrqnEAOlxsdLas6j3Wk2AEpCRcbKvLydrdu1WUr0lXrITEhAZKUSkhQKvKwXiY2ppbDRzCcv29P/ZZsDaSqUkCJYVJGwKMnHTDlmWgTZ/CvjkW4sKTScP1WC+oZsKAxpwv5gyEUnAkj2xc70p88Y8Y2a8VBxT0gispOGa413UVDb23IMe6OwaEw+jTqQKMOF3pptqBSw7k74hLEPaDUOu0VmpFDV58ZCJIAkiDB5fUBz0eApmjQqbOgrqa69HhVbZO4jKUfmiBJBctysHJFPPiDYbA7J4DjeJDLaWAYGVAyErIy0uDs6RPH9OXVtULWYgfEmN3emJK8BlYrEsHl8cEvloX4ODnEyRlgKGZhV1iOhcz0VNixM7dOCCp2EBkeMF3u6DaNqDasg1U4CzlFxxSRKMyz8xjmsPAQwNmRsc2jxGPkR0esHp7n9RBFrYbyUi1DUzh1GujFG0UBQrNz8P7DR3j+9NklqTEK3VVkbNLkVNZc9AwNW5Hb60PT/gCamg6gEbsT3XvYjvIP6i9gu2ShhOWb+BvLD13O9o3azWrVdy4K3wKhv5HfWW1Q39BY19nechPbzQrVwX9bhU+iIqnyQMF+mPvJQr/FCsHwDJgG30ADhl8Y2wQ4jIUVkpdaZRnPcd6AfxomJ32AIhEwdvaC8XG7JLwwvmXPmVFn52Tu2lvQjN9Crn3M6bWY+6otr3oGpWCB/SPAAJaJRguGUxB0AAAAAElFTkSuQmCC","wen.lu":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAfhJREFUOI2Vkz1oU1EUx3/nvXvfS15jqnVwcHHwA4UqdNAWKoomBcGhWNGpk8XFxUEUcRaFqKtTEQyC7urgUBoQtNRNFCsIbSF0qI3WNk1y38d1SJDmQ8S7HDic/4/zP+ceyRfsODAdm+oA//Fcr68CXJF8wa71EtfCVowttQgyGtJK8Nx2iOolXqvDzTFNmAi5QcXeXcL7rxGlzxEvP8Z/ILGpDjid4g0DhYse2oGHbxocv1elXEkQgeJ81NYBQBdgM7Tkj2oWVhJ2eMK+jFAsGU4cUMQ9ZtEFkFYc3u/yy1gcgcWKpR6Bls7qHoCsJ0zPGHLHNOODitWGZXJUc+NpjZ2pboLqTAQaHpcMc99iRg+6fLmc4c7zOnNLMVm/G9DVAUBKCfPLMbdfGwCunvVwXCFKumvlzN1Nuz1RqVkuDWmGD7ksf7cEynJhxCOxcP5BFROCI38BVEO4ntOcPKwYe7RFVgtRYhFXmLkV8Gkp5tqzOv3brLRZqIaWiRGPVx9CAiUEGrK+IAkUZw3pf83Ac2ChnDB52iebgtUty3rDsm4s54Y0T2YNgWqHtFmwFmoJ3J/wOXVEUf5hWfmZECfw4q3h3WJCoDuG2HlM1sKGsdRiUALKaX6utBZ0x85cr6/iAFOt02wSpel7TyDsTgv9vpD1e4uBqd8JecJJIf0F1wAAAABJRU5ErkJggg==","wenku.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAl5JREFUOI2dU89LlFEUPXfmm09HyaCsTDOLNrqLtNwVSC4K2tRKBAtqU5hhUS2KChSKqH+gaBHVRqSCIKpdi6ggXIQ/spmx0tEcHacxa3Le9947LcZvZtRWXXhwz73vXc47915BzzABAJYALWABGJPDxgLW5rD2/SJsNBwA4OUG/I9J+0sEYLkqEY0oXu9JcmgwSwCIRRW/xLzVF41GANYuiylF3LuTlocPfuLWjRTGogonjk6j61QCY1G1ooBdziD9w8B1BdYAa8sD4jqQ1JxB5rcRz7OSmjPLC2gDBybHYPybh54rSZaGA2hpDUs6ZbCzsQRNzWEcO742/2Zi3EPt1lCeAXBxgCTZ9yjN7VURu7f5qyXJWCTLxT+WvsUiWbYdibPtcNx+n/JIkjjQR8fXYNsOFzVbHKncEMTzZ79Q3+Ciu3MapWFB55l1eNy/gLGYwtyMkckJzarNjsBaOLC5f+1qCqP7wnrOJDTqG1w52znDTyNZhFyR5Kzltd5Kefc2g+rqECs3Bos00DkGwSBw8FC5TMU1zp1OYHREwVMUTxFvXmfk0vlZ3ry9SSbjGnV1ISl0QReUjUU8dJ1MYHhQQSlKseAjQ1npvZpETa0j8DPGIOB3gQSe9C1w6KOi94+ZmZ8nP7xfRHxcF5LWwoEpMAi5gmyWECEEQmsJCCTkCAkikyGmJnXRILGggQjQ1lEh8QkPn0cVKtYEZN/+MgDA0/4FmU9bNO4uQUtrmRQzEHS8Iu+3+iECGACwYmbz5gJo9IHsuQtB+wtC68KaGru0qku+NYBmbpXzh/n1/wuHC2lVjJEkmAAAAABJRU5ErkJggg==","www.33lc.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKaOygTmjlwE5c4WxOWNjMUlTVAFJQzOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGeQD0RnT6dEps8PROaOwkSmzsIEpo66hOXN/8UlTTBFZMyPQAAAAAAAAAAAAAAAAAAAAAAAAAAEKBCKRChQyUQokZwAAAAAAAAAAAOp0sBEKJFgxGfQf8SnD7/E5k6/xSWNf8VkzJYAAAAAAAAAAAAAAAAD6BNIQ+kRrQOp0whDalOGgAAAAAMrlNmDKpP1A2oTP8OpUn/EKJF/xGdP/8Tmjr/FJY1/hWSMj4AAAAADI+tAQyUnmYNq0rAAAAAAAqwVwoKs1qnCrJZ/wqxWP8Lr1X/DKtQ/w6nS/8PokX/EZ0//xOZOf8VlDTLFJMyBAuPwTMKjtOTC7FTjgqzWQ4It19nCLlh/wi5Yv8IuGD/CbVc/wqxWP8MrFH/DqdL/xChRP8SnD3/FJc3/xSTMkwKkdd3Co3wwgmwbyQHu15kBr5nZwa/av8Gv2r/Br5o/we6ZP8Jtl7/C7BX/w2qUP8PpEj/EZ5A/xOZOf8UlDRJCZTslQiS/fMAAAAABr9kZwTDbYAExXGkA8VxxwTDbv8Fv2r/B7pj/wm0W/8LrlP/DqdL/xCgQ9oTmjtBFJU1DAic6I0HmP//CKHXZQAAAAADx2xiAsp3oQLKd5UCx3NfBMJuewa9ZqUItl6xC69Wng6pTWYQoUMHEpw9LhSWNoEIpNRjB6D//weg+OwGrbsSAAAAAAHOcyEAzXqPAsl2xgTEb3UGvmgYAAAAAAAAAAAAAAAAEKFDCRKcPfQUlzeLCKy6HAao+vMGpf//BqjsugWyvwYAAAAAAAAAAALLcA8ExG1ZBr1nxQi3X94LsFa2DalOsBCiRdQSmz3/E5c3OQAAAAAGr9eIBaz//wao//8Gqe67Bq3OHAAAAAAAAAAAAAAAAAa+YAgJtVu6C65U/w6nS/8QoUP/Eps8ugAAAAAAAAAAB7KwEQWy894Fr///Bqj//wal+OkHptlaCKHQCAAAAAAAAAAAC7BSEwysTOoOpUn/EZ9B9RKbOy0AAAAAAAAAAAAAAAAHtLceBbL02wWt//8Gpv//B5///web9dwImN95CZPYJAAAAAANo2A/EKJA2xKdPz0AAAAAAAAAAAAAAAAAAAAAAAAAAAazwRUGr+KLBqn68Aeh//8Imf//CJL//wmM//8Kh/HIDIjLRxCcVgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAirxxcIpdVYCJzugAmW74UKkdtmC47OLAyKxwMAAAAAAAAAAAAAAAAAAAAA+B8AAPAHAADGAwAAhAEAABAAAAAAAAAAAAAAACAAAAAQAAAACDgAAAYAAACDgQAAgMEAAMAjAADgBwAA+A8AAA==","www.56pan.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAi9JREFUOI11k89rE1EUhb87M+mUoAihi/ojplBKa1oFE7AoCF2k6FZwUbKVrPpfuBJXXShIFTfu3Y6LQqmLQqiCCAnUxk0IVIqjhYnTzGRmros6MjXxbO6Dx7nne+++J2SkqgCICKp6G6gCIbANHERA7nQPETlrTM1hGG4kSfJLR3UYx3EjDDWbiZUuRIQ4jr+IyFy/309TVFXFMAy1LGt6cnLy2DDO+JEUZzAYtOI4LgdBwL/K5XK4rrtXLJVumVn0lKDb7T5W1bLv+6qqkiaLiKYhpSulJyOdAQE4OjrqqmoxSZKx6Z7n7RRnZlasTLqqEkWnBNdyuVyx3++TTU7P7vu+2ra9IQkkiSLoZU1kSqHICZ+s5eXluSiKiKLoL1G2ikhycXr6JcKbOI4ngiCYMAwTieD5y9dXrWazGQ+Hw7SB/jFnq3nQ6Uyl2OnEgNBx3ooFHLquG1qWNaGqIwTjLs40TVzX7W1tbYUWcNzpdD7Mzs7eGQ6HI1MYV/P5PM1m8z0QClAAHuzu7r7KYv5Ppmnied7P1dXVuqruGKr6A/i4ubn5Io5jwjAkCAIdDAYjNYoiPM9L1tbWngJfgRNRVRYXF8+12+1KrVZ7uL6+/qhQKOSzL1JEsG2bXq/3rV6vPwPeqepnYCgp9sLCwvn9/f0lYKnRaNQqlcoN27YvJEmivu9/dxxnz3GcbaDVarXa5XI5HPsj5+fnLwE3gRXgPnAPuAtcr1arU9mfC/AbrgFrpQjzRVIAAAAASUVORK5CYII=","www.7edown.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAA1NJREFUOI1tk0toXGUAhb//vuZ1M7Ex5lU7TcnDJgRLmoomJU1bULTtQqUUi+JCRAgVXWgjaksWtSBWCCI1IogU1IUm0GqgKrWtKU3oIzZp0lASM5PGTMxjZpKZzGQe9879XZoWD5zFgXM4Z3MED2BwUvq+G6D57zit0dBgo0GOurodt17Y5Lvyq+DyqWeFvd4v1os/JmX7x5/98EHDFvPRA21b2VjqRxGC+GqG/qFpLt9Vr6z4njp26X3R/2Ax31+TJ7a/1O1cvBGS03MrMhhelsHZ/xiaW5F3Q4vy0NGeZMkRufu+Bb1Dsr2949TpY6/vEdWBYhACAWiqQBGgYoNQsPISQ5W82tmX2tj01r6BE6JfW1iRlQffPfOJ1Dwi47gYCyWoLVdp2FKI21DQdI2c5TAVXmV4KoWh6WwOlPjujP780Y5OuVe5MM7h0b+WTUc1GZuO4SSnccsoAzdHSCQSpFNrxJbmMewlAt4ow8EI0ZSKkwi1Fgh2K1dH55tRDRxFJzgTpkDP8PvNexR6dd77ZpxXusYYuD2Doev4XTlSsRkWVvM4qhfdvnNQuTgyj6IZaIaBqTucvRblyZoCkslVdta4eb7Rg0uTmKZJ5eYAteVuFFVHMVxMhtcqtErvUn1E09BdLsZjKm+3WJg+L4aVp7rQj8djomklzCVACBXz4QpUPYJjq1iqFy1Q9djE0MR8laJpNBSnqK8qx+fzMjMV5tOhPI4LnjCC7N3qQ9V0RibSqG4/TjZFfVE8r+1pCkye+4Xn8rbFvm0mWemmpqyMbDbLyUdUljN5ioVJ0YYNKJqLr65HEEKAlFglLT3KgUZ+rCnTceWTlBZ5ON4X4XY4Q1PTdpofr+bpxgBtu3ZRUVnL6cEsi7YfJ2dheApmkxZnhXQs5WpI++nlo1/v73qjno7eKF6/i7ayLKWbypESgosZbv3jkLZ0cvEk6diSbNh5+MiFd0S3AJC25f/8t1hf77nzrXWVxcxmDYKZQhRvAUIIpG1jp9Pk4qtY8RXpqXvx5ESnOH7fmWTe9p+5oXZ98W3fa5GcC93jQdENBJC3LKzUGuRl8qHqZzr+/FB0/+8bpW0r1++pLSPzvNkz7HgX0gpSglfAtgAhAV1fHhLT6zP/AnPybtjVBXzzAAAAAElFTkSuQmCC","www.acfun.tv":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAA09JREFUOI1twVtoHFUAgOH/nJnd2clmJ5ts3KabbNKkGzXVFEntRbDUGjVNxGJ9URHEUsWKoiCCSoMIIi0IvihFhIj0QaJgjZe09hqxpQSLGJtojMZeYtpkc9lLupnMTmbm+OSb3yfGcyr/2uBUpDaqY+gSpRQohQLm9TqaVv/EVQaujKIJHyEErh+wWPI40NXoiJ6+CYUQGJpg3vaoNnXWRFwuiRZ2219ieHmGok9SI29SXFkl7/ikYjquD0XHR9YlYo6z6hM3dTrXWwjf45yznhf9Pp4uHeRz61mSYZv8cpmwJunMWMyWfBZWPFrXxB19dsnl3haLXbdauIFi391VdJ0wGHK30B46TllqXFBpoirHwMMRcmXBMx0J+i/lODpRQm5LWygFIzdWyNs+ieooJzcMsnXqEKbuc6x4P+/9tYNP7zjP9bDJlfkV1tUYvHHfWrY0VCJ/nS2hAkVTPMw3I3PYgOVcY3/pKBl/jIbVUXaXfiTjXGBaCqbyLv9pjIeRycowvZ0pem6voimd4WoZ/r74FV59BYsqQVbL4K6N8dvQEXaGobm5jnfPTPPFaAEBSEMXGJriZgBOiyR8/CAt06cpqDghKTBUmYJxG+lSlpmPu+hIQTLVQHsNlD2FtN2AH24EqKUsj/ffw8bsAazt21kw2pH+ErI4ScExqX1znPbkL4y/nOK5xutUJeJMF8vIJktHxnXOfnuYu/LDvHIENr8dYG57i0qKCK2Cms5ennq9jz39D/FAcoZTH+xhxIOO+gr0nrY4wwWYHv2dR59oZODEg0yNnaO+vg7Zto/AbKO2dRNnBp+n4KUQHw1w9vBpqidXeSxjob9/foafsibdrXthwzs8sneK7z6LonmXYeMLRB0bnFHu7N6PLX2IdWBv2sHA0DV+/sNA6ppGOrTIlfRO+OcyH2pfM3FoK6IihJi5iJ4bA09x6qVmhjcXYPJ7tJBNdczADGvoAJFIhJiTY27OpjrRiIxHmZ8XqOUwyveRWYEVjSGSt1DKmbheQDQEmhCI7k8mVEQDU5PkZCWqphIKy8jSMrIigkTiOSsEEQOZsAgKNvHyEkITLCz7iOFZle89djVSHw/jBhKlAMH/8xVoAkMGZJdcXu1c5/wLGTNe85wEljwAAAAASUVORK5CYII=","www.amazon.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAcxJREFUOI2NkbFvUmEUxX+vQlCRGJc6NTV5gG4ORsJUiLuLDtpBmhg3krfYCUdLQgKjIyak8JLa/gGODIwsmGhSKomjEgTso7QEzTsONs8HVOJJvuT7zr333PPdiyQk7Uka6f/hSLIlgaT9+aht20okEgIE6OnmpjqdzkVCNpLO/MzL7W2vcP70er15gRH+17du10t+vbMjSdo/OPC4arW6YGFGYDKZqF6vq1aryXXdv0nnAqVSaUFgBR9CoRDpdJpoNEoulyOVTmMYhhd3XZd5rMwTzzIZkskkhUKBcDhMPp9fKJqB306j0fDsVioVSdJ4PPa4YrG4/AvNZtO7b6RSABy22x43nU6XO9itVr1u2WxWrVZLsXh8ZpXD4fDfW3Ac58L9W5YlQLF4XM7JeEYgAMCvMQTCRCIR+v0+5XKZwWBANBZjK5MhGAximiaWZcFxBw6bsPYAwjcxJInP72DYhsQr4NLyqR/ZMD2GK2tgPsSQdAZcptuE9wlYfw63HsMNE0LX/xSd9uH7Bzh6A9fuwOp9uL0FgasnhqQ94InX4dNb+PgCHMDwdV5/BHdzsHrP76fG+SBtST9mpvNzJDlfpNOvC7uXNJS0K4nfcq4NSx5xdUIAAAAASUVORK5CYII=","www.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAitJREFUOI2FkU1I03EYxz//v5ubpm6WZB7KWUFMaIcdKorKxC4SQUVoQXYJAiG6dakO1aWOQUHRKSiKIvMQWdTZW0nhS4fcf0uXL/kyc+h/m9u3g7qXtug5Pb+H5/k83+/zMwL79OHrcLiNJLmogE0eg9l5QQIwARewnNdTDoFm30eosVQq3r5bLHivpIt7qLEE7mJA5/kJQUhXrk5LkjrOTQhGNfDFLgS4/wGgLqydgYj2toxraCQhvJYam8O60D1ZBDDXLcXjGV72/Aago93F929pWg+Wk0oJYiIyJtqOVFAcawo6uyZEtaXjp6NKpqSnz2NKr/m+e39ODx7Na3pmRc9exDQfSxdbgJD8wYgglJXY07ugvve5Y+4K/pCj3lLwwFgxoP1kVHgs7Tk8Lkk6eiwqd4MlNlrqvjy1tsQqWEJlHmDZzuhN3+q2azd+afP2sPzBiPzBiJxbLL3qXVRn10/hDKm1PZpVYOC2pGVf9iS3bs9y594i2+rNglONjGZ4/aSO3c0utjc5MQwwKsIUdF2/WXoYwL/D5MTZGT4N2BhGrp5VEFvIUOuN4A+WlfiqPCWf0ySTTTidfynIp/4v7EQmmzvWE0+NycVLG3j4eAmv18BOCdsGDKiuBJfTYHZJnDrjproqZ9HAY0kxX7YwOJwkHk/T0OCkcesqf3AoweRUCofDpOVQZW7YG8YR8Pv6DW94PwmgDKpqwWGWVpARzM0JkoALAn5f/x8SGsh2ARqUqwAAAABJRU5ErkJggg==","www.bilibili.tv":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAsVJREFUOI1tkrFLcm0Yxn+PnpN50ogsTE0SDIMKw2iIloYg15ZaGnKPoMaW+L6WxubGQBPClv6FOkEUQWhTNhhYg5pZctI8x+cd5KuPeu/x4r6v+3fBBT8mnU5Lv98vDw8P5f/1QCAgJycn5c998VMYGhqSuq6TSqVYX1/H4/GIxcVFOTc3h8/n4+Pjg83NzV93X7O6uiqPj49lPp+XiURCPjw8yHg8LpvNptzd3f1FYP8pZLPZfxVF+cftdpPL5VAUhf7+fnRdZ2dn59dn5W8U6XRaDAwMyL6+PrLZLDabjYmJib8SfzlmMhl5cHDA6+srn5+fjI2NMTo6is/no9ls0m63KRaL5HI5HA4HmqaRyWSEADg7O5MrKytEo1ESiQTBYLCDpyg4HA5arRZCCJ6enri8vKRer2OaJkKIToSrqys8Hg9bW1ssLCyQz+cJh8OoqkqtVsPlcnF7e0ssFiMSiXBycvIVwfbfp3A4zPDwMLqus7y8zM3NDbVaja6uLiqVCktLSySTSUKhENlsFiEEg4ODHQJN06hUKnR3dzM+Ps7+/j6xWAxFUTAMA5fLxdHRESMjIwghqFQqlEolvF5vx6Ber+N0OjEMg1AoxMzMDOVymVKpRDAYpFgsMj09jd1up9VqUSqVUFUVy7I6Bu12G6fTSbPZ5P39HbfbTTKZZG9vj2g0is1mI5VKoWkalmVRLpcxTfO7B4qi0Gg0KBQKRKNRDMNgbW2N+fl5qtUqU1NTCCGQUnJxcYHX68VutyOl/CawLItcLsf9/T2maeL3++np6aHRaHB3d8fb2xvPz8/ous7s7Czb29uk0+lOkQqFgkwkEsTjcUzT5PHxkZeXF6rVKpqm4XA4kFIihKC3t5dIJEIkEuH8/Py7idfX1/L09JRAIIBhGLRaLRqNBna7HUVRUFUVRVGwLAspJaqqsrGxIf4ABcw0OXfDRmoAAAAASUVORK5CYII=","www.bing.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABF0lEQVQokWP8v5OBJMAEZ/34zUyMBhYI9Z+BIXKOr4zgZ3vVJyHGN4mygYGB4cl73l3X5Yl1EgS8/sxFmgYIKF9nv+K0xr03/JhSLFg1yAl9WnlGY+UZDRGe76YKz80VX+jLvMJnQ7bDeU7WPwwMDG++cG6/otSw2eo/ficxMDDMidtpofSMsJNkBT8zMDDce8O/7KTW2UfiBDSI831NsbnUu9vk6B0ZuBuEeb4nWF5lxNQgJ/RJWfRj4xarf/+hssxM//z174Ya3+Bg/YtuAyMDg4Lwx/03ZeEShrKvkm0uSQt8QXMSI3LiO3RbduYhfW6230nWl7H6GF0DAwPD77/MzEz/mBj/Y1WN7mkGBgZW5r9Y1cEBAGO4WQnBHqV2AAAAAElFTkSuQmCC","www.btcherry.com":"data:image/x-icon;base64,AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAqBAAAJ4EAAAwMAAAAQAgAKglAABGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8AxcX9PKqq/lXV1f0r////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Aenr8iQAA/v8AAP7/AgL+/J2d/GV/f/2DnZ39ZPj4/gf///8A////AP///wD///8A////AP///wD///8A5+f+GgQE/voAAP7/AAD+/wAA/v8gIP3gKir91gAA/v9PT/yy////AP///wD///8A////AP///wD///8A////ALi4/kcAAP7/AAD+/wAA/v8AAP7/AAD+/0dH/LwAAP7/AAD+/8/P/TL///8A////AP///wD///8A////AP///wDj4/0eBwf9+AAA/v0REf3uAAD+/yAg/eAtLfzUAAD+/wAA/v+oqP1X////AP///wD///8A////AP///wD///8A////AODg/R/X1/0pxsb8PoOD+4M+PvvFLS391AcH/vgNDf7z39/+If///wD///8A////AP///wD///8A////AP///wD///8A////AK6u/FX7+/4D7e39FLq6/En09P4K9PT+DP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wC6uv1I9fX9Cv///wCwsPxU////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A0dH9MN7e/ST9/f4AsLD8Vf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////ANHR/S/e3v0kw8P8P+bm/hr///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wC4uP1K8/P9DKam/F7///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8ArKz8V5+f+2XV1f0t////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A3Nz9JFRU+rRYWPqxNzf7y2pq/Jj9/f4A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AMnJ/Ti/v/xDCQn99hMT/e06OvvKnp79ZP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AKur/VYREf3uDQ398zQ0+s/09P4M////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9PT+Cr+//UKsrP5V19f8K////wD///8A////AP///wD//wAA8L8AAPAPAADwDwAA8A8AAP4PAAD//wAA//8AAP//AAD//wAA//8AAP//AAD8PwAA/j8AAP8fAAD//wAAKAAAACAAAABAAAAAAQAgAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////ALCw/FRlZf2cVFT9qlRU/aqAgPuF29v8KP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AOrq/hdmZvufAAD+/wAA/v8AAP7/AAD+/wAA/v8LC/31r6/9U/Pz/g7W1v0rz8/+Md/f/SH4+P4H////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Ajo78dQkJ/fYAAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8tLfzVpaX6YS0t/NUmJv3bNjb9ymVl+5zk5P0d////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AO3t/RMQEP3wAAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v9nZ/ueMzP70AAA/v8AAP7/AAD+/ykp/NfGxv08////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8ArKz8VwAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/xkZ/Ol6evuJAAD+/wAA/v8AAP7/AAD+/UxM+7j///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wB2dvyNAAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/4mJ+n4FBf36AAD//wAA/v8AAP7/AAD+/8TE/D////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AHFx/ZEAAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/iIj7fQUF/foAAP//AAD//wAA/v8AAP7/fHz7iP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AoKD7ZAAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/xAQ/fCBgfqGAAD+/wAA//8AAP//AAD+/wAA/v9SUv2u+/v+A////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDr6/0VGxv85QAA/v8AAP7/AAD+/S4u+9cZGf3pAAD+/wAA/v8CAv78bGz7mDc3+80AAP7/AAD+/wAA//8AAP7/AAD+/1VV/Kv8/P4D////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDk5P0eoaH8Y5eX/GvKyvw62tr8K+Hh/COVlftxZ2f7n3x8+4lfX/umAAD+/wAA//8AAP//AAD//wAA//8AAP7/lpb8bv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wCoqPtetbX8TcbG/D5FRfy9GRn95wMD/fxERPvAcXH7kyAg/OMAAP7/AAD+/TEx/NLr6/0V////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AM3N/TOPj/p4////APLy/Q/R0fsz5eX8HeXl/RqkpPpj+vr+Bt3d/CbY2Psr+Pj+B////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A6ur9GHZ2+5H///8A////AP///wD///8A09P9Lo+P+nf///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD9/f4BaWn6nvn5/gf///8A////AP///wC+vv1Eo6P7Y////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wCDg/yB39/7Jf///wD///8A////AKqq+1y1tfxN////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AJ+f/GTExPw/////AP///wD///8Ah4f6f9fX/Sr///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Aqqr8Wre3+lD///8A////APr6/gZqavqc9PT+DP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wCrq/xatrb7UP///wD///8ArKz7V6io/Fr///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AJ+f/GTDw/w/////APLy/gxubvqY8fH9D////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AgYH8g9/f/CX///8AsrL8U5yc+2r///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APr6/gZpafuf+vr+Bvj4/gdvb/qY3t79JP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A29v9JX9/+onw8P4PgoL7hcfH/Dz///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wC1tfxNoqL7ZJOT+3V3d/mRsbH8VN3d/CX///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A+/v+A19f+qdaWvixVVX4uCoq+9sHB/34AwP9/W5u/Jfh4f0h////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AO7u/hGHh/x7JCT74HV1+Jd0dPqUbW36m4WF+oNKSvu5BQX9+lNT+7H8/P4D////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A29v9JllZ/KqDg/uDjY36eQAA/v8AAP7/BQX++khI+7xTU/q0DQ3984SE+375+f4G////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A7u7+Ev39/gH09P4MJCT73gAA/v8AAP7/AAD+/zo6+8lOTvq5Jyf829DQ/TL///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDBwfxCKSn81wAA//8AAP//AAD+/zU1+88yMvrVa2v7mv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APv7/gPKyv04Pz/7xQUF/foAAP7/AAD+/x4e++cZGfvqz8/8Mv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD9/f4B2dn8KpKS/HFsbPuZWFj8qlhY/ap+fvqK4OD7Jv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD//////+H///+A////gEP//wAB//8AAP/+ACD//gAgf/8AAH//AAB///4A///+AP////////v////7////+///////////3/////////+////7////+3////r////+////8B////AP///kD////Af///4D////A////+H//////ygAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP39/gGurvpaQED7xwQE/f8AAP7/AAD+/wAA/v8hIfrngID6ie3t/BX///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9fX+DFRU+rUAAP7/AAD//wAA/v8AAP//AAD//wAA/v8AAP//AAD+/xwc/OnMzPw6////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD9/f4BVlb6swAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8UFP3u3d38KNjY+y6QkPp4dHT6lHNz/JSNjft5zc37Ovz8/gP///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wCqqvpeAAD+/wAA/v8AAP7/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD+/wAA/v8AAP//SEj6wa+v+loAAP7/AAD//wAA//8AAP//AAD+/zU1+tPFxftC////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APz8/gMnJ/veAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD+/wAA//8AAP//AAD+/76++UwsLPvbAAD//wAA//8AAP//AAD//wAA//8GBv36qqr6Xv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////ALi4+lAAAP7/AAD+/wAA/v8AAP//AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/1hY+rGOjvp5AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/CAj9+NLS+zP///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AGlp+58AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w4O/PXPz/o6AAD+/wAA//8AAP//AAD//wAA//8AAP//AAD//0JC+sf///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////ADg4+tAAAP7/AAD+/wAA/v8AAP7/AAD//wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v/MzPk+Cgr99wAA/v8AAP//AAD//wAA/v8AAP7/AAD+/wAA/v/GxvtC////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////ACUl/tsAAP7/AAD+/wAA/v8AAP7/AAD+/wAA/v8AAP//AAD+/wAA/v8AAP7/AAD+/wAA//8AAP//AAD+/wAA/v+7u/hQFxf78AAA//8AAP//AAD//wAA//8AAP7/AAD+/wAA//9pafuf////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////ACws/NkAAP//AAD+/wAA/v8AAP//AAD+/wAA/v8AAP7/AAD//wAA//8AAP//AAD+/wAA/v8AAP//AAD+/wAA/v/IyPs+ExP98AAA/v8AAP//AAD//wAA//8AAP7/AAD+/wAA//8lJfrj/f3+Af///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AFVV+rMAAP//AAD+/wAA/v8AAP//AAD+/wAA/v8AAP//AAD//wAA/v8AAP7/AAD//wAA/v8AAP//AAD//wMD/f/T0/g6AgL+/wAA//8AAP//AAD//wAA//8AAP7/AAD+/wAA//8DA/7/+Pj+B////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AKqq+l4AAP7/AAD+/wAA/v8AAP7/AAD+/wAA//8AAP//AAD+/wAA//8AAP//AAD+/wAA/v8AAP//AAD+/0lJ+7+envtqAAD+/wAA//8AAP//AAD//wAA//8AAP7/AAD//wAA//8AAP7/8PD7FP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APz8/gNBQfvHAAD+/wAA/v8AAP//AAD//wMD/v07O/rNVVX7sQ4O/fUAAP//AAD+/wAA//8AAP//DQ399crK+z4uLvvZAAD+/wAA//8AAP7/AAD//wAA//8AAP7/AAD+/wAA/v8KCvz6+vr+Bv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD29v0MmJj7cF5e/KdYWPytfHz7jcvL+jz6+v4G9PT8D+rq/BmVlfpxYmL9o1VV+rF4ePuO0dH6OGho+6EAAP7/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//9AQPvH////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wC9vfpMVlb6s////wDV1fozeXn8jYaG/IFlZfuhGxv76gAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/v+np/pi////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD19f0MICD56vT0/Q79/f4BcXH6mQMD/v0AAP//AAD//wMD/f9FRfvCq6v6Xqur+l5HR/vBAwP9/wAA//8AAP//AwP+/W9v+pv9/f4B////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AVFT7s7i4+lD///8A////AOPj/CK3t/lSvr77SOfn/B7///8Axsb7Qqio+WL///8A5+f8Hr6++0i3t/lS4+P8Iv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AmJj6cHd3+5H///8A////AP///wD///8A////AP///wD///8AkJD8dIeH+37///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A0tL6NUBA+8f///8A////AP///wD///8A////AP///wD///8AcXH7l6Oj+mX///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9vb9DB0d+PD9/f4B////AP///wD///8A////AP///wD///8ASUn6v8rK+z7///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AC4u+tvl5fsi////AP///wD///8A////AP///wD9/f4BJCT55/Hx/RL///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AFFR/LXFxflE////AP///wD///8A////AP///wDd3fsqMzP61////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AGlp+p+srPxX////AP///wD///8A////AP///wChoftlb2/6mf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AHx8/YmZmfhx////AP///wD///8A////AP///wBTU/q1t7f7UP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AIGB+omPj/l8////AP///wD///8A////APX1/Q4dHfrt9PT9Dv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AISE+oePj/l8////AP///wD///8A////AKam+mJdXfqr////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AH19/Imamvhw////AP///wD///8A////AEBA+snCwvpG////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AGlp+pyrq/1X////AP///wD///8Ay8v7PDQ0+tX9/f4B////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AE9P/LbDw/pG////AP///wD9/f4BS0v6vays+lz///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A/f3+AScn+uDp6fse////AP///wC5uftNPDz6zfz8/gP///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A6+v8GSEh+un///8A////APDw/RIpKfrezMz7Ov///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AsbH7Vlpa+q7///8A/f3+AV1d+q2FhfqF////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AZGT7paWl+2L///8AhIT6h1BQ+rn6+v4G////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDy8v0PHx/66u/v/BSLi/p+Ozv6z6mp+WKEhPuFmpr6bubm/B7///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wCYmPtwWlr6sWNj+adCQvrJPj74zwAA//8AAP7/AAD+/wYG/fpzc/qX8vL9D////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AO/v/RQhIfvlDQ37+HBw9qOUlPWDWlr4s1FR+7YlJfrjAQH+/wAA/v8AAP//MzP61erq/Bn///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Aubn7TSAg++UAAP7/eHj3mZCQ+nhubv2Xbm79l4CA+om0tPpWycn6P0VF+8IAAP7/AAD+/zs7+s339/0K////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AXl76rQAA/v8qKvvdgoL6iVZW+rMAAP//AAD//wAA//8AAP//Ghr86paW+XRubvmcAAD+/wAA//93d/qT////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A/Pz+A7e3+1D19f4M////AMzM+zoBAf7/AAD+/wAA//8AAP7/AAD//wAA/v9kZPqncXH4mwAA/v8DA/79z8/7OP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBUVPq1AAD+/wAA/v8AAP//AAD+/wAA/v8AAP//cXH4m11d+q0AAP7/Rkb7wv39/gH///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDp6fwZISH75QAA//8AAP//AAD//wAA//8AAP//AAD+/3h4+ZQ5OfrPAAD+/8XF+0L///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A3d38KDEx+9UAAP//AAD//wAA//8AAP//AAD+/wAA/v9lZfirFhb87ktL+739/f4B////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APX1/QyEhPqFFRX87gAA/v8AAP//AAD+/wAA//8AAP7/HBz57gAA/v+Xl/px////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9vb9DK6u+lpubvuZOTn6zxgY+fAICPz/BAT+/wcH/f8XF/j1jo73g/Ly+xT///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///////8AAP///////wAA//8B////AAD//AD///8AAP/4AHP//wAA//gAIH//AAD/8AAgP/8AAP/wABAf/wAA/+AAEA//AAD/4AAQD/8AAP/gABAH/wAA/+AAEAf/AAD/4AAQB/8AAP/wABAH/wAA//AAIAf/AAD//HxAB/8AAP//7AAP/wAA///sDA//AAD//+////8AAP//9////wAA///39///AAD///f3//8AAP//9/f//wAA///39///AAD///f3//8AAP//9+///wAA///37///AAD///fv//8AAP//99///wAA///33///AAD///e///8AAP//97///wAA///3f///AAD///Z///8AAP//7P///wAA///tf///AAD//+AP//8AAP//wAf//wAA//+Iw///AAD//wAh//8AAP//+AH//wAA///4AP//AAD///wA//8AAP///gB//wAA////AH//AAD////gH/8AAP///////wAA////////AAA=","www.btspread.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAUtJREFUOI3Vkr0vg1EUxn/3vh/eaLUpiZixMlitFZqwIRIJi0VitmIwWkQiMVo7CYlB/AOExCIh2s0i0VZ81vs6x6ChFGlq8iRnuPfcPPc5vxz4F1pW0mtK+ruercegFfKHq+wtKX0NGcwa8sl4nPMVjhZC5qt7pvows89Fx0OiKxJBI0NYBg0FEVAxRM9QuL0j1UN2PcN4TYKnEq0ARirxDBgLxn78k4o1I2exsdFFtCbBVI6L5GWyS8qChhCGBg0FIngJgUewL4obQVSGYum+HgK/y2wNoYl2hwAhoUqgELMQ+NDsgucAfqU84Iqc2aD7E8TdEbSlzRL4gmMtTS54juA5Bt8BzwXfgu8pQZ6i2Xxj9Q4xs43pL0v28bpyKyBV9UWFH+fRQeYPJtDTOasNQ9Fh+k4mUZ2ms573NZtodjjudRngpj6DP+sVT5By7krjiF8AAAAASUVORK5CYII=","www.bttiantang.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAc1JREFUOI3Fk71rE3EYxz93SZAa1EsXX5CYwYKY5WoLtZqSi8EIEqpIuqndBIciIog4ZfM/cNREo9CpvoJQJSd0yXZFxQwpqJM0am7QX+7Scj+H9C5pOlTo4DM+z/P9fp9XRUrJTkzdERoIA1hNjNoq6f7A8WGWpw7y7J8Iaquk7zytFQeD540J88lZMtsSKBLk+hoxLWafHkta9a/fE41GI/H67ZKxMpHSF1aYtZrog+BKjkwYQFVBrrmkxpLW4xyZP+sHtEO3P7UAfnfQlpvoL9+8M7bI57LdCkKA7LRp/mhpH3/GjPovdNlpo8Vi9tF9WJePUT5zOGveuP+qCHDrSr4U38OXoAUV8FzBUnVRP1ml6gs8uJa/GY1gn4tTAphzRRGgMEI5OYzpYwkBniPYO7TLvpTPm5MnRi3PEUzfLT383CIo3XMEniNQlV4XXQIVpCvITp2yHl3YnVm8PjI6Oa5b0hW8aDDrJ0tXIF2x6XjUoAVHIJ12EPDVPtS/JbZUMLjG0MYM5islY77Cptu+moo/Dwhc0VPtJ4io3S0M2kxhxkxvDBB6OUrfDMIAxhHKjYV77/vBQxHs/VGsfl/h4rQJEI1g+z7lv3/jX+6Xt3yF+XD+AAAAAElFTkSuQmCC","www.cr173.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAkpJREFUOI3t0sFLk3Ecx/H373me6TbdmhObppiOMBNCs3IaFtEhSi2z0LDoYKc8SnWpcxGkWUQdREShEilECKFAyigqI0kbFlE6OlTocqnzmfPZHn+dBDX/hL6n7+nFh+/3A/9HLC8dEpwUeDW0GoF0gHwFyoBJDEnJfgulg0dF4z+ABnBf2sjgZMfE6FTD0HRgYaE490WKFivbweR1ocdNl8ce1JkfXC+B1ikhj4s9jpndde2228MPDlTsAxkBlUImfdVjrwfcafPBESUGwCNZCJiEUWkQo2hOtle4ZkvruieuzvmLXZWIlsiyPjomh7J9J857wsbhTkcJvTI/ZQmzGWRqEuZws9xzTUkk89Tor36im4LPckicXBmvtuAI25htw6HX1HKHL2zcaqBOqCj3fo8bZzREkxaVUzmffn4jIz/zo0kqj1cA1fzAymL90zfWm1Ez0Xhf7jkGMjswslgfLsq54iXcpYVCRvJ8HDyYeJlYdaDTZR9oeVPebahGi2c2nLWTWFUjey9RhETcCIFAkanWoC4tBMbmD84QXf3jt7CESpotLl2WGAqiF9E6jWgNLTdAmcHarkuNwNe4L4JaXyWrViHp6LgVQ7HaReQ7Sf61b1QWsPRkHPL0S1UTn/tCbeXMNd2VZZu75C4eyqLiZGLd6kwkXY2bdheGYy0gAM7JSqax3towOH7WpuvJdosZUxXTNB2LEdXnfu4nz5+ATIiivLQgn/SJvtUAAPIymfxxp7FU6iKc5SQ3fIHj77w4x7PElvVKCMBf11nlDF7Ku3YAAAAASUVORK5CYII=","www.deviantart.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAmZJREFUOI2Nk01PU1EQhp9zzr29tLe3UeoHRKKtjR+JLtSoiUJ0g1GIC5fGnWt/ia78BbAw6M74A9yo0YUGiR9FBXoLalDQgtjSSm/vGRctYmKITDKzO8/MnPcddfv+yMhC6eF1xxUQthYKWpFid2Fw1Jw47T8oFOrUai6OEYzhv6mUIpdr8Ln86bjjusLnT0nevU/+aaA1KLX5AHEMCLiu4AAoLXie5fChOtYqyuUka802QTpFqb+hCqUFsaoNAKhWDRcufiUIIsbHs9wd6yWbjfB9i1LC2ppmZcVBOv9kbZvmAIgompHm5Xg3Z/q/c+TID27eWiKRsIgoQNCm3bFS6WJuNs3qqsNsOYUjAp5nuXFjjny+StQyKAUfPmyj+DYgk2nRaBiKxRQHD/zi5Klljh2vADA9vR+n2dRcvTaLWMXERJafKy79A4vkclXCks+loXlQ8PHjASZe+Tx5mmF4qMLQ8PzGCkh7tHt3e0inLWf7F0l4Fte1LC97+H6Ly5cXmJ9PUijU2NVT31BsXYXSTIAxUK1pXjzfAQL9A9948ngnxlhy+Srnzi8QZJq8ed3Ns6e7cJ2OjGIVvb0NrlxZJJ+v0Z1dQ0QRZCJSqZgwDJib9Zmc9PnyxUNr4ejROtqsAwT29K2yd18NrYWlikcYBkxN+YRhkkePtmOMYIyQTsfEsUJrwVqFozpmKYcBpVKaYtFnacnBdddtLXR12U1d6SQ8y9idHJPvUngJ6TzYuKo4/tfTcdxeG8BpRYpCoY7nCVpt7RytKPr6GpTDFDqbHxwtzaSIY4gitaWMYyjNpMjmB0d/A7FZFBJXwP6nAAAAAElFTkSuQmCC","www.docin.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAnNJREFUOI2d0k1sTGEUxvH/vfftHTOtzrRDptrQBhVK2kZpuqkQViRIhZU9G0EiEonESmIhiMTCTuhCfGza2BCVxkIiUkVESaimVdPvMTN37td739eq0sGGZ3cW55cnJwf+M3266xaA+J/la3rnsRKi65+BC7qDWladKo64V1Mb6wf/CvTrA+SY2ZWbGjsyP0Uyl4vplTs22QY6E3yY7VbGGEkzwKZt4g/ggd63Z8Zx78bnqtLrY12Q0QQrHMY/TDJW8AiNGNoWaKEokbhXBvTrjqPON/dOe2I1VGlsUYtWikj71IoqkvYob3IuQ84ympP1ZGjtA7AAHuv1sWDSHmpN7WVz9RUqrFp8OYawKhCWwDZsDGM5UsOP0GFL69bPB62z1381qCTda1opvjsjhKWnOOYzhDlOJEOUkgizEi+aIG7GyQhN2mr6sthcAEjMTkNJ6pZ3sKFqN18KC9Qs209NRSeKH5gkcZNT3PzYjrBWIsnnFgETYCGr1kil8FQRgGJQpCTnAHg9M4AbLRC3Mkx6WfxQYjEaLwNcP6AQFnDDPAC+0vg6AOD5bA+hMQ3AfAmCyMbCC8uA6kb9ds6dx1EFALQWaGUAUJIAMQCyBbDMauIUXpbdIMK8veCZl9/PvMUr9pINnhDLpRmx8hT9Rh6+v02NWItNhkyqEpvg0iJgAOT0cR75rz4NDxWbpXAQJAi1wo8kYZDEDQMCGdCUbqBr+4qTh4yH18sAgBd6G5NO4uvgu6gx70V40iKIFJGUxISiua6BjrbV53uMGxeXfq+xdLivT5CieC4Ph98NT7fJ0DUTlWGhpWXLQJp1p7uNM6P8lp8RURnH4KHKrAAAAABJRU5ErkJggg==","www.dongting.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAttJREFUOI1tk0toXGUYhp//zJhpzkyS6XghZCZNp4toJXQmUIMQQyMKXYhQXLS1F61BcKtbu1FxJw0RpOIF66qKRjPZCA2kbbRYQelFzaVidSa0BTVpztQ5x/P/85/zuUgiafBdfrzPy7d4X9gkETkmIhNyt1bWbsOb/RvB7SJyeZ2YWzEye1vLT8uhXK/rjWETIpJd59QaXAbOAdmpmyHjvzVYCS3aWsJmRGAjsinFy6X7eLLQBnAFeFwp5a0HXAbK7y38zdkbwX9g9GcNP9HCnVQHgY34x0acGMxzqPdegDGl1CtKRI4Bp75aDPhw3kPbCPvjDPd8/QmJZghA6Gb55dGD/JEroq1let9O9uTbUUoVlYicA4YPTN1kObSYK2fpujTJcyMj5AsFAC798D1ffPY5M0Mv0WjrZE9Xhun9JRKOM5YEhq8uhdzyNYGNSH87wZvvjOK6Lo7jYIzhmQMH2dH7INfe+oBfh0aYuf4XiABSdgBmb4esaIOnDVknIp1Ok8lk+ObCBRbm50mnXfKFAk71ZzBNMIbzvy8BajXAxBGebuJpw+zcHOPj46RSKYo9PRSLRTyvzrsnTxKk2sAYME0kigG8JMDuB1zq2qBtxJbunYydGGVgYIBPT5/mTr1Oqb+fypcT6OIjqx9Elsd6ciBSdYBKX66V+1OKpjYsDT5L3OJitAEgFsFog8l2sbzrKWgajpbyIDHApAO8DTA6uA2MwbR3cmPfq9hMjsVajUOHD+N3PcytoReJSdKRgONPPLRWQ1VxlFLnBSpP78jx0d5eME1sSxs2k2NXqcRirYZp7ySWBB0JeH//brq3umxpbX1dKVVNrvX5hYTjbD/a11nelk7yxvQCxPHqRgCiiCP93Rzf20f3VhfXdT9WSr22eUxZETmltZYwDCUIApk6c0a+u3hRGo2G+L4vvu+LiNwFqv9ZZRmR51GqDJQBT5CqQk0CFaVUdaP/X+UDjgZGc8x2AAAAAElFTkSuQmCC","www.douban.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAYhJREFUOI2dkjtLA0EUhb/Z3ez6iJFVsIhgobUKahH9BQr6D8QfoFhbaGEj2FmIKWwiiIWNFgraWIkvBAuFdC4+IIXNomajcV82E5OVJEQPDMzcmXPn3MMRbHadce+O8R/0xc4FC2YIwLsNYYNEAbSZAGglcrjRKFv2mBPQZsoGBmyf7uB7PkEY1CUqQkHVVDDkGQDdZGZ3GscroAoFXY1VXapQcLwCM7vToJtympIHeZuP9SJNQucmd4umqJGfvcBnKDnAZ/hF87wB8UoPJHzf48l5YXhpEOK/tOfhce2ZztaO6EgNelYTEQWqqtGdSHKxfE2L3hx5WPj6oDuRxMWroUCHzEkGN3BJ9YyQfchi5SysnEX2IUuqZwQ3cMmcZEAvNyibCPBqczB7xGT/OGJRQF7W4xCuhBzeHTOVnoB2s4qCNxt82LraBmBldBUcwJF75J0v30YUvNmE6T8mcVZAoiKJe5f7fLrFhshNMeMniWUPinYdShUYpSD1ahdY3mip8Cf0xc6/AVR5hQh5iqk1AAAAAElFTkSuQmCC","www.downg.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAAoUlEQVQokaWSQQoDIQxFowTcT/EGHsRjdGXxaN31GB7EG0jdBwJ2McXKNNWBvl1Mfr4fomKM3ntmhhWImFJC730IYTnd0Wd2d5gZe6HuCswmD1Jtt/Z2+LyazRq3NMGxKJTb9TkX6Hl74dA55pEz/MAaN4plh74PANTjMrb+y2CNO+zbHwtlSUC1QIYvCmWgKgjGf0/QiHJuEdwvFgDOn/cLNeY4LB6GOCcAAAAASUVORK5CYII=","www.easyicon.net":"data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAxMzj/CgwT/w4QF/8GBgb/LzA0//Hx8f/x8fH/8fHx//Hx8f/FxcX/EBEX/wYGBv8UFyD/Fxkg/wYGBv8AAAAACAgP/woME/8UFyD/CgwT/yssMf/x8fH/8fHx//Hx8f/W1NX/BgYG/2dnav85O0D/BgYG/wYGBv+IiYv/AAAAAAAAAAAmJyn/AAAJ/wYGBv+jpKX/8fHx//Hx8f/x8fH/8fHx/1dZXf8GBgb/RUVL/w4QF/9hYWL/AAAAAAAAAAAAAAAAAAAAAD4/Rf8GBgb/foCA//Hx8f/x8fH/8fHx//Hx8f/x8fH/BgYG/wYGBv+EhIf/AAAAAAAAAAAAAAAAAAAAAAAAAAAlJSn/BgYG/+jn5f/x8fH/8fHx//Hx8f/x8fH/8fHx/6mop/8GBgb/OTtA/wAAAAAAAAAAAAAAAAAAAAAAAAAABgYG/05NUP/x8fH/8fHx//Hx8f/x8fH/8fHx//Hx8f8/Qkb/BgYG/05NUP8AAAAAAAAAAAAAAAAAAAAAAAAAALm5uv8GBgb/Fxkg/2FhYv+IiYv/k5OU/09QU/8GBgb/BgYG/wAACf+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYWFi/05NUP+zs7P/qain/6mop/+fnp7/nZ2d/yUlKf8GBgb/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOLf3//P0c3/ycnI/8XFxf/FxcX/s7Oz/+jn5f/x8fH/hISH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOjn5f+9vr//r7Gu/8nJyP/W1NX/ubm6/7Ozs//Bv73/8fHx//Hx8f+jpKX/AAAAAAAAAAAAAAAAAAAAAAAAAADo5+X/8fHx/+Lf3/8/Qkb/BgYG/8nJyP/Bv73/3d7e//Ly7//x8fH/s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALm5uv8GBgb/OTtA/2dnav8KDBP/OTtA/yUlKf/x8fH/8fHx/52dnf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTk5T/BgYG/09QU//x8fH/hISH/wYGBv8/Qkb/8fHx/5+env8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEzOP9nZ2r/8fHx/9bU1f8GBgb/8fHx//Hx8f/W1NX/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiJi/+dnZ3/8fHx/+jn5f/y8u//8fHx//Hx8f9xcXT/CAgP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUFP/n56e/wAAAADd3t7/0M/P/93e3v8AAAAAs7Oz/wYGBv8AAAAAAAAAAAAAAAAAAAAAAAEAAAABAACAAwAAwAcAAMAHAADABwAAwAcAAOAPAADgDwAAwAcAAMAHAADgBwAA4A8AAPAPAADgDwAA5E8AAA==","www.ebay.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAHdJREFUOI1jYMAO1BkYGLYzMDB8huLtUDGigAoDA8MrBgaGTAYGBh4ozoSKqRBjwDoGBoYcLOL5UDmC4DPUVnQgAZVDAYwMDAz/iTEVF2CiRDMDAwMDy1MjCxQBaaNZKPyv3gYo/ImcotR1wagBVDBg4BMSxQYAAPuSEVVY94jLAAAAAElFTkSuQmCC","www.ed2000.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAfdJREFUOI2lkUtoE0Ech79dJWYjSau2qcW0jZDSLoZYRfFRsLYHEcWD9OCh14AgiIg30YOCJzGHetNcLZ681GcPFgMaPTT1AaZK0NAmbvPYWBOy26YJ66EkkF2bi38YGGbm++Y/vwFTBWXJMK+1KvF/YICtZrjHLUFcbykLx3XBIgCYOOUj8jFNUJaM0PQUupJEU37ye+EzyaTC8+hiE9wQBGXJ6HFLLBd0lrI6oekp1NgsWuYX2cQ3Hs0kLDdbOnButzPQ7+HouTOkZx7z+tU75r/nNwUtgmP+LtScykLiJUmlzI9UoSXYENTDKmo1RAFezC9z6+YVvn76gudt1Ehlii1FQj2Di+NDlEpl9o5cwHv+OoIgcP/SaTq0Re7GOxpA7EOkSSbWO9jm2sGefQEq+Tiqmmf05Cj7nX/oP+Dj6cMbzL1/w+S92xw8cqLpe8V6e06vj+6xcWztO1GfXOXaYI4aa5TXJe48eMburk6Gh0f+nYHDvoXKSgE1NgvA2koBgIxSoluWmTg+xuFDQ+TzWaugPpmLRPEHBgAoqwr6amXjwK4+ens3RrVatYYYlCXD43aQymqWTdfZywT8gzgcdirrVUKTYUuIQlCWDNnbTp/Hha5VSCwVSec0wnFdMAdmhhtPEEWBzjYbtNnQV2ukc9qmgLn+AvHN01FbrhfwAAAAAElFTkSuQmCC","www.facebook.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAPZJREFUOI1jYKAQMDIwMDC4pa44/OXlLRtSNPKIqx3ZNTvCloWBgYHh34/PNnwiiiTZ/OfHZxsGBgYGFgYGBgYWVg6cCvm42RkKEi0YTHSlGL5++83w8s0XhoLWHXA9LIRsyow2YbA0lGVgYGBgEOBjZhDgQ7WMoAFmetIMDAwMDAX1SxlOX7gHcRWSdwkawMXJxsDAwMBw9f43BmzhhNOA7XNjUPi7F6UyMDAwMDx58YkhtXoTXJyJkAvQwcHj14hzgbV/MwMDAwPD0Y21KHw2LgEGDi5Bwgag+xdXOiHZC4PUACEZ/SOkahSRNjhKqeUMDAwMDABFgzKv9kFMnQAAAABJRU5ErkJggg==","www.flickr.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVQ4jWNgGAUIkHDVgCH9ZhFD2u1MhrS7cujS/wXLdf+L1Rb9F63N+c9foogqm36riyHr7n84zrzzjSH1Zixcs1h943/Jxv9wLFH/869YXSZENvVmIIpmZENiLyr+F6pyRdGMZMh/wXJdBob02yuwGpB19z9D+q38/+J1c7AaINn4/79YbR0DQ8bt1bgNuFn0X7x+KU4DROtaGBjSbyRj1Zxx5w9DwlWD/yK1UTgNEKy2gYRDxq11mAbcqoYHonjdCkzn13WhxkTKjRCGzDszGTJuT2ZIvW6PEY3C1YH/Jetn/hevn/xfqMqV/PQy/AAAuXrkMa1I5jkAAAAASUVORK5CYII=","www.gome.com.cn":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAJA+T/EQDn/xUA5/8XAOj/GwDk/xEA8v8MAPD/DwDi/xUA6/8aAN//CADi/y4h7/9TPuf/Cw/k/xIA7v8NAuT/EwTi/woA8v8MAOP/EwTo/wAC3f8ABOT/Agve/wcG6v8AAd3/AAH2/wAC6v98cvv/3eDo/ykq5v8TAPD/DwTd/w0B5/8CAOD/AgDo/wAA3v8PEej/Zmrn/6ag7/+qovn/bGz0/yQe6f8DAuH/jI7t//L28P8uLtr/DQDj/xIC4/8VCe//Zlry/0tE6P8bGuD/j478///3+v/m293/wr3w/9nY///V2/j/eWvp/52N8v/i5uv/NTPj/w8A5/8RAO3/MzDk/+33/v/x7Pv/x8by//Hz/f/Nx9L/NyPC/wAG3P8uKer/hoPw/+Dk9//28fr/8uzx/zc22f8PAPP/EQPd/xUI8P9ubOj/9Pf1////6f///v//2t3y/4mP2P80NeP/CQDl/w4D5f88M+f/uMP9//r/+/9UVdv/DwbZ/xUA6/8DAOb/BgPp/0hA5//Jw/z//f/+/+Hd4v/bzOf/5974/7rA7/9tdeD/GxLX/0c/8P/p9vT/fHnV/xgA5v8JAt//FADn/wkB4v8DAuL/Pzjn/+Ll///29/P/w8Te/62q2/+5uOr/3937/+Dg+P+/xPH///j//83K6v8hAOb/AAHs/w4A6v8MAt7/BADs/wwH5P+iof3////1/6+mx/9gW+D/bm3l/0k42/+imfP/8vj///X1+///////trbm/zw64P8IAuP/FgTh/xAB3/8EAef/TUrt/+3v///s7eP/XE60/wYA4f8FAOv/MS7o/2Zk7P97dPP/mJnp/42S5/8lGub/BwHi/xYA5/8ZBOL/AADl/wIA4/99fe//+P///+Xj4/9YVL3/CQDl/wAB7v8AAOL/AADm/w8G4/8MAPH/AADu/xEA6/8RAOf/FgHq/xED6/8DAOn/Dgvd/4aG8P/9//X/9PXh/3h/yP8tJNL/HRTW/xgV4P8MAev/CwDm/xIG6P8SAOr/EAXj/woA4v8QAeX/CQjg/wAA5f8cEeP/d2zw//D1/v/y/Ov/59Pm/97O5f9naNj/BgDl/xID4P8YAN//CgDj/xQC6f8VAej/DQDk/wsG5f8NBOf/BwDm/woA8P9ANd//mJL//+Ld/f/Nx/j/Pz/f/wAA4/8FAuj/DwLq/xAD5/8TAOn/FQDr/wgA4v8OAOj/EADh/xIC6f8GAO3/BADp/wUB7f8ZFOH/HRXr/wIA6/8NA+n/EADi/woC4v8RAOT/EAXd/w4B5/8UAO3/EwHe/xgE5v8QAOj/EgTe/xEB6P8OAef/EwDj/xEA6v8NAef/GADk/xkA7v8OA+b/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","www.google.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAfhJREFUOI2Vkz1oU1EUx3/nvXvfS15jqnVwcHHwA4UqdNAWKoomBcGhWNGpk8XFxUEUcRaFqKtTEQyC7urgUBoQtNRNFCsIbSF0qI3WNk1y38d1SJDmQ8S7HDic/4/zP+ceyRfsODAdm+oA//Fcr68CXJF8wa71EtfCVowttQgyGtJK8Nx2iOolXqvDzTFNmAi5QcXeXcL7rxGlzxEvP8Z/ILGpDjid4g0DhYse2oGHbxocv1elXEkQgeJ81NYBQBdgM7Tkj2oWVhJ2eMK+jFAsGU4cUMQ9ZtEFkFYc3u/yy1gcgcWKpR6Bls7qHoCsJ0zPGHLHNOODitWGZXJUc+NpjZ2pboLqTAQaHpcMc99iRg+6fLmc4c7zOnNLMVm/G9DVAUBKCfPLMbdfGwCunvVwXCFKumvlzN1Nuz1RqVkuDWmGD7ksf7cEynJhxCOxcP5BFROCI38BVEO4ntOcPKwYe7RFVgtRYhFXmLkV8Gkp5tqzOv3brLRZqIaWiRGPVx9CAiUEGrK+IAkUZw3pf83Ac2ChnDB52iebgtUty3rDsm4s54Y0T2YNgWqHtFmwFmoJ3J/wOXVEUf5hWfmZECfw4q3h3WJCoDuG2HlM1sKGsdRiUALKaX6utBZ0x85cr6/iAFOt02wSpel7TyDsTgv9vpD1e4uBqd8JecJJIf0F1wAAAABJRU5ErkJggg==","www.google.com.hk":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAfhJREFUOI2Vkz1oU1EUx3/nvXvfS15jqnVwcHHwA4UqdNAWKoomBcGhWNGpk8XFxUEUcRaFqKtTEQyC7urgUBoQtNRNFCsIbSF0qI3WNk1y38d1SJDmQ8S7HDic/4/zP+ceyRfsODAdm+oA//Fcr68CXJF8wa71EtfCVowttQgyGtJK8Nx2iOolXqvDzTFNmAi5QcXeXcL7rxGlzxEvP8Z/ILGpDjid4g0DhYse2oGHbxocv1elXEkQgeJ81NYBQBdgM7Tkj2oWVhJ2eMK+jFAsGU4cUMQ9ZtEFkFYc3u/yy1gcgcWKpR6Bls7qHoCsJ0zPGHLHNOODitWGZXJUc+NpjZ2pboLqTAQaHpcMc99iRg+6fLmc4c7zOnNLMVm/G9DVAUBKCfPLMbdfGwCunvVwXCFKumvlzN1Nuz1RqVkuDWmGD7ksf7cEynJhxCOxcP5BFROCI38BVEO4ntOcPKwYe7RFVgtRYhFXmLkV8Gkp5tqzOv3brLRZqIaWiRGPVx9CAiUEGrK+IAkUZw3pf83Ac2ChnDB52iebgtUty3rDsm4s54Y0T2YNgWqHtFmwFmoJ3J/wOXVEUf5hWfmZECfw4q3h3WJCoDuG2HlM1sKGsdRiUALKaX6utBZ0x85cr6/iAFOt02wSpel7TyDsTgv9vpD1e4uBqd8JecJJIf0F1wAAAABJRU5ErkJggg==","www.huacolor.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAwRJREFUOI1dkltoXGUUhb///GfOnJlJM0kMuQyWUkVQSU0L+pCaqqApSBSpomhbUrFqHqx5KEL1RQiKNyLViq1XsAglRWJpFcU+CsW2VivGEpKqaR/aNCQ5M8k4l3P5z/Zh7JBxP+/1sfbaS/G/OTQlbksTu33Y7lK9ybKV5SeTntb8mIDP53zOjXSo+Pq+Wi0e/UVuaE8zcWnm/L0LQURJKxLpBC3NLm3pJK6l43Tn2k+ulHnl3fWq0ADo+VLcu7o4ODX9xwNerucrleavdIZsU4YBa+73LY4d2xnLohlF280bTs4V2XG0Vy0qgOyYKGBdewt3H9h9YXxQ9ZjVzvrOyDbXeO/H1y6ulVDQfkTm9v6Dix57G06Qn5sUyAaUeQghh0SzOGtOqI35i6fk2MPDJ7Z82rR0oTOohISlgPSmBzfbdfFPaRcYI3KeE5RzPSLlmzfkLC8rtW3/PaflqHfZjKggIKpGhFV2KQA52ZomwaFYGKpnK1LP2bLLK1QZPLy1HL16YOrrVGG6O6wYSHXN1Bz8w7NonogjUAhaBx6W9QHKPovIYxj7GRLWfTlmPxLchcpK1B0HIXHVy9YAeXkyNLgWQmS5FX1r/2uq/9v3/rPwnXzW6pPNbx5YHpuyCzuc5aLBMQHGNsYCYEk64iVBexGTV9dV1PFvfmto1yX/HPOWS9Dbu+KVXFP2CSohcaprtgbI44snGE/4db5To2lrAITlKxTXv/70qWFVmF/qxq8QViNUd99EDVCS81YZQwlUqbIGzdbVevU2P2TMn/7ExLHtrl9ImjCGVPtlYLyWQczHjmIwilRLn/23lZv+cOfVUfFakxzOV8gAj0ST48OO73XWiqMkecfje4FrtTfuadbAC4GR/ZrI+qLcx/OFp4jFjlPaFyWxjkQTYZF0nOXMnUMvAkcW9ylTb6LsaVbACBKPmthkj1d7eas4wEzUgUK40S6w87bU996ml/a986iarJ/XUOUa5BZEhojD+7GT7TTlimjnDOWFI2zcdVoNvRmu1vwLOjhUdh48IqoAAAAASUVORK5CYII=","www.huihui.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAoRJREFUOI1tk01vlVUUhZ91zvu29N5SYsViQylCcgPGEcWohWCNDkhMTElMNIY4QsEQxzpxQH8BQ6clIfwBPxIdGI0f4QdQQw1YSa9CRGkp7b3t+3GWg4v9MJ7Jc5J1kr322mermMGAAf2Xirkdd0mu7GJdyDv0dAdnAChKQ/uxkcQmdWRa2cmPSe3rqr68jMpFaWBLtxaVAaj5lMObn0uSbW8yDI2Y3fsUDr3m/Nxxsd61q2rr3c0TVjGDXYOXGmh0gu0nTJ4le+UD0u2v8MI31PM3YGUFr/0JS7dxt0bFDFbMzOHTyt75zK42tiqEzIRMpMpOW5Vp/+Ty6tvywl+9DJw1FY9O42JNvnOdun1TCML4cYXDk6RbPyj9cQNAYewIOnhSXm5g8ziDmJnBUQk7dZZFe85GYs+BXurL9+zFnyVsnhjpEYQfT8GKUnMfXl2W27dg+KDiaAs9O6U0/y3p/m/S8DiAdOAE5E31pvevg9BzQFnbGw8lYVddBcmpWhfFQ9so9DUNFmXHOG1zgERfEw30K3/jk96cYwaxX/Hoq7h1ShIQ+0WqwbXQNgd0llzOXpDAKFevO/6fdSliZq8+EMaBvEE8c0VhEFibU3j+DNqdywvX8K/XNqmRJwkvvCU6c2hXofz9WehvKEOBsLdlXnxX6bsZh9ZLUmvS6di09Oh3O/ZJQ2Pm6QmxetduSPHli9b4lKr4nlVcCnY+Qfb6Rcwg6cdZstMfovFTve+ogKsu/uULqq8/JZs6j8aeo7z6EWn+e1RcwpTB9coehYE+Ex7InSFrdL/ioWdc3/tbbi/aGyuKjUdOaViUwWrel+8mq3sOby40O5YZQgAbUtqpbbv/A3y1VkWI39QYAAAAAElFTkSuQmCC","www.iciba.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOI2NkiF02zAURa92BjKWsQV6zGWGoR5zmM06WOiwQgcadsxmxWUOc1gMHeawmC0wYSlr2BtQl9qb1+Wd84/+15GunvQFHSUh2u12l0hCxLVKQiSVsiq1TrgeMLRZ9ZerACYJUVoACFixiGZ88kua7RmAQx2xaTHvnp6m6KWwluPHRsVJyg7Wz92DFIbhv51Y+zZAaiTVegNI0t39SWmaDkI+dAs33OMBU2AyPpMfYfOfN+gB2uXTJXdGIybjM80R6v3pOkASLriJ9gB4wGQ0YvvwjOd8xnGcQcDHbuG7QPsVY9IuFgmMuUV8771DNf0D8FuP3gJna/Mf7pibKKCRgzFCrx2tpuDXZb8LSgOtQYLeGLiZ3PCnXYW0nnL5dD0H1cvKJlmGv7K5f2jwSZm1QBTQyuGbEQIqMxu+AvP5X1Mlc2ZkEAV4twsq88Qyjl8Bzz60O+B46fsG+x+64307Z9PaehnH5HluTFEUqqpq0Mh7yvPcAPwCPY31TFrAi+8AAAAASUVORK5CYII=","www.iconpng.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AlWjzoVoT7f9aE+3/WhPt/2Qh7u7g0/ot////AP///wD///8A////AP///wD///8A////AP///wD///8Ax7D4UloT7f1aE+3/WhPt/1oS7P22mPZt/Pz9AP///wD///8A////AP///wD///8A////AP///wD///8A7eX8GGYl7upaE+3/WhPt/1oT7f+JV/Gz+/r9A////wD///8A////AP///wD///8A////AP///wD///8A////ANTC+T9aE+39WhPt/1oT7f9pKe7l6eD7H////wD///8A////AP///wD///8A8ev8E8my+FC0lPVxvaH2Y9/R+i/y7fwPe0PwyVkT7f1dGOz3yrP4UP///wD///8A////AP///wD7+v0BsZD2dWYk7ulaE+39WhPt/1oT7f9bFO36hFDxvNvM+jXMt/hK4NP6K/z8/QD///8A////AP///wD7+v0Bmm/zmFoS7P1bFO36gkzwwJ929JKUZvOjaCfu5VkT7f1lI+7r39H6L////wD///8A////AP///wD///8Axaz4V1sU7fxjH+3wyrP4T/z8/QD///8A/Pz9APHr/BKMXfKuWRPt/XtD8Mn39P0H////AP///wD///8A////AHtD78laE+39vJ/3ZPz8/QD///8A////AP///wD///8A9PD9DHE079laE+39y7X4TP///wD///8A////AP///wBcFu34YR7t8vTx/Qz///8A////AP///wD///8A////AP///wCrh/V/WhPt/6N89Iv///8A////AP///wD///8AWhPt/W4w7978/P0A////AP///wD///8A////AP///wD///8AvqP3YFoT7f+WafKe////AP///wD///8A////AF0Y7fdfGu318+/8D////wD///8A////AP///wD///8A////AKaA9IZaE+3/qIP1g////wD///8A////AP///wB/SfHAWhPt/6+N9Xn8/P0A////AP///wD///8A////AO7n/BVqK+7jWhPs/NTC+T////8A////AP///wD///8Azrn5SFwW7fpfGu32tpj2bfj2/Qb///8A/Pz9AOXa+yR+RvDGWhPs/YJM8b36+P0D////AP///wD///8A////APz8/QCsifV9WxTt+loT7f9uL+7eiVfxs39I8MJdF+z3WhPt/3E079rq4vsd////AP///wD///8A////AP///wD///8A/Pz9AMau+FZzOO/WWRLt/VoT7f9aE+3/Xxrt9pht85vt5fwY////AP///wD///8A////AP///wD///8A/8EAAP/DAAD/gwAA/4cAAP+PAADgfwAAgD8AAJ8fAAA/nwAAP88AAD/PAAA/jwAAP58AAJ8fAADAPwAA4H8AAA==","www.leidian.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABoUlEQVQ4jZWTMU/bQBiG8698n0sb23cWEQKhAqnYmkhUbKVNGdsFCfojqMSA2BFDO/IP2pGtvhShS9yzc+c0OFYqvR1QUF07iA7vcp/u0em5721ERC3JSPXJRSVLTzHs9arn5EIyUhFRqyEZKdPeRt59VcptZwfF6Rmmn05w29mpzE17G5KRavTJRbbcQibCUuzzDfy2Fvb9BxguKvNsuYU+ubgD/HuZC0wuLjCbzTB6vVcPEOEDgN1dFNMpiqJA8rIL+z8AI0L8+voNeZ4jz3Pojc3HA6wIYY8+YjKZLMz48vIeWAGYzS1kSmE8Htcm0xq6/eLeSQlgucDo8xcYYxYmPj6Gbnr1LzBc4GfTw82TJVyTi2ty8YMR0sEAaZpCX11hIEKMAl7vwHKBUcCR+AESz0fi+RiurkFrDa011N4bJJ5fErrwG+dCdaeLOI6hzs8RP2tW9uFhABeI3/YwiCKotXWkfvD4RZo7GR4cQB0elcRVAJKRSmrohgvE7/ah/QDmL3HzJH5wVybpOCt1dZaM8N1hiBwGWVd1cm+k46z8AR1jqQDjb6yiAAAAAElFTkSuQmCC","www.nciku.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAZtJREFUOI2lkzFrWlEUx3/33UAz5YkQCy7F5Y4vKHQS6iBOHarfoCjEKeQrvH6EjAaUfgKrQyfJ4NCpoCgufUNCFqENhJjJEG5Ph+Zdn9ZKIH+4cC73/s4599xzEBG2rZk0u61JxrYmGTuTZvd/95SIAHAvvBlZ6lnF2Gh659PXloSOg586slTnQr6g6RworgH2Yvj0+2S8uL3zAcJKqaHUAyKvnIOp5WM4GLYB/HTq5OztUf5Ace0BjCz1GAYIB8P2j1/i4OhmSQwDLG7v/JGl7jLIKsbiKdTvFXQRWWDp7FyONWUVYwAPwGh6n8rvGmzoIrJPjlYSTxFWSg2j6QGomTS736ZfPsSpbgKbKhuNOdwHoBjU+qo1yawRu5wk4VjeznDPkFcMav3nRIe/NYlulm5fDGp910jJfwa4unq/BudyX50dVkqNQPPZPSGyVJNwrLLRlI3+J5NwMGxHlio89cFcyG+DVwVbcvm4fj4X8gZ6HkBB0/HTqUUyxWS1zeE+YaXk+sRPpxYFTQd4+TBtHdHkOJ9P/Z3j/AdFWwuwC2+ebwAAAABJRU5ErkJggg==","www.nicovideo.jp":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAATVJREFUOI2lksFKAlEUhv9znSOoly4jQQwpouAi2nmDwbU9QTBu3IrRpm0tegCXQm/Rfl4imUcYd62KBkzH0JFa1MTQSIzTDxcO/z3/dy/33AJ+ybYsfVAsnr6sVrMsfkpNpZwK86ttWTr2LtrtlmT2j8rlmz/DCY0ks29blo7Dh6XSeFcjJWqdqAMAY8msAaBANOs1GpdPi4UZN1x3OrOB6wYEALbWD/1+36nV6z+E+8kkeJxOTTaMGGgmDoAg8t7W6zMAwNVw6FeYP/ZdACAAgJmzvk1KIncyCQiXy9wAAgCllB+FYWvf8HKzIQEAq/kcmyjKdQMBAMWvUeWCCAAwhPDYMPA982xBIg9I/MSTavX8fbs1n8NwTERBTcrbeG+Xf9ftegPXDVLkYylHTaWcrP6/9Qny+mYKT/VKrQAAAABJRU5ErkJggg==","www.npmjs.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAVdJREFUOI3tkbtOAlEQhr89yx4uCxENMaAr3iOFJDTKA/gIvoGFT0DsNPogWnp5AUutNBFs0QIrY+SyxEKUXcNZjgXeYqmlftWfyUz++Wfgn19jlAuFG9W4/yiYwyNo36fvdQEQ0RhiKMnXnndCzgSh+PLS7Oz2DlopRDjM/dERiXye2MwMIdvmsVqlvrfL/PExWuuBq2liCMH12hqCmI3MZOh5Hq2TE6zxMaTjEMlmuUylsHM5iESRmQzu6SkPFxfUtjYJlIJoFPGxjxAY0hrofh+AZKmEDoLPvJaFYVmImA1CvI15XYJmE3V3h3bbqEYTISUA0xsbvNRqmL5P4LrodhvtthBel97tLabqEeqcne+X02nEUAKSwwrfK0opFzzHoV4q0alW96zFxUh5dBRzanLgGk9wdXiAOTeH8f2ylWJxvd9qrOinZyWmpiPLlcrqz5/8N3gFC1x34s3beGUAAAAASUVORK5CYII=","www.oyksoft.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA59GMMurWipft3ZbZ7+GY+O/gl/jt3pTZ6teJl+fRiTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhv4IL5MWDmefLevvr14z+79+b/+/hov7v4aD/7t+X/uvYif/nznr748aAmeHAfgsAAAAAAAAAAAAAAADZsnsL3bN1v+O+df7myXn/6dOC/+vZjP/p2Y7/5dWG/+PRfP/jzXj/5Ml3/+PCdf/et3W/27R5CwAAAAAAAAAA1Kp1mderaf7dtnD+4MBz/+HHdP7dyHX/ldCw/ljX4f9J0un+ZsnK/8u+fv7funL/3LJu/tWrcpkAAAAAzaN2MsmVWPvRpWn/0qZg/9CpXv/Vs2L/1Lt1/2bm7/9R7f3/Qef9/zHb/P+Pvqv/2K9r/9irav/PnV77zKFuMsSTZZfEkFX+x5hk/9mrav7gv3b/5tGV/ubVr/+ky8D+o/T8/33y/f5J6/3/Zc3X/s6gYf/RomL+ypha/8SRXpe9jF7Zv4hQ/7uFUf/atXX/5MuH/+zeuv/z69j/ubuo/9H3/P+x6vD/dODp/0nd9P/AmWf/yZda/8SOU/+9iVrZrXhF+Lh/SP64gEz/zaZr/ubRlf/v5Mr+9vHl/827pP6vsJj/qLee/pW/pv93sJP+po5i/7+IUP68hEz/r3hC+KBwP/itdj7/snpF/6Z7Wv+ml4X/wq2V/7Wlm/+Elpf/t9HA/7zz6P+U7Nv/Vd/D/3mqfv+wd0X/sHhB/6NvO/ije1HZn2sz/qhxOv+cb03+OZTw/0K/8f5D2vf/Suj2/pqtof+r8OL+e+jU/0/auf5evor/nGk6/qFsNf+fdUrZpH5Vl5dlN/+ZZzr/lmU6/0p5y/85rfX/P9D4/0Ha+P91naH/gerW/1bgxP9QzKD/Ubx4/4Z3Tv+TZDf/nnVLl6+ObTKWbUT7nn1c/5t7XP5pbqP/LnLw/jWa9P85q/X+YZfC/4S1m/6Ri2//lH5h/oqIY/+Ti2r+lW1E+6aEYjIAAAAArIxtma+WeP+1oIj/p5iT/2dwx/9NbNr/WXzT/5SXp/+znof/tKCI/7SgiP+1oIj/r5Z5/qaHZ5kAAAAAAAAAALSafgurimu/wrGe/sm9rv/IvK7+yLyt/8i8rf7Jva7/yr2u/sq9rv/Kva7+wrKf/qiHaL+xl3sLAAAAAAAAAAAAAAAAvaaQC7echZm/qpb72dHI/9rSyf/a0sn/2tLK/9rSyf/a0sj/v6uX+7abg5m8pY8LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbKiMruijpfGs6DYxLCe9MSwnvTGsp/Xu6KOl8SxoTIAAAAAAAAAAAAAAAAAAAAA8A8AAMADAACAAQAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAIABAADAAwAA8A8AAA==","www.pansou.com":"data:image/png;base64,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","www.pc6.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAmxJREFUOI2lkVtIlGEQhh93jV1/DQsMNaqL1lAQOrB0lWRJgaBBWRd5ICu8CBRUFNIiQ6S8qyAL1xKyyAoKySiVLhRzocwsK/OU58wf00VtzdX8d7qIzySjGweGme/9Xl7emfEREVYSvgAjHiL7frATYLUv46EWOoMtfF5KdOMJyqfyRjjrezOIzV38EBEejkpBaqu4CrukIeuDdByqn5TGCTkmIogIHpkPiBspaMJhl3j9fKPCReSPQGGXNCiwYkguFXXLc/XOkPIqHHYJqY4b/SquiKUCvsrJzAKBnW6i57z4vZ9m/yaNjwB1tKWVlF0/qPlrbueB8vhQ1nYu2wHA0NRcREm/pQLA5s/r1I1ke/Gajz85WwTQmHwrcTPBb5Zt8V8jqGyR3ngcdsFhl5DHcbqqldKUpzim/53oBR0xqtd1PVjVpLLM4ns48xYddLslyumSpL8dnDSuPcNhl8MTF+vfSn/ssIxHFktVqXKyeAURoW9G7DVjktXtliiFJXy70IDDLu0yFK0wQwxz4IMYFw67fJfZIBNA8yRHzrTNNbVPs7uww6gZmmU7gFWz/gSYx/BTo5gwGX5Wv3mABQyrCaBaJzfFZjmXYyMhw2ZOMwQzwA4trBPgJT17lMAY02G6rgdr/pp7Df5fTAAegwDNzCTAOguDiryPrU8Bcu4WpTfQnvKOgdiUgeI7APnJmfcXl3hzUErzP0mz0yUpp9pkuG5M0tXMJ+av1qpTqgxvTO6ZkpkQEcFHRPB4Cbg9zGV9ji02jZbEDZw2gQHgxWt+RHN2rbc1xuPxrNqrbXt1lF1XArCOA78FVhK/AJ/ZkgMppt/hAAAAAElFTkSuQmCC","www.pixiv.net":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAiFJREFUOI2Vk89LVFEUxz/3zpt5j/mhMyZDqE01FKGLTLMQqk3gIsvatAwKAokW9QcoUyAStKr/oE0FbhpSqBaBi8AgjCRMYyDSgtIGmXEcZ57z3r0tnkwzNUZ94Wzu5fs953zPOYIJ5zzz0w8orsX4HwSb12nvHBakXuTZzDfVfWpAay+EACkai1iRolFHrrhQdiAUYCgRo9kymFvd4P3XPJg+MI16gXIh5L1UFNgOdwe7uHK6C6U080tZKq5ivKOFxK4wD1995NKjWQgaXlUACG1QsLnev4/7l0+ilKJ7bJLFb+sQ2M625XIsEeX1yDnO9u4nNvoEJFURMTGT0QOH9+AoTa5oczA1CU1mfakVRWfU4sPtC7xbytJz5zlETEBoebH/ALFrj7FdhZQ7GOaXLKwUmMl858jeVro7oqA0AHIsPQs+gRQ7OF0VMZhbygIwdCgOrvIEbk1nIOD7O/k3yJoqJf5/JNsV+pJxAKYWV8AntwVqoDXV3upQdhjq2k1fMs6bT6u8/ZKreiVryS0hk0Q8DPkybGx5kSszcirJ05sDfM4WOH7vJYR/Tam6Whovc/rqCdrjUbTj4CpNWzTIjw2b8fQso88WvPHV+F0VkEKwVrTpTU1B0A/NFgnTz3KuBFsOWMaf+4EWEitcRGuvf/DIERNczfKm7d1AxKSh2WaoJOk5M9zaFi+GLT/RoImIWN41Cmp2vgHMUImjgzd+AvqgvLCaXs8fAAAAAElFTkSuQmCC","www.searchbt.net":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAn9JREFUOI1lkk1IVFEUx3/nvvE56kxMI0VWqFn0oRamFS2KXFRIH0RFkgjRPqQW7UrcuG1RSFBbE2zdolUQERVoIkNSC6NaZNHHNIPjzHvOe/e0mHGc7L88997f/Z//OcIaqaoL9APngK5yeRZ4AkyKyHL1fVnzuB14XPw+3bn8fpwwPQeAk+zA3T1ITdOhDwoDRmT2P4Cq7kTt69zzW0k/9WAtG1Dc9ivEj9/JIc4xEZmpAFTVAFOLz0a6/bdja7v6R27HIPHT9+ZR9hojninXLxS+proLr+5jfcF64LScInpyjOiJMZzmPqwH1he8txMU5l/sQLgKYErmuORNjaMeqCe4B4ZI9I8vxLoGhmP7B4YTlycW3J5rqCeob/CmHyFwvgIADhQ/TmN9sMUItUdvWBFOi8ioiIwCZ2uOXMcWHawPxS8pVOkEjAGMKskwm0V9Qeo2E40lMiKSWunbiKTq1jVmqG1CfUELAYBbcSCQwUmU+iyE6KqzisIwjGghwHqgznpEyKwALPCZ+FbUF8LMIkv5fExVI1UjNgWvUB9mc6gvUL8JhQXARsrb8ME5eLHXtPZg6iMUfS9CQ30MSJdDTgTLvolevIldCpDGLaDMA0RKPzBn4kWYGgUbYPccRZPJthUASpvNfkHe3cYxLmy7CzBXncGMxrYR/LaEfxzsr8+gtFVFsMP+/ESQdgh+Btj4dhCmV/dAmXU37sqH/gaCtCH88RWE1koG0Br++EaYNoTSQrSpPae2BIgAOI7kQ6svl/pGTpLPYjr6rCozKwCBN2bfGatOg5HGZmINDZOOkXz5rCSr2gwMoeQRnhqRN9VjtKqHUXoRlhUeOiI5gL9UHBpNTYdv7wAAAABJRU5ErkJggg==","www.shooter.cn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAA2NJREFUOI1lkl9IW3cUx7/nd3Nzr0RvonHpZq1ojUuL69IVxoKZ6KBjwz5sqKWFUshTCxmUUWggrBQKE0oprLiVKBbaB/tSafpQkPZhXZ3VERi6UlllLUr8R2Oi8UZM9Obee/Zg94ftwHk73+/hy/cDZsb/9vr1g3zs2Cfc0fEpAwn2+T5mZomZwcDhf9868N8ZGPgaz593we+XU/39VWkgsDeb/Sh8504eJ08yUqlKNDXNIZf7Hsy//PP1zJkOBn74qbV1JTM5ya+fPuXbssy3AR4C+Nd4nJmZX4+P87DbzSNAjisrvxEAgObmNr27O/nH0NBX+Xy+RphmeU84bB65eNGyAdsBmM6KijIAc2542CzpurEF1Iy2tn67G2Furjs9NVXzfjy+beq6PJNI4AOvl5bGxoQAbBNwWMwMABACWkODZGYyJhuGEAAwDRzeePbMBrPU0NtLB6NRyk5MYOnxY7YAsgGWVJUA8HuxGPXMzvKRK1fINk3bAQBvARvZbJZAhFcDAyxpGoSiCMXlov29vby3q4veOXqUGaCqxkYuvHxJqxMTJLlcDgeIPApgmltbxNvb0A4coPLmJte2t+PzUAi+tjYGQDu6TgTwi0SCpi9dsndyOfFuKLQmUFv7tg5UEGCapRLtrK/DEwySXSwidf48Rjs7acTvx6tbtwAAq+PjvJXL2ZrPx+HTpxMCur5n3eOpC8bjtpBlqmppodpQSCw/egRrZwfuQIAswwBbFgDAqWkAIKmKUkI02idQLu/fF4m4qgOBcurcOXJqGhv5PDeeOIHPHj5EeHCQgxcuAG9KkDWNARCKRRMrK2UBVV2w791bXIpG51vOnqVSNovfr12DVSziRX8/j3Z20m99fRCyDPxtA/bW1RUwMwOBUunHysXFNSUSaZZl2XwSiRAkiQqzs1wuFEjIMtYyGbwRkqwoNgEI+f3TiMUsBwC4gftPLl/+cmthwYJpctPx41JxeRnpBw/s9ps3qfnUKao+dAgAWNU0i3fB8kgAdlFmHvnC77+v1terrKrO+bt3pcL8vKSn0+LnSIQcLheqg0FYhiE2V1eVClU1pEDgO/h8oL8IxdSUGxsbMdy44Sklk0pBVX1zhlG/7fXWZp3OfY09PfjQ45mkdDqNmpoxXL06iGRS/An/xqswUdmomwAAAABJRU5ErkJggg==","www.similarsitesearch.com":"data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2tTSAMrBvgDRx8QA5t7aAPDu7ADHuK8AnYN0AIlrUwCJZ0UAlnJOALaScwDQvbIA1svGAPHu7QDy7+wAqpSIAJNuTACdZyIApWYNAKpoCQCnZggAoWIJAKJuKACuh2YAln90ANva2gCikYoAj2lBAKppDACwawcAsWwMALBtDQCvbQ0AsWwNAK9qBQCpZQgAbkgfAGlaVADt7OwAysC8AIxtUQCvbA4AtW4HALNsBwCzbQkAtG8NALZwDgC1cA4AtHANALdxDACqZgcAg189ALuxrQD39/YAvqSWAK51LAC/cAAAwHgRAMWFKQDDgiIAvXEGAL90CQC/eA8AwHcPAL10CgDAcAAArXMnALuqowDt7O0A7ennAMirkwC5bwgA1JU6APPjzAD///8A/vr2AOjHmgDIfhEAxnkJAMV4BQDTmUQA7tOuAMaJOQC8mnsA4t3bAOfi4QDCpIUAv3YMAPjq1gDrz6gA8+TNAOvOpQDHdQEAwWsAAOS7gQDSmUsAsIRZANfQzQDg2NUAr4RdAMiNOADsz6cAw28AAMh9EADx3sMA6syiANysagD69OoA/PfwAMqEIQCifFYA1M3LANzX1gBuTzYAwIg8APz06ADZqGEAxHMAAMR2BADLhyUA8+POAPz59ADcqmIAvnMIAJJ3YQDf29oAZlhSAI5ZFADMgxkAw3oRAMJ5DgDDeBAAwXQGAMV/FwDRmEgA0ZtQAMuLMADDcgAAq3MsAJGBewC/tbEAlnZbAK1oBgDBdgkAvnUPAL91DwDAdhAAvHQKALpvAgC8bwIAv3ECAL13FACCZUwAv7i1AMK2sgCwi2cAsG0OAL9zBQC/dAwAvnUOAL52DgDBdQgAvHYUAIdlQACYi4cAxrSqAKiEZQCoci0AuHITALx0DQC9dg4AuXQUAKVvKAB+YEgAmImFAM3EvwChkIcAjXRgAIprTQCGZ0oAfmZTAIh4cgC8tLEA4dzbAM7KyQDNyccA3trXAJiJhQD08O4A9PX1AM3EvwChkIcAjXRgAIprTQCGZ0oAfmZTAIh4cgC8tLEA+/n5APf29gDh3NsAzsrJAM3JxwDe2tcA+ff3AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuLm6uwAAAAAAAAAAAACwsbKztLW2twAAAAAAAACmp6ipqqusra6vAAAAAACbnJ2en6ChWKKjpKUAAACNjo+QkZKTlJWWl5iZmgAAf4CBgoOEhYaHiImKi4wAcXJzdHV2d3h5S0t6e3x9fmNkZUtmZ2hpS2prbG1ub3BWV1hZS1pbS1xdXl9LYGFiRkdISUpLTE1OT1BRUlNUVTY3ODk6Ozw9Pj9AQUJDREUAKCkqKywtLi8wMTIzNDUAAAAbHB0eHyAhIiMkJSYnAAAADxAREhMUFRYXGBkaAAAAAAAABgcICQoLDA0OAAAAAAAAAAAAAQIDBAUAAAAAAPw/AADwDwAA4AcAAMADAACAAQAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMABAADAAwAA8AcAAPwfAAA=","www.so.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAepJREFUOI2dks1LVGEUxn/nvffONaEJnRKTsSCipFWMlS2GmaJNGLRrIcJUuOkfqFzULlq4GNpoyzZKizahJEg0MKvCIQgMXTRQRuCMZAghjs3ce1pc7zQfQuiBB14O53nOx/PKiMbS3g4Tvwq1S+wjui/ai5bLA7mxfGRt56f27occhntUSnZl/WBkgMq69tr4zcljbpx7p5+S6EoBsLT5nsniOOXK6p4iRj0I0e8O8PxCnq+bK4zlU4zlUyxvfGRyMEe/O0BjbQi5uhBVAFV4cv4lnzcWmf6SRUzQQX3InLnPue5BHn0aQaRlAhTQQC0RSzP/fQbLBsuRADbMfntBIpZGvaC2Ebbu3kA9xVMPABEJCsK3QNX/g3qKtoxgGtUK5RzDJ0bbutw8eZdCOdeWR8EOO4EwtfSYqSsLWGLxbu0VANeO3+L22Yds17b+EZtc0OCACJQqq9x5m6Tv0CmyQ3Nkh+Zw6MAxEaKRLt4M/8D3g/oQkp6N1jXVB9/TwKIwq+DVlA+jvwHYrm1xfb6v7kbTDUTAWIKxg+uHbtgR4fL0YXz1mFl51uSGpF5HW7ZqD1Xwq4pXVcQItiv1f2IiMSn9T0AEjCPYHSYg744fiUnJ9CSdTGfcFPeyqGk9wBjq5M64KfYkncxfsy7Xo0OJblsAAAAASUVORK5CYII=","www.sogou.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAqBJREFUOI1tk12IVWUUhp93fXv2OQ2p0e40plGRqZVJYF3a4YyG0o9F4BiJ1kWSBXWRCP1BF12kNyJdxCihiEigRCCJ1QieHCFvRCIwlEDnD2uUE+NQjM3e+1tduEdkaF2un4f3XawlZoU3s5XAm4hehx4AwThOG9ivwc7p2/t12+A8oB+jBfQD3wHDVflBYB3wDpFTwNsa7Fy/BfBmdhdwEuMiYqvancnZygC8N5uLs5fIUmCVBjsTM4AjGAViM0FLMG0k6AlM3cA/uI8QOUcZT1D6VSKHiAQNdjbIm1kL4xDicUwvFKaDRWKJEqPWpRtAnM79Di+ilMeYun9G9N04vxHZZMAWYI/anUlMW4vEEqWBWnf4gZotILX5ad0eq6X2VpraAEF3Vhb7gS2GaFULg0SXlBhKDephNd3pF8xJn2ZOellH//hKx8efI7EPqpUcQ7SsdBo4owAE217r0jchsVgE6yrrYXOZhpOYhnzTAzu8b2FDx8djBRgtnYYJHDAAHfvzL317pS/In0rElwFGcSii35cXfEjpF/zFnlUVwARuJkYQSwF8beMNf77nHn09+ov2XX6XqXxRmMrXJkW86GXk39zvpvCdFeBRE8OG8yPQB0Dp7wND/tL8A/7KgteYnH6Sv/MJpooxny7xPELpMxbW4wzIm9kyxGnECoyXCfbejWCLlOimSIDoeOHUyzhO9PVEH8M5R+SZmUP6HONZxBq1OxO+prGMoBVI9wNzcZ8k+nmcExq4NuW92U4iUac6HyeVnE+JPIzxk7ey1zVw7Vfg/P+dMwBpGKGIZ279QqXCgG2IjxA/A0dxfudm12LgEWphF/fWPyGPr3J9ep2+v3pWs+HezBrABqAX8VCVHgLaGMuZl2bUwnYdHhsG+A9Izgq2ecXgSgAAAABJRU5ErkJggg==","www.soku.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAb1JREFUOI2Nkj2S2kAQhb9WCZVrFZhga4MNgAnJ8AlWZMqMTmD2BF5CRRSRQuwTwA1QqIz1DcgIpSJw5AAHciBc1Q6YqZr1T607mpnX73W/VyNamD6waTudYSuOpAEWktclgBZmBqzbTkcW31r8HABLnwxgGz86ctvpzpEtPgf2ACEw8aaubM8IONjz2uIHYArM2k43bacTLcw8AD67qRbYtJ0ugQdvG4CV5PVZ8nprxQBGgeR1GUcyjSPxAdpOn7QwCa9UoIVZt53ugTOQxZFkfoO1BrDUwiRamKe204l9a0QLs/s9REs8A++ASdvp7i/4s+T1NAAe40hWcSTPjhhHUgJTyevGs1i6MONIVkAGIKbSkU26qVNZAJhK58AHYAEkwHtgUafXjEx13ahOJQuB0eV0dBYWptL55XTcAPQG4xnwcDkdE3s+ALh+U2kS+L58sty8PQPlv9J39ULAJ4e391O38n8LuApv7xugeY38h0BvMC7tJhNgbyrte/AQrr69t/MLgTqVrDcYbz2RDfDF3uem0v3Pb193AOHdsKlTOQRcf6ALjTqVRydibXzyRBP98b0f3g0beXOTAfwChGHZ065URU0AAAAASUVORK5CYII=","www.songtaste.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAY1JREFUOI2V07trU3EcBfDPvbmxaYfUQJXiYyhVEAdBLEIFEerkA6FSsIL9B4rg4qqD4OQopCAuOlUdikhFdHAQKojdLLQoFpUuhlajYF9Jfg5XTRUx1zOeL+fB+fGLwnVtcm4KBhHLhprILXUXEjmXBecyCpsIzovNJYIRUNpD/zW6DxEnVF9zf4DTU383eH6R949GEuwQxZx4SLGHhacsf2TbEZICoZEKOneRtPN5jvoaAcHOBJFCKRXXV3l8huUK+Q4aNe7sSw2GXrL1AJPHqb79VSQdbWWRyjS5Ns7OcvAKcT5NaoH4xyBMnuTNXTYV6bvE0DSFUkaDOGalktYf38vSDJ299Ay2NEhAvpiOODPGWpVQT6+1b5kM1oV63pY+jt5uXj48YX6ilX49CmVTgn7tXXTtJ1fg6zxLr9JtfmLz7vQZP802x41MRGHMMcEDQa5l39+xKnY4glA2gFPCP/5CBIbxDs8wHo168V+RoWwhlPVu5DLXDjd0a+iIRt3byCeZ47cr+eLqn/R3nWZ11BgY+5AAAAAASUVORK5CYII=","www.soso.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAxtJREFUOI1tk2tolmUYx3/3/dzP8x62dzU3j5uH6VApN5Vi9CHCVhEdqMD80DKtJGZmILjwmyX1ISWSoEK/GJGCsKAoEdbIlvphKKN3a2woq7Zqzrnju/fwvIf70AdhbNX19fe//nBd/P+Cf427EWvCc28haQo1G6XvXKRc9hMXPxNRp4SaG1yoF4uWB+In80V5IJVXQd5JtBU4H6wCETiCChdWrfaPJsSdjxYZuMFoDK26p1OyMVUMCEUdZcueJH5PAxZLOv0rY1Md2GAcETOs2eJ3FPGe2yT+KN416It/O5NWz0/nIvgrD7JqYxvSiy46TZscyZsnGJ49jyrXrN8a/Xi7GDws3LXy5rAgOqdLgZS1x1ha1wrA75M53jmb5M5MnjAsUnBw4cgjTKXP0zvxCV65Nesa442K0DuYD6UsBQ2sXPM61lpmcyXe/CJJLp1j76MbSEQV4zMhyysCaiv38Mv4D8zlhrwlRPcpsvIhm/OIbd6NtQCGgVtzzIQGOxey9+HahW/GWlhX9TSXx08TnVBPyUJKLrUZDxmtR2uN1prNy2JU+ZaCkDx+9BLXhybnmdaa6lg9c9rnz7/sKukyHiLt4UoWYwzGGKIKvtq/jV1NNYxOZWk5fpWOntF5rq1kthBhOhtRMlrwbnsZMGM35wXGGHwJh55Zz4cvb0H7irOdQ/NsJH2LjFXYexN/K3LiJy90r3i936HvewEhBPs+66GmMkpl3Oeb7lGs9ahfUYYxBuccXWPdZIseNQ01VxR5PlVF1xIZ7vHC6+24B1+kbyTF5eRtrHFUJwJ2PlDNkZcaMbrEpbFuktO/4QllQuKn7wapbfmZTNa8ZouOsPkQPPYGSimCIIJzFmsd1houjnTx+cA5dMmwdnfDl1/7H7yqAMjZ/eWOukzR7IhdOIHt/xH9xAHKduyiUNLcmBjmTLKDa7Od2BIk7l9xFUXrf8u0p+Kw1u79rBGxvJUsOTdOqpRj5/dtFOwkzsn82pZtx9vFu+/9bxsBXEtiE0K0ImRz6mTv1me73iayobK/cvvqKwLvVLs41rdQ/w80eIjDBkn6LwAAAABJRU5ErkJggg==","www.sssis.com":"data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAADF2dqxxtnb8MXa3PPE2Nrzxtrd88TZ2/PD19nzxNrb88bb3fPD2NrzxNnb88bb3fPH3N7zx9ze88bb3fHG2tyZwtfZ+8PZ2//F2tz/wtbY/8TZ2//E2dv/wdbY/8HX2f/E2dv/wdbY/8PY2v/A1tj/xdvd/8Xb3f/D2Nr/xtvd8cLX2f6ltrj/lqSl/5Sio/+UoqT/nayt/5Kgov+UoqP/orKz/5Shov+mt7n/pbW2/5empv+mt7j/wtna/8PY2fO5zc/+nqyu/5+ur/+ktbb/u9DS/7rP0f+1ycr/obGy/5moqf+UoqP/s8fI/6Cwsf+errD/nayu/7THyf/D2NrzrL7A/l9kZP9KTEz/gIuM/8TZ2//B19n/rL7A/0pMTP9GRkb/Z21u/6S0tf9QU1P/X2Vl/1NVVv9/iYr/xNnb88bc3v61ycv/YWdo/7HExf+3y8z/vNDS/6/Bw/9VWFj/UVRU/67Bw/+90tT/YGZn/292d/9aX1//o7O1/8ba3PPF2tz2w9ja/36Ki/9UWFj/TU9P/1BRUv9LTk7/T1FR/2FmZv+80dP/t8vN/2BmZv+MmZv/XWJj/8Xb3f/E2Nrtxdve1sHX2f+purz/UFNT/6Cwsv+yxcf/XGFh/0VFRf+bq6z/xdvd/7/U1v99h4j/dH1+/4yZmv/B1tj/xNnb4sHY2eTA1df/vdLU/19kZP98hof/oLCy/0RDQ/9UV1f/v9TW/8LX2f/C19n/w9nb/8LX2f/C19n/xNnb/8bc3c/D2Nn2w9nb/8PZ2/+Vo6X/UFJT/1ldXf9FRUX/jJia/8LX2f/D2dv/wtja/8PZ2//E2tz/xNnb/8PY2v/F29zzw9nb/sDW2P/G3N7/xNrc/1dbW/9GRkb/UlRU/7HExv/D2dv/xNrc/8LX2f/D2dv/xdvd/8Ta3P/C2Nr/x93f88LX2f7B1tj/w9nb/8PY2v9tdnb/RkZG/3R8ff/E2tz/xNrc/8LX2f/C19n/w9nb/8Ta3P/C19n/xNnb/8TZ2/PB1tj+wtfZ/8Xb3f/E2tz/orK0/2BlZv+mt7n/xdvd/8HW2P/D2Nr/xdvd/8LX2f/E2tz/xNnb/8HX2f/D19nzw9ja/sPY2v/F293/xdvd/8LX2f+80dP/wNXX/8PZ2//A1df/w9ja/8Xb3f/D2dv/wtfZ/8Xb3f/E2tz/xdnb88Ta3PnC2Nr/xdvd/8Xb3f/C2Nr/wtfZ/8TZ2//D2dv/wNXX/8DV1//B19n/xNrc/8LX2f/D2dv/w9ja/8TZ2/HD2NrOxtvd/cbc3v7G3N7+xdvd/sPY2v7D2dv+xNrc/sPY2v7C2Nr+w9ja/sPZ2/7E2dv+wtfZ/sTZ2/rI3N2xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","www.tokyotosho.info":"data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAAAAAQEBAQEBAQEBAQEBAQAAAAEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAAAAAQEBAQEBAQEBAQEBAQAAAAEBAQABAQEBAQEBAQEAAAABAQEAAQEBAQEBAQEBAAAAAQEBAAEBAQEBAQEBAQAAAAEBAQABAQEBAQEBAQEAAAABAQEAAQEBAQEBAQEBAAAAAQAAAAAAAQEBAQEBAQAAAAEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAAAAAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","www.torrentkitty.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAARlJREFUOI2lkr1KA0EUhb/ZZElq2a0sUwhWPkBgHUE2hcgiqGgjVr6QpaWVjVu6QlgFX0FIaRNMZB8g44aMhU6M4/64eLqZe883l3tGaK35j9r2RTarNnjdGsCXehdnp5fTyesAwPP9h6vrm3PgxW4U84VuB9syB3BdN8vz3KuaoNPpjJVS6wBPj6lwWoK5KdaZAYzZyDGkOqMt43HMRZykrabmHwCvyyJO0q0mZgBh/4NsBkqpneP9wXDZJBx1ezfsAWM7xkKAURRKDRAn36/aAIdyre5kraypDLARhXIZ7+FeOAI2/wyIQjlaPef5ux+F8hmgH0h9cHRyXzdBlfTbdLLbDz73UwgQwlFFRlN2XTczcf5Koak+ADGRZZaTy6bRAAAAAElFTkSuQmCC","www.ttmeiju.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACWUlEQVQokX3ST0iTcRzH8c/39/zVualk6dRACIwiSFCykA4dgk5djKJTHrIiLwZeukoEQafoD5REJBQUHcw0JIiIpMHECmzO6bLNTbe1v65nPs+e5/n9OlS38n38HD6nF72M5IWiPs54bFcw/DsCKi4u+4uldEq+sSyFy8jR7327FnNoiaVoNlZa28KVJR/4nzMu4Ag4HETQJRAgAJfz14eNSHxDnsp601XyM0ACAY6AJuxWzfH7NObacyW1KogAIeh+yivHo3Lpp1moML+mCQFXoE01R7ucXR5FUUk4uDRbTVgaIwiQsVmptR0Kpc2sKe5GdIXBdAHbYlwM7IOussEZx9Fq2r20Q4fO+PUeJxJPys+/a0ULzEW0gC8/YBjKoRbrYLNasKXRI3xypfx02afqqFPYiqXqiym5r8naMOhqSE3k0NNcuX1S6m1TQZIo2U0q1osEF9Ut5E3RnwmK2rJcMimSZYkMwNEgYyFZ9chUr1onxq1Q2gtFhwa4ABfHuvcn4jHqvlX6miSzxgsABjpbtuaH5OEJY+SoMrMq3QuwcFYCk6CgQdnsKAbpXSgfK2BgulGY2LvTfjPojAXl0SnpbK/z8BR0jd6GrZFp6dO69vHi5tLqOp0ZF7EiAlHsabTGTtsPAsqTOQU6gw1/vXW8U3S1imefeSBW23eAGjJBOncn+i3HPuQ6WutsAhJZBdpfDC7gAFxAJcjob19glRS9mi/HCzT0wiNcAMD/AHI+ecGIx9eo55pYSMJ0t4cHEOp92F1+TxOBfHhD3JwBbY+Vu4/Os2gs/Qu6sSTGBZ/2sAAAAABJRU5ErkJggg==","www.txtxiazai.org":"data:image/x-icon;base64,R0lGODlhEAAQAPcAAAtDfdfZ157SGiNswn2Qqv///+L77XioqE+ATNX2WV6RuLToY0uFmqXTwyhhln6uTUWEwKDJjFGV6CVkrczMzLPoDHyrd0h6dOr7bChZi6issleNvoq/2G6GoFGR2oO3MTZheit0zH6shLbj3mKVaxRPjp+0yu/9jPf39z1srF16mjZztT2D3W2q6iJZna3hjTdjn+Pl4oulwVmX2JXMRqOko57P+2OVT5zWIVOQy7ftLWaEsF6Wf2Oh31iSqj6G2WWg6PDw8Jyioz54rTNqth1OgbS7xIK7N8vxabDlDBlVm1yVwjl6xLe3t0JzhzJZgjNjooOtrUyEiuD4YzR6zUF1rlGEV/v+n1aLrUqN3tje4XSLqzRnkzFyv0qCzWCKmmCb4Gqia7TsDb3wb2KQZV+V0SVZlmGGspeswPX87BhRkxpXoWOk76fbEqnQzSxhoIKxU16e67Cyr3a08kRqlzt80TBorc/X2OTk5CpsvClfpbPjj0eL2GSbxUZ3ed7f3e/371t6p+L5b7btCjl0qStalTN2zTNmmVmFV22l4TR609LZ32GUsUWEwp3Jl+v7bXKGmxpTjT16uEKH3Y6oxGOMrWOk6i5sviFSnLW1vU52sDB0x2OJth9doQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAQABAAAAj4AAsIFBgEj0E8QVAMXBjkTqAMAAAUOqNFIUM0Rb64MZBmxAYzJoIMRCGjRJQrJyLsaWCDwxpKFhepqeLokaAxGF4kmrNEzaICKDhNODRmypQFSA4AAQKB0BkUQd50iUQjgVURZSz9GODjTZAgSjZ1QqADjgUFM/goCtHIxVcXhvI4OGLlghQGkphQqeM26iYqTIbwCOPnBiIuK5hASRjoEossHnIw+CBGjAASdgKhQGFEzyQJcXpgEVA5iZNCRghuIZKFTYs+ZNpUQJShg0iBfwik8AImEaMHIJ5ACrCwAB4NOzSlgEFHhZA/xQWioNCkRg05FCwKDAgAOw==","www.verycd.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAppJREFUOI2lk0toU2kYhp//XHKSnJy06bEXbQe0EUFFBK120VUVVFA6dRhRxAvozrUuXIk3ZuHOheBQZqYXFe1aZkRQ8UKrLrQzMhaxttUmnqZNYtqeJCfJyT8LcbDoRnzX3/PwfosXvjeyr2NE/t526Nu5jbtlb/szIQe2Hcxmx/tilvkPQu8Uh5+mAeSp43GS0zsoeh7hYI+43PcRHOgA3x3OzrntMbv1mACQV3Y+nnZeb5ZaiaZY9y/Eu49gGI3MzFCamGD+yRB2yhlhg3cu15wdLLg+TY0rX4gDN9cpAGhme10sRkALk/jw58myTqOXSJKfnMR1pvF0g5cf3PVOJDXoS5VaOwLRJXsAFACx9wZ6Y/O1UL0gGJTMDp+ATI5qOoufTlH8dxxzewbdNjCaJMGmpTdFV+/o/wIA5n5q8I0I4eU6gZosC/IqldQCxbEpwl1ZzFaNcFygmxFSZ9V3nzANQP7cRTVf2Jr3t2CZ1zFXWRRzGfz8Q7SYJLheJ2QrCK/EyB2F0KzTvkiAaVKZz+JN1WDYSzFEmlCzTblBx6CMHopAMUW1Wsejs0nWrAn/8Enw8YVChuLUO0LlHBN/NaAqQCVNICIIRMMIfxoVweNBiWp5mIbhLhKIG7eIvn874b6fonQvQeaNjfRUqnMOci6BLCi4qTqeX0yiRxU6Wpa9WNwAYCH3R+75MOVigr9/LaJVNaquir+goFYED34ro9aViAY0qK09/6WgPn7aUqOj4wUYe+gwNmShFCQiL3FGa3h1PYFlaezfvOma6O8f+kIgenpYsa5tdWfLiifBesHdCw54FmpJ535PnpblGvvWru7HYP/nmxBfHcquH7sqyfmjbrfcZNqarl1yb9MWPyN6+0e/dv9d+Q9ylAtjs8becAAAAABJRU5ErkJggg==","www.vitorrent.org":"data:image/png;base64,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","www.wolframalpha.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAe5JREFUOI1100+ITVEcB/DPuXPfe/fNPBJ3wmoWJBsbmpLGVpKVppTMwp+NIhZSVlbCSmJlPTUhKxssUKMkIWEjamzkz2PB8GbePPdYzJ26hvnW6Zzf75zf7/y+3/M7IW4dUiLBAKYRS1/ANjRwz2I8mpJUzAJjOF7xRZzDkCWQLLI/ff9dXMAJZNgz/TsO42u538BOrF4ISEvnMrRxc3lfcrvdKy7mabK53SvGArEljJVndmAd9lcT1HGq5PtZCBtjd9aXmWJMCGKM4UsIoyFrjopRniZHMFVN8BOT3RjHvxeWx5lfpXzhrznOdAy2Bh6IcbzKOS3Fu1UP4WSc7VyF/OGbf8Rqj2xQzHQ2JY3sLO6jiYm03K+hP9TqYndWe2TDfxX/ltRWJb3i6Io02Z9wZyHBKE63e8Xm/0Ytwso0mcQhvF+gsA8hT5PX0925dR2ypSjEbpda8zLeVTXYU66brXrtemdubvdSFEKWMd9sd/GDvxtpLdaHrDmvfFHMe+N8Vw+2Bj7kfeEKtmACa6oJmtiLV3lfODDY33wSmv1CIzPYGvgYGhkxTuIYduEpVi5QgB5u4BJ+lYeG8zQ5iGd5mhzG9vKil+WoVyuYw9syGHp5mjzHOF7gDG6i+lLdagWL8RjXysrgG8779/P5Ay59lINxHm9cAAAAAElFTkSuQmCC","www.xdowns.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACzElEQVQokT3Sy2tUZwCG8fe7nJNz5kxmcpmQSSaTBHTQVk2thiSi9dKiIqgtlUJpF0UoVNGFhhTERQUXipeoCxVaJFhUFEELdeUuRhOC0YlJR4wao9KhSZ3cJnM/57u4kPY/eB74kQndI5ClKKMwCAwKBlAhFaMERCoIDU+hJFFSKJqo4AI5gRyD1LoskXlbbQQjVjWlVBEXAIDkQl6zuZADiTwAzmBpKA77ejL+x7shACbh9MLJWrdpacvcjz/HowH/SGqeyIrqgKYo457gnNlKWbf+HubEWsiAO8VpZ6i/Zz1ow6WzS85fH2jdQCbSkxQWhUktZk9lvem8cLXY2dB+f/PpNrLWbh1Y8fnrE8PnYoe6f/iqY2Sw3mK+D5+cETNdULGKStfF4HzCT4OnOn56GkuGd/1b43yxysjsuBLv2r3mzpPJvDsXNA1KwObS1Md9YVY75c5cnfrz3uxwW80nESfCYHf+woqPPns1Foj3RSk4AaMEdGV9be+rf9YEPtUaAEazzznKOWwKs2njKMpnADU2Wmlzk4BQABWO8XYm+/2iDZl5Wq6qvwx+TcDGcuMPeq3u3cvPPbyMmqTPLzilADigAeUpr8pytldu6ZV3iVlIi9S+xOF45/G92xZnZIhkQuu2PtbQGpprSAWxtqHxzvhIZ8v2h/cSe8YOCghwOB39Z461A+HvOuPR5qyA0OBUwVNwP2rkvc+TlqF+7dgvp0OlErJZNK4fWdd188Ct346eeKHhKXgagrzR1xSKDM6R2+OtK8xvYm0FT/ZPvvy4qi7s+BQpSRSEzqWKswWVCdtVZEL3COQ5fC/+Cu3sTmz69ll7XVNJynTKl3oTbIwIfxlpihaba0i4yjWIn7zUFwWyDDaDNdQXuXGtLhh9t7Tet3L1QmzZLOWuREmiIFGQyBkIktf69/94mxScgBNQABpaQ35I/5+3gcB7FOpBaElE6lQAAAAASUVORK5CYII=","www.xiami.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAitJREFUOI2Vkz1sTlEYx3/Puee+X1p906BiaZdKjF2aUGE0GIRoShuDGE06mahRIsQkJiEp2slMQiJB0sVQpFNjEClCm3pb997z8Rju7ceAxEme5Tzn+Z//Rx7Rm3J1vWDKRf7rpAZaNabsSocxmwAVgDoFQCyo+ztArMNKIWNWg3gFNIK6SPP4A1Ale36R5slpCL4CzpC0UU4nFvfsErq+6I2JCgH0V0RXAWogNXS1g+Y5RNA8o3FwHM2zkulGBbDRC7hI6/Qs6eAI0uopNe7/hFt4wdr0OTSHxsg4a/cnMDsrEnVADZYA5GAHD5O9fowdGALAf3xL/dAZUBBTCc+AHkASCIAqRp1UZilucY6wvERYXsItzgGKetDSBtrXF1AFzQLqBXWCwQMO0FLTdn1o2dtIo/jwit4bSjJwAs09eLAapPpBSPqHMe29pcb+YaDsbQD8vH2BYv4p8cdnJICKYNmG3jwyhtlRmmj3DVK8e1myqCRIA9z8DGIgSVKIilVvwNbo3BlFV6Br8iGo0rk5gR0aAdlioA5Ea2ig9CIKFg8qoOtg+sC0d2O6eui+PEvz6CjfTgkUVQpuy1A1AlExGoT4vWDPE2XXPU/af2Az6OL9G1rn76KdasgDQcryoEGwBMR01/l6TMpXZlsl5U5IL3RmbiHNKp3Sc1DENkWyqCDtxh9WRis2gns0SVpvbF0BNSGzXZKc/VL4K/9eZwWpQ6GbN6mBvjS59huwbQhRE3LwWwAAAABJRU5ErkJggg==","www.yayaxz.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAApFJREFUOI2Nkk1olFcUhp/7+81MRNSu3AlWXJi58/m3iTGggRZ0o1jbTSnpqkjBiiYgumy7KLgtQkWQLEQluiviQhm1QVwYk8mipEEEJcjEkEhmYma+mfmOi4kTwfpzdvfA83DOPS98RiUL4v6+da9vYODHR4cOHX5eb7ROiCyaT4KNhsQnB4du7t/XXw3dhXR8YkyOfvudzM3N3xKR3P9CS69k00/Hfv51567ds/39X6WTpQn5+sBB6dnTOzM19eS36rJseA8SkQ1//H5uqGfP3qchxK3S5KR8/8OAFArby+fP/3U2bUrXh6ZUl69d7H04OnHfWMeWLzdz4eKll0eOfHP5zOmhP5VS0wALUlfrUu8qNZT16FaKMYLORFSRimz95fhxOXVqMM13xzIyMjIR8gV58GC0ui2fl3x3LMVisRJCLCHEcvvO7aUQYrlbLM7Xm7KRhbJ05UNBQijI2OMxCflYhoeHJYSChO6C3Lh+Qzpw8a6EEMuVq9clhFiSRL5QACHEktlxhjRaQzOp0ZXLkiQJxmi8szSaCd47FILSCtOaZ7Z4jlJpXNm3n2HWb6SvrxdnUrQRvFVYp7AavFNYB96B9zB6/yGzxTbXEXi1RORTDA2sURgDTmu8A2MVT+aE+ddCTSxLlQ62KjC6QeQ1BoUzChcplILZKvxbTmmkYAxks+Bza9rnn55eXSHSCV05oKlpAjOLMFUWWgLOQS5SWAuZLKR+JcXl8qqgutzkn2dCvaZpAVq1d846sFbhLDgLURbqTrUh53RHsPzyP169mCHyishrrDPYlsFpTWQtOQfeG7KZDBWpt6E01Z0zfiiqH6tSaXytehtp4F2JBtxK3wNm5W0AF4FXmUyjVqs9fwMizAwlZW3d5QAAAABJRU5ErkJggg==","www.youdao.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAQBJREFUOI3NkrFqwzAQhn/JgSylOBgypdAgKGhzHiEvkTV5gz5KyBO0a+nUNUuTJ6gzBGUReE8MXjNY6mLBb4V4bW/67k736+444K9NsOOVXlWueQOAVMo6gZgJa0qv9KJyzUeID+xpFGpkR82a98C1cymltnfiXQGv9CRwJpNSWFO27gPH7woAGBPviJ+IewWGxAfiCfGeCwaRwCPx0itdALhGHRR9AucAlWtyAN+4tY5APMIxk8mCA7y0TCYFLfa2A2HNFcAn2vvwSqcAfujJJm4nPqQ1gK/WzQG8Vq55pt9nvQKX6YuPH4RiAHNhTR3nOiOkUtZ8aW3hhi/0/9kvWWFQQDml5pQAAAAASUVORK5CYII=","www.youku.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAvdJREFUOI1dk19ok2cUh5/vS9p+a1jE1qhfqyxdzdrGKsg2xZFqp+KUURGkaAYDWdmW9kZEGd4JioMNQbywDQ5RqINdDUUYjqp0JZIl0ulF80Wbpk1pm7TGqElbE/vv7CJqUs/VC+e8v/ec8z4/hfejTVpYjHm+tEVcTTWaFcA/Ppfpidf6MNm9XFFuFZcr707HBZ4bgfMH2dq0z0lchfG5fEovAX0J7v9t8NMNglQ4t3FBKRI4LpC4nfrz1+YKw6LxXzhNxBdm5KmaAKixLekbXA1saViBYyaH+1Tvc/R9lW9F4GgocGUoK9+PiDSe8wut0UsckkKfhwRahzobf/ZL27DI5UhWOBoK5JMeafFcD8mPUZHGs37hmOwQoOh6IY5Jc+NZv3w3KPLD9ZDgkRaVxZhn1edORh6nGQjburio9EV27nwY+61LUpTdFNDeCVxUegfCtq7xwTSVnzphMeZR68ojruEsPO0Pg6m2A0CzlC3YrULFtXMH4u3u7Ji9+r7AbgBMtR3J/jBPZqGuPOJS163WrOPT8OKlmqA7vxTJpBR6b8GdG1S9SrBuV90Xmd31dx6utUzSrfBy2pSYmoEqm2Y1v14EdQnUwodS9aI/SR8wC5gAFVLTsHGS3yFf+4EZ0gugjiVzmZJS+GQNOt/kV2deYJ5VwFoYExiI8EfNJEopnKBVqF8tuloCyVQuo47OOXyVZvh4Wz3MRzsB4nG0ZClkw/y1fhhlE7gLDUY7N2xvYKUZYnMOn0qZ3TvxwGBJt3LY9aydDtlRNc1eWw8rytN8XTQZeKT5iOtZ+7z+IRMPDCize9/wHwq4/83KmQmRE5cDwv7oJTYVkVAvsH+o8/TVoFyYEnEHs0JbHqQCypO3U9+ebK7Y/JHGZ69mMXxPuDuqJgT4yi76RlcdQUs5j0ZzdP9SQHm5mdJGYFcTWxv2OLFbwaHlXxh8DaMZMHoM7v1DkJXvm2n5nC3MxzxrLBFXdXXezhPxXGZqxuGjxO7Fu9zO/wOrvEc0UeiiOwAAAABJRU5ErkJggg==","www.youtube.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAY9JREFUOI3Fkr1qVFEUhb997nFmnGEisYxiDCJ5goCNldj5ACm1TJsHyBOYSsRC0SqlWEiwFG0sFMTGQkEhkDYTMnN/zv05y2JMmLncWjesZp9vncXZ+8D/LgP4vDrajqZNh64LGxmoCxaYoTSKYye93zotPtinq8P9sbndgOauTutypAF9jFmjx/ZxdfjLYRuxlRUnGW7swfc773FARL9dKa0FRLWgMMlYf/WSelqTT1LKOl86rxABUUprrsL6peBcoYkUwPrDR9yV2HzzmiaN5JOMRa4UVFjfFcCigkEOTIuCs5MTVu7d506acfPpE7LTjDbvK7WmJlEBs1lKk2ck3kOS8D0EBFiL96Fj8DVQVhVN0/D18JBvOztsAL0rl5dYA3yIKsxsoIumowHevXjO0d4e14Bbw4ToewQtm5Fye7Yy+OGw2+016qwgGXmUXOr8Gn/X+NOVkQMHSEISUSIKNB5QO09z0ZvrnHNAGTkwgP1x74FF2wIGOG4gYkfo/H2RI6DA6cvutHzbyf3T+gMlIenGuFkxUwAAAABJRU5ErkJggg==","www.yyets.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACfklEQVQokSXKPYxUVRgG4Pc759w7d2Z2V0aWhUF2g+BGIRYmJooUJBqxMsZaYmFjLKysLWxsrY2NrbG01cSYUJgogWJB0I2SDbtj2GGX+btz7znn+14Ln/qRz3bm3++3lzvu04vdE0H25loI+kFKJwC8w+muexr50yiOor05LCX8MD7fcZcr99ap4up6MShlErlIrLwMOtIL0ijvPMm7c33U2DgzGOAFQbBf62pR7i/0wlpwPXgBgKPGusEtMv8/RjgSSiight1pPrfip9EqL0FkkTjouFGtRhihhJGBxJJsjI1hlrBWuJ7n09a8SNeLEfPExtgql8aGcDBOFeLkynpxYdXVmQLZm9tBrQQaxUbXbfZ9BKaZE2XwhmuDcGNYnixcNIxbWwmyXokXqTMXmcnwTClX1sOU2DlO8vnt2fZaKDz6TgDcPEzvni3Pdj2Bg1pvH+VXBiGTjaFW7Cxy2Oo6VYrIWO27g5gTt1f9sPIEHsz01iT/tdS3N8pELg3PFRLUKIIm4auHzV60l/r+dOWi0YiNyo0Sf1/ovcZunCmFyIZg5CLx63/a3YW5Qt5/vmjJ42QGKPjqyfDLw+Z+bbOGH50rzeii2jcPpvePlsj5nUHY7vqkeBI5btkqXu7513oejd06jN/+XavRP7r28b3jFuSw8p9c7DsBiT9nusysHMzwYt//+rhpYhrN2kmb3d3HU6ToNX94vitgVma1H/frn0d1NmZjKfxgsyM5Iae7h3NXWEaK189UW72QlUlt0upv/85vHsyXSZNaVru0Fq4+GxBjRXVfvDG8dKK8vrmiZtksq905rAuNuW3/OFrmbFlN1d7bWnmhL1++fuo/DtWmykdY6qEAAAAASUVORK5CYII=","www.zdic.net":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABb0lEQVQokYWSsU4CQRCGZwkmVprssUdCQ6GREyI2VjaEMxZAfXsmUFzvA5iYK1Qo0Ccw1lhaajBBkmttMGc8rjgLCkgU38DEtRgyOa7Qv/pmdv/ZzM6wKAxO9yuwrOODBvFm2QCAyA8XsWc5kgsV0+3VRQJInuWAZzmJrK3pURgopSQXCKRxtZaip1+eHok3CtsAwBhDoKMz/z2lf31QytZ0W9OVUi2jFJp1Arrg5tahWSgqpUaDPnVCgGaE0aCPR6nv+Rz+k1KKOE3EGGsZpZ/sKgC0jBLeC816ZzaJm9PxoBe+AcBRJktgDB96ALamLxnoE/4AYia5KDdM/36I2RUhsCsEChlji05sbSs+migMHu6ukaftbmJwkgt43TmkGD83vimSCzuvkU1ysZhDFAbNQnFcrVF50rTdlVzgXkkuAEt6lpN4PeHBupILJrnAds939wCgM5u4ufyaWcm5J7POJW71jf/s5vIA8JnJ/gJ06FxSDmeI3QAAAABJRU5ErkJggg==","www.zerochan.net":"data:image/png;base64,AAABAAwAEBAQAAAAAAAoAQAAxgAAABAQAAABABgAaAMAAO4BAAAQEAAAAQAgAGgEAABWBQAAICAQAAAAAADoAgAAvgkAACAgAAABABgAqAwAAKYMAAAgIAAAAQAgAKgQAABOGQAAMDAQAAAAAABoBgAA9ikAADAwAAABABgAqBwAAF4wAAAwMAAAAQAgAKglAAAGTQAAQEAQAAAAAABoCgAArnIAAEBAAAABABgAKDIAABZ9AABAQAAAAQAgAChCAAA+rwAAKAAAABAAAAAgAAAAAQAEAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAiP8A/0REAFhxvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERERAiIiABEREREiIiIAEREAAiIiAgABERACIiAAAAEREAIiAAAAABERAiIAAAAAERECIgAAAAABERIiAAAAAAEREiIgAAAAABETIiICABEREREiIiIAEREREQIiIgAAAAAAAAAAAAAAAAAAAAAP//AAD//wAAgEEAAIABAACHBQAAww8AAMMfAADhHwAA4R8AAPAfAADwDwAA+AUAAIABAACAQQAA//8AAP//AAAoAAAAEAAAACAAAAABABgAAAAAAEADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/AIj/AIj/AIj/AIj/AIj/AIj/AIj/AAAA/0RE/0RE/0RE/0RE/0REAAAAAAAAAIj/AIj/AIj/AIj/AIj/AIj/AIj/AIj//0RE/0RE/0RE/0RE/0RE/0REAAAAAAAAAIj/AIj/AIj/AIj/AAAAAAAAAAAA/0RE/0RE/0RE/0RE/0REAAAA/0REAAAAAAAAAAAAAIj/AIj/AIj/AIj/AAAAAAAA/0RE/0RE/0RE/0REAAAAAAAAAAAAAAAAAAAAAAAAAIj/AIj/AIj/AIj/AAAAAAAA/0RE/0RE/0REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/AIj/AIj/AIj/AAAA/0RE/0RE/0REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/AIj/AIj/AIj/AAAA/0RE/0RE/0REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/AIj/AIj/AIj//0RE/0RE/0REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/AIj/AIj/AIj//0RE/0RE/0RE/0REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/AIj/AIj/WHG+/0RE/0RE/0RE/0REAAAA/0REAAAAAAAAAIj/AIj/AIj/AIj/AIj/AIj/AIj/AIj//0RE/0RE/0RE/0RE/0RE/0REAAAAAAAAAIj/AIj/AIj/AIj/AIj/AIj/AIj/AIj/AAAA/0RE/0RE/0RE/0RE/0REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AADA8wAAwMMAAM+fAADvnwAA578AAPO/AADzvwAA+b8AAPmfAAD83wAAwMMAAMDzAAD//wAA//8AACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+ZAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/dwAAAAD/RERm/0RE3f9ERP//RET//0REmQAAAAAAAAAAAIj/iACI//8AiP//AIj//wCI//8AiP//AIj//wCI/3f/RER3/0RE//9ERP//RET//0RE//9ERKoAAAAAAAAAAACI/yIAiP//AIj//wCI/3cAAAAAAAAAAAAAAAD/REQi/0RE//9ERP//RETM/0REIgAAAAD/REQiAAAAAAAAAAAAAAAAAIj/mQCI//8AiP/uAIj/EQAAAAAAAAAA/0REd/9ERP//RET//0RERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/yIAiP//AIj//wCI/4gAAAAAAAAAAP9ERKr/RET//0RE7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/mQCI//8AiP//AIj/IgAAAAD/RES7/0RE//9ERLsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/yIAiP//AIj//wCI/5kAAAAA/0REu/9ERP//RETMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/mQCI//8AiP//AIj/Iv9ERJn/RET//0RE7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/yIAiP//AIj//wCI/5n/RERm/0RE//9ERP//REREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/iACI//8AiP//WHG+Mf9ERN3/RET//0RE3f9ERDMAAAAA/0REEQAAAAAAAAAAAIj/RACI//8AiP//AIj//wCI//8AiP//AIj//wCI/3f/RERE/0RE//9ERP//RET//0RE//9ERKoAAAAAAAAAAACI/0QAiP//AIj//wCI//8AiP//AIj//wCI//8AiP93AAAAAP9ERDP/RESq/0RE//9ERP//RETMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AADA8wAAwMMAAM+fAADvnwAA578AAPO/AADzvwAA+b8AAPmfAAD83wAAwMMAAMDzAAD//wAA//8AACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAD///8AAIj/AP9ERABYcb4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERERECIiIAAAAAAAAAAAARERERIiIiAAAAAAAAAAAAEREAAiIiAgAAAAAAAAAAAAEREAIiIAAAAAAAAAAAAAABERACIgAAAAAAAAAAAAAAABERAiIAAAAAAAAAAAAAAAAREQIiAAAAAAAAAAAAAAAAARESIgAAAAAAAAAAAAAAAAEREiIgAAAAAAAAAAAAAAAAERMiIgIAAAAAAAAAAAARERERIiIiAAAAAAAAAAAAEREREQIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////4BB//+AAf//hwX//8MP///DH///4R///+Ef///wH///8A////gF//+AAf//gEH//////////////////////////////////////////////////////ygAAAAgAAAAQAAAAAEAGAAAAAAAgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP8AAAD/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP//RET/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAAAAAAAAAD/RET/RET/RET/RET/REQAAAD/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAAAAAD/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAAAAAD/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAD/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAD/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP//RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP//RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP9Ycb7/RET/RET/RET/REQAAAD/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP//RET/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP8AAAD/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////8Dz///Aw///z5///++f///nv///87////O////5v///+Z////zf///Aw///wPP//////////////////////////////////////////////////////ygAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/5kAiP//AIj//wCI//8AiP//AIj//wCI//8AiP93AAAAAP9ERGb/RETd/0RE//9ERP//RESZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/iACI//8AiP//AIj//wCI//8AiP//AIj//wCI/3f/RER3/0RE//9ERP//RET//0RE//9ERKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8iAIj//wCI//8AiP93AAAAAAAAAAAAAAAA/0REIv9ERP//RET//0REzP9ERCIAAAAA/0REIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+ZAIj//wCI/+4AiP8RAAAAAAAAAAD/RER3/0RE//9ERP//REREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/yIAiP//AIj//wCI/4gAAAAAAAAAAP9ERKr/RET//0RE7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/5kAiP//AIj//wCI/yIAAAAA/0REu/9ERP//RES7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/IgCI//8AiP//AIj/mQAAAAD/RES7/0RE//9ERMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/mQCI//8AiP//AIj/Iv9ERJn/RET//0RE7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8iAIj//wCI//8AiP+Z/0REZv9ERP//RET//0RERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+IAIj//wCI//9Ycb4x/0RE3f9ERP//RETd/0REMwAAAAD/REQRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/RACI//8AiP//AIj//wCI//8AiP//AIj//wCI/3f/RERE/0RE//9ERP//RET//0RE//9ERKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP9EAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/dwAAAAD/REQz/0REqv9ERP//RET//0REzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////////////////////A8///wMP//8+f///vn///57////O////zv///+b////mf///83///wMP//8Dz//////////////////////////////////////////////////////8oAAAAMAAAAGAAAAABAAQAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAA////AACI/wD/REQAWHG+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERERAiIiAAAAAAAAAAAAAAAAAAAAAAARERERIiIiAAAAAAAAAAAAAAAAAAAAAAAREQACIiICAAAAAAAAAAAAAAAAAAAAAAABERACIiAAAAAAAAAAAAAAAAAAAAAAAAABERACIgAAAAAAAAAAAAAAAAAAAAAAAAAAERECIgAAAAAAAAAAAAAAAAAAAAAAAAAAERECIgAAAAAAAAAAAAAAAAAAAAAAAAAAARESIgAAAAAAAAAAAAAAAAAAAAAAAAAAARESIiAAAAAAAAAAAAAAAAAAAAAAAAAAABETIiICAAAAAAAAAAAAAAAAAAAAAAARERERIiIiAAAAAAAAAAAAAAAAAAAAAAARERERAiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP//gEH//wAA//+AAf//AAD//4cF//8AAP//ww///wAA///DH///AAD//+Ef//8AAP//4R///wAA///wH///AAD///AP//8AAP//+AX//wAA//+AAf//AAD//4BB//8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AACgAAAAwAAAAYAAAAAEAGAAAAAAAgBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP8AAAD/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP//RET/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAAAAAAAAAD/RET/RET/RET/RET/REQAAAD/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAAAAAD/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAAAAAD/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAD/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AAAD/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP//RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP//RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP9Ycb7/RET/RET/RET/REQAAAD/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP//RET/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8AiP8AiP8AiP8AiP8AiP8AiP8AiP8AAAD/RET/RET/RET/RET/REQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD//8Dz//8AAP//wMP//wAA///Pn///AAD//++f//8AAP//57///wAA///zv///AAD///O///8AAP//+b///wAA///5n///AAD///zf//8AAP//wMP//wAA///A8///AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAAoAAAAMAAAAGAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+ZAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/dwAAAAD/RERm/0RE3f9ERP//RET//0REmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+IAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/d/9ERHf/RET//0RE//9ERP//RET//0REqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8iAIj//wCI//8AiP93AAAAAAAAAAAAAAAA/0REIv9ERP//RET//0REzP9ERCIAAAAA/0REIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/mQCI//8AiP/uAIj/EQAAAAAAAAAA/0REd/9ERP//RET//0RERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/IgCI//8AiP//AIj/iAAAAAAAAAAA/0REqv9ERP//RETuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/5kAiP//AIj//wCI/yIAAAAA/0REu/9ERP//RES7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/yIAiP//AIj//wCI/5kAAAAA/0REu/9ERP//RETMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+ZAIj//wCI//8AiP8i/0REmf9ERP//RETuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP8iAIj//wCI//8AiP+Z/0REZv9ERP//RET//0RERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/iACI//8AiP//WHG+Mf9ERN3/RET//0RE3f9ERDMAAAAA/0REEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP9EAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/d/9ERET/RET//0RE//9ERP//RET//0REqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP9EAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/dwAAAAD/REQz/0REqv9ERP//RET//0REzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA///A8///AAD//8DD//8AAP//z5///wAA///vn///AAD//+e///8AAP//87///wAA///zv///AAD///m///8AAP//+Z///wAA///83///AAD//8DD//8AAP//wPP//wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAAKAAAAEAAAACAAAAAAQAEAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAP///wAAiP8A/0REAFhxvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERERAiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEREREiIiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREAAiIiAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERACIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREAIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERAiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERECIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABETIiICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEREREiIiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREREQIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AQf///////4AB////////hwX////////DD////////8Mf////////4R/////////hH/////////Af////////8A/////////4Bf///////4AB////////gEH/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////KAAAAEAAAACAAAAAAQAYAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wCI/wCI/wCI/wCI/wAAAP9ERP9ERP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wCI/wCI/wCI/wCI//9ERP9ERP9ERP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wAAAAAAAAAAAP9ERP9ERP9ERP9ERP9ERAAAAP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wAAAAAAAP9ERP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wAAAAAAAP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wAAAP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wAAAP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI//9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI//9ERP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/1hxvv9ERP9ERP9ERP9ERAAAAP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wCI/wCI/wCI/wCI//9ERP9ERP9ERP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/wCI/wCI/wCI/wCI/wCI/wCI/wCI/wAAAP9ERP9ERP9ERP9ERP9ERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////A8////////8DD////////z5/////////vn////////+e/////////87/////////zv/////////m/////////+Z/////////83////////8DD////////wPP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////KAAAAEAAAACAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/5kAiP//AIj//wCI//8AiP//AIj//wCI//8AiP93AAAAAP9ERGb/RETd/0RE//9ERP//RESZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+IAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/d/9ERHf/RET//0RE//9ERP//RET//0REqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/IgCI//8AiP//AIj/dwAAAAAAAAAAAAAAAP9ERCL/RET//0RE//9ERMz/REQiAAAAAP9ERCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+ZAIj//wCI/+4AiP8RAAAAAAAAAAD/RER3/0RE//9ERP//REREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/IgCI//8AiP//AIj/iAAAAAAAAAAA/0REqv9ERP//RETuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+ZAIj//wCI//8AiP8iAAAAAP9ERLv/RET//0REuwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/IgCI//8AiP//AIj/mQAAAAD/RES7/0RE//9ERMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+ZAIj//wCI//8AiP8i/0REmf9ERP//RETuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/IgCI//8AiP//AIj/mf9ERGb/RET//0RE//9EREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP+IAIj//wCI//9Ycb4x/0RE3f9ERP//RETd/0REMwAAAAD/REQRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiP9EAIj//wCI//8AiP//AIj//wCI//8AiP//AIj/d/9ERET/RET//0RE//9ERP//RET//0REqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/RACI//8AiP//AIj//wCI//8AiP//AIj//wCI/3cAAAAA/0REM/9ERKr/RET//0RE//9ERMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wPP////////Aw////////8+f////////75/////////nv/////////O/////////87/////////5v/////////mf/////////N/////////Aw////////8Dz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////w==","www.zhihu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAslJREFUOI1dk01oFVcUx3/nzsz7yMt7mZpMNAQSv6BUJI2tYpus0oVIRdGCaNVV6aaiRcxSuih+gLQoLbSL0l1LoY1QLDEbsQtto27U+NFiVwrGVw2GF/Ne3sybmXtcTJpAz92ce7n/c+6P+z/S/43+GVfvDwGEFmKFsiNkoYAsZyKgFsSAWryejZMmqf41BEIjtgz35jkyWGYuTkE1U6GgiqiCzc40taAQVx8MuapKai1zYcxvhwfY/MVdGmFKwxNAWZUz/BtZ/h89eYMALijPWgkn31sBwLG3KhSGi3iugxX44IfH/HqwbwnlP7Q9Y9P05B0MAPWIw9v6uHz7CcNv+GxeWyRuvqSgEUiT3VsDwoU5iOuEC3Ps3hpAfQEAt9FKObTFZz6M2fbZVcZGt4AY9n73N5RL0IgA+PCrKQhKMNNg/8g6aEVgy7htjnDx7iw/XnkMficYDzEGChUoFKGZZq8ut9Pd8RrPw0UUVRBwsTCvHj99MkBOLINrKojA2EcebcUcO769lwmMh5g8GC/bWwELxqKs6XDxcxZNQkQsUSuGZAHiJoV2u9xRF78XQC2K4hqE+XrC+9//Ay9q/H5qmPFbTzl34RF0tkM9WvKUqix6A1ABq7hqwTEeQanMTKyMbOhmZEM3vV0+o79Mg7OoaCQ8jyy8aC0VFAUDAuIwEwlfH1jPdC2k/+gljm9fzZf7+jN/AxdPvMnHm0roxPYlLyiCrByd0npsWefD1OeD7DxzjfF7s7yztsL10yPIwcvwrEb1wi7yRllxYAIKDsGqAKdYxk2tsrpD+PnT1zl0/ibjD5sEnV3cqDZ5+8Qf+OU8NSqUPKjsnaCrz0fcPMbLo1aRlcfvaNxqMvuyDp4haCshbg5NE+I0wXMcsCkztXkCv4S4BTAOINnqPauTSfXWu2pTEIMYJ2NbpsxGWFMUJ7sjAILbOzD5Ck2gKxGz7mB8AAAAAElFTkSuQmCC","yande.re":"data:image/png;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJ1IAJihSACcoUgAoKVQAKCpUADIyNgApKlQAMzMzADMzNAAyMjgAMjJAADc4XwA3N2UANjdmAD0+UQA9PGcAOTl5ADg4fQA9PmwAP0JpAEVHXAA+Pn8APj6BAEFFbgBCRmwASEtdAENDgABFRncAQ0SCAENEhQBJSnMATlBsAFdZdABZWnwAWVqWAF9jhQBbXZ0AYmWLAGJniABhY5oAamuLAGlsjABmaKUAaGimAGpvjwBpbZ0AanKOAGtvngBvb68Ab3SfAHFxtQB2eqkAd3uoAHZ2vAB2d70Af4GbAHl5uwB2fbIAe4CtAHyDqgCCgMsAg4XFAIOEywCEhMsAhIyzAIeLuwCEkLAAi4rFAIuMwQCGic0AiYfTAIuNwACKi8wAjJO0AIiQwACKitUAjY7HAJWXqwCMj8sAjYvZAIyM1wCLkMoAi4zZAI2O0wCPjtMAjJa7AI6WvQCNlsIAkY7dAJOS0QCSktcAkpjEAI+YxgCWm7sAkZfNAJSYywCVkuQAlpbgAJSdzgCZorwAmKHBAJqgxACanNMAlZ7OAJiX5wCWn80AmZ/OAJWc2wCan9IAl6HNAJeh0ACeoNEAnJnrAJuZ7ACZpMkAnKHTAJ6nvwCfo80AoKi9AJqa7wCdmu4AmJ/hAJmnxgCfoN4An5vvAJ6c8ACfnPAAnZ3wAJyn0ACprL4AoqfUAJ6f8QCfqtEApajZAKCr0QCgq9IAoavSAJ6r1ACho/IAo6PyAKGt0gCgrdMApqTxAKiu0gClpfQAq7LHAKiyywCjqugAqaf1AKeo8wCsq+oApbPUAKqq9wCrt88ArbbSAK6t9wCsrfgAqLfYALG50QCpuNgArq74AKu07gC4vc0ArbbuALGy+wCysvsAsbjtALW/1gCvt/MAtr3jALjB1gC3t/4Aubj8ALvE1ACywuEAu7n/ALu6/wC8uv8AtMXkALzI2gC/yd4AucnkAL3G8AC+x/AAv8jtALzH9gDFyPUAxs/mAMPL9QDEzvIAxM32AMTO9wDFz/cAzM74AMXR9ADQ1+IAxNXuAM3V6wDE1vEAz9vtAM7c8gDL2v0A0t33ANHd+ADS3/EAzuL8AM3i/gDO4/8A2eX4AM/k/wDZ5vYA2eX8ANro9gDb6PYA1ef8ANvp9QDV5/4A1ef/AN3q9gDX6P8A3uv4ANvq/QDk7fYA3+z/AODs/wDg7v0A4/H+AOPx/wDk8v8A5PP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwobJDORkpkmDgUHByC6wQkfXLnJ3+TMe8d2GQgUmp47OnmToba90KnS4MIjLs/bUxIaHsXj4bjj07eja4md0TARHA+i5eKmv6iqJV1BObUMABAVdcC8yuW+KQ8ou240AQAABMPl4+Xkyx0WIoVyLxcABk3e5eXl5doDACGtJzgtDQAsZLTl5eXcAgY3YypoNnFl1oRf5dXX3RMLgVYyfmF9b9htVNTMs9kxGEJbRnxaUEzGZ46nyHTNPZ/OR09woH+sl16Uj8RJsj9VekNgWKWDr4dOmIKuV4CLiIZZeDyrirBqRZxzjWJRkIxsSHc1sJuxRFKkZmlKS5VAlj53KwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","yourbittorrent.com":"data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD9+/kZ782ljfTXtHz77t9K+OfVUPXhyWf9/fwO/Pz8Cvf39xL///8A////AP///wD///8A////AP///wD///8A9+XQbvPVsXXfxqp+yq2Ls+O3grvuv4e9+/PqK/T09Bz09PQf////AM7OzmLMzMxM9vb2DP///wD///8A////APrduYXpvIati31tsz45MudnRRv9fWJB3vr39Bz7+/sHsLGyeGlrbqtQUlXHAAAA/0pNUcVrbnGovb/CYsi/tXSVdEvZSjws4wUCAP8KCQj6FRAL9y0wMtvt5t5C5ebmOBAIAP9xUCb3e1s29X1fO95UNA36OCED/y8ZAP8kEQD/Hg4A/x0QAP8uJBb/OC4h/yYdEv8KCAX/kod6rtbW1lwtJx/gopB7p497ZO778+o//vv3Ff3v3lb87NlX+erWTenbyGXe08R01Me4kce2oq2slnvJeVw483d1cbOhoaGRLzAy1eLg3isrHg/4tK6mrdPJvIttYFLnpZ2UxfHp4GC5sKar0svDmeff1mfWzMGO+Pj4Fcu+rnRTTkjXcHBwvU5OTs3Zzb95MCMT/1dJOP9PPSj/hHZm1T4xI/1ELhP/QjUl6j41K+lrWEHjKRsL//v38z/n2clnEAoD/7SysXg5NzTXraWbda+po2SVjoeJmI6CjoN9d66NhnyXe3BjrqGVhqGKgnqjh3dkzUE7NPOWjIDQyLilm1hQRdDIyMhaAgIC/1ZWVtdqaWbCgH14to6MiJuZlpODpaKea5+alHWpo5trtK6mZdDIvlDWz8VE1c7FRKuTdaddXFvF7e3uLhkZGPAEAwL/FhUT/yUiHf8fGRL/EQkA/xgOAv8gFAb/HhID/y4fDP9FLxX4ZUwr54NpSNM0IAn9tbCqfv39/A63nn+5Gx0e+iEfHPhGPDD/MzEt/zQ1NupGSErtNTc4/2FhYeBydHfHkZKViTQ3POeEh4qftLa4Zff18hz88uU/1LyeqDw/Qfh6cGTQfWhN/3VybuNjY2PPdXZ2009PTfDk4t5e+Pj3D////wDw8PAY4uLiLv///wD///8A/PHlRM65oJxLTlDepIpqu4NyW/B8foG7Z2JezWxnYdXh391K/Pr4Ff39/QH///8A////AP///wD///8A////AP38+xniwZmbzLGQn+vXvmrf3dxKmpuci7GvrX7Lxb55/Pn2Ff369iT+/fwK////AP///wD///8A////AP///wD///8A/PfxHPzz6Cv///8A////APv7+wfw8fEY7urmMvz17C79+vgY/v39Af///wD///8A////AP///wD///8A/98AAP/xAAD/gQAAwYEAAIAAAACP4AAAIJYAACAGAACwAAAAgfwAAIABAACAAwAAgH8AAID/AACb/wAA//8AAA==","zh.moegirl.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAdlJREFUOI2N08tLlVEUBfDf5ys1u2WFoQZW9qAMwTCjhAKbFAYSBM3Kxx8gTRxHk4gaNMkgjKhGRUlUEA10II2KIMqKhCCozEeKeg3Uq54GXutDHbhmZ62119lnn3NYiiAhyF/GL2j5gmhFLWa6IegQlC3h9+kwJSiI01FarEcVis1pkikPw755a9xaSfQrMWC7PXrNKlCvR6QpKx10RJ8au+UYk2ce+TbZZhRPEbnrskadEl5iCCMrtV8p6DLvmaA1xkee6xecERQuP8KCKQPHUIwekR+C46j3U7knTpqWLQOndNvptMjEYvEuL3zWIemVN26bFBwStLouJeW+oE6wWVDlnmHBechI739Y0notdqhVo9ktr11FUsKELF3YgDK8U6EPa2BxiKUKjaIQ4+j0XpMaY5I26nbBiDw55jU4YVQ2Qjwg1yd79frioI9qnTMrICXLlDpVIvP/5vVAKQbjATR5bJ3mNFctYRaDpuX66pF+M4r9xkXtivArHjBrSIGEyfRQq1XoRRBQ7kPaO4MtpmVhIH7/R92UElwRtLljXHBWsNU1QbA/5q3VLiXI/N9BpEfQoF+LPyo1asVDlKRfSvxzlSjyXWTOqhC0CYpi6wOCS6srXgX+ArZToIsJ4WQ4AAAAAElFTkSuQmCC","zh.wikipedia.org":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAXdJREFUOI2lk7GKIkEQhv9eDhNBxDP0BXwKQZDBXEERQfABxFjFfDAyXRMTwWg1NTUUAxMDMRgTE1t0QAMTv01u59DZOw6voq6/+/+KoqsECHgHLP8e9pdHX+ZX490AVtJPvRZHA/CiWZL0Zq1VpVKRMUapVEqr1UqtVkvGGOVyOa3Xa1WrVRljNBwONZ/PZYxRsVjU+XyWvppxHIdmsxk0VyqVgnwymTCbzYK7bDYbnAPAYrFAEpfLBQDP85DE4XCgUCgEhuVyyXg8DgMAkskkvV4vyMvlMpLYbreBVqvVHr7hATCdTtHvrthsNkhiv98DYK3Fdd0/AwAkMRqNAHBdF8dxqNfrAHQ6Ha7X698Bg8EASfi+T7/fZ7fbIQnP82i328/Pw4Db7YYk0ul0oOXzeSRxPB5DgB/PgxGJRNRoNJTJZAKt2+0qGo0qkUiEJ4lvlsj3fe73+4N2Op1C1QH7JunjGRqLxWSMedDi8fh3k/wh/nOdPwFzSo2/XSRfAgAAAABJRU5ErkJggg==","zhannei.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADLElEQVQ4jT2TW0ybZQCGP70w24WJFx7inYlZZjJ3wX4WYqrJ9GImzkQzjRdGnZpo5oXGEbNlbBMQGEhKORTKsS2HApXDKpuTQ1FbRtehsALpeu7f45wDXCwUBEr/x4vOXry3T/I+eV8hYyBAEyHakTEQoY8YA8QwE94bIKoMEsWETDdhOgnSjI86PFQRogURQIuHavzUE1R0WFKlzGxpCCs9RJQ+ZPT52FON2NJluCljibN4qEKE6cRPI2E6qIyfRpqXkOYlXlooQvWpnZMfRCmpdeUhlpVy7KlG3JTiQ43wZYyElA6Ce70UOIo4elPFwUkVh2YlnvlSjRAgHt3j6We3GLJNI2Ng+p8qPFQToAkRVczMrrfgXDdwaFaiIl7MiuLkE8dXPNdzksOvyXy/pEbVWMH+J9JYnBPMbtTjQ0OIVkSCK1y/ryWwY+HArxInlo9TnyxnLXsH+8ok/rSTB7iwembYVzjD8y+k8Gwbub2jIUwXIskYpkALyewkr9jfyDsYXTXxL3+RJk4KH4ffdeTqCDBNTbO404SMEXGXa7jTI5gCRs66LnDkjxygNHKJDJtss8oGMm82tyIeX0OILBfVC/izbUTozgGSjFHl1LK0PsUB61GO/X6c2w9c7LHNYtrJ+G9/4t+8QYNXjXgqxuW2OcJ0/A+4ShILZQ4NiV0HZ+YvUDBXiCt9k78zCVS3XmV/wS2KS+7x2Tkvj+zbZCZy5eHwjIgkFuIMY42NoPPoSOw6UVnfomi+KO/jyS/q8v3fL14gQi9BWgijR8QZIko/SX7kPUsJqzhwb1gpnDjBiw6JgzaJI4Mf8fI3P/D1aDuhzCAyevw0EKIdEaUfGT0xzHw8WklzoJb72Iju/kJ/rA3Xxhj3FCt3+Yk4w8hKN3NbGmzpcnxZLSJ3pmZkDEwsX+WxU5d5ffxDvl28yLmF85yeqOCdtibOXNNwaaqeLm8102s1uJXv8KNBBNHhpZYAWsJ0Yrb/zNufuzhVMUm1/gbji9cJZXKnCqLDRx13qGSZ83ipQUToeSikiwi9xBggzhAJRkgwQpxhYpiJ0oeMgRCt+GnASw0hdPwHgbEX1WPRHXsAAAAASUVORK5CYII=","zhidao.baidu.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAl5JREFUOI2dU89LlFEUPXfmm09HyaCsTDOLNrqLtNwVSC4K2tRKBAtqU5hhUS2KChSKqH+gaBHVRqSCIKpdi6ggXIQ/spmx0tEcHacxa3Le9947LcZvZtRWXXhwz73vXc47915BzzABAJYALWABGJPDxgLW5rD2/SJsNBwA4OUG/I9J+0sEYLkqEY0oXu9JcmgwSwCIRRW/xLzVF41GANYuiylF3LuTlocPfuLWjRTGogonjk6j61QCY1G1ooBdziD9w8B1BdYAa8sD4jqQ1JxB5rcRz7OSmjPLC2gDBybHYPybh54rSZaGA2hpDUs6ZbCzsQRNzWEcO742/2Zi3EPt1lCeAXBxgCTZ9yjN7VURu7f5qyXJWCTLxT+WvsUiWbYdibPtcNx+n/JIkjjQR8fXYNsOFzVbHKncEMTzZ79Q3+Ciu3MapWFB55l1eNy/gLGYwtyMkckJzarNjsBaOLC5f+1qCqP7wnrOJDTqG1w52znDTyNZhFyR5Kzltd5Kefc2g+rqECs3Bos00DkGwSBw8FC5TMU1zp1OYHREwVMUTxFvXmfk0vlZ3ry9SSbjGnV1ISl0QReUjUU8dJ1MYHhQQSlKseAjQ1npvZpETa0j8DPGIOB3gQSe9C1w6KOi94+ZmZ8nP7xfRHxcF5LWwoEpMAi5gmyWECEEQmsJCCTkCAkikyGmJnXRILGggQjQ1lEh8QkPn0cVKtYEZN/+MgDA0/4FmU9bNO4uQUtrmRQzEHS8Iu+3+iECGACwYmbz5gJo9IHsuQtB+wtC68KaGru0qku+NYBmbpXzh/n1/wuHC2lVjJEkmAAAAABJRU5ErkJggg=="};

// GM_getResourceText('css') 
var MAIN_CSS = getMStr(function(){/*
    #sej-container {
        display: block;
        position: relative;
        z-index: auto;
        padding: 1px 0 1px 10px;
        line-height: 1.5;
        font-size: 13px;
    }


    #sej-expanded-category {
        font-weight: bold;
    }
    #sej-expanded-category::after {
        content:"：";
    }


    .sej-engine {
        line-height: 2;
        display: inline-block;
        margin: 0;
        border: none;
        padding: 0 4px;
        text-decoration: none;
        color: #120886 !important;
        transition: background-color 0.15s ease-in-out;
    }
    a.sej-engine.only-icon {
	    margin-left: 3px;
	    margin-right: 3px;
    }
    a.sej-engine.only-icon > span {
    	display: none;
    }
    a.sej-engine:link, a.sej-engine:visited{
        text-decoration: none;
    }
    a.sej-engine:visited, a.sej-engine:visited *, a.sej-engine:active, a.sej-engine:active *{
        color: #120886 !important;
    }
    .sej-drop-list-trigger {

    }
    .sej-drop-list-trigger-shown {
        background-color: #DEEDFF !important;
    }
    .sej-drop-list-trigger::after {
        content: '';
        display: inline-block;
        margin: 0 0 0 3px;
        padding: 0;
        width: 0;
        height: 0;
        border-top: 6px solid #BCBCBC;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 0px solid transparent;
        vertical-align: middle;
        transition: -webkit-transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out;
    }
    .sej-drop-list-trigger-shown::after {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    .sej-engine:hover {
        background-color: #EAEAEA;
    }
    .sej-drop-list > .sej-engine {
        display: block;
        padding-top: 4px;
        padding-bottom: 4px;
    }
    .sej-drop-list > .sej-engine:hover {
        background-color: #DEEDFF;
    }

    .sej-engine-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: none;
        padding: 0;
        margin: 0 3px 0 0;
        vertical-align: text-bottom;
    }


    .sej-drop-list {
        position: absolute;
        display: none;
        opacity: 0.3;
        top: -10000px;
        left: 0;
        min-width: 120px;
        border: 1px solid #FAFAFA;
        padding: 5px 0;
        text-align: left;
        font-size: 13px;
        -moz-box-shadow: 2px 2px 5px #ccc;
        -webkit-box-shadow: 2px 2px 5px #ccc;
        box-shadow: 2px 2px 5px #ccc;
        background-color: white;
        transition: opacity 0.2s ease-in-out,
            top 0.2s ease-in-out;
    }
*/});


loadPrefs();

function loadPrefs() {
    prefs.openInNewTab = GM_getValue('openInNewTab', prefs.openInNewTab);
    prefs.debug = GM_getValue('debug', prefs.debug);
    prefs.hideEnglineLabel = GM_getValue('hideEnglineLabel', prefs.hideEnglineLabel);
    prefs.engineListDataType = GM_getValue('engineListDataType', prefs.engineListDataType);

    engineListData.custom = GM_getValue('engineList') || '';
}

function openPrefs(){
    var d = document;
    var on = function(node, e, f) {
        node.addEventListener(e, f, false);
    };

    var $ = function(s) { return d.getElementById('sej-prefs-'+s); };
    if($('setup')) return;

    var styleNode = GM_addStyle('\
        #sej-prefs-setup { position:fixed;z-index:2147483647;top:38px;right:60px;padding:20px 30px 10px;background:#eee;width:500px;border:1px solid black; }\
        #sej-prefs-setup * { color:black;text-align:left;line-height:normal;font-size:12px; }\
        #sej-prefs-setup i { font-family: "微软雅黑", arial; }\
        #sej-prefs-setup a { color:black;text-decoration:underline; }\
        #sej-prefs-setup div { text-align:center;font-size:14px; }\
        #sej-prefs-title { font-weight:bold; }\
        #sej-prefs-setup ul { margin:15px 0 0 0;padding:0;list-style:none;background:#eee;border:0; }\
        #sej-prefs-setup input, #sej-prefs-setup select { border:1px solid gray;padding:2px;background:white; }\
        #sej-prefs-setup li { margin:0;padding:6px 0;vertical-align:middle;background:#eee;border:0 }\
        #sej-prefs-setup textarea { width:98%; height:60px; margin:3px 0; }\
        #sej-prefs-setup button { padding: 1px 6px; font-size: 12px; margin-right: 3px; }\
        #sej-prefs-setup #top-buttons{background:none repeat scroll 0 0 #fff;display:block;position:absolute;top:-35px;border-right:12px solid #e0e0e0;border-top:12px solid #e0e0e0;border-left:12px solid #e0e0e0;text-align:center}\
        #sej-prefs-setup img { display: initial; }\
        #sej-prefs-minitip { position: absolute; background: #ff9; border: 1px solid #F96; padding: 10px; left: -400px; top: 200px; right: 570px; }\
        #sej-prefs-minitip p { margin: 5px 5px; }\
        #sej-prefs-minitip span { color: green; }\
    ');

    var div = d.createElement('div');
    div.id = 'sej-prefs-setup';
    d.body.appendChild(div);
    div.innerHTML = '\
        <div id="top-buttons">\
            <button id="sej-prefs-ok" title="需要刷新页面才能生效">√ 确定</button>\
            <button id="sej-prefs-cancel" title="取消本次设定，所有选项还原">X 取消</button>\
        </div>\
        <div id="sej-prefs-title">SearchEngineJumpCE 设置</div>\
        <ul>\
            <li><input type="checkbox" id="sej-prefs-openInNewTab" /> 在新页面打开</li>\
            <li><input type="checkbox" id="sej-prefs-debug" /> 调试模式</li>\
            <li>\
                前几个搜索的文字部分：\
                <select id="sej-prefs-hideEnglineLabel" >\
                    <option value="0">不隐藏</option>\
                    <option value="1">根据高度自行判断</option>\
                    <option value="2">隐藏</option>\
                </select>\
            </li>\
            <li>\
                搜索列表版本：\
                <select id="sej-prefs-engineListDataType" >\
                    <option value="custom">用户版本</option>\
                    <option value="normal">作者版本</option>\
                    <option value="simple">极简版本</option>\
                    <option value="wenke">文科版本</option>\
                </select>\
                <a style="margin-left: 20px;" target="_blank" href="https://greasyfork.org/zh-CN/scripts/5316/feedback" title="通过反馈给作者加入你的版本">加入你的版本？</a>\
            </li>\
            <li>自定义搜索列表：\
                <img id="sej-prefs-engineList-tip" class="minitipicon" src="data:image/gif;base64,R0lGODlhDAAMAKIAALGXVv////7+/dPGn+zm1bqjadHDm/r49CH5BAAAAAAALAAAAAAMAAwAQAM1GCFkVYYIRYC9uFm1gzXC0HHAIBQYaRXBIQLkcCguZslBBXu7RaApHgCSsoFevdtk0XhElgkAOw==" />\
                <div>\
                    <textarea id="sej-prefs-engineList" style="height: 350px;"></textarea>\
                </div>\
            </li>\
        </ul>\
        <div id="sej-prefs-minitip" style="display: none;">' +
            introduceToHtml() + '\
        </div>\
    ';
    div = null;

    var engineListType_sel = $('engineListDataType'),
        engineList_txt = $('engineList');

    var close = function() {
        if (styleNode) {
            styleNode.parentNode.removeChild(styleNode);
        }
        var div = $('setup');
        div.parentNode.removeChild(div);
    };

    on($('ok'), 'click', function(){
        GM_setValue('openInNewTab', prefs.openInNewTab = !!$('openInNewTab').checked);
        GM_setValue('debug', prefs.debug = !!$('debug').checked);
        GM_setValue('hideEnglineLabel', prefs.hideEnglineLabel = $('hideEnglineLabel').value);
        GM_setValue('engineListDataType', prefs.engineListDataType = engineListType_sel.value);

        if (engineListType_sel.value == 'custom') {
            GM_setValue('engineList', engineListData.custom = engineList_txt.value);
        }

        // 刷新工具条
        remove();
        run();

        close();
    });

    on($('cancel'), 'click', close);

    $('engineList-tip').onclick = function() {
        var minitip = $('minitip');
        minitip.style.display = (minitip.style.display == 'block') ? 'none' : 'block';
    };

    engineListType_sel.onchange = function() {
        engineList_txt.value = engineListData[engineListType_sel.value].trim();
    };

    $('debug').checked = prefs.debug;
    $('openInNewTab').checked = prefs.openInNewTab;
    $('hideEnglineLabel').value = prefs.hideEnglineLabel;
    engineListType_sel.value = prefs.engineListDataType;

    engineList_txt.value = engineListData[prefs.engineListDataType].trim();
};


// --------------------可设置项结束------------------------

var debug = prefs.debug ? console.debug.bind(console) : function() {};

// var iconUrl = 'http://www.google.com/s2/favicons?domain=www.google.com';
// getImageBase64(iconUrl);
function imageUrlToBase64(iconUrl, callback) {
    GM_xmlhttpRequest({
        method: "GET",
        url: iconUrl,
        overrideMimeType: "text/plain; charset=x-user-defined",
        onload: function(xhr) {
            var r = xhr.responseText;
            var data = new Uint8Array(r.length);
            var i = 0;
            while (i < r.length) {
                data[i] = r.charCodeAt(i);
                i++;
            }

            var blob = new Blob([data], { type: "image/png" });

            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function() {
                var base64data = reader.result;
                callback(base64data);
            }
        }
    });
}

// 获取 method 为 POST 的表单的 HTML
function getPostFormHTML(url, args, newTab) {
    var form = '<form method="post"' +
        ' action="' + url + '"' +
        (newTab ? ' target="_blank"' : '') +
        '>';
    for (var arg in args) {
        var input = '<input type="hidden"' +
            ' name="' + arg + '"' +
            ' value="' + args[arg] + '"' +
            ' />';
        form += input;
    }
    form += '</form>';
    return form;
}

// 包装 HTML 元素代码以隐藏该元素
function wrapToHide(html) {
    return '<span style="display:none;">' + html + '</span>';
}

function toRE(obj) {
    if (obj instanceof RegExp) {
        return obj;
    } else if (obj instanceof Array) {
        return new RegExp(obj[0], obj[1]);
    } else {
        return new RegExp(obj);
    }
}

function getMStr(func) {
    var lines = func.toString();
    lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
    return lines;
}

//xpath 获取单个元素
function getElementByXPath(xPath, contextNode, doc) {
    doc = doc || document;
    contextNode = contextNode || doc;
    return doc.evaluate(xPath, contextNode, null, 9, null).singleNodeValue;
};


// 事件支持检测.
// 比如 eventSupported('fullscreenchange', document);
function eventSupported(eventName, elem) {
    elem = elem || document.createElement('div');
    var prefix = ['o', 'ms', 'moz', 'webkit', ''];

    var l = prefix.length;
    var pEventName;
    var isFunction;
    var setAttr;

    while(l --) {
        pEventName = 'on' + prefix[l] + eventName;

        if (pEventName in elem) {
            return pEventName.slice(2);
        } else if (typeof elem.setAttribute == 'function') { // setAttribute 是元素节点的方法
            setAttr = false;
            if (!elem.hasAttribute(pEventName)) {
                setAttr = true;
                elem.setAttribute(pEventName, 'return;');
            };

            isFunction = typeof elem[pEventName] == 'function';

            if (setAttr) elem.removeAttribute(pEventName);

            if (isFunction) {
                return pEventName.slice(2);
            };
        };
    };

    return false;
};

// 保存指定对象相关数据
var data = (function () {
    'use strict';

    var cache = {
        objs: [],
        data: {},
    };


    function data(obj, key, value) {
        var id = cache.objs.indexOf(obj);
        if (id == -1) {
            id = cache.objs.push(obj) - 1;
        };
        if (!cache.data[id]) {//初始化
            cache.data[id] = {};
        };
        if (typeof value == 'undefined') {// 取值
            return typeof key == 'undefined' ? cache.data[id] : cache.data[id][key];
        } else {
            return cache.data[id][key] = value;
        };
    };

    return data;
})();

// 为mouseleave mouseenter事件做个兼容
// 需要 eventSupported， data函数支持
var mouseEventListener = (function () {

    var support = {
        mouseleave : eventSupported('mouseleave'),
        mouseenter : eventSupported('mouseenter'),
    };

    var map = {
        mouseleave : 'mouseout',
        mouseenter : 'mouseover',
    };

    return {
        add : function (type, ele, callback) { //事件类型，元素，监听函数
            if (support[type]) {
                ele.addEventListener(type, callback, false); //mouseleave,enter不冒泡，所以在冒泡阶段监听事件，不要担心子孙元素进出发生的事件冒泡上来。
            } else {
                var listener = data(callback, 'mouseELListener');
                if (!listener) {
                    listener = function (e) {
                        var relatedTarget = e.relatedTarget; //mouseout，去往的元素；mouseover，来自的元素
                        // 当mouseout（离开ele）去往的元素不是自己的子孙元素
                        // 当mouseover（进入ele）来自的元素不是自己的子孙元素
                        if (!ele.contains(relatedTarget)) { // contains函数，自己.contains(自己) 返回true
                            callback.call(ele, e);
                        };
                    };
                    data(callback, 'mouseELListener', listener);
                };

                ele.addEventListener(map[type], listener, true);
            };
        },
        remove : function (type, ele, callback) {
            if (support[type]) {
                ele.removeEventListener(type, callback, false);
            } else {
                ele.removeEventListener(map[type], data(callback, 'mouseELListener'), true);
            };
        },
    };
})();

//获取已滚动的距离
function getScrolled(container) {
    if (container) {
        return {
            x:container.scrollLeft,
            y:container.scrollTop,
        };
    };
    return {
        x: 'scrollX' in window ? window.scrollX : ('pageXOffset' in window ? window.pageXOffset : document.documentElement.scrollLeft || document.body.scrollLeft),
        y: 'scrollY' in window ? window.scrollY : ('pageYOffset' in window ? window.pageYOffset :  document.documentElement.scrollTop || document.body.scrollTop),
    };
};

function getElement(selector) {
    if (selector.indexOf('css;') == 0) {
        return document.querySelector(selector.slice(4));
    } else {
        return getElementByXPath(selector);
    };
};

// unicode转成gbk编码函数
function toGBK(str) {
    //编码对照 unicode(10进制) : gb2312(16进制)
    var map={12288:"A1A1",12289:"A1A2",12290:"A1A3",183:"A1A4",713:"A1A5",711:"A1A6",168:"A1A7",12291:"A1A8",12293:"A1A9",8212:"A1AA",65374:"A1AB",8214:"A1AC",8230:"A1AD",8216:"A1AE",8217:"A1AF",8220:"A1B0",8221:"A1B1",12308:"A1B2",12309:"A1B3",12296:"A1B4",12297:"A1B5",12298:"A1B6",12299:"A1B7",12300:"A1B8",12301:"A1B9",12302:"A1BA",12303:"A1BB",12310:"A1BC",12311:"A1BD",12304:"A1BE",12305:"A1BF",177:"A1C0",215:"A1C1",247:"A1C2",8758:"A1C3",8743:"A1C4",8744:"A1C5",8721:"A1C6",8719:"A1C7",8746:"A1C8",8745:"A1C9",8712:"A1CA",8759:"A1CB",8730:"A1CC",8869:"A1CD",8741:"A1CE",8736:"A1CF",8978:"A1D0",8857:"A1D1",8747:"A1D2",8750:"A1D3",8801:"A1D4",8780:"A1D5",8776:"A1D6",8765:"A1D7",8733:"A1D8",8800:"A1D9",8814:"A1DA",8815:"A1DB",8804:"A1DC",8805:"A1DD",8734:"A1DE",8757:"A1DF",8756:"A1E0",9794:"A1E1",9792:"A1E2",176:"A1E3",8242:"A1E4",8243:"A1E5",8451:"A1E6",65284:"A1E7",164:"A1E8",65504:"A1E9",65505:"A1EA",8240:"A1EB",167:"A1EC",8470:"A1ED",9734:"A1EE",9733:"A1EF",9675:"A1F0",9679:"A1F1",9678:"A1F2",9671:"A1F3",9670:"A1F4",9633:"A1F5",9632:"A1F6",9651:"A1F7",9650:"A1F8",8251:"A1F9",8594:"A1FA",8592:"A1FB",8593:"A1FC",8595:"A1FD",12307:"A1FE",8560:"A2A1",8561:"A2A2",8562:"A2A3",8563:"A2A4",8564:"A2A5",8565:"A2A6",8566:"A2A7",8567:"A2A8",8568:"A2A9",8569:"A2AA",9352:"A2B1",9353:"A2B2",9354:"A2B3",9355:"A2B4",9356:"A2B5",9357:"A2B6",9358:"A2B7",9359:"A2B8",9360:"A2B9",9361:"A2BA",9362:"A2BB",9363:"A2BC",9364:"A2BD",9365:"A2BE",9366:"A2BF",9367:"A2C0",9368:"A2C1",9369:"A2C2",9370:"A2C3",9371:"A2C4",9332:"A2C5",9333:"A2C6",9334:"A2C7",9335:"A2C8",9336:"A2C9",9337:"A2CA",9338:"A2CB",9339:"A2CC",9340:"A2CD",9341:"A2CE",9342:"A2CF",9343:"A2D0",9344:"A2D1",9345:"A2D2",9346:"A2D3",9347:"A2D4",9348:"A2D5",9349:"A2D6",9350:"A2D7",9351:"A2D8",9312:"A2D9",9313:"A2DA",9314:"A2DB",9315:"A2DC",9316:"A2DD",9317:"A2DE",9318:"A2DF",9319:"A2E0",9320:"A2E1",9321:"A2E2",12832:"A2E5",12833:"A2E6",12834:"A2E7",12835:"A2E8",12836:"A2E9",12837:"A2EA",12838:"A2EB",12839:"A2EC",12840:"A2ED",12841:"A2EE",8544:"A2F1",8545:"A2F2",8546:"A2F3",8547:"A2F4",8548:"A2F5",8549:"A2F6",8550:"A2F7",8551:"A2F8",8552:"A2F9",8553:"A2FA",8554:"A2FB",8555:"A2FC",65281:"A3A1",65282:"A3A2",65283:"A3A3",65509:"A3A4",65285:"A3A5",65286:"A3A6",65287:"A3A7",65288:"A3A8",65289:"A3A9",65290:"A3AA",65291:"A3AB",65292:"A3AC",65293:"A3AD",65294:"A3AE",65295:"A3AF",65296:"A3B0",65297:"A3B1",65298:"A3B2",65299:"A3B3",65300:"A3B4",65301:"A3B5",65302:"A3B6",65303:"A3B7",65304:"A3B8",65305:"A3B9",65306:"A3BA",65307:"A3BB",65308:"A3BC",65309:"A3BD",65310:"A3BE",65311:"A3BF",65312:"A3C0",65313:"A3C1",65314:"A3C2",65315:"A3C3",65316:"A3C4",65317:"A3C5",65318:"A3C6",65319:"A3C7",65320:"A3C8",65321:"A3C9",65322:"A3CA",65323:"A3CB",65324:"A3CC",65325:"A3CD",65326:"A3CE",65327:"A3CF",65328:"A3D0",65329:"A3D1",65330:"A3D2",65331:"A3D3",65332:"A3D4",65333:"A3D5",65334:"A3D6",65335:"A3D7",65336:"A3D8",65337:"A3D9",65338:"A3DA",65339:"A3DB",65340:"A3DC",65341:"A3DD",65342:"A3DE",65343:"A3DF",65344:"A3E0",65345:"A3E1",65346:"A3E2",65347:"A3E3",65348:"A3E4",65349:"A3E5",65350:"A3E6",65351:"A3E7",65352:"A3E8",65353:"A3E9",65354:"A3EA",65355:"A3EB",65356:"A3EC",65357:"A3ED",65358:"A3EE",65359:"A3EF",65360:"A3F0",65361:"A3F1",65362:"A3F2",65363:"A3F3",65364:"A3F4",65365:"A3F5",65366:"A3F6",65367:"A3F7",65368:"A3F8",65369:"A3F9",65370:"A3FA",65371:"A3FB",65372:"A3FC",65373:"A3FD",65507:"A3FE",12353:"A4A1",12354:"A4A2",12355:"A4A3",12356:"A4A4",12357:"A4A5",12358:"A4A6",12359:"A4A7",12360:"A4A8",12361:"A4A9",12362:"A4AA",12363:"A4AB",12364:"A4AC",12365:"A4AD",12366:"A4AE",12367:"A4AF",12368:"A4B0",12369:"A4B1",12370:"A4B2",12371:"A4B3",12372:"A4B4",12373:"A4B5",12374:"A4B6",12375:"A4B7",12376:"A4B8",12377:"A4B9",12378:"A4BA",12379:"A4BB",12380:"A4BC",12381:"A4BD",12382:"A4BE",12383:"A4BF",12384:"A4C0",12385:"A4C1",12386:"A4C2",12387:"A4C3",12388:"A4C4",12389:"A4C5",12390:"A4C6",12391:"A4C7",12392:"A4C8",12393:"A4C9",12394:"A4CA",12395:"A4CB",12396:"A4CC",12397:"A4CD",12398:"A4CE",12399:"A4CF",12400:"A4D0",12401:"A4D1",12402:"A4D2",12403:"A4D3",12404:"A4D4",12405:"A4D5",12406:"A4D6",12407:"A4D7",12408:"A4D8",12409:"A4D9",12410:"A4DA",12411:"A4DB",12412:"A4DC",12413:"A4DD",12414:"A4DE",12415:"A4DF",12416:"A4E0",12417:"A4E1",12418:"A4E2",12419:"A4E3",12420:"A4E4",12421:"A4E5",12422:"A4E6",12423:"A4E7",12424:"A4E8",12425:"A4E9",12426:"A4EA",12427:"A4EB",12428:"A4EC",12429:"A4ED",12430:"A4EE",12431:"A4EF",12432:"A4F0",12433:"A4F1",12434:"A4F2",12435:"A4F3",12449:"A5A1",12450:"A5A2",12451:"A5A3",12452:"A5A4",12453:"A5A5",12454:"A5A6",12455:"A5A7",12456:"A5A8",12457:"A5A9",12458:"A5AA",12459:"A5AB",12460:"A5AC",12461:"A5AD",12462:"A5AE",12463:"A5AF",12464:"A5B0",12465:"A5B1",12466:"A5B2",12467:"A5B3",12468:"A5B4",12469:"A5B5",12470:"A5B6",12471:"A5B7",12472:"A5B8",12473:"A5B9",12474:"A5BA",12475:"A5BB",12476:"A5BC",12477:"A5BD",12478:"A5BE",12479:"A5BF",12480:"A5C0",12481:"A5C1",12482:"A5C2",12483:"A5C3",12484:"A5C4",12485:"A5C5",12486:"A5C6",12487:"A5C7",12488:"A5C8",12489:"A5C9",12490:"A5CA",12491:"A5CB",12492:"A5CC",12493:"A5CD",12494:"A5CE",12495:"A5CF",12496:"A5D0",12497:"A5D1",12498:"A5D2",12499:"A5D3",12500:"A5D4",12501:"A5D5",12502:"A5D6",12503:"A5D7",12504:"A5D8",12505:"A5D9",12506:"A5DA",12507:"A5DB",12508:"A5DC",12509:"A5DD",12510:"A5DE",12511:"A5DF",12512:"A5E0",12513:"A5E1",12514:"A5E2",12515:"A5E3",12516:"A5E4",12517:"A5E5",12518:"A5E6",12519:"A5E7",12520:"A5E8",12521:"A5E9",12522:"A5EA",12523:"A5EB",12524:"A5EC",12525:"A5ED",12526:"A5EE",12527:"A5EF",12528:"A5F0",12529:"A5F1",12530:"A5F2",12531:"A5F3",12532:"A5F4",12533:"A5F5",12534:"A5F6",913:"A6A1",914:"A6A2",915:"A6A3",916:"A6A4",917:"A6A5",918:"A6A6",919:"A6A7",920:"A6A8",921:"A6A9",922:"A6AA",923:"A6AB",924:"A6AC",925:"A6AD",926:"A6AE",927:"A6AF",928:"A6B0",929:"A6B1",931:"A6B2",932:"A6B3",933:"A6B4",934:"A6B5",935:"A6B6",936:"A6B7",937:"A6B8",945:"A6C1",946:"A6C2",947:"A6C3",948:"A6C4",949:"A6C5",950:"A6C6",951:"A6C7",952:"A6C8",953:"A6C9",954:"A6CA",955:"A6CB",956:"A6CC",957:"A6CD",958:"A6CE",959:"A6CF",960:"A6D0",961:"A6D1",963:"A6D2",964:"A6D3",965:"A6D4",966:"A6D5",967:"A6D6",968:"A6D7",969:"A6D8",65077:"A6E0",65078:"A6E1",65081:"A6E2",65082:"A6E3",65087:"A6E4",65088:"A6E5",65085:"A6E6",65086:"A6E7",65089:"A6E8",65090:"A6E9",65091:"A6EA",65092:"A6EB",65083:"A6EE",65084:"A6EF",65079:"A6F0",65080:"A6F1",65073:"A6F2",65075:"A6F4",65076:"A6F5",1040:"A7A1",1041:"A7A2",1042:"A7A3",1043:"A7A4",1044:"A7A5",1045:"A7A6",1025:"A7A7",1046:"A7A8",1047:"A7A9",1048:"A7AA",1049:"A7AB",1050:"A7AC",1051:"A7AD",1052:"A7AE",1053:"A7AF",1054:"A7B0",1055:"A7B1",1056:"A7B2",1057:"A7B3",1058:"A7B4",1059:"A7B5",1060:"A7B6",1061:"A7B7",1062:"A7B8",1063:"A7B9",1064:"A7BA",1065:"A7BB",1066:"A7BC",1067:"A7BD",1068:"A7BE",1069:"A7BF",1070:"A7C0",1071:"A7C1",1072:"A7D1",1073:"A7D2",1074:"A7D3",1075:"A7D4",1076:"A7D5",1077:"A7D6",1105:"A7D7",1078:"A7D8",1079:"A7D9",1080:"A7DA",1081:"A7DB",1082:"A7DC",1083:"A7DD",1084:"A7DE",1085:"A7DF",1086:"A7E0",1087:"A7E1",1088:"A7E2",1089:"A7E3",1090:"A7E4",1091:"A7E5",1092:"A7E6",1093:"A7E7",1094:"A7E8",1095:"A7E9",1096:"A7EA",1097:"A7EB",1098:"A7EC",1099:"A7ED",1100:"A7EE",1101:"A7EF",1102:"A7F0",1103:"A7F1",257:"A8A1",225:"A8A2",462:"A8A3",224:"A8A4",275:"A8A5",233:"A8A6",283:"A8A7",232:"A8A8",299:"A8A9",237:"A8AA",464:"A8AB",236:"A8AC",333:"A8AD",243:"A8AE",466:"A8AF",242:"A8B0",363:"A8B1",250:"A8B2",468:"A8B3",249:"A8B4",470:"A8B5",472:"A8B6",474:"A8B7",476:"A8B8",252:"A8B9",234:"A8BA",593:"A8BB",324:"A8BD",328:"A8BE",609:"A8C0",12549:"A8C5",12550:"A8C6",12551:"A8C7",12552:"A8C8",12553:"A8C9",12554:"A8CA",12555:"A8CB",12556:"A8CC",12557:"A8CD",12558:"A8CE",12559:"A8CF",12560:"A8D0",12561:"A8D1",12562:"A8D2",12563:"A8D3",12564:"A8D4",12565:"A8D5",12566:"A8D6",12567:"A8D7",12568:"A8D8",12569:"A8D9",12570:"A8DA",12571:"A8DB",12572:"A8DC",12573:"A8DD",12574:"A8DE",12575:"A8DF",12576:"A8E0",12577:"A8E1",12578:"A8E2",12579:"A8E3",12580:"A8E4",12581:"A8E5",12582:"A8E6",12583:"A8E7",12584:"A8E8",12585:"A8E9",9472:"A9A4",9473:"A9A5",9474:"A9A6",9475:"A9A7",9476:"A9A8",9477:"A9A9",9478:"A9AA",9479:"A9AB",9480:"A9AC",9481:"A9AD",9482:"A9AE",9483:"A9AF",9484:"A9B0",9485:"A9B1",9486:"A9B2",9487:"A9B3",9488:"A9B4",9489:"A9B5",9490:"A9B6",9491:"A9B7",9492:"A9B8",9493:"A9B9",9494:"A9BA",9495:"A9BB",9496:"A9BC",9497:"A9BD",9498:"A9BE",9499:"A9BF",9500:"A9C0",9501:"A9C1",9502:"A9C2",9503:"A9C3",9504:"A9C4",9505:"A9C5",9506:"A9C6",9507:"A9C7",9508:"A9C8",9509:"A9C9",9510:"A9CA",9511:"A9CB",9512:"A9CC",9513:"A9CD",9514:"A9CE",9515:"A9CF",9516:"A9D0",9517:"A9D1",9518:"A9D2",9519:"A9D3",9520:"A9D4",9521:"A9D5",9522:"A9D6",9523:"A9D7",9524:"A9D8",9525:"A9D9",9526:"A9DA",9527:"A9DB",9528:"A9DC",9529:"A9DD",9530:"A9DE",9531:"A9DF",9532:"A9E0",9533:"A9E1",9534:"A9E2",9535:"A9E3",9536:"A9E4",9537:"A9E5",9538:"A9E6",9539:"A9E7",9540:"A9E8",9541:"A9E9",9542:"A9EA",9543:"A9EB",9544:"A9EC",9545:"A9ED",9546:"A9EE",9547:"A9EF",30403:"B0A0",21834:"B0A1",38463:"B0A2",22467:"B0A3",25384:"B0A4",21710:"B0A5",21769:"B0A6",21696:"B0A7",30353:"B0A8",30284:"B0A9",34108:"B0AA",30702:"B0AB",33406:"B0AC",30861:"B0AD",29233:"B0AE",38552:"B0AF",38797:"B0B0",27688:"B0B1",23433:"B0B2",20474:"B0B3",25353:"B0B4",26263:"B0B5",23736:"B0B6",33018:"B0B7",26696:"B0B8",32942:"B0B9",26114:"B0BA",30414:"B0BB",20985:"B0BC",25942:"B0BD",29100:"B0BE",32753:"B0BF",34948:"B0C0",20658:"B0C1",22885:"B0C2",25034:"B0C3",28595:"B0C4",33453:"B0C5",25420:"B0C6",25170:"B0C7",21485:"B0C8",21543:"B0C9",31494:"B0CA",20843:"B0CB",30116:"B0CC",24052:"B0CD",25300:"B0CE",36299:"B0CF",38774:"B0D0",25226:"B0D1",32793:"B0D2",22365:"B0D3",38712:"B0D4",32610:"B0D5",29240:"B0D6",30333:"B0D7",26575:"B0D8",30334:"B0D9",25670:"B0DA",20336:"B0DB",36133:"B0DC",25308:"B0DD",31255:"B0DE",26001:"B0DF",29677:"B0E0",25644:"B0E1",25203:"B0E2",33324:"B0E3",39041:"B0E4",26495:"B0E5",29256:"B0E6",25198:"B0E7",25292:"B0E8",20276:"B0E9",29923:"B0EA",21322:"B0EB",21150:"B0EC",32458:"B0ED",37030:"B0EE",24110:"B0EF",26758:"B0F0",27036:"B0F1",33152:"B0F2",32465:"B0F3",26834:"B0F4",30917:"B0F5",34444:"B0F6",38225:"B0F7",20621:"B0F8",35876:"B0F9",33502:"B0FA",32990:"B0FB",21253:"B0FC",35090:"B0FD",21093:"B0FE",34180:"B1A1",38649:"B1A2",20445:"B1A3",22561:"B1A4",39281:"B1A5",23453:"B1A6",25265:"B1A7",25253:"B1A8",26292:"B1A9",35961:"B1AA",40077:"B1AB",29190:"B1AC",26479:"B1AD",30865:"B1AE",24754:"B1AF",21329:"B1B0",21271:"B1B1",36744:"B1B2",32972:"B1B3",36125:"B1B4",38049:"B1B5",20493:"B1B6",29384:"B1B7",22791:"B1B8",24811:"B1B9",28953:"B1BA",34987:"B1BB",22868:"B1BC",33519:"B1BD",26412:"B1BE",31528:"B1BF",23849:"B1C0",32503:"B1C1",29997:"B1C2",27893:"B1C3",36454:"B1C4",36856:"B1C5",36924:"B1C6",40763:"B1C7",27604:"B1C8",37145:"B1C9",31508:"B1CA",24444:"B1CB",30887:"B1CC",34006:"B1CD",34109:"B1CE",27605:"B1CF",27609:"B1D0",27606:"B1D1",24065:"B1D2",24199:"B1D3",30201:"B1D4",38381:"B1D5",25949:"B1D6",24330:"B1D7",24517:"B1D8",36767:"B1D9",22721:"B1DA",33218:"B1DB",36991:"B1DC",38491:"B1DD",38829:"B1DE",36793:"B1DF",32534:"B1E0",36140:"B1E1",25153:"B1E2",20415:"B1E3",21464:"B1E4",21342:"B1E5",36776:"B1E6",36777:"B1E7",36779:"B1E8",36941:"B1E9",26631:"B1EA",24426:"B1EB",33176:"B1EC",34920:"B1ED",40150:"B1EE",24971:"B1EF",21035:"B1F0",30250:"B1F1",24428:"B1F2",25996:"B1F3",28626:"B1F4",28392:"B1F5",23486:"B1F6",25672:"B1F7",20853:"B1F8",20912:"B1F9",26564:"B1FA",19993:"B1FB",31177:"B1FC",39292:"B1FD",28851:"B1FE",30149:"B2A1",24182:"B2A2",29627:"B2A3",33760:"B2A4",25773:"B2A5",25320:"B2A6",38069:"B2A7",27874:"B2A8",21338:"B2A9",21187:"B2AA",25615:"B2AB",38082:"B2AC",31636:"B2AD",20271:"B2AE",24091:"B2AF",33334:"B2B0",33046:"B2B1",33162:"B2B2",28196:"B2B3",27850:"B2B4",39539:"B2B5",25429:"B2B6",21340:"B2B7",21754:"B2B8",34917:"B2B9",22496:"B2BA",19981:"B2BB",24067:"B2BC",27493:"B2BD",31807:"B2BE",37096:"B2BF",24598:"B2C0",25830:"B2C1",29468:"B2C2",35009:"B2C3",26448:"B2C4",25165:"B2C5",36130:"B2C6",30572:"B2C7",36393:"B2C8",37319:"B2C9",24425:"B2CA",33756:"B2CB",34081:"B2CC",39184:"B2CD",21442:"B2CE",34453:"B2CF",27531:"B2D0",24813:"B2D1",24808:"B2D2",28799:"B2D3",33485:"B2D4",33329:"B2D5",20179:"B2D6",27815:"B2D7",34255:"B2D8",25805:"B2D9",31961:"B2DA",27133:"B2DB",26361:"B2DC",33609:"B2DD",21397:"B2DE",31574:"B2DF",20391:"B2E0",20876:"B2E1",27979:"B2E2",23618:"B2E3",36461:"B2E4",25554:"B2E5",21449:"B2E6",33580:"B2E7",33590:"B2E8",26597:"B2E9",30900:"B2EA",25661:"B2EB",23519:"B2EC",23700:"B2ED",24046:"B2EE",35815:"B2EF",25286:"B2F0",26612:"B2F1",35962:"B2F2",25600:"B2F3",25530:"B2F4",34633:"B2F5",39307:"B2F6",35863:"B2F7",32544:"B2F8",38130:"B2F9",20135:"B2FA",38416:"B2FB",39076:"B2FC",26124:"B2FD",29462:"B2FE",22330:"B3A1",23581:"B3A2",24120:"B3A3",38271:"B3A4",20607:"B3A5",32928:"B3A6",21378:"B3A7",25950:"B3A8",30021:"B3A9",21809:"B3AA",20513:"B3AB",36229:"B3AC",25220:"B3AD",38046:"B3AE",26397:"B3AF",22066:"B3B0",28526:"B3B1",24034:"B3B2",21557:"B3B3",28818:"B3B4",36710:"B3B5",25199:"B3B6",25764:"B3B7",25507:"B3B8",24443:"B3B9",28552:"B3BA",37108:"B3BB",33251:"B3BC",36784:"B3BD",23576:"B3BE",26216:"B3BF",24561:"B3C0",27785:"B3C1",38472:"B3C2",36225:"B3C3",34924:"B3C4",25745:"B3C5",31216:"B3C6",22478:"B3C7",27225:"B3C8",25104:"B3C9",21576:"B3CA",20056:"B3CB",31243:"B3CC",24809:"B3CD",28548:"B3CE",35802:"B3CF",25215:"B3D0",36894:"B3D1",39563:"B3D2",31204:"B3D3",21507:"B3D4",30196:"B3D5",25345:"B3D6",21273:"B3D7",27744:"B3D8",36831:"B3D9",24347:"B3DA",39536:"B3DB",32827:"B3DC",40831:"B3DD",20360:"B3DE",23610:"B3DF",36196:"B3E0",32709:"B3E1",26021:"B3E2",28861:"B3E3",20805:"B3E4",20914:"B3E5",34411:"B3E6",23815:"B3E7",23456:"B3E8",25277:"B3E9",37228:"B3EA",30068:"B3EB",36364:"B3EC",31264:"B3ED",24833:"B3EE",31609:"B3EF",20167:"B3F0",32504:"B3F1",30597:"B3F2",19985:"B3F3",33261:"B3F4",21021:"B3F5",20986:"B3F6",27249:"B3F7",21416:"B3F8",36487:"B3F9",38148:"B3FA",38607:"B3FB",28353:"B3FC",38500:"B3FD",26970:"B3FE",30784:"B4A1",20648:"B4A2",30679:"B4A3",25616:"B4A4",35302:"B4A5",22788:"B4A6",25571:"B4A7",24029:"B4A8",31359:"B4A9",26941:"B4AA",20256:"B4AB",33337:"B4AC",21912:"B4AD",20018:"B4AE",30126:"B4AF",31383:"B4B0",24162:"B4B1",24202:"B4B2",38383:"B4B3",21019:"B4B4",21561:"B4B5",28810:"B4B6",25462:"B4B7",38180:"B4B8",22402:"B4B9",26149:"B4BA",26943:"B4BB",37255:"B4BC",21767:"B4BD",28147:"B4BE",32431:"B4BF",34850:"B4C0",25139:"B4C1",32496:"B4C2",30133:"B4C3",33576:"B4C4",30913:"B4C5",38604:"B4C6",36766:"B4C7",24904:"B4C8",29943:"B4C9",35789:"B4CA",27492:"B4CB",21050:"B4CC",36176:"B4CD",27425:"B4CE",32874:"B4CF",33905:"B4D0",22257:"B4D1",21254:"B4D2",20174:"B4D3",19995:"B4D4",20945:"B4D5",31895:"B4D6",37259:"B4D7",31751:"B4D8",20419:"B4D9",36479:"B4DA",31713:"B4DB",31388:"B4DC",25703:"B4DD",23828:"B4DE",20652:"B4DF",33030:"B4E0",30209:"B4E1",31929:"B4E2",28140:"B4E3",32736:"B4E4",26449:"B4E5",23384:"B4E6",23544:"B4E7",30923:"B4E8",25774:"B4E9",25619:"B4EA",25514:"B4EB",25387:"B4EC",38169:"B4ED",25645:"B4EE",36798:"B4EF",31572:"B4F0",30249:"B4F1",25171:"B4F2",22823:"B4F3",21574:"B4F4",27513:"B4F5",20643:"B4F6",25140:"B4F7",24102:"B4F8",27526:"B4F9",20195:"B4FA",36151:"B4FB",34955:"B4FC",24453:"B4FD",36910:"B4FE",24608:"B5A1",32829:"B5A2",25285:"B5A3",20025:"B5A4",21333:"B5A5",37112:"B5A6",25528:"B5A7",32966:"B5A8",26086:"B5A9",27694:"B5AA",20294:"B5AB",24814:"B5AC",28129:"B5AD",35806:"B5AE",24377:"B5AF",34507:"B5B0",24403:"B5B1",25377:"B5B2",20826:"B5B3",33633:"B5B4",26723:"B5B5",20992:"B5B6",25443:"B5B7",36424:"B5B8",20498:"B5B9",23707:"B5BA",31095:"B5BB",23548:"B5BC",21040:"B5BD",31291:"B5BE",24764:"B5BF",36947:"B5C0",30423:"B5C1",24503:"B5C2",24471:"B5C3",30340:"B5C4",36460:"B5C5",28783:"B5C6",30331:"B5C7",31561:"B5C8",30634:"B5C9",20979:"B5CA",37011:"B5CB",22564:"B5CC",20302:"B5CD",28404:"B5CE",36842:"B5CF",25932:"B5D0",31515:"B5D1",29380:"B5D2",28068:"B5D3",32735:"B5D4",23265:"B5D5",25269:"B5D6",24213:"B5D7",22320:"B5D8",33922:"B5D9",31532:"B5DA",24093:"B5DB",24351:"B5DC",36882:"B5DD",32532:"B5DE",39072:"B5DF",25474:"B5E0",28359:"B5E1",30872:"B5E2",28857:"B5E3",20856:"B5E4",38747:"B5E5",22443:"B5E6",30005:"B5E7",20291:"B5E8",30008:"B5E9",24215:"B5EA",24806:"B5EB",22880:"B5EC",28096:"B5ED",27583:"B5EE",30857:"B5EF",21500:"B5F0",38613:"B5F1",20939:"B5F2",20993:"B5F3",25481:"B5F4",21514:"B5F5",38035:"B5F6",35843:"B5F7",36300:"B5F8",29241:"B5F9",30879:"B5FA",34678:"B5FB",36845:"B5FC",35853:"B5FD",21472:"B5FE",19969:"B6A1",30447:"B6A2",21486:"B6A3",38025:"B6A4",39030:"B6A5",40718:"B6A6",38189:"B6A7",23450:"B6A8",35746:"B6A9",20002:"B6AA",19996:"B6AB",20908:"B6AC",33891:"B6AD",25026:"B6AE",21160:"B6AF",26635:"B6B0",20375:"B6B1",24683:"B6B2",20923:"B6B3",27934:"B6B4",20828:"B6B5",25238:"B6B6",26007:"B6B7",38497:"B6B8",35910:"B6B9",36887:"B6BA",30168:"B6BB",37117:"B6BC",30563:"B6BD",27602:"B6BE",29322:"B6BF",29420:"B6C0",35835:"B6C1",22581:"B6C2",30585:"B6C3",36172:"B6C4",26460:"B6C5",38208:"B6C6",32922:"B6C7",24230:"B6C8",28193:"B6C9",22930:"B6CA",31471:"B6CB",30701:"B6CC",38203:"B6CD",27573:"B6CE",26029:"B6CF",32526:"B6D0",22534:"B6D1",20817:"B6D2",38431:"B6D3",23545:"B6D4",22697:"B6D5",21544:"B6D6",36466:"B6D7",25958:"B6D8",39039:"B6D9",22244:"B6DA",38045:"B6DB",30462:"B6DC",36929:"B6DD",25479:"B6DE",21702:"B6DF",22810:"B6E0",22842:"B6E1",22427:"B6E2",36530:"B6E3",26421:"B6E4",36346:"B6E5",33333:"B6E6",21057:"B6E7",24816:"B6E8",22549:"B6E9",34558:"B6EA",23784:"B6EB",40517:"B6EC",20420:"B6ED",39069:"B6EE",35769:"B6EF",23077:"B6F0",24694:"B6F1",21380:"B6F2",25212:"B6F3",36943:"B6F4",37122:"B6F5",39295:"B6F6",24681:"B6F7",32780:"B6F8",20799:"B6F9",32819:"B6FA",23572:"B6FB",39285:"B6FC",27953:"B6FD",20108:"B6FE",36144:"B7A1",21457:"B7A2",32602:"B7A3",31567:"B7A4",20240:"B7A5",20047:"B7A6",38400:"B7A7",27861:"B7A8",29648:"B7A9",34281:"B7AA",24070:"B7AB",30058:"B7AC",32763:"B7AD",27146:"B7AE",30718:"B7AF",38034:"B7B0",32321:"B7B1",20961:"B7B2",28902:"B7B3",21453:"B7B4",36820:"B7B5",33539:"B7B6",36137:"B7B7",29359:"B7B8",39277:"B7B9",27867:"B7BA",22346:"B7BB",33459:"B7BC",26041:"B7BD",32938:"B7BE",25151:"B7BF",38450:"B7C0",22952:"B7C1",20223:"B7C2",35775:"B7C3",32442:"B7C4",25918:"B7C5",33778:"B7C6",38750:"B7C7",21857:"B7C8",39134:"B7C9",32933:"B7CA",21290:"B7CB",35837:"B7CC",21536:"B7CD",32954:"B7CE",24223:"B7CF",27832:"B7D0",36153:"B7D1",33452:"B7D2",37210:"B7D3",21545:"B7D4",27675:"B7D5",20998:"B7D6",32439:"B7D7",22367:"B7D8",28954:"B7D9",27774:"B7DA",31881:"B7DB",22859:"B7DC",20221:"B7DD",24575:"B7DE",24868:"B7DF",31914:"B7E0",20016:"B7E1",23553:"B7E2",26539:"B7E3",34562:"B7E4",23792:"B7E5",38155:"B7E6",39118:"B7E7",30127:"B7E8",28925:"B7E9",36898:"B7EA",20911:"B7EB",32541:"B7EC",35773:"B7ED",22857:"B7EE",20964:"B7EF",20315:"B7F0",21542:"B7F1",22827:"B7F2",25975:"B7F3",32932:"B7F4",23413:"B7F5",25206:"B7F6",25282:"B7F7",36752:"B7F8",24133:"B7F9",27679:"B7FA",31526:"B7FB",20239:"B7FC",20440:"B7FD",26381:"B7FE",28014:"B8A1",28074:"B8A2",31119:"B8A3",34993:"B8A4",24343:"B8A5",29995:"B8A6",25242:"B8A7",36741:"B8A8",20463:"B8A9",37340:"B8AA",26023:"B8AB",33071:"B8AC",33105:"B8AD",24220:"B8AE",33104:"B8AF",36212:"B8B0",21103:"B8B1",35206:"B8B2",36171:"B8B3",22797:"B8B4",20613:"B8B5",20184:"B8B6",38428:"B8B7",29238:"B8B8",33145:"B8B9",36127:"B8BA",23500:"B8BB",35747:"B8BC",38468:"B8BD",22919:"B8BE",32538:"B8BF",21648:"B8C0",22134:"B8C1",22030:"B8C2",35813:"B8C3",25913:"B8C4",27010:"B8C5",38041:"B8C6",30422:"B8C7",28297:"B8C8",24178:"B8C9",29976:"B8CA",26438:"B8CB",26577:"B8CC",31487:"B8CD",32925:"B8CE",36214:"B8CF",24863:"B8D0",31174:"B8D1",25954:"B8D2",36195:"B8D3",20872:"B8D4",21018:"B8D5",38050:"B8D6",32568:"B8D7",32923:"B8D8",32434:"B8D9",23703:"B8DA",28207:"B8DB",26464:"B8DC",31705:"B8DD",30347:"B8DE",39640:"B8DF",33167:"B8E0",32660:"B8E1",31957:"B8E2",25630:"B8E3",38224:"B8E4",31295:"B8E5",21578:"B8E6",21733:"B8E7",27468:"B8E8",25601:"B8E9",25096:"B8EA",40509:"B8EB",33011:"B8EC",30105:"B8ED",21106:"B8EE",38761:"B8EF",33883:"B8F0",26684:"B8F1",34532:"B8F2",38401:"B8F3",38548:"B8F4",38124:"B8F5",20010:"B8F6",21508:"B8F7",32473:"B8F8",26681:"B8F9",36319:"B8FA",32789:"B8FB",26356:"B8FC",24218:"B8FD",32697:"B8FE",22466:"B9A1",32831:"B9A2",26775:"B9A3",24037:"B9A4",25915:"B9A5",21151:"B9A6",24685:"B9A7",40858:"B9A8",20379:"B9A9",36524:"B9AA",20844:"B9AB",23467:"B9AC",24339:"B9AD",24041:"B9AE",27742:"B9AF",25329:"B9B0",36129:"B9B1",20849:"B9B2",38057:"B9B3",21246:"B9B4",27807:"B9B5",33503:"B9B6",29399:"B9B7",22434:"B9B8",26500:"B9B9",36141:"B9BA",22815:"B9BB",36764:"B9BC",33735:"B9BD",21653:"B9BE",31629:"B9BF",20272:"B9C0",27837:"B9C1",23396:"B9C2",22993:"B9C3",40723:"B9C4",21476:"B9C5",34506:"B9C6",39592:"B9C7",35895:"B9C8",32929:"B9C9",25925:"B9CA",39038:"B9CB",22266:"B9CC",38599:"B9CD",21038:"B9CE",29916:"B9CF",21072:"B9D0",23521:"B9D1",25346:"B9D2",35074:"B9D3",20054:"B9D4",25296:"B9D5",24618:"B9D6",26874:"B9D7",20851:"B9D8",23448:"B9D9",20896:"B9DA",35266:"B9DB",31649:"B9DC",39302:"B9DD",32592:"B9DE",24815:"B9DF",28748:"B9E0",36143:"B9E1",20809:"B9E2",24191:"B9E3",36891:"B9E4",29808:"B9E5",35268:"B9E6",22317:"B9E7",30789:"B9E8",24402:"B9E9",40863:"B9EA",38394:"B9EB",36712:"B9EC",39740:"B9ED",35809:"B9EE",30328:"B9EF",26690:"B9F0",26588:"B9F1",36330:"B9F2",36149:"B9F3",21053:"B9F4",36746:"B9F5",28378:"B9F6",26829:"B9F7",38149:"B9F8",37101:"B9F9",22269:"B9FA",26524:"B9FB",35065:"B9FC",36807:"B9FD",21704:"B9FE",39608:"BAA1",23401:"BAA2",28023:"BAA3",27686:"BAA4",20133:"BAA5",23475:"BAA6",39559:"BAA7",37219:"BAA8",25e3:"BAA9",37039:"BAAA",38889:"BAAB",21547:"BAAC",28085:"BAAD",23506:"BAAE",20989:"BAAF",21898:"BAB0",32597:"BAB1",32752:"BAB2",25788:"BAB3",25421:"BAB4",26097:"BAB5",25022:"BAB6",24717:"BAB7",28938:"BAB8",27735:"BAB9",27721:"BABA",22831:"BABB",26477:"BABC",33322:"BABD",22741:"BABE",22158:"BABF",35946:"BAC0",27627:"BAC1",37085:"BAC2",22909:"BAC3",32791:"BAC4",21495:"BAC5",28009:"BAC6",21621:"BAC7",21917:"BAC8",33655:"BAC9",33743:"BACA",26680:"BACB",31166:"BACC",21644:"BACD",20309:"BACE",21512:"BACF",30418:"BAD0",35977:"BAD1",38402:"BAD2",27827:"BAD3",28088:"BAD4",36203:"BAD5",35088:"BAD6",40548:"BAD7",36154:"BAD8",22079:"BAD9",40657:"BADA",30165:"BADB",24456:"BADC",29408:"BADD",24680:"BADE",21756:"BADF",20136:"BAE0",27178:"BAE1",34913:"BAE2",24658:"BAE3",36720:"BAE4",21700:"BAE5",28888:"BAE6",34425:"BAE7",40511:"BAE8",27946:"BAE9",23439:"BAEA",24344:"BAEB",32418:"BAEC",21897:"BAED",20399:"BAEE",29492:"BAEF",21564:"BAF0",21402:"BAF1",20505:"BAF2",21518:"BAF3",21628:"BAF4",20046:"BAF5",24573:"BAF6",29786:"BAF7",22774:"BAF8",33899:"BAF9",32993:"BAFA",34676:"BAFB",29392:"BAFC",31946:"BAFD",28246:"BAFE",24359:"BBA1",34382:"BBA2",21804:"BBA3",25252:"BBA4",20114:"BBA5",27818:"BBA6",25143:"BBA7",33457:"BBA8",21719:"BBA9",21326:"BBAA",29502:"BBAB",28369:"BBAC",30011:"BBAD",21010:"BBAE",21270:"BBAF",35805:"BBB0",27088:"BBB1",24458:"BBB2",24576:"BBB3",28142:"BBB4",22351:"BBB5",27426:"BBB6",29615:"BBB7",26707:"BBB8",36824:"BBB9",32531:"BBBA",25442:"BBBB",24739:"BBBC",21796:"BBBD",30186:"BBBE",35938:"BBBF",28949:"BBC0",28067:"BBC1",23462:"BBC2",24187:"BBC3",33618:"BBC4",24908:"BBC5",40644:"BBC6",30970:"BBC7",34647:"BBC8",31783:"BBC9",30343:"BBCA",20976:"BBCB",24822:"BBCC",29004:"BBCD",26179:"BBCE",24140:"BBCF",24653:"BBD0",35854:"BBD1",28784:"BBD2",25381:"BBD3",36745:"BBD4",24509:"BBD5",24674:"BBD6",34516:"BBD7",22238:"BBD8",27585:"BBD9",24724:"BBDA",24935:"BBDB",21321:"BBDC",24800:"BBDD",26214:"BBDE",36159:"BBDF",31229:"BBE0",20250:"BBE1",28905:"BBE2",27719:"BBE3",35763:"BBE4",35826:"BBE5",32472:"BBE6",33636:"BBE7",26127:"BBE8",23130:"BBE9",39746:"BBEA",27985:"BBEB",28151:"BBEC",35905:"BBED",27963:"BBEE",20249:"BBEF",28779:"BBF0",33719:"BBF1",25110:"BBF2",24785:"BBF3",38669:"BBF4",36135:"BBF5",31096:"BBF6",20987:"BBF7",22334:"BBF8",22522:"BBF9",26426:"BBFA",30072:"BBFB",31293:"BBFC",31215:"BBFD",31637:"BBFE",32908:"BCA1",39269:"BCA2",36857:"BCA3",28608:"BCA4",35749:"BCA5",40481:"BCA6",23020:"BCA7",32489:"BCA8",32521:"BCA9",21513:"BCAA",26497:"BCAB",26840:"BCAC",36753:"BCAD",31821:"BCAE",38598:"BCAF",21450:"BCB0",24613:"BCB1",30142:"BCB2",27762:"BCB3",21363:"BCB4",23241:"BCB5",32423:"BCB6",25380:"BCB7",20960:"BCB8",33034:"BCB9",24049:"BCBA",34015:"BCBB",25216:"BCBC",20864:"BCBD",23395:"BCBE",20238:"BCBF",31085:"BCC0",21058:"BCC1",24760:"BCC2",27982:"BCC3",23492:"BCC4",23490:"BCC5",35745:"BCC6",35760:"BCC7",26082:"BCC8",24524:"BCC9",38469:"BCCA",22931:"BCCB",32487:"BCCC",32426:"BCCD",22025:"BCCE",26551:"BCCF",22841:"BCD0",20339:"BCD1",23478:"BCD2",21152:"BCD3",33626:"BCD4",39050:"BCD5",36158:"BCD6",30002:"BCD7",38078:"BCD8",20551:"BCD9",31292:"BCDA",20215:"BCDB",26550:"BCDC",39550:"BCDD",23233:"BCDE",27516:"BCDF",30417:"BCE0",22362:"BCE1",23574:"BCE2",31546:"BCE3",38388:"BCE4",29006:"BCE5",20860:"BCE6",32937:"BCE7",33392:"BCE8",22904:"BCE9",32516:"BCEA",33575:"BCEB",26816:"BCEC",26604:"BCED",30897:"BCEE",30839:"BCEF",25315:"BCF0",25441:"BCF1",31616:"BCF2",20461:"BCF3",21098:"BCF4",20943:"BCF5",33616:"BCF6",27099:"BCF7",37492:"BCF8",36341:"BCF9",36145:"BCFA",35265:"BCFB",38190:"BCFC",31661:"BCFD",20214:"BCFE",20581:"BDA1",33328:"BDA2",21073:"BDA3",39279:"BDA4",28176:"BDA5",28293:"BDA6",28071:"BDA7",24314:"BDA8",20725:"BDA9",23004:"BDAA",23558:"BDAB",27974:"BDAC",27743:"BDAD",30086:"BDAE",33931:"BDAF",26728:"BDB0",22870:"BDB1",35762:"BDB2",21280:"BDB3",37233:"BDB4",38477:"BDB5",34121:"BDB6",26898:"BDB7",30977:"BDB8",28966:"BDB9",33014:"BDBA",20132:"BDBB",37066:"BDBC",27975:"BDBD",39556:"BDBE",23047:"BDBF",22204:"BDC0",25605:"BDC1",38128:"BDC2",30699:"BDC3",20389:"BDC4",33050:"BDC5",29409:"BDC6",35282:"BDC7",39290:"BDC8",32564:"BDC9",32478:"BDCA",21119:"BDCB",25945:"BDCC",37237:"BDCD",36735:"BDCE",36739:"BDCF",21483:"BDD0",31382:"BDD1",25581:"BDD2",25509:"BDD3",30342:"BDD4",31224:"BDD5",34903:"BDD6",38454:"BDD7",25130:"BDD8",21163:"BDD9",33410:"BDDA",26708:"BDDB",26480:"BDDC",25463:"BDDD",30571:"BDDE",31469:"BDDF",27905:"BDE0",32467:"BDE1",35299:"BDE2",22992:"BDE3",25106:"BDE4",34249:"BDE5",33445:"BDE6",30028:"BDE7",20511:"BDE8",20171:"BDE9",30117:"BDEA",35819:"BDEB",23626:"BDEC",24062:"BDED",31563:"BDEE",26020:"BDEF",37329:"BDF0",20170:"BDF1",27941:"BDF2",35167:"BDF3",32039:"BDF4",38182:"BDF5",20165:"BDF6",35880:"BDF7",36827:"BDF8",38771:"BDF9",26187:"BDFA",31105:"BDFB",36817:"BDFC",28908:"BDFD",28024:"BDFE",23613:"BEA1",21170:"BEA2",33606:"BEA3",20834:"BEA4",33550:"BEA5",30555:"BEA6",26230:"BEA7",40120:"BEA8",20140:"BEA9",24778:"BEAA",31934:"BEAB",31923:"BEAC",32463:"BEAD",20117:"BEAE",35686:"BEAF",26223:"BEB0",39048:"BEB1",38745:"BEB2",22659:"BEB3",25964:"BEB4",38236:"BEB5",24452:"BEB6",30153:"BEB7",38742:"BEB8",31455:"BEB9",31454:"BEBA",20928:"BEBB",28847:"BEBC",31384:"BEBD",25578:"BEBE",31350:"BEBF",32416:"BEC0",29590:"BEC1",38893:"BEC2",20037:"BEC3",28792:"BEC4",20061:"BEC5",37202:"BEC6",21417:"BEC7",25937:"BEC8",26087:"BEC9",33276:"BECA",33285:"BECB",21646:"BECC",23601:"BECD",30106:"BECE",38816:"BECF",25304:"BED0",29401:"BED1",30141:"BED2",23621:"BED3",39545:"BED4",33738:"BED5",23616:"BED6",21632:"BED7",30697:"BED8",20030:"BED9",27822:"BEDA",32858:"BEDB",25298:"BEDC",25454:"BEDD",24040:"BEDE",20855:"BEDF",36317:"BEE0",36382:"BEE1",38191:"BEE2",20465:"BEE3",21477:"BEE4",24807:"BEE5",28844:"BEE6",21095:"BEE7",25424:"BEE8",40515:"BEE9",23071:"BEEA",20518:"BEEB",30519:"BEEC",21367:"BEED",32482:"BEEE",25733:"BEEF",25899:"BEF0",25225:"BEF1",25496:"BEF2",20500:"BEF3",29237:"BEF4",35273:"BEF5",20915:"BEF6",35776:"BEF7",32477:"BEF8",22343:"BEF9",33740:"BEFA",38055:"BEFB",20891:"BEFC",21531:"BEFD",23803:"BEFE",20426:"BFA1",31459:"BFA2",27994:"BFA3",37089:"BFA4",39567:"BFA5",21888:"BFA6",21654:"BFA7",21345:"BFA8",21679:"BFA9",24320:"BFAA",25577:"BFAB",26999:"BFAC",20975:"BFAD",24936:"BFAE",21002:"BFAF",22570:"BFB0",21208:"BFB1",22350:"BFB2",30733:"BFB3",30475:"BFB4",24247:"BFB5",24951:"BFB6",31968:"BFB7",25179:"BFB8",25239:"BFB9",20130:"BFBA",28821:"BFBB",32771:"BFBC",25335:"BFBD",28900:"BFBE",38752:"BFBF",22391:"BFC0",33499:"BFC1",26607:"BFC2",26869:"BFC3",30933:"BFC4",39063:"BFC5",31185:"BFC6",22771:"BFC7",21683:"BFC8",21487:"BFC9",28212:"BFCA",20811:"BFCB",21051:"BFCC",23458:"BFCD",35838:"BFCE",32943:"BFCF",21827:"BFD0",22438:"BFD1",24691:"BFD2",22353:"BFD3",21549:"BFD4",31354:"BFD5",24656:"BFD6",23380:"BFD7",25511:"BFD8",25248:"BFD9",21475:"BFDA",25187:"BFDB",23495:"BFDC",26543:"BFDD",21741:"BFDE",31391:"BFDF",33510:"BFE0",37239:"BFE1",24211:"BFE2",35044:"BFE3",22840:"BFE4",22446:"BFE5",25358:"BFE6",36328:"BFE7",33007:"BFE8",22359:"BFE9",31607:"BFEA",20393:"BFEB",24555:"BFEC",23485:"BFED",27454:"BFEE",21281:"BFEF",31568:"BFF0",29378:"BFF1",26694:"BFF2",30719:"BFF3",30518:"BFF4",26103:"BFF5",20917:"BFF6",20111:"BFF7",30420:"BFF8",23743:"BFF9",31397:"BFFA",33909:"BFFB",22862:"BFFC",39745:"BFFD",20608:"BFFE",39304:"C0A1",24871:"C0A2",28291:"C0A3",22372:"C0A4",26118:"C0A5",25414:"C0A6",22256:"C0A7",25324:"C0A8",25193:"C0A9",24275:"C0AA",38420:"C0AB",22403:"C0AC",25289:"C0AD",21895:"C0AE",34593:"C0AF",33098:"C0B0",36771:"C0B1",21862:"C0B2",33713:"C0B3",26469:"C0B4",36182:"C0B5",34013:"C0B6",23146:"C0B7",26639:"C0B8",25318:"C0B9",31726:"C0BA",38417:"C0BB",20848:"C0BC",28572:"C0BD",35888:"C0BE",25597:"C0BF",35272:"C0C0",25042:"C0C1",32518:"C0C2",28866:"C0C3",28389:"C0C4",29701:"C0C5",27028:"C0C6",29436:"C0C7",24266:"C0C8",37070:"C0C9",26391:"C0CA",28010:"C0CB",25438:"C0CC",21171:"C0CD",29282:"C0CE",32769:"C0CF",20332:"C0D0",23013:"C0D1",37226:"C0D2",28889:"C0D3",28061:"C0D4",21202:"C0D5",20048:"C0D6",38647:"C0D7",38253:"C0D8",34174:"C0D9",30922:"C0DA",32047:"C0DB",20769:"C0DC",22418:"C0DD",25794:"C0DE",32907:"C0DF",31867:"C0E0",27882:"C0E1",26865:"C0E2",26974:"C0E3",20919:"C0E4",21400:"C0E5",26792:"C0E6",29313:"C0E7",40654:"C0E8",31729:"C0E9",29432:"C0EA",31163:"C0EB",28435:"C0EC",29702:"C0ED",26446:"C0EE",37324:"C0EF",40100:"C0F0",31036:"C0F1",33673:"C0F2",33620:"C0F3",21519:"C0F4",26647:"C0F5",20029:"C0F6",21385:"C0F7",21169:"C0F8",30782:"C0F9",21382:"C0FA",21033:"C0FB",20616:"C0FC",20363:"C0FD",20432:"C0FE",30178:"C1A1",31435:"C1A2",31890:"C1A3",27813:"C1A4",38582:"C1A5",21147:"C1A6",29827:"C1A7",21737:"C1A8",20457:"C1A9",32852:"C1AA",33714:"C1AB",36830:"C1AC",38256:"C1AD",24265:"C1AE",24604:"C1AF",28063:"C1B0",24088:"C1B1",25947:"C1B2",33080:"C1B3",38142:"C1B4",24651:"C1B5",28860:"C1B6",32451:"C1B7",31918:"C1B8",20937:"C1B9",26753:"C1BA",31921:"C1BB",33391:"C1BC",20004:"C1BD",36742:"C1BE",37327:"C1BF",26238:"C1C0",20142:"C1C1",35845:"C1C2",25769:"C1C3",32842:"C1C4",20698:"C1C5",30103:"C1C6",29134:"C1C7",23525:"C1C8",36797:"C1C9",28518:"C1CA",20102:"C1CB",25730:"C1CC",38243:"C1CD",24278:"C1CE",26009:"C1CF",21015:"C1D0",35010:"C1D1",28872:"C1D2",21155:"C1D3",29454:"C1D4",29747:"C1D5",26519:"C1D6",30967:"C1D7",38678:"C1D8",20020:"C1D9",37051:"C1DA",40158:"C1DB",28107:"C1DC",20955:"C1DD",36161:"C1DE",21533:"C1DF",25294:"C1E0",29618:"C1E1",33777:"C1E2",38646:"C1E3",40836:"C1E4",38083:"C1E5",20278:"C1E6",32666:"C1E7",20940:"C1E8",28789:"C1E9",38517:"C1EA",23725:"C1EB",39046:"C1EC",21478:"C1ED",20196:"C1EE",28316:"C1EF",29705:"C1F0",27060:"C1F1",30827:"C1F2",39311:"C1F3",30041:"C1F4",21016:"C1F5",30244:"C1F6",27969:"C1F7",26611:"C1F8",20845:"C1F9",40857:"C1FA",32843:"C1FB",21657:"C1FC",31548:"C1FD",31423:"C1FE",38534:"C2A1",22404:"C2A2",25314:"C2A3",38471:"C2A4",27004:"C2A5",23044:"C2A6",25602:"C2A7",31699:"C2A8",28431:"C2A9",38475:"C2AA",33446:"C2AB",21346:"C2AC",39045:"C2AD",24208:"C2AE",28809:"C2AF",25523:"C2B0",21348:"C2B1",34383:"C2B2",40065:"C2B3",40595:"C2B4",30860:"C2B5",38706:"C2B6",36335:"C2B7",36162:"C2B8",40575:"C2B9",28510:"C2BA",31108:"C2BB",24405:"C2BC",38470:"C2BD",25134:"C2BE",39540:"C2BF",21525:"C2C0",38109:"C2C1",20387:"C2C2",26053:"C2C3",23653:"C2C4",23649:"C2C5",32533:"C2C6",34385:"C2C7",27695:"C2C8",24459:"C2C9",29575:"C2CA",28388:"C2CB",32511:"C2CC",23782:"C2CD",25371:"C2CE",23402:"C2CF",28390:"C2D0",21365:"C2D1",20081:"C2D2",25504:"C2D3",30053:"C2D4",25249:"C2D5",36718:"C2D6",20262:"C2D7",20177:"C2D8",27814:"C2D9",32438:"C2DA",35770:"C2DB",33821:"C2DC",34746:"C2DD",32599:"C2DE",36923:"C2DF",38179:"C2E0",31657:"C2E1",39585:"C2E2",35064:"C2E3",33853:"C2E4",27931:"C2E5",39558:"C2E6",32476:"C2E7",22920:"C2E8",40635:"C2E9",29595:"C2EA",30721:"C2EB",34434:"C2EC",39532:"C2ED",39554:"C2EE",22043:"C2EF",21527:"C2F0",22475:"C2F1",20080:"C2F2",40614:"C2F3",21334:"C2F4",36808:"C2F5",33033:"C2F6",30610:"C2F7",39314:"C2F8",34542:"C2F9",28385:"C2FA",34067:"C2FB",26364:"C2FC",24930:"C2FD",28459:"C2FE",35881:"C3A1",33426:"C3A2",33579:"C3A3",30450:"C3A4",27667:"C3A5",24537:"C3A6",33725:"C3A7",29483:"C3A8",33541:"C3A9",38170:"C3AA",27611:"C3AB",30683:"C3AC",38086:"C3AD",21359:"C3AE",33538:"C3AF",20882:"C3B0",24125:"C3B1",35980:"C3B2",36152:"C3B3",20040:"C3B4",29611:"C3B5",26522:"C3B6",26757:"C3B7",37238:"C3B8",38665:"C3B9",29028:"C3BA",27809:"C3BB",30473:"C3BC",23186:"C3BD",38209:"C3BE",27599:"C3BF",32654:"C3C0",26151:"C3C1",23504:"C3C2",22969:"C3C3",23194:"C3C4",38376:"C3C5",38391:"C3C6",20204:"C3C7",33804:"C3C8",33945:"C3C9",27308:"C3CA",30431:"C3CB",38192:"C3CC",29467:"C3CD",26790:"C3CE",23391:"C3CF",30511:"C3D0",37274:"C3D1",38753:"C3D2",31964:"C3D3",36855:"C3D4",35868:"C3D5",24357:"C3D6",31859:"C3D7",31192:"C3D8",35269:"C3D9",27852:"C3DA",34588:"C3DB",23494:"C3DC",24130:"C3DD",26825:"C3DE",30496:"C3DF",32501:"C3E0",20885:"C3E1",20813:"C3E2",21193:"C3E3",23081:"C3E4",32517:"C3E5",38754:"C3E6",33495:"C3E7",25551:"C3E8",30596:"C3E9",34256:"C3EA",31186:"C3EB",28218:"C3EC",24217:"C3ED",22937:"C3EE",34065:"C3EF",28781:"C3F0",27665:"C3F1",25279:"C3F2",30399:"C3F3",25935:"C3F4",24751:"C3F5",38397:"C3F6",26126:"C3F7",34719:"C3F8",40483:"C3F9",38125:"C3FA",21517:"C3FB",21629:"C3FC",35884:"C3FD",25720:"C3FE",25721:"C4A1",34321:"C4A2",27169:"C4A3",33180:"C4A4",30952:"C4A5",25705:"C4A6",39764:"C4A7",25273:"C4A8",26411:"C4A9",33707:"C4AA",22696:"C4AB",40664:"C4AC",27819:"C4AD",28448:"C4AE",23518:"C4AF",38476:"C4B0",35851:"C4B1",29279:"C4B2",26576:"C4B3",25287:"C4B4",29281:"C4B5",20137:"C4B6",22982:"C4B7",27597:"C4B8",22675:"C4B9",26286:"C4BA",24149:"C4BB",21215:"C4BC",24917:"C4BD",26408:"C4BE",30446:"C4BF",30566:"C4C0",29287:"C4C1",31302:"C4C2",25343:"C4C3",21738:"C4C4",21584:"C4C5",38048:"C4C6",37027:"C4C7",23068:"C4C8",32435:"C4C9",27670:"C4CA",20035:"C4CB",22902:"C4CC",32784:"C4CD",22856:"C4CE",21335:"C4CF",30007:"C4D0",38590:"C4D1",22218:"C4D2",25376:"C4D3",33041:"C4D4",24700:"C4D5",38393:"C4D6",28118:"C4D7",21602:"C4D8",39297:"C4D9",20869:"C4DA",23273:"C4DB",33021:"C4DC",22958:"C4DD",38675:"C4DE",20522:"C4DF",27877:"C4E0",23612:"C4E1",25311:"C4E2",20320:"C4E3",21311:"C4E4",33147:"C4E5",36870:"C4E6",28346:"C4E7",34091:"C4E8",25288:"C4E9",24180:"C4EA",30910:"C4EB",25781:"C4EC",25467:"C4ED",24565:"C4EE",23064:"C4EF",37247:"C4F0",40479:"C4F1",23615:"C4F2",25423:"C4F3",32834:"C4F4",23421:"C4F5",21870:"C4F6",38218:"C4F7",38221:"C4F8",28037:"C4F9",24744:"C4FA",26592:"C4FB",29406:"C4FC",20957:"C4FD",23425:"C4FE",25319:"C5A1",27870:"C5A2",29275:"C5A3",25197:"C5A4",38062:"C5A5",32445:"C5A6",33043:"C5A7",27987:"C5A8",20892:"C5A9",24324:"C5AA",22900:"C5AB",21162:"C5AC",24594:"C5AD",22899:"C5AE",26262:"C5AF",34384:"C5B0",30111:"C5B1",25386:"C5B2",25062:"C5B3",31983:"C5B4",35834:"C5B5",21734:"C5B6",27431:"C5B7",40485:"C5B8",27572:"C5B9",34261:"C5BA",21589:"C5BB",20598:"C5BC",27812:"C5BD",21866:"C5BE",36276:"C5BF",29228:"C5C0",24085:"C5C1",24597:"C5C2",29750:"C5C3",25293:"C5C4",25490:"C5C5",29260:"C5C6",24472:"C5C7",28227:"C5C8",27966:"C5C9",25856:"C5CA",28504:"C5CB",30424:"C5CC",30928:"C5CD",30460:"C5CE",30036:"C5CF",21028:"C5D0",21467:"C5D1",20051:"C5D2",24222:"C5D3",26049:"C5D4",32810:"C5D5",32982:"C5D6",25243:"C5D7",21638:"C5D8",21032:"C5D9",28846:"C5DA",34957:"C5DB",36305:"C5DC",27873:"C5DD",21624:"C5DE",32986:"C5DF",22521:"C5E0",35060:"C5E1",36180:"C5E2",38506:"C5E3",37197:"C5E4",20329:"C5E5",27803:"C5E6",21943:"C5E7",30406:"C5E8",30768:"C5E9",25256:"C5EA",28921:"C5EB",28558:"C5EC",24429:"C5ED",34028:"C5EE",26842:"C5EF",30844:"C5F0",31735:"C5F1",33192:"C5F2",26379:"C5F3",40527:"C5F4",25447:"C5F5",30896:"C5F6",22383:"C5F7",30738:"C5F8",38713:"C5F9",25209:"C5FA",25259:"C5FB",21128:"C5FC",29749:"C5FD",27607:"C5FE",21860:"C6A1",33086:"C6A2",30130:"C6A3",30382:"C6A4",21305:"C6A5",30174:"C6A6",20731:"C6A7",23617:"C6A8",35692:"C6A9",31687:"C6AA",20559:"C6AB",29255:"C6AC",39575:"C6AD",39128:"C6AE",28418:"C6AF",29922:"C6B0",31080:"C6B1",25735:"C6B2",30629:"C6B3",25340:"C6B4",39057:"C6B5",36139:"C6B6",21697:"C6B7",32856:"C6B8",20050:"C6B9",22378:"C6BA",33529:"C6BB",33805:"C6BC",24179:"C6BD",20973:"C6BE",29942:"C6BF",35780:"C6C0",23631:"C6C1",22369:"C6C2",27900:"C6C3",39047:"C6C4",23110:"C6C5",30772:"C6C6",39748:"C6C7",36843:"C6C8",31893:"C6C9",21078:"C6CA",25169:"C6CB",38138:"C6CC",20166:"C6CD",33670:"C6CE",33889:"C6CF",33769:"C6D0",33970:"C6D1",22484:"C6D2",26420:"C6D3",22275:"C6D4",26222:"C6D5",28006:"C6D6",35889:"C6D7",26333:"C6D8",28689:"C6D9",26399:"C6DA",27450:"C6DB",26646:"C6DC",25114:"C6DD",22971:"C6DE",19971:"C6DF",20932:"C6E0",28422:"C6E1",26578:"C6E2",27791:"C6E3",20854:"C6E4",26827:"C6E5",22855:"C6E6",27495:"C6E7",30054:"C6E8",23822:"C6E9",33040:"C6EA",40784:"C6EB",26071:"C6EC",31048:"C6ED",31041:"C6EE",39569:"C6EF",36215:"C6F0",23682:"C6F1",20062:"C6F2",20225:"C6F3",21551:"C6F4",22865:"C6F5",30732:"C6F6",22120:"C6F7",27668:"C6F8",36804:"C6F9",24323:"C6FA",27773:"C6FB",27875:"C6FC",35755:"C6FD",25488:"C6FE",24688:"C7A1",27965:"C7A2",29301:"C7A3",25190:"C7A4",38030:"C7A5",38085:"C7A6",21315:"C7A7",36801:"C7A8",31614:"C7A9",20191:"C7AA",35878:"C7AB",20094:"C7AC",40660:"C7AD",38065:"C7AE",38067:"C7AF",21069:"C7B0",28508:"C7B1",36963:"C7B2",27973:"C7B3",35892:"C7B4",22545:"C7B5",23884:"C7B6",27424:"C7B7",27465:"C7B8",26538:"C7B9",21595:"C7BA",33108:"C7BB",32652:"C7BC",22681:"C7BD",34103:"C7BE",24378:"C7BF",25250:"C7C0",27207:"C7C1",38201:"C7C2",25970:"C7C3",24708:"C7C4",26725:"C7C5",30631:"C7C6",20052:"C7C7",20392:"C7C8",24039:"C7C9",38808:"C7CA",25772:"C7CB",32728:"C7CC",23789:"C7CD",20431:"C7CE",31373:"C7CF",20999:"C7D0",33540:"C7D1",19988:"C7D2",24623:"C7D3",31363:"C7D4",38054:"C7D5",20405:"C7D6",20146:"C7D7",31206:"C7D8",29748:"C7D9",21220:"C7DA",33465:"C7DB",25810:"C7DC",31165:"C7DD",23517:"C7DE",27777:"C7DF",38738:"C7E0",36731:"C7E1",27682:"C7E2",20542:"C7E3",21375:"C7E4",28165:"C7E5",25806:"C7E6",26228:"C7E7",27696:"C7E8",24773:"C7E9",39031:"C7EA",35831:"C7EB",24198:"C7EC",29756:"C7ED",31351:"C7EE",31179:"C7EF",19992:"C7F0",37041:"C7F1",29699:"C7F2",27714:"C7F3",22234:"C7F4",37195:"C7F5",27845:"C7F6",36235:"C7F7",21306:"C7F8",34502:"C7F9",26354:"C7FA",36527:"C7FB",23624:"C7FC",39537:"C7FD",28192:"C7FE",21462:"C8A1",23094:"C8A2",40843:"C8A3",36259:"C8A4",21435:"C8A5",22280:"C8A6",39079:"C8A7",26435:"C8A8",37275:"C8A9",27849:"C8AA",20840:"C8AB",30154:"C8AC",25331:"C8AD",29356:"C8AE",21048:"C8AF",21149:"C8B0",32570:"C8B1",28820:"C8B2",30264:"C8B3",21364:"C8B4",40522:"C8B5",27063:"C8B6",30830:"C8B7",38592:"C8B8",35033:"C8B9",32676:"C8BA",28982:"C8BB",29123:"C8BC",20873:"C8BD",26579:"C8BE",29924:"C8BF",22756:"C8C0",25880:"C8C1",22199:"C8C2",35753:"C8C3",39286:"C8C4",25200:"C8C5",32469:"C8C6",24825:"C8C7",28909:"C8C8",22764:"C8C9",20161:"C8CA",20154:"C8CB",24525:"C8CC",38887:"C8CD",20219:"C8CE",35748:"C8CF",20995:"C8D0",22922:"C8D1",32427:"C8D2",25172:"C8D3",20173:"C8D4",26085:"C8D5",25102:"C8D6",33592:"C8D7",33993:"C8D8",33635:"C8D9",34701:"C8DA",29076:"C8DB",28342:"C8DC",23481:"C8DD",32466:"C8DE",20887:"C8DF",25545:"C8E0",26580:"C8E1",32905:"C8E2",33593:"C8E3",34837:"C8E4",20754:"C8E5",23418:"C8E6",22914:"C8E7",36785:"C8E8",20083:"C8E9",27741:"C8EA",20837:"C8EB",35109:"C8EC",36719:"C8ED",38446:"C8EE",34122:"C8EF",29790:"C8F0",38160:"C8F1",38384:"C8F2",28070:"C8F3",33509:"C8F4",24369:"C8F5",25746:"C8F6",27922:"C8F7",33832:"C8F8",33134:"C8F9",40131:"C8FA",22622:"C8FB",36187:"C8FC",19977:"C8FD",21441:"C8FE",20254:"C9A1",25955:"C9A2",26705:"C9A3",21971:"C9A4",20007:"C9A5",25620:"C9A6",39578:"C9A7",25195:"C9A8",23234:"C9A9",29791:"C9AA",33394:"C9AB",28073:"C9AC",26862:"C9AD",20711:"C9AE",33678:"C9AF",30722:"C9B0",26432:"C9B1",21049:"C9B2",27801:"C9B3",32433:"C9B4",20667:"C9B5",21861:"C9B6",29022:"C9B7",31579:"C9B8",26194:"C9B9",29642:"C9BA",33515:"C9BB",26441:"C9BC",23665:"C9BD",21024:"C9BE",29053:"C9BF",34923:"C9C0",38378:"C9C1",38485:"C9C2",25797:"C9C3",36193:"C9C4",33203:"C9C5",21892:"C9C6",27733:"C9C7",25159:"C9C8",32558:"C9C9",22674:"C9CA",20260:"C9CB",21830:"C9CC",36175:"C9CD",26188:"C9CE",19978:"C9CF",23578:"C9D0",35059:"C9D1",26786:"C9D2",25422:"C9D3",31245:"C9D4",28903:"C9D5",33421:"C9D6",21242:"C9D7",38902:"C9D8",23569:"C9D9",21736:"C9DA",37045:"C9DB",32461:"C9DC",22882:"C9DD",36170:"C9DE",34503:"C9DF",33292:"C9E0",33293:"C9E1",36198:"C9E2",25668:"C9E3",23556:"C9E4",24913:"C9E5",28041:"C9E6",31038:"C9E7",35774:"C9E8",30775:"C9E9",30003:"C9EA",21627:"C9EB",20280:"C9EC",36523:"C9ED",28145:"C9EE",23072:"C9EF",32453:"C9F0",31070:"C9F1",27784:"C9F2",23457:"C9F3",23158:"C9F4",29978:"C9F5",32958:"C9F6",24910:"C9F7",28183:"C9F8",22768:"C9F9",29983:"C9FA",29989:"C9FB",29298:"C9FC",21319:"C9FD",32499:"C9FE",30465:"CAA1",30427:"CAA2",21097:"CAA3",32988:"CAA4",22307:"CAA5",24072:"CAA6",22833:"CAA7",29422:"CAA8",26045:"CAA9",28287:"CAAA",35799:"CAAB",23608:"CAAC",34417:"CAAD",21313:"CAAE",30707:"CAAF",25342:"CAB0",26102:"CAB1",20160:"CAB2",39135:"CAB3",34432:"CAB4",23454:"CAB5",35782:"CAB6",21490:"CAB7",30690:"CAB8",20351:"CAB9",23630:"CABA",39542:"CABB",22987:"CABC",24335:"CABD",31034:"CABE",22763:"CABF",19990:"CAC0",26623:"CAC1",20107:"CAC2",25325:"CAC3",35475:"CAC4",36893:"CAC5",21183:"CAC6",26159:"CAC7",21980:"CAC8",22124:"CAC9",36866:"CACA",20181:"CACB",20365:"CACC",37322:"CACD",39280:"CACE",27663:"CACF",24066:"CAD0",24643:"CAD1",23460:"CAD2",35270:"CAD3",35797:"CAD4",25910:"CAD5",25163:"CAD6",39318:"CAD7",23432:"CAD8",23551:"CAD9",25480:"CADA",21806:"CADB",21463:"CADC",30246:"CADD",20861:"CADE",34092:"CADF",26530:"CAE0",26803:"CAE1",27530:"CAE2",25234:"CAE3",36755:"CAE4",21460:"CAE5",33298:"CAE6",28113:"CAE7",30095:"CAE8",20070:"CAE9",36174:"CAEA",23408:"CAEB",29087:"CAEC",34223:"CAED",26257:"CAEE",26329:"CAEF",32626:"CAF0",34560:"CAF1",40653:"CAF2",40736:"CAF3",23646:"CAF4",26415:"CAF5",36848:"CAF6",26641:"CAF7",26463:"CAF8",25101:"CAF9",31446:"CAFA",22661:"CAFB",24246:"CAFC",25968:"CAFD",28465:"CAFE",24661:"CBA1",21047:"CBA2",32781:"CBA3",25684:"CBA4",34928:"CBA5",29993:"CBA6",24069:"CBA7",26643:"CBA8",25332:"CBA9",38684:"CBAA",21452:"CBAB",29245:"CBAC",35841:"CBAD",27700:"CBAE",30561:"CBAF",31246:"CBB0",21550:"CBB1",30636:"CBB2",39034:"CBB3",33308:"CBB4",35828:"CBB5",30805:"CBB6",26388:"CBB7",28865:"CBB8",26031:"CBB9",25749:"CBBA",22070:"CBBB",24605:"CBBC",31169:"CBBD",21496:"CBBE",19997:"CBBF",27515:"CBC0",32902:"CBC1",23546:"CBC2",21987:"CBC3",22235:"CBC4",20282:"CBC5",20284:"CBC6",39282:"CBC7",24051:"CBC8",26494:"CBC9",32824:"CBCA",24578:"CBCB",39042:"CBCC",36865:"CBCD",23435:"CBCE",35772:"CBCF",35829:"CBD0",25628:"CBD1",33368:"CBD2",25822:"CBD3",22013:"CBD4",33487:"CBD5",37221:"CBD6",20439:"CBD7",32032:"CBD8",36895:"CBD9",31903:"CBDA",20723:"CBDB",22609:"CBDC",28335:"CBDD",23487:"CBDE",35785:"CBDF",32899:"CBE0",37240:"CBE1",33948:"CBE2",31639:"CBE3",34429:"CBE4",38539:"CBE5",38543:"CBE6",32485:"CBE7",39635:"CBE8",30862:"CBE9",23681:"CBEA",31319:"CBEB",36930:"CBEC",38567:"CBED",31071:"CBEE",23385:"CBEF",25439:"CBF0",31499:"CBF1",34001:"CBF2",26797:"CBF3",21766:"CBF4",32553:"CBF5",29712:"CBF6",32034:"CBF7",38145:"CBF8",25152:"CBF9",22604:"CBFA",20182:"CBFB",23427:"CBFC",22905:"CBFD",22612:"CBFE",29549:"CCA1",25374:"CCA2",36427:"CCA3",36367:"CCA4",32974:"CCA5",33492:"CCA6",25260:"CCA7",21488:"CCA8",27888:"CCA9",37214:"CCAA",22826:"CCAB",24577:"CCAC",27760:"CCAD",22349:"CCAE",25674:"CCAF",36138:"CCB0",30251:"CCB1",28393:"CCB2",22363:"CCB3",27264:"CCB4",30192:"CCB5",28525:"CCB6",35885:"CCB7",35848:"CCB8",22374:"CCB9",27631:"CCBA",34962:"CCBB",30899:"CCBC",25506:"CCBD",21497:"CCBE",28845:"CCBF",27748:"CCC0",22616:"CCC1",25642:"CCC2",22530:"CCC3",26848:"CCC4",33179:"CCC5",21776:"CCC6",31958:"CCC7",20504:"CCC8",36538:"CCC9",28108:"CCCA",36255:"CCCB",28907:"CCCC",25487:"CCCD",28059:"CCCE",28372:"CCCF",32486:"CCD0",33796:"CCD1",26691:"CCD2",36867:"CCD3",28120:"CCD4",38518:"CCD5",35752:"CCD6",22871:"CCD7",29305:"CCD8",34276:"CCD9",33150:"CCDA",30140:"CCDB",35466:"CCDC",26799:"CCDD",21076:"CCDE",36386:"CCDF",38161:"CCE0",25552:"CCE1",39064:"CCE2",36420:"CCE3",21884:"CCE4",20307:"CCE5",26367:"CCE6",22159:"CCE7",24789:"CCE8",28053:"CCE9",21059:"CCEA",23625:"CCEB",22825:"CCEC",28155:"CCED",22635:"CCEE",3e4:"CCEF",29980:"CCF0",24684:"CCF1",33300:"CCF2",33094:"CCF3",25361:"CCF4",26465:"CCF5",36834:"CCF6",30522:"CCF7",36339:"CCF8",36148:"CCF9",38081:"CCFA",24086:"CCFB",21381:"CCFC",21548:"CCFD",28867:"CCFE",27712:"CDA1",24311:"CDA2",20572:"CDA3",20141:"CDA4",24237:"CDA5",25402:"CDA6",33351:"CDA7",36890:"CDA8",26704:"CDA9",37230:"CDAA",30643:"CDAB",21516:"CDAC",38108:"CDAD",24420:"CDAE",31461:"CDAF",26742:"CDB0",25413:"CDB1",31570:"CDB2",32479:"CDB3",30171:"CDB4",20599:"CDB5",25237:"CDB6",22836:"CDB7",36879:"CDB8",20984:"CDB9",31171:"CDBA",31361:"CDBB",22270:"CDBC",24466:"CDBD",36884:"CDBE",28034:"CDBF",23648:"CDC0",22303:"CDC1",21520:"CDC2",20820:"CDC3",28237:"CDC4",22242:"CDC5",25512:"CDC6",39059:"CDC7",33151:"CDC8",34581:"CDC9",35114:"CDCA",36864:"CDCB",21534:"CDCC",23663:"CDCD",33216:"CDCE",25302:"CDCF",25176:"CDD0",33073:"CDD1",40501:"CDD2",38464:"CDD3",39534:"CDD4",39548:"CDD5",26925:"CDD6",22949:"CDD7",25299:"CDD8",21822:"CDD9",25366:"CDDA",21703:"CDDB",34521:"CDDC",27964:"CDDD",23043:"CDDE",29926:"CDDF",34972:"CDE0",27498:"CDE1",22806:"CDE2",35916:"CDE3",24367:"CDE4",28286:"CDE5",29609:"CDE6",39037:"CDE7",20024:"CDE8",28919:"CDE9",23436:"CDEA",30871:"CDEB",25405:"CDEC",26202:"CDED",30358:"CDEE",24779:"CDEF",23451:"CDF0",23113:"CDF1",19975:"CDF2",33109:"CDF3",27754:"CDF4",29579:"CDF5",20129:"CDF6",26505:"CDF7",32593:"CDF8",24448:"CDF9",26106:"CDFA",26395:"CDFB",24536:"CDFC",22916:"CDFD",23041:"CDFE",24013:"CEA1",24494:"CEA2",21361:"CEA3",38886:"CEA4",36829:"CEA5",26693:"CEA6",22260:"CEA7",21807:"CEA8",24799:"CEA9",20026:"CEAA",28493:"CEAB",32500:"CEAC",33479:"CEAD",33806:"CEAE",22996:"CEAF",20255:"CEB0",20266:"CEB1",23614:"CEB2",32428:"CEB3",26410:"CEB4",34074:"CEB5",21619:"CEB6",30031:"CEB7",32963:"CEB8",21890:"CEB9",39759:"CEBA",20301:"CEBB",28205:"CEBC",35859:"CEBD",23561:"CEBE",24944:"CEBF",21355:"CEC0",30239:"CEC1",28201:"CEC2",34442:"CEC3",25991:"CEC4",38395:"CEC5",32441:"CEC6",21563:"CEC7",31283:"CEC8",32010:"CEC9",38382:"CECA",21985:"CECB",32705:"CECC",29934:"CECD",25373:"CECE",34583:"CECF",28065:"CED0",31389:"CED1",25105:"CED2",26017:"CED3",21351:"CED4",25569:"CED5",27779:"CED6",24043:"CED7",21596:"CED8",38056:"CED9",20044:"CEDA",27745:"CEDB",35820:"CEDC",23627:"CEDD",26080:"CEDE",33436:"CEDF",26791:"CEE0",21566:"CEE1",21556:"CEE2",27595:"CEE3",27494:"CEE4",20116:"CEE5",25410:"CEE6",21320:"CEE7",33310:"CEE8",20237:"CEE9",20398:"CEEA",22366:"CEEB",25098:"CEEC",38654:"CEED",26212:"CEEE",29289:"CEEF",21247:"CEF0",21153:"CEF1",24735:"CEF2",35823:"CEF3",26132:"CEF4",29081:"CEF5",26512:"CEF6",35199:"CEF7",30802:"CEF8",30717:"CEF9",26224:"CEFA",22075:"CEFB",21560:"CEFC",38177:"CEFD",29306:"CEFE",31232:"CFA1",24687:"CFA2",24076:"CFA3",24713:"CFA4",33181:"CFA5",22805:"CFA6",24796:"CFA7",29060:"CFA8",28911:"CFA9",28330:"CFAA",27728:"CFAB",29312:"CFAC",27268:"CFAD",34989:"CFAE",24109:"CFAF",20064:"CFB0",23219:"CFB1",21916:"CFB2",38115:"CFB3",27927:"CFB4",31995:"CFB5",38553:"CFB6",25103:"CFB7",32454:"CFB8",30606:"CFB9",34430:"CFBA",21283:"CFBB",38686:"CFBC",36758:"CFBD",26247:"CFBE",23777:"CFBF",20384:"CFC0",29421:"CFC1",19979:"CFC2",21414:"CFC3",22799:"CFC4",21523:"CFC5",25472:"CFC6",38184:"CFC7",20808:"CFC8",20185:"CFC9",40092:"CFCA",32420:"CFCB",21688:"CFCC",36132:"CFCD",34900:"CFCE",33335:"CFCF",38386:"CFD0",28046:"CFD1",24358:"CFD2",23244:"CFD3",26174:"CFD4",38505:"CFD5",29616:"CFD6",29486:"CFD7",21439:"CFD8",33146:"CFD9",39301:"CFDA",32673:"CFDB",23466:"CFDC",38519:"CFDD",38480:"CFDE",32447:"CFDF",30456:"CFE0",21410:"CFE1",38262:"CFE2",39321:"CFE3",31665:"CFE4",35140:"CFE5",28248:"CFE6",20065:"CFE7",32724:"CFE8",31077:"CFE9",35814:"CFEA",24819:"CFEB",21709:"CFEC",20139:"CFED",39033:"CFEE",24055:"CFEF",27233:"CFF0",20687:"CFF1",21521:"CFF2",35937:"CFF3",33831:"CFF4",30813:"CFF5",38660:"CFF6",21066:"CFF7",21742:"CFF8",22179:"CFF9",38144:"CFFA",28040:"CFFB",23477:"CFFC",28102:"CFFD",26195:"CFFE",23567:"D0A1",23389:"D0A2",26657:"D0A3",32918:"D0A4",21880:"D0A5",31505:"D0A6",25928:"D0A7",26964:"D0A8",20123:"D0A9",27463:"D0AA",34638:"D0AB",38795:"D0AC",21327:"D0AD",25375:"D0AE",25658:"D0AF",37034:"D0B0",26012:"D0B1",32961:"D0B2",35856:"D0B3",20889:"D0B4",26800:"D0B5",21368:"D0B6",34809:"D0B7",25032:"D0B8",27844:"D0B9",27899:"D0BA",35874:"D0BB",23633:"D0BC",34218:"D0BD",33455:"D0BE",38156:"D0BF",27427:"D0C0",36763:"D0C1",26032:"D0C2",24571:"D0C3",24515:"D0C4",20449:"D0C5",34885:"D0C6",26143:"D0C7",33125:"D0C8",29481:"D0C9",24826:"D0CA",20852:"D0CB",21009:"D0CC",22411:"D0CD",24418:"D0CE",37026:"D0CF",34892:"D0D0",37266:"D0D1",24184:"D0D2",26447:"D0D3",24615:"D0D4",22995:"D0D5",20804:"D0D6",20982:"D0D7",33016:"D0D8",21256:"D0D9",27769:"D0DA",38596:"D0DB",29066:"D0DC",20241:"D0DD",20462:"D0DE",32670:"D0DF",26429:"D0E0",21957:"D0E1",38152:"D0E2",31168:"D0E3",34966:"D0E4",32483:"D0E5",22687:"D0E6",25100:"D0E7",38656:"D0E8",34394:"D0E9",22040:"D0EA",39035:"D0EB",24464:"D0EC",35768:"D0ED",33988:"D0EE",37207:"D0EF",21465:"D0F0",26093:"D0F1",24207:"D0F2",30044:"D0F3",24676:"D0F4",32110:"D0F5",23167:"D0F6",32490:"D0F7",32493:"D0F8",36713:"D0F9",21927:"D0FA",23459:"D0FB",24748:"D0FC",26059:"D0FD",29572:"D0FE",36873:"D1A1",30307:"D1A2",30505:"D1A3",32474:"D1A4",38772:"D1A5",34203:"D1A6",23398:"D1A7",31348:"D1A8",38634:"D1A9",34880:"D1AA",21195:"D1AB",29071:"D1AC",24490:"D1AD",26092:"D1AE",35810:"D1AF",23547:"D1B0",39535:"D1B1",24033:"D1B2",27529:"D1B3",27739:"D1B4",35757:"D1B5",35759:"D1B6",36874:"D1B7",36805:"D1B8",21387:"D1B9",25276:"D1BA",40486:"D1BB",40493:"D1BC",21568:"D1BD",20011:"D1BE",33469:"D1BF",29273:"D1C0",34460:"D1C1",23830:"D1C2",34905:"D1C3",28079:"D1C4",38597:"D1C5",21713:"D1C6",20122:"D1C7",35766:"D1C8",28937:"D1C9",21693:"D1CA",38409:"D1CB",28895:"D1CC",28153:"D1CD",30416:"D1CE",20005:"D1CF",30740:"D1D0",34578:"D1D1",23721:"D1D2",24310:"D1D3",35328:"D1D4",39068:"D1D5",38414:"D1D6",28814:"D1D7",27839:"D1D8",22852:"D1D9",25513:"D1DA",30524:"D1DB",34893:"D1DC",28436:"D1DD",33395:"D1DE",22576:"D1DF",29141:"D1E0",21388:"D1E1",30746:"D1E2",38593:"D1E3",21761:"D1E4",24422:"D1E5",28976:"D1E6",23476:"D1E7",35866:"D1E8",39564:"D1E9",27523:"D1EA",22830:"D1EB",40495:"D1EC",31207:"D1ED",26472:"D1EE",25196:"D1EF",20335:"D1F0",30113:"D1F1",32650:"D1F2",27915:"D1F3",38451:"D1F4",27687:"D1F5",20208:"D1F6",30162:"D1F7",20859:"D1F8",26679:"D1F9",28478:"D1FA",36992:"D1FB",33136:"D1FC",22934:"D1FD",29814:"D1FE",25671:"D2A1",23591:"D2A2",36965:"D2A3",31377:"D2A4",35875:"D2A5",23002:"D2A6",21676:"D2A7",33280:"D2A8",33647:"D2A9",35201:"D2AA",32768:"D2AB",26928:"D2AC",22094:"D2AD",32822:"D2AE",29239:"D2AF",37326:"D2B0",20918:"D2B1",20063:"D2B2",39029:"D2B3",25494:"D2B4",19994:"D2B5",21494:"D2B6",26355:"D2B7",33099:"D2B8",22812:"D2B9",28082:"D2BA",19968:"D2BB",22777:"D2BC",21307:"D2BD",25558:"D2BE",38129:"D2BF",20381:"D2C0",20234:"D2C1",34915:"D2C2",39056:"D2C3",22839:"D2C4",36951:"D2C5",31227:"D2C6",20202:"D2C7",33008:"D2C8",30097:"D2C9",27778:"D2CA",23452:"D2CB",23016:"D2CC",24413:"D2CD",26885:"D2CE",34433:"D2CF",20506:"D2D0",24050:"D2D1",20057:"D2D2",30691:"D2D3",20197:"D2D4",33402:"D2D5",25233:"D2D6",26131:"D2D7",37009:"D2D8",23673:"D2D9",20159:"D2DA",24441:"D2DB",33222:"D2DC",36920:"D2DD",32900:"D2DE",30123:"D2DF",20134:"D2E0",35028:"D2E1",24847:"D2E2",27589:"D2E3",24518:"D2E4",20041:"D2E5",30410:"D2E6",28322:"D2E7",35811:"D2E8",35758:"D2E9",35850:"D2EA",35793:"D2EB",24322:"D2EC",32764:"D2ED",32716:"D2EE",32462:"D2EF",33589:"D2F0",33643:"D2F1",22240:"D2F2",27575:"D2F3",38899:"D2F4",38452:"D2F5",23035:"D2F6",21535:"D2F7",38134:"D2F8",28139:"D2F9",23493:"D2FA",39278:"D2FB",23609:"D2FC",24341:"D2FD",38544:"D2FE",21360:"D3A1",33521:"D3A2",27185:"D3A3",23156:"D3A4",40560:"D3A5",24212:"D3A6",32552:"D3A7",33721:"D3A8",33828:"D3A9",33829:"D3AA",33639:"D3AB",34631:"D3AC",36814:"D3AD",36194:"D3AE",30408:"D3AF",24433:"D3B0",39062:"D3B1",30828:"D3B2",26144:"D3B3",21727:"D3B4",25317:"D3B5",20323:"D3B6",33219:"D3B7",30152:"D3B8",24248:"D3B9",38605:"D3BA",36362:"D3BB",34553:"D3BC",21647:"D3BD",27891:"D3BE",28044:"D3BF",27704:"D3C0",24703:"D3C1",21191:"D3C2",29992:"D3C3",24189:"D3C4",20248:"D3C5",24736:"D3C6",24551:"D3C7",23588:"D3C8",30001:"D3C9",37038:"D3CA",38080:"D3CB",29369:"D3CC",27833:"D3CD",28216:"D3CE",37193:"D3CF",26377:"D3D0",21451:"D3D1",21491:"D3D2",20305:"D3D3",37321:"D3D4",35825:"D3D5",21448:"D3D6",24188:"D3D7",36802:"D3D8",28132:"D3D9",20110:"D3DA",30402:"D3DB",27014:"D3DC",34398:"D3DD",24858:"D3DE",33286:"D3DF",20313:"D3E0",20446:"D3E1",36926:"D3E2",40060:"D3E3",24841:"D3E4",28189:"D3E5",28180:"D3E6",38533:"D3E7",20104:"D3E8",23089:"D3E9",38632:"D3EA",19982:"D3EB",23679:"D3EC",31161:"D3ED",23431:"D3EE",35821:"D3EF",32701:"D3F0",29577:"D3F1",22495:"D3F2",33419:"D3F3",37057:"D3F4",21505:"D3F5",36935:"D3F6",21947:"D3F7",23786:"D3F8",24481:"D3F9",24840:"D3FA",27442:"D3FB",29425:"D3FC",32946:"D3FD",35465:"D3FE",28020:"D4A1",23507:"D4A2",35029:"D4A3",39044:"D4A4",35947:"D4A5",39533:"D4A6",40499:"D4A7",28170:"D4A8",20900:"D4A9",20803:"D4AA",22435:"D4AB",34945:"D4AC",21407:"D4AD",25588:"D4AE",36757:"D4AF",22253:"D4B0",21592:"D4B1",22278:"D4B2",29503:"D4B3",28304:"D4B4",32536:"D4B5",36828:"D4B6",33489:"D4B7",24895:"D4B8",24616:"D4B9",38498:"D4BA",26352:"D4BB",32422:"D4BC",36234:"D4BD",36291:"D4BE",38053:"D4BF",23731:"D4C0",31908:"D4C1",26376:"D4C2",24742:"D4C3",38405:"D4C4",32792:"D4C5",20113:"D4C6",37095:"D4C7",21248:"D4C8",38504:"D4C9",20801:"D4CA",36816:"D4CB",34164:"D4CC",37213:"D4CD",26197:"D4CE",38901:"D4CF",23381:"D4D0",21277:"D4D1",30776:"D4D2",26434:"D4D3",26685:"D4D4",21705:"D4D5",28798:"D4D6",23472:"D4D7",36733:"D4D8",20877:"D4D9",22312:"D4DA",21681:"D4DB",25874:"D4DC",26242:"D4DD",36190:"D4DE",36163:"D4DF",33039:"D4E0",33900:"D4E1",36973:"D4E2",31967:"D4E3",20991:"D4E4",34299:"D4E5",26531:"D4E6",26089:"D4E7",28577:"D4E8",34468:"D4E9",36481:"D4EA",22122:"D4EB",36896:"D4EC",30338:"D4ED",28790:"D4EE",29157:"D4EF",36131:"D4F0",25321:"D4F1",21017:"D4F2",27901:"D4F3",36156:"D4F4",24590:"D4F5",22686:"D4F6",24974:"D4F7",26366:"D4F8",36192:"D4F9",25166:"D4FA",21939:"D4FB",28195:"D4FC",26413:"D4FD",36711:"D4FE",38113:"D5A1",38392:"D5A2",30504:"D5A3",26629:"D5A4",27048:"D5A5",21643:"D5A6",20045:"D5A7",28856:"D5A8",35784:"D5A9",25688:"D5AA",25995:"D5AB",23429:"D5AC",31364:"D5AD",20538:"D5AE",23528:"D5AF",30651:"D5B0",27617:"D5B1",35449:"D5B2",31896:"D5B3",27838:"D5B4",30415:"D5B5",26025:"D5B6",36759:"D5B7",23853:"D5B8",23637:"D5B9",34360:"D5BA",26632:"D5BB",21344:"D5BC",25112:"D5BD",31449:"D5BE",28251:"D5BF",32509:"D5C0",27167:"D5C1",31456:"D5C2",24432:"D5C3",28467:"D5C4",24352:"D5C5",25484:"D5C6",28072:"D5C7",26454:"D5C8",19976:"D5C9",24080:"D5CA",36134:"D5CB",20183:"D5CC",32960:"D5CD",30260:"D5CE",38556:"D5CF",25307:"D5D0",26157:"D5D1",25214:"D5D2",27836:"D5D3",36213:"D5D4",29031:"D5D5",32617:"D5D6",20806:"D5D7",32903:"D5D8",21484:"D5D9",36974:"D5DA",25240:"D5DB",21746:"D5DC",34544:"D5DD",36761:"D5DE",32773:"D5DF",38167:"D5E0",34071:"D5E1",36825:"D5E2",27993:"D5E3",29645:"D5E4",26015:"D5E5",30495:"D5E6",29956:"D5E7",30759:"D5E8",33275:"D5E9",36126:"D5EA",38024:"D5EB",20390:"D5EC",26517:"D5ED",30137:"D5EE",35786:"D5EF",38663:"D5F0",25391:"D5F1",38215:"D5F2",38453:"D5F3",33976:"D5F4",25379:"D5F5",30529:"D5F6",24449:"D5F7",29424:"D5F8",20105:"D5F9",24596:"D5FA",25972:"D5FB",25327:"D5FC",27491:"D5FD",25919:"D5FE",24103:"D6A1",30151:"D6A2",37073:"D6A3",35777:"D6A4",33437:"D6A5",26525:"D6A6",25903:"D6A7",21553:"D6A8",34584:"D6A9",30693:"D6AA",32930:"D6AB",33026:"D6AC",27713:"D6AD",20043:"D6AE",32455:"D6AF",32844:"D6B0",30452:"D6B1",26893:"D6B2",27542:"D6B3",25191:"D6B4",20540:"D6B5",20356:"D6B6",22336:"D6B7",25351:"D6B8",27490:"D6B9",36286:"D6BA",21482:"D6BB",26088:"D6BC",32440:"D6BD",24535:"D6BE",25370:"D6BF",25527:"D6C0",33267:"D6C1",33268:"D6C2",32622:"D6C3",24092:"D6C4",23769:"D6C5",21046:"D6C6",26234:"D6C7",31209:"D6C8",31258:"D6C9",36136:"D6CA",28825:"D6CB",30164:"D6CC",28382:"D6CD",27835:"D6CE",31378:"D6CF",20013:"D6D0",30405:"D6D1",24544:"D6D2",38047:"D6D3",34935:"D6D4",32456:"D6D5",31181:"D6D6",32959:"D6D7",37325:"D6D8",20210:"D6D9",20247:"D6DA",33311:"D6DB",21608:"D6DC",24030:"D6DD",27954:"D6DE",35788:"D6DF",31909:"D6E0",36724:"D6E1",32920:"D6E2",24090:"D6E3",21650:"D6E4",30385:"D6E5",23449:"D6E6",26172:"D6E7",39588:"D6E8",29664:"D6E9",26666:"D6EA",34523:"D6EB",26417:"D6EC",29482:"D6ED",35832:"D6EE",35803:"D6EF",36880:"D6F0",31481:"D6F1",28891:"D6F2",29038:"D6F3",25284:"D6F4",30633:"D6F5",22065:"D6F6",20027:"D6F7",33879:"D6F8",26609:"D6F9",21161:"D6FA",34496:"D6FB",36142:"D6FC",38136:"D6FD",31569:"D6FE",20303:"D7A1",27880:"D7A2",31069:"D7A3",39547:"D7A4",25235:"D7A5",29226:"D7A6",25341:"D7A7",19987:"D7A8",30742:"D7A9",36716:"D7AA",25776:"D7AB",36186:"D7AC",31686:"D7AD",26729:"D7AE",24196:"D7AF",35013:"D7B0",22918:"D7B1",25758:"D7B2",22766:"D7B3",29366:"D7B4",26894:"D7B5",38181:"D7B6",36861:"D7B7",36184:"D7B8",22368:"D7B9",32512:"D7BA",35846:"D7BB",20934:"D7BC",25417:"D7BD",25305:"D7BE",21331:"D7BF",26700:"D7C0",29730:"D7C1",33537:"D7C2",37196:"D7C3",21828:"D7C4",30528:"D7C5",28796:"D7C6",27978:"D7C7",20857:"D7C8",21672:"D7C9",36164:"D7CA",23039:"D7CB",28363:"D7CC",28100:"D7CD",23388:"D7CE",32043:"D7CF",20180:"D7D0",31869:"D7D1",28371:"D7D2",23376:"D7D3",33258:"D7D4",28173:"D7D5",23383:"D7D6",39683:"D7D7",26837:"D7D8",36394:"D7D9",23447:"D7DA",32508:"D7DB",24635:"D7DC",32437:"D7DD",37049:"D7DE",36208:"D7DF",22863:"D7E0",25549:"D7E1",31199:"D7E2",36275:"D7E3",21330:"D7E4",26063:"D7E5",31062:"D7E6",35781:"D7E7",38459:"D7E8",32452:"D7E9",38075:"D7EA",32386:"D7EB",22068:"D7EC",37257:"D7ED",26368:"D7EE",32618:"D7EF",23562:"D7F0",36981:"D7F1",26152:"D7F2",24038:"D7F3",20304:"D7F4",26590:"D7F5",20570:"D7F6",20316:"D7F7",22352:"D7F8",24231:"D7F9",20109:"D8A1",19980:"D8A2",20800:"D8A3",19984:"D8A4",24319:"D8A5",21317:"D8A6",19989:"D8A7",20120:"D8A8",19998:"D8A9",39730:"D8AA",23404:"D8AB",22121:"D8AC",20008:"D8AD",31162:"D8AE",20031:"D8AF",21269:"D8B0",20039:"D8B1",22829:"D8B2",29243:"D8B3",21358:"D8B4",27664:"D8B5",22239:"D8B6",32996:"D8B7",39319:"D8B8",27603:"D8B9",30590:"D8BA",40727:"D8BB",20022:"D8BC",20127:"D8BD",40720:"D8BE",20060:"D8BF",20073:"D8C0",20115:"D8C1",33416:"D8C2",23387:"D8C3",21868:"D8C4",22031:"D8C5",20164:"D8C6",21389:"D8C7",21405:"D8C8",21411:"D8C9",21413:"D8CA",21422:"D8CB",38757:"D8CC",36189:"D8CD",21274:"D8CE",21493:"D8CF",21286:"D8D0",21294:"D8D1",21310:"D8D2",36188:"D8D3",21350:"D8D4",21347:"D8D5",20994:"D8D6",21e3:"D8D7",21006:"D8D8",21037:"D8D9",21043:"D8DA",21055:"D8DB",21056:"D8DC",21068:"D8DD",21086:"D8DE",21089:"D8DF",21084:"D8E0",33967:"D8E1",21117:"D8E2",21122:"D8E3",21121:"D8E4",21136:"D8E5",21139:"D8E6",20866:"D8E7",32596:"D8E8",20155:"D8E9",20163:"D8EA",20169:"D8EB",20162:"D8EC",20200:"D8ED",20193:"D8EE",20203:"D8EF",20190:"D8F0",20251:"D8F1",20211:"D8F2",20258:"D8F3",20324:"D8F4",20213:"D8F5",20261:"D8F6",20263:"D8F7",20233:"D8F8",20267:"D8F9",20318:"D8FA",20327:"D8FB",25912:"D8FC",20314:"D8FD",20317:"D8FE",20319:"D9A1",20311:"D9A2",20274:"D9A3",20285:"D9A4",20342:"D9A5",20340:"D9A6",20369:"D9A7",20361:"D9A8",20355:"D9A9",20367:"D9AA",20350:"D9AB",20347:"D9AC",20394:"D9AD",20348:"D9AE",20396:"D9AF",20372:"D9B0",20454:"D9B1",20456:"D9B2",20458:"D9B3",20421:"D9B4",20442:"D9B5",20451:"D9B6",20444:"D9B7",20433:"D9B8",20447:"D9B9",20472:"D9BA",20521:"D9BB",20556:"D9BC",20467:"D9BD",20524:"D9BE",20495:"D9BF",20526:"D9C0",20525:"D9C1",20478:"D9C2",20508:"D9C3",20492:"D9C4",20517:"D9C5",20520:"D9C6",20606:"D9C7",20547:"D9C8",20565:"D9C9",20552:"D9CA",20558:"D9CB",20588:"D9CC",20603:"D9CD",20645:"D9CE",20647:"D9CF",20649:"D9D0",20666:"D9D1",20694:"D9D2",20742:"D9D3",20717:"D9D4",20716:"D9D5",20710:"D9D6",20718:"D9D7",20743:"D9D8",20747:"D9D9",20189:"D9DA",27709:"D9DB",20312:"D9DC",20325:"D9DD",20430:"D9DE",40864:"D9DF",27718:"D9E0",31860:"D9E1",20846:"D9E2",24061:"D9E3",40649:"D9E4",39320:"D9E5",20865:"D9E6",22804:"D9E7",21241:"D9E8",21261:"D9E9",35335:"D9EA",21264:"D9EB",20971:"D9EC",22809:"D9ED",20821:"D9EE",20128:"D9EF",20822:"D9F0",20147:"D9F1",34926:"D9F2",34980:"D9F3",20149:"D9F4",33044:"D9F5",35026:"D9F6",31104:"D9F7",23348:"D9F8",34819:"D9F9",32696:"D9FA",20907:"D9FB",20913:"D9FC",20925:"D9FD",20924:"D9FE",20935:"DAA1",20886:"DAA2",20898:"DAA3",20901:"DAA4",35744:"DAA5",35750:"DAA6",35751:"DAA7",35754:"DAA8",35764:"DAA9",35765:"DAAA",35767:"DAAB",35778:"DAAC",35779:"DAAD",35787:"DAAE",35791:"DAAF",35790:"DAB0",35794:"DAB1",35795:"DAB2",35796:"DAB3",35798:"DAB4",35800:"DAB5",35801:"DAB6",35804:"DAB7",35807:"DAB8",35808:"DAB9",35812:"DABA",35816:"DABB",35817:"DABC",35822:"DABD",35824:"DABE",35827:"DABF",35830:"DAC0",35833:"DAC1",35836:"DAC2",35839:"DAC3",35840:"DAC4",35842:"DAC5",35844:"DAC6",35847:"DAC7",35852:"DAC8",35855:"DAC9",35857:"DACA",35858:"DACB",35860:"DACC",35861:"DACD",35862:"DACE",35865:"DACF",35867:"DAD0",35864:"DAD1",35869:"DAD2",35871:"DAD3",35872:"DAD4",35873:"DAD5",35877:"DAD6",35879:"DAD7",35882:"DAD8",35883:"DAD9",35886:"DADA",35887:"DADB",35890:"DADC",35891:"DADD",35893:"DADE",35894:"DADF",21353:"DAE0",21370:"DAE1",38429:"DAE2",38434:"DAE3",38433:"DAE4",38449:"DAE5",38442:"DAE6",38461:"DAE7",38460:"DAE8",38466:"DAE9",38473:"DAEA",38484:"DAEB",38495:"DAEC",38503:"DAED",38508:"DAEE",38514:"DAEF",38516:"DAF0",38536:"DAF1",38541:"DAF2",38551:"DAF3",38576:"DAF4",37015:"DAF5",37019:"DAF6",37021:"DAF7",37017:"DAF8",37036:"DAF9",37025:"DAFA",37044:"DAFB",37043:"DAFC",37046:"DAFD",37050:"DAFE",37048:"DBA1",37040:"DBA2",37071:"DBA3",37061:"DBA4",37054:"DBA5",37072:"DBA6",37060:"DBA7",37063:"DBA8",37075:"DBA9",37094:"DBAA",37090:"DBAB",37084:"DBAC",37079:"DBAD",37083:"DBAE",37099:"DBAF",37103:"DBB0",37118:"DBB1",37124:"DBB2",37154:"DBB3",37150:"DBB4",37155:"DBB5",37169:"DBB6",37167:"DBB7",37177:"DBB8",37187:"DBB9",37190:"DBBA",21005:"DBBB",22850:"DBBC",21154:"DBBD",21164:"DBBE",21165:"DBBF",21182:"DBC0",21759:"DBC1",21200:"DBC2",21206:"DBC3",21232:"DBC4",21471:"DBC5",29166:"DBC6",30669:"DBC7",24308:"DBC8",20981:"DBC9",20988:"DBCA",39727:"DBCB",21430:"DBCC",24321:"DBCD",30042:"DBCE",24047:"DBCF",22348:"DBD0",22441:"DBD1",22433:"DBD2",22654:"DBD3",22716:"DBD4",22725:"DBD5",22737:"DBD6",22313:"DBD7",22316:"DBD8",22314:"DBD9",22323:"DBDA",22329:"DBDB",22318:"DBDC",22319:"DBDD",22364:"DBDE",22331:"DBDF",22338:"DBE0",22377:"DBE1",22405:"DBE2",22379:"DBE3",22406:"DBE4",22396:"DBE5",22395:"DBE6",22376:"DBE7",22381:"DBE8",22390:"DBE9",22387:"DBEA",22445:"DBEB",22436:"DBEC",22412:"DBED",22450:"DBEE",22479:"DBEF",22439:"DBF0",22452:"DBF1",22419:"DBF2",22432:"DBF3",22485:"DBF4",22488:"DBF5",22490:"DBF6",22489:"DBF7",22482:"DBF8",22456:"DBF9",22516:"DBFA",22511:"DBFB",22520:"DBFC",22500:"DBFD",22493:"DBFE",22539:"DCA1",22541:"DCA2",22525:"DCA3",22509:"DCA4",22528:"DCA5",22558:"DCA6",22553:"DCA7",22596:"DCA8",22560:"DCA9",22629:"DCAA",22636:"DCAB",22657:"DCAC",22665:"DCAD",22682:"DCAE",22656:"DCAF",39336:"DCB0",40729:"DCB1",25087:"DCB2",33401:"DCB3",33405:"DCB4",33407:"DCB5",33423:"DCB6",33418:"DCB7",33448:"DCB8",33412:"DCB9",33422:"DCBA",33425:"DCBB",33431:"DCBC",33433:"DCBD",33451:"DCBE",33464:"DCBF",33470:"DCC0",33456:"DCC1",33480:"DCC2",33482:"DCC3",33507:"DCC4",33432:"DCC5",33463:"DCC6",33454:"DCC7",33483:"DCC8",33484:"DCC9",33473:"DCCA",33449:"DCCB",33460:"DCCC",33441:"DCCD",33450:"DCCE",33439:"DCCF",33476:"DCD0",33486:"DCD1",33444:"DCD2",33505:"DCD3",33545:"DCD4",33527:"DCD5",33508:"DCD6",33551:"DCD7",33543:"DCD8",33500:"DCD9",33524:"DCDA",33490:"DCDB",33496:"DCDC",33548:"DCDD",33531:"DCDE",33491:"DCDF",33553:"DCE0",33562:"DCE1",33542:"DCE2",33556:"DCE3",33557:"DCE4",33504:"DCE5",33493:"DCE6",33564:"DCE7",33617:"DCE8",33627:"DCE9",33628:"DCEA",33544:"DCEB",33682:"DCEC",33596:"DCED",33588:"DCEE",33585:"DCEF",33691:"DCF0",33630:"DCF1",33583:"DCF2",33615:"DCF3",33607:"DCF4",33603:"DCF5",33631:"DCF6",33600:"DCF7",33559:"DCF8",33632:"DCF9",33581:"DCFA",33594:"DCFB",33587:"DCFC",33638:"DCFD",33637:"DCFE",33640:"DDA1",33563:"DDA2",33641:"DDA3",33644:"DDA4",33642:"DDA5",33645:"DDA6",33646:"DDA7",33712:"DDA8",33656:"DDA9",33715:"DDAA",33716:"DDAB",33696:"DDAC",33706:"DDAD",33683:"DDAE",33692:"DDAF",33669:"DDB0",33660:"DDB1",33718:"DDB2",33705:"DDB3",33661:"DDB4",33720:"DDB5",33659:"DDB6",33688:"DDB7",33694:"DDB8",33704:"DDB9",33722:"DDBA",33724:"DDBB",33729:"DDBC",33793:"DDBD",33765:"DDBE",33752:"DDBF",22535:"DDC0",33816:"DDC1",33803:"DDC2",33757:"DDC3",33789:"DDC4",33750:"DDC5",33820:"DDC6",33848:"DDC7",33809:"DDC8",33798:"DDC9",33748:"DDCA",33759:"DDCB",33807:"DDCC",33795:"DDCD",33784:"DDCE",33785:"DDCF",33770:"DDD0",33733:"DDD1",33728:"DDD2",33830:"DDD3",33776:"DDD4",33761:"DDD5",33884:"DDD6",33873:"DDD7",33882:"DDD8",33881:"DDD9",33907:"DDDA",33927:"DDDB",33928:"DDDC",33914:"DDDD",33929:"DDDE",33912:"DDDF",33852:"DDE0",33862:"DDE1",33897:"DDE2",33910:"DDE3",33932:"DDE4",33934:"DDE5",33841:"DDE6",33901:"DDE7",33985:"DDE8",33997:"DDE9",34e3:"DDEA",34022:"DDEB",33981:"DDEC",34003:"DDED",33994:"DDEE",33983:"DDEF",33978:"DDF0",34016:"DDF1",33953:"DDF2",33977:"DDF3",33972:"DDF4",33943:"DDF5",34021:"DDF6",34019:"DDF7",34060:"DDF8",29965:"DDF9",34104:"DDFA",34032:"DDFB",34105:"DDFC",34079:"DDFD",34106:"DDFE",34134:"DEA1",34107:"DEA2",34047:"DEA3",34044:"DEA4",34137:"DEA5",34120:"DEA6",34152:"DEA7",34148:"DEA8",34142:"DEA9",34170:"DEAA",30626:"DEAB",34115:"DEAC",34162:"DEAD",34171:"DEAE",34212:"DEAF",34216:"DEB0",34183:"DEB1",34191:"DEB2",34169:"DEB3",34222:"DEB4",34204:"DEB5",34181:"DEB6",34233:"DEB7",34231:"DEB8",34224:"DEB9",34259:"DEBA",34241:"DEBB",34268:"DEBC",34303:"DEBD",34343:"DEBE",34309:"DEBF",34345:"DEC0",34326:"DEC1",34364:"DEC2",24318:"DEC3",24328:"DEC4",22844:"DEC5",22849:"DEC6",32823:"DEC7",22869:"DEC8",22874:"DEC9",22872:"DECA",21263:"DECB",23586:"DECC",23589:"DECD",23596:"DECE",23604:"DECF",25164:"DED0",25194:"DED1",25247:"DED2",25275:"DED3",25290:"DED4",25306:"DED5",25303:"DED6",25326:"DED7",25378:"DED8",25334:"DED9",25401:"DEDA",25419:"DEDB",25411:"DEDC",25517:"DEDD",25590:"DEDE",25457:"DEDF",25466:"DEE0",25486:"DEE1",25524:"DEE2",25453:"DEE3",25516:"DEE4",25482:"DEE5",25449:"DEE6",25518:"DEE7",25532:"DEE8",25586:"DEE9",25592:"DEEA",25568:"DEEB",25599:"DEEC",25540:"DEED",25566:"DEEE",25550:"DEEF",25682:"DEF0",25542:"DEF1",25534:"DEF2",25669:"DEF3",25665:"DEF4",25611:"DEF5",25627:"DEF6",25632:"DEF7",25612:"DEF8",25638:"DEF9",25633:"DEFA",25694:"DEFB",25732:"DEFC",25709:"DEFD",25750:"DEFE",25722:"DFA1",25783:"DFA2",25784:"DFA3",25753:"DFA4",25786:"DFA5",25792:"DFA6",25808:"DFA7",25815:"DFA8",25828:"DFA9",25826:"DFAA",25865:"DFAB",25893:"DFAC",25902:"DFAD",24331:"DFAE",24530:"DFAF",29977:"DFB0",24337:"DFB1",21343:"DFB2",21489:"DFB3",21501:"DFB4",21481:"DFB5",21480:"DFB6",21499:"DFB7",21522:"DFB8",21526:"DFB9",21510:"DFBA",21579:"DFBB",21586:"DFBC",21587:"DFBD",21588:"DFBE",21590:"DFBF",21571:"DFC0",21537:"DFC1",21591:"DFC2",21593:"DFC3",21539:"DFC4",21554:"DFC5",21634:"DFC6",21652:"DFC7",21623:"DFC8",21617:"DFC9",21604:"DFCA",21658:"DFCB",21659:"DFCC",21636:"DFCD",21622:"DFCE",21606:"DFCF",21661:"DFD0",21712:"DFD1",21677:"DFD2",21698:"DFD3",21684:"DFD4",21714:"DFD5",21671:"DFD6",21670:"DFD7",21715:"DFD8",21716:"DFD9",21618:"DFDA",21667:"DFDB",21717:"DFDC",21691:"DFDD",21695:"DFDE",21708:"DFDF",21721:"DFE0",21722:"DFE1",21724:"DFE2",21673:"DFE3",21674:"DFE4",21668:"DFE5",21725:"DFE6",21711:"DFE7",21726:"DFE8",21787:"DFE9",21735:"DFEA",21792:"DFEB",21757:"DFEC",21780:"DFED",21747:"DFEE",21794:"DFEF",21795:"DFF0",21775:"DFF1",21777:"DFF2",21799:"DFF3",21802:"DFF4",21863:"DFF5",21903:"DFF6",21941:"DFF7",21833:"DFF8",21869:"DFF9",21825:"DFFA",21845:"DFFB",21823:"DFFC",21840:"DFFD",21820:"DFFE",21815:"E0A1",21846:"E0A2",21877:"E0A3",21878:"E0A4",21879:"E0A5",21811:"E0A6",21808:"E0A7",21852:"E0A8",21899:"E0A9",21970:"E0AA",21891:"E0AB",21937:"E0AC",21945:"E0AD",21896:"E0AE",21889:"E0AF",21919:"E0B0",21886:"E0B1",21974:"E0B2",21905:"E0B3",21883:"E0B4",21983:"E0B5",21949:"E0B6",21950:"E0B7",21908:"E0B8",21913:"E0B9",21994:"E0BA",22007:"E0BB",21961:"E0BC",22047:"E0BD",21969:"E0BE",21995:"E0BF",21996:"E0C0",21972:"E0C1",21990:"E0C2",21981:"E0C3",21956:"E0C4",21999:"E0C5",21989:"E0C6",22002:"E0C7",22003:"E0C8",21964:"E0C9",21965:"E0CA",21992:"E0CB",22005:"E0CC",21988:"E0CD",36756:"E0CE",22046:"E0CF",22024:"E0D0",22028:"E0D1",22017:"E0D2",22052:"E0D3",22051:"E0D4",22014:"E0D5",22016:"E0D6",22055:"E0D7",22061:"E0D8",22104:"E0D9",22073:"E0DA",22103:"E0DB",22060:"E0DC",22093:"E0DD",22114:"E0DE",22105:"E0DF",22108:"E0E0",22092:"E0E1",22100:"E0E2",22150:"E0E3",22116:"E0E4",22129:"E0E5",22123:"E0E6",22139:"E0E7",22140:"E0E8",22149:"E0E9",22163:"E0EA",22191:"E0EB",22228:"E0EC",22231:"E0ED",22237:"E0EE",22241:"E0EF",22261:"E0F0",22251:"E0F1",22265:"E0F2",22271:"E0F3",22276:"E0F4",22282:"E0F5",22281:"E0F6",22300:"E0F7",24079:"E0F8",24089:"E0F9",24084:"E0FA",24081:"E0FB",24113:"E0FC",24123:"E0FD",24124:"E0FE",24119:"E1A1",24132:"E1A2",24148:"E1A3",24155:"E1A4",24158:"E1A5",24161:"E1A6",23692:"E1A7",23674:"E1A8",23693:"E1A9",23696:"E1AA",23702:"E1AB",23688:"E1AC",23704:"E1AD",23705:"E1AE",23697:"E1AF",23706:"E1B0",23708:"E1B1",23733:"E1B2",23714:"E1B3",23741:"E1B4",23724:"E1B5",23723:"E1B6",23729:"E1B7",23715:"E1B8",23745:"E1B9",23735:"E1BA",23748:"E1BB",23762:"E1BC",23780:"E1BD",23755:"E1BE",23781:"E1BF",23810:"E1C0",23811:"E1C1",23847:"E1C2",23846:"E1C3",23854:"E1C4",23844:"E1C5",23838:"E1C6",23814:"E1C7",23835:"E1C8",23896:"E1C9",23870:"E1CA",23860:"E1CB",23869:"E1CC",23916:"E1CD",23899:"E1CE",23919:"E1CF",23901:"E1D0",23915:"E1D1",23883:"E1D2",23882:"E1D3",23913:"E1D4",23924:"E1D5",23938:"E1D6",23961:"E1D7",23965:"E1D8",35955:"E1D9",23991:"E1DA",24005:"E1DB",24435:"E1DC",24439:"E1DD",24450:"E1DE",24455:"E1DF",24457:"E1E0",24460:"E1E1",24469:"E1E2",24473:"E1E3",24476:"E1E4",24488:"E1E5",24493:"E1E6",24501:"E1E7",24508:"E1E8",34914:"E1E9",24417:"E1EA",29357:"E1EB",29360:"E1EC",29364:"E1ED",29367:"E1EE",29368:"E1EF",29379:"E1F0",29377:"E1F1",29390:"E1F2",29389:"E1F3",29394:"E1F4",29416:"E1F5",29423:"E1F6",29417:"E1F7",29426:"E1F8",29428:"E1F9",29431:"E1FA",29441:"E1FB",29427:"E1FC",29443:"E1FD",29434:"E1FE",29435:"E2A1",29463:"E2A2",29459:"E2A3",29473:"E2A4",29450:"E2A5",29470:"E2A6",29469:"E2A7",29461:"E2A8",29474:"E2A9",29497:"E2AA",29477:"E2AB",29484:"E2AC",29496:"E2AD",29489:"E2AE",29520:"E2AF",29517:"E2B0",29527:"E2B1",29536:"E2B2",29548:"E2B3",29551:"E2B4",29566:"E2B5",33307:"E2B6",22821:"E2B7",39143:"E2B8",22820:"E2B9",22786:"E2BA",39267:"E2BB",39271:"E2BC",39272:"E2BD",39273:"E2BE",39274:"E2BF",39275:"E2C0",39276:"E2C1",39284:"E2C2",39287:"E2C3",39293:"E2C4",39296:"E2C5",39300:"E2C6",39303:"E2C7",39306:"E2C8",39309:"E2C9",39312:"E2CA",39313:"E2CB",39315:"E2CC",39316:"E2CD",39317:"E2CE",24192:"E2CF",24209:"E2D0",24203:"E2D1",24214:"E2D2",24229:"E2D3",24224:"E2D4",24249:"E2D5",24245:"E2D6",24254:"E2D7",24243:"E2D8",36179:"E2D9",24274:"E2DA",24273:"E2DB",24283:"E2DC",24296:"E2DD",24298:"E2DE",33210:"E2DF",24516:"E2E0",24521:"E2E1",24534:"E2E2",24527:"E2E3",24579:"E2E4",24558:"E2E5",24580:"E2E6",24545:"E2E7",24548:"E2E8",24574:"E2E9",24581:"E2EA",24582:"E2EB",24554:"E2EC",24557:"E2ED",24568:"E2EE",24601:"E2EF",24629:"E2F0",24614:"E2F1",24603:"E2F2",24591:"E2F3",24589:"E2F4",24617:"E2F5",24619:"E2F6",24586:"E2F7",24639:"E2F8",24609:"E2F9",24696:"E2FA",24697:"E2FB",24699:"E2FC",24698:"E2FD",24642:"E2FE",24682:"E3A1",24701:"E3A2",24726:"E3A3",24730:"E3A4",24749:"E3A5",24733:"E3A6",24707:"E3A7",24722:"E3A8",24716:"E3A9",24731:"E3AA",24812:"E3AB",24763:"E3AC",24753:"E3AD",24797:"E3AE",24792:"E3AF",24774:"E3B0",24794:"E3B1",24756:"E3B2",24864:"E3B3",24870:"E3B4",24853:"E3B5",24867:"E3B6",24820:"E3B7",24832:"E3B8",24846:"E3B9",24875:"E3BA",24906:"E3BB",24949:"E3BC",25004:"E3BD",24980:"E3BE",24999:"E3BF",25015:"E3C0",25044:"E3C1",25077:"E3C2",24541:"E3C3",38579:"E3C4",38377:"E3C5",38379:"E3C6",38385:"E3C7",38387:"E3C8",38389:"E3C9",38390:"E3CA",38396:"E3CB",38398:"E3CC",38403:"E3CD",38404:"E3CE",38406:"E3CF",38408:"E3D0",38410:"E3D1",38411:"E3D2",38412:"E3D3",38413:"E3D4",38415:"E3D5",38418:"E3D6",38421:"E3D7",38422:"E3D8",38423:"E3D9",38425:"E3DA",38426:"E3DB",20012:"E3DC",29247:"E3DD",25109:"E3DE",27701:"E3DF",27732:"E3E0",27740:"E3E1",27722:"E3E2",27811:"E3E3",27781:"E3E4",27792:"E3E5",27796:"E3E6",27788:"E3E7",27752:"E3E8",27753:"E3E9",27764:"E3EA",27766:"E3EB",27782:"E3EC",27817:"E3ED",27856:"E3EE",27860:"E3EF",27821:"E3F0",27895:"E3F1",27896:"E3F2",27889:"E3F3",27863:"E3F4",27826:"E3F5",27872:"E3F6",27862:"E3F7",27898:"E3F8",27883:"E3F9",27886:"E3FA",27825:"E3FB",27859:"E3FC",27887:"E3FD",27902:"E3FE",27961:"E4A1",27943:"E4A2",27916:"E4A3",27971:"E4A4",27976:"E4A5",27911:"E4A6",27908:"E4A7",27929:"E4A8",27918:"E4A9",27947:"E4AA",27981:"E4AB",27950:"E4AC",27957:"E4AD",27930:"E4AE",27983:"E4AF",27986:"E4B0",27988:"E4B1",27955:"E4B2",28049:"E4B3",28015:"E4B4",28062:"E4B5",28064:"E4B6",27998:"E4B7",28051:"E4B8",28052:"E4B9",27996:"E4BA",28e3:"E4BB",28028:"E4BC",28003:"E4BD",28186:"E4BE",28103:"E4BF",28101:"E4C0",28126:"E4C1",28174:"E4C2",28095:"E4C3",28128:"E4C4",28177:"E4C5",28134:"E4C6",28125:"E4C7",28121:"E4C8",28182:"E4C9",28075:"E4CA",28172:"E4CB",28078:"E4CC",28203:"E4CD",28270:"E4CE",28238:"E4CF",28267:"E4D0",28338:"E4D1",28255:"E4D2",28294:"E4D3",28243:"E4D4",28244:"E4D5",28210:"E4D6",28197:"E4D7",28228:"E4D8",28383:"E4D9",28337:"E4DA",28312:"E4DB",28384:"E4DC",28461:"E4DD",28386:"E4DE",28325:"E4DF",28327:"E4E0",28349:"E4E1",28347:"E4E2",28343:"E4E3",28375:"E4E4",28340:"E4E5",28367:"E4E6",28303:"E4E7",28354:"E4E8",28319:"E4E9",28514:"E4EA",28486:"E4EB",28487:"E4EC",28452:"E4ED",28437:"E4EE",28409:"E4EF",28463:"E4F0",28470:"E4F1",28491:"E4F2",28532:"E4F3",28458:"E4F4",28425:"E4F5",28457:"E4F6",28553:"E4F7",28557:"E4F8",28556:"E4F9",28536:"E4FA",28530:"E4FB",28540:"E4FC",28538:"E4FD",28625:"E4FE",28617:"E5A1",28583:"E5A2",28601:"E5A3",28598:"E5A4",28610:"E5A5",28641:"E5A6",28654:"E5A7",28638:"E5A8",28640:"E5A9",28655:"E5AA",28698:"E5AB",28707:"E5AC",28699:"E5AD",28729:"E5AE",28725:"E5AF",28751:"E5B0",28766:"E5B1",23424:"E5B2",23428:"E5B3",23445:"E5B4",23443:"E5B5",23461:"E5B6",23480:"E5B7",29999:"E5B8",39582:"E5B9",25652:"E5BA",23524:"E5BB",23534:"E5BC",35120:"E5BD",23536:"E5BE",36423:"E5BF",35591:"E5C0",36790:"E5C1",36819:"E5C2",36821:"E5C3",36837:"E5C4",36846:"E5C5",36836:"E5C6",36841:"E5C7",36838:"E5C8",36851:"E5C9",36840:"E5CA",36869:"E5CB",36868:"E5CC",36875:"E5CD",36902:"E5CE",36881:"E5CF",36877:"E5D0",36886:"E5D1",36897:"E5D2",36917:"E5D3",36918:"E5D4",36909:"E5D5",36911:"E5D6",36932:"E5D7",36945:"E5D8",36946:"E5D9",36944:"E5DA",36968:"E5DB",36952:"E5DC",36962:"E5DD",36955:"E5DE",26297:"E5DF",36980:"E5E0",36989:"E5E1",36994:"E5E2",37e3:"E5E3",36995:"E5E4",37003:"E5E5",24400:"E5E6",24407:"E5E7",24406:"E5E8",24408:"E5E9",23611:"E5EA",21675:"E5EB",23632:"E5EC",23641:"E5ED",23409:"E5EE",23651:"E5EF",23654:"E5F0",32700:"E5F1",24362:"E5F2",24361:"E5F3",24365:"E5F4",33396:"E5F5",24380:"E5F6",39739:"E5F7",23662:"E5F8",22913:"E5F9",22915:"E5FA",22925:"E5FB",22953:"E5FC",22954:"E5FD",22947:"E5FE",22935:"E6A1",22986:"E6A2",22955:"E6A3",22942:"E6A4",22948:"E6A5",22994:"E6A6",22962:"E6A7",22959:"E6A8",22999:"E6A9",22974:"E6AA",23045:"E6AB",23046:"E6AC",23005:"E6AD",23048:"E6AE",23011:"E6AF",23e3:"E6B0",23033:"E6B1",23052:"E6B2",23049:"E6B3",23090:"E6B4",23092:"E6B5",23057:"E6B6",23075:"E6B7",23059:"E6B8",23104:"E6B9",23143:"E6BA",23114:"E6BB",23125:"E6BC",23100:"E6BD",23138:"E6BE",23157:"E6BF",33004:"E6C0",23210:"E6C1",23195:"E6C2",23159:"E6C3",23162:"E6C4",23230:"E6C5",23275:"E6C6",23218:"E6C7",23250:"E6C8",23252:"E6C9",23224:"E6CA",23264:"E6CB",23267:"E6CC",23281:"E6CD",23254:"E6CE",23270:"E6CF",23256:"E6D0",23260:"E6D1",23305:"E6D2",23319:"E6D3",23318:"E6D4",23346:"E6D5",23351:"E6D6",23360:"E6D7",23573:"E6D8",23580:"E6D9",23386:"E6DA",23397:"E6DB",23411:"E6DC",23377:"E6DD",23379:"E6DE",23394:"E6DF",39541:"E6E0",39543:"E6E1",39544:"E6E2",39546:"E6E3",39551:"E6E4",39549:"E6E5",39552:"E6E6",39553:"E6E7",39557:"E6E8",39560:"E6E9",39562:"E6EA",39568:"E6EB",39570:"E6EC",39571:"E6ED",39574:"E6EE",39576:"E6EF",39579:"E6F0",39580:"E6F1",39581:"E6F2",39583:"E6F3",39584:"E6F4",39586:"E6F5",39587:"E6F6",39589:"E6F7",39591:"E6F8",32415:"E6F9",32417:"E6FA",32419:"E6FB",32421:"E6FC",32424:"E6FD",32425:"E6FE",32429:"E7A1",32432:"E7A2",32446:"E7A3",32448:"E7A4",32449:"E7A5",32450:"E7A6",32457:"E7A7",32459:"E7A8",32460:"E7A9",32464:"E7AA",32468:"E7AB",32471:"E7AC",32475:"E7AD",32480:"E7AE",32481:"E7AF",32488:"E7B0",32491:"E7B1",32494:"E7B2",32495:"E7B3",32497:"E7B4",32498:"E7B5",32525:"E7B6",32502:"E7B7",32506:"E7B8",32507:"E7B9",32510:"E7BA",32513:"E7BB",32514:"E7BC",32515:"E7BD",32519:"E7BE",32520:"E7BF",32523:"E7C0",32524:"E7C1",32527:"E7C2",32529:"E7C3",32530:"E7C4",32535:"E7C5",32537:"E7C6",32540:"E7C7",32539:"E7C8",32543:"E7C9",32545:"E7CA",32546:"E7CB",32547:"E7CC",32548:"E7CD",32549:"E7CE",32550:"E7CF",32551:"E7D0",32554:"E7D1",32555:"E7D2",32556:"E7D3",32557:"E7D4",32559:"E7D5",32560:"E7D6",32561:"E7D7",32562:"E7D8",32563:"E7D9",32565:"E7DA",24186:"E7DB",30079:"E7DC",24027:"E7DD",30014:"E7DE",37013:"E7DF",29582:"E7E0",29585:"E7E1",29614:"E7E2",29602:"E7E3",29599:"E7E4",29647:"E7E5",29634:"E7E6",29649:"E7E7",29623:"E7E8",29619:"E7E9",29632:"E7EA",29641:"E7EB",29640:"E7EC",29669:"E7ED",29657:"E7EE",39036:"E7EF",29706:"E7F0",29673:"E7F1",29671:"E7F2",29662:"E7F3",29626:"E7F4",29682:"E7F5",29711:"E7F6",29738:"E7F7",29787:"E7F8",29734:"E7F9",29733:"E7FA",29736:"E7FB",29744:"E7FC",29742:"E7FD",29740:"E7FE",29723:"E8A1",29722:"E8A2",29761:"E8A3",29788:"E8A4",29783:"E8A5",29781:"E8A6",29785:"E8A7",29815:"E8A8",29805:"E8A9",29822:"E8AA",29852:"E8AB",29838:"E8AC",29824:"E8AD",29825:"E8AE",29831:"E8AF",29835:"E8B0",29854:"E8B1",29864:"E8B2",29865:"E8B3",29840:"E8B4",29863:"E8B5",29906:"E8B6",29882:"E8B7",38890:"E8B8",38891:"E8B9",38892:"E8BA",26444:"E8BB",26451:"E8BC",26462:"E8BD",26440:"E8BE",26473:"E8BF",26533:"E8C0",26503:"E8C1",26474:"E8C2",26483:"E8C3",26520:"E8C4",26535:"E8C5",26485:"E8C6",26536:"E8C7",26526:"E8C8",26541:"E8C9",26507:"E8CA",26487:"E8CB",26492:"E8CC",26608:"E8CD",26633:"E8CE",26584:"E8CF",26634:"E8D0",26601:"E8D1",26544:"E8D2",26636:"E8D3",26585:"E8D4",26549:"E8D5",26586:"E8D6",26547:"E8D7",26589:"E8D8",26624:"E8D9",26563:"E8DA",26552:"E8DB",26594:"E8DC",26638:"E8DD",26561:"E8DE",26621:"E8DF",26674:"E8E0",26675:"E8E1",26720:"E8E2",26721:"E8E3",26702:"E8E4",26722:"E8E5",26692:"E8E6",26724:"E8E7",26755:"E8E8",26653:"E8E9",26709:"E8EA",26726:"E8EB",26689:"E8EC",26727:"E8ED",26688:"E8EE",26686:"E8EF",26698:"E8F0",26697:"E8F1",26665:"E8F2",26805:"E8F3",26767:"E8F4",26740:"E8F5",26743:"E8F6",26771:"E8F7",26731:"E8F8",26818:"E8F9",26990:"E8FA",26876:"E8FB",26911:"E8FC",26912:"E8FD",26873:"E8FE",26916:"E9A1",26864:"E9A2",26891:"E9A3",26881:"E9A4",26967:"E9A5",26851:"E9A6",26896:"E9A7",26993:"E9A8",26937:"E9A9",26976:"E9AA",26946:"E9AB",26973:"E9AC",27012:"E9AD",26987:"E9AE",27008:"E9AF",27032:"E9B0",27e3:"E9B1",26932:"E9B2",27084:"E9B3",27015:"E9B4",27016:"E9B5",27086:"E9B6",27017:"E9B7",26982:"E9B8",26979:"E9B9",27001:"E9BA",27035:"E9BB",27047:"E9BC",27067:"E9BD",27051:"E9BE",27053:"E9BF",27092:"E9C0",27057:"E9C1",27073:"E9C2",27082:"E9C3",27103:"E9C4",27029:"E9C5",27104:"E9C6",27021:"E9C7",27135:"E9C8",27183:"E9C9",27117:"E9CA",27159:"E9CB",27160:"E9CC",27237:"E9CD",27122:"E9CE",27204:"E9CF",27198:"E9D0",27296:"E9D1",27216:"E9D2",27227:"E9D3",27189:"E9D4",27278:"E9D5",27257:"E9D6",27197:"E9D7",27176:"E9D8",27224:"E9D9",27260:"E9DA",27281:"E9DB",27280:"E9DC",27305:"E9DD",27287:"E9DE",27307:"E9DF",29495:"E9E0",29522:"E9E1",27521:"E9E2",27522:"E9E3",27527:"E9E4",27524:"E9E5",27538:"E9E6",27539:"E9E7",27533:"E9E8",27546:"E9E9",27547:"E9EA",27553:"E9EB",27562:"E9EC",36715:"E9ED",36717:"E9EE",36721:"E9EF",36722:"E9F0",36723:"E9F1",36725:"E9F2",36726:"E9F3",36728:"E9F4",36727:"E9F5",36729:"E9F6",36730:"E9F7",36732:"E9F8",36734:"E9F9",36737:"E9FA",36738:"E9FB",36740:"E9FC",36743:"E9FD",36747:"E9FE",36749:"EAA1",36750:"EAA2",36751:"EAA3",36760:"EAA4",36762:"EAA5",36558:"EAA6",25099:"EAA7",25111:"EAA8",25115:"EAA9",25119:"EAAA",25122:"EAAB",25121:"EAAC",25125:"EAAD",25124:"EAAE",25132:"EAAF",33255:"EAB0",29935:"EAB1",29940:"EAB2",29951:"EAB3",29967:"EAB4",29969:"EAB5",29971:"EAB6",25908:"EAB7",26094:"EAB8",26095:"EAB9",26096:"EABA",26122:"EABB",26137:"EABC",26482:"EABD",26115:"EABE",26133:"EABF",26112:"EAC0",28805:"EAC1",26359:"EAC2",26141:"EAC3",26164:"EAC4",26161:"EAC5",26166:"EAC6",26165:"EAC7",32774:"EAC8",26207:"EAC9",26196:"EACA",26177:"EACB",26191:"EACC",26198:"EACD",26209:"EACE",26199:"EACF",26231:"EAD0",26244:"EAD1",26252:"EAD2",26279:"EAD3",26269:"EAD4",26302:"EAD5",26331:"EAD6",26332:"EAD7",26342:"EAD8",26345:"EAD9",36146:"EADA",36147:"EADB",36150:"EADC",36155:"EADD",36157:"EADE",36160:"EADF",36165:"EAE0",36166:"EAE1",36168:"EAE2",36169:"EAE3",36167:"EAE4",36173:"EAE5",36181:"EAE6",36185:"EAE7",35271:"EAE8",35274:"EAE9",35275:"EAEA",35276:"EAEB",35278:"EAEC",35279:"EAED",35280:"EAEE",35281:"EAEF",29294:"EAF0",29343:"EAF1",29277:"EAF2",29286:"EAF3",29295:"EAF4",29310:"EAF5",29311:"EAF6",29316:"EAF7",29323:"EAF8",29325:"EAF9",29327:"EAFA",29330:"EAFB",25352:"EAFC",25394:"EAFD",25520:"EAFE",25663:"EBA1",25816:"EBA2",32772:"EBA3",27626:"EBA4",27635:"EBA5",27645:"EBA6",27637:"EBA7",27641:"EBA8",27653:"EBA9",27655:"EBAA",27654:"EBAB",27661:"EBAC",27669:"EBAD",27672:"EBAE",27673:"EBAF",27674:"EBB0",27681:"EBB1",27689:"EBB2",27684:"EBB3",27690:"EBB4",27698:"EBB5",25909:"EBB6",25941:"EBB7",25963:"EBB8",29261:"EBB9",29266:"EBBA",29270:"EBBB",29232:"EBBC",34402:"EBBD",21014:"EBBE",32927:"EBBF",32924:"EBC0",32915:"EBC1",32956:"EBC2",26378:"EBC3",32957:"EBC4",32945:"EBC5",32939:"EBC6",32941:"EBC7",32948:"EBC8",32951:"EBC9",32999:"EBCA",33e3:"EBCB",33001:"EBCC",33002:"EBCD",32987:"EBCE",32962:"EBCF",32964:"EBD0",32985:"EBD1",32973:"EBD2",32983:"EBD3",26384:"EBD4",32989:"EBD5",33003:"EBD6",33009:"EBD7",33012:"EBD8",33005:"EBD9",33037:"EBDA",33038:"EBDB",33010:"EBDC",33020:"EBDD",26389:"EBDE",33042:"EBDF",35930:"EBE0",33078:"EBE1",33054:"EBE2",33068:"EBE3",33048:"EBE4",33074:"EBE5",33096:"EBE6",33100:"EBE7",33107:"EBE8",33140:"EBE9",33113:"EBEA",33114:"EBEB",33137:"EBEC",33120:"EBED",33129:"EBEE",33148:"EBEF",33149:"EBF0",33133:"EBF1",33127:"EBF2",22605:"EBF3",23221:"EBF4",33160:"EBF5",33154:"EBF6",33169:"EBF7",28373:"EBF8",33187:"EBF9",33194:"EBFA",33228:"EBFB",26406:"EBFC",33226:"EBFD",33211:"EBFE",33217:"ECA1",33190:"ECA2",27428:"ECA3",27447:"ECA4",27449:"ECA5",27459:"ECA6",27462:"ECA7",27481:"ECA8",39121:"ECA9",39122:"ECAA",39123:"ECAB",39125:"ECAC",39129:"ECAD",39130:"ECAE",27571:"ECAF",24384:"ECB0",27586:"ECB1",35315:"ECB2",26e3:"ECB3",40785:"ECB4",26003:"ECB5",26044:"ECB6",26054:"ECB7",26052:"ECB8",26051:"ECB9",26060:"ECBA",26062:"ECBB",26066:"ECBC",26070:"ECBD",28800:"ECBE",28828:"ECBF",28822:"ECC0",28829:"ECC1",28859:"ECC2",28864:"ECC3",28855:"ECC4",28843:"ECC5",28849:"ECC6",28904:"ECC7",28874:"ECC8",28944:"ECC9",28947:"ECCA",28950:"ECCB",28975:"ECCC",28977:"ECCD",29043:"ECCE",29020:"ECCF",29032:"ECD0",28997:"ECD1",29042:"ECD2",29002:"ECD3",29048:"ECD4",29050:"ECD5",29080:"ECD6",29107:"ECD7",29109:"ECD8",29096:"ECD9",29088:"ECDA",29152:"ECDB",29140:"ECDC",29159:"ECDD",29177:"ECDE",29213:"ECDF",29224:"ECE0",28780:"ECE1",28952:"ECE2",29030:"ECE3",29113:"ECE4",25150:"ECE5",25149:"ECE6",25155:"ECE7",25160:"ECE8",25161:"ECE9",31035:"ECEA",31040:"ECEB",31046:"ECEC",31049:"ECED",31067:"ECEE",31068:"ECEF",31059:"ECF0",31066:"ECF1",31074:"ECF2",31063:"ECF3",31072:"ECF4",31087:"ECF5",31079:"ECF6",31098:"ECF7",31109:"ECF8",31114:"ECF9",31130:"ECFA",31143:"ECFB",31155:"ECFC",24529:"ECFD",24528:"ECFE",24636:"EDA1",24669:"EDA2",24666:"EDA3",24679:"EDA4",24641:"EDA5",24665:"EDA6",24675:"EDA7",24747:"EDA8",24838:"EDA9",24845:"EDAA",24925:"EDAB",25001:"EDAC",24989:"EDAD",25035:"EDAE",25041:"EDAF",25094:"EDB0",32896:"EDB1",32895:"EDB2",27795:"EDB3",27894:"EDB4",28156:"EDB5",30710:"EDB6",30712:"EDB7",30720:"EDB8",30729:"EDB9",30743:"EDBA",30744:"EDBB",30737:"EDBC",26027:"EDBD",30765:"EDBE",30748:"EDBF",30749:"EDC0",30777:"EDC1",30778:"EDC2",30779:"EDC3",30751:"EDC4",30780:"EDC5",30757:"EDC6",30764:"EDC7",30755:"EDC8",30761:"EDC9",30798:"EDCA",30829:"EDCB",30806:"EDCC",30807:"EDCD",30758:"EDCE",30800:"EDCF",30791:"EDD0",30796:"EDD1",30826:"EDD2",30875:"EDD3",30867:"EDD4",30874:"EDD5",30855:"EDD6",30876:"EDD7",30881:"EDD8",30883:"EDD9",30898:"EDDA",30905:"EDDB",30885:"EDDC",30932:"EDDD",30937:"EDDE",30921:"EDDF",30956:"EDE0",30962:"EDE1",30981:"EDE2",30964:"EDE3",30995:"EDE4",31012:"EDE5",31006:"EDE6",31028:"EDE7",40859:"EDE8",40697:"EDE9",40699:"EDEA",40700:"EDEB",30449:"EDEC",30468:"EDED",30477:"EDEE",30457:"EDEF",30471:"EDF0",30472:"EDF1",30490:"EDF2",30498:"EDF3",30489:"EDF4",30509:"EDF5",30502:"EDF6",30517:"EDF7",30520:"EDF8",30544:"EDF9",30545:"EDFA",30535:"EDFB",30531:"EDFC",30554:"EDFD",30568:"EDFE",30562:"EEA1",30565:"EEA2",30591:"EEA3",30605:"EEA4",30589:"EEA5",30592:"EEA6",30604:"EEA7",30609:"EEA8",30623:"EEA9",30624:"EEAA",30640:"EEAB",30645:"EEAC",30653:"EEAD",30010:"EEAE",30016:"EEAF",30030:"EEB0",30027:"EEB1",30024:"EEB2",30043:"EEB3",30066:"EEB4",30073:"EEB5",30083:"EEB6",32600:"EEB7",32609:"EEB8",32607:"EEB9",35400:"EEBA",32616:"EEBB",32628:"EEBC",32625:"EEBD",32633:"EEBE",32641:"EEBF",32638:"EEC0",30413:"EEC1",30437:"EEC2",34866:"EEC3",38021:"EEC4",38022:"EEC5",38023:"EEC6",38027:"EEC7",38026:"EEC8",38028:"EEC9",38029:"EECA",38031:"EECB",38032:"EECC",38036:"EECD",38039:"EECE",38037:"EECF",38042:"EED0",38043:"EED1",38044:"EED2",38051:"EED3",38052:"EED4",38059:"EED5",38058:"EED6",38061:"EED7",38060:"EED8",38063:"EED9",38064:"EEDA",38066:"EEDB",38068:"EEDC",38070:"EEDD",38071:"EEDE",38072:"EEDF",38073:"EEE0",38074:"EEE1",38076:"EEE2",38077:"EEE3",38079:"EEE4",38084:"EEE5",38088:"EEE6",38089:"EEE7",38090:"EEE8",38091:"EEE9",38092:"EEEA",38093:"EEEB",38094:"EEEC",38096:"EEED",38097:"EEEE",38098:"EEEF",38101:"EEF0",38102:"EEF1",38103:"EEF2",38105:"EEF3",38104:"EEF4",38107:"EEF5",38110:"EEF6",38111:"EEF7",38112:"EEF8",38114:"EEF9",38116:"EEFA",38117:"EEFB",38119:"EEFC",38120:"EEFD",38122:"EEFE",38121:"EFA1",38123:"EFA2",38126:"EFA3",38127:"EFA4",38131:"EFA5",38132:"EFA6",38133:"EFA7",38135:"EFA8",38137:"EFA9",38140:"EFAA",38141:"EFAB",38143:"EFAC",38147:"EFAD",38146:"EFAE",38150:"EFAF",38151:"EFB0",38153:"EFB1",38154:"EFB2",38157:"EFB3",38158:"EFB4",38159:"EFB5",38162:"EFB6",38163:"EFB7",38164:"EFB8",38165:"EFB9",38166:"EFBA",38168:"EFBB",38171:"EFBC",38173:"EFBD",38174:"EFBE",38175:"EFBF",38178:"EFC0",38186:"EFC1",38187:"EFC2",38185:"EFC3",38188:"EFC4",38193:"EFC5",38194:"EFC6",38196:"EFC7",38198:"EFC8",38199:"EFC9",38200:"EFCA",38204:"EFCB",38206:"EFCC",38207:"EFCD",38210:"EFCE",38197:"EFCF",38212:"EFD0",38213:"EFD1",38214:"EFD2",38217:"EFD3",38220:"EFD4",38222:"EFD5",38223:"EFD6",38226:"EFD7",38227:"EFD8",38228:"EFD9",38230:"EFDA",38231:"EFDB",38232:"EFDC",38233:"EFDD",38235:"EFDE",38238:"EFDF",38239:"EFE0",38237:"EFE1",38241:"EFE2",38242:"EFE3",38244:"EFE4",38245:"EFE5",38246:"EFE6",38247:"EFE7",38248:"EFE8",38249:"EFE9",38250:"EFEA",38251:"EFEB",38252:"EFEC",38255:"EFED",38257:"EFEE",38258:"EFEF",38259:"EFF0",38202:"EFF1",30695:"EFF2",30700:"EFF3",38601:"EFF4",31189:"EFF5",31213:"EFF6",31203:"EFF7",31211:"EFF8",31238:"EFF9",23879:"EFFA",31235:"EFFB",31234:"EFFC",31262:"EFFD",31252:"EFFE",31289:"F0A1",31287:"F0A2",31313:"F0A3",40655:"F0A4",39333:"F0A5",31344:"F0A6",30344:"F0A7",30350:"F0A8",30355:"F0A9",30361:"F0AA",30372:"F0AB",29918:"F0AC",29920:"F0AD",29996:"F0AE",40480:"F0AF",40482:"F0B0",40488:"F0B1",40489:"F0B2",40490:"F0B3",40491:"F0B4",40492:"F0B5",40498:"F0B6",40497:"F0B7",40502:"F0B8",40504:"F0B9",40503:"F0BA",40505:"F0BB",40506:"F0BC",40510:"F0BD",40513:"F0BE",40514:"F0BF",40516:"F0C0",40518:"F0C1",40519:"F0C2",40520:"F0C3",40521:"F0C4",40523:"F0C5",40524:"F0C6",40526:"F0C7",40529:"F0C8",40533:"F0C9",40535:"F0CA",40538:"F0CB",40539:"F0CC",40540:"F0CD",40542:"F0CE",40547:"F0CF",40550:"F0D0",40551:"F0D1",40552:"F0D2",40553:"F0D3",40554:"F0D4",40555:"F0D5",40556:"F0D6",40561:"F0D7",40557:"F0D8",40563:"F0D9",30098:"F0DA",30100:"F0DB",30102:"F0DC",30112:"F0DD",30109:"F0DE",30124:"F0DF",30115:"F0E0",30131:"F0E1",30132:"F0E2",30136:"F0E3",30148:"F0E4",30129:"F0E5",30128:"F0E6",30147:"F0E7",30146:"F0E8",30166:"F0E9",30157:"F0EA",30179:"F0EB",30184:"F0EC",30182:"F0ED",30180:"F0EE",30187:"F0EF",30183:"F0F0",30211:"F0F1",30193:"F0F2",30204:"F0F3",30207:"F0F4",30224:"F0F5",30208:"F0F6",30213:"F0F7",30220:"F0F8",30231:"F0F9",30218:"F0FA",30245:"F0FB",30232:"F0FC",30229:"F0FD",30233:"F0FE",30235:"F1A1",30268:"F1A2",30242:"F1A3",30240:"F1A4",30272:"F1A5",30253:"F1A6",30256:"F1A7",30271:"F1A8",30261:"F1A9",30275:"F1AA",30270:"F1AB",30259:"F1AC",30285:"F1AD",30302:"F1AE",30292:"F1AF",30300:"F1B0",30294:"F1B1",30315:"F1B2",30319:"F1B3",32714:"F1B4",31462:"F1B5",31352:"F1B6",31353:"F1B7",31360:"F1B8",31366:"F1B9",31368:"F1BA",31381:"F1BB",31398:"F1BC",31392:"F1BD",31404:"F1BE",31400:"F1BF",31405:"F1C0",31411:"F1C1",34916:"F1C2",34921:"F1C3",34930:"F1C4",34941:"F1C5",34943:"F1C6",34946:"F1C7",34978:"F1C8",35014:"F1C9",34999:"F1CA",35004:"F1CB",35017:"F1CC",35042:"F1CD",35022:"F1CE",35043:"F1CF",35045:"F1D0",35057:"F1D1",35098:"F1D2",35068:"F1D3",35048:"F1D4",35070:"F1D5",35056:"F1D6",35105:"F1D7",35097:"F1D8",35091:"F1D9",35099:"F1DA",35082:"F1DB",35124:"F1DC",35115:"F1DD",35126:"F1DE",35137:"F1DF",35174:"F1E0",35195:"F1E1",30091:"F1E2",32997:"F1E3",30386:"F1E4",30388:"F1E5",30684:"F1E6",32786:"F1E7",32788:"F1E8",32790:"F1E9",32796:"F1EA",32800:"F1EB",32802:"F1EC",32805:"F1ED",32806:"F1EE",32807:"F1EF",32809:"F1F0",32808:"F1F1",32817:"F1F2",32779:"F1F3",32821:"F1F4",32835:"F1F5",32838:"F1F6",32845:"F1F7",32850:"F1F8",32873:"F1F9",32881:"F1FA",35203:"F1FB",39032:"F1FC",39040:"F1FD",39043:"F1FE",39049:"F2A1",39052:"F2A2",39053:"F2A3",39055:"F2A4",39060:"F2A5",39066:"F2A6",39067:"F2A7",39070:"F2A8",39071:"F2A9",39073:"F2AA",39074:"F2AB",39077:"F2AC",39078:"F2AD",34381:"F2AE",34388:"F2AF",34412:"F2B0",34414:"F2B1",34431:"F2B2",34426:"F2B3",34428:"F2B4",34427:"F2B5",34472:"F2B6",34445:"F2B7",34443:"F2B8",34476:"F2B9",34461:"F2BA",34471:"F2BB",34467:"F2BC",34474:"F2BD",34451:"F2BE",34473:"F2BF",34486:"F2C0",34500:"F2C1",34485:"F2C2",34510:"F2C3",34480:"F2C4",34490:"F2C5",34481:"F2C6",34479:"F2C7",34505:"F2C8",34511:"F2C9",34484:"F2CA",34537:"F2CB",34545:"F2CC",34546:"F2CD",34541:"F2CE",34547:"F2CF",34512:"F2D0",34579:"F2D1",34526:"F2D2",34548:"F2D3",34527:"F2D4",34520:"F2D5",34513:"F2D6",34563:"F2D7",34567:"F2D8",34552:"F2D9",34568:"F2DA",34570:"F2DB",34573:"F2DC",34569:"F2DD",34595:"F2DE",34619:"F2DF",34590:"F2E0",34597:"F2E1",34606:"F2E2",34586:"F2E3",34622:"F2E4",34632:"F2E5",34612:"F2E6",34609:"F2E7",34601:"F2E8",34615:"F2E9",34623:"F2EA",34690:"F2EB",34594:"F2EC",34685:"F2ED",34686:"F2EE",34683:"F2EF",34656:"F2F0",34672:"F2F1",34636:"F2F2",34670:"F2F3",34699:"F2F4",34643:"F2F5",34659:"F2F6",34684:"F2F7",34660:"F2F8",34649:"F2F9",34661:"F2FA",34707:"F2FB",34735:"F2FC",34728:"F2FD",34770:"F2FE",34758:"F3A1",34696:"F3A2",34693:"F3A3",34733:"F3A4",34711:"F3A5",34691:"F3A6",34731:"F3A7",34789:"F3A8",34732:"F3A9",34741:"F3AA",34739:"F3AB",34763:"F3AC",34771:"F3AD",34749:"F3AE",34769:"F3AF",34752:"F3B0",34762:"F3B1",34779:"F3B2",34794:"F3B3",34784:"F3B4",34798:"F3B5",34838:"F3B6",34835:"F3B7",34814:"F3B8",34826:"F3B9",34843:"F3BA",34849:"F3BB",34873:"F3BC",34876:"F3BD",32566:"F3BE",32578:"F3BF",32580:"F3C0",32581:"F3C1",33296:"F3C2",31482:"F3C3",31485:"F3C4",31496:"F3C5",31491:"F3C6",31492:"F3C7",31509:"F3C8",31498:"F3C9",31531:"F3CA",31503:"F3CB",31559:"F3CC",31544:"F3CD",31530:"F3CE",31513:"F3CF",31534:"F3D0",31537:"F3D1",31520:"F3D2",31525:"F3D3",31524:"F3D4",31539:"F3D5",31550:"F3D6",31518:"F3D7",31576:"F3D8",31578:"F3D9",31557:"F3DA",31605:"F3DB",31564:"F3DC",31581:"F3DD",31584:"F3DE",31598:"F3DF",31611:"F3E0",31586:"F3E1",31602:"F3E2",31601:"F3E3",31632:"F3E4",31654:"F3E5",31655:"F3E6",31672:"F3E7",31660:"F3E8",31645:"F3E9",31656:"F3EA",31621:"F3EB",31658:"F3EC",31644:"F3ED",31650:"F3EE",31659:"F3EF",31668:"F3F0",31697:"F3F1",31681:"F3F2",31692:"F3F3",31709:"F3F4",31706:"F3F5",31717:"F3F6",31718:"F3F7",31722:"F3F8",31756:"F3F9",31742:"F3FA",31740:"F3FB",31759:"F3FC",31766:"F3FD",31755:"F3FE",31775:"F4A1",31786:"F4A2",31782:"F4A3",31800:"F4A4",31809:"F4A5",31808:"F4A6",33278:"F4A7",33281:"F4A8",33282:"F4A9",33284:"F4AA",33260:"F4AB",34884:"F4AC",33313:"F4AD",33314:"F4AE",33315:"F4AF",33325:"F4B0",33327:"F4B1",33320:"F4B2",33323:"F4B3",33336:"F4B4",33339:"F4B5",33331:"F4B6",33332:"F4B7",33342:"F4B8",33348:"F4B9",33353:"F4BA",33355:"F4BB",33359:"F4BC",33370:"F4BD",33375:"F4BE",33384:"F4BF",34942:"F4C0",34949:"F4C1",34952:"F4C2",35032:"F4C3",35039:"F4C4",35166:"F4C5",32669:"F4C6",32671:"F4C7",32679:"F4C8",32687:"F4C9",32688:"F4CA",32690:"F4CB",31868:"F4CC",25929:"F4CD",31889:"F4CE",31901:"F4CF",31900:"F4D0",31902:"F4D1",31906:"F4D2",31922:"F4D3",31932:"F4D4",31933:"F4D5",31937:"F4D6",31943:"F4D7",31948:"F4D8",31949:"F4D9",31944:"F4DA",31941:"F4DB",31959:"F4DC",31976:"F4DD",33390:"F4DE",26280:"F4DF",32703:"F4E0",32718:"F4E1",32725:"F4E2",32741:"F4E3",32737:"F4E4",32742:"F4E5",32745:"F4E6",32750:"F4E7",32755:"F4E8",31992:"F4E9",32119:"F4EA",32166:"F4EB",32174:"F4EC",32327:"F4ED",32411:"F4EE",40632:"F4EF",40628:"F4F0",36211:"F4F1",36228:"F4F2",36244:"F4F3",36241:"F4F4",36273:"F4F5",36199:"F4F6",36205:"F4F7",35911:"F4F8",35913:"F4F9",37194:"F4FA",37200:"F4FB",37198:"F4FC",37199:"F4FD",37220:"F4FE",37218:"F5A1",37217:"F5A2",37232:"F5A3",37225:"F5A4",37231:"F5A5",37245:"F5A6",37246:"F5A7",37234:"F5A8",37236:"F5A9",37241:"F5AA",37260:"F5AB",37253:"F5AC",37264:"F5AD",37261:"F5AE",37265:"F5AF",37282:"F5B0",37283:"F5B1",37290:"F5B2",37293:"F5B3",37294:"F5B4",37295:"F5B5",37301:"F5B6",37300:"F5B7",37306:"F5B8",35925:"F5B9",40574:"F5BA",36280:"F5BB",36331:"F5BC",36357:"F5BD",36441:"F5BE",36457:"F5BF",36277:"F5C0",36287:"F5C1",36284:"F5C2",36282:"F5C3",36292:"F5C4",36310:"F5C5",36311:"F5C6",36314:"F5C7",36318:"F5C8",36302:"F5C9",36303:"F5CA",36315:"F5CB",36294:"F5CC",36332:"F5CD",36343:"F5CE",36344:"F5CF",36323:"F5D0",36345:"F5D1",36347:"F5D2",36324:"F5D3",36361:"F5D4",36349:"F5D5",36372:"F5D6",36381:"F5D7",36383:"F5D8",36396:"F5D9",36398:"F5DA",36387:"F5DB",36399:"F5DC",36410:"F5DD",36416:"F5DE",36409:"F5DF",36405:"F5E0",36413:"F5E1",36401:"F5E2",36425:"F5E3",36417:"F5E4",36418:"F5E5",36433:"F5E6",36434:"F5E7",36426:"F5E8",36464:"F5E9",36470:"F5EA",36476:"F5EB",36463:"F5EC",36468:"F5ED",36485:"F5EE",36495:"F5EF",36500:"F5F0",36496:"F5F1",36508:"F5F2",36510:"F5F3",35960:"F5F4",35970:"F5F5",35978:"F5F6",35973:"F5F7",35992:"F5F8",35988:"F5F9",26011:"F5FA",35286:"F5FB",35294:"F5FC",35290:"F5FD",35292:"F5FE",35301:"F6A1",35307:"F6A2",35311:"F6A3",35390:"F6A4",35622:"F6A5",38739:"F6A6",38633:"F6A7",38643:"F6A8",38639:"F6A9",38662:"F6AA",38657:"F6AB",38664:"F6AC",38671:"F6AD",38670:"F6AE",38698:"F6AF",38701:"F6B0",38704:"F6B1",38718:"F6B2",40832:"F6B3",40835:"F6B4",40837:"F6B5",40838:"F6B6",40839:"F6B7",40840:"F6B8",40841:"F6B9",40842:"F6BA",40844:"F6BB",40702:"F6BC",40715:"F6BD",40717:"F6BE",38585:"F6BF",38588:"F6C0",38589:"F6C1",38606:"F6C2",38610:"F6C3",30655:"F6C4",38624:"F6C5",37518:"F6C6",37550:"F6C7",37576:"F6C8",37694:"F6C9",37738:"F6CA",37834:"F6CB",37775:"F6CC",37950:"F6CD",37995:"F6CE",40063:"F6CF",40066:"F6D0",40069:"F6D1",40070:"F6D2",40071:"F6D3",40072:"F6D4",31267:"F6D5",40075:"F6D6",40078:"F6D7",40080:"F6D8",40081:"F6D9",40082:"F6DA",40084:"F6DB",40085:"F6DC",40090:"F6DD",40091:"F6DE",40094:"F6DF",40095:"F6E0",40096:"F6E1",40097:"F6E2",40098:"F6E3",40099:"F6E4",40101:"F6E5",40102:"F6E6",40103:"F6E7",40104:"F6E8",40105:"F6E9",40107:"F6EA",40109:"F6EB",40110:"F6EC",40112:"F6ED",40113:"F6EE",40114:"F6EF",40115:"F6F0",40116:"F6F1",40117:"F6F2",40118:"F6F3",40119:"F6F4",40122:"F6F5",40123:"F6F6",40124:"F6F7",40125:"F6F8",40132:"F6F9",40133:"F6FA",40134:"F6FB",40135:"F6FC",40138:"F6FD",40139:"F6FE",40140:"F7A1",40141:"F7A2",40142:"F7A3",40143:"F7A4",40144:"F7A5",40147:"F7A6",40148:"F7A7",40149:"F7A8",40151:"F7A9",40152:"F7AA",40153:"F7AB",40156:"F7AC",40157:"F7AD",40159:"F7AE",40162:"F7AF",38780:"F7B0",38789:"F7B1",38801:"F7B2",38802:"F7B3",38804:"F7B4",38831:"F7B5",38827:"F7B6",38819:"F7B7",38834:"F7B8",38836:"F7B9",39601:"F7BA",39600:"F7BB",39607:"F7BC",40536:"F7BD",39606:"F7BE",39610:"F7BF",39612:"F7C0",39617:"F7C1",39616:"F7C2",39621:"F7C3",39618:"F7C4",39627:"F7C5",39628:"F7C6",39633:"F7C7",39749:"F7C8",39747:"F7C9",39751:"F7CA",39753:"F7CB",39752:"F7CC",39757:"F7CD",39761:"F7CE",39144:"F7CF",39181:"F7D0",39214:"F7D1",39253:"F7D2",39252:"F7D3",39647:"F7D4",39649:"F7D5",39654:"F7D6",39663:"F7D7",39659:"F7D8",39675:"F7D9",39661:"F7DA",39673:"F7DB",39688:"F7DC",39695:"F7DD",39699:"F7DE",39711:"F7DF",39715:"F7E0",40637:"F7E1",40638:"F7E2",32315:"F7E3",40578:"F7E4",40583:"F7E5",40584:"F7E6",40587:"F7E7",40594:"F7E8",37846:"F7E9",40605:"F7EA",40607:"F7EB",40667:"F7EC",40668:"F7ED",40669:"F7EE",40672:"F7EF",40671:"F7F0",40674:"F7F1",40681:"F7F2",40679:"F7F3",40677:"F7F4",40682:"F7F5",40687:"F7F6",40738:"F7F7",40748:"F7F8",40751:"F7F9",40761:"F7FA",40759:"F7FB",40765:"F7FC",40766:"F7FD",40772:"F7FE"};

    var i = 0;
    var l = str.length;

    var ret = [];
    var charCode;
    var gCode;

    for (i = 0; i < l; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 127) {
            ret.push('%' + charCode.toString(16));
        } else {
            gCode = map.hasOwnProperty(charCode) && map[charCode];
            if (gCode) {
                while (gCode.length < 4) {
                    gCode = '0' + gCode;
                };
                ret.push('%' + gCode.slice(0, 2) + '%' + gCode.slice(2, 4));
            } else {
                //字库里面没有.
            };
        };
    };

    return ret.join('');
}


// 转换文本数据为 engineList 对象
function parseDataStr(str, opt) {
    if (typeof opt == 'undefined') {
        opt = {};
    }

    // 提前处理下特殊的 post 方式
    str = str.replace(/[\n\r]+[\s\/]*-\s*(\S)+:/g, '_POST_ $1:');

    var parseArgs = function(str) {
        var arr = str.replace(/，/g, ', ').split(/\s*, \s*/);
        var args = {};
        arr.forEach(function(s){
            var argArr = s.split(/\s*: \s*/);
            args[argArr[0]] = argArr[1];
        });
        return args;
    };

    var isEncoding = function(str) {
        return ['utf-8', 'gbk'].indexOf(str.toLowerCase()) != -1;
    };

    var parseLine = function (line) {
        line = line.trim();

        if (!line) {
            return;
        }

        if (line.indexOf('//') == 0) {
            if (opt.commentLine) {  // 包含注释行
                line = line.replace(/^\/\/\s*/, '');
            } else {
                return;
            }
        }

        var engine = {};

        if (line.indexOf('_POST_') != -1) {
            engine.method = 'POST';
            var two = line.split(/\s*_POST_\s*/);
            line = two[0];
            engine.args = parseArgs(two[1]);
        }

        var arr = line.replace(/，/g, ', ').split(/\s*, \s*/);
        if (arr.length === 1) {  // 分类
            return line;
        }

        engine.name = arr[0];
        engine.url = arr[1];
        engine.host = parseUri(engine.url).host;

        // 处理编码和图标
        if (arr[2] && isEncoding(arr[2])) {
            engine.encoding = arr[2];
            engine.favicon = arr[3];
        } else {
            engine.favicon = arr[2];
        }

        if (typeof ICON_DATA != 'undefined') {
            if (!engine.favicon) {  // 不存在尝试通过链接的域名获取
                engine.favicon = ICON_DATA[engine.host];
            } else if (engine.favicon.indexOf('data:image') == 0) {  // base64 图标

            } else if (engine.favicon.indexOf('http') == 0) {  // 在线图标
                engine.favicon = ICON_DATA[parseUri(engine.favicon).host] || engine.favicon;
            } else {  // 域名
                engine.favicon = ICON_DATA[engine.favicon] || getFaviconUrl(engine.favicon, opt.iconType);
            }
        }

        if (!engine.favicon) {
            engine.favicon = getFaviconUrl(engine.url, opt.iconType);
        }

        return engine;
    };

    var list = {},
        type;

    str.split(/[\n\r]+/).forEach(function(line){
        var engine = parseLine(line);
        if (!engine) {
            return;
        }

        if (typeof engine === 'string') {
            type = line.trim();
            list[type] = [];
        } else {
            // engine.type = type;
            list[type].push(engine);
        }
    });

    return list;
}

function getFaviconUrl(url, type) {
    switch(type) {
        case 0:
            return url;
        case 1:
            return 'http://g.etfv.co/' + url;
        case 2:
            return 'http://www.google.com/s2/favicons?domain=' + parseUri(url).host;
        case 3:
            var uri = parseUri(url);
            return uri.protocol + '://' + uri.host + '/favicons.ico';
        default:
            return 'http://api.byi.pw/favicon?url=' + url;
    }
}

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
var parseUri = function(str) {
    var o = parseUri.options,
        m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.ds.name] = {};
    uri[o.ds.name][0] = {};
    uri[o.ds.name][0]['key'] = (uri.protocol ? uri.protocol : 'http') + '://' + uri.host + (uri.port ? ':' + uri.port : '') + '/';
    uri[o.ds.name][0]['val'] = '/';
    var i = 0,
        tempsub = '/',
        subs = uri[o.key[10]].substr(1).split('/');
    for (var j = 1; j < (subs.length + 1); j++, i++) {
        tempsub += tempsub === '/' ? subs[i] : '/' + subs[i];
        if (subs[i]) {
            uri[o.ds.name][j] = {};
            uri[o.ds.name][j]['key'] = subs[i];
            uri[o.ds.name][j]['val'] = tempsub;
        }
    }

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });
    uri[o.aq.name] = {};
    uri[o.key[13]].replace(o.aq.parser, function($0, $1, $2) {
        if ($1) uri[o.aq.name][$1] = $2;
    });

    return uri;
};
parseUri.options = {
    strictMode: false,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    aq: {
        name: "anchorqueryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    ds: {
        name: "directorySub"
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};


if (typeof exports !== 'undefined') {
    exports.parseDataStr = parseDataStr;
    exports.parseUri = parseUri;
}


// --------------------开始运行------------------------

// iframe 禁止加载
if (window.self != window.top) return;

var matchedRule;

rules.some(function (rule) {
    if (toRE(rule.url).test(location.href)) {
        matchedRule = rule;
        if (typeof rule.etc == 'function') {
            try {
                rule.etc();
            } catch(ex) {
                console.error('执行 etc 错误', ex);
            }
        }
        return true;
    };
});


debug('匹配的规则为', matchedRule);
if (!matchedRule || !matchedRule.enabled) return;


// 列表对象
function DropDownList(a, list) {
    this.a = a;
    this.list = list;
    this.init();
};
DropDownList.zIndex = 100000000;

DropDownList.prototype = {
    hidden: true,
    showDelay: 233,
    hideDelay: 266,
    aShownClass: 'sej-drop-list-trigger-shown',

    init: function () {
        var a = this.a;
        var list = this.list;

        var self = this;

        // 进入显示
        mouseEventListener.add('mouseenter', a, function () {
            clearTimeout(self.hideTimerId);

            if (self.hidden) {
                self.showTimerId = setTimeout(function () {
                    self.show();
                }, self.showDelay);
            } else {
                var style = list.style;
                style.zIndex = DropDownList.zIndex ++;
                style.opacity = 0.96;
            };
        });

        // 离开隐藏
        mouseEventListener.add('mouseleave', a, function () {
            clearTimeout(self.showTimerId);

            if (!self.hidden) {
                list.style.opacity = 0.3;
                self.hideTimerId = setTimeout(function () {
                    self.hide();
                }, self.hideDelay);
            };
        });

        mouseEventListener.add('mouseenter', list, function () {
            clearTimeout(self.hideTimerId);

            var style = list.style;
            style.zIndex = DropDownList.zIndex ++;
            style.opacity = 0.96;
        });

        mouseEventListener.add('mouseleave', list, function () {

            list.style.opacity = 0.3;
            self.hideTimerId = setTimeout(function () {
                self.hide();
            }, self.hideDelay);
        });

    },
    show: function () {
        if (!this.hidden) return;
        this.hidden = false;

        var scrolled = getScrolled();
        var aBCRect = this.a.getBoundingClientRect();

        var style = this.list.style;

        var top, left;
        if (this.a.dataset.horizontal) { // 向右展开
            top = scrolled.y + aBCRect.top;
            left = scrolled.x + aBCRect.left + this.a.clientWidth;
        } else { // 默认的向下展开
            top = scrolled.y + aBCRect.bottom;
            left = scrolled.x + aBCRect.left;
        }

        style.top = top + 6 + 'px';
        style.left = left + 'px';
        style.zIndex = DropDownList.zIndex ++;
        style.display = 'block';

        setTimeout(function () {
            style.opacity = 0.96;
            style.top = top + 'px';
        }, 30);

        this.a.classList.add(this.aShownClass);

    },
    hide: function () {
        if (this.hidden) return;
        this.hidden = true;

        var style = this.list.style;
        style.display = 'none';
        style.opacity = 0.3;

        this.a.classList.remove(this.aShownClass);

    },
};


function addGlobalStyle() {
    // 添加全局样式和自定义样式
    var globalStyle = document.getElementById('sej-style');
    if (!globalStyle) {
        globalStyle = document.createElement('style');
        globalStyle.id = 'sej-style';
        globalStyle.type = 'text/css';
        globalStyle.textContent = MAIN_CSS + '\n' + (matchedRule.stylish || '');
        document.head.appendChild(globalStyle);
    }
}

function addContainer(iTarget, iInput) {
    var pageEncoding = (document.characterSet || document.charset).toLowerCase();

    // 创建dom
    var aPattern = '<a href="" class="sej-engine"' + (prefs.openInNewTab ? ' target="_blank" ' : ' ') +
        'encoding="$encoding$" url="$url$" onclick="$onclick$" title="$title$">' +
        '<img src="$favicon$" class="sej-engine-icon" />$form$<span>$name$</span></a>';

    var container = document.createElement('sejspan');
    container.id = 'sej-container';

    container.addEventListener('mousedown', mousedownhandler, true);

    // container.style.cssText = 'margin: 0 auto; max-width: 1100px;';
    if (matchedRule.style) {
        container.style.cssText = matchedRule.style;
    }

    var dropLists = [];
    var AllEngineList = parseDataStr(engineListDataStr);
    var isFirstDropList = true;
    var isMatched = false;  // 当前搜索只匹配一次

    Object.keys(AllEngineList).forEach(function (categoryStr) {
        var categoryArr = categoryStr.split('-');

        var category = {
            str: categoryStr,
            name: categoryArr[0],
            icon: categoryArr[1],
            insert: categoryArr[2]
        };

        var engines = [];

        var engineList = AllEngineList[categoryStr];
        engineList.forEach(function (engine) {
            if (matchedRule.engineList && !isMatched && toRE(matchedRule.url).test(engine.url)) { // 去掉跳转到当前引擎的引擎
                isMatched = true;
                return;
            }

            var a = aPattern.replace('$encoding$', (engine.encoding || 'utf-8').toLowerCase())
                .replace('$url$', engine.url)
                .replace('$name$', engine.name)
                .replace('$title$', engine.name);
            if (engine.favicon) {
                a = a.replace('$favicon$', engine.favicon);
            } else {
                a = a.replace('src="$favicon$"', '');
            }

            if (engine.method && engine.method.toUpperCase() == 'POST') {
                var f = wrapToHide(getPostFormHTML(engine.url, engine.args, prefs.openInNewTab));
                a = a.replace('$form$', f);
                a = a.replace('$onclick$', "this.getElementsByTagName('form')[0].submit();return false;");
            } else {
                a = a.replace('$form$', '');
                a = a.replace('onclick="$onclick$"', '');
            }

            engines.push(a);
        });

        // 非空列表
        if (!engines.length) return;

        // 插入一个节点给 insertBefore 用
        var lastInsertTitle = category.name;
        engines = engines.join('') + '<span class="sej-engine" title="' + lastInsertTitle + '" style="display: none;"></span>';

        if (isTheSameCategory(category.name, matchedRule.engineList)) {
            container.innerHTML = '<sejspan id="sej-expanded-category">'+ category.name +'</sejspan>' + engines;
        } else {
            var dropList = document.createElement('sejspan');
            dropList.className = 'sej-drop-list';
            dropList.innerHTML = engines;

            // 有子 droplist
            var a = dropList.firstElementChild.cloneNode(true);
            a.className = a.className + ' sej-drop-list-trigger';
            a.title = category.name;
            a.lastChild.textContent = category.name;

            // 更改图标
            if (category.icon) {
                var e = engineList[category.icon - 1];
                if (e && e.favicon) {  // 数字匹配
                    a.firstChild.src = e.favicon;
                } else {  // 名称匹配
                    for (var i = 0; i < engineList.length; i++) {
                        if (engineList[i].name == category.icon) {
                            a.firstChild.src = engineList[i].favicon;
                            break;
                        }
                    };
                }
            }

            // 是否为第一个 droplist
            if (isFirstDropList) {
                a.className += ' first';
                isFirstDropList = false;
            }

            // 重新插入的位置
            if (typeof category.insert !== 'undefined') {
                a.dataset.horizontal = true;
                a.dataset.insert = category.insert;
            }

            dropLists.push({
                a: a,
                dropList: dropList
            });
        };
    });

    dropLists.forEach(function (item, index) {
        var a = item.a,
            dropList = item.dropList;

        // 移到某个类别里面
        var ins;
        var insert = a.dataset.insert;
        if (typeof insert !== 'undefined') {
            ins = document.querySelector('.sej-engine[title="' + insert + '"]:not(.sej-drop-list-trigger)');

            // var prevChilds = document.querySelectorAll('');

            // var prevItem = dropLists[index - 2];
            // if (prevItem) {
            //     var prevChilds = prevItem.dropList.children;

            //     if (insert < prevChilds.length) {
            //         ins = prevChilds[insert];
            //     } else {
            //         ins = document.querySelector('.sej-engine[title="' + a.dataset.insert + '"]:not(.sej-drop-list-trigger)');
            //     }
            // }
        }

        if (ins) {
            ins.parentNode.insertBefore(a, ins);
        } else {
            container.appendChild(a);
        }

        if (a.dataset.horizontal && a.parentNode.id === container.id) {  // 如果是顶层，菜单不需要修正
            a.removeAttribute('data-horizontal');

            // 插入到第一个类别前面
            // ins = container.querySelector('a.sej-engine.first');
            ins = container.querySelector('a.sej-engine:not(.sej-drop-list-trigger)');
            ins.parentNode.insertBefore(a, ins);
        }

        document.body.appendChild(dropList);

        dropList.addEventListener('mousedown', mousedownhandler, true);

        new DropDownList(a, dropList);
    });

	// 添加设置按钮
	var configBtn = document.createElement('a');
	configBtn.innerHTML = '<img class="sej-engine-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVQ4jZWSu0oDURCGp9BCLcRCAzFGsjvzHwyoWbMzYKWdErBREQQLG/F90qW1y5sEfYGgTyBewBtRiYlFdkPibowOnGrn+883Z5bo95ogKk+O6RkNQ6wFsbbvry38iWAOD5mDIhGRSHjgYF0H64qE50REhUKw7FhPRsC6B9GOE31z0GYM94/YtYM99wL1NBEArC8CepcAk+fF80qSauGgV70m/YRoTURLzEERElYh1nKwLsRuEqDnlWcd6xFEOw7WBewiYShhNbYA9CyfX50b+GhPg5rMtpl8o6A42AOxdiazNhOp28NwgG79DBDR0vBb6Ec2W54mIqJcLjcFhBWIfkWK9eQIWhtY63EfHm6yRqwHaJ053Ga2TcAuHPQzurmZugHPK+cd9H78GvVVZGMlEcBsO9EIjxBrxOP0jLQD6CXEbuMRUi2AsOL7G0xE5Hzd7d8a/b5LS0FWRPdT4ZSacLBniL4zB/N/hf5d3635oJ6ZNLU9AAAAAElFTkSuQmCC" />';
	configBtn.onclick = openPrefs;
	container.appendChild(configBtn);

    // 插入到文档中
    switch (matchedRule.insertIntoDoc.where.toLowerCase()) {
        case 'beforebegin' :
            iTarget.parentNode.insertBefore(container, iTarget);
        break;
        case 'afterbegin' :
            if (iTarget.firstChild) {
                iTarget.insertBefore(container, iTarget.firstChild);
            } else {
                iTarget.appendChild(container);
            }
        break;
        case 'beforeend' :
            iTarget.appendChild(container);
        break;
        case 'afterend' :
            if (iTarget.nextSibling) {
                iTarget.parentNode.insertBefore(container, iTarget.nextSibling);
            } else {
                iTarget.parentNode.appendChild(container);
            }
        break;

    };

    var isTwoLine = container.clientHeight / container.children[1].clientHeight > 2;

    // 插入后调整下，如果变成两行，隐藏文字
    if (prefs.hideEnglineLabel == 2 || (prefs.hideEnglineLabel == 1 && isTwoLine)) {
        [].forEach.call(document.querySelectorAll('#sej-container > a[class="sej-engine"] > span'), function(link) {
        	link.parentNode.classList.add('only-icon');
        });

        // 取消前面的距离并居中
        if (isTwoLine) {
            container.style.paddingLeft = '';
            container.style.textAlign = 'center';
        }
    }

    function mousedownhandler(e) {
        var target = e.target;

        target = getElementByXPath('ancestor-or-self::a[contains(@class, "sej-engine")]', target);

        // if (!target || target.className.indexOf('sej-engine') == -1) return;
        if (!target || !this.contains(target)) return;

        var value;
        if (typeof iInput == 'function') {
            value = iInput();
        } else {
            if (iInput.nodeName == 'INPUT' || iInput.localName == 'textarea') {
                value = iInput.value;
            } else {
                value = iInput.textContent;
            }
        }

        // 根据后代元素中是否存在 form 元素，判断提交方式并进行处理
        // 如果没有 form 元素，将会使用 GET 方法提交；如果有，将会使用 POST 方法提交
        var forms = target.getElementsByTagName('form');
        if (forms.length == 0) { // 提交方式为 GET
            // 处理编码
            var encoding = target.getAttribute('encoding');
            if (encoding == 'utf-8') {
                value = encodeURIComponent(value);
            } else if (encoding.indexOf('gb') == 0) {// 引擎接受gbk编码
                if (pageEncoding.indexOf('gb') != 0) {// 如果当前页面也使用gbk编码的话，那么不需要再编码
                    value = toGBK(value);
                }
            }

            // console.log(value);
            target.href = target.getAttribute('url').replace(/%s/g, value); // 替换“全部”关键词
        } else { // 提交方式为 POST
            var inputs = target.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = inputs[i].value.replace(/%s/g, value); // // 替换“全部”关键词
            }
        }
    }
}

function run() {
    // 百度搜索插入到顶部搜索条下面就会造成页面部分元素的消失，所以需要每个部分都判断下是否存在

    // 判断插入位置和输入框是否存在
    var iTarget = getElement(matchedRule.insertIntoDoc.target);
    var iInput = typeof matchedRule.insertIntoDoc.keyword == 'function' ? matchedRule.insertIntoDoc.keyword : getElement(matchedRule.insertIntoDoc.keyword);
    debug('插入的位置为 %o', iTarget);
    debug('匹配的输入框为 %o', iInput);

    if (!iTarget || !iInput) {
        debug('不存在插入的位置或匹配的输入框', iTarget, iInput);
        return;
    }

    // 根据搜索列表的类型得到数据
    engineListDataStr = engineListData[prefs.engineListDataType] || engineListData.normal;

    addGlobalStyle();

    // 判断是否存在
    var container = document.getElementById('sej-container'),
        sejspan = document.querySelector('sejspan.sej-drop-list');
    if (!container || !sejspan) {
        if (container) {
            container.parentNode.removeChild(container);
        }
        addContainer(iTarget, iInput);
    }
}

function remove() {
	var elems = document.querySelectorAll('#sej-container, sejspan.sej-drop-list');
	if (!elems) return;

	[].forEach.call(elems, function(elem) {
		elem.parentNode.removeChild(elem);
	});
}


run();

if (matchedRule.mutationTitle) {
    // 监视标题的变化
    debug('添加节点监视器: title');

    var watch = document.querySelector('title');
    var observer = new MutationObserver(function(mutations){
        debug('标题发生了变化', document.title);
        run();
    });
    observer.observe(watch, {childList: true, subtree: true, characterData: true});
}


})()