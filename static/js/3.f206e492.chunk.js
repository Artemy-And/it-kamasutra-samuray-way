(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{293:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(34),s=a(35),r=a(39),o=a(38),l=a(0),u=a.n(l),c=a(9),i=function(e){return function(t){Object(r.a)(l,t);var a=Object(o.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(s.a)(l,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/login"})}}]),l}(u.a.Component)}},294:function(e,t,a){e.exports={avaDescription:"ProfileItem_avaDescription__2808L"}},295:function(e,t,a){e.exports={postAll:"MyPosts_postAll__oSmsB",posts:"MyPosts_posts__3tZ1c"}},296:function(e,t,a){e.exports={content:"Post_content__1RpGJ",item:"Post_item__ihtu9"}},297:function(e,t,a){"use strict";a.r(t);var n=a(34),s=a(35),r=a(39),o=a(38),l=a(0),u=a.n(l),c=a(294),i=a.n(c),p=a(31),m=a(129),f=function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),n=a[0],s=a[1],r=Object(l.useState)(e.status),o=Object(m.a)(r,2),c=o[0],i=o[1];Object(l.useEffect)((function(){i(e.status)}),[e.status]);return u.a.createElement("div",null,!n&&u.a.createElement("div",null,u.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||" no status ","dd")),n&&u.a.createElement("div",null,u.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.getUpdateUserStatus(c)},value:c,onChange:function(e){i(e.currentTarget.value)}})))},d=function(e){return e.profile?u.a.createElement("div",null,u.a.createElement("div",null),u.a.createElement("div",{className:i.a.avaDescription},u.a.createElement("div",null,"FullName: ",e.profile.fullName),u.a.createElement("img",{src:e.profile.photos.large}),u.a.createElement(f,{status:e.status,getUpdateUserStatus:e.getUpdateUserStatus}),u.a.createElement("div",null,u.a.createElement("span",null,"Contacts: ",e.profile.contacts.facebook),u.a.createElement("span",null,"Contacts: ",e.profile.contacts.github)),u.a.createElement("div",null,u.a.createElement("p",null,"\u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b: ",e.profile.lookingForAJobDescription)),"ava + desription")):u.a.createElement(p.a,null)},E=a(55),b=a(295),h=a.n(b),v=a(296),g=a.n(v),U=function(e){return u.a.createElement("div",{className:g.a.item},u.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,e.likesCount)))},O=a(127),j=a(128),P=a(73),S=a(66),_=u.a.memo((function(e){var t=e.posts.map((function(e){return u.a.createElement(U,{message:e.message,likesCount:e.countLikes})}));return u.a.createElement("div",{className:h.a.postAll},"My posts",u.a.createElement(A,{onSubmit:function(t){e.addPost(t.newPostText)}}),u.a.createElement("div",{className:h.a.posts},t))}));console.log("my posts");var y=Object(P.a)(10),k=u.a.memo((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(O.a,{placeholder:"post",name:"newPostText",component:S.b,validate:[P.b,y]})),u.a.createElement("div",null,u.a.createElement("button",null,"Add post"))))})),A=Object(j.a)({form:"MyPosts"})(k),C=_,N=a(13),D=Object(N.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(E.a)(t))}}}))(C),x=u.a.memo((function(e){return console.log("profile"),u.a.createElement("div",null,u.a.createElement(d,{profile:e.profile,status:e.status,getUpdateUserStatus:e.getUpdateUserStatus}),u.a.createElement(D,null))})),I=a(9),M=a(293),T=a(8),w=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"shouldComponentUpdate",value:function(e,t,a){return e!=this.props||t!=this.state}},{key:"render",value:function(){return console.log("profile container"),u.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,getUpdateUserStatus:this.props.getUpdateUserStatus,isAuth:this.props.isAuth}))}}]),a}(u.a.Component);t.default=Object(T.d)(I.f,Object(N.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,authorizedUserId:e.userId}}),{getUserProfile:E.d,getUserStatus:E.e,getUpdateUserStatus:E.c}),M.a)(w)}}]);
//# sourceMappingURL=3.f206e492.chunk.js.map