//Mon Jul 08 2024 11:41:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x46d2e6 = new _0x482769("E览衢江");
_0x17c6d1();
const _0x2dba73 = "elqj",
  _0x26a7a2 = require("request"),
  _0x5ce4e6 = require("fs"),
  _0x1a16b6 = require("form-data"),
  _0x3659ce = require("./utils");
let _0x4792c7 = "",
  _0x1b55a2 = "https://app.tmuyun.com/webChannels/invite?inviteCode=WEHXAH&tenantId=85&accountId=64b4ea00a7fd39546390310d",
  _0xfc8561 = "幻生提示：有错请在仓库建立issue，附上运行截图，谢谢",
  _0x3a1bfb = "请在 配置文件 里添加 " + _0x2dba73 + " 变量，具体配置请看脚本最上方说明\n注册地址：" + _0x1b55a2 + "\n投稿？请建Issue 或者 +Q：3385445213";
const _0xf8f29 = Number.isInteger(_0x46d2e6.isNode() ? process.env[_0x2dba73 + "enabledNotify"] : _0x46d2e6.getdata(_0x2dba73 + "EnabledNotify")) || Number.isInteger(_0x46d2e6.isNode() ? process.env.enabledNotify : _0x46d2e6.getdata("enabledNotify")) || 1;
let _0x4bc2c8 = 0,
  _0x494abb = ["@", "\n"],
  _0xa9ac82 = (_0x46d2e6.isNode() ? process.env[_0x2dba73] : _0x46d2e6.getdata(_0x2dba73)) || "",
  _0x327865 = ["1", 1, "true"]?.["includes"](_0x46d2e6.isNode() ? process.env[_0x2dba73 + "EnabledPostComment"] : _0x46d2e6.getdata(_0x2dba73 + "EnabledPostComment")) || false,
  _0x551a7f = ["1", 1, "true"]?.["includes"](_0x46d2e6.isNode() ? process.env[_0x2dba73 + "EnabledForumPost"] : _0x46d2e6.getdata(_0x2dba73 + "EnabledForumPost")) || false,
  _0x190079 = ["1", 1, "true"]?.["includes"](_0x46d2e6.isNode() ? process.env[_0x2dba73 + "EnabledPostCommentBy1Y"] : _0x46d2e6.getdata(_0x2dba73 + "EnabledPostCommentBy1Y")) || false,
  _0x815811 = [],
  _0x45dd3d = 0,
  _0x5663ef = 0,
  _0xb0ebf5 = "WEHXAH",
  _0xf91a4d = "10035",
  _0x2bd775 = 85,
  _0x2b33a4 = "请注意：已" + (_0x327865 ? "开启" : "关闭") + " 对文章的评论功能； 已" + (_0x551a7f ? "开启" : "关闭") + " 论坛发帖功能； 已" + (_0x190079 ? "开启" : "关闭") + " 一言随机评论功能",
  _0x2d9940 = "63777162fe3fc118b09fab89",
  _0x4a3e0b = ["赞", "👍", "😄", "111", "支持", "点赞"],
  _0x1feb2a = "2.0.0;00000000-62d6-e9e6-ffff-ffffded24677;Xiaomi Mi 10;Android;13;xiaomi",
  _0x381f13 = ["648aaa6a79f6be51c40c6bb7"],
  _0x94f049 = "";
