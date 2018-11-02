package com.niit.Dao;

import java.util.List;

import com.niit.models.BlogComment;

public interface BlogCommentDao {
void addBlogComment(BlogComment blogComment );
List<BlogComment> getBlogComments(int blogPostId);
}