jQuery(window).on('load', function() {
    new JCaption('img.caption');
});
RSFormPro.scrollToError = true;
RSFormProUtils.addEvent(window, 'load', function() {
    RSFormPro.Ajax.overrideSubmit(3, {
        "parent": "",
        "field": "is-invalid"
    }, false);
});
RSFormProUtils.addEvent(window, 'load', function() {
    RSFormPro.Ajax.overrideSubmit(5, {
        "parent": "",
        "field": "is-invalid"
    }, false);
});

// BEGIN: Cookies Policy Notification Bar - J! system plugin (Powered by: Web357.com)
var cpnb_config = {
    "w357_position": "bottom-left",
    "w357_hide_after_time": "display_always",
    "w357_duration": "60",
    "w357_animate_duration": "1000",
    "w357_limit": "0",
    "w357_message": "We use cookies to improve your experience on our website. ",
    "w357_display_ok_btn": "1",
    "w357_buttonText": "Accept",
    "w357_display_decline_btn": "0",
    "w357_buttonDeclineText": "Decline",
    "w357_display_cancel_btn": "0",
    "w357_buttonCancelText": "Cancel",
    "w357_display_settings_btn": 0,
    "w357_buttonSettingsText": "Settings",
    "w357_buttonMoreText": "More Info",
    "w357_buttonMoreLink": "",
    "w357_display_more_info_btn": "0",
    "w357_fontColor": "#ffffff",
    "w357_linkColor": "#ffffff",
    "w357_fontSize": "14px",
    "w357_backgroundColor": "rgba(8, 61, 139, 1)",
    "w357_borderWidth": "0",
    "w357_body_cover": "1",
    "w357_overlay_state": "0",
    "w357_overlay_color": "rgba(10, 10, 10, 0.3)",
    "w357_height": "auto",
    "w357_cookie_name": "cookiesDirective",
    "w357_link_target": "_self",
    "w357_popup_width": "800",
    "w357_popup_height": "600",
    "w357_customText": "\u003Ch1\u003ECookies Policy\u003C\/h1\u003E\r\n\u003Chr \/\u003E\r\n\u003Ch3\u003EGeneral Use\u003C\/h3\u003E\r\n\u003Cp\u003EWe use cookies, tracking pixels and related technologies on our website. Cookies are small data files that are served by our platform and stored on your device. Our site uses cookies dropped by us or third parties for a variety of purposes including to operate and personalize the website. Also, cookies may also be used to track how you use the site to target ads to you on other websites.\u003C\/p\u003E\r\n\u003Ch3\u003EThird Parties\u003C\/h3\u003E\r\n\u003Cp\u003EOur website employs the use the various third-party services. Through the use of our website, these services may place anonymous cookies on the Visitor\u0027s browser and may send their own cookies to the Visitor\u0027s cookie file. Some of these services include but are not limited to: Google, Facebook, Twitter, Adroll, MailChimp, Sucuri, Intercom and other social networks, advertising agencies, security firewalls, analytics companies and service providers. These services may also collect and use anonymous identifiers such as IP Address, HTTP Referrer, Unique Device Identifier and other non-personally identifiable information and server logs.\u003C\/p\u003E\r\n\u003Chr \/\u003E",
    "w357_more_info_btn_type": "custom_text",
    "w357_blockCookies": "0",
    "w357_autoAcceptAfterScrolling": "0",
    "w357_numOfScrolledPixelsBeforeAutoAccept": "300",
    "w357_reloadPageAfterAccept": "0",
    "w357_enableConfirmationAlerts": "0",
    "w357_enableConfirmationAlertsForAcceptBtn": 0,
    "w357_enableConfirmationAlertsForDeclineBtn": 0,
    "w357_enableConfirmationAlertsForDeleteBtn": 0,
    "w357_confirm_allow_msg": "Performing this action will enable all cookies set by this website. Are you sure that you want to enable all cookies on this website?",
    "w357_confirm_delete_msg": "Performing this action will remove all cookies set by this website. Are you sure that you want to disable and delete all cookies from your browser?",
    "w357_show_in_iframes": "0",
    "w357_shortcode_is_enabled_on_this_page": 0,
    "w357_base_url": "https:\/\/www.protoscarrentals.com\/",
    "w357_current_url": "https:\/\/www.protoscarrentals.com\/en\/",
    "w357_always_display": "0",
    "w357_show_notification_bar": true,
    "w357_expiration_cookieSettings": "365",
    "w357_expiration_cookieAccept": "365",
    "w357_expiration_cookieDecline": "180",
    "w357_expiration_cookieCancel": "3",
    "w357_accept_button_class_notification_bar": "cpnb-accept-btn",
    "w357_decline_button_class_notification_bar": "cpnb-decline-btn",
    "w357_cancel_button_class_notification_bar": "cpnb-cancel-btn",
    "w357_settings_button_class_notification_bar": "cpnb-settings-btn",
    "w357_moreinfo_button_class_notification_bar": "cpnb-moreinfo-btn",
    "w357_accept_button_class_notification_bar_modal_window": "cpnb-accept-btn-m",
    "w357_decline_button_class_notification_bar_modal_window": "cpnb-decline-btn-m",
    "w357_save_button_class_notification_bar_modal_window": "cpnb-save-btn-m"
};
// END: Cookies Policy Notification Bar - J! system plugin (Powered by: Web357.com)