async function _0x168a86() {
  console.log("\n================== 用户登录 帐号数：[" + _0x815811?.["length"] + "]==================\n");
  let _0x2346c0 = [];
  for (let _0x5ab1fd of _0x815811) {
    _0x2346c0.push(await _0x5ab1fd.app_start("APP启动"));
    await _0x48adfe(0.2);
    _0x2346c0.push(await _0x5ab1fd.iframe_start("Iframe启动"));
    await _0x48adfe(0.2);
    _0x2346c0.push(await _0x5ab1fd.web_start("Web启动"));
    await _0x48adfe(0.2);
    _0x2346c0.push(await _0x5ab1fd.get_app_version("获取Version"));
    await _0x48adfe(0.2);
    _0x2346c0.push(await _0x5ab1fd.config_get("获取配置"));
    await _0x48adfe(0.2 + Math.random() * 1);
    if (!_0x5ab1fd.sessionId) _0x5ab1fd.loadCache(), !_0x5ab1fd.valid ? _0x2346c0.push(await _0x5ab1fd.login()) : await _0x46d2e6.wait(200);else {
      _0x2346c0.push(await _0x5ab1fd.user_info());
      await _0x46d2e6.wait(200);
    }
  }
  await Promise.all(_0x2346c0);
  _0x815811 = _0x815811?.["filter"](_0x55c4e6 => _0x55c4e6?.["valid"]);
  console.log("\n================== 用户信息 帐号数：[" + _0x815811?.["length"] + "]==================\n");
  _0x2346c0 = [];
  for (let _0x32494a of _0x815811) {
    _0x2346c0.push(await _0x32494a.task_tasklist("用户信息"));
    await _0x48adfe(0.2 + Math.random() * 1);
    _0x2346c0.push(await _0x32494a.get_unread_msg());
  }
  await Promise.all(_0x2346c0);
  const _0x1c11c8 = _0x815811?.["filter"](_0xdfd470 => _0xdfd470?.["jobList"]?.["find"](_0x317d80 => _0x317d80?.["name"]?.["includes"]("签到") && _0x317d80?.["frequency"] && _0x317d80?.["frequency"] > _0x317d80?.["finish_times"]));
  if (_0x1c11c8?.["length"]) {
    console.log("\n================== 每日签到任务开始执行 待执行帐号数：[" + _0x1c11c8?.["length"] + "]==================\n");
    _0x2346c0 = [];
    for (let _0x293362 of _0x1c11c8) {
      _0x2346c0.push(await _0x293362.task_sign("每日签到"));
      await _0x48adfe(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x2346c0);
  } else {
    console.log("\n无签到任务 或 当前帐号都已签到过了，无需执行签到任务\n");
  }
  await _0x48adfe(0.2 + Math.random() * 1);
  const _0x17a6ef = _0x815811?.["filter"](_0x23c2b5 => _0x23c2b5?.["jobList"]?.["find"](_0x3deea5 => {
    return _0x3deea5?.["name"]?.["includes"]("帖子发布") && _0x3deea5?.["frequency"] && _0x3deea5?.["frequency"] > _0x3deea5?.["finish_times"] && _0x551a7f || _0x3deea5?.["name"]?.["includes"]("帖子点赞") && _0x3deea5?.["frequency"] && _0x3deea5?.["frequency"] > _0x3deea5?.["finish_times"];
  }));
  if (_0x17a6ef?.["length"]) {
    console.log("\n================== 社区帖子相关任务开始执行 待执行帐号数：[" + _0x17a6ef?.["length"] + "]==================\n");
    _0x2346c0 = [];
    for (let _0x11ceee of _0x17a6ef) {
      _0x2346c0.push(await _0x11ceee.task_forum_info("社区帖子列表"));
      await _0x48adfe(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x2346c0);
  } else console.log("\n无社区帖子相关任务 或 当前帐号都已做完了社区帖子任务，无需执行\n");
  await _0x48adfe(0.2 + Math.random() * 1);
  const _0x47f7b5 = _0x815811?.["filter"](_0x2d3052 => _0x2d3052?.["jobList"]?.["find"](_0x2f2710 => {
    return _0x2f2710?.["name"]?.["includes"]("资讯评论") && _0x2f2710?.["frequency"] > _0x2f2710?.["finish_times"] && _0x327865 || _0x2f2710?.["name"]?.["includes"]("分享资讯") && _0x2f2710?.["frequency"] && _0x2f2710?.["frequency"] > _0x2f2710?.["finish_times"] || _0x2f2710?.["name"]?.["includes"]("资讯点赞") && _0x2f2710?.["frequency"] && _0x2f2710?.["frequency"] > _0x2f2710?.["finish_times"] || _0x2f2710?.["name"]?.["includes"]("资讯阅读") && _0x2f2710?.["frequency"] && _0x2f2710?.["frequency"] > _0x2f2710?.["finish_times"];
  }));
  if (_0x47f7b5?.["length"]) {
    console.log("\n================== 文章列表相关任务开始执行 待执行帐号数：[" + _0x47f7b5?.["length"] + "]==================\n");
    _0x2346c0 = [];
    for (let _0x5f2ba6 of _0x47f7b5) {
      console.log("\n开始执行帐号[" + _0x5f2ba6.index + "] 文章任务😄\n");
      _0x2346c0.push(await _0x5f2ba6.task_articlelist("文章列表"));
      await _0x48adfe(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x2346c0);
  } else console.log("\n无文章资讯任务 或 当前帐号都已做完了资讯任务，无需执行相关任务\n");
  await _0x48adfe(0.2 + Math.random() * 1);
  const _0x103a3c = _0x815811?.["filter"](_0x1150b5 => _0x1150b5?.["jobList"]?.["find"](_0x40d888 => {
    return _0x40d888?.["name"]?.["includes"]("本地服务") && _0x40d888?.["frequency"] && _0x40d888?.["frequency"] > _0x40d888?.["finish_times"];
  }));
  if (_0x103a3c?.["length"]) {
    console.log("\n================== 本地服务任务开始执行 待执行帐号数：[" + _0x103a3c?.["length"] + "]==================\n");
    _0x2346c0 = [];
    for (let _0x45fbbd of _0x103a3c) {
      const _0x50b0bb = _0x45fbbd?.["jobList"]?.["find"](_0x4b7094 => {
        return _0x4b7094?.["name"]?.["includes"]("本地服务") && _0x4b7094?.["frequency"] && _0x4b7094?.["frequency"] > _0x4b7094?.["finish_times"];
      });
      for (let _0x4688e2 = 0; _0x4688e2 < _0x50b0bb?.["frequency"] - _0x50b0bb?.["finish_times"]; _0x4688e2++) {
        _0x2346c0.push(await _0x45fbbd.task_share("6", undefined, "本地服务"));
        await _0x48adfe(1 + Math.random() * 1);
      }
    }
    await Promise.all(_0x2346c0);
  } else console.log("\n无本地服务任务 或 当前帐号都已做完了本地服务任务，无需执行相关任务\n");
  for (let _0x796124 of _0x815811) {
    console.log("\n================== 删除历史评论任务开始执行 待执行帐号数：[" + _0x815811?.["length"] + "]==================\n");
    await _0x796124.get_comment_history();
    await _0x48adfe(1 + Math.random() * 1);
  }
}
class _0x4d80f3 {
  ["valid"] = false;
  constructor(_0x2a1e2e) {
    this.index = ++_0x45dd3d;
    this.accountId = "";
    this.host = "vapp.tmuyun.com";
    this.hostname = "https://" + this.host;
    this.key = "FR*r!isE5W";
    const _0x116817 = _0x381f13,
      _0x51651c = Math.floor(Math.random() * _0x116817.length);
    this.artlistdata = _0x116817[_0x51651c];
    _0x2a1e2e[0]?.["length"] === 11 ? (this.account = _0x2a1e2e[0], this.password = _0x2a1e2e[1]) : (this.sessionId = _0x2a1e2e[0], this.accountId = _0x2a1e2e[1]);
  }
  ["loadCache"]() {
    let _0x3db5d6 = _0x35914e(_0x2dba73 + "_config", this.account);
    if (_0x3db5d6) {
      _0x3db5d6 = JSON.parse(_0x3db5d6);
      console.log("账号[" + this.index + "]从缓存读取成功 😄 ，其ID为： " + _0x3db5d6?.["id"] + "，手机号为：" + this.account);
      this.accountId = _0x3db5d6?.["id"];
      this.sessionId = _0x3db5d6?.["sessionId"];
      this.valid = true;
      return;
    }
  }
  async ["txt_api"]() {
    try {
      let _0x1ac5ab = {
          "method": "GET",
          "url": "https://v1.hitokoto.cn/",
          "qs": {
            "c": "d"
          },
          "headers": {
            "content-type": "multipart/form-data; boundary=---011000010111000001101001"
          },
          "formData": {}
        },
        _0x4839f2 = await _0x25449a(_0x1ac5ab, "");
      if (_0x4839f2.id) return _0x4839f2.hitokoto;else {}
    } catch (_0x47dfa4) {
      console.log(_0x47dfa4);
    }
  }
  async ["task_tasklist"](_0x59ae84) {
    let _0x451320 = "/api/user_mumber/numberCenter",
      _0x3d5bcd = _0x3659ce.guid(),
      _0x2d7432 = _0x3659ce.ts13(),
      _0x3e4a79 = _0x451320 + "&&" + this.sessionId + "&&" + _0x3d5bcd + "&&" + _0x2d7432 + "&&" + this.key + "&&" + _0x2bd775,
      _0x4d818c = _0x3659ce.SHA256_Encrypt(_0x3e4a79);
    try {
      let _0x59e82f = {
          "method": "GET",
          "url": "" + this.hostname + _0x451320 + "?is_new=1",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3d5bcd,
            "X-TIMESTAMP": _0x2d7432,
            "X-SIGNATURE": _0x4d818c,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x2ead39 = await _0x25449a(_0x59e82f, _0x59ae84);
      if (_0x2ead39.code == 0) {
        if (!this.requestedUserInfo) {
          await this.user_info();
          await _0x48adfe(0.3);
        }
        _0x576538("账号[" + this.index + "],欢迎用户:[" + _0x2ead39.data.rst.nick_name + "],当前积分为[" + _0x2ead39.data.rst.total_integral + "]");
        await _0x48adfe(0.3);
        this.jobList = _0x2ead39.data.rst.user_task_list?.["map"](_0x31123f => {
          return {
            "name": _0x31123f?.["name"],
            "finish_times": Number(_0x31123f?.["finish_times"]),
            "frequency": Number(_0x31123f?.["frequency"]),
            "integral": _0x31123f?.["integral"],
            "member_task_type": _0x31123f?.["member_task_type"]
          };
        });
        if (_0x2ead39?.["data"]?.["daily_sign_info"]?.["name"]?.["includes"]("签到")) {
          let _0x45dca9 = _0x2ead39?.["data"]?.["daily_sign_info"]?.["daily_sign_list"]?.["find"](_0x344c53 => _0x344c53?.["current"])?.["signed"];
          this.jobList.push({
            "name": "每日签到",
            "finish_times": _0x45dca9 ? 1 : 0,
            "frequency": 1
          });
        }
        _0x576538("账号[" + this.index + "],获取任务列表成功 😄 :");
        await _0x48adfe(0.3);
        let _0x3dcf52 = "";
        await _0x48adfe(0.2 + Math.random() * 1);
        for (let _0xdc630a = 0; _0xdc630a < this.jobList.length; _0xdc630a++) {
          _0x3dcf52 += this.jobList[_0xdc630a].name + "[" + this.jobList[_0xdc630a].finish_times + "/" + this.jobList[_0xdc630a].frequency + "]\n";
        }
        await _0x48adfe(0.3);
        _0x576538(_0x3dcf52);
      } else _0x576538("账号[" + this.index + "],获取任务列表:失败 🙁 了呢,原因：" + _0x2ead39?.["message"]), console.log(_0x2ead39);
    } catch (_0xebca83) {
      console.log(_0xebca83);
    }
  }
  async ["task_sign"](_0x9a0767) {
    let _0x3d1930 = "/api/user_mumber/sign",
      _0x52e74f = _0x3659ce.guid(),
      _0x440074 = _0x3659ce.ts13(),
      _0x31d2ce = _0x3d1930 + "&&" + this.sessionId + "&&" + _0x52e74f + "&&" + _0x440074 + "&&" + this.key + "&&" + _0x2bd775,
      _0x43ef85 = _0x3659ce.SHA256_Encrypt(_0x31d2ce);
    try {
      let _0x1f8865 = {
          "method": "GET",
          "url": "" + this.hostname + _0x3d1930,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x52e74f,
            "X-TIMESTAMP": _0x440074,
            "X-SIGNATURE": _0x43ef85,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x2f75bd = await _0x25449a(_0x1f8865, _0x9a0767);
      _0x2f75bd.code == 0 ? _0x576538("账号[" + this.index + "],签到成功 😄 [" + _0x2f75bd.data.signCommonInfo.date + "],获得积分:[" + _0x2f75bd.data.signExperience + "]") : (_0x576538("账号[" + this.index + "],签到:失败 🙁 了呢,原因：" + _0x2f75bd?.["message"]), console.log(_0x2f75bd));
    } catch (_0x44d0d3) {
      console.log(_0x44d0d3);
    }
  }
  async ["task_forum_info"](_0x4ab1dd) {
    let _0x351274 = "/api/forum/forum_list",
      _0x16b66a = _0x3659ce.guid(),
      _0x5c98e6 = _0x3659ce.ts13(),
      _0x3deb18 = _0x351274 + "&&" + this.sessionId + "&&" + _0x16b66a + "&&" + _0x5c98e6 + "&&" + this.key + "&&" + _0x2bd775,
      _0x5aa6b8 = _0x3659ce.SHA256_Encrypt(_0x3deb18);
    try {
      let _0x521458 = {
          "method": "GET",
          "url": "" + this.hostname + _0x351274 + ("?tenantId=" + _0x2bd775),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x16b66a,
            "X-TIMESTAMP": _0x5c98e6,
            "X-SIGNATURE": _0x5aa6b8,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x17e415 = await _0x25449a(_0x521458, _0x4ab1dd);
      if (_0x17e415.code == 0) {
        const _0x1b158b = _0x17e415?.["data"]?.["forum_list"]?.["length"] ? _0x17e415?.["data"]?.["forum_list"][0]?.["id"] : undefined;
        if (_0x1b158b) {
          _0x576538("账号[" + this.index + "],获取社区信息成功 😄 ，准备开始获取相关列表");
          await this.task_forum_list(_0x1b158b);
        } else _0x576538("账号[" + this.index + "],获取社区为空 🙁 ，跳过社区任务");
      } else _0x576538("账号[" + this.index + "],获取社区信息:失败 🙁 了呢,原因：" + _0x17e415?.["message"]), console.log(_0x17e415);
    } catch (_0x3218e0) {
      console.log(_0x3218e0);
    }
  }
  async ["task_forum_list"](_0x2edc8b) {
    let _0x51520e = "/api/forum/thread_list",
      _0x2f8814 = _0x3659ce.guid(),
      _0x3a55f4 = _0x3659ce.ts13(),
      _0x2f7745 = _0x51520e + "&&" + this.sessionId + "&&" + _0x2f8814 + "&&" + _0x3a55f4 + "&&" + this.key + "&&" + _0x2bd775,
      _0x314ec7 = _0x3659ce.SHA256_Encrypt(_0x2f7745);
    try {
      let _0x5c34c5 = {
          "method": "GET",
          "url": "" + this.hostname + _0x51520e + ("?forum_id=" + _0x2edc8b),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x2f8814,
            "X-TIMESTAMP": _0x3a55f4,
            "X-SIGNATURE": _0x314ec7,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x37bda3 = await _0x25449a(_0x5c34c5, "获取帖子");
      if (_0x37bda3.code == 0) {
        for (let _0x32dfbe = 0; _0x32dfbe < _0x37bda3.data.thread_list?.["length"]; _0x32dfbe++) {
          if (!this?.["jobList"]?.["find"](_0xb81999 => {
            return _0xb81999?.["name"]?.["includes"]("帖子发布") && _0xb81999?.["frequency"] > _0xb81999?.["finish_times"] && _0x551a7f || _0xb81999?.["name"]?.["includes"]("帖子点赞") && _0xb81999?.["frequency"] > _0xb81999?.["finish_times"];
          })) {
            _0x576538("账号[" + this.index + "],社区任务已完成，跳过-----");
            break;
          }
          _0x576538("账号[" + this.index + "],对帖子[" + _0x37bda3.data.thread_list[_0x32dfbe].id + "]操作-----");
          await _0x48adfe(0.3 + Math.random() * 1);
          if (this?.["jobList"]?.["find"](_0x46f6b5 => {
            return _0x46f6b5?.["name"]?.["includes"]("帖子点赞") && _0x46f6b5?.["frequency"] > _0x46f6b5?.["finish_times"];
          })) {
            if (_0x37bda3.data.thread_list[_0x32dfbe].already_liked) _0x576538("账号[" + this.index + "],之前已经对帖子[" + _0x37bda3.data.thread_list[_0x32dfbe].id + "]点赞过，不能再次点赞");else {
              await this.task_forum_like(_0x37bda3.data.thread_list[_0x32dfbe].id);
            }
            await _0x48adfe(1 + Math.random() * 1);
          } else _0x576538("账号[" + this.index + "],无需对帖子点赞");
          if (this?.["jobList"]?.["find"](_0x57f1de => {
            return _0x57f1de?.["name"]?.["includes"]("帖子发布") && _0x57f1de?.["frequency"] > _0x57f1de?.["finish_times"] && _0x551a7f;
          })) await this.task_forum_post(_0x2edc8b), await _0x48adfe(1 + Math.random() * 1);else {
            _0x576538("账号[" + this.index + "],无需发布帖子，可能是 已执行完毕该任务，或者 未开启该任务");
          }
        }
      } else _0x576538("账号[" + this.index + "],获取社区帖子:失败 🙁 了呢,原因：" + _0x37bda3?.["message"]), console.log(_0x37bda3);
    } catch (_0x5113cd) {
      console.log(_0x5113cd);
    }
  }
  async ["task_forum_like"](_0x56ad10) {
    let _0xbe77b8 = "/api/forum/like",
      _0x4efe5e = _0x3659ce.guid(),
      _0x2517d9 = _0x3659ce.ts13(),
      _0x17f121 = _0xbe77b8 + "&&" + this.sessionId + "&&" + _0x4efe5e + "&&" + _0x2517d9 + "&&" + this.key + "&&" + _0x2bd775,
      _0x4e39ef = _0x3659ce.SHA256_Encrypt(_0x17f121);
    try {
      let _0x475228 = _0x1a16b6();
      _0x475228.append("target_type", "1");
      _0x475228.append("target_id", _0x56ad10);
      let _0x38f9c5 = {
        "method": "POST",
        "url": "" + this.hostname + _0xbe77b8,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x4efe5e,
          "X-TIMESTAMP": _0x2517d9,
          "X-SIGNATURE": _0x4e39ef,
          "X-TENANT-ID": _0x2bd775,
          "User-Agent": _0x1feb2a,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryTDSOjpwy3A5ypRAo",
          "Host": "vapp.tmuyun.com",
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x475228
      };
      _0x38f9c5.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x475228.getBoundary();
      let _0x9da979 = await _0x25449a(_0x38f9c5, "点赞帖子");
      if (_0x9da979.code == 0) {
        const _0xa29235 = this?.["jobList"]?.["find"](_0x19b8de => {
          return _0x19b8de?.["name"]?.["includes"]("帖子点赞") && _0x19b8de?.["frequency"] > _0x19b8de?.["finish_times"];
        });
        _0xa29235.finish_times++;
        _0x576538("账号[" + this.index + "],点赞帖子成功 😄 :[" + _0x56ad10 + "]");
      } else _0x576538("账号[" + this.index + "],点赞帖子:失败 🙁 了呢,原因：" + _0x9da979?.["message"]), console.log(_0x9da979);
    } catch (_0x52b0f4) {
      console.log(_0x52b0f4);
    }
  }
  async ["task_forum_post"](_0x37d73f) {
    let _0x385958 = "/api/forum/post_thread",
      _0x3dcd6d = _0x3659ce.guid(),
      _0x1e2745 = _0x3659ce.ts13(),
      _0x1aee0a = _0x385958 + "&&" + this.sessionId + "&&" + _0x3dcd6d + "&&" + _0x1e2745 + "&&" + this.key + "&&" + _0x2bd775,
      _0x8d83d1 = _0x3659ce.SHA256_Encrypt(_0x1aee0a);
    try {
      let _0x378f02 = _0x1a16b6();
      _0x378f02.append("forum_id", _0x37d73f);
      _0x378f02.append("title", "签到");
      _0x378f02.append("content", "今日打卡");
      _0x378f02.append("attachments", "");
      _0x378f02.append("location_name", "{}");
      let _0x326b39 = {
        "method": "POST",
        "url": "" + this.hostname + _0x385958,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x3dcd6d,
          "X-TIMESTAMP": _0x1e2745,
          "X-SIGNATURE": _0x8d83d1,
          "X-TENANT-ID": _0x2bd775,
          "User-Agent": _0x1feb2a,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryMdIuuLGEa01BfEzM",
          "Host": "vapp.tmuyun.com",
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x378f02
      };
      _0x326b39.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x378f02.getBoundary();
      let _0x20b1c4 = await _0x25449a(_0x326b39, "发布帖子");
      if (_0x20b1c4.code == 0) {
        const _0x3d3464 = this?.["jobList"]?.["find"](_0x57fef6 => {
          return _0x57fef6?.["name"]?.["includes"]("帖子发布") && _0x57fef6?.["frequency"] > _0x57fef6?.["finish_times"];
        });
        _0x3d3464.finish_times++;
        _0x576538("账号[" + this.index + "],发布帖子成功 😄 :[" + _0x37d73f + "]");
        await this.deleteForumPost(_0x20b1c4?.["data"]?.["thread_id"]);
      } else _0x576538("账号[" + this.index + "],发布帖子:失败 🙁 了呢,原因：" + _0x20b1c4?.["message"]), console.log(_0x20b1c4);
    } catch (_0x3667d0) {
      console.log(_0x3667d0);
    }
  }
  async ["deleteForumPost"](_0x5bd525) {
    let _0xfabbec = "/api/forum/delete_thread",
      _0x4f4c79 = _0x3659ce.guid(),
      _0x3de52b = _0x3659ce.ts13(),
      _0x1ead87 = _0xfabbec + "&&" + this.sessionId + "&&" + _0x4f4c79 + "&&" + _0x3de52b + "&&" + this.key + "&&" + _0x2bd775,
      _0x147436 = _0x3659ce.SHA256_Encrypt(_0x1ead87);
    try {
      let _0x2748a3 = _0x1a16b6();
      _0x2748a3.append("thread_id", _0x5bd525);
      let _0x102985 = {
        "method": "POST",
        "url": "" + this.hostname + _0xfabbec,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x4f4c79,
          "X-TIMESTAMP": _0x3de52b,
          "X-SIGNATURE": _0x147436,
          "X-TENANT-ID": _0x2bd775,
          "User-Agent": _0x1feb2a,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryi1cQvxsAzoTagcpx",
          "Host": "vapp.tmuyun.com",
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x2748a3
      };
      _0x102985.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x2748a3.getBoundary();
      let _0x2a1d33 = await _0x25449a(_0x102985, "删除帖子");
      if (_0x2a1d33.code == 0) {
        _0x576538("账号[" + this.index + "],删除帖子成功 😄 :[" + _0x5bd525 + "]");
      } else _0x576538("账号[" + this.index + "],删除帖子:失败 🙁 了呢,原因：" + _0x2a1d33?.["message"]), console.log(_0x2a1d33);
    } catch (_0xef9524) {
      console.log(_0xef9524);
    }
  }
  async ["task_articlelist"](_0x481ba3) {
    let _0x5a5bd1 = "/api/article/channel_list",
      _0x26537d = _0x3659ce.guid(),
      _0x178bcd = _0x3659ce.ts13(),
      _0x5e651a = _0x5a5bd1 + "&&" + this.sessionId + "&&" + _0x26537d + "&&" + _0x178bcd + "&&" + this.key + "&&" + _0x2bd775,
      _0x363636 = _0x3659ce.SHA256_Encrypt(_0x5e651a);
    try {
      let _0x2309e4 = {
          "method": "GET",
          "url": "" + this.hostname + _0x5a5bd1 + ("?channel_id=" + this.artlistdata + "&isDiangHao=false&is_new=" + (Math.random() >= 0.5) + "&list_count=" + Math.floor(Math.random() * 10) + "&size=10"),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x26537d,
            "X-TIMESTAMP": _0x178bcd,
            "X-SIGNATURE": _0x363636,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x1982d7 = await _0x25449a(_0x2309e4, _0x481ba3);
      if (_0x1982d7.code == 0) {
        let _0x5a98d7 = false;
        for (let _0x125e7f = 0; _0x125e7f < _0x1982d7.data.article_list?.["length"]; _0x125e7f++) {
          if (!this?.["jobList"]?.["find"](_0x326e9d => {
            return _0x326e9d?.["name"]?.["includes"]("资讯评论") && _0x326e9d?.["frequency"] > _0x326e9d?.["finish_times"] && _0x327865 || _0x326e9d?.["name"]?.["includes"]("分享资讯") && _0x326e9d?.["frequency"] > _0x326e9d?.["finish_times"] || _0x326e9d?.["name"]?.["includes"]("资讯点赞") && _0x326e9d?.["frequency"] > _0x326e9d?.["finish_times"] || _0x326e9d?.["name"]?.["includes"]("资讯阅读") && _0x326e9d?.["frequency"] > _0x326e9d?.["finish_times"];
          })) {
            _0x576538("账号[" + this.index + "],文章任务已完成，跳过后续文章-----");
            break;
          }
          _0x576538("账号[" + this.index + "],对 第" + (_0x125e7f + 1) + "篇 文章[" + _0x1982d7.data.article_list[_0x125e7f].id + "]操作-----");
          let _0x3b1b6f = _0x1982d7.data.article_list[_0x125e7f].id;
          await this.task_comment_pre();
          await _0x48adfe(1 + Math.random() * 1);
          this?.["jobList"]?.["find"](_0x436156 => {
            return _0x436156?.["name"]?.["includes"]("资讯阅读") && _0x436156?.["frequency"] > _0x436156?.["finish_times"];
          }) && (await this.task_read(_0x3b1b6f), await _0x48adfe(1 + Math.random() * 1));
          if (this?.["jobList"]?.["find"](_0x1744ea => {
            return _0x1744ea?.["name"]?.["includes"]("资讯点赞") && _0x1744ea?.["frequency"] > _0x1744ea?.["finish_times"];
          })) {
            if (_0x1982d7.data.article_list[_0x125e7f].liked) _0x576538("账号[" + this.index + "],之前已经对帖子[" + _0x3b1b6f + "]点赞过，不能再次点赞");else !_0x1982d7.data.article_list[_0x125e7f].like_enabled ? _0x576538("账号[" + this.index + "],帖子[" + _0x3b1b6f + "]未开启点赞功能，无法进行点赞") : await this.task_like(_0x3b1b6f);
            await _0x48adfe(1 + Math.random() * 1);
          }
          if (!_0x5a98d7) _0x327865 && !this.commentError && this?.["jobList"]?.["find"](_0x1882be => {
            return _0x1882be?.["name"]?.["includes"]("资讯评论") && _0x1882be?.["frequency"] > _0x1882be?.["finish_times"];
          }) ? (await this.task_comment(_0x3b1b6f), await _0x48adfe(2 + Math.random() * 1)) : this.commentError && (_0x576538("账号[" + this.index + "],评论文章遇见了一些问题 🙁 ，暂无解决方法，即将跳过后续评论，如果您有解决方法，欢迎提供，错误信息：该篇新闻不支持评论【评论失败，请重新进入当前页面！】"), _0x5a98d7 = true);else {
            if (!this?.["jobList"]?.["find"](_0x3d21f0 => {
              return _0x3d21f0?.["name"]?.["includes"]("分享资讯") && _0x3d21f0?.["frequency"] > _0x3d21f0?.["finish_times"] || _0x3d21f0?.["name"]?.["includes"]("资讯点赞") && _0x3d21f0?.["frequency"] > _0x3d21f0?.["finish_times"] || _0x3d21f0?.["name"]?.["includes"]("资讯阅读") && _0x3d21f0?.["frequency"] > _0x3d21f0?.["finish_times"];
            })) {
              break;
            }
          }
          if (this?.["jobList"]?.["find"](_0x568dd8 => {
            return _0x568dd8?.["name"]?.["includes"]("分享资讯") && _0x568dd8?.["frequency"] > _0x568dd8?.["finish_times"];
          })) {
            !_0x1982d7.data.article_list[_0x125e7f].share_enabled ? _0x576538("账号[" + this.index + "],文章[" + _0x3b1b6f + "]未开启分享功能，无法进行分享") : await this.task_share("3", _0x3b1b6f, "分享");
          }
        }
      } else _0x576538("账号[" + this.index + "],获取文章:失败 🙁 了呢,原因：" + _0x1982d7?.["message"]), console.log(_0x1982d7);
    } catch (_0x2f82e3) {
      console.log(_0x2f82e3);
    }
  }
  async ["get_comment_history"](_0x945df1) {
    let _0x505fdb = "/api/account_comment/comment_list",
      _0x37f688 = _0x3659ce.guid(),
      _0x7c2d11 = _0x3659ce.ts13(),
      _0x48bbf5 = _0x505fdb + "&&" + this.sessionId + "&&" + _0x37f688 + "&&" + _0x7c2d11 + "&&" + this.key + "&&" + _0x2bd775,
      _0x556012 = _0x3659ce.SHA256_Encrypt(_0x48bbf5);
    try {
      let _0x3e9b62 = {
          "method": "GET",
          "url": "" + this.hostname + _0x505fdb + "?size=999",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x37f688,
            "X-TIMESTAMP": _0x7c2d11,
            "X-SIGNATURE": _0x556012,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x3396d7 = await _0x25449a(_0x3e9b62, _0x945df1);
      if (_0x3396d7.code == 0) for (let _0x3c0b61 = 0; _0x3c0b61 < _0x3396d7.data.comment_list?.["length"]; _0x3c0b61++) {
        _0x576538("账号[" + this.index + "],对 第" + (_0x3c0b61 + 1) + "个 评论[" + _0x3396d7.data.comment_list[_0x3c0b61].id + "]删除，删除总数量：" + _0x3396d7.data.comment_list?.["length"] + "-----");
        let _0x6c3782 = _0x3396d7.data.comment_list[_0x3c0b61].id;
        await this.deleteComment(_0x6c3782);
        await _0x48adfe(1 + Math.random() * 1);
      } else _0x576538("账号[" + this.index + "],删除评论:失败 🙁 了呢,原因：" + _0x3396d7?.["message"]), console.log(_0x3396d7);
    } catch (_0x5c3d3f) {
      console.log(_0x5c3d3f);
    }
  }
  async ["task_read"](_0x56fb46) {
    let _0xf2cf87 = "/api/article/detail",
      _0x4a2f10 = _0x3659ce.guid(),
      _0x47039e = _0x3659ce.ts13(),
      _0x307c64 = _0xf2cf87 + "&&" + this.sessionId + "&&" + _0x4a2f10 + "&&" + _0x47039e + "&&" + this.key + "&&" + _0x2bd775,
      _0x2df41a = _0x3659ce.SHA256_Encrypt(_0x307c64);
    try {
      let _0x558be6 = {
          "method": "GET",
          "url": "" + this.hostname + _0xf2cf87 + "?id=" + _0x56fb46,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4a2f10,
            "X-TIMESTAMP": _0x47039e,
            "X-SIGNATURE": _0x2df41a,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4831ca = await _0x25449a(_0x558be6, "阅读文章");
      if (_0x4831ca.code == 0) {
        const _0x4c5437 = this?.["jobList"]?.["find"](_0x5e9cb1 => {
          return _0x5e9cb1?.["name"]?.["includes"]("资讯阅读") && _0x5e9cb1?.["frequency"] > _0x5e9cb1?.["finish_times"];
        });
        _0x4c5437.finish_times++;
        _0x576538("账号[" + this.index + "],阅读文章成功 😄 :[" + _0x4831ca.data.article.id + "]");
      } else _0x576538("账号[" + this.index + "],阅读文章:失败 🙁 了呢,原因：" + _0x4831ca?.["message"]);
    } catch (_0x1e3489) {
      console.log(_0x1e3489);
    }
  }
  async ["task_like"](_0x47b1b0) {
    let _0x3ff1e1 = "/api/favorite/like",
      _0x2b201d = _0x3659ce.guid(),
      _0x5085dd = _0x3659ce.ts13(),
      _0x3a9dfd = _0x3ff1e1 + "&&" + this.sessionId + "&&" + _0x2b201d + "&&" + _0x5085dd + "&&" + this.key + "&&" + _0x2bd775,
      _0x2ed255 = _0x3659ce.SHA256_Encrypt(_0x3a9dfd);
    try {
      let _0x33a5b8 = {
          "method": "POST",
          "url": "" + this.hostname + _0x3ff1e1,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x2b201d,
            "X-TIMESTAMP": _0x5085dd,
            "X-SIGNATURE": _0x2ed255,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "action": "true",
            "id": _0x47b1b0
          }
        },
        _0x2c64da = await _0x25449a(_0x33a5b8, "点赞文章");
      if (_0x2c64da.code == 0) {
        const _0x4c0106 = this?.["jobList"]?.["find"](_0x3043d7 => {
          return _0x3043d7?.["name"]?.["includes"]("资讯点赞") && _0x3043d7?.["frequency"] > _0x3043d7?.["finish_times"];
        });
        _0x4c0106.finish_times++;
        _0x576538("账号[" + this.index + "],点赞文章成功 😄 :[" + _0x47b1b0 + "]");
      } else _0x576538("账号[" + this.index + "],用户查询:失败 🙁 了呢,原因：" + _0x2c64da?.["message"]), console.log(_0x2c64da);
    } catch (_0xff9baf) {
      console.log(_0xff9baf);
    }
  }
  async ["RSA_Encrypt"](_0x25d845) {
    const _0x1319f8 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB\n-----END PUBLIC KEY-----",
      _0x5b5778 = _0x3659ce.RSA_Encrypt(_0x25d845, _0x1319f8);
    return _0x5b5778;
  }
  async ["loginByCode"](_0x165ce7, _0x226ee8) {
    try {
      let _0x426b41 = "/api/zbtxz/login",
        _0x1447ec = _0x3659ce.guid(),
        _0x2c3ad5 = _0x3659ce.ts13(),
        _0x33088f = _0x426b41 + "&&" + (_0x165ce7 || this.sessionId || _0x2d9940) + "&&" + _0x1447ec + "&&" + _0x2c3ad5 + "&&" + this.key + "&&" + _0x2bd775,
        _0x3f072f = _0x3659ce.SHA256_Encrypt(_0x33088f),
        _0x514213 = {
          "method": "POST",
          "url": "" + this.hostname + _0x426b41,
          "headers": {
            "X-SESSION-ID": "" + (_0x165ce7 || this.sessionId || _0x2d9940),
            "X-REQUEST-ID": _0x1447ec,
            "X-TIMESTAMP": _0x2c3ad5,
            "X-SIGNATURE": _0x3f072f,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive"
          },
          "form": "code=" + _0x226ee8
        };
      this.authCookie && (_0x514213.headers.Cookie = this.authCookie);
      let _0x55946a = await _0x25449a(_0x514213, "取Token");
      if (_0x55946a.code == 0) {
        this.valid = true;
        this.sessionId = _0x55946a.data.session.id;
        this.accountId = _0x55946a.data.session.account || _0x55946a.data.session.account_id;
        _0x45e14a(_0x2dba73 + "_config", this.account, JSON.stringify({
          "id": this.accountId,
          "sessionId": this.sessionId
        }));
        _0x576538("账号[" + this.index + "],取Token成功 😄 ");
      } else this.valid = false, _0x576538("账号[" + this.index + "],取Token:失败 🙁 了呢,原因：" + (_0x55946a?.["message"]?.["includes"]("授权码信息无效") ? "请联系开发者检测App参数" : _0x55946a?.["message"])), console.log(_0x55946a);
    } catch (_0x2ecbf8) {
      console.log(_0x2ecbf8);
    }
  }
  async ["loginInit"](_0x41b539) {
    try {
      const _0x4e32a6 = "";
      let _0x457b39 = "/api/account/init",
        _0x5b16c1 = _0x3659ce.guid(),
        _0x52d1bd = _0x3659ce.ts13(),
        _0x4b6510 = _0x457b39 + "&&" + _0x5b16c1 + "&&" + _0x52d1bd + "&&" + this.key + "&&" + _0x2bd775,
        _0x21e352 = _0x3659ce.SHA256_Encrypt(_0x4b6510),
        _0x368254 = {
          "method": "POST",
          "url": "" + this.hostname + _0x457b39,
          "headers": {
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-SIGNATURE": _0x21e352,
            "X-REQUEST-ID": _0x5b16c1,
            "Content-Length": _0x4e32a6?.["length"],
            "X-SESSION-ID": "",
            "X-TENANT-ID": _0x2bd775,
            "X-TIMESTAMP": _0x52d1bd
          },
          "form": _0x4e32a6
        };
      this.authCookie && (_0x368254.headers.Cookie = this.authCookie);
      let _0x119906 = await _0x25449a(_0x368254, "登录初始化");
      _0x119906.code == 0 ? (_0x576538("账号[" + this.index + "],登录初始化成功 😄 "), _0x94f049 = _0x119906.data.session.id, await this.loginByCode(_0x119906.data.session.id, _0x41b539)) : (this.valid = false, _0x576538("账号[" + this.index + "],登录初始化:失败 🙁 了呢,原因：" + _0x119906?.["message"]));
    } catch (_0x161fe4) {
      console.log(_0x161fe4);
    }
  }
  async ["login"]() {
    let _0x3c3b20 = "/web/oauth/credential_auth",
      _0x2fa1ad = _0x3659ce.guid(),
      _0x1eff8e = _0x3659ce.ts13(),
      _0xbe9943 = _0x3c3b20 + "&&" + _0x2fa1ad + "&&" + _0x1eff8e + "&&" + this.key + "&&" + _0x2bd775;
    try {
      let _0x189db9 = {
        "method": "POST",
        "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
        "headers": {
          "User-Agent": _0x1feb2a,
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded",
          "Host": "passport.tmuyun.com",
          "Connection": "Keep-Alive"
        },
        "form": "client_id=" + (_0xf91a4d || "10001") + "&password=" + encodeURIComponent(await this.RSA_Encrypt(this.password)) + "&phone_number=" + this.account
      };
      this.authCookie && (_0x189db9.headers.Cookie = this.authCookie);
      let _0x49bdca = await _0x25449a(_0x189db9, "登录");
      _0x49bdca.code == 0 ? (_0x576538("账号[" + this.index + "],登录成功 😄 "), !_0x94f049 ? await this.loginInit(_0x49bdca.data.authorization_code.code) : await this.loginByCode(_0x94f049, _0x49bdca.data.authorization_code.code)) : (this.valid = false, _0x576538("账号[" + this.index + "],登录:失败 🙁 了呢,原因：" + _0x49bdca?.["message"]), console.log(_0x49bdca));
    } catch (_0x59115d) {
      console.log(_0x59115d);
    }
  }
  async ["app_start"]() {
    let _0x95832d = "/api/app_start_page/list/new",
      _0x40688f = _0x3659ce.guid(),
      _0x3312df = _0x3659ce.ts13(),
      _0x1c6aae = _0x95832d + "&&" + _0x2d9940 + "&&" + _0x40688f + "&&" + _0x3312df + "&&" + this.key + "&&" + _0x2bd775,
      _0x10544b = _0x3659ce.SHA256_Encrypt(_0x1c6aae);
    try {
      let _0x4469ee = {
          "method": "GET",
          "url": "" + this.hostname + _0x95832d + "?height=2206&width=1080",
          "headers": {
            "X-SESSION-ID": "" + _0x2d9940,
            "X-REQUEST-ID": _0x40688f,
            "X-TIMESTAMP": _0x3312df,
            "X-SIGNATURE": _0x10544b,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x2244d2 = await _0x25449a(_0x4469ee, "App启动中");
      _0x2244d2.code == 0 ? _0x576538("账号[" + this.index + "],App启动成功 😄 ") : _0x576538("账号[" + this.index + "],App启动:失败 🙁 了呢,原因：" + _0x2244d2?.["message"]);
    } catch (_0x3d26cb) {
      console.log(_0x3d26cb);
    }
  }
  async ["web_start"]() {
    let _0x18aa5c = "/web/init",
      _0x556ef2 = _0x3659ce.guid(),
      _0x5c2098 = _0x3659ce.ts13(),
      _0x42025f = _0x18aa5c + "&&" + _0x2d9940 + "&&" + _0x556ef2 + "&&" + _0x5c2098 + "&&" + this.key + "&&" + _0x2bd775,
      _0x10c2f9 = _0x3659ce.SHA256_Encrypt(_0x42025f);
    try {
      let _0x3b6898 = {
          "method": "GET",
          "url": "https://passport.tmuyun.com/web/init?client_id=" + _0xf91a4d,
          "headers": {
            "X-SESSION-ID": "" + _0x2d9940,
            "X-REQUEST-ID": _0x556ef2,
            "X-TIMESTAMP": _0x5c2098,
            "X-SIGNATURE": _0x10c2f9,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "passport.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4a738c = await _0x25449a(_0x3b6898, "Web初始化中", true),
        _0x43c3fe = _0x4a738c?.["body"];
      if (_0x43c3fe.code == 0) {
        let _0x4d2846 = _0x4a738c?.["rawHeaders"]?.["find"](_0x7a659b => _0x7a659b?.["includes"]("SESSION"));
        _0x4d2846 && (this.authCookie = _0x4d2846);
        _0x576538("账号[" + this.index + "],Web初始化成功 😄 ");
      } else {
        _0x576538("账号[" + this.index + "],Web初始化:失败 🙁 了呢,原因：" + _0x43c3fe?.["message"]);
      }
    } catch (_0x151037) {
      console.log(_0x151037);
    }
  }
  async ["iframe_start"]() {
    let _0x15923e = "/api/bullet_frame/detail",
      _0x140fd2 = _0x3659ce.guid(),
      _0x8066e0 = _0x3659ce.ts13(),
      _0x437049 = _0x15923e + "&&" + _0x2d9940 + "&&" + _0x140fd2 + "&&" + _0x8066e0 + "&&" + this.key + "&&" + _0x2bd775,
      _0x72d107 = _0x3659ce.SHA256_Encrypt(_0x437049);
    try {
      let _0x52fedd = {
          "method": "GET",
          "url": "" + this.hostname + _0x15923e,
          "headers": {
            "X-SESSION-ID": "" + _0x2d9940,
            "X-REQUEST-ID": _0x140fd2,
            "X-TIMESTAMP": _0x8066e0,
            "X-SIGNATURE": _0x72d107,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x6631b5 = await _0x25449a(_0x52fedd, "启动WebView中");
      _0x6631b5.code == 0 ? _0x576538("账号[" + this.index + "],启动WebView成功 😄 ") : _0x576538("账号[" + this.index + "],启动WebView:失败 🙁 了呢,原因：" + _0x6631b5?.["message"]);
    } catch (_0x9b56b6) {
      console.log(_0x9b56b6);
    }
  }
  async ["get_app_version"]() {
    let _0x23e48c = "/api/app_version/detail",
      _0xce401 = _0x3659ce.guid(),
      _0x53754d = _0x3659ce.ts13(),
      _0x4393a6 = _0x23e48c + "&&" + _0x2d9940 + "&&" + _0xce401 + "&&" + _0x53754d + "&&" + this.key + "&&" + _0x2bd775,
      _0x545b36 = _0x3659ce.SHA256_Encrypt(_0x4393a6);
    try {
      let _0x107fee = {
          "method": "GET",
          "url": "" + this.hostname + _0x23e48c,
          "headers": {
            "X-SESSION-ID": "" + _0x2d9940,
            "X-REQUEST-ID": _0xce401,
            "X-TIMESTAMP": _0x53754d,
            "X-SIGNATURE": _0x545b36,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x171045 = await _0x25449a(_0x107fee, "获取版本信息中");
      _0x171045.code == 0 ? _0x576538("账号[" + this.index + "],获取版本信息成功 😄 ") : _0x576538("账号[" + this.index + "],获取版本信息:失败 🙁 了呢,原因：" + _0x171045?.["message"]);
    } catch (_0x2699ec) {
      console.log(_0x2699ec);
    }
  }
  async ["config_get"]() {
    let _0x541191 = "/api/app_version_customize_config/mine",
      _0x7273ec = _0x3659ce.guid(),
      _0x4aca02 = _0x3659ce.ts13(),
      _0x5d0eec = _0x541191 + "&&" + _0x2d9940 + "&&" + _0x7273ec + "&&" + _0x4aca02 + "&&" + this.key + "&&" + _0x2bd775,
      _0x480cdb = _0x3659ce.SHA256_Encrypt(_0x5d0eec);
    try {
      let _0x405b19 = {
          "method": "GET",
          "url": "" + this.hostname + _0x541191,
          "headers": {
            "X-SESSION-ID": "" + _0x2d9940,
            "X-REQUEST-ID": _0x7273ec,
            "X-TIMESTAMP": _0x4aca02,
            "X-SIGNATURE": _0x480cdb,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x151ecd = await _0x25449a(_0x405b19, "获取App配置中");
      if (_0x151ecd.code == 0) _0x576538("账号[" + this.index + "],获取App配置成功 😄 ");else {
        _0x576538("账号[" + this.index + "],获取App配置:失败 🙁 了呢, 原因：" + _0x151ecd?.["message"]);
      }
    } catch (_0x459ce3) {
      console.log(_0x459ce3);
    }
  }
  async ["get_unread_msg"]() {
    let _0x4dae7e = "/api/chuanbo/unread",
      _0x42008f = _0x3659ce.guid(),
      _0x59c473 = _0x3659ce.ts13(),
      _0x526a2f = _0x4dae7e + "&&" + this.sessionId + "&&" + _0x42008f + "&&" + _0x59c473 + "&&" + this.key + "&&" + _0x2bd775,
      _0x148069 = _0x3659ce.SHA256_Encrypt(_0x526a2f);
    try {
      let _0x518ea4 = {
          "method": "GET",
          "url": "" + this.hostname + _0x4dae7e,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x42008f,
            "X-TIMESTAMP": _0x59c473,
            "X-SIGNATURE": _0x148069,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x9932f6 = await _0x25449a(_0x518ea4, "获取未读信息");
      _0x9932f6.code == 0 ? _0x576538("账号[" + this.index + "],获取未读信息成功 😄 ") : _0x576538("账号[" + this.index + "],获取未读信息:失败 🙁 了呢,原因：" + _0x9932f6?.["message"]);
    } catch (_0x222b5d) {
      console.log(_0x222b5d);
    }
  }
  async ["task_comment_pre"]() {
    let _0xd37d8d = "/api/app_feature_switch/list",
      _0x3c657f = _0x3659ce.guid(),
      _0x1db734 = _0x3659ce.ts13(),
      _0x10ebf3 = _0xd37d8d + "&&" + this.sessionId + "&&" + _0x3c657f + "&&" + _0x1db734 + "&&" + this.key + "&&" + _0x2bd775,
      _0x196534 = _0x3659ce.SHA256_Encrypt(_0x10ebf3);
    try {
      let _0xfb8caf = {
          "method": "GET",
          "url": "" + this.hostname + _0xd37d8d,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3c657f,
            "X-TIMESTAMP": _0x1db734,
            "X-SIGNATURE": _0x196534,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4fcb5d = await _0x25449a(_0xfb8caf, "文章准备工作");
      if (_0x4fcb5d.code == 0) {
        _0x576538("账号[" + this.index + "],文章准备工作成功 😄 ");
      } else _0x576538("账号[" + this.index + "],文章准备工作:失败 🙁 了呢,原因：" + _0x4fcb5d?.["message"]);
    } catch (_0x25b043) {
      console.log(_0x25b043);
    }
  }
  async ["task_comment"](_0x536d09) {
    let _0x4fb364 = _0x190079 ? await this.txt_api() : _0x4a3e0b[Math.floor(Math.random() * _0x4a3e0b?.["length"])],
      _0x1525a5 = "/api/comment/create",
      _0x4711e2 = _0x3659ce.guid(),
      _0x3a0d55 = _0x3659ce.ts13(),
      _0x142d06 = _0x1525a5 + "&&" + this.sessionId + "&&" + _0x4711e2 + "&&" + _0x3a0d55 + "&&" + this.key + "&&" + _0x2bd775,
      _0x15eb88 = _0x3659ce.SHA256_Encrypt(_0x142d06);
    try {
      let _0x1216e5 = {
          "method": "POST",
          "url": "" + this.hostname + _0x1525a5,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4711e2,
            "X-TIMESTAMP": _0x3a0d55,
            "X-SIGNATURE": _0x15eb88,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "channel_article_id": _0x536d09,
            "content": _0x4fb364
          }
        },
        _0x3aa430 = await _0x25449a(_0x1216e5, "评论");
      if (_0x3aa430.code == 0) {
        const _0x1b59a2 = this?.["jobList"]?.["find"](_0x5c3609 => {
          return _0x5c3609?.["name"]?.["includes"]("资讯评论") && _0x5c3609?.["frequency"] > _0x5c3609?.["finish_times"];
        });
        _0x1b59a2.finish_times++;
        _0x576538("账号[" + this.index + "],评论成功 😄 [" + _0x4fb364 + "]");
        const _0x3b4cd1 = _0x3aa430?.["data"]?.["comment"]?.["id"];
        await _0x48adfe(1 + Math.random() * 1);
        await this.deleteComment(_0x3b4cd1);
      } else _0x576538("账号[" + this.index + "],评论:失败 🙁 了呢,原因：" + _0x3aa430?.["message"]), this.commentError = _0x3aa430?.["message"]?.["includes"]("请重新进入当前页面");
    } catch (_0x41d476) {
      console.log(_0x41d476);
    }
  }
  async ["deleteComment"](_0x21e9b2) {
    let _0x38141c = "/api/comment/delete",
      _0x51bb1f = _0x3659ce.guid(),
      _0x181f37 = _0x3659ce.ts13(),
      _0x1ac1d2 = _0x38141c + "&&" + this.sessionId + "&&" + _0x51bb1f + "&&" + _0x181f37 + "&&" + this.key + "&&" + _0x2bd775,
      _0x2620e1 = _0x3659ce.SHA256_Encrypt(_0x1ac1d2);
    try {
      let _0x25dd71 = {
          "method": "POST",
          "url": "" + this.hostname + _0x38141c,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x51bb1f,
            "X-TIMESTAMP": _0x181f37,
            "X-SIGNATURE": _0x2620e1,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "comment_id": _0x21e9b2
          }
        },
        _0x37bb89 = await _0x25449a(_0x25dd71, "删除评论");
      _0x37bb89.code == 0 ? _0x576538("账号[" + this.index + "], 删除评论成功 😄 ") : _0x576538("账号[" + this.index + "],删除评论失败 🙁 了呢,原因：" + _0x37bb89?.["message"]);
    } catch (_0x32e4d0) {
      console.log(_0x32e4d0);
    }
  }
  async ["task_share"](_0x195e63, _0xa80652, _0x1979ea) {
    let _0xdd8434 = "/api/user_mumber/doTask",
      _0x8b99db = _0x3659ce.guid(),
      _0x3496e0 = _0x3659ce.ts13(),
      _0x942bad = _0xdd8434 + "&&" + this.sessionId + "&&" + _0x8b99db + "&&" + _0x3496e0 + "&&" + this.key + "&&" + _0x2bd775,
      _0x35d6fc = _0x3659ce.SHA256_Encrypt(_0x942bad);
    try {
      let _0x57c00e = {
          "method": "POST",
          "url": "" + this.hostname + _0xdd8434,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x8b99db,
            "X-TIMESTAMP": _0x3496e0,
            "X-SIGNATURE": _0x35d6fc,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "memberType": _0x195e63,
            "member_type": _0x195e63,
            "target_id": _0xa80652
          }
        },
        _0x2058a0 = await _0x25449a(_0x57c00e, _0x1979ea);
      if (_0x2058a0.code == 0) {
        const _0x2eef6d = this?.["jobList"]?.["find"](_0x2265b0 => {
          return _0x2265b0?.["name"]?.["includes"](_0x195e63 === "3" ? "分享资讯" : "使用本地服务") && _0x2265b0?.["frequency"] > _0x2265b0?.["finish_times"];
        });
        _0x2eef6d && _0x2eef6d.finish_times++;
        _0x576538("账号[" + this.index + "]," + _0x1979ea + "成功 😄 ");
        _0x2058a0.data && "账号[" + this.index + "]," + _0x1979ea + ("执行完毕共获得:[" + _0x2058a0.data.score_notify.integral + "]");
      } else _0x576538("账号[" + this.index + "], " + _0x1979ea + " :失败 🙁 了呢,原因：" + _0x2058a0?.["message"]), console.log(_0x2058a0);
    } catch (_0x4dd2cc) {
      console.log(_0x4dd2cc);
    }
  }
  async ["user_info"]() {
    let _0x2f11e9 = "/api/user_mumber/account_detail",
      _0x30f474 = _0x3659ce.guid(),
      _0x5c3e90 = _0x3659ce.ts13(),
      _0x2342ef = _0x2f11e9 + "&&" + this.sessionId + "&&" + _0x30f474 + "&&" + _0x5c3e90 + "&&" + this.key + "&&" + _0x2bd775,
      _0x33d0b0 = _0x3659ce.SHA256_Encrypt(_0x2342ef);
    try {
      let _0x56b50a = {
          "method": "GET",
          "url": "" + this.hostname + _0x2f11e9,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x30f474,
            "X-TIMESTAMP": _0x5c3e90,
            "X-SIGNATURE": _0x33d0b0,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x3bd53b = await _0x25449a(_0x56b50a, "用户信息");
      _0x3bd53b.code == 0 ? (this.valid = true, this.requestedUserInfo = true, _0x576538("账号[" + this.index + "],验证成功 😄 ，账号可正常使用，[" + _0x3bd53b.data.rst.nick_name + "]"), _0x3bd53b.data.rst.ref_user_uid == "" && (await this.share_code("推荐"))) : (this.valid = true, _0x576538("账号[" + this.index + "],验证失败 🙁 了呢,原因：" + _0x3bd53b?.["message"]));
    } catch (_0x8ef3a3) {
      console.log(_0x8ef3a3);
    }
  }
  async ["share_code"](_0x538680) {
    let _0x4e318e = "/api/account/update_ref_code",
      _0x45ee4e = _0x3659ce.guid(),
      _0x3ca2a3 = _0x3659ce.ts13(),
      _0x59a392 = _0x4e318e + "&&" + this.sessionId + "&&" + _0x45ee4e + "&&" + _0x3ca2a3 + "&&" + this.key + "&&" + _0x2bd775,
      _0x527dd5 = _0x3659ce.SHA256_Encrypt(_0x59a392);
    try {
      let _0x406eed = {
          "method": "POST",
          "url": "" + this.hostname + _0x4e318e,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x45ee4e,
            "X-TIMESTAMP": _0x3ca2a3,
            "X-SIGNATURE": _0x527dd5,
            "X-TENANT-ID": _0x2bd775,
            "User-Agent": _0x1feb2a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "ref_code": _0xb0ebf5 || "WET28W"
          }
        },
        _0x2150fb = await _0x25449a(_0x406eed, _0x538680);
      if (_0x2150fb.code == 0) {} else {}
    } catch (_0x378211) {
      console.log(_0x378211);
    }
  }
}
!(async () => {
  _0x576538("开始读取配置的数据……");
  if (!(await _0x3cea89())) return;
  _0x815811.length > 0 ? (_0x576538(_0x2b33a4), await _0x48adfe(0.1), await _0x168a86()) : (console.log("无可用账号，停止执行\n" + _0x3a1bfb), exit());
  await _0x50ff28(_0x46d2e6?.["name"] + "：" + _0xfc8561 + "\n");
})().catch(_0x5d59f9 => console.log(_0x5d59f9)).finally(() => _0x46d2e6.done());
function _0x45e14a(_0x434437, _0x2f4c3c, _0xcd370f) {
  let _0x1c730e = {},
    _0x2d4e3a = {};
  try {
    _0x1c730e = _0x5ce4e6.readFileSync(_0x434437 + ".json", "utf8");
    _0x2d4e3a = JSON.parse(_0x1c730e);
  } catch (_0x1b5d50) {}
  _0x2d4e3a[_0x2f4c3c] = _0xcd370f;
  const _0x2bae8f = JSON.stringify(_0x2d4e3a);
  try {
    _0x5ce4e6.writeFileSync(_0x434437 + ".json", _0x2bae8f);
  } catch (_0xeee03f) {
    _0xeee03f.code === "ENOENT" ? _0x5ce4e6.writeFileSync(_0x434437 + ".json", _0x2bae8f) : console.error("保存文件时发生错误：", _0xeee03f);
  }
}
function _0x35914e(_0xb7401a, _0x31669a) {
  try {
    const _0xc765a5 = _0x5ce4e6.readFileSync(_0xb7401a + ".json", "utf8"),
      _0x4b9608 = JSON.parse(_0xc765a5);
    return _0x4b9608[_0x31669a];
  } catch (_0x2e6bc8) {
    if (_0x2e6bc8.code === "ENOENT") return undefined;else console.error("读取文件时发生错误：", _0x2e6bc8);
  }
}
async function _0x3cea89() {
  if (_0xa9ac82) {
    let _0x26c0b6 = _0x494abb[0];
    for (let _0x3a9922 of _0x494abb) if (_0xa9ac82.indexOf(_0x3a9922) > -1) {
      _0x26c0b6 = _0x3a9922;
      break;
    }
    for (let _0x4500b0 of _0xa9ac82.split(_0x26c0b6)) _0x4500b0 && _0x815811.push(new _0x4d80f3(_0x4500b0?.["split"]("#")));
    _0x5663ef = _0x815811.length;
  } else {
    console.log("未找到CK");
    return;
  }
  return console.log("共找到" + _0x5663ef + "个账号"), true;
}
async function _0x25449a(_0x2d116d, _0x5b79cd, _0x28d5bb) {
  return new Promise(_0x13bc2e => {
    if (!_0x5b79cd) {
      let _0x2a8281 = arguments.callee.toString(),
        _0x437840 = /function\s*(\w*)/i,
        _0x559a6b = _0x437840.exec(_0x2a8281);
      _0x5b79cd = _0x559a6b[1];
    }
    _0x4bc2c8 && (console.log("\n【debug】===============这是" + _0x5b79cd + "请求信息==============="), console.log(_0x2d116d));
    _0x26a7a2(_0x2d116d, function (_0x18ca9b, _0x5dfb54) {
      if (_0x18ca9b) throw new Error(_0x18ca9b);
      let _0x37a0cf = _0x5dfb54.body;
      try {
        _0x4bc2c8 && (console.log("\n\n【debug】===============这是" + _0x5b79cd + "返回数据=============="), console.log(_0x37a0cf));
        if (typeof _0x37a0cf == "string") {
          if (_0x22e6f7(_0x37a0cf)) {
            let _0x157ed2 = JSON.parse(_0x37a0cf);
            _0x4bc2c8 && (console.log("\n【debug】=============这是" + _0x5b79cd + "json解析后数据============"), console.log(_0x157ed2));
            !_0x28d5bb ? _0x13bc2e(_0x157ed2) : _0x13bc2e({
              ..._0x5dfb54,
              "body": _0x157ed2
            });
          } else {
            let _0x3bb691 = _0x37a0cf;
            !_0x28d5bb ? _0x13bc2e(_0x3bb691) : _0x13bc2e({
              ..._0x5dfb54,
              "body": _0x3bb691
            });
          }
          function _0x22e6f7(_0x4fcb01) {
            if (typeof _0x4fcb01 == "string") try {
              if (typeof JSON.parse(_0x4fcb01) == "object") return true;
            } catch (_0x4890c0) {
              return false;
            }
            return false;
          }
        } else {
          let _0x41e729 = _0x37a0cf;
          if (!_0x28d5bb) _0x13bc2e(_0x41e729);else {
            _0x13bc2e({
              ..._0x5dfb54,
              "body": _0x41e729
            });
          }
        }
      } catch (_0x4dc364) {
        console.log(_0x18ca9b, _0x5dfb54);
        console.log("\n " + _0x5b79cd + "失败了!请稍后尝试!!");
      } finally {
        _0x13bc2e();
      }
    });
  });
}
function _0x48adfe(_0x148f78) {
  return new Promise(function (_0x3d6891) {
    setTimeout(_0x3d6891, _0x148f78 * 1000);
  });
}
function _0x576538(_0x2b9d33) {
  _0x46d2e6.isNode() ? _0x2b9d33 && (console.log("" + _0x2b9d33), _0x4792c7 += "" + _0x2b9d33) : (console.log("" + _0x2b9d33), msg += "" + _0x2b9d33);
}
async function _0x50ff28(_0x39becc) {
  if (!_0x39becc) return;
  if (_0xf8f29 > 0) {
    if (_0x46d2e6.isNode()) {
      var _0x1c7987 = require("./sendNotify");
      await _0x1c7987.sendNotify(_0x46d2e6.name, _0x39becc + "\n" + _0x4792c7);
    } else _0x46d2e6.msg(_0x46d2e6.name, "", _0x39becc + "\n" + _0x4792c7);
  } else console.log("通知服务未开启，不予推送：", _0x39becc);
}
function _0x17c6d1() {
  _0x46d2e6.isNode() && (process.on("uncaughtException", function (_0x5e7acb) {
    if (_0x5e7acb.code === "MODULE_NOT_FOUND") {
      const _0xdfc34f = _0x5e7acb.message.split("'")[1];
      _0xdfc34f.startsWith("./") ? console.log("缺少依赖文件，请前往代码库寻找 " + _0xdfc34f + " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！") : console.log("缺少依赖，请安装 " + _0xdfc34f + " 库： " + _0xdfc34f + " \n 什么？不会？v我50我教你！");
    } else {
      console.log("发生错误：" + _0x5e7acb.message);
    }
  }), process.on("unhandledRejection", function (_0x3c103e) {
    const _0x2a4eda = _0x3c103e.stack.split("\n");
    if (_0x2a4eda.length > 1) {
      const _0x38d5f9 = _0x2a4eda[1],
        _0x57a44b = _0x38d5f9.match(/\((.*):(\d+):(\d+)\)/);
      if (_0x57a44b) {
        const _0x30e6f9 = _0x57a44b[1],
          _0x599238 = _0x57a44b[2];
        console.log("程序执行出现异常，错误信息：" + _0x3c103e.message + ("，错误发生在 " + _0x30e6f9 + " 的第 " + _0x599238 + " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"));
      }
    } else console.log("发生错误：" + _0x3c103e.message);
  }));
}
function _0x482769(_0x35f057, _0x182b5a) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x3ef34f {
    constructor(_0x56c642) {
      this.env = _0x56c642;
    }
    ["send"](_0x16d33f, _0x2eeaf5 = "GET") {
      _0x16d33f = "string" == typeof _0x16d33f ? {
        "url": _0x16d33f
      } : _0x16d33f;
      let _0xdabdcf = this.get;
      return "POST" === _0x2eeaf5 && (_0xdabdcf = this.post), new Promise((_0x28cd29, _0xaeece8) => {
        _0xdabdcf.call(this, _0x16d33f, (_0x131587, _0xa83c62, _0x5070df) => {
          _0x131587 ? _0xaeece8(_0x131587) : _0x28cd29(_0xa83c62);
        });
      });
    }
    ["get"](_0x478f6a) {
      return this.send.call(this.env, _0x478f6a);
    }
    ["post"](_0x1198eb) {
      return this.send.call(this.env, _0x1198eb, "POST");
    }
  }
  return new class {
    constructor(_0x1a0d9a, _0x533ae9) {
      this.name = _0x1a0d9a;
      this.http = new _0x3ef34f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x533ae9);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x2d6d6e, _0x4069c8 = null) {
      try {
        return JSON.parse(_0x2d6d6e);
      } catch {
        return _0x4069c8;
      }
    }
    ["toStr"](_0x387406, _0x115c26 = null) {
      try {
        return JSON.stringify(_0x387406);
      } catch {
        return _0x115c26;
      }
    }
    ["getjson"](_0x5e94d5, _0x43a75a) {
      let _0x4d2cc2 = _0x43a75a;
      const _0x29e204 = this.getdata(_0x5e94d5);
      if (_0x29e204) try {
        _0x4d2cc2 = JSON.parse(this.getdata(_0x5e94d5));
      } catch {}
      return _0x4d2cc2;
    }
    ["setjson"](_0x1235f9, _0x57bc97) {
      try {
        return this.setdata(JSON.stringify(_0x1235f9), _0x57bc97);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x2f6286) {
      return new Promise(_0x4ac5f2 => {
        this.get({
          "url": _0x2f6286
        }, (_0x293389, _0x347ad4, _0x486a03) => _0x4ac5f2(_0x486a03));
      });
    }
    ["runScript"](_0x485dbb, _0x4434b2) {
      return new Promise(_0x286a04 => {
        let _0x1548aa = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x1548aa = _0x1548aa ? _0x1548aa.replace(/\n/g, "").trim() : _0x1548aa;
        let _0x521ad4 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x521ad4 = _0x521ad4 ? 1 * _0x521ad4 : 20;
        _0x521ad4 = _0x4434b2 && _0x4434b2.timeout ? _0x4434b2.timeout : _0x521ad4;
        const [_0x26a08d, _0x3e9283] = _0x1548aa.split("@"),
          _0xf63ac3 = {
            "url": "http://" + _0x3e9283 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x485dbb,
              "mock_type": "cron",
              "timeout": _0x521ad4
            },
            "headers": {
              "X-Key": _0x26a08d,
              "Accept": "*/*"
            }
          };
        this.post(_0xf63ac3, (_0x19d7d8, _0xda54f7, _0xd1265c) => _0x286a04(_0xd1265c));
      }).catch(_0x4f5e95 => this.logErr(_0x4f5e95));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x11ae77 = this.path.resolve(this.dataFile),
          _0x160233 = this.path.resolve(process.cwd(), this.dataFile),
          _0x151c9c = this.fs.existsSync(_0x11ae77),
          _0x382d13 = !_0x151c9c && this.fs.existsSync(_0x160233);
        if (!_0x151c9c && !_0x382d13) return {};
        {
          const _0x210594 = _0x151c9c ? _0x11ae77 : _0x160233;
          try {
            return JSON.parse(this.fs.readFileSync(_0x210594));
          } catch (_0x24c8f2) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3618ca = this.path.resolve(this.dataFile),
          _0x2f6ce5 = this.path.resolve(process.cwd(), this.dataFile),
          _0x1b81eb = this.fs.existsSync(_0x3618ca),
          _0x1e3e68 = !_0x1b81eb && this.fs.existsSync(_0x2f6ce5),
          _0xeeae83 = JSON.stringify(this.data);
        _0x1b81eb ? this.fs.writeFileSync(_0x3618ca, _0xeeae83) : _0x1e3e68 ? this.fs.writeFileSync(_0x2f6ce5, _0xeeae83) : this.fs.writeFileSync(_0x3618ca, _0xeeae83);
      }
    }
    ["lodash_get"](_0x429407, _0xa5f2c7, _0x348af1) {
      const _0x31f877 = _0xa5f2c7.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x38fdc5 = _0x429407;
      for (const _0x43bdf9 of _0x31f877) if (_0x38fdc5 = Object(_0x38fdc5)[_0x43bdf9], void 0 === _0x38fdc5) return _0x348af1;
      return _0x38fdc5;
    }
    ["lodash_set"](_0x30d11c, _0x9c57a2, _0x597f37) {
      return Object(_0x30d11c) !== _0x30d11c ? _0x30d11c : (Array.isArray(_0x9c57a2) || (_0x9c57a2 = _0x9c57a2.toString().match(/[^.[\]]+/g) || []), _0x9c57a2.slice(0, -1).reduce((_0x181584, _0x526e35, _0x59f6fb) => Object(_0x181584[_0x526e35]) === _0x181584[_0x526e35] ? _0x181584[_0x526e35] : _0x181584[_0x526e35] = Math.abs(_0x9c57a2[_0x59f6fb + 1]) >> 0 == +_0x9c57a2[_0x59f6fb + 1] ? [] : {}, _0x30d11c)[_0x9c57a2[_0x9c57a2.length - 1]] = _0x597f37, _0x30d11c);
    }
    ["getdata"](_0x218439) {
      let _0x46ac8e = this.getval(_0x218439);
      if (/^@/.test(_0x218439)) {
        const [, _0x586506, _0xa943db] = /^@(.*?)\.(.*?)$/.exec(_0x218439),
          _0x1422fb = _0x586506 ? this.getval(_0x586506) : "";
        if (_0x1422fb) try {
          const _0xdd8c71 = JSON.parse(_0x1422fb);
          _0x46ac8e = _0xdd8c71 ? this.lodash_get(_0xdd8c71, _0xa943db, "") : _0x46ac8e;
        } catch (_0x4cb6e8) {
          _0x46ac8e = "";
        }
      }
      return _0x46ac8e;
    }
    ["setdata"](_0x1d1644, _0x2c129d) {
      let _0x4b4489 = false;
      if (/^@/.test(_0x2c129d)) {
        const [, _0x5e0073, _0x30ed0d] = /^@(.*?)\.(.*?)$/.exec(_0x2c129d),
          _0xa6ad65 = this.getval(_0x5e0073),
          _0x50ced1 = _0x5e0073 ? "null" === _0xa6ad65 ? null : _0xa6ad65 || "{}" : "{}";
        try {
          const _0x3b634d = JSON.parse(_0x50ced1);
          this.lodash_set(_0x3b634d, _0x30ed0d, _0x1d1644);
          _0x4b4489 = this.setval(JSON.stringify(_0x3b634d), _0x5e0073);
        } catch (_0x2f8090) {
          const _0x77c0e6 = {};
          this.lodash_set(_0x77c0e6, _0x30ed0d, _0x1d1644);
          _0x4b4489 = this.setval(JSON.stringify(_0x77c0e6), _0x5e0073);
        }
      } else _0x4b4489 = this.setval(_0x1d1644, _0x2c129d);
      return _0x4b4489;
    }
    ["getval"](_0x58f7b3) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x58f7b3) : this.isQuanX() ? $prefs.valueForKey(_0x58f7b3) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x58f7b3]) : this.data && this.data[_0x58f7b3] || null;
    }
    ["setval"](_0x1b4f61, _0x8a13ed) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1b4f61, _0x8a13ed) : this.isQuanX() ? $prefs.setValueForKey(_0x1b4f61, _0x8a13ed) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x8a13ed] = _0x1b4f61, this.writedata(), !0) : this.data && this.data[_0x8a13ed] || null;
    }
    ["initGotEnv"](_0x4e5416) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x4e5416 && (_0x4e5416.headers = _0x4e5416.headers ? _0x4e5416.headers : {}, void 0 === _0x4e5416.headers.Cookie && void 0 === _0x4e5416.cookieJar && (_0x4e5416.cookieJar = this.ckjar));
    }
    ["get"](_0x500409, _0x2d35e8 = () => {}) {
      _0x500409.headers && (delete _0x500409.headers["Content-Type"], delete _0x500409.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x500409.headers = _0x500409.headers || {}, Object.assign(_0x500409.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x500409, (_0x2c67a3, _0x155520, _0x145ba4) => {
        !_0x2c67a3 && _0x155520 && (_0x155520.body = _0x145ba4, _0x155520.statusCode = _0x155520.status);
        _0x2d35e8(_0x2c67a3, _0x155520, _0x145ba4);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x500409.opts = _0x500409.opts || {}, Object.assign(_0x500409.opts, {
        "hints": !1
      })), $task.fetch(_0x500409).then(_0x15e148 => {
        const {
          statusCode: _0x2679e5,
          statusCode: _0x5d30c8,
          headers: _0x19a317,
          body: _0x577dd2
        } = _0x15e148;
        _0x2d35e8(null, {
          "status": _0x2679e5,
          "statusCode": _0x5d30c8,
          "headers": _0x19a317,
          "body": _0x577dd2
        }, _0x577dd2);
      }, _0x46bd58 => _0x2d35e8(_0x46bd58))) : this.isNode() && (this.initGotEnv(_0x500409), this.got(_0x500409).on("redirect", (_0x355c48, _0x399723) => {
        try {
          if (_0x355c48.headers["set-cookie"]) {
            const _0x3820e0 = _0x355c48.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x3820e0 && this.ckjar.setCookieSync(_0x3820e0, null);
            _0x399723.cookieJar = this.ckjar;
          }
        } catch (_0x86085f) {
          this.logErr(_0x86085f);
        }
      }).then(_0x1dbb35 => {
        const {
          statusCode: _0x2e981d,
          statusCode: _0x1822ee,
          headers: _0x333597,
          body: _0x29e98a
        } = _0x1dbb35;
        _0x2d35e8(null, {
          "status": _0x2e981d,
          "statusCode": _0x1822ee,
          "headers": _0x333597,
          "body": _0x29e98a
        }, _0x29e98a);
      }, _0x539897 => {
        const {
          message: _0x27055,
          response: _0x1792e1
        } = _0x539897;
        _0x2d35e8(_0x27055, _0x1792e1, _0x1792e1 && _0x1792e1.body);
      }));
    }
    ["post"](_0x279338, _0x99926a = () => {}) {
      if (_0x279338.body && _0x279338.headers && !_0x279338.headers["Content-Type"] && (_0x279338.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x279338.headers && delete _0x279338.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x279338.headers = _0x279338.headers || {}, Object.assign(_0x279338.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x279338, (_0x5d6a06, _0x579b23, _0x45b683) => {
        !_0x5d6a06 && _0x579b23 && (_0x579b23.body = _0x45b683, _0x579b23.statusCode = _0x579b23.status);
        _0x99926a(_0x5d6a06, _0x579b23, _0x45b683);
      });else {
        if (this.isQuanX()) _0x279338.method = "POST", this.isNeedRewrite && (_0x279338.opts = _0x279338.opts || {}, Object.assign(_0x279338.opts, {
          "hints": !1
        })), $task.fetch(_0x279338).then(_0x4157f3 => {
          const {
            statusCode: _0x4e6dca,
            statusCode: _0x4b7aeb,
            headers: _0x362995,
            body: _0xad622d
          } = _0x4157f3;
          _0x99926a(null, {
            "status": _0x4e6dca,
            "statusCode": _0x4b7aeb,
            "headers": _0x362995,
            "body": _0xad622d
          }, _0xad622d);
        }, _0x57cc4a => _0x99926a(_0x57cc4a));else {
          if (this.isNode()) {
            this.initGotEnv(_0x279338);
            const {
              url: _0x1549bc,
              ..._0x9da61c
            } = _0x279338;
            this.got.post(_0x1549bc, _0x9da61c).then(_0x174716 => {
              const {
                statusCode: _0x30e984,
                statusCode: _0x4536b7,
                headers: _0x9dc4e1,
                body: _0x2ec196
              } = _0x174716;
              _0x99926a(null, {
                "status": _0x30e984,
                "statusCode": _0x4536b7,
                "headers": _0x9dc4e1,
                "body": _0x2ec196
              }, _0x2ec196);
            }, _0x4b373a => {
              const {
                message: _0xf720c7,
                response: _0x3d8b04
              } = _0x4b373a;
              _0x99926a(_0xf720c7, _0x3d8b04, _0x3d8b04 && _0x3d8b04.body);
            });
          }
        }
      }
    }
    ["time"](_0x54fcc2, _0x3aaacb = null) {
      const _0x507048 = _0x3aaacb ? new Date(_0x3aaacb) : new Date();
      let _0x5413d6 = {
        "M+": _0x507048.getMonth() + 1,
        "d+": _0x507048.getDate(),
        "H+": _0x507048.getHours(),
        "m+": _0x507048.getMinutes(),
        "s+": _0x507048.getSeconds(),
        "q+": Math.floor((_0x507048.getMonth() + 3) / 3),
        "S": _0x507048.getMilliseconds()
      };
      /(y+)/.test(_0x54fcc2) && (_0x54fcc2 = _0x54fcc2.replace(RegExp.$1, (_0x507048.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3d265d in _0x5413d6) new RegExp("(" + _0x3d265d + ")").test(_0x54fcc2) && (_0x54fcc2 = _0x54fcc2.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5413d6[_0x3d265d] : ("00" + _0x5413d6[_0x3d265d]).substr(("" + _0x5413d6[_0x3d265d]).length)));
      return _0x54fcc2;
    }
    ["msg"](_0x36ef5e = _0x35f057, _0x3ff213 = "", _0x97c9c4 = "", _0x582085) {
      const _0x40846f = _0x37f246 => {
        if (!_0x37f246) return _0x37f246;
        if ("string" == typeof _0x37f246) return this.isLoon() ? _0x37f246 : this.isQuanX() ? {
          "open-url": _0x37f246
        } : this.isSurge() ? {
          "url": _0x37f246
        } : void 0;
        if ("object" == typeof _0x37f246) {
          if (this.isLoon()) {
            let _0x2a07d8 = _0x37f246.openUrl || _0x37f246.url || _0x37f246["open-url"],
              _0x1161d7 = _0x37f246.mediaUrl || _0x37f246["media-url"];
            return {
              "openUrl": _0x2a07d8,
              "mediaUrl": _0x1161d7
            };
          }
          if (this.isQuanX()) {
            let _0x53d419 = _0x37f246["open-url"] || _0x37f246.url || _0x37f246.openUrl,
              _0x203791 = _0x37f246["media-url"] || _0x37f246.mediaUrl;
            return {
              "open-url": _0x53d419,
              "media-url": _0x203791
            };
          }
          if (this.isSurge()) {
            let _0x1a05be = _0x37f246.url || _0x37f246.openUrl || _0x37f246["open-url"];
            return {
              "url": _0x1a05be
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x36ef5e, _0x3ff213, _0x97c9c4, _0x40846f(_0x582085)) : this.isQuanX() && $notify(_0x36ef5e, _0x3ff213, _0x97c9c4, _0x40846f(_0x582085))), !this.isMuteLog) {
        let _0x4d378d = ["", "==============📣系统通知📣=============="];
        _0x4d378d.push(_0x36ef5e);
        _0x3ff213 && _0x4d378d.push(_0x3ff213);
        _0x97c9c4 && _0x4d378d.push(_0x97c9c4);
        console.log(_0x4d378d.join("\n"));
        this.logs = this.logs.concat(_0x4d378d);
      }
    }
    ["log"](..._0x4d72be) {
      _0x4d72be.length > 0 && (this.logs = [...this.logs, ..._0x4d72be]);
      console.log(_0x4d72be.join(this.logSeparator));
    }
    ["logErr"](_0x24df81, _0x55ea4b) {
      const _0x7f4c35 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x7f4c35 ? this.log("", "❗️" + this.name + ", 错误!", _0x24df81.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x24df81);
    }
    ["wait"](_0x8d5e2) {
      return new Promise(_0x481d8a => setTimeout(_0x481d8a, _0x8d5e2));
    }
    ["done"](_0x217452 = {}) {
      const _0x430bb1 = new Date().getTime(),
        _0x2134e0 = (_0x430bb1 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2134e0 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x217452);
    }
  }(_0x35f057, _0x182b5a);
}