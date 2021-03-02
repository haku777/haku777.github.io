		
		function base64encode(str) {
	
			var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
			var base64DecodeChars = new Array(
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
			52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
			-1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
			15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
			-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
			41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
			var out, i, len;
			var c1, c2, c3;

			len = str.length;
			i = 0;
			out = "";
			while(i < len) {
			c1 = str.charCodeAt(i++) & 0xff;
			if(i == len)
			{
				out += base64EncodeChars.charAt(c1 >> 2);
				out += base64EncodeChars.charAt((c1 & 0x3) << 4);
				out += "==";
				break;
			}
			c2 = str.charCodeAt(i++);
			if(i == len)
			{
				out += base64EncodeChars.charAt(c1 >> 2);
				out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
				out += base64EncodeChars.charAt((c2 & 0xF) << 2);
				out += "=";
				break;
			}
			c3 = str.charCodeAt(i++);
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
			out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
			out += base64EncodeChars.charAt(c3 & 0x3F);
			}
			return out;
		}


       function initKey(form)
		{
		    var key;
		    setMaxDigits(131);
			key = new RSAKeyPair(form.E.value, "", form.M.value);//RSAKeyPair("<%=GetRSA_E()%>", "", "<%=GetRSA_M()%>");
			return key;
		}

       function initKey_1()
		{
		    var key;
		    setMaxDigits(131);
			key = new RSAKeyPair(document.getElementById('E').value, "", document.getElementById('M').value);//RSAKeyPair("<%=GetRSA_E()%>", "", "<%=GetRSA_M()%>");
			return key;
		}
		function cmdEncrypt(form)
		{
		    initKeyValues(form);
		    var key;
			key = initKey(form);
			with (form) 
			{
				challenge.value = form.C.value//"<%=GetChallenge()%>";
				posx.value = encryptedString(key, challenge.value + "\\" 
							+ base64encode(txtUsuario.value ) + "\\" 
							+ base64encode(txtContrasenia.value ));
				posy.value = "";
				txtContrasenia.value= "*".repeat(txtContrasenia.value.length);
			}
			return;
		}
		
		
		function cmdEncryptChangePassword(form)
		{
		    initKeyValues(form);
		    var key;
			key = initKey(form);
			with (form) 
			{
				challenge.value = form.C.value//"<%=GetChallenge()%>";
				posx.value = encryptedString(key, challenge.value + "\\" 
							+ base64encode(txt_contraseña.value ) + "\\" 
							+ base64encode(txt_confirmarContraseña.value ));
				posy.value = "";
				txt_contraseña.value= "*".repeat(txt_contraseña.value.length);
				txt_confirmarContraseña.value= "*".repeat(txt_confirmarContraseña.value.length);
			}
			return;
		}
		
		
		function cmdEncryptChangePassword_1(form,ctr_a,ctr_n,ctr_c)
		{
		    initKeyValues();
		    var key;
			key = initKey_1();
			with (form) 
			{
				document.getElementById('challenge').value = document.getElementById('C').value//"<%=GetChallenge()%>";
				document.getElementById('posx').value = encryptedString(key, document.getElementById('challenge').value + "\\" 
							+ base64encode(ctr_a.value ) + "\\" 
							+ base64encode(ctr_n.value ) + "\\" 
							+ base64encode(ctr_c.value ));
				document.getElementById('posy').value = "";
				ctr_a.value= "*".repeat(ctr_a.value.length);
				ctr_n.value= "*".repeat(ctr_n.value.length);
				ctr_c.value= "*".repeat(ctr_c.value.length);
			}
			return;
		}
		
		String.prototype.repeat = function(l){
        	return new Array(l+1).join(this);
        };
						
		function validateForm(f)
		{
		    var IsLoginStarted = false;
			var form = document.getElementById(f);
            //Validar el Login
			if(!validateCtr(form.txtUsuario))
				return false;
		    //Validar el Password
			if(!validateCtr(form.txtContrasenia))
				return false;
				
			if (IsLoginStarted == true) 
			{
				alert('La solicitud está siendo procesada');
				return false;
			}
			else 
			{
				IsLoginStarted = true;
				
				cmdEncrypt(form);
			}
		}
		
		function validateCtr(ctr) 
		{ 
			var tempName=ctr.value;

			if(isEmpty(tempName))
			{
				ctr.focus();
				ctr.select();
				return false;
			}
			else
			{
				return true;
			}
		}
		
		function validateStrCtr(strCtr) 
		{ 
		    var ctr = document.getElementById(strCtr)
			var tempName=ctr.value;

			if(isEmpty(tempName))
			{
				ctr.focus();
				ctr.select();
				return false;
			}
			else
			{
				return true;
			}
		}
		
		function validateStrDrp(strCtr) 
		{ 
		    var ctr = document.getElementById(strCtr)
			var tempName=ctr.value;

			if(isEmpty(tempName))
			{
				ctr.focus();
				return false;
			}
			else
			{
				return true;
			}
		}
		
		function isEmpty(strTextField)
		{
			if (strTextField == "" || strTextField==null)
				return true;
			
			var re = /\s/g; // Match any white space including space, tab, form-feed, etc.
			RegExp.multiline = true; // IE support 
			var str = strTextField.replace(re, "");
			
			if (str.length == 0) 
				return true;
			else
				return false;
		}
		
        function validateFormChangePassword(f)
		{
		    var IsLoginStarted = false;
			var form = document.getElementById(f);
			
          
		    //Validar nueva contrasena
			if(!validateStrCtr(form.txt_contraseña))
				return false;
				
		    //Validar confirmacion nueva contrasena
			if(!validateStrCtr(form.txt_confirmarContraseña))
				return false;
				
			if (IsLoginStarted == true) 
			{
				alert('La solicitud está siendo procesada');
				return false;
			}
			else 
			{
				IsLoginStarted = true;
				cmdEncryptChangePassword(form);
			}
		}
		
		
        function validateFormChangePassword_1(f,a,n,c)
		{
		    var IsLoginStarted = false;
			//var form = document.getElementById(f);
			var ctr_a = document.getElementById(a);
			var ctr_n = document.getElementById(n);
			var ctr_c = document.getElementById(c);		
          
		    //Validar contrasena anterior
			if(!validateStrCtr(a))
				return false;
		    //Validar nueva contrasena
			if(!validateStrCtr(n))
				return false;
				
		    //Validar confirmacion nueva contrasena
			if(!validateStrCtr(c))
				return false;
				
			if (IsLoginStarted == true) 
			{
				alert('La solicitud está siendo procesada');
				return false;
			}
			else 
			{
				IsLoginStarted = true;
				cmdEncryptChangePassword_1(f,ctr_a,ctr_n,ctr_c);
			}
		}
		
