(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    85: function(t, e, o) {
      'use strict';
      o.r(e);
      var a = o(0),
        s = function(t) {
          var e,
            o,
            a,
            s =
              ((o = void 0),
              (a = 'music'),
              ((e = {}).type = 'page'),
              (e.internal = o),
              (e.contentType = 'markdown'),
              (e.slug = a),
              (e.content = o),
              (e.createdAt = new Date(1574123529316)),
              (e.updatedAt = new Date(1574123529316)),
              (e.layout = 'home'),
              (e.title = "音樂 - Randy's Blog"),
              (e.alias = a),
              (e.permalink = '/music'),
              (e.markdownHeadings = []),
              (e.excerpt =
                '<p>我有一个 <a href="https://www.wikiwand.com/en/Home_recording">Home studio</a>, 会录一些自己编曲的作品。这些作品可以在 <a href="https://space.bilibili.com/20931693">Bilibili</a> 或 <a href="https://www.youtube.com/channel/UCFQUVJ0_ZGzvuX6GHl_cqsQ">YouTube</a> 观看。</p>\n'),
              (e.assets = {}),
              (e.attributes = e),
              e),
            i = t.options.beforeCreate || [];
          t.options.beforeCreate = [
            function() {
              this.$page = s;
            }
          ].concat(i);
          ['layout', 'transition'].forEach(function(e) {
            var o = t.options.PageComponent;
            o && (t.options[e] = o[e]),
              void 0 === t.options[e] && (t.options[e] = s[e]);
          }),
            s.slug &&
              (t.options.name =
                'page-wrapper-' + s.slug.replace(/[^0-9a-z\-]/i, '-'));
        },
        i = Object(a.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o('layout-manager', [
              o('div', { staticClass: 'post' }, [
                o('img', {
                  attrs: {
                    src:
                      'https://gbstatic.djyde.com/assets/B77C7FF9-34E4-4CA7-BEAB-62ED1480AB20.JPG?x-oss-process=style/80'
                  }
                }),
                t._v(' '),
                o(
                  'p',
                  [
                    t._v('我有一个 '),
                    o(
                      'saber-link',
                      {
                        attrs: {
                          to: 'https://www.wikiwand.com/en/Home_recording'
                        }
                      },
                      [t._v('Home studio')]
                    ),
                    t._v(', 会录一些自己编曲的作品。这些作品可以在 '),
                    o(
                      'saber-link',
                      { attrs: { to: 'https://space.bilibili.com/20931693' } },
                      [t._v('Bilibili')]
                    ),
                    t._v(' 或 '),
                    o(
                      'saber-link',
                      {
                        attrs: {
                          to:
                            'https://www.youtube.com/channel/UCFQUVJ0_ZGzvuX6GHl_cqsQ'
                        }
                      },
                      [t._v('YouTube')]
                    ),
                    t._v(' 观看。')
                  ],
                  1
                ),
                t._v(' '),
                o('p', [t._v('如果你也在杭州，欢迎找我一起玩音乐。')])
              ])
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      'function' == typeof s && s(i);
      e.default = i.exports;
    }
  }
]);
