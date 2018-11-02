/**
 * Angular JS module
 */
var app=angular.module("app",['ngRoute','ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/registration',{controller:'UserCtrl',templateUrl:'views/registrationform.html'})
	.when('/login',{controller:'UserCtrl',templateUrl:'views/login.html'})
	.when('/home',{controller:'HomeCtrl',templateUrl:'views/home.html'})
	.when('/updateprofile',{controller:'UserCtrl',templateUrl:'views/updateprofile.html'})
	.when('/addjob',{controller:'JobCtrl',templateUrl:'views/jobform.html'})
	.when('/getalljobs',{controller:'JobCtrl',templateUrl:'views/listofjobs.html'})
	.when('/addblogpost',{controller:'BlogPostCtrl',templateUrl:'views/blogpostform.html'})
	.when('/getblogs',{controller:'BlogPostCtrl',templateUrl:'views/listofblogsapproved.html'})
	.when('/getblog/:id',{controller:'BlogInDetailCtrl',templateUrl:'views/blogindetail.html'})
	.when('/blogswaitingforapproval',{controller:'BlogPostCtrl',templateUrl:'views/listofblogswaitingforapproval.html'})
	.when('/getblogswaitingforapproval/:id',{controller:'BlogInDetailCtrl',templateUrl:'views/blogapprovalform.html'})
	.when('/getnotification/:id',{controller:'NotificationCtrl',templateUrl:'views/notificationdetails.html'})
	.when('/suggestedusers',{controller:'FriendCtrl',templateUrl:'views/suggesteduserslist.html'})
	.when('/pendingrequests',{controller:'FriendCtrl',templateUrl:'views/pendingrequests.html'})
	.when('/listoffriends',{controller:'FriendCtrl',templateUrl:'views/friendslist.html'})
	.when('/uploadprofilepic',{templateUrl:'views/uploadprofilepicture.html'})
	.when('/chat',{controller:'ChatCtrl',templateUrl:'views/chat.html'})
	.otherwise({templateUrl:'views/home.html'})
})
//Angular module gets instantiated, app.run() will get executed
//restore userdetails to the variable user in $rootScope
app.run(function($rootScope,$cookieStore,UserService,$location){
	if($rootScope.user==undefined)
		$rootScope.user=$cookieStore.get('userDetails')
		
		$rootScope.logout=function(){
		   alert('Entering the function logout')
		   UserService.logout().then(function(response){
			   //delete the user variable from $rootScope
			   //clear the cookie
			   //redirect the user to login page
			   delete $rootScope.user
			   $cookieStore.remove('userDetails')
			   $location.path('/login')
		   },function(response){
               //if $rootScope.user is not undefined,clear the cookie and redirect the user to login page
			   if($rootScope.user!=undefined)
			   delete $rootScope.user
			   $cookieStore.remove('userDetails')
			   $location.path('/login')
		   })
	   }	
		
})