// JScript File

function WebForm_FireDefaultButton(event, target) 
{
    //event.srcElement doesn't work in FF so we check whether
    //it or event.target exists, using whichever is returned
    var element = event.target || event.srcElement;
 
    if (event.keyCode == 13 &&
        !(element &&
        element.tagName.toLowerCase() == "textarea")) 
        {
        if( poner_bandera()){
        var defaultButton;
        if (__nonMSDOMBrowser) 
        {   defaultButton = document.getElementById(target);
        } 
        else 
        {   
            defaultButton = document.all[target];
        }
        if (defaultButton && typeof defaultButton.click != "undefined") 
        {  
            defaultButton.click();
            event.cancelBubble = true;
            if (event.stopPropagation) 
            {
                event.stopPropagation();
            }
            return false;
        }}
    }
    return true;
}

function ValidationSummaryOnSubmit(validationGroup) {
     if (typeof(Page_ValidationSummaries) == "undefined")
        return;
    var summary, sums, s;
    for (sums = 0; sums < Page_ValidationSummaries.length; sums++) {
        summary = Page_ValidationSummaries[sums];
        summary.style.display = "none";
        if (!Page_IsValid && IsValidationGroupMatch(summary, validationGroup)) {
            var i;
            if (summary.showsummary != "False") {
                summary.style.display = "";
                if (typeof(summary.displaymode) != "string") {
                    summary.displaymode = "BulletList";
                }
                switch (summary.displaymode) {
                    case "List":
                        headerSep = "<br>";
                        first = "";
                        pre = "";
                        post = "<br>";
                        end = "";
                        break;
                    case "BulletList":
                    default:
                        headerSep = "";
                        first = "<ul>";
                        pre = "<li>";
                        post = "</li>";
                        end = "</ul>";
                        break;
                    case "SingleParagraph":
                        headerSep = " ";
                        first = "";
                        pre = "";
                        post = " ";
                        end = "<br>";
                        break;
                }
                s = "";
                if (typeof(summary.headertext) == "string") {
                    s += summary.headertext + headerSep;
                }
                s += first;
                for (i=0; i<Page_Validators.length; i++) {
                    if (!Page_Validators[i].isvalid && typeof(Page_Validators[i].errormessage) == "string") {
                        s += pre + Page_Validators[i].errormessage + post;
                    }
                }
                s += end;
                summary.innerHTML = s;
                //window.scrollTo(0,0);
            }
            if (summary.showmessagebox == "True") {
                s = "";
                if (typeof(summary.headertext) == "string") {
                    s += summary.headertext + "\r\n";
                }
                var lastValIndex = Page_Validators.length - 1;
                for (i=0; i<=lastValIndex; i++) {
                    if (!Page_Validators[i].isvalid && typeof(Page_Validators[i].errormessage) == "string") {
                        switch (summary.displaymode) {
                            case "List":
                                s += Page_Validators[i].errormessage;
                                if (i < lastValIndex) {
                                    s += "\r\n";
                                }
                                break;
                            case "BulletList":
                            default:
                                s += "- " + Page_Validators[i].errormessage;
                                if (i < lastValIndex) {
                                    s += "\r\n";
                                }
                                break;
                            case "SingleParagraph":
                                s += Page_Validators[i].errormessage + " ";
                                break;
                        }
                    }
                }
                alert(s);
            }
        }
    }
}
function poner_bandera(){
if (var_poner_bandera == 0){
var_poner_bandera++;
return true;}
else {
alert('El formulario ya está siendo enviado, por favor aguarde un instante.');
return false;
}
}