if (self.CavalryLogger) { CavalryLogger.start_js(["imY9S\/o"]); }

__d("CometNotificationsListItemInlineCTAAttachment_notifAttachments$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometNotificationsListItemInlineCTAAttachment_notifAttachments$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"primary_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accepted_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"declined_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta_params",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta_state",storageKey:null}]};e.exports=a}),null);
__d("CometNotificationsListItemInlineCTAAttachment_notifAttachments.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsListItemInlineCTAAttachment_notifAttachments",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"primary_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accepted_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"declined_cta_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta_params",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta_state",storageKey:null}],type:"InlineCTACometNotifAttachment",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsInlineCTAMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"NotifInlineCtaSelectedResponsePayload",kind:"LinkedField",name:"notif_inline_cta_selected",plural:!1,selections:[{alias:null,args:null,concreteType:"InlineCTACometNotifAttachment",kind:"LinkedField",name:"notif_attachment",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta_state",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometNotificationsInlineCTAMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometNotificationsInlineCTAMutation",selections:b},params:{id:"3838836489543866",metadata:{},name:"CometNotificationsInlineCTAMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometNotificationsInlineCTAMutation",["CometNotificationsInlineCTAMutation.graphql","CometRelay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometNotificationsInlineCTAMutation.graphql");function a(a,b,c,e){return d("CometRelay").commitMutation(a,{mutation:i,onCompleted:function(a){c&&c.onSuccess(a)},onError:c&&c.onError,optimisticResponse:{notif_inline_cta_selected:{notif_attachment:{cta_state:e.ctaState,id:e.id}}},variables:b})}g.doCTAMutation=a}),98);
__d("CometNotificationsListItemInlineCTAAttachment.react",["CometNotificationsInlineCTAMutation","CometNotificationsListItemInlineCTAAttachment_notifAttachments.graphql","CometRelay","TetraButtonGroup.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useCallback;function a(a){var e=d("CometRelay").useRelayEnvironment(),f=a.notifAttachments,g=a.onPress;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometNotificationsListItemInlineCTAAttachment_notifAttachments.graphql"),f);f=a.accepted_cta_text;var k=a.cta_params,l=a.cta_state,m=a.cta_type,n=a.declined_cta_text,o=a.id,p=a.primary_cta_text;a=a.secondary_cta_text;var q=j(function(){g&&g();if(m!=null&&k!=null&&o!=null){var a={input:{cta_type:m,id:o,is_primary_button:!0,json_params:k}};d("CometNotificationsInlineCTAMutation").doCTAMutation(e,a,{onSuccess:function(){}},{ctaState:"MUTATION_PENDING",id:o})}},[g,m,k,e,o]),r=j(function(){g&&g();if(m!=null&&k!=null&&o!=null){var a={input:{cta_type:m,id:o,is_primary_button:!1,json_params:k}};d("CometNotificationsInlineCTAMutation").doCTAMutation(e,a,{onSuccess:function(){}},{ctaState:"MUTATION_PENDING",id:o})}},[g,m,k,e,o]);if(p==null||a==null||l==null)return null;var s;switch(l){case"ACCEPTED":if(f==null||f==="")return null;s=i.jsx("span",{className:"tw6a2znq qt6c0cv9 rz4wbd8a cxgpxx05",children:i.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:f})});break;case"DELETED":if(n==null||n==="")return null;s=i.jsx("span",{className:"tw6a2znq qt6c0cv9 rz4wbd8a cxgpxx05",children:i.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:n})});break;case"PENDING":case"MUTATION_PENDING":s=i.jsx(c("TetraButtonGroup.react"),{paddingTop:12,primary:{disabled:l==="MUTATION_PENDING",label:p,onPress:q},secondary:{disabled:l==="MUTATION_PENDING",label:a,onPress:r},size:"medium"});break;default:s=null}return i.jsx("div",{className:"d1544ag0"+(l!=="PENDING"&&l!=="MUTATION_PENDING"?" tw6a2znq":""),children:s})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("Button.react",["cx","AbstractButton.react","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=this.props.use||"default",b=this.props.size||"medium";b="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(b==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return i.jsx(c("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:c("joinClasses")(this.props.className,b)}))};return b}(i.Component);a.propTypes={use:c("prop-types").oneOf(["special","confirm","default"]),size:c("prop-types").oneOf(["medium","large"]),suppressed:c("prop-types").bool};g["default"]=a}),98);
__d("ObjectionableContentToggleButton.react",["cx","ix","Arbiter","AsyncRequest","Button.react","CSS","Image.react","WWWWarningScreensClientLogger","WarningScreenEventsTypedLogger","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var e;e=a.call(this,b)||this;e.$1=!1;e.state={isFiltered:e.props.isFilteredInitially};e.$5=function(a){a.stopPropagation();a.preventDefault();a=e.state.isFiltered;var b=e.props,f=b.contentID,g=b.filter,h=b.isSnowlift,i=b.storyRenderLocation,j=b.storyID,k=b.surveyURI,l=b.video;b=b.warningType;d("CSS").conditionClass(g,"_cgv",!a);g=a?"warning_screen_uncover_tapped":"warning_screen_cover_tapped";new(c("WarningScreenEventsTypedLogger"))().setName(g).setContentID(f).setContentLocation(i).setIsThumbnail(0).log();d("WWWWarningScreensClientLogger").logWWWWarningScreenEvent(a?"SHOW_CONTENT":"HIDE_CONTENT","action",f,j,i,h?"photo_viewer":null,b);l&&(!a?e.$6():e.$7());a&&k&&!e.$1&&(e.$1=!0,new(c("AsyncRequest"))(k).send());h&&c("Arbiter").inform("ObjectionableContentToggleButton.COVERED",!a);e.setState({isFiltered:!a})};var f=b.video;f&&f.addListener("optionsChange",function(){f.hasOption("FeedAutoplay","isFilteredByWarningScreen")&&f.setOption("FeedAutoplay","isFilteredByWarningScreen",!0)});return e}var e=b.prototype;e.$2=function(){var a=this.props.warningType;return a==="False News"||a==="Misleading News"||a==="False Headline News"};e.$3=function(){var a=this.state.isFiltered,b=i("480470");a?b=this.props.placement==="inline"?i("532618"):i("480473"):this.$2()?b=this.props.placement==="inline"?i("690986"):i("930741"):b=this.props.placement==="inline"?i("503312"):i("570542");return j.jsx(c("Image.react"),{className:"_1oid",src:b})};e.$4=function(){return this.state.isFiltered?this.props.uncoveredLabel:this.props.coveredLabel};e.$8=function(){var a=this.props,b=a.contentType;a=a.placement;return a==="inline"&&b==="video"&&!this.state.isFiltered};e.$6=function(){var a=this.props,b=a.islive;a=a.video;b?a.mute():(a.hasOption("FeedAutoplay","isFilteredByWarningScreen")&&a.setOption("FeedAutoplay","isFilteredByWarningScreen",!0),a.pause("warning_screen_cover"))};e.$7=function(){var a=this.props,b=a.islive;a=a.video;b?a.unmute():(a.hasOption("FeedAutoplay","isFilteredByWarningScreen")&&a.setOption("FeedAutoplay","isFilteredByWarningScreen",!1),a.play())};e.componentDidMount=function(){this.props.video&&this.$6()};e.render=function(){var a=this.props,b=a.isFullscreen,d=a.storyRenderLocation;a=a.placement;return j.jsx(c("Button.react"),{className:"_5_hk _299h"+(b?" _32yh":"")+(d==="video_channel"?" _6h77":"")+(this.$8()?" _6h78":"")+(a==="inline"?" _1yom":"")+(a==="below-comment"?" _1yoo":"")+(a==="below-content"?" _1yop":""),image:this.$3(),label:this.$4(),onClick:this.$5})};return b}(j.Component);g["default"]=a}),98);
__d("ObserveResize.react",["useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.onResize;a=a.children;b=c("useResizeObserver")(b);return a(b)}g["default"]=a}),98);
__d("SimpleObjectsPool",["invariant"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this.$1=a,this.$2=[]}var b=a.prototype;b.get=function(){if(this.$2.length)return this.$2.pop();else{var a=this.$1;return new a()}};b.put=function(a){a instanceof this.$1||g(0,4227),this.$2.push(a)};return a}();e.exports=a}),null);
__d("PersistentAnimationFrame",["SimpleObjectsPool","Visibility","cancelAnimationFrame","requestAnimationFrame"],(function(a,b,c,d,e,f){var g=16,h,i={},j=!0;function k(){h||(h=new(b("SimpleObjectsPool"))(l));return h}var l=function(){"use strict";function a(){var a=this;this.$1=function(){a.callback(),a.$2(),k().put(a)}}a.request=function(a){return!a?0:k().get().request(a)};a.cancel=function(a){if(a===0)return;a=i[String(a)];a&&a.cancel()};var c=a.prototype;c.request=function(a){j&&m();this.callback=a;this.hidden=b("Visibility").isHidden();this.hidden?this.intID=setTimeout(this.$1,g):this.intID=b("requestAnimationFrame")(this.$1);this.strID=String(this.intID);i[this.strID]=this;return this.intID};c.cancel=function(){this.strID&&(this.hidden?clearTimeout(this.intID):b("cancelAnimationFrame")(this.intID),this.$2(),k().put(this))};c.$2=function(){delete i[this.strID],delete this.intID,delete this.strID,delete this.callback,delete this.hidden};return a}();function m(){var a;j=!1;(a=b("Visibility")).addListener(a.HIDDEN,n);a.addListener(a.VISIBLE,n)}function n(){Object.keys(i).forEach(function(a){a=i[a];var b=a.callback;a.cancel();b()})}e.exports=l}),null);
__d("requestPersistentAnimationFrame",["PersistentAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("PersistentAnimationFrame").request}),98);
__d("ResizeEventHandler",["requestPersistentAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){var b=this;this.$1=!1;this.$2=!1;this.handleEvent=function(){b.$2===!1&&(b.$2=!0,c("requestPersistentAnimationFrame")(b.$4))};this.$4=function(){b.$2=!1,b.$1===!1&&b.$3()};this.$3=a}var b=a.prototype;b.cancel=function(){this.$1=!0};return a}();g["default"]=a}),98);
__d("ResponsiveBlock.react",["cx","ObserveResize.react","ResizeEventHandler","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$2=null,d.$3=null,d.$4=new(c("ResizeEventHandler"))(function(){if(d.$1==null)return;var a=d.$1.offsetWidth,b=d.$1.offsetHeight;(a!==d.$3||b!==d.$2)&&(d.$3=a,d.$2=b,d.props.onResize(a,b))}),d.$5=function(a,b){b instanceof HTMLElement&&(d.$1=b,d.$4.handleEvent())},b)||babelHelpers.assertThisInitialized(d)}var d=b.prototype;d.componentWillUnmount=function(){this.$4.cancel()};d.render=function(){var a=this.props;a.onResize;var b=a.className,d=a.children,e=babelHelpers.objectWithoutPropertiesLoose(a,["onResize","className","children"]);return i.jsx(c("ObserveResize.react"),{onResize:this.$5,children:function(a){return i.jsx("div",babelHelpers["extends"]({},e,{className:c("joinClasses")("_4u-c",b),ref:a,children:d}))}})};return b}(i.Component);g["default"]=a}),98);