//Mon Mar 17 2025 03:03:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
const crypto = require("crypto");
const Notify = 1;
class Env {
  constructor(_0x6013a4) {
    this.name = _0x6013a4;
    console.log("🔔" + this.name + ",开始!");
  }
  async ["get"](_0x3bba13, _0x586880) {
    try {
      this.result = await axios.get(_0x3bba13, {
        "headers": _0x586880
      });
      return this.result.data;
    } catch (_0x2562c1) {
      console.log("error:" + _0x2562c1.message);
    }
  }
  async ["post"](_0x4f3299, _0x6ae93f, _0x182dc1) {
    try {
      this.result = await axios.post(_0x4f3299, _0x6ae93f, {
        "headers": _0x182dc1
      });
      return this.result.data;
    } catch (_0x36a5b1) {
      console.log("error:" + _0x36a5b1.message);
    }
  }
  async ["SendMsg"](_0x32f3ae) {
    if (!_0x32f3ae) return;
    if (Notify > 0) {
      var _0x4aca23 = require("./sendNotify");
      await _0x4aca23.sendNotify(this.name, _0x32f3ae);
    }
  }
  ["addMsg"](_0x3ee6ef) {
    if (!this._msg) this._msg = "";
    console.log(_0x3ee6ef);
    this._msg += _0x3ee6ef + "\n";
  }
  ["wait"](_0xb6e5e7) {
    return new Promise(_0x3eae80 => {
      setTimeout(_0x3eae80, _0xb6e5e7 * 1000);
    });
  }
  ["getToken"](_0x2b3d1a) {
    let _0x188e9c = process.env[_0x2b3d1a];
    if (!_0x188e9c) return "";
    if (_0x188e9c.includes("@")) {
      let _0x42eaf9 = _0x188e9c.split("&");
      _0x42eaf9 = _0x42eaf9.map(_0x34cf12 => {
        let _0x188e9c = _0x34cf12.split("@");
        return [_0x188e9c[0], _0x188e9c[1]];
      });
      return _0x42eaf9.length > 0 ? _0x42eaf9 : "";
    }
    let _0x487578 = _0x188e9c.split("&");
    return _0x487578.length > 0 ? _0x487578 : "";
  }
  ["done"]() {
    console.log("🔔" + this.name + ",结束!");
  }
}
async function signin(_0x1f0a3c) {
  let _0x37bf6a = new Date().getTime();
  let _0x4a5c54 = "https://api.ikbang.cn/v2/iclick-new/signIn/sign";
  let _0x4daa30 = _0x4a5c54 + _0x37bf6a + "A749380BBD5A4D93B55B4BE245A42988" + _0x1f0a3c;
  _0x4daa30 = crypto.createHash("md5").update(_0x4daa30).digest("hex");
  let _0x4b079b = {
    "Host": "api.ikbang.cn",
    "Connection": "keep-alive",
    "Content-Length": 0,
    "sign": _0x4daa30,
    "timestamp": _0x37bf6a,
    "content-type": "application/json",
    "token": _0x1f0a3c,
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002120) NetType/4G Language/zh_CN",
    "Referer": "https://servicewechat.com/wx342d760f674b013b/38/page-frame.html"
  };
  let _0x2653b9 = await $.post(_0x4a5c54, "", _0x4b079b);
  if (_0x2653b9.code == 1) {
    $.addMsg("签到成功");
  } else {
    $.addMsg(_0x2653b9.description);
  }
}
let $ = new Env("艾客帮");
(async () => {
  let _0x44433f = $.getToken("akb");
  if (!_0x44433f) await $.SendMsg("未填写token");
  for (let _0x45c744 = 0; _0x45c744 < _0x44433f.length; _0x45c744++) {
    $.addMsg("账号[" + (_0x45c744 + 1) + "]:");
    await signin(_0x44433f[_0x45c744]);
    await $.wait(3);
  }
  await $.SendMsg($._msg);
  $.done();
})();
_0xodH = "jsjiami.com.v6";