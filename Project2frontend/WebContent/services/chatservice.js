/**
 * ChatService
 */
//This filter is used to display chat messages in reverse order ie from last index to 0 , latest message first
app.filter('reverse', function() {
	  return function(items) {
	    return items.slice().reverse();
	  };
	});

	app.directive('ngFocus', function() {
	  return function(scope, element, attrs) {
	    element.bind('click', function() {
	      $('.' + attrs.ngFocus)[0].focus();
	    });
	  };
	});

	app.factory('ChatService', function($rootScope) {
	  alert('app factory')
	    var socket = new SockJS('/Project2middleware/chatmodule');
	    var stompClient = Stomp.over(socket);
	    console.log(stompClient)
	    //when browser connects with WebSocket successfully
	    //broadcast that event to the event id 'sockConnected'
	    stompClient.connect('', '', function(frame) {
	    	alert('In connect function in service')
	      $rootScope.$broadcast('sockConnected', frame);
	    });

	    return {
	      stompClient: stompClient
	    };
	});
	
	
	
//UserService.register().then()