$(function(){
	$('#submitBtn').click(function(){
		var username = $('#username').val();
		var password = $('#password').val();
		var param = {
			username: username,
			password: password
		}
		$.post("http://192.168.1.69:2000/System/login",param,function(obj){
           
        })
	})
})