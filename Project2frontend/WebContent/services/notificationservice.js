/**
 * NotificationService
 */
app.factory('NotificationService',function($http){
	var notificationService={}
	var BASE_URL="http://localhost:8085/Project2middleware"
	notificationService.getNotification=function(id){
		return $http.get(BASE_URL + "/notification/"+id)
	}

notificationService.updateNotification=function(id){
	return $http.put(BASE_URL + "/updatenotification/"+id)
}

notificationService.getNotificationNotViewed=function(){
	return $http.get(BASE_URL + "/notifications")
}

return notificationService;
})
