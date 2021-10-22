if (self.CavalryLogger) { CavalryLogger.start_js(["pTOrlIN"]); }

__d("InstantGamesFeedTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:InstantGamesFeedLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:InstantGamesFeedLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:InstantGamesFeedLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setClientUserID=function(a){this.$1.client_userid=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setContentID=function(a){this.$1.content_id=a;return this};c.setCountry=function(a){this.$1.country=a;return this};c.setDeviceid=function(a){this.$1.deviceid=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setGameID=function(a){this.$1.game_id=a;return this};c.setGameSessionID=function(a){this.$1.game_session_id=a;return this};c.setGroupID=function(a){this.$1.group_id=a;return this};c.setGroupSize=function(a){this.$1.group_size=a;return this};c.setIsemployee=function(a){this.$1.isemployee=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setPostID=function(a){this.$1.post_id=a;return this};c.setPostPrivacyID=function(a){this.$1.post_privacy_id=a;return this};c.setPosterID=function(a){this.$1.poster_id=a;return this};c.setRenderFailureReason=function(a){this.$1.render_failure_reason=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setShareSurface=function(a){this.$1.share_surface=a;return this};c.setStoryInvalidationReason=function(a){this.$1.story_invalidation_reason=a;return this};c.setStoryTokenString=function(a){this.$1.story_token_string=a;return this};c.setTournamentID=function(a){this.$1.tournament_id=a;return this};c.setUISurface=function(a){this.$1.ui_surface=a;return this};c.setUpdateID=function(a){this.$1.update_id=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={appid:!0,appversion:!0,client_userid:!0,clienttime:!0,content_id:!0,country:!0,deviceid:!0,event:!0,game_id:!0,game_session_id:!0,group_id:!0,group_size:!0,isemployee:!0,name:!0,post_id:!0,post_privacy_id:!0,poster_id:!0,render_failure_reason:!0,sessionid:!0,share_surface:!0,story_invalidation_reason:!0,story_token_string:!0,tournament_id:!0,ui_surface:!0,update_id:!0};f["default"]=a}),66);
__d("Dialog",["fbt","Animation","Arbiter","AsyncRequest","Button","CSS","ContextualThing","DOM","Env","Event","Focus","Form","HTML","Keys","Locale","PageTransitions","Parent","Run","Style","URI","Vector","bind","createArrayFromMixed","emptyFunction","getObjectValues","getOverlayZIndex","removeFromArray","shield"],(function $module_Dialog(global,require,importDefault,importNamespace,requireLazy,module,exports,fbt){var _supportsPositionFixed2=function _supportsPositionFixed(){var body=document.body;if(!body)return!1;var test=document.createElement("div"),control=document.createElement("div");body.insertBefore(test,body.firstChild);body.insertBefore(control,body.firstChild);test.style.position="fixed";test.style.top="20px";var result=test.offsetTop!==control.offsetTop;body.removeChild(test);body.removeChild(control);_supportsPositionFixed2=importDefault("emptyFunction").thatReturns(result);return result},Dialog=function(){function Dialog(model){this._show_loading=!0,this._auto_focus=!0,this._submit_on_enter=!1,this._fade_enabled=!0,this._onload_handlers=[],this._top=125,this._uniqueID="dialog_"+Dialog._globalCount++,this._content=null,this._obj=null,this._popup=null,this._overlay=null,this._causal_elem=null,this._previous_focus=null,this._buttons=[],this._buildDialog(),model&&this._setFromModel(model),Dialog._init()}var _proto=Dialog.prototype;_proto.show=function show(){this._showing=!0;this._async_request?this._show_loading&&this.showLoading():this._update();return this};_proto.showLoading=function showLoading(){this._loading=!0;importNamespace("CSS").addClass(this._frame,"dialog_loading_shown");this._renderDialog();return this};_proto.hide=function hide(){if(!this._showing&&!this._loading)return this;this._showing=!1;this._autohide_timeout&&(clearTimeout(this._autohide_timeout),this._autohide_timeout=null);this._fade_enabled&&Dialog._stack.length<=1?this._fadeOut():this._hide();return this};_proto.cancel=function cancel(){(!this._cancelHandler||this._cancelHandler()!==!1)&&this.hide()};_proto.getRoot=function getRoot(){return this._obj};_proto.getBody=function getBody(){return importDefault("DOM").scry(this._obj,"div.dialog_body")[0]};_proto.getButtonElement=function getButtonElement(button){typeof button==="string"&&(button=Dialog._findButton(this._buttons,button));if(!button||!button.name)return null;var inputs=importDefault("DOM").scry(this._popup,"input"),name_filter=function name_filter(elem){return elem.name==button.name};return inputs.filter(name_filter)[0]||null};_proto.getContentNode=function getContentNode(){return importDefault("DOM").find(this._content,"div.dialog_content")};_proto.getFormData=function getFormData(){return importNamespace("Form").serialize(this.getContentNode())};_proto.setAllowCrossPageTransition=function setAllowCrossPageTransition(allow){this._cross_transition=allow;return this};_proto.setAllowCrossQuicklingNavigation=function setAllowCrossQuicklingNavigation(allow){this._cross_quickling=allow;return this};_proto.setShowing=function setShowing(){this.show();return this};_proto.setHiding=function setHiding(){this.hide();return this};_proto.setTitle=function setTitle(title){var node=this._nodes.title,inner_node=this._nodes.title_inner,content_node=this._nodes.content;importDefault("DOM").setContent(inner_node,this._format(title||"",!0));importNamespace("CSS").conditionShow(node,!!title);importNamespace("CSS").conditionClass(content_node,"dialog_content_titleless",!title);return this};_proto.setInvertTitleColor=function setInvertTitleColor(invert){invert?this._nodes.title.className="dialog_title_inverted":this._nodes.title.className="dialog_title";return this};_proto.setBody=function setBody(body){importDefault("DOM").setContent(this._nodes.body,this._format(body));return this};_proto.setHiddenFields=function setHiddenFields(hidden_fields){importDefault("DOM").setContent(this._nodes.hidden_fields,this._format(hidden_fields));return this};_proto.setExtraData=function setExtraData(data){this._extra_data=data;return this};_proto.setReturnData=function setReturnData(data){this._return_data=data;return this};_proto.setShowLoading=function setShowLoading(show){this._show_loading=show;return this};_proto.setFullBleed=function setFullBleed(is_full_bleed){this._full_bleed=is_full_bleed;this._updateWidth();importNamespace("CSS").conditionClass(this._obj,"full_bleed",is_full_bleed);return this};_proto.setCausalElement=function setCausalElement(elem){this._causal_elem=elem;return this};_proto.setUserData=function setUserData(data){this._user_data=data;return this};_proto.getUserData=function getUserData(){return this._user_data};_proto.setAutohide=function setAutohide(autohide){autohide?this._showing?this._autohide_timeout=setTimeout(importDefault("shield")(this.hide,this),autohide):this._autohide=autohide:(this._autohide=null,this._autohide_timeout&&(clearTimeout(this._autohide_timeout),this._autohide_timeout=null));return this};_proto.setSummary=function setSummary(summary){var node=this._nodes.summary;importDefault("DOM").setContent(node,this._format(summary||""));importNamespace("CSS").conditionShow(node,!!summary);return this};_proto.setButtons=function setButtons(b){var buttons,button;!Array.isArray(b)?buttons=Array.from(arguments):buttons=b;for(var i=0;i<buttons.length;++i){var currButton=buttons[i];typeof currButton==="string"&&(button=Dialog._findButton(Dialog._STANDARD_BUTTONS,currButton),buttons[i]=button)}this._buttons=buttons;var button_content=[];if(buttons&&buttons.length>0)for(var ii=0;ii<buttons.length;ii++){button=buttons[ii];if(!button)continue;var button_input=importDefault("DOM").create("input",{type:"button",name:button.name||"",value:button.label}),button_node=importDefault("DOM").create("label",{className:"uiButton uiButtonLarge uiButtonConfirm"},button_input);button.className&&(button.className.split(/\s+/).forEach(function(e){importNamespace("CSS").addClass(button_node,e)}),importNamespace("CSS").hasClass(button_node,"inputaux")&&(importNamespace("CSS").removeClass(button_node,"inputaux"),importNamespace("CSS").removeClass(button_node,"uiButtonConfirm")),importNamespace("CSS").hasClass(button_node,"uiButtonSpecial")&&importNamespace("CSS").removeClass(button_node,"uiButtonConfirm"));button.icon&&importDefault("DOM").prependContent(button_node,importDefault("DOM").create("img",{src:button.icon,className:"img mrs"}));button.disabled&&importDefault("Button").setEnabled(button_node,!1);importDefault("Event").listen(button_input,"click",this._handleButton.bind(this,button.name));for(var attr in button)attr.indexOf("data-")===0&&attr.length>5&&button_input.setAttribute(attr,button[attr]);button_content.push(button_node)}importDefault("DOM").setContent(this._nodes.buttons,button_content);this._updateButtonVisibility();return this};_proto.setButtonsMessage=function setButtonsMessage(message){importDefault("DOM").setContent(this._nodes.button_message,this._format(message||""));this._has_button_message=!!message;this._updateButtonVisibility();return this};_proto._updateButtonVisibility=function _updateButtonVisibility(){var show=this._buttons.length>0||this._has_button_message;importNamespace("CSS").conditionShow(this._nodes.button_wrapper,show);importNamespace("CSS").conditionClass(this._obj,"omitDialogFooter",!show)};_proto.setClickButtonOnEnter=function setClickButtonOnEnter(input_id,button){this._clickOnEnterTarget=input_id;this._clickOnEnterListener||(this._clickOnEnterListener=importDefault("Event").listen(this._nodes.body,"keypress",function(event){var target=event.getTarget();target&&target.id===this._clickOnEnterTarget&&(importDefault("Event").getKeyCode(event)===importDefault("Keys").RETURN&&(this._handleButton(button),event.kill()));return!0}.bind(this)));return this};_proto.setStackable=function setStackable(stackable,shown){this._is_stackable=stackable;this._shown_while_stacked=stackable&&shown;return this};_proto.setHandler=function setHandler(handler){this._handler=handler;return this};_proto.setCancelHandler=function setCancelHandler(cancelHandler){this._cancelHandler=Dialog.call_or_eval.bind(null,this,cancelHandler);return this};_proto.setCloseHandler=function setCloseHandler(close_handler){this._close_handler=Dialog.call_or_eval.bind(null,this,close_handler);return this};_proto.clearHandler=function clearHandler(){return this.setHandler(null)};_proto.setPostURI=function setPostURI(post_uri,asynchronous,useParent){asynchronous===void 0&&(asynchronous=!0);if(useParent&&importDefault("Env").isCQuick){importDefault("PageTransitions").go(post_uri);return this}asynchronous?this.setHandler(this._submitForm.bind(this,"POST",post_uri)):this.setHandler(function(){importNamespace("Form").post(post_uri,this.getFormData()),this.hide()}.bind(this));return this};_proto.setGetURI=function setGetURI(get_uri){this.setHandler(this._submitForm.bind(this,"GET",get_uri));return this};_proto.setModal=function setModal(modal){this._modal=modal;importNamespace("CSS").conditionClass(this._obj,"generic_dialog_modal",modal);return this};_proto.setSemiModal=function setSemiModal(clickout){clickout?(this.setModal(!0),this._semiModalListener=importDefault("Event").listen(this._obj,"click",function(e){importDefault("DOM").contains(this._popup,e.getTarget())||this.hide()}.bind(this))):this._semiModalListener&&this._semiModalListener.remove();this._semi_modal=clickout;return this};_proto.setWideDialog=function setWideDialog(is_wide){this._wide_dialog=is_wide;this._updateWidth();return this};_proto.setContentWidth=function setContentWidth(width){this._content_width=width;this._updateWidth();return this};_proto.setTitleLoading=function setTitleLoading(loading){loading===void 0&&(loading=!0);var header=importDefault("DOM").find(this._popup,"h2.dialog_title");header&&importNamespace("CSS").conditionClass(header,"loading",loading);return this};_proto.setSecure=function setSecure(is_secure){importNamespace("CSS").conditionClass(this._nodes.title,"secure",is_secure);return this};_proto.setClassName=function setClassName(class_name){class_name.split(/\s+/).forEach(importNamespace("CSS").addClass.bind(importNamespace("CSS"),this._obj));return this};_proto.setFadeEnabled=function setFadeEnabled(enabled){this._fade_enabled=enabled;return this};_proto.setFooter=function setFooter(footer){var node=this._nodes.footer;importDefault("DOM").setContent(node,this._format(footer||""));importNamespace("CSS").conditionShow(node,!!footer);return this};_proto.setAutoFocus=function setAutoFocus(focus){this._auto_focus=focus;return this};_proto.setTop=function setTop(top){this._top=top;this._resetDialogObj();return this};_proto.onloadRegister=function onloadRegister(handler){var _this=this;importDefault("createArrayFromMixed")(handler).forEach(function(i){typeof i==="string"&&(i=new Function(i)),_this._onload_handlers.push(i.bind(_this))});return this};_proto.setAsyncURL=function setAsyncURL(url){return this.setAsync(new(importDefault("AsyncRequest"))(url))};_proto.setAsync=function setAsync(async_request){var handler=function(response){if(this._async_request!=async_request)return;this._async_request=null;var payload=response.getPayload(),dialog=payload;this._loading&&(this._showing=!0);typeof dialog==="string"?this.setBody(dialog):this._setFromModel(dialog);this._update()}.bind(this),data=async_request.getData();data.__d=1;async_request.setData(data);var orig_handler=async_request.getHandler()||importDefault("emptyFunction");async_request.setHandler(function(response){orig_handler(response),handler(response)});var request=async_request,orig_error_handler=request.getErrorHandler()||importDefault("emptyFunction"),orig_trans_error_handler=request.getTransportErrorHandler()||importDefault("emptyFunction"),handle_error=function(){this._async_request=null,this._loading=!1,this._showing&&this._shown_while_stacked?this._update():this._hide(this._is_stackable)}.bind(this),server_cancel_handler=request.getServerDialogCancelHandler()||handle_error;request.setAllowCrossPageTransition(this._cross_transition).setErrorHandler(function(response){handle_error(),orig_error_handler(response)}).setTransportErrorHandler(function(response){handle_error(),orig_trans_error_handler(response)}).setServerDialogCancelHandler(server_cancel_handler);async_request.send();this._async_request=async_request;this._showing&&this.show();return this};_proto._format=function _format(content,sane){sane===void 0&&(sane=!1);typeof content==="string"?sane||(content=importDefault("HTML")(content)):content=importDefault("HTML").replaceJSONWrapper(content);content instanceof importDefault("HTML")&&content.setDeferred(!0);return content};_proto._update=function _update(){if(!this._showing)return;this._autohide&&!this._async_request&&!this._autohide_timeout&&(this._autohide_timeout=setTimeout(importDefault("bind")(this,"hide"),this._autohide));importNamespace("CSS").removeClass(this._frame,"dialog_loading_shown");this._loading=!1;this._renderDialog();this._runOnloads();this._previous_focus=document.activeElement;importNamespace("Focus").set(this._frame)};_proto._runOnloads=function _runOnloads(){for(var i=0;i<this._onload_handlers.length;++i)try{this._onload_handlers[i]()}catch(_unused){}this._onload_handlers=[]};_proto._updateWidth=function _updateWidth(){var dialog_width=2*(Dialog._BORDER_WIDTH+Dialog._HALO_WIDTH);this._content_width?(dialog_width+=this._content_width,this._full_bleed||(dialog_width+=2*Dialog._PADDING_WIDTH)):this._wide_dialog?dialog_width+=Dialog.SIZE.WIDE:dialog_width+=Dialog.SIZE.STANDARD;this._popup.style.width=dialog_width+"px"};_proto._updateZIndex=function _updateZIndex(){if(!this._hasSetZIndex&&this._causal_elem){var z_index=importDefault("getOverlayZIndex")(this._causal_elem),node=this._causal_elem;while(!z_index&&(node=importNamespace("ContextualThing").getContext(node)))z_index=importDefault("getOverlayZIndex")(node);this._hasSetZIndex=z_index>(this._modal?400:200);importDefault("Style").set(this._obj,"z-index",this._hasSetZIndex?z_index:"")}};_proto._renderDialog=function _renderDialog(){this._updateZIndex();this._pushOntoStack();this._obj.style.height=null;this._obj&&this._obj.style.display?(this._obj.style.visibility="hidden",this._obj.style.display="",this.resetDialogPosition(),this._obj.style.visibility="",this._obj.dialog=this):this.resetDialogPosition();clearInterval(this.active_hiding);this.active_hiding=setInterval(this._activeResize.bind(this),500);this._submit_on_enter=!1;if(this._auto_focus){var input=importNamespace("Form").getFirstElement(this._content,['input[type="text"]',"textarea",'input[type="password"]']);input?setTimeout(importNamespace("Form").focusFirst.bind(this,this._content),0):this._submit_on_enter=!0}var bottom=importDefault("Vector").getElementDimensions(this._content).y+importDefault("Vector").getElementPosition(this._content).y;Dialog._bottoms.push(bottom);this._bottom=bottom;Dialog._updateMaxBottom();return this};_proto._buildDialog=function _buildDialog(){this._obj=importDefault("DOM").create("div",{className:"generic_dialog",id:this._uniqueID});this._obj.style.display="none";importDefault("DOM").appendContent(document.body,this._obj);this._popup||(this._popup=importDefault("DOM").create("div",{className:"generic_dialog_popup"}));this._obj.appendChild(this._popup);importNamespace("CSS").addClass(this._obj,"pop_dialog");importNamespace("Locale").isRTL()&&importNamespace("CSS").addClass(this._obj,"pop_dialog_rtl");importDefault("DOM").setContent(this._popup,importDefault("DOM").create("div",{className:"pop_container_advanced"},importDefault("DOM").create("div",{className:"pop_content",id:"pop_content"})));var frame=importDefault("DOM").find(this._popup,"div.pop_content");frame.setAttribute("tabIndex","0");frame.setAttribute("role","alertdialog");this._frame=this._content=frame;var loading=importDefault("DOM").create("div",{className:"dialog_loading"},fbt._(/*FBT_CALL*/"Loading..."/*FBT_CALL*/)),title_inner=importDefault("DOM").create("span"),title=importDefault("DOM").create("h2",{className:"dialog_title hidden_elem",id:"title_"+this._uniqueID},title_inner),summary=importDefault("DOM").create("div",{className:"dialog_summary hidden_elem"}),body=importDefault("DOM").create("div",{className:"dialog_body"}),buttons=importDefault("DOM").create("div",{className:"rfloat mlm"}),button_message=importDefault("DOM").create("div",{className:"dialog_buttons_msg"}),button_wrapper=importDefault("DOM").create("div",{className:"dialog_buttons clearfix hidden_elem"},[buttons,button_message]),footer=importDefault("DOM").create("div",{className:"dialog_footer hidden_elem"}),hidden_fields=importDefault("DOM").create("div",{className:"hidden_elem"}),content=importDefault("DOM").create("div",{className:"dialog_content"},[summary,body,button_wrapper,footer,hidden_fields]);this._nodes={summary:summary,body:body,buttons:buttons,button_message:button_message,button_wrapper:button_wrapper,footer:footer,hidden_fields:hidden_fields,content:content,title:title,title_inner:title_inner};importDefault("DOM").setContent(this._frame,[title,content,loading])};_proto._activeResize=function _activeResize(){this.last_offset_height!=this._content.offsetHeight&&(this.last_offset_height=this._content.offsetHeight,this.resetDialogPosition())};_proto.resetDialogPosition=function resetDialogPosition(){if(!this._popup)return;this._resetDialogObj()};_proto._resetDialogObj=function _resetDialogObj(){var total_margin=2*Dialog._PAGE_MARGIN,viewport_dimensions=importDefault("Vector").getViewportDimensions(),viewport_width=viewport_dimensions.x-total_margin,viewport_height=viewport_dimensions.y-total_margin,total_halo_width=2*Dialog._HALO_WIDTH,content_dimensions=importDefault("Vector").getElementDimensions(this._content),content_width=content_dimensions.x+total_halo_width,content_height=content_dimensions.y+total_halo_width,top=this._top,empty_horiz_space=viewport_width-content_width,empty_vertical_space=viewport_height-content_height;empty_vertical_space<0?top=Dialog._PAGE_MARGIN:top>empty_vertical_space&&(top=Dialog._PAGE_MARGIN+Math.max(empty_vertical_space,0)/2);var is_fixed=_supportsPositionFixed2();is_fixed||(top+=importDefault("Vector").getScrollPosition().y);importDefault("Style").set(this._popup,"marginTop",top+"px");var scroll=is_fixed&&(empty_horiz_space<0||empty_vertical_space<0);importNamespace("CSS").conditionClass(this._obj,"generic_dialog_fixed_overflow",scroll);var documentEl=document.documentElement;documentEl&&importNamespace("CSS").conditionClass(documentEl,"generic_dialog_overflow_mode",scroll)};_proto._fadeOut=function _fadeOut(temporary){if(!this._popup)return;try{new(importDefault("Animation"))(this._obj).duration(0).checkpoint().to("opacity",0).hide().duration(250).ondone(this._hide.bind(this,temporary)).go()}catch(_unused2){this._hide(temporary)}};_proto._hide=function _hide(temporary){this._obj&&(this._obj.style.display="none");var documentEl=document.documentElement;documentEl&&importNamespace("CSS").removeClass(documentEl,"generic_dialog_overflow_mode");clearInterval(this.active_hiding);if(this._bottom){var bs=Dialog._bottoms;bs.splice(bs.indexOf(this._bottom),1);Dialog._updateMaxBottom()}this._previous_focus&&document.activeElement&&importDefault("DOM").contains(this._obj,document.activeElement)&&importNamespace("Focus").set(this._previous_focus);if(temporary)return;this.destroy()};_proto.destroy=function destroy(){this._popFromStack(),clearInterval(this.active_hiding),this._obj&&(importDefault("DOM").remove(this._obj),this._obj=null),this._clickOnEnterListener&&this._clickOnEnterListener.remove(),this._close_handler&&this._close_handler({return_data:this._return_data})};_proto._handleButton=function _handleButton(button){typeof button==="string"&&(button=Dialog._findButton(this._buttons,button));if(!button)return;var value=Dialog.call_or_eval(button,button.handler);if(value===!1)return;button.name=="cancel"?this.cancel():Dialog.call_or_eval(this,this._handler,{button:button})!==!1&&this.hide()};_proto._submitForm=function _submitForm(method,uri,button){var data=this.getFormData();button&&(data[button.name]=button.name);this._extra_data&&Object.assign(data,this._extra_data);var async_request=new(importDefault("AsyncRequest"))().setURI(uri).setData(data).setMethod(method).setNectarModuleDataSafe(this._causal_elem).setReadOnly(method=="GET");this.setAsync(async_request);return!1};_proto._setFromModel=function _setFromModel(original_model){var model={};Object.assign(model,original_model);for(var propertyName in model){if(propertyName=="onloadRegister"){this.onloadRegister(model[propertyName]);continue}var mutator=this["set"+propertyName.substr(0,1).toUpperCase()+propertyName.substr(1)];mutator.apply(this,importDefault("createArrayFromMixed")(model[propertyName]))}};_proto._updateBottom=function _updateBottom(){var bottom=importDefault("Vector").getElementDimensions(this._content).y+importDefault("Vector").getElementPosition(this._content).y;Dialog._bottoms[Dialog._bottoms.length-1]=bottom;Dialog._updateMaxBottom()};_proto._pushOntoStack=function _pushOntoStack(){var stack=Dialog._stack;stack.length||importDefault("Arbiter").inform("layer_shown",{type:"Dialog"});importDefault("removeFromArray")(stack,this);stack.push(this);for(var i=stack.length-2;i>=0;i--){var prev_dialog=stack[i];!prev_dialog._is_stackable&&!prev_dialog._async_request?prev_dialog._hide():prev_dialog._shown_while_stacked||prev_dialog._hide(!0)}};_proto._popFromStack=function _popFromStack(){var stack=Dialog._stack,was_top=stack[stack.length-1]===this;importDefault("removeFromArray")(stack,this);stack.length?was_top&&stack[stack.length-1].show():importDefault("Arbiter").inform("layer_hidden",{type:"Dialog"})};Dialog._updateMaxBottom=function _updateMaxBottom(){Dialog.max_bottom=Math.max.apply(Math,Dialog._bottoms)};Dialog.newButton=function newButton(name,label,className,handler){var button={name:name,label:label,className:void 0,handler:void 0};className&&(button.className=className);handler&&(button.handler=handler);return button};Dialog.getCurrent=function getCurrent(){var stack=Dialog._stack;return stack.length?stack[stack.length-1]:null};Dialog.hideCurrent=function hideCurrent(){var dialog=Dialog.getCurrent();dialog&&dialog.hide()};Dialog.bootstrap=function bootstrap(uri,data,read_only,method,model,elem){data=data||{};Object.assign(data,new(importDefault("URI"))(uri).getQueryData());method=method||(read_only?"GET":"POST");var status_elem=importNamespace("Parent").byClass(elem,"stat_elem")||elem;if(status_elem&&importNamespace("CSS").hasClass(status_elem,"async_saving"))return!1;if(!(status_elem instanceof HTMLElement))return!1;var request=new(importDefault("AsyncRequest"))().setReadOnly(!!read_only).setMethod(method).setRelativeTo(elem).setStatusElement(status_elem).setURI(uri).setNectarModuleDataSafe(elem).setData(data),dialog=new Dialog(model).setCausalElement(elem).setAsync(request);dialog.show();return!1};Dialog.showFromModel=function showFromModel(model,causal_element){var dialog=new Dialog(model).setCausalElement(causal_element).show();model.hiding&&dialog.hide()};Dialog._init=function _init(){this._init=importDefault("emptyFunction"),importNamespace("Run").onLeave(importDefault("shield")(Dialog._tearDown,null,!1)),importDefault("Arbiter").subscribe("page_transition",importDefault("shield")(Dialog._tearDown,null,!0)),importDefault("Event").listen(document.documentElement,"keydown",function(event){importDefault("Event").getKeyCode(event)===importDefault("Keys").ESC&&!event.getModifiers().any?Dialog._escape()&&event.kill():importDefault("Event").getKeyCode(event)===importDefault("Keys").RETURN&&!event.getModifiers().any&&(Dialog._enter()&&event.kill())}),importDefault("Event").listen(window,"resize",function(event){var dialog=Dialog.getCurrent();dialog&&dialog._resetDialogObj()})};Dialog._findButton=function _findButton(buttons,name){if(buttons)for(var i=0;i<buttons.length;++i)if(buttons[i].name==name)return buttons[i];return null};Dialog._tearDown=function _tearDown(is_page_transition){var stack=Dialog._stack.slice();for(var ii=stack.length-1;ii>=0;ii--)(is_page_transition&&!stack[ii]._cross_transition||!is_page_transition&&!stack[ii]._cross_quickling)&&stack[ii].hide()};Dialog._escape=function _escape(){var dialog=Dialog.getCurrent();if(!dialog)return!1;var semi_modal=dialog._semi_modal,buttons=dialog._buttons;if(!buttons.length&&!semi_modal)return!1;if(semi_modal&&!buttons.length){dialog.hide();return!0}var button_to_simulate,cancel_button=Dialog._findButton(buttons,"cancel");if(dialog._cancelHandler){dialog.cancel();return!0}else if(cancel_button)button_to_simulate=cancel_button;else if(buttons.length==1)button_to_simulate=buttons[0];else return!1;dialog._handleButton(button_to_simulate);return!0};Dialog._enter=function _enter(){var dialog=Dialog.getCurrent();if(!dialog||!dialog._submit_on_enter)return!1;if(document.activeElement!=dialog._frame)return!1;var buttons=dialog._buttons;if(!buttons)return!1;dialog._handleButton(buttons[0]);return!0};Dialog.call_or_eval=function call_or_eval(obj,func,args){if(!func)return void 0;args=args||{};if(typeof func==="string"){var params=Object.keys(args).join(", ");func=eval("({f: function("+params+") { "+func+"}})").f}return func.apply(obj,importDefault("getObjectValues")(args))};return Dialog}();Dialog.OK={name:"ok",label:fbt._(/*FBT_CALL*/"OK"/*FBT_CALL*/)};Dialog.CANCEL={name:"cancel",label:fbt._(/*FBT_CALL*/"Cancel"/*FBT_CALL*/),className:"inputaux"};Dialog.CLOSE={name:"close",label:fbt._(/*FBT_CALL*/"Close"/*FBT_CALL*/)};Dialog.NEXT={name:"next",label:fbt._(/*FBT_CALL*/"Next"/*FBT_CALL*/)};Dialog.SAVE={name:"save",label:fbt._(/*FBT_CALL*/"Save"/*FBT_CALL*/)};Dialog.SUBMIT={name:"submit",label:fbt._(/*FBT_CALL*/"Submit"/*FBT_CALL*/)};Dialog.CONFIRM={name:"confirm",label:fbt._(/*FBT_CALL*/"Confirm"/*FBT_CALL*/)};Dialog.DELETE={name:"delete",label:fbt._(/*FBT_CALL*/"Delete"/*FBT_CALL*/)};Dialog._bottoms=[0];Dialog.max_bottom=0;Dialog._globalCount=0;Dialog.OK_AND_CANCEL=[Dialog.OK,Dialog.CANCEL];Dialog._STANDARD_BUTTONS=[Dialog.OK,Dialog.CANCEL,Dialog.CLOSE,Dialog.SAVE,Dialog.SUBMIT,Dialog.CONFIRM,Dialog.DELETE];Dialog.SIZE={WIDE:555,STANDARD:445};Dialog._HALO_WIDTH=10;Dialog._BORDER_WIDTH=1;Dialog._PADDING_WIDTH=10;Dialog._PAGE_MARGIN=40;Dialog._stack=[];global.Dialog=Dialog;exports["default"]=Dialog}),98);
__d("URLScraper",["ArbiterMixin","DataStore","Event","URLMatcher","mixin"],(function(a,b,c,d,e,f,g){var h="scraperLastPermissiveMatch";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.input=b;d.enable();d.getValueFn=c;return d}var e=b.prototype;e.reset=function(){d("DataStore").set(this.input,h,null)};e.enable=function(){if(this.events)return;var a=function(a){window.setTimeout(this.check.bind(this,a),30)};this.events=c("Event").listen(this.input,{paste:a.bind(this,!1),keydown:a.bind(this,!0)})};e.disable=function(){if(!this.events)return;for(var a in this.events)this.events[a].remove();this.events=null};e.check=function(a){var c=this.getValueFn?this.getValueFn():this.input.value;if(a&&b.trigger(c))return;a=b.match(c);c=d("URLMatcher").permissiveMatch(c);c&&c!=d("DataStore").get(this.input,h)&&(d("DataStore").set(this.input,h,c),this.inform("match",{url:a||c,alt_url:c}))};return b}(c("mixin")(d("ArbiterMixin")));Object.assign(a,d("URLMatcher"));g["default"]=a}),98);
__d("ProfilePhotosViewFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1845191");c=b("FalcoLoggerInternal").create("profile_photos_view",a);e.exports=c}),null);
__d("PhotoLogger",["BanzaiScuba_DEPRECATED","Event","ProfilePhotosViewFalcoEvent","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this.$1=a,this.$2={}}var b=a.prototype;b.log=function(a,b,d,e){c("ProfilePhotosViewFalcoEvent").log(function(){return{photo_fbid:b,source:d,profile_id:e}}),this.$2[a]||(this.$3(a),this.$2[a]=!0)};b.$3=function(a){this.$4("loading",{uri:a});var b=new(c("SubscriptionsHandler"))(),d=new Image();b.addSubscriptions(c("Event").listen(d,"load",function(){this.$4("loaded",{uri:a}),b.release()}.bind(this)),c("Event").listen(d,"error",function(){this.$4("error",{uri:a}),b.release()}.bind(this)),c("Event").listen(d,"abort",function(){this.$4("abort",{uri:a}),b.release()}.bind(this)));d.src=a};b.logEvent=function(a){this.$4(a)};b.$4=function(a,b){var d=new(c("BanzaiScuba_DEPRECATED"))("photos_client_loading",null,{addBrowserFields:!0});d.addNormal("event",a);d.addNormal("viewer",this.$1);for(var e in b)d.addNormal(e,b[e]);d.post()};return a}();g["default"]=a}),98);
__d("PageContentTabTabs",[],(function(a,b,c,d,e,f){a=Object.freeze({CANDIDATE_VIDEOS:"CANDIDATE_VIDEOS",CHEX_PENDING_ORDERS:"CHEX_PENDING_ORDERS",CHEX_COMPLETED_ORDERS:"CHEX_COMPLETED_ORDERS",COMMERCE_PLATFORM_SETTINGS:"COMMERCE_PLATFORM_SETTINGS",COMMERCE_PRODUCTS:"COMMERCE_PRODUCTS",COMMERCE_COLLECTIONS:"COMMERCE_COLLECTIONS",COMMERCE_PENDING_ORDERS:"COMMERCE_PENDING_ORDERS",COMMERCE_PAST_ORDERS:"COMMERCE_PAST_ORDERS",COMMERCE_MERCHANT_SETTINGS:"COMMERCE_MERCHANT_SETTINGS",COMMERCE_SHOP_LINK:"COMMERCE_SHOP_LINK",DONATIONS_SETTINGS:"DONATIONS_SETTINGS",DRAFTS:"DRAFTS",REWARD_PROGRAM:"REWARD_PROGRAM",REWARD_PROGRAM_TRANSACTION_HISTORY:"REWARD_PROGRAM_TRANSACTION_HISTORY",REWARD_PROGRAM_COLLATERAL_MANAGEMENT:"REWARD_PROGRAM_COLLATERAL_MANAGEMENT",REWARD_PROGRAM_COMPLETE_SETUP:"REWARD_PROGRAM_COMPLETE_SETUP",EXPIRED_POSTS:"EXPIRED_POSTS",EXPIRING_POSTS:"EXPIRING_POSTS",INSTANT_ARTICLES:"INSTANT_ARTICLES",INSTANT_ARTICLES_DEVELOPMENT:"INSTANT_ARTICLES_DEVELOPMENT",INSTANT_ARTICLES_MONETIZATION:"INSTANT_ARTICLES_MONETIZATION",INSTANT_ARTICLES_SAMPLE:"INSTANT_ARTICLES_SAMPLE",INSTANT_ARTICLES_SETTINGS:"INSTANT_ARTICLES_SETTINGS",INSTANT_ARTICLES_SIGN_UP:"INSTANT_ARTICLES_SIGN_UP",INSTANT_ARTICLES_CTA_MANAGEMENT:"INSTANT_ARTICLES_CTA_MANAGEMENT",INSTANT_ARTICLES_TRAFFIC_LIFT:"INSTANT_ARTICLES_TRAFFIC_LIFT",INVOICES_ACTIVE:"INVOICES_ACTIVE",INVOICES_HISTORY:"INVOICES_HISTORY",LEAD_ADS_DRAFT_FORMS:"LEAD_ADS_DRAFT_FORMS",LEAD_ADS_FORMS:"LEAD_ADS_FORMS",LEAD_ADS_CRM_SETUP:"LEAD_ADS_CRM_SETUP",LEAD_ADS_CUSTOM_CRM_SETUP:"LEAD_ADS_CUSTOM_CRM_SETUP",STORY_ARCHIVE:"STORY_ARCHIVE",POST_IDEAS:"POST_IDEAS",PUBLISHED_POSTS:"PUBLISHED_POSTS",SCHEDULED_POSTS:"SCHEDULED_POSTS",CALENDAR:"CALENDAR",ADS_POSTS:"ADS_POSTS",VIDEOS:"VIDEOS",JOB_POSTS:"JOB_POSTS",NEW_MATCHES:"NEW_MATCHES",VIDEOS_COPYRIGHT:"VIDEOS_COPYRIGHT",REPORTED:"REPORTED",PLAYLISTS:"PLAYLISTS",PLAYLIST_DETAILS:"PLAYLIST_DETAILS",MANUAL_CLAIMS:"MANUAL_CLAIMS",MANUAL_CLAIM_FACEBOOK_VIDEOS:"MANUAL_CLAIM_FACEBOOK_VIDEOS",MANUAL_CLAIM_INSTAGRAM_VIDEOS:"MANUAL_CLAIM_INSTAGRAM_VIDEOS",POSTS_CONFIG:"POSTS_CONFIG",SEASONS:"SEASONS",SEASON_DETAILS:"SEASON_DETAILS",TAKEDOWNS:"TAKEDOWNS",UNSENT_REPORTS:"UNSENT_REPORTS",ALLOWED:"ALLOWED",TRACKED:"TRACKED",BLOCKED:"BLOCKED",CLAIMED:"CLAIMED",MANUAL_REVIEW:"MANUAL_REVIEW",MATCH_RULES:"MATCH_RULES",DISPUTES:"DISPUTES",ACTIVE_FUNDRAISERS:"ACTIVE_FUNDRAISERS",DRAFT_FUNDRAISERS:"DRAFT_FUNDRAISERS",READY_FUNDRAISERS:"READY_FUNDRAISERS",ENDED_FUNDRAISERS:"ENDED_FUNDRAISERS",ADS_CANVAS:"ADS_CANVAS",REFERENCE_FILES:"REFERENCE_FILES",ALL_REFERENCE_FILES:"ALL_REFERENCE_FILES",REFERENCE_CONFLICTS:"REFERENCE_CONFLICTS",REFERENCE_POSSIBLE_CONFLICTS:"REFERENCE_POSSIBLE_CONFLICTS",REFERENCE_RESOLUTIONS:"REFERENCE_RESOLUTIONS",SOUND_RECORDINGS:"SOUND_RECORDINGS",PREMIUM_MUSIC_VIDEOS:"PREMIUM_MUSIC_VIDEOS",LIVE_BROADCASTS:"LIVE_BROADCASTS",CROSSPOSTED_VIDEOS:"CROSSPOSTED_VIDEOS",PUBLISHED_PROFILE_PICTURE_FRAMES:"PUBLISHED_PROFILE_PICTURE_FRAMES",PENDING_PROFILE_PICTURE_FRAMES:"PENDING_PROFILE_PICTURE_FRAMES",PUBLISHED_EVENTS:"PUBLISHED_EVENTS",DRAFT_EVENTS:"DRAFT_EVENTS",SCHEDULED_EVENTS:"SCHEDULED_EVENTS",ARCHIVED_EVENTS:"ARCHIVED_EVENTS",TOURS:"TOURS",POLLS_COMPOSER:"POLLS_COMPOSER",JOB_APPLICATIONS:"JOB_APPLICATIONS",NEWS_SUBSCRIPTIONS:"NEWS_SUBSCRIPTIONS",NEWS_SUBSCRIPTIONS_PUBLISHER_INSIGHTS:"NEWS_SUBSCRIPTIONS_PUBLISHER_INSIGHTS",NEWS_SUBSCRIPTIONS_PUBLISHER_TEST_USERS:"NEWS_SUBSCRIPTIONS_PUBLISHER_TEST_USERS",QR_CODE:"QR_CODE",ATTRIBUTIONS:"ATTRIBUTIONS",BRANDED_CONTENT:"BRANDED_CONTENT",BRANDED_CONTENT_CREATOR:"BRANDED_CONTENT_CREATOR",BRANDED_CONTENT_SUSPECTED:"BRANDED_CONTENT_SUSPECTED",BRANDED_CONTENT_ADS_TO_REVIEW:"BRANDED_CONTENT_ADS_TO_REVIEW",SOUNDS_COLLECTION:"SOUNDS_COLLECTION",CREATOR_STUDIO:"CREATOR_STUDIO",CONTENT_TESTS:"CONTENT_TESTS",GEM_PRODUCER_DASHBOARD:"GEM_PRODUCER_DASHBOARD",MONETIZED_VIDEOS:"MONETIZED_VIDEOS",AUDIO_RELEASES:"AUDIO_RELEASES",REGISTRATIONS:"REGISTRATIONS",IA_REGIWALL_SETTINGS:"IA_REGIWALL_SETTINGS",STREAMER_DASHBOARD:"STREAMER_DASHBOARD",CREATIVE_ASSETS:"CREATIVE_ASSETS",CREATOR_STUDIO_ALL_MATCHES:"CREATOR_STUDIO_ALL_MATCHES",CREATOR_STUDIO_TRACKED:"CREATOR_STUDIO_TRACKED",CREATOR_STUDIO_BLOCKED:"CREATOR_STUDIO_BLOCKED",CREATOR_STUDIO_COLLECT_AD_EARNINGS:"CREATOR_STUDIO_COLLECT_AD_EARNINGS",CREATOR_STUDIO_TAKEDOWNS:"CREATOR_STUDIO_TAKEDOWNS",CREATOR_STUDIO_DISPUTES:"CREATOR_STUDIO_DISPUTES",CREATOR_STUDIO_ALL_REFERENCE_FILES:"CREATOR_STUDIO_ALL_REFERENCE_FILES",CREATOR_STUDIO_REFERENCE_CONFLICTS:"CREATOR_STUDIO_REFERENCE_CONFLICTS",CREATOR_STUDIO_REFERENCE_RESOLUTIONS:"CREATOR_STUDIO_REFERENCE_RESOLUTIONS",CREATOR_STUDIO_REFERENCE_POSSIBLE_CONFLICTS:"CREATOR_STUDIO_REFERENCE_POSSIBLE_CONFLICTS",CREATOR_STUDIO_PUBLISHED_TRACKED:"CREATOR_STUDIO_PUBLISHED_TRACKED",CREATOR_STUDIO_PUBLISHED_BLOCKED:"CREATOR_STUDIO_PUBLISHED_BLOCKED",CREATOR_STUDIO_PUBLISHED_MANUAL_REVIEW:"CREATOR_STUDIO_PUBLISHED_MANUAL_REVIEW",CREATOR_STUDIO_PUBLISHED_DISPUTES:"CREATOR_STUDIO_PUBLISHED_DISPUTES",CREATOR_STUDIO_PUBLISHED_ALL_REFERENCE_FILES:"CREATOR_STUDIO_PUBLISHED_ALL_REFERENCE_FILES",CREATOR_STUDIO_TAKEDOWN_REQUESTS:"CREATOR_STUDIO_TAKEDOWN_REQUESTS"});f["default"]=a}),66);