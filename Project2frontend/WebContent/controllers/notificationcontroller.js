/**
 * NotificationCtrl
 * getnotification/id
 */
app.controller('NotificationCtrl',function($scope,NotificationService,$routeParams,$location){
	var id=$routeParams.id
	
	NotificationService.getNotification(id).then(function(response){
		$scope.notification=response.data// select * from notification where id=?	
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})

	NotificationService.updateNotification(id).then(function(response){
		getNotificationNotiewed()
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	
	function getNotificationNotViewed(){
		NotificationService.getNotificationNotViewed().then(function(response){
			//update the value of the variables?
			//response.data==[list of notification not yet viewed by the user]
			$rootScope.notifications=response.data
			$rootScope.notificationCount=$rootScope.notifications.length
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
})