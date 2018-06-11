export const SEND_SMS_BODY = 
{
    "api_key":"e3482872",
    "api_secret":"8862eefe",
    "to":"",
    "from":"Dollarding",
    "text":""
};

export const SEND_EMAIL_BODY = (mailAdress, benefitName, benefitLink) => 
{
    return {
        "sender": {
                "name": "Dollarding",
                "email": "coupit@votalix.com"
            },
            "to": [{
                "name": "just for you",
                "email": mailAdress
            }],
            "subject": "your benefit",
            "htmlContent": "<p align=right>  ההטבה " + benefitName +" זמינה עבורכם  <a href=" + benefitLink + ">בקישור זה</a> \
            <br/><br/><a href='https://www.facebook.com/CoupIT/'>Coupit-Facebook</a> או חפשו אותנו בפייסבוק <a href='http://dollarding.co.il/'>dollarding.co.il</a> להטבות נוספות היכנסו ל \
            <br/><br/>,תהנו<br/><strong>.Dollarding- הטבות שבוודאי תאהבו</strong><br/><br/><br/><br/></p>"
    };
};