/**
 * BlogPostService
 */
app.factory('BlogPostService',function($http){
	var blogPostService={}
	var BASE_URL="http://localhost:8085/Project2middleware"
	
		//QUERY - insert into blogpost values (?,,,) - DAO layer
		blogPostService.addBlogPost=function(blog){
			var url=BASE_URL + "/addblogpost"
			return $http.post(url,blog)
		}
		
		//QUERY - select * from blogpost where approvalstatus=true - IN DAO
		blogPostService.getBlogsApproved=function(){
			return $http.get(BASE_URL + "/approvedblogs")
		}
		
		blogPostService.getBlog=function(id){
			return $http.get(BASE_URL + "/getblog/"+id)
		}
		
		blogPostService.getBlogsWaitingForApproval=function(){
			return $http.get(BASE_URL + "/blogswaitingforapproval")
		}
		
		blogPostService.approveBlogPost=function(blogPost){
			return $http.put(BASE_URL + "/approveblogpost",blogPost)
		}
		
	    blogPostService.rejectBlogPost=function(blogPost,rejectionReason){
	    	console.log(blogPost);
	    	return $http.put(BASE_URL+"/rejectblogpost?rejectionReason="+rejectionReason,blogPost)
	    }	
	    
	    blogPostService.getNotificationNotViewed=function()
	    {
	    	return $http.get(BASE_URL + "/notifications")
	    }
	    //blog - blogpost object
	    //commentTxt - String
		blogPostService.addComment=function(blog,commentTxt){
			return $http.post(BASE_URL + "/addcomment?commentTxt="+commentTxt,blog)
		}
		
		blogPostService.getBlogComments=function(blogPostId){
			return $http.get(BASE_URL + "/getcomments/"+blogPostId)
		}
		return blogPostService;
		
	})