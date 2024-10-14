//Mon Oct 14 2024 08:04:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x132ea0 = function () {
  var _0x1df89f = true;
  return function (_0x374219, _0x436d5f) {
    var _0x18dc5f = _0x1df89f ? function () {
      if (_0x436d5f) {
        var _0x4feb75 = _0x436d5f.apply(_0x374219, arguments);
        return _0x436d5f = null, _0x4feb75;
      }
    } : function () {};
    return _0x1df89f = false, _0x18dc5f;
  };
}();
(function () {
  var _0x471e7d;
  try {
    var _0x41b677 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x471e7d = _0x41b677();
  } catch (_0x27f0fd) {
    _0x471e7d = window;
  }
  _0x471e7d.setInterval(_0x1633ad, 2000);
})();
(function () {
  _0x132ea0(this, function () {
    var _0x83517b = new RegExp("function *\\( *\\)"),
      _0x4899c7 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x4471a0 = _0x1633ad("init");
    if (!_0x83517b.test(_0x4471a0 + "chain") || !_0x4899c7.test(_0x4471a0 + "input")) {
      _0x4471a0("0");
    } else _0x1633ad();
  })();
})();
const _0x5e3a3d = $.getdata("kw_loginUid").split("@"),
  _0x36988a = $.getdata("kw_loginSid").split("@");