// BEGIN: Cookies Policy Notification Bar - J! system plugin (Powered by: Web357.com)
var cpnb_cookiesCategories = {
    "cookie_categories_group0": {
        "cookie_category_id": "required-cookies",
        "cookie_category_name": "Required Cookies",
        "cookie_category_description": "The Required or Functional cookies relate to the functionality of our websites and allow us to improve the service we offer to you through our websites, for example by allowing you to carry information across pages of our website to avoid you having to re-enter information, or by recognizing your preferences when you return to our website.",
        "cookie_category_checked_by_default": "2",
        "cookie_category_status": "1"
    },
    "cookie_categories_group1": {
        "cookie_category_id": "analytical-cookies",
        "cookie_category_name": "Analytical Cookies",
        "cookie_category_description": "Analytical cookies allow us to recognize and to count the number of visitors to our website, to see how visitors move around the website when they are using it and to record which content viewers view and are interested in. This helps us to determine how frequently particular pages and advertisements are visited and to determine the most popular areas of our website. This helps us to improve the service which we offer to you by helping us make sure our users are finding the information they are looking for, by providing anonymized demographic data to third parties in order to target advertising more appropriately to you, and by tracking the success of advertising campaigns on our website.",
        "cookie_category_checked_by_default": "1",
        "cookie_category_status": "1"
    },
    "cookie_categories_group2": {
        "cookie_category_id": "social-media-cookies",
        "cookie_category_name": "Social Media",
        "cookie_category_description": "These cookies allow you to share Website content with social media platforms (e.g., Facebook, Twitter, Instagram). We have no control over these cookies as they are set by the social media platforms themselves.",
        "cookie_category_checked_by_default": "1",
        "cookie_category_status": "1"
    },
    "cookie_categories_group3": {
        "cookie_category_id": "targeted-advertising-cookies",
        "cookie_category_name": "Targeted Advertising Cookies",
        "cookie_category_description": "Advertising and targeting cookies are used to deliver advertisements more relevant to you, but can also limit the number of times you see an advertisement and be used to chart the effectiveness of an ad campaign by tracking users’ clicks. They can also provide security in transactions. They are usually placed by third-party advertising networks with a website operator’s permission but can be placed by the operator themselves. They can remember that you have visited a website, and this information can be shared with other organizations, including other advertisers. They cannot determine who you are though, as the data collected is never linked to your profile. ",
        "cookie_category_checked_by_default": "1",
        "cookie_category_status": "1"
    }
};
// END: Cookies Policy Notification Bar - J! system plugin (Powered by: Web357.com)


// BEGIN: Cookies Policy Notification Bar - J! system plugin (Powered by: Web357.com)
var cpnb_manager = {
    "w357_m_modalState": "0",
    "w357_m_floatButtonState": "1",
    "w357_m_floatButtonPosition": "bottom_left",
    "w357_m_HashLink": "cookies",
    "w357_m_modal_menuItemSelectedBgColor": "rgba(200, 200, 200, 1)",
    "w357_m_saveChangesButtonColorAfterChange": "rgba(13, 92, 45, 1)",
    "w357_m_floatButtonIconSrc": "https:\/\/www.protoscarrentals.com\/plugins\/system\/cookiespolicynotificationbar\/assets\/icons\/cpnb-cookies-manager-icon-1-64x64.png",
    "w357_m_floatButtonText": "Cookies Manager",
    "w357_m_modalHeadingText": "Advanced Cookie Settings",
    "w357_m_checkboxText": "Enabled",
    "w357_m_lockedText": "(Locked)",
    "w357_m_EnableAllButtonText": "Allow All Cookies",
    "w357_m_DeclineAllButtonText": "Decline All Cookies",
    "w357_m_SaveChangesButtonText": "Save Settings",
    "w357_m_confirmationAlertRequiredCookies": "These cookies are strictly necessary for this website. You can\u0027t disable this category of cookies. Thank you for understanding!"
};
// END: Cookies Policy Notification Bar - J! system plugin (Powered by: Web357.com)