(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{281:function(t,e,l){"use strict";var n=l(43),r=Object(n.b)({props:{title:{type:String,required:!0}}}),o=l(40),c=l(63),v=l.n(c),d=l(276),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"center"}},[e("div",{staticClass:"display-3 primary--text"},[this._v(this._s(this.title))])])}),[],!1,null,null,null);e.a=component.exports;v()(component,{VRow:d.a})},288:function(t,e,l){var content=l(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("328df538",content,!0,{sourceMap:!1})},296:function(t,e,l){"use strict";var n=l(288);l.n(n).a},297:function(t,e,l){(e=l(11)(!1)).push([t.i,".job-page .v-timeline--dense .v-timeline-item__opposite{display:block;position:absolute;left:-20px}",""]),t.exports=e},313:function(t,e,l){"use strict";l.r(e);var n=l(43),r=l(281),o=[{color:"secondary",year:2007,title:"筑波大学 入学",text:"理工学群 工学システム学類"},{color:"secondary",year:2011,title:"同大学 卒業",text:"学位（工学）を取得"},{color:"accent",year:2011,title:"筑波大学大学院 入学",text:"システム情報工学研究科 リスク工学専攻"},{color:"accent",year:2013,title:"同大学院 卒業",text:"修士（工学）を取得"},{color:"warning",year:2013,title:"富士ゼロックス株式会社",text:"ソリューション開発部にて、BtoBのSaaSを開発"},{color:"warning",year:2019,title:"メドピア株式会社",text:"SREとしてアーキテクトやインフラ構築を担当"}],c=Object(n.b)({components:{PageTitle:r.a},setup:function(){return{timeline:o}}}),v=(l(296),l(40)),d=l(63),f=l.n(d),y=l(282),_=l(280),x=l(309),m=l(310),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"job-page"},[l("page-title",{attrs:{title:"Job"}}),t._v(" "),l("v-timeline",{attrs:{dense:""}},t._l(t.timeline,(function(e){return l("v-timeline-item",{key:e.title,attrs:{"fill-dot":"",small:"",color:e.color},scopedSlots:t._u([{key:"opposite",fn:function(){return[l("div",{staticClass:"title",staticStyle:{"margin-top":"4px"}},[t._v("\n          "+t._s(e.year)+"\n        ")])]},proxy:!0}],null,!0)},[t._v(" "),l("v-card",[l("v-card-title",{class:e.color+"--text"},[t._v(t._s(e.title))]),t._v(" "),l("v-card-text",[t._v(t._s(e.text))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCard:y.a,VCardText:_.b,VCardTitle:_.c,VTimeline:x.a,VTimelineItem:m.a})}}]);