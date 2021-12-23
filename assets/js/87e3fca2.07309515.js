"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[3674],{596202:function(e){e.exports=JSON.parse('{"tags":["vendors"],"summary":"Update vendor details.","security":[{"access_token":[]}],"operationId":"putApiV1VendorsId","parameters":[{"schema":{"type":"string"},"description":"Resource identifier","name":"id","in":"path","required":true}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of vendor","example":"Rastra"},"wallet_address":{"type":"string","description":"Vendor wallet address","example":"0x00000"},"phone":{"type":"string","description":"Vendor phone","example":"12121212"},"email":{"type":"string","description":"Vendor email","example":"rastra@gmail.com","x-format":{"email":true}},"gender":{"type":"string","example":"M"},"photo":{"type":"string"},"shop_name":{"type":"string","description":"Vendor shop name"},"address":{"type":"string","example":"Lalitpur"},"govt_id":{"type":"string","example":"99988777nepal"},"pan_number":{"type":"string","description":"Vendor PAN number","example":"1240000"},"bank_name":{"type":"string","description":"Bank name"},"bank_branch":{"type":"string","description":"Bank branch name"},"bank_account":{"type":"string","description":"Bank account number","example":"2354394935034395"},"projects":{"type":"string","example":"6108e3a19a8e17b54e464dd1,6208e3a19a8e17b54e464dd2"},"govt_id_image":{"type":"string","description":"Vendor government issued ID image url","x-format":{"uri":true}},"education":{"type":"string","description":"Vendor eductaion"},"extra_files":{"type":"object","properties":{"identity_photo":{"type":"string"},"signature_photo":{"type":"string"},"mou_file":{"type":"string"}}}},"required":["name","wallet_address","phone"]}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of vendor","example":"Rastra"},"wallet_address":{"type":"string","description":"Vendor wallet address","example":"0x00000"},"phone":{"type":"string","description":"Vendor phone","example":"12121212"},"email":{"type":"string","description":"Vendor email","example":"rastra@gmail.com","x-format":{"email":true}},"gender":{"type":"string","example":"M"},"photo":{"type":"string"},"shop_name":{"type":"string","description":"Vendor shop name"},"address":{"type":"string","example":"Lalitpur"},"govt_id":{"type":"string","example":"99988777nepal"},"pan_number":{"type":"string","description":"Vendor PAN number","example":"1240000"},"bank_name":{"type":"string","description":"Bank name"},"bank_branch":{"type":"string","description":"Bank branch name"},"bank_account":{"type":"string","description":"Bank account number","example":"2354394935034395"},"projects":{"type":"string","example":"6108e3a19a8e17b54e464dd1,6208e3a19a8e17b54e464dd2"},"govt_id_image":{"type":"string","description":"Vendor government issued ID image url","x-format":{"uri":true}},"education":{"type":"string","description":"Vendor eductaion"},"extra_files":{"type":"object","properties":{"identity_photo":{"type":"string"},"signature_photo":{"type":"string"},"mou_file":{"type":"string"}}}},"required":["name","wallet_address","phone"]}}}},"405":{"description":"Invalid input"}},"postman":{"name":"Update vendor details.","description":{"type":"text/plain"},"url":{"path":["vendors",":id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Resource identifier","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PUT","body":{"mode":"raw","raw":"\\"schema type not provided\\""}},"description":"Update vendor details.","method":"put","path":"/vendors/{id}","hashId":"update-vendor-details","servers":[{"url":"https://agency-stage.rahat.io/api/v1"}],"permalink":"/api/update-vendor-details","previous":{"title":"Remove and archive a Vendor,","permalink":"/api/remove-and-archive-a-vendor"},"next":{"title":"Get the token transactions by current vendor","permalink":"/api/get-the-token-transactions-by-current-vendor"},"jsonRequestBodyExample":{"name":"Rastra","wallet_address":"0x00000","phone":"12121212","email":"rastra@gmail.com","gender":"M","photo":"string","shop_name":"string","address":"Lalitpur","govt_id":"99988777nepal","pan_number":"1240000","bank_name":"string","bank_branch":"string","bank_account":"2354394935034395","projects":"6108e3a19a8e17b54e464dd1,6208e3a19a8e17b54e464dd2","govt_id_image":"string","education":"string","extra_files":{"identity_photo":"string","signature_photo":"string","mou_file":"string"}}}')}}]);