_0x5e3a3d.length === 0 || _0x36988a.length === 0 ? ($.log("⚠️用户信息不全,请获取或填入信息!"), $.msg($.name, "⚠️用户信息不全,请获取或填入信息!"), $.done()) : $.log("\n\n=====严禁贩卖=====General℡=====严禁贩卖=========== 脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " =================================\n");
const _0x290b1d = {
  "Host": "integralapi.kuwo.cn",
  "Origin": "https://h5app.kuwo.cn",
  "Connection": "keep-alive",
  "Accept": "application/json, text/plain, */*",
  "User-Agent": " Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 KWMusic/10.5.3.0 DeviceModel/iPhone13,2 NetType/WIFI kuwopage",
  "Accept-Language": " zh-CN,zh-Hans;q=0.9",
  "Referer": "https://h5app.kuwo.cn/",
  "Accept-Encoding": "gzip, deflate, br",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 KWMusic/10.5.3.0 DeviceModel/iPhone13,2 NetType/WIFI kuwopage"
};
function _0x4e3468(_0x45668d) {
  return new Promise(_0x21943b => {
    const _0x3db1a7 = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/music/userBase?loginUid=" + _0x45668d,
      _0x1275a9 = {
        "url": _0x3db1a7,
        "headers": _0x290b1d
      };
    $.log("请求URL: " + _0x3db1a7);
    $.get(_0x1275a9, (_0x34f831, _0x2a047a, _0x142ebd) => {
      try {
        if (_0x34f831) {
          $.logErr("获取昵称失败：" + _0x34f831);
          _0x21943b("");
          return;
        }
        $.log("响应数据: " + _0x142ebd);
        _0x142ebd = JSON.parse(_0x142ebd);
        if (_0x142ebd && _0x142ebd.data && _0x142ebd.data.nickname) {
          const _0x3a23b9 = _0x142ebd.data.nickname;
          _0x21943b(_0x3a23b9);
        } else $.logErr("获取昵称失败，响应数据格式不正确: " + JSON.stringify(_0x142ebd)), _0x21943b("");
      } catch (_0x529d2c) {
        $.logErr("解析昵称失败: " + _0x529d2c);
        _0x21943b("");
      }
    });
  });
}
(async () => {
  for (let _0x256242 = 0; _0x256242 < _0x5e3a3d.length; _0x256242++) {
    if (_0x5e3a3d[_0x256242] && _0x36988a[_0x256242]) {
      $.notifyMsg = [];
      const _0x2566bd = await _0x4e3468(_0x5e3a3d[_0x256242]);
      $.log("账号 " + _0x5e3a3d[_0x256242] + " 的昵称为: " + _0x2566bd);
      await _0xf8937f(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      await _0x5b9ead(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      await _0x3b926e(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      await _0x504d6a(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      await _0x49444f(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      await _0x1a48a6(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      await _0x40bb90(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      for (let _0x1ebec5 = 0; _0x1ebec5 < 20; _0x1ebec5++) {
        await _0x502c5c(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      }
      for (let _0x10bd27 = 0; _0x10bd27 < 10; _0x10bd27++) {
        await _0x53fc69(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
        await _0x48167e(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      }
      const _0x323e82 = await _0x5f3031(_0x5e3a3d[_0x256242], _0x36988a[_0x256242]);
      $.notifyMsg.push(_0x323e82);
      $.msg("【এ" + _0x2566bd + "এ】", _0x323e82, $.notifyMsg.join("\n"));
    }
  }
})().catch(_0x2aba21 => $.logErr(_0x2aba21)).finally(() => {
  $.done();
});
async function _0xf8937f(_0x5bca, _0x1d80e6) {
  let _0x25503f = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + _0x5bca + "&loginSid=" + _0x1d80e6 + "&from=novel&goldNum=18",
    "headers": _0x290b1d
  };
  return $.http.get(_0x25503f).then(_0x249d7a => {
    $.log("🟡正在执行每日小说任务...");
    var _0x74f77e,
      _0x397f8f = JSON.parse(_0x249d7a.body);
    if (_0x397f8f.code == 200 && _0x397f8f.msg == "success" && _0x397f8f.success == true) {
      _0x74f77e = _0x397f8f.data.description;
      if (_0x74f77e == "成功") _0x74f77e = "🎉每日小说: " + _0x74f77e;else {
        if (_0x74f77e == "今天已完成任务") _0x74f77e = "🟢每日小说: " + _0x74f77e;else {
          if (_0x74f77e == "用户未登录") _0x74f77e = "🔴每日小说: " + _0x74f77e;else _0x74f77e = "⚠️每日小说: " + _0x74f77e;
        }
      }
    } else _0x74f77e = "❌每日小说: 错误!", $.log(_0x249d7a.body);
    $.log(_0x74f77e);
    $.notifyMsg.push(_0x74f77e);
  });
}
async function _0x5b9ead(_0x229150, _0x3b0f4b) {
  let _0x288622 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + _0x229150 + "&loginSid=" + _0x3b0f4b + "&from=mobile&goldNum=18",
    "headers": _0x290b1d
  };
  return $.http.get(_0x288622).then(_0x81606f => {
    $.log("🟡正在执行每日听歌任务...");
    var _0x495862,
      _0x3afc1f = JSON.parse(_0x81606f.body);
    if (_0x3afc1f.code == 200 && _0x3afc1f.msg == "success" && _0x3afc1f.success == true) {
      _0x495862 = _0x3afc1f.data.description;
      if (_0x495862 == "成功") _0x495862 = "🎉每日听歌: " + _0x495862;else {
        if (_0x495862 == "今天已完成任务") _0x495862 = "🟢每日听歌: " + _0x495862;else {
          if (_0x495862 == "用户未登录") _0x495862 = "🔴每日听歌: " + _0x495862;else _0x495862 = "⚠️每日听歌: " + _0x495862;
        }
      }
    } else {
      _0x495862 = "❌每日听歌: 错误!";
      $.log(_0x81606f.body);
    }
    $.log(_0x495862);
    $.notifyMsg.push(_0x495862);
  });
}
async function _0x3b926e(_0x375b18, _0xd7c930) {
  let _0x131ec2 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + _0x375b18 + "&loginSid=" + _0xd7c930 + "&from=collect&goldNum=18",
    "headers": _0x290b1d
  };
  return $.http.get(_0x131ec2).then(_0x469f5c => {
    $.log("🟡正在执行每日收藏任务...");
    var _0x20d95f,
      _0x177a2b = JSON.parse(_0x469f5c.body);
    if (_0x177a2b.code == 200 && _0x177a2b.msg == "success" && _0x177a2b.success == true) {
      _0x20d95f = _0x177a2b.data.description;
      if (_0x20d95f == "成功") _0x20d95f = "🎉每日收藏: " + _0x20d95f;else {
        if (_0x20d95f == "今天已完成任务") _0x20d95f = "🟢每日收藏: " + _0x20d95f;else {
          if (_0x20d95f == "用户未登录") _0x20d95f = "🔴每日收藏: " + _0x20d95f;else _0x20d95f = "⚠️每日收藏: " + _0x20d95f;
        }
      }
    } else _0x20d95f = "❌每日收藏: 错误!", $.log(_0x469f5c.body);
    $.log(_0x20d95f);
    $.notifyMsg.push(_0x20d95f);
  });
}
async function _0x502c5c(_0x192217, _0x451f15) {
  let _0x382c7a = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + _0x192217 + "&loginSid=" + _0x451f15 + "&from=videoadver&goldNum=58",
    "headers": _0x290b1d
  };
  return $.http.get(_0x382c7a).then(_0x50bde3 => {
    $.log("🟡正在执行创意视频任务...");
    var _0x584b46,
      _0x207f85 = JSON.parse(_0x50bde3.body);
    if (_0x207f85.code == 200 && _0x207f85.msg == "success" && _0x207f85.success == true) {
      _0x584b46 = _0x207f85.data.description;
      if (_0x584b46 == "成功") _0x584b46 = "🎉创意视频: " + _0x584b46;else {
        if (_0x584b46 == "今天已完成任务") _0x584b46 = "🟢创意视频: " + _0x584b46;else {
          if (_0x584b46 == "用户未登录") _0x584b46 = "🔴创意视频: " + _0x584b46;else _0x584b46 = "⚠️创意视频: " + _0x584b46;
        }
      }
    } else {
      _0x584b46 = "❌创意视频: 错误!";
      $.log(_0x50bde3.body);
    }
    $.log(_0x584b46);
    $.notifyMsg.push(_0x584b46);
  });
}
async function _0x40bb90(_0x4eb29d, _0x59755c) {
  let _0x3f4b66 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + _0x4eb29d + "&loginSid=" + _0x59755c + "&from=sign&extraGoldNum=110",
    "headers": _0x290b1d
  };
  return $.http.get(_0x3f4b66).then(_0x33a650 => {
    $.log("🟡正在执行每日签到任务...");
    var _0x22ba2d,
      _0x139f87 = JSON.parse(_0x33a650.body);
    if (_0x139f87.code == 200 && _0x139f87.msg == "success" && _0x139f87.success == true) {
      _0x22ba2d = _0x139f87.data.description;
      if (_0x22ba2d == "成功") _0x22ba2d = "🎉每日签到: " + _0x22ba2d;else {
        if (_0x22ba2d == "今天已完成任务") _0x22ba2d = "🟢每日签到: " + _0x22ba2d;else {
          if (_0x22ba2d == "用户未登录") _0x22ba2d = "🔴每日签到: " + _0x22ba2d;else {
            if (_0x22ba2d == "已达到当日观看额外视频次数") _0x22ba2d = "🟢每日签到: " + _0x22ba2d;else _0x22ba2d = "⚠️每日签到: " + _0x22ba2d;
          }
        }
      }
    } else _0x22ba2d = "❌每日签到: 错误!", $.log(_0x33a650.body);
    $.log(_0x22ba2d);
    $.notifyMsg.push(_0x22ba2d);
  });
}
async function _0x1a48a6(_0x387f81, _0x1c0041) {
  let _0x49de95 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newUserSignList?loginUid=" + _0x387f81 + "&loginSid=" + _0x1c0041,
    "headers": _0x290b1d
  };
  return $.http.get(_0x49de95).then(_0x44ea87 => {
    $.log("🟡正在执行每日签到任务...");
    var _0x4050ee,
      _0x2c8484 = JSON.parse(_0x44ea87.body);
    if (_0x2c8484.code == 200 && _0x2c8484.msg == "success" && _0x2c8484.success == true) {
      _0x4050ee = _0x2c8484.data.isSign;
      if (_0x4050ee == true) _0x4050ee = "🟢每日签到: 成功!";else {
        if (_0x4050ee == "用户未登录") _0x4050ee = "🔴每日签到: 失败";
      }
    } else _0x4050ee = "❌每日签到: 错误!", $.log(_0x44ea87.body);
    $.log(_0x4050ee);
    $.notifyMsg.push(_0x4050ee);
  });
}
async function _0x49444f(_0x13be2b, _0x19f873) {
  let _0x42f6d3 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLucky?loginUid=" + _0x13be2b + "&loginSid=" + _0x19f873 + "&type=free",
    "headers": _0x290b1d
  };
  return $.http.get(_0x42f6d3).then(_0x402353 => {
    $.log("🟡正在执行免费抽奖任务...");
    var _0x302779,
      _0xb8df63 = JSON.parse(_0x402353.body);
    if (_0xb8df63.code == 200 && _0xb8df63.msg == "success" && _0xb8df63.success == true) _0x302779 = _0xb8df63.data.loterryname ? "🎉免费抽奖: " + _0xb8df63.data.loterryname : "❌免费抽奖: 错误!";else _0x302779 = _0xb8df63.msg ? "🔴免费抽奖: " + _0xb8df63.msg : "❌免费抽奖: 错误!";
    _0x302779 == "🔴免费抽奖: 免费次数用完了" && (_0x302779 = "🟢免费抽奖: 免费次数用完了");
    if (_0x302779 == "❌免费抽奖: 错误!") {
      $.log(_0x402353.body);
    }
    $.log(_0x302779);
    $.notifyMsg.push(_0x302779);
  });
}
async function _0x48167e(_0x4bd0cd, _0x270a29) {
  let _0x463f71 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLucky?loginUid=" + _0x4bd0cd + "&loginSid=" + _0x270a29 + "&type=video",
    "headers": _0x290b1d
  };
  return $.http.get(_0x463f71).then(_0x219080 => {
    $.log("🟡正在执行视频抽奖任务...");
    var _0x3fa099,
      _0x2d34c8 = JSON.parse(_0x219080.body);
    if (_0x2d34c8.code == 200 && _0x2d34c8.msg == "success" && _0x2d34c8.success == true) _0x3fa099 = _0x2d34c8.data.loterryname ? "🎉视频抽奖: " + _0x2d34c8.data.loterryname : "❌视频抽奖: 错误!";else _0x3fa099 = _0x2d34c8.msg ? "🔴视频抽奖: " + _0x2d34c8.msg : "❌视频抽奖: 错误!";
    _0x3fa099 == "🔴视频抽奖: 视频次数用完了" && (_0x3fa099 = "🟢视频抽奖: 视频次数用完了");
    _0x3fa099 == "❌视频抽奖: 错误!" && $.log(_0x219080.body);
    $.log(_0x3fa099);
    $.notifyMsg.push(_0x3fa099);
  });
}
async function _0x53fc69(_0x11f20d, _0x4e32f8) {
  var _0x99c65f = Math.random() < 0.3 ? 68 : Math.random() < 0.6 ? 69 : 70;
  let _0x117bfd = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?loginUid=" + _0x11f20d + "&loginSid=" + _0x4e32f8 + "&from=surprise&goldNum=" + _0x99c65f + "&surpriseType=",
    "headers": _0x290b1d
  };
  return $.http.get(_0x117bfd).then(_0x3a1cf4 => {
    $.log("🟡正在执行惊喜任务...");
    var _0x10aeaf;
    var _0x1500dc = JSON.parse(_0x3a1cf4.body);
    if (_0x1500dc.code == 200 && _0x1500dc.msg == "success" && _0x1500dc.success == true) {
      _0x10aeaf = _0x1500dc.data.description;
      if (_0x10aeaf == "成功") _0x10aeaf = "🎉惊喜任务: " + _0x10aeaf;else {
        if (_0x10aeaf == "今天已完成任务") _0x10aeaf = "🟢惊喜任务: " + _0x10aeaf;else {
          if (_0x10aeaf == "用户未登录") _0x10aeaf = "🔴惊喜任务: " + _0x10aeaf;else _0x10aeaf = "⚠️惊喜任务: " + _0x10aeaf;
        }
      }
    } else _0x10aeaf = "❌惊喜任务: 错误!", $.log(_0x3a1cf4.body);
    $.log(_0x10aeaf);
    $.notifyMsg.push(_0x10aeaf);
  });
}
async function _0x504d6a(_0x25949c, _0x318025) {
  var _0x4ddb8a = [],
    _0x23c9aa = new Date().getUTCHours() + 8;
  _0x23c9aa >= 0 && _0x4ddb8a.push("00-08");
  _0x23c9aa >= 8 && _0x4ddb8a.push("08-10");
  if (_0x23c9aa >= 10) {
    _0x4ddb8a.push("10-12");
  }
  _0x23c9aa >= 12 && _0x4ddb8a.push("12-14");
  _0x23c9aa >= 14 && _0x4ddb8a.push("14-16");
  _0x23c9aa >= 16 && _0x4ddb8a.push("16-18");
  _0x23c9aa >= 18 && _0x4ddb8a.push("18-20");
  _0x23c9aa >= 20 && _0x4ddb8a.push("20-24");
  var _0xe7f281 = _0x4ddb8a.length;
  await _0x3533b6(_0x4ddb8a[_0xe7f281 - 1], _0x25949c, _0x318025);
  for (var _0x43ff09 = 0; _0x43ff09 < _0xe7f281 - 1; _0x43ff09++) {
    await _0xd53d89(_0x4ddb8a[_0x43ff09], _0x25949c, _0x318025);
  }
}
async function _0x3533b6(_0x36254f, _0x41bbae, _0x2aeab8) {
  var _0x11b468 = Math.random() < 0.3 ? 28 : Math.random() < 0.6 ? 29 : 30;
  let _0xa7e408 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/new/boxRenew?loginUid=" + _0x41bbae + "&loginSid=" + _0x2aeab8 + "&action=new&time=" + _0x36254f + "&goldNum=" + _0x11b468,
    "headers": _0x290b1d
  };
  return $.http.get(_0xa7e408).then(_0x5c0583 => {
    $.log("🟡正在执行定时宝箱任务...");
    var _0x39ddfa,
      _0x2255ea = JSON.parse(_0x5c0583.body);
    if (_0x2255ea.code == 200 && _0x2255ea.msg == "success" && _0x2255ea.success == true) {
      _0x39ddfa = _0x2255ea.data.description;
      if (_0x39ddfa == "成功") _0x39ddfa = "🎉定时宝箱: " + _0x39ddfa;else {
        if (_0x39ddfa == "今天已完成任务") _0x39ddfa = "🟢定时宝箱: " + _0x39ddfa;else {
          if (_0x39ddfa == "用户未登录") _0x39ddfa = "🔴定时宝箱: " + _0x39ddfa;else _0x39ddfa = "⚠️定时宝箱: " + _0x39ddfa;
        }
      }
    } else _0x39ddfa = "❌定时宝箱: 错误!", $.log(_0x5c0583.body);
    $.log(_0x39ddfa);
    $.notifyMsg.push(_0x39ddfa);
  });
}
async function _0xd53d89(_0x1fc702, _0x302d70, _0x1dab47) {
  var _0x1d5f38 = Math.random() < 0.3 ? 28 : Math.random() < 0.6 ? 29 : 30;
  let _0x49c112 = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/new/boxRenew?loginUid=" + _0x302d70 + "&loginSid=" + _0x1dab47 + "&action=old&time=" + _0x1fc702 + "&goldNum=" + _0x1d5f38,
    "headers": _0x290b1d
  };
  return $.http.get(_0x49c112).then(_0x4a0f31 => {
    $.log("🟡正在执行补领宝箱任务...");
    var _0x142922,
      _0xc0b7b5 = JSON.parse(_0x4a0f31.body);
    if (_0xc0b7b5.code == 200 && _0xc0b7b5.msg == "success" && _0xc0b7b5.success == true) {
      _0x142922 = _0xc0b7b5.data.description;
      if (_0x142922 == "成功") _0x142922 = "🎉补领宝箱: " + _0x142922;else {
        if (_0x142922 == "今天已完成任务") _0x142922 = "🟢补领宝箱: " + _0x142922;else {
          if (_0x142922 == "用户未登录") _0x142922 = "🔴补领宝箱: " + _0x142922;else _0x142922 = "⚠️补领宝箱: " + _0x142922;
        }
      }
    } else _0x142922 = "❌补领宝箱: 错误!", $.log(_0x4a0f31.body);
    $.log(_0x142922);
    $.notifyMsg.push(_0x142922);
  });
}
async function _0x5f3031(_0x34dd58, _0x3f8b37) {
  let _0x5b824a = {
    "url": "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/earningUserSignList?loginUid=" + _0x34dd58 + "&loginSid=" + _0x3f8b37,
    "headers": _0x290b1d
  };
  return $.http.get(_0x5b824a).then(_0x111549 => {
    $.log("🟡正在查询资产...");
    var _0x2cac54,
      _0x18c74b = JSON.parse(_0x111549.body);
    if (_0x18c74b.code == 200 && _0x18c74b.msg == "success" && _0x18c74b.success == true) {
      let _0x265557 = _0x18c74b.data.remainScore ? _0x18c74b.data.remainScore : 0;
      if (_0x265557 != 0) {
        let _0x2fdf3d = (_0x265557 / 10000).toFixed(2);
        _0x2cac54 = "💰" + _0x265557 + " --> 💴" + _0x2fdf3d + " CNY";
      } else _0x2cac54 = "🔴资产查询失败!";
    } else _0x2cac54 = "❌资产查询: 错误...";
    return $.log(_0x2cac54), _0x2cac54;
  });
}
function _0x1633ad(_0x4c4f23) {
  function _0x255e2f(_0xb64fbf) {
    if (typeof _0xb64fbf === "string") {
      return function (_0x71056a) {}.constructor("while (true) {}").apply("counter");
    } else {
      ("" + _0xb64fbf / _0xb64fbf).length !== 1 || _0xb64fbf % 20 === 0 ? function () {
        return true;
      }.constructor("debugger").call("action") : function () {
        return false;
      }.constructor("debugger").apply("stateObject");
    }
    _0x255e2f(++_0xb64fbf);
  }
  try {
    if (_0x4c4f23) {
      return _0x255e2f;
    } else _0x255e2f(0);
  } catch (_0x3411b1) {}
}