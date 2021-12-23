"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[9217],{846749:function(e){e.exports=JSON.parse('{"tags":["mobilizers"],"summary":"Update MOBILIZER details.","security":[{"access_token":[]}],"operationId":"putApiV1MobilizersId","parameters":[{"schema":{"type":"string"},"description":"Resource identifier","name":"id","in":"path","required":true}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of Mobilizer","example":"Rastra"},"phone":{"type":"string","description":"Mobilizer phone","example":"12121212"},"wallet_address":{"type":"string","description":"Mobilizer wallet address","example":"0x00000"},"email":{"type":"string","description":"Mobilizer email","example":"rastra@gmail.com","x-format":{"email":true}},"address":{"type":"string","description":"Mobilizer permanent address","example":"nepal"},"govt_id":{"type":"string","description":"Mobilizer government issued ID","example":"99988777nepal"},"govt_id_image":{"type":"string","description":"Mobilizer government issued ID image url","example":"http://source","x-format":{"uri":true}},"organization":{"type":"string","description":"Name of Organization mobilizer is involved with","example":"rumsan"}}}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of Mobilizer","example":"Rastra"},"phone":{"type":"string","description":"Mobilizer phone","example":"12121212"},"wallet_address":{"type":"string","description":"Mobilizer wallet address","example":"0x00000"},"email":{"type":"string","description":"Mobilizer email","example":"rastra@gmail.com","x-format":{"email":true}},"address":{"type":"string","description":"Mobilizer permanent address","example":"nepal"},"govt_id":{"type":"string","description":"Mobilizer government issued ID","example":"99988777nepal"},"govt_id_image":{"type":"string","description":"Mobilizer government issued ID image url","example":"http://source","x-format":{"uri":true}},"organization":{"type":"string","description":"Name of Organization mobilizer is involved with","example":"rumsan"}}}}}},"405":{"description":"Invalid input"}},"postman":{"name":"Update MOBILIZER details.","description":{"type":"text/plain"},"url":{"path":["mobilizers",":id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Resource identifier","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PUT","body":{"mode":"raw","raw":"\\"schema type not provided\\""}},"description":"Update MOBILIZER details.","method":"put","path":"/mobilizers/{id}","hashId":"update-mobilizer-details","servers":[{"url":"https://agency-stage.rahat.io/api/v1"}],"permalink":"/api/update-mobilizer-details","previous":{"title":"Remove and archive a MOBILIZER,","permalink":"/api/remove-and-archive-a-mobilizer"},"next":{"title":"Get the token transactions by current MOBILIZER","permalink":"/api/get-the-token-transactions-by-current-mobilizer"},"jsonRequestBodyExample":{"name":"Rastra","phone":"12121212","wallet_address":"0x00000","email":"rastra@gmail.com","address":"nepal","govt_id":"99988777nepal","govt_id_image":"http://source","organization":"rumsan"}}')}}]);