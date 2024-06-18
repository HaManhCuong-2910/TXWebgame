System.register(
  "chunks:///_virtual/ButtonNapTienController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DialogController.ts",
    "./DialogRutTienController.ts",
    "./LoadingInSenceController.ts",
    "./ToastController.ts",
    "./TabDialogRutTienController.ts",
    "./contants.ts",
  ],
  function (n) {
    var t, e, o, i, r, a, s, l, u, c, g, p, h, d, f, y, C, m, b;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (o = n.initializerDefineProperty),
            (i = n.assertThisInitialized),
            (r = n.asyncToGenerator),
            (a = n.regeneratorRuntime);
        },
        function (n) {
          (s = n.cclegacy),
            (l = n._decorator),
            (u = n.Node),
            (c = n.Prefab),
            (g = n.instantiate),
            (p = n.EditBox),
            (h = n.Component);
        },
        function (n) {
          d = n.DialogController;
        },
        function (n) {
          f = n.DialogRutTienController;
        },
        function (n) {
          y = n.LoadingInSenceController;
        },
        function (n) {
          C = n.ToastController;
        },
        function (n) {
          m = n.TabDialogRutTienController;
        },
        function (n) {
          b = n.CMD;
        },
      ],
      execute: function () {
        var T, B, v, N, S, w, x, k, D, L, G;
        s._RF.push(
          {},
          "c4a09JZWmRCLIH8GzDh6t5k",
          "ButtonNapTienController",
          void 0
        );
        var I = l.ccclass,
          P = l.property;
        n(
          "ButtonNapTienController",
          ((T = I("ButtonNapTienController")),
          (B = P(u)),
          (v = P(u)),
          (N = P(c)),
          (S = P(c)),
          T(
            ((k = t(
              (x = (function (n) {
                function t() {
                  for (
                    var t, e = arguments.length, r = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = n.call.apply(n, [this].concat(r)) || this),
                    o(t, "dialogRoot", k, i(t)),
                    o(t, "TabLayout", D, i(t)),
                    o(t, "toast", L, i(t)),
                    o(t, "loadingScene", G, i(t)),
                    t
                  );
                }
                e(t, n);
                var s = t.prototype;
                return (
                  (s.onClickNapTien = function () {
                    this.handleClickNapTien(
                      this.TabLayout.getComponent(f).keyActive
                    );
                  }),
                  (s.handleViDienTu = function (n) {
                    g(this.loadingScene).getComponent(y);
                    var t = g(this.toast).getComponent(C),
                      e = this.TabLayout.getChildByName(n)
                        .getComponent(m)
                        .bodyActive.getChildByPath(
                          "GroupNhapSoTien/BgInput/EditBox"
                        )
                        .getComponent(p);
                    return e.string
                      ? Number(e.string) < 2e4
                        ? t.onShowToast("Số tiền tối thiểu là 20.000đ")
                        : void window.open(
                            b.baseUrlFrontEnd +
                              "/vnpayment?sumPrices=" +
                              Number(e.string),
                            "_blank"
                          )
                      : t.onShowToast("Vui lòng điền đầy đủ thông tin");
                  }),
                  (s.handleNganHang = (function () {
                    var n = r(
                      a().mark(function n(t) {
                        var e, o, i, r, s, l, u, c, h, f;
                        return a().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (
                                    ((e = g(this.loadingScene).getComponent(y)),
                                    (o = g(this.toast).getComponent(C)),
                                    (i = this.TabLayout.getChildByName(t)),
                                    (r = i.getComponent(m)),
                                    (s = r.bodyActive),
                                    (l = s
                                      .getChildByPath(
                                        "InfoUser/GroupUser/Bg/EditBox"
                                      )
                                      .getComponent(p)),
                                    (u = s
                                      .getChildByPath(
                                        "InfoUser/GroupUser-001/BgInput/EditBox"
                                      )
                                      .getComponent(p)),
                                    (c = s
                                      .getChildByPath(
                                        "InfoUser/GroupUser-002/Bg/EditBox"
                                      )
                                      .getComponent(p)),
                                    l.string && u.string && c.string)
                                  ) {
                                    n.next = 10;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    o.onShowToast(
                                      "Vui lòng điền đầy đủ thông tin"
                                    )
                                  );
                                case 10:
                                  if (!(Number(u.string) < 2e4)) {
                                    n.next = 12;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    o.onShowToast(
                                      "Số tiền tối thiểu là 20.000đ"
                                    )
                                  );
                                case 12:
                                  return (
                                    (h = {
                                      username: l.string,
                                      note: c.string,
                                    }),
                                    e.onShowLoading(),
                                    (n.next = 16),
                                    fetch(
                                      b.baseUrlBackEnd +
                                        "/vnpay/add-mail-in-game",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(h),
                                      }
                                    )
                                  );
                                case 16:
                                  return (f = n.sent), (n.next = 19), f.json();
                                case 19:
                                  n.sent,
                                    e.closeLoading(),
                                    o.onShowToast(
                                      "Giao dịch đang được xử lý vui lòng chờ trong giây lát"
                                    ),
                                    this.dialogRoot
                                      .getComponent(d)
                                      .closeDialog();
                                case 23:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return n.apply(this, arguments);
                    };
                  })()),
                  (s.handleNapNhanh = (function () {
                    var n = r(
                      a().mark(function n(t) {
                        var e, o, i, r, s, l, u, c, h;
                        return a().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (
                                    ((e = g(this.loadingScene).getComponent(y)),
                                    (o = g(this.toast).getComponent(C)),
                                    (i = this.TabLayout.getChildByName(t)),
                                    (r = i.getComponent(m)),
                                    (s = r.bodyActive),
                                    (l = s
                                      .getChildByPath(
                                        "GroupInfo/GroupInput/GroupUser/Bg/EditBox"
                                      )
                                      .getComponent(p)),
                                    (u = s
                                      .getChildByPath(
                                        "GroupInfo/GroupInput/GroupUser-001/Bg/EditBox"
                                      )
                                      .getComponent(p)),
                                    l.string && u.string)
                                  ) {
                                    n.next = 9;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    o.onShowToast(
                                      "Vui lòng điền đầy đủ thông tin"
                                    )
                                  );
                                case 9:
                                  return (
                                    (c = {
                                      username: l.string,
                                      note: u.string,
                                    }),
                                    e.onShowLoading(),
                                    (n.next = 13),
                                    fetch(
                                      b.baseUrlBackEnd +
                                        "/vnpay/add-mail-in-game",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(c),
                                      }
                                    )
                                  );
                                case 13:
                                  return (h = n.sent), (n.next = 16), h.json();
                                case 16:
                                  n.sent,
                                    e.closeLoading(),
                                    o.onShowToast(
                                      "Giao dịch đang được xử lý vui lòng chờ trong giây lát"
                                    ),
                                    this.dialogRoot
                                      .getComponent(d)
                                      .closeDialog();
                                case 20:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return n.apply(this, arguments);
                    };
                  })()),
                  (s.handleClickNapTien = (function () {
                    var n = r(
                      a().mark(function n(t) {
                        return a().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (
                                    ("NganHang" === t && this.handleNganHang(t),
                                    "ViDienTu" === t && this.handleViDienTu(t),
                                    "NapNhanh" !== t)
                                  ) {
                                    n.next = 5;
                                    break;
                                  }
                                  return (n.next = 5), this.handleNapNhanh(t);
                                case 5:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return n.apply(this, arguments);
                    };
                  })()),
                  (s.start = function () {}),
                  (s.update = function (n) {}),
                  t
                );
              })(h)).prototype,
              "dialogRoot",
              [B],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (D = t(x.prototype, "TabLayout", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = t(x.prototype, "toast", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = t(x.prototype, "loadingScene", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = x))
          ) || w)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ClickButtonController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, i, r, o, n, l, a, s, c, u, g;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy),
            (l = e._decorator),
            (a = e.Prefab),
            (s = e.Node),
            (c = e.SpriteFrame),
            (u = e.instantiate),
            (g = e.Component);
        },
      ],
      execute: function () {
        var p, h, d, f, m, b, y, C, D, v, F;
        n._RF.push(
          {},
          "5efeexpDmFBHLfWhnHCo0bU",
          "ClickButtonController",
          void 0
        );
        var N = l.ccclass,
          w = l.property;
        e(
          "ClickButtonController",
          ((p = N("ClickButtonController")),
          (h = w(a)),
          (d = w(s)),
          (f = w(s)),
          (m = w(c)),
          p(
            ((C = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    n[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    r(t, "dialogPre", C, o(t)),
                    r(t, "parentNode", D, o(t)),
                    r(t, "bodyDialogNode", v, o(t)),
                    r(t, "spriteFrameTitle", F, o(t)),
                    (t.dialog = void 0),
                    t
                  );
                }
                i(t, e);
                var n = t.prototype;
                return (
                  (n.openDialog = function (e, t) {
                    this.dialog && this.parentNode.removeChild(this.dialog),
                      (this.dialog = u(this.dialogPre)),
                      this.parentNode.addChild(this.dialog);
                    var i = "";
                    (i =
                      "DANG_KY" === t
                        ? "<img src='Đ' height=21/><img src='Ă' offset=1,0 height=24/><img src='N' offset=3,0 height=20/><img src='G' offset=5,0 height=21/>  <img src='K' height=21 /><img src='Ý' offset=1,0 height=26/>"
                        : ""),
                      this.dialog
                        .getComponent("DialogController")
                        .showDialog(
                          i,
                          this.bodyDialogNode,
                          this.spriteFrameTitle,
                          "F1F1F1"
                        );
                  }),
                  (n.start = function () {}),
                  (n.update = function (e) {}),
                  t
                );
              })(g)).prototype,
              "dialogPre",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (D = t(y.prototype, "parentNode", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = t(y.prototype, "bodyDialogNode", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = t(y.prototype, "spriteFrameTitle", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = y))
          ) || b)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ClickGameController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./ToastController.ts"],
  function (t) {
    var n, o, e, r, i, l, a, c, s, u;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy),
            (l = t._decorator),
            (a = t.Prefab),
            (c = t.instantiate),
            (s = t.Component);
        },
        function (t) {
          u = t.ToastController;
        },
      ],
      execute: function () {
        var p, f, h, C, g;
        i._RF.push(
          {},
          "fe6fc9bU2ZL07SN653fAg7L",
          "ClickGameController",
          void 0
        );
        var k = l.ccclass,
          m = l.property;
        t(
          "ClickGameController",
          ((p = k("ClickGameController")),
          (f = m(a)),
          p(
            ((g = n(
              (C = (function (t) {
                function n() {
                  for (
                    var n, o = arguments.length, i = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    i[l] = arguments[l];
                  return (
                    (n = t.call.apply(t, [this].concat(i)) || this),
                    e(n, "toast", g, r(n)),
                    n
                  );
                }
                o(n, t);
                var i = n.prototype;
                return (
                  (i.start = function () {}),
                  (i.OnButtonClick = function () {
                    c(this.toast)
                      .getComponent(u)
                      .onShowToast(
                        "Số dư tài khoản hiện tại không đủ quý khách vui lòng nạp thêm tiền vào tài khoản. Cộng 150% cho lần nạp đầu tiên"
                      );
                  }),
                  (i.update = function (t) {}),
                  n
                );
              })(s)).prototype,
              "toast",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (h = C))
          ) || h)
        );
        i._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/contants.ts", ["cc"], function (e) {
  var t;
  return {
    setters: [
      function (e) {
        t = e.cclegacy;
      },
    ],
    execute: function () {
      e("randomIntFromInterval", function (e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e);
      }),
        t._RF.push({}, "cd40akjdtBGs6/21onhX449", "contants", void 0);
      e("CMD", {
        baseUrlFrontEnd: "http://103.57.221.173",
        baseUrlBackEnd: "http://103.57.221.173:3002",
      }),
        e("convertToNumbers", function (e, t) {
          void 0 === t && (t = 21);
          for (
            var l = {
                0: "<img src='0' height=" + t + "/>",
                1: "<img src='1' height=" + t + "/>",
                2: "<img src='2' offset=1,0 height=" + (t - 1) + "/>",
                3: "<img src='3' offset=1,-1 height=" + t + "/>",
                4: "<img src='4' offset=1,0 height=" + (t - 1) + "/>",
                5: "<img src='5' offset=0,-1 height=" + t + "/>",
                6: "<img src='6' offset=0,-1  height=" + t + "/>",
                7: "<img src='7' offset=0,-1 height=" + t + "/>",
                8: "<img src='8' offset=0,-1  height=" + t + "/>",
                9: "<img src='9' height=" + (t - 2) + "/>",
                "+": "<img src='+' offset=0,2 height=13/>",
                ".": "<img src='chấm' offset=0,-4 height=" + (t - 6) + "/>",
              },
              a = e.split(""),
              i = "",
              n = 0;
            n < a.length;
            n++
          ) {
            i += l[a[n]];
          }
          return i;
        }),
        e("convertToNumbers1", function (e, t) {
          void 0 === t && (t = 14);
          for (
            var l = {
                0: "<img src='0' height=" + t + "/>",
                1: "<img src='1' height=" + t + "/>",
                2: "<img src='2 ' height=" + t + "/>",
                3: "<img src='3' height=" + t + "/>",
                4: "<img src='4' height=" + t + "/>",
                5: "<img src='5' height=" + t + "/>",
                6: "<img src='6'  height=" + t + "/>",
                7: "<img src='7' height=" + t + "/>",
                8: "<img src='8'  height=" + t + "/>",
                9: "<img src='9' height=" + t + "/>",
                ",": "<img src='phẩy ,' height=8/>",
                ".": "<img src='phẩy ,' height=8/>",
              },
              a = e.split(""),
              i = "",
              n = 0;
            n < a.length;
            n++
          ) {
            i += l[a[n]];
          }
          return i;
        }),
        e("formatNumberMoney", function (e) {
          var t = e;
          return (
            "string" != typeof e && (t = Number(e)),
            new Intl.NumberFormat("vi-VN").format(t).split(",")[0]
          );
        });
      e("listDataBank", [
        { label: "VietinBank", value: "VietinBank" },
        { label: "TechcomBank", value: "TechcomBank" },
        { label: "VietcomBank", value: "VietcomBank" },
        { label: "BIDV", value: "BIDV" },
        { label: "MBBank", value: "MBBank" },
        { label: "VIBBank", value: "VIBBank" },
        { label: "AgriBank", value: "AgriBank" },
        { label: "ACB", value: "ACB" },
      ]),
        e("listDataVinaPhone", [
          { label: "VinaPhone 50,000", value: 5e4 },
          { label: "VinaPhone 100,000", value: 1e5 },
          { label: "VinaPhone 200,000", value: 2e5 },
          { label: "VinaPhone 300,000", value: 2e5 },
          { label: "VinaPhone 400,000", value: 2e5 },
          { label: "VinaPhone 500,000", value: 2e5 },
        ]),
        e("listDataMobilefone", [
          { label: "Mobifone 50,000", value: 5e4 },
          { label: "Mobifone 100,000", value: 1e5 },
          { label: "Mobifone 200,000", value: 2e5 },
          { label: "Mobifone 300,000", value: 2e5 },
          { label: "Mobifone 400,000", value: 2e5 },
          { label: "Mobifone 500,000", value: 2e5 },
        ]),
        e("listDataViettel", [
          { label: "Viettel 50,000", value: 5e4 },
          { label: "Viettel 100,000", value: 1e5 },
          { label: "Viettel 200,000", value: 2e5 },
          { label: "Viettel 300,000", value: 2e5 },
          { label: "Viettel 400,000", value: 2e5 },
          { label: "Viettel 500,000", value: 2e5 },
        ]);
      t._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/CopyController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./ToastController.ts"],
  function (t) {
    var e, o, n, r, i, l, a, c, u, s, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy),
            (l = t._decorator),
            (a = t.CCString),
            (c = t.Prefab),
            (u = t.instantiate),
            (s = t.Component);
        },
        function (t) {
          p = t.ToastController;
        },
      ],
      execute: function () {
        var y, f, C, d, m, v, h;
        i._RF.push({}, "f4127mZP31JD4vuQ/nxtHOg", "CopyController", void 0);
        var b = l.ccclass,
          g = l.property;
        t(
          "CopyController",
          ((y = b("CopyController")),
          (f = g(a)),
          (C = g(c)),
          y(
            ((v = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, i = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    i[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(i)) || this),
                    n(e, "value", v, r(e)),
                    n(e, "toast", h, r(e)),
                    e
                  );
                }
                o(e, t);
                var i = e.prototype;
                return (
                  (i.onClickCopy = function () {
                    var t = u(this.toast).getComponent(p),
                      e = document.createElement("textarea");
                    (e.style.position = "fixed"),
                      (e.style.left = "0"),
                      (e.style.top = "0"),
                      (e.style.opacity = "0"),
                      (e.value = this.value),
                      document.body.appendChild(e),
                      e.focus(),
                      e.select(),
                      document.execCommand("copy"),
                      document.body.removeChild(e),
                      t.onShowToast("Đã sao chép");
                  }),
                  (i.start = function () {}),
                  (i.update = function (t) {}),
                  e
                );
              })(s)).prototype,
              "value",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (h = e(m.prototype, "toast", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = m))
          ) || d)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/debug-view-runtime-control.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    var e, o, i, n, s, l, r, a, g, h, p, c, C, d, m, u, L;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (l = t._decorator),
            (r = t.Node),
            (a = t.Color),
            (g = t.Canvas),
            (h = t.UITransform),
            (p = t.instantiate),
            (c = t.Label),
            (C = t.RichText),
            (d = t.Toggle),
            (m = t.Button),
            (u = t.director),
            (L = t.Component);
        },
      ],
      execute: function () {
        var f, M, b, v, T, S, x, E, I;
        s._RF.push(
          {},
          "b2bd1+njXxJxaFY3ymm06WU",
          "debug-view-runtime-control",
          void 0
        );
        var A = l.ccclass,
          y = l.property;
        t(
          "DebugViewRuntimeControl",
          ((f = A("internal.DebugViewRuntimeControl")),
          (M = y(r)),
          (b = y(r)),
          (v = y(r)),
          f(
            ((x = e(
              (S = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, s = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    s[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    i(e, "compositeModeToggle", x, n(e)),
                    i(e, "singleModeToggle", E, n(e)),
                    i(e, "EnableAllCompositeModeButton", I, n(e)),
                    (e._single = 0),
                    (e.strSingle = [
                      "No Single Debug",
                      "Vertex Color",
                      "Vertex Normal",
                      "Vertex Tangent",
                      "World Position",
                      "Vertex Mirror",
                      "Face Side",
                      "UV0",
                      "UV1",
                      "UV Lightmap",
                      "Project Depth",
                      "Linear Depth",
                      "Fragment Normal",
                      "Fragment Tangent",
                      "Fragment Binormal",
                      "Base Color",
                      "Diffuse Color",
                      "Specular Color",
                      "Transparency",
                      "Metallic",
                      "Roughness",
                      "Specular Intensity",
                      "IOR",
                      "Direct Diffuse",
                      "Direct Specular",
                      "Direct All",
                      "Env Diffuse",
                      "Env Specular",
                      "Env All",
                      "Emissive",
                      "Light Map",
                      "Shadow",
                      "AO",
                      "Fresnel",
                      "Direct Transmit Diffuse",
                      "Direct Transmit Specular",
                      "Env Transmit Diffuse",
                      "Env Transmit Specular",
                      "Transmit All",
                      "Direct Internal Specular",
                      "Env Internal Specular",
                      "Internal All",
                      "Fog",
                    ]),
                    (e.strComposite = [
                      "Direct Diffuse",
                      "Direct Specular",
                      "Env Diffuse",
                      "Env Specular",
                      "Emissive",
                      "Light Map",
                      "Shadow",
                      "AO",
                      "Normal Map",
                      "Fog",
                      "Tone Mapping",
                      "Gamma Correction",
                      "Fresnel",
                      "Transmit Diffuse",
                      "Transmit Specular",
                      "Internal Specular",
                      "TT",
                    ]),
                    (e.strMisc = [
                      "CSM Layer Coloration",
                      "Lighting With Albedo",
                    ]),
                    (e.compositeModeToggleList = []),
                    (e.singleModeToggleList = []),
                    (e.miscModeToggleList = []),
                    (e.textComponentList = []),
                    (e.labelComponentList = []),
                    (e.textContentList = []),
                    (e.hideButtonLabel = void 0),
                    (e._currentColorIndex = 0),
                    (e.strColor = [
                      "<color=#ffffff>",
                      "<color=#000000>",
                      "<color=#ff0000>",
                      "<color=#00ff00>",
                      "<color=#0000ff>",
                    ]),
                    (e.color = [a.WHITE, a.BLACK, a.RED, a.GREEN, a.BLUE]),
                    e
                  );
                }
                o(e, t);
                var s = e.prototype;
                return (
                  (s.start = function () {
                    if (this.node.parent.getComponent(g)) {
                      var t = this.node.parent.getComponent(h),
                        e = 0.5 * t.width,
                        o = 0.5 * t.height,
                        i = 0.1 * e - e,
                        n = o - 0.1 * o,
                        s = this.node.getChildByName("MiscMode"),
                        l = p(s);
                      (l.parent = this.node), (l.name = "Buttons");
                      var r = p(s);
                      (r.parent = this.node), (r.name = "Titles");
                      for (var u = 0; u < 2; u++) {
                        var L = p(
                          this.EnableAllCompositeModeButton.getChildByName(
                            "Label"
                          )
                        );
                        L.setPosition(i + (u > 0 ? 450 : 150), n, 0),
                          L.setScale(0.75, 0.75, 0.75),
                          (L.parent = r);
                        var f = L.getComponent(c);
                        (f.string = u
                          ? "----------Composite Mode----------"
                          : "----------Single Mode----------"),
                          (f.color = a.WHITE),
                          (f.overflow = 0),
                          (this.labelComponentList[
                            this.labelComponentList.length
                          ] = f);
                      }
                      n -= 20;
                      for (
                        var M = 0, b = 0;
                        b < this.strSingle.length;
                        b++, M++
                      ) {
                        b === this.strSingle.length >> 1 &&
                          ((i += 200), (M = 0));
                        var v = b
                          ? p(this.singleModeToggle)
                          : this.singleModeToggle;
                        v.setPosition(i, n - 20 * M, 0),
                          v.setScale(0.5, 0.5, 0.5),
                          (v.parent = this.singleModeToggle.parent);
                        var T = v.getComponentInChildren(C);
                        (T.string = this.strSingle[b]),
                          (this.textComponentList[
                            this.textComponentList.length
                          ] = T),
                          (this.textContentList[this.textContentList.length] =
                            T.string),
                          v.on(d.EventType.TOGGLE, this.toggleSingleMode, this),
                          (this.singleModeToggleList[b] = v);
                      }
                      (i += 200),
                        this.EnableAllCompositeModeButton.setPosition(
                          i + 15,
                          n,
                          0
                        ),
                        this.EnableAllCompositeModeButton.setScale(
                          0.5,
                          0.5,
                          0.5
                        ),
                        this.EnableAllCompositeModeButton.on(
                          m.EventType.CLICK,
                          this.enableAllCompositeMode,
                          this
                        ),
                        (this.EnableAllCompositeModeButton.parent = l);
                      var S =
                        this.EnableAllCompositeModeButton.getComponentInChildren(
                          c
                        );
                      this.labelComponentList[this.labelComponentList.length] =
                        S;
                      var x = p(this.EnableAllCompositeModeButton);
                      x.setPosition(i + 90, n, 0),
                        x.setScale(0.5, 0.5, 0.5),
                        x.on(m.EventType.CLICK, this.changeTextColor, this),
                        (x.parent = l),
                        ((S = x.getComponentInChildren(c)).string =
                          "TextColor"),
                        (this.labelComponentList[
                          this.labelComponentList.length
                        ] = S);
                      var E = p(this.EnableAllCompositeModeButton);
                      E.setPosition(i + 200, n, 0),
                        E.setScale(0.5, 0.5, 0.5),
                        E.on(m.EventType.CLICK, this.hideUI, this),
                        (E.parent = this.node.parent),
                        ((S = E.getComponentInChildren(c)).string = "Hide UI"),
                        (this.labelComponentList[
                          this.labelComponentList.length
                        ] = S),
                        (this.hideButtonLabel = S),
                        (n -= 40);
                      for (var I = 0; I < this.strMisc.length; I++) {
                        var A = p(this.compositeModeToggle);
                        A.setPosition(i, n - 20 * I, 0),
                          A.setScale(0.5, 0.5, 0.5),
                          (A.parent = s);
                        var y = A.getComponentInChildren(C);
                        (y.string = this.strMisc[I]),
                          (this.textComponentList[
                            this.textComponentList.length
                          ] = y),
                          (this.textContentList[this.textContentList.length] =
                            y.string),
                          (A.getComponent(d).isChecked = !!I),
                          A.on(
                            d.EventType.TOGGLE,
                            I
                              ? this.toggleLightingWithAlbedo
                              : this.toggleCSMColoration,
                            this
                          ),
                          (this.miscModeToggleList[I] = A);
                      }
                      n -= 150;
                      for (var D = 0; D < this.strComposite.length; D++) {
                        var B = D
                          ? p(this.compositeModeToggle)
                          : this.compositeModeToggle;
                        B.setPosition(i, n - 20 * D, 0),
                          B.setScale(0.5, 0.5, 0.5),
                          (B.parent = this.compositeModeToggle.parent);
                        var w = B.getComponentInChildren(C);
                        (w.string = this.strComposite[D]),
                          (this.textComponentList[
                            this.textComponentList.length
                          ] = w),
                          (this.textContentList[this.textContentList.length] =
                            w.string),
                          B.on(
                            d.EventType.TOGGLE,
                            this.toggleCompositeMode,
                            this
                          ),
                          (this.compositeModeToggleList[D] = B);
                      }
                    } else
                      console.error(
                        "debug-view-runtime-control should be child of Canvas"
                      );
                  }),
                  (s.isTextMatched = function (t, e) {
                    var o = new String(t),
                      i = o.search(">");
                    return -1 === i
                      ? t === e
                      : (o = (o = o.substr(i + 1)).substr(0, o.search("<"))) ===
                          e;
                  }),
                  (s.toggleSingleMode = function (t) {
                    for (
                      var e = u.root.debugView,
                        o = t.getComponentInChildren(C),
                        i = 0;
                      i < this.strSingle.length;
                      i++
                    )
                      this.isTextMatched(o.string, this.strSingle[i]) &&
                        (e.singleMode = i);
                  }),
                  (s.toggleCompositeMode = function (t) {
                    for (
                      var e = u.root.debugView,
                        o = t.getComponentInChildren(C),
                        i = 0;
                      i < this.strComposite.length;
                      i++
                    )
                      this.isTextMatched(o.string, this.strComposite[i]) &&
                        e.enableCompositeMode(i, t.isChecked);
                  }),
                  (s.toggleLightingWithAlbedo = function (t) {
                    u.root.debugView.lightingWithAlbedo = t.isChecked;
                  }),
                  (s.toggleCSMColoration = function (t) {
                    u.root.debugView.csmLayerColoration = t.isChecked;
                  }),
                  (s.enableAllCompositeMode = function (t) {
                    var e = u.root.debugView;
                    e.enableAllCompositeMode(!0);
                    for (
                      var o = 0;
                      o < this.compositeModeToggleList.length;
                      o++
                    ) {
                      this.compositeModeToggleList[o].getComponent(
                        d
                      ).isChecked = !0;
                    }
                    var i = this.miscModeToggleList[0].getComponent(d);
                    (i.isChecked = !1),
                      (e.csmLayerColoration = !1),
                      ((i =
                        this.miscModeToggleList[1].getComponent(d)).isChecked =
                        !0),
                      (e.lightingWithAlbedo = !0);
                  }),
                  (s.hideUI = function (t) {
                    var e = this.node.getChildByName("Titles"),
                      o = !e.active;
                    (this.singleModeToggleList[0].parent.active = o),
                      (this.miscModeToggleList[0].parent.active = o),
                      (this.compositeModeToggleList[0].parent.active = o),
                      (this.EnableAllCompositeModeButton.parent.active = o),
                      (e.active = o),
                      (this.hideButtonLabel.string = o ? "Hide UI" : "Show UI");
                  }),
                  (s.changeTextColor = function (t) {
                    this._currentColorIndex++,
                      this._currentColorIndex >= this.strColor.length &&
                        (this._currentColorIndex = 0);
                    for (var e = 0; e < this.textComponentList.length; e++)
                      this.textComponentList[e].string =
                        this.strColor[this._currentColorIndex] +
                        this.textContentList[e] +
                        "</color>";
                    for (var o = 0; o < this.labelComponentList.length; o++)
                      this.labelComponentList[o].color =
                        this.color[this._currentColorIndex];
                  }),
                  (s.onLoad = function () {}),
                  (s.update = function (t) {}),
                  e
                );
              })(L)).prototype,
              "compositeModeToggle",
              [M],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (E = e(S.prototype, "singleModeToggle", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(S.prototype, "EnableAllCompositeModeButton", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = S))
          ) || T)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DelayAnimateController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, n, i, r, a, o, l, c, u, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (o = e._decorator),
            (l = e.CCString),
            (c = e.CCFloat),
            (u = e.Animation),
            (p = e.Component);
        },
      ],
      execute: function () {
        var s, m, y, f, h, D, b;
        a._RF.push(
          {},
          "2c4b6PacJNG8643qOb9Ywni",
          "DelayAnimateController",
          void 0
        );
        var g = o.ccclass,
          A = o.property;
        e(
          "DelayAnimate",
          ((s = g("DelayAnimate")),
          (m = A(l)),
          (y = A(c)),
          s(
            ((D = t(
              (h = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    i(t, "nameAnimate", D, r(t)),
                    i(t, "timeDelay", b, r(t)),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.start = function () {
                    var e = this.getComponent(u).getState(this.nameAnimate);
                    (e.delay = this.timeDelay), e.play();
                  }),
                  (a.update = function (e) {}),
                  t
                );
              })(p)).prototype,
              "nameAnimate",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (b = t(h.prototype, "timeDelay", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (f = h))
          ) || f)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DialogController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, i, n, o, r, l, a, s, c, u, p, g, h, f, d;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (l = e._decorator),
            (a = e.Node),
            (s = e.RichText),
            (c = e.Sprite),
            (u = e.CCString),
            (p = e.Color),
            (g = e.director),
            (h = e.instantiate),
            (f = e.Animation),
            (d = e.Component);
        },
      ],
      execute: function () {
        var D, y, v, C, b, m, T, w, S, z, F;
        r._RF.push({}, "e572dWxYWpHL7UBXYP+bo1h", "DialogController", void 0);
        var I = l.ccclass,
          N = l.property;
        e(
          "DialogController",
          ((D = I("DialogController")),
          (y = N(a)),
          (v = N(s)),
          (C = N(c)),
          (b = N(u)),
          D(
            ((w = t(
              (T = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "body", w, o(t)),
                    n(t, "title", S, o(t)),
                    n(t, "spriteTitle", z, o(t)),
                    n(t, "nameDialog", F, o(t)),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.showDialog = function (e, t, i, n) {
                    (this.node.active = !0),
                      (this.title.string = e),
                      i
                        ? ((this.spriteTitle.spriteFrame = i),
                          (this.spriteTitle.color = new p(n)))
                        : (this.spriteTitle = null);
                    var o = g.getScene(),
                      r = h(t);
                    (r.parent = o), (r.active = !0), this.body.addChild(r);
                  }),
                  (r.closeDialog = function () {
                    var e = this,
                      t = this.node.getComponent(f);
                    t.play("closeDialog"),
                      t.on(
                        f.EventType.FINISHED,
                        function () {
                          return e.onCloseDialog();
                        },
                        this
                      );
                  }),
                  (r.reShowDialog = function () {
                    this.node.active = !0;
                  }),
                  (r.hideDialog = function () {
                    var e = this,
                      t = this.node.getComponent(f);
                    t.play("closeDialog"),
                      t.on(
                        f.EventType.FINISHED,
                        function () {
                          return e.onCloseDialog(!0);
                        },
                        this
                      );
                  }),
                  (r.onCloseDialog = function (e) {
                    if (!this.nameDialog || e) this.node.active = !1;
                    else {
                      var t = g.getScene().getChildByName("Canvas"),
                        i = t.getChildByName(this.nameDialog);
                      i && t.removeChild(i);
                    }
                  }),
                  (r.start = function () {}),
                  (r.update = function (e) {}),
                  t
                );
              })(d)).prototype,
              "body",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = t(T.prototype, "title", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = t(T.prototype, "spriteTitle", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = t(T.prototype, "nameDialog", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (m = T))
          ) || m)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DialogNapTienController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./contants.ts"],
  function (e) {
    var n, t, r, i, o, a, l, u, c;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (l = e.RichText),
            (u = e.Component);
        },
        function (e) {
          c = e.formatNumberMoney;
        },
      ],
      execute: function () {
        var p, s, f, g, h;
        o._RF.push(
          {},
          "20742XqzV5Ad574j0un4+qB",
          "DialogNapTienController",
          void 0
        );
        var v = a.ccclass,
          y = a.property;
        e(
          "DialogNapTienController",
          ((p = v("DialogNapTienController")),
          (s = y(l)),
          p(
            ((h = n(
              (g = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, o = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (n = e.call.apply(e, [this].concat(o)) || this),
                    r(n, "previewValueInputLabel", h, i(n)),
                    n
                  );
                }
                t(n, e);
                var o = n.prototype;
                return (
                  (o.onChangeInput = function (e, n) {
                    e.length > 10 ||
                      (this.previewValueInputLabel.string = e ? c(e) : "");
                  }),
                  (o.start = function () {}),
                  (o.update = function (e) {}),
                  n
                );
              })(u)).prototype,
              "previewValueInputLabel",
              [s],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (f = g))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DialogRutTienController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TabDialogRutTienController.ts",
  ],
  function (e) {
    var t, n, i, o, r, c, l, a, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (c = e._decorator),
            (l = e.CCString),
            (a = e.Component);
        },
        function (e) {
          u = e.TabDialogRutTienController;
        },
      ],
      execute: function () {
        var s, v, p, f, g;
        r._RF.push(
          {},
          "b20bdt70NZHIJTlu44T7HRK",
          "DialogRutTienController",
          void 0
        );
        var h = c.ccclass,
          y = c.property;
        e(
          "DialogRutTienController",
          ((s = h("DialogRutTienController")),
          (v = y(l)),
          s(
            ((g = t(
              (f = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), c = 0;
                    c < n;
                    c++
                  )
                    r[c] = arguments[c];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "keyActive", g, o(t)),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onClearAndSetActive = function (e, t) {
                    this.keyActive !== t &&
                      (this.clearActive(),
                      (this.keyActive = t),
                      e.getComponent(u).onSetActive());
                  }),
                  (r.clearActive = function () {
                    for (var e = this.node.children, t = 0; t < e.length; t++) {
                      var n = e[t];
                      if (n.name === this.keyActive)
                        return void n.getComponent(u).onClearActive();
                    }
                  }),
                  (r.onClickRutTien = function () {
                    console.log("nodeDialogRutTien key active", this.keyActive);
                  }),
                  (r.start = function () {
                    for (var e = this.node.children, t = 0; t < e.length; t++) {
                      var n = e[t];
                      if (n.name === this.keyActive)
                        return void n.getComponent(u).onSetActive();
                    }
                  }),
                  (r.update = function (e) {}),
                  t
                );
              })(a)).prototype,
              "keyActive",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (p = f))
          ) || p)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DropDownController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./contants.ts",
    "./ItemDropDownController.ts",
  ],
  function (t) {
    var e, o, i, n, a, r, s, l, D, c, p, h, u, d, f, y;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (s = t.Prefab),
            (l = t.CCString),
            (D = t.Label),
            (c = t.instantiate),
            (p = t.Component);
        },
        function (t) {
          (h = t.listDataViettel),
            (u = t.listDataMobilefone),
            (d = t.listDataVinaPhone),
            (f = t.listDataBank);
        },
        function (t) {
          y = t.ItemDropDownController;
        },
      ],
      execute: function () {
        var w, v, g, b, m, B, C;
        a._RF.push({}, "ca604ZHa51EkLo2rBhfSzDj", "DropDownController", void 0);
        var L = r.ccclass,
          S = r.property;
        t(
          "DropDownController",
          ((w = L("DropDownController")),
          (v = S(s)),
          (g = S(l)),
          w(
            ((B = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, a = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "ItemDropDown", B, n(e)),
                    i(e, "typeListData", C, n(e)),
                    (e.listData = []),
                    (e.translateY = 0),
                    (e.isActive = !1),
                    (e.itemActive = null),
                    e
                  );
                }
                o(e, t);
                var a = e.prototype;
                return (
                  (a.updateLabelDropdown = function (t) {
                    this.node
                      .getChildByPath("Dropdown/Label")
                      .getComponent(D).string = t;
                  }),
                  (a.onSetListData = function (t, e) {
                    void 0 === e && (e = 0),
                      (this.listData = t),
                      (this.translateY = e);
                  }),
                  (a.onSetValue = function (t) {
                    (this.itemActive = t),
                      this.updateLabelDropdown(t.label),
                      (this.isActive = !1),
                      this.closeBodyDropDown();
                  }),
                  (a.onMapItemToBody = function () {
                    var t = this.node
                      .getChildByName("BodyDropDown")
                      .getChildByPath("view/content");
                    if (0 !== this.listData.length)
                      for (var e = 0; e < this.listData.length; e++) {
                        var o = this.listData[e],
                          i = c(this.ItemDropDown);
                        (i.getChildByName("Label").getComponent(D).string =
                          o.label),
                          i.getComponent(y).onSetData(o),
                          t.addChild(i);
                      }
                    else t.removeAllChildren();
                  }),
                  (a.onToggleActive = function () {
                    (this.isActive = !this.isActive),
                      this.isActive
                        ? this.onOpenBodyDropDown()
                        : this.closeBodyDropDown();
                  }),
                  (a.onOpenBodyDropDown = function () {
                    this.node.getChildByName("BodyDropDown").active = !0;
                  }),
                  (a.closeBodyDropDown = function () {
                    this.node.getChildByName("BodyDropDown").active = !1;
                  }),
                  (a.setListData = function (t) {
                    switch (t) {
                      case "Bank":
                        this.onSetListData(f, 0);
                        break;
                      case "Vinaphone":
                        this.onSetListData(d, 0);
                        break;
                      case "Mobilefone":
                        this.onSetListData(u, 0);
                        break;
                      case "Viettel":
                        this.onSetListData(h, 0);
                        break;
                      default:
                        this.onSetListData([], 0);
                    }
                  }),
                  (a.start = function () {
                    this.closeBodyDropDown(),
                      this.setListData(this.typeListData),
                      this.onMapItemToBody();
                  }),
                  (a.update = function (t) {}),
                  e
                );
              })(p)).prototype,
              "ItemDropDown",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = e(m.prototype, "typeListData", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (b = m))
          ) || b)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ItemDropDownController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./DropDownController.ts"],
  function (t) {
    var o, n, e, r, a;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (e = t._decorator), (r = t.Component);
        },
        function (t) {
          a = t.DropDownController;
        },
      ],
      execute: function () {
        var l;
        n._RF.push(
          {},
          "3e9ad1UJaVPvr2XtFGWWQG9",
          "ItemDropDownController",
          void 0
        );
        var c = e.ccclass;
        e.property,
          t(
            "ItemDropDownController",
            c("ItemDropDownController")(
              (l = (function (t) {
                function n() {
                  for (
                    var o, n = arguments.length, e = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    e[r] = arguments[r];
                  return (
                    ((o = t.call.apply(t, [this].concat(e)) || this).data =
                      null),
                    o
                  );
                }
                o(n, t);
                var e = n.prototype;
                return (
                  (e.onClickItem = function () {
                    this.node
                      .getParent()
                      .getParent()
                      .getParent()
                      .getParent()
                      .getComponent(a)
                      .onSetValue(this.data);
                  }),
                  (e.onSetData = function (t) {
                    this.data = t;
                  }),
                  (e.start = function () {}),
                  (e.update = function (t) {}),
                  n
                );
              })(r))
            ) || l
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LineTextAutoRun.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./contants.ts"],
  function (e) {
    var i, t, n, s, a, r, o, u, c;
    return {
      setters: [
        function (e) {
          i = e.inheritsLoose;
        },
        function (e) {
          (t = e.cclegacy),
            (n = e._decorator),
            (s = e.RichText),
            (a = e.UITransform),
            (r = e.Vec3),
            (o = e.Component);
        },
        function (e) {
          (u = e.randomIntFromInterval), (c = e.formatNumberMoney);
        },
      ],
      execute: function () {
        var h;
        t._RF.push({}, "053e7yVUHdEmpxDBSFWMAKl", "LineTextAutoRun", void 0);
        var d = n.ccclass;
        n.property,
          e(
            "LineTextAutoRun",
            d("LineTextAutoRun")(
              (h = (function (e) {
                function t() {
                  for (
                    var i, t = arguments.length, n = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    n[s] = arguments[s];
                  return (
                    ((i =
                      e.call.apply(e, [this].concat(n)) ||
                      this).currentPos = 0),
                    (i.maxWidth = 0),
                    (i.users = [
                      "nuccuoimoi12321",
                      "thuathininkok",
                      "thiendiaday",
                      "Quankun0903",
                      "nongdan2b",
                      "kkkkhup7777",
                      "nobihihu997",
                      "thiendiaday9999",
                      "Thantau689",
                      "Hoainiem111111",
                      "khongconcaigi1",
                      "Manhvip201",
                      "chienthantaixiu11111",
                      "chszww",
                      "BiCong1090",
                      "khongsothua",
                      "choilawin100",
                      "Tiennnn",
                      "ThuyTrieuDo0000",
                      "swjskada12",
                      "pkklmsakldmqw",
                      "5432sadasdada",
                      "choi88211",
                      "chetchuahaem207678",
                      "lons2131",
                      "musiala9321",
                      "nhat2900",
                      "Kiasa0213",
                      "Khoi",
                      "0921099822",
                      "globbysoporifics",
                      "dubbinprejudging",
                      "caudleelectrized",
                      "fraudsirradicate",
                      "quernshearkening",
                      "heavedexpectably",
                      "oriolesquintings",
                      "tawneyquintettes",
                      "snarlytrifarious",
                      "dutiedepistolary",
                      "pouterspeedsters",
                      "brevesmisprinted",
                      "valvespneumonics",
                      "poperycontradict",
                      "weftedpasquinade",
                      "sandhiwholewheat",
                      "stuggygarrotting",
                      "nevernjillarooed",
                      "taxiespendulated",
                      "durbansweepstake",
                      "aswinggensdarmes",
                      "swoundmischanced",
                      "nowaysaerotropic",
                      "papieraerotactic",
                      "foetusperpetuate",
                      "osirisresearched",
                      "raphisspirations",
                      "tolterregulating",
                      "beetoncalentures",
                      "burledderbyshire",
                      "mimosaophiolater",
                      "tumpedoverlocked",
                      "paseoswanderjahr",
                      "tatersstrikingly",
                      "chasmsmurmurings",
                      "drinksadrenaline",
                      "masjidhomoousian",
                      "wimplecoachworks",
                      "logicsserpentine",
                      "abductmicrotomes",
                      "flugelenhydritic",
                      "darnelstinginess",
                      "yerdedtaffetases",
                      "morkinmetropolis",
                      "vilelyincomplete",
                      "rameestortuously",
                      "autresexceptious",
                      "belikejaundicing",
                      "longesarchitects",
                      "coquetmoneyworts",
                      "liberovoussoired",
                      "salepssuperglues",
                      "spiredprofitless",
                      "chirmswhingeings",
                      "prizedsilverback",
                      "clinchbastnasite",
                      "talletmanifolder",
                      "redeemdethroners",
                      "panzerinwrapping",
                      "viableparricides",
                      "snaggyrematching",
                      "chunksproceeding",
                      "hexactindelicate",
                      "sdeignantithesis",
                      "pluckykhrushchev",
                      "upcastspiritings",
                      "needleinnumerous",
                      "hareemschematise",
                      "shakerrecipience",
                      "smirksnocturnals",
                      "balledfrolicking",
                      "bovinediatribist",
                      "unbusyparbuckled",
                      "saxonschirurgery",
                      "weaklydispeopled",
                      "knivesspermatics",
                      "whingyscratchers",
                      "brazenmidsummers",
                      "conoidsociopathy",
                      "trivetequalising",
                      "shlepslucubrator",
                      "etneantewkesbury",
                      "alasestemptingly",
                      "tiffedsusurrated",
                      "sabotseurhythmic",
                      "hainesmarkswomen",
                      "lipomaroadsteads",
                      "ricersnotaphilic",
                      "baningmisfeature",
                      "dyablerefuseniks",
                      "restemchurchyard",
                      "chuddymaledicent",
                      "crunchgodrooning",
                      "gulletslanderous",
                      "elopedcamphorate",
                      "sahibsnomographs",
                      "coulispetroglyph",
                      "manentpostfixing",
                      "mananaarrowroots",
                      "gasketbenchmarks",
                    ]),
                    (i.games = [
                      "Tài xỉu",
                      "Tây Du Ký",
                      "Xóc Đĩa",
                      "Tiến lên Miền Nam",
                      "Bầu Cua",
                      "Pocker",
                      "Sâm",
                    ]),
                    i
                  );
                }
                i(t, e);
                var n = t.prototype;
                return (
                  (n.start = function () {
                    this.onSetTextAndUpdate();
                  }),
                  (n.onSetTextAndUpdate = function () {
                    for (
                      var e = this.node.getComponent(s),
                        i = [],
                        t = JSON.parse(JSON.stringify(this.users)),
                        n = u(0, this.games.length - 1),
                        r = 0;
                      r < 60;
                      r++
                    ) {
                      var o = u(0, t.length - 1),
                        h = t[o],
                        d = u(1e6, 1e8);
                      i.push(
                        this.games[n] +
                          "  <color=#E9530CF1>" +
                          h +
                          "</color> thắng  <color=#D30000F1>" +
                          c(d) +
                          "</color>"
                      ),
                        t.splice(o, 1);
                    }
                    (e.string = i.join("       ")),
                      (this.maxWidth =
                        this.node.getComponent(a).contentSize.width),
                      (this.currentPos = this.maxWidth - 16e3),
                      this.updatePos();
                  }),
                  (n.updatePos = function () {
                    this.node.position = new r(this.currentPos, -23.55);
                  }),
                  (n.update = function (e) {
                    this.currentPos - 16e3 <= -1 * this.maxWidth
                      ? this.onSetTextAndUpdate()
                      : ((this.currentPos -= 5), this.updatePos());
                  }),
                  t
                );
              })(o))
            ) || h
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingCommonController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (n) {
    var o, e, r, t, i, a, c, l, u;
    return {
      setters: [
        function (n) {
          (o = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (r = n.initializerDefineProperty),
            (t = n.assertThisInitialized);
        },
        function (n) {
          (i = n.cclegacy),
            (a = n._decorator),
            (c = n.ProgressBar),
            (l = n.director),
            (u = n.Component);
        },
      ],
      execute: function () {
        var s, p, d, f, g;
        i._RF.push(
          {},
          "067b4c2vwxCXqsiCF8EpE56",
          "LoadingCommonController",
          void 0
        );
        var y = a.ccclass,
          m = a.property;
        n(
          "Loading",
          ((s = y("Loading")),
          (p = m(c)),
          s(
            ((g = o(
              (f = (function (n) {
                function o() {
                  for (
                    var o, e = arguments.length, i = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    (o = n.call.apply(n, [this].concat(i)) || this),
                    r(o, "barLoading", g, t(o)),
                    o
                  );
                }
                e(o, n);
                var i = o.prototype;
                return (
                  (i.start = function () {}),
                  (i.loadScene = function (n) {
                    l.preloadScene(
                      n,
                      function (n, o, e) {
                        console.log("completedCount", n);
                      },
                      function () {
                        l.loadScene(n);
                      }
                    );
                  }),
                  (i.update = function (n) {}),
                  o
                );
              })(u)).prototype,
              "barLoading",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (d = f))
          ) || d)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingInSenceController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var n, o, t, r, i;
    return {
      setters: [
        function (e) {
          n = e.inheritsLoose;
        },
        function (e) {
          (o = e.cclegacy),
            (t = e._decorator),
            (r = e.director),
            (i = e.Component);
        },
      ],
      execute: function () {
        var c;
        o._RF.push(
          {},
          "76be9HRw6BBkrzNU0ykIQ0b",
          "LoadingInSenceController",
          void 0
        );
        var a = t.ccclass;
        t.property,
          e(
            "LoadingInSenceController",
            a("LoadingInSenceController")(
              (c = (function (e) {
                function o() {
                  return e.apply(this, arguments) || this;
                }
                n(o, e);
                var t = o.prototype;
                return (
                  (t.start = function () {}),
                  (t.onShowLoading = function () {
                    var e = r.getScene().getChildByName("Canvas"),
                      n = e.getChildByName("LoadingInScene");
                    n && e.removeChild(n), e.addChild(this.node);
                  }),
                  (t.closeLoading = function () {
                    r.getScene()
                      .getChildByName("Canvas")
                      .removeChild(this.node);
                  }),
                  (t.update = function (e) {}),
                  o
                );
              })(i))
            ) || c
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingSenceController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var n, o, r, t, i, a, l, c, s, d, g;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (o = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (t = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (a = e._decorator),
            (l = e.Node),
            (c = e.director),
            (s = e.ProgressBar),
            (d = e.Label),
            (g = e.Component);
        },
      ],
      execute: function () {
        var u, p, f, h, y;
        i._RF.push(
          {},
          "cf302gFB55C27/8OH91UArW",
          "LoadingSenceController",
          void 0
        );
        var C = a.ccclass,
          m = a.property;
        e(
          "LoadingSenceController",
          ((u = C("LoadingSenceController")),
          (p = m(l)),
          u(
            ((y = n(
              (h = (function (e) {
                function n() {
                  for (
                    var n, o = arguments.length, i = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    (n = e.call.apply(e, [this].concat(i)) || this),
                    r(n, "loadingNode", y, t(n)),
                    n
                  );
                }
                o(n, e);
                var i = n.prototype;
                return (
                  (i.start = function () {
                    var e = this;
                    c.preloadScene(
                      "new_login",
                      function (n, o, r) {
                        (e.loadingNode
                          .getChildByName("ProgressBar")
                          .getComponent(s).progress = n / o),
                          (e.loadingNode
                            .getChildByName("ProgressBar")
                            .getChildByName("Label")
                            .getComponent(d).string =
                            Math.round((n / o) * 100) + "%");
                      },
                      function () {
                        c.loadScene("new_login");
                      }
                    );
                  }),
                  (i.update = function (e) {}),
                  n
                );
              })(g)).prototype,
              "loadingNode",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (f = h))
          ) || f)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoginController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ToastController.ts",
    "./DialogController.ts",
    "./contants.ts",
  ],
  function (e) {
    var t, n, r, a, o, s, i, u, c, g, h, l, p, d, f, m, b, C;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (a = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (s = e.regeneratorRuntime);
        },
        function (e) {
          (i = e.cclegacy),
            (u = e._decorator),
            (c = e.EditBox),
            (g = e.Prefab),
            (h = e.director),
            (l = e.Component),
            (p = e.ProgressBar),
            (d = e.Label),
            (f = e.instantiate);
        },
        function (e) {
          m = e.ToastController;
        },
        function (e) {
          b = e.DialogController;
        },
        function (e) {
          C = e.CMD;
        },
      ],
      execute: function () {
        var y, B, k, P, v, w, x, S, N, T, D;
        i._RF.push({}, "d54d1UTV8dOA4bGgmjCmNrY", "LoginController", void 0);
        var L = u.ccclass,
          M = u.property;
        e(
          "actionButtonController",
          ((y = L("actionButtonController")),
          (B = M(c)),
          (k = M(c)),
          (P = M(c)),
          (v = M(g)),
          y(
            ((S = t(
              (x = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "username", S, a(t)),
                    r(t, "password", N, a(t)),
                    r(t, "confirmPassword", T, a(t)),
                    r(t, "toast", D, a(t)),
                    t
                  );
                }
                n(t, e);
                var i = t.prototype;
                return (
                  (i.onSubmit = (function () {
                    var e = o(
                      s().mark(function e(t, n) {
                        return s().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ("DANG_KY" !== n) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (e.next = 3), this.onRegister();
                                case 3:
                                  if ("DANG_NHAP" !== n) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (e.next = 6), this.onLogin();
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.onRegister = (function () {
                    var e = o(
                      s().mark(function e() {
                        var t, n, r, a, o, i, u, c, g, l, y, B;
                        return s().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = h
                                      .getScene()
                                      .getChildByName("Canvas")),
                                    (n = t.getChildByPath("Main/ButtonDangKy")),
                                    (r = t.getChildByPath(
                                      "Main/ButtonDangNhap"
                                    )),
                                    (a = t.getChildByPath("Main/Loading")),
                                    (o = this.node
                                      .getParent()
                                      .getParent()
                                      .getParent()
                                      .getParent()
                                      .getParent()),
                                    (i = f(this.toast)),
                                    (u = i.getComponent(m)),
                                    (c = this.username.string),
                                    (g = this.password.string),
                                    (l = this.confirmPassword.string),
                                    c)
                                  ) {
                                    e.next = 12;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    u.onShowToast(
                                      "Tên đăng nhập không được bỏ trống"
                                    )
                                  );
                                case 12:
                                  if (g) {
                                    e.next = 14;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    u.onShowToast(
                                      "Mật khẩu không được bỏ trống"
                                    )
                                  );
                                case 14:
                                  if (l) {
                                    e.next = 16;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    u.onShowToast(
                                      "Xác nhận mật khẩu không được bỏ trống"
                                    )
                                  );
                                case 16:
                                  if (g === l) {
                                    e.next = 18;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    u.onShowToast(
                                      "Xác nhận mật khẩu không khớp"
                                    )
                                  );
                                case 18:
                                  return (
                                    (n.active = !1),
                                    (r.active = !1),
                                    o.getComponent(b).hideDialog(),
                                    (a.active = !0),
                                    (a
                                      .getChildByName("ProgressBar")
                                      .getComponent(p).progress = 0.5),
                                    (a
                                      .getChildByName("ProgressBar")
                                      .getChildByName("Label")
                                      .getComponent(d).string =
                                      "Đang đăng ký..."),
                                    (e.next = 26),
                                    fetch(C.baseUrlBackEnd + "/auth/register", {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        username: c,
                                        password: g,
                                      }),
                                    })
                                  );
                                case 26:
                                  return (y = e.sent), (e.next = 29), y.json();
                                case 29:
                                  if (200 !== (B = e.sent).statusCode) {
                                    e.next = 35;
                                    break;
                                  }
                                  return (e.next = 33), this.onLogin(!0);
                                case 33:
                                  e.next = 39;
                                  break;
                                case 35:
                                  return (
                                    (n.active = !0),
                                    (r.active = !0),
                                    (a.active = !1),
                                    e.abrupt("return", u.onShowToast(B.message))
                                  );
                                case 39:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.onLogin = (function () {
                    var e = o(
                      s().mark(function e(t) {
                        var n, r, a, o, i, u, c, g, l, y, B;
                        return s().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((n = h
                                      .getScene()
                                      .getChildByName("Canvas")),
                                    (r = n.getChildByPath("Main/ButtonDangKy")),
                                    (a = n.getChildByPath(
                                      "Main/ButtonDangNhap"
                                    )),
                                    (o = n.getChildByPath("Main/Loading")),
                                    (i = this.node
                                      .getParent()
                                      .getParent()
                                      .getParent()
                                      .getParent()
                                      .getParent()),
                                    (u = f(this.toast)),
                                    (c = u.getComponent(m)),
                                    (g = this.username.string),
                                    (l = this.password.string),
                                    g)
                                  ) {
                                    e.next = 11;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    c.onShowToast(
                                      "Tên đăng nhập không được bỏ trống"
                                    )
                                  );
                                case 11:
                                  if (l) {
                                    e.next = 13;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    c.onShowToast(
                                      "Mật khẩu không được bỏ trống"
                                    )
                                  );
                                case 13:
                                  return (
                                    t ||
                                      ((r.active = !1),
                                      (a.active = !1),
                                      i.getComponent(b).hideDialog(),
                                      (o.active = !0)),
                                    (o
                                      .getChildByName("ProgressBar")
                                      .getComponent(p).progress = 0.6),
                                    (o
                                      .getChildByName("ProgressBar")
                                      .getChildByName("Label")
                                      .getComponent(d).string =
                                      "Đang đăng nhập..."),
                                    (e.next = 18),
                                    fetch(C.baseUrlBackEnd + "/auth/login", {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        username: g,
                                        password: l,
                                      }),
                                    })
                                  );
                                case 18:
                                  return (y = e.sent), (e.next = 21), y.json();
                                case 21:
                                  if (200 !== (B = e.sent).statusCode) {
                                    e.next = 30;
                                    break;
                                  }
                                  sessionStorage.setItem(
                                    "username",
                                    B.message.username
                                  ),
                                    sessionStorage.setItem(
                                      "access_token",
                                      B.message.access_token
                                    ),
                                    sessionStorage.setItem(
                                      "listMessage",
                                      JSON.stringify(B.message.listMessage)
                                    ),
                                    (o
                                      .getChildByName("ProgressBar")
                                      .getChildByName("Label")
                                      .getComponent(d).string =
                                      "Đang tải game..."),
                                    h.preloadScene(
                                      "sanh_choi",
                                      function (e, t, n) {
                                        o
                                          .getChildByName("ProgressBar")
                                          .getComponent(p).progress = e / t;
                                      },
                                      function () {
                                        h.loadScene("sanh_choi");
                                      }
                                    ),
                                    (e.next = 32);
                                  break;
                                case 30:
                                  return (
                                    t ||
                                      ((r.active = !0),
                                      (a.active = !0),
                                      (o.active = !1)),
                                    e.abrupt("return", c.onShowToast(B.message))
                                  );
                                case 32:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.loadSanhChoi = function () {
                    h.loadScene("sanh_choi");
                  }),
                  (i.start = function () {}),
                  (i.update = function (e) {}),
                  t
                );
              })(l)).prototype,
              "username",
              [B],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (N = t(x.prototype, "password", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(x.prototype, "confirmPassword", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(x.prototype, "toast", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = x))
          ) || w)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/main",
  [
    "./debug-view-runtime-control.ts",
    "./CopyController.ts",
    "./DialogController.ts",
    "./LoadingCommonController.ts",
    "./RichTextNumberWeightController.ts",
    "./contants.ts",
    "./ButtonNapTienController.ts",
    "./DialogNapTienController.ts",
    "./DialogRutTienController.ts",
    "./TabDialogRutTienController.ts",
    "./DropDownController.ts",
    "./ItemDropDownController.ts",
    "./ClickGameController.ts",
    "./DelayAnimateController.ts",
    "./LoadingInSenceController.ts",
    "./ToastController.ts",
    "./LoadingSenceController.ts",
    "./ClickButtonController.ts",
    "./LoginController.ts",
    "./LineTextAutoRun.ts",
    "./MenuController.ts",
    "./MenuTabController.ts",
    "./MessagesController.ts",
    "./MiniGameController.ts",
    "./NapRutTienController.ts",
    "./TabButtonController.ts",
  ],
  function () {
    return {
      setters: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/MenuController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./DialogController.ts"],
  function (e) {
    var o, n, t, i, r, a, l, c, u, d, s, g, p, f;
    return {
      setters: [
        function (e) {
          (o = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (a = e._decorator),
            (l = e.Node),
            (c = e.Prefab),
            (u = e.director),
            (d = e.instantiate),
            (s = e.Vec3),
            (g = e.AudioSource),
            (p = e.Component);
        },
        function (e) {
          f = e.DialogController;
        },
      ],
      execute: function () {
        var h, C, y, b, v, m, k, D, S, w, M;
        r._RF.push({}, "1e597/5sLdPzrffxltTnFUc", "MenuController", void 0);
        var T = a.ccclass,
          N = a.property;
        e(
          "MenuController",
          ((h = T("MenuController")),
          (C = N(l)),
          (y = N(c)),
          (b = N(c)),
          (v = N(l)),
          h(
            ((D = o(
              (k = (function (e) {
                function o() {
                  for (
                    var o, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (o = e.call.apply(e, [this].concat(r)) || this),
                    t(o, "nodeToSet", D, i(o)),
                    t(o, "dialog", S, i(o)),
                    t(o, "bodyDialog", w, i(o)),
                    t(o, "checkMark", M, i(o)),
                    o
                  );
                }
                n(o, e);
                var r = o.prototype;
                return (
                  (r.onShowNode = function () {
                    this.nodeToSet.active = !0;
                  }),
                  (r.onHideNode = function () {
                    this.nodeToSet.active = !1;
                  }),
                  (r.onToggleNode = function () {
                    this.nodeToSet.active = !this.nodeToSet.active;
                  }),
                  (r.onShowLink = function (e, o) {
                    window.open(o, "_blank");
                  }),
                  (r.onShowDialog = function (e, o) {
                    var n = u.getScene().getChildByName("Canvas"),
                      t = d(this.dialog);
                    (t.name = "MenuDialog"),
                      (t.getComponent(f).nameDialog = "MenuDialog"),
                      (t.getComponent(f).title.string = o),
                      t
                        .getChildByPath("BgDialog/Body")
                        .addChild(d(this.bodyDialog)),
                      n.addChild(t);
                  }),
                  (r.onCheckMarkToggle = function (e, o) {
                    var n = e.isChecked ? 34.4485 : -33.182;
                    if (
                      (this.checkMark.setPosition(new s(n, 0.645)),
                      "NHAC_NEN" === o)
                    ) {
                      var t = u.getScene().getChildByName("Canvas");
                      e.isChecked
                        ? t.getComponent(g).play()
                        : t.getComponent(g).stop();
                    }
                  }),
                  (r.start = function () {}),
                  (r.update = function (e) {}),
                  o
                );
              })(p)).prototype,
              "nodeToSet",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = o(k.prototype, "dialog", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = o(k.prototype, "bodyDialog", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = o(k.prototype, "checkMark", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = k))
          ) || m)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MenuTabController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TabButtonController.ts"],
  function (e) {
    var t, n, i, r, o, a, c, l, u, v, s, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (c = e.CCString),
            (l = e.SpriteFrame),
            (u = e.Sprite),
            (v = e.Animation),
            (s = e.Component);
        },
        function (e) {
          p = e.TabButtonController;
        },
      ],
      execute: function () {
        var h, b, g, f, m, y, A, C, d;
        o._RF.push({}, "023129XR/VIcLRSz1rJG0vM", "MenuTabController", void 0);
        var T = a.ccclass,
          S = a.property;
        e(
          "MenuTabController",
          ((h = T("MenuTabController")),
          (b = S(c)),
          (g = S(l)),
          (f = S(l)),
          h(
            ((A = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "keyActive", A, r(t)),
                    i(t, "bgNormal", C, r(t)),
                    i(t, "bgActive", d, r(t)),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onClearAndSetActive = function (e, t) {
                    this.keyActive !== t &&
                      (this.clearActive(),
                      (this.keyActive = t),
                      this.onSetActive(e));
                  }),
                  (o.clearActive = function () {
                    for (var e = this.node.children, t = 0; t < e.length; t++) {
                      var n = e[t];
                      if (n.name === this.keyActive)
                        return void this.onClearActive(n);
                    }
                  }),
                  (o.onSetActive = function (e) {
                    var t = e.getChildByName("TabBg"),
                      n = e.getChildByName("LineTab"),
                      i = e.getComponent(p),
                      r = t.getComponent(u),
                      o = t.getComponent(v);
                    (n.active = !0),
                      o.play("FadeInNoLoop"),
                      (r.spriteFrame = this.bgActive),
                      i.onSetActive();
                  }),
                  (o.onClearActive = function (e) {
                    var t = e.getChildByName("TabBg"),
                      n = e.getChildByName("LineTab"),
                      i = t.getComponent(u);
                    (n.active = !1), (i.spriteFrame = this.bgNormal);
                  }),
                  (o.start = function () {
                    for (var e = this.node.children, t = 0; t < e.length; t++) {
                      var n = e[t];
                      if (n.name === this.keyActive)
                        return void this.onSetActive(n);
                    }
                  }),
                  (o.update = function (e) {}),
                  t
                );
              })(s)).prototype,
              "keyActive",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (C = t(y.prototype, "bgNormal", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = t(y.prototype, "bgActive", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = y))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MessagesController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./contants.ts"],
  function (e) {
    var t, n, s, i, a, r, o, l, g, c, u, p, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (s = e.initializerDefineProperty),
            (i = e.assertThisInitialized),
            (a = e.asyncToGenerator),
            (r = e.regeneratorRuntime);
        },
        function (e) {
          (o = e.cclegacy),
            (l = e._decorator),
            (g = e.Node),
            (c = e.Label),
            (u = e.RichText),
            (p = e.Component);
        },
        function (e) {
          h = e.CMD;
        },
      ],
      execute: function () {
        var m, f, M, d, C, y, D, b, v;
        o._RF.push({}, "faa25nBSWZJFYha9dbUq7jp", "MessagesController", void 0);
        var S = l.ccclass,
          N = l.property;
        e(
          "MessagesController",
          ((m = S("MessagesController")),
          (f = N(g)),
          (M = N(g)),
          (d = N(g)),
          m(
            ((D = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    s(t, "ListMessage", D, i(t)),
                    s(t, "DetailMessage", b, i(t)),
                    s(t, "ItemMessage", v, i(t)),
                    (t.itemActive = ""),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onClearMessage = (function () {
                    var e = a(
                      r().mark(function e() {
                        var t;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = JSON.parse(
                                      sessionStorage.getItem("listMessage")
                                    )),
                                    sessionStorage.setItem("listMessage", "[]"),
                                    this.onSetMessage(),
                                    !(t && t.length > 0))
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    (e.next = 6),
                                    fetch(
                                      h.baseUrlBackEnd + "/message/delete",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ id: t[0]._id }),
                                      }
                                    )
                                  );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.onSetMessage = function () {
                    var e = JSON.parse(sessionStorage.getItem("listMessage"));
                    if (e && e.length > 0) {
                      var t = new Date(e[0].createdAt);
                      (this.ItemMessage.getChildByName("Title").getComponent(
                        c
                      ).string = e[0].title.toUpperCase()),
                        (this.ItemMessage.getChildByName("Date").getComponent(
                          c
                        ).string =
                          t.getDate() +
                          "-" +
                          t.getMonth() +
                          "-" +
                          t.getFullYear()),
                        (this.DetailMessage.getChildByName(
                          "TitleDetail"
                        ).getComponent(c).string = e[0].title),
                        (this.DetailMessage.getChildByName(
                          "ContentDetail"
                        ).getComponent(u).string = e[0].message);
                    } else
                      this.ListMessage.removeAllChildren(),
                        (this.DetailMessage.getChildByName(
                          "TitleDetail"
                        ).getComponent(c).string = ""),
                        (this.DetailMessage.getChildByName(
                          "ContentDetail"
                        ).getComponent(u).string = "Không có tin nhắn nào");
                  }),
                  (o.start = function () {
                    this.onSetMessage();
                  }),
                  (o.update = function (e) {}),
                  t
                );
              })(p)).prototype,
              "ListMessage",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (b = t(y.prototype, "DetailMessage", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = t(y.prototype, "ItemMessage", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = y))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniGameController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (n) {
    var o, t, e, i, r, c;
    return {
      setters: [
        function (n) {
          o = n.inheritsLoose;
        },
        function (n) {
          (t = n.cclegacy),
            (e = n._decorator),
            (i = n.Node),
            (r = n.Vec3),
            (c = n.Component);
        },
      ],
      execute: function () {
        var s;
        t._RF.push({}, "a4d542UMEhDfKuIJ8gqTtG/", "MiniGameController", void 0);
        var u = e.ccclass;
        e.property,
          n(
            "MiniGameController",
            u("MiniGameController")(
              (s = (function (n) {
                function t() {
                  return n.apply(this, arguments) || this;
                }
                o(t, n);
                var e = t.prototype;
                return (
                  (e.start = function () {
                    this.node.on(
                      i.EventType.TOUCH_START,
                      this.onTouchStart,
                      this
                    ),
                      this.node.on(
                        i.EventType.TOUCH_MOVE,
                        this.onTouchMove,
                        this
                      ),
                      this.node.on(
                        i.EventType.TOUCH_END,
                        this.onTouchEnd,
                        this
                      ),
                      this.node.on(
                        i.EventType.TOUCH_CANCEL,
                        this.onTouchCancel,
                        this
                      );
                  }),
                  (e.onTouchStart = function (n) {
                    var o = n.getLocation(),
                      t = 0.8465608465608466 * o.x,
                      e = 0.9091544863277152 * o.y;
                    this.node.getParent().setWorldPosition(new r(t, e, 0));
                  }),
                  (e.onTouchMove = function (n) {
                    var o = n.getLocation(),
                      t = 0.8465608465608466 * o.x,
                      e = 0.9091544863277152 * o.y;
                    this.node.getParent().setWorldPosition(new r(t, e, 0));
                  }),
                  (e.onTouchEnd = function (n) {
                    console.log("event end", n);
                  }),
                  (e.onTouchCancel = function (n) {}),
                  (e.update = function (n) {}),
                  t
                );
              })(c))
            ) || s
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NapRutTienController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, r, n, i, o, a, l, c, u, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (l = e.Prefab),
            (c = e.director),
            (u = e.instantiate),
            (p = e.Component);
        },
      ],
      execute: function () {
        var s, f, d, g, h;
        o._RF.push(
          {},
          "ceffc/OzNlDaZe6xczg9LBQ",
          "NapRutTienController",
          void 0
        );
        var y = a.ccclass,
          v = a.property;
        e(
          "NapRutTienController",
          ((s = y("NapRutTienController")),
          (f = v(l)),
          s(
            ((h = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, o = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "dialog", h, i(t)),
                    t
                  );
                }
                r(t, e);
                var o = t.prototype;
                return (
                  (o.onShowDialog = function () {
                    var e = c.getScene().getChildByName("Canvas"),
                      t = u(this.dialog);
                    e.addChild(t);
                  }),
                  (o.start = function () {}),
                  (o.update = function (e) {}),
                  t
                );
              })(p)).prototype,
              "dialog",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (d = g))
          ) || d)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RichTextNumberWeightController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./contants.ts"],
  function (e) {
    var t, r, n, i, o, a, u, c, s, l, p, b, h, m;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (u = e.CCString),
            (c = e.CCBoolean),
            (s = e.CCInteger),
            (l = e.RichText),
            (p = e.Component);
        },
        function (e) {
          (b = e.convertToNumbers1),
            (h = e.formatNumberMoney),
            (m = e.randomIntFromInterval);
        },
      ],
      execute: function () {
        var f, g, I, v, C, y, N, d, T;
        o._RF.push(
          {},
          "d02aagQavNGKLW70CkH9skF",
          "RichTextNumberWeightController",
          void 0
        );
        var R = a.ccclass,
          x = a.property;
        e(
          "RichTextNumberWeightController",
          ((f = R("RichTextNumberWeightController")),
          (g = x(u)),
          (I = x(c)),
          (v = x(s)),
          f(
            ((N = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, o = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "numbersProp", N, i(t)),
                    n(t, "isIncrease", d, i(t)),
                    n(t, "numberToIncrease", T, i(t)),
                    t
                  );
                }
                r(t, e);
                var o = t.prototype;
                return (
                  (o.fillDataValue = function (e) {
                    this.node.getComponent(l).string = b(h(e));
                  }),
                  (o.countNumberUp = function (e) {
                    var t = m(8, 16),
                      r = e,
                      n = this,
                      i = setInterval(function () {
                        0 === t
                          ? clearInterval(i)
                          : ((r = Math.round(e / t)),
                            n.fillDataValue(r.toString()),
                            t--);
                      }, 200);
                  }),
                  (o.autoIncreaseNumbers = function (e) {
                    this.countNumberUp(e);
                  }),
                  (o.start = function () {
                    this.numbersProp && this.fillDataValue(this.numbersProp),
                      this.isIncrease &&
                        this.autoIncreaseNumbers(this.numberToIncrease);
                  }),
                  (o.update = function (e) {}),
                  t
                );
              })(p)).prototype,
              "numbersProp",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (d = t(y.prototype, "isIncrease", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (T = t(y.prototype, "numberToIncrease", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (C = y))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TabButtonController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./MenuTabController.ts"],
  function (t) {
    var e, n, r, i, o, a, l, s, c, u, f, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (l = t.Prefab),
            (s = t.Node),
            (c = t.instantiate),
            (u = t.Vec3),
            (f = t.Component);
        },
        function (t) {
          p = t.MenuTabController;
        },
      ],
      execute: function () {
        var b, h, d, v, m, C, y;
        o._RF.push(
          {},
          "97362B29EFLJLw/y3P5pFRl",
          "TabButtonController",
          void 0
        );
        var P = a.ccclass,
          g = a.property;
        t(
          "TabButtonController",
          ((b = P("TabButtonController")),
          (h = g([l])),
          (d = g(s)),
          b(
            ((C = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    r(e, "listPrefabs", C, i(e)),
                    r(e, "containerListGame", y, i(e)),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onSetActive = function () {
                    this.node
                      .getParent()
                      .getComponent(p)
                      .onClearAndSetActive(this.node, this.node.name),
                      this.containerListGame.removeAllChildren();
                    for (var t = 0; t < this.listPrefabs.length; t++) {
                      var e = c(this.listPrefabs[t]);
                      this.containerListGame.addChild(e);
                    }
                    this.containerListGame.setPosition(new u(3002.517, 0, 0));
                  }),
                  (o.onClearActive = function () {}),
                  (o.start = function () {}),
                  (o.OnButtonPress = function () {}),
                  (o.update = function (t) {}),
                  e
                );
              })(f)).prototype,
              "listPrefabs",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (y = e(m.prototype, "containerListGame", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = m))
          ) || v)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TabDialogRutTienController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DialogRutTienController.ts",
    "./DropDownController.ts",
  ],
  function (t) {
    var e, o, n, i, r, l, a, u, c, p, s, b, g;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (l = t._decorator),
            (a = t.SpriteFrame),
            (u = t.Node),
            (c = t.Button),
            (p = t.Sprite),
            (s = t.Component);
        },
        function (t) {
          b = t.DialogRutTienController;
        },
        function (t) {
          g = t.DropDownController;
        },
      ],
      execute: function () {
        var f, d, D, y, h, v, m, C, A, w, T, R, z;
        r._RF.push(
          {},
          "5833f1NRwNDVIGl6cP0AYZf",
          "TabDialogRutTienController",
          void 0
        );
        var N = l.ccclass,
          S = l.property;
        t(
          "TabDialogRutTienController",
          ((f = N("TabDialogRutTienController")),
          (d = S(a)),
          (D = S(a)),
          (y = S(u)),
          (h = S(c)),
          (v = S(u)),
          f(
            ((A = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, r = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "bgNormal", A, i(e)),
                    n(e, "bgActive", w, i(e)),
                    n(e, "bodyActive", T, i(e)),
                    n(e, "buttonDialog", R, i(e)),
                    n(e, "bodyDropDown", z, i(e)),
                    e
                  );
                }
                o(e, t);
                var r = e.prototype;
                return (
                  (r.onClick = function () {
                    this.node
                      .getParent()
                      .getComponent(b)
                      .onClearAndSetActive(this.node, this.node.name);
                  }),
                  (r.onClearActive = function () {
                    (this.node.getComponent(p).spriteFrame = this.bgNormal),
                      this.bodyActive && (this.bodyActive.active = !1);
                  }),
                  (r.onSetActive = function () {
                    if (
                      ((this.node.getComponent(p).spriteFrame = this.bgActive),
                      this.bodyActive && (this.bodyActive.active = !0),
                      this.bodyDropDown)
                    ) {
                      var t = this.bodyDropDown.getComponent(g);
                      (t.listData = []),
                        t.onMapItemToBody(),
                        t.onSetValue({ label: "Chọn mệnh giá thẻ", value: "" }),
                        t.setListData(this.node.name),
                        t.onMapItemToBody();
                    }
                  }),
                  (r.start = function () {}),
                  (r.update = function (t) {}),
                  e
                );
              })(s)).prototype,
              "bgNormal",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (w = e(C.prototype, "bgActive", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(C.prototype, "bodyActive", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(C.prototype, "buttonDialog", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(C.prototype, "bodyDropDown", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = C))
          ) || m)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ToastController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    var e, o, n, i, r, s, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy),
            (n = t._decorator),
            (i = t.director),
            (r = t.RichText),
            (s = t.Animation),
            (a = t.Component);
        },
      ],
      execute: function () {
        var c;
        o._RF.push({}, "1f798NA4ltH3aXXuAEQuMXs", "ToastController", void 0);
        var l = n.ccclass;
        n.property,
          t(
            "ToastController",
            l("ToastController")(
              (c = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                e(o, t);
                var n = o.prototype;
                return (
                  (n.start = function () {
                    var t = this;
                    setTimeout(function () {
                      t.closeToast();
                    }, 1e3);
                  }),
                  (n.onShowToast = function (t) {
                    var e = i.getScene().getChildByName("Canvas"),
                      o = e.getChildByName("Toast");
                    o && e.removeChild(o),
                      (this.node
                        .getChildByName("Label")
                        .getComponent(r).string = t),
                      e.addChild(this.node);
                  }),
                  (n.closeToast = function () {
                    var t = this,
                      e = this.getComponent(s);
                    e.play("CloseToastAnimte"),
                      e.on(
                        s.EventType.FINISHED,
                        function () {
                          (t.node.active = !1),
                            i
                              .getScene()
                              .getChildByName("Canvas")
                              .removeChild(t.node);
                        },
                        this
                      );
                  }),
                  (n.update = function (t) {}),
                  o
                );
              })(a))
            ) || c
          );
        o._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/main", "chunks:///_virtual/main");
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [
        function (_m) {
          var _exportObj = {};

          for (var _key in _m) {
            if (_key !== "default" && _key !== "__esModule")
              _exportObj[_key] = _m[_key];
          }

          _export(_exportObj);
        },
      ],
      execute: function () {},
    };
  });
});
