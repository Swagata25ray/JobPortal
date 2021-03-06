package com.niit.Dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.models.Friend;
import com.niit.models.User;

@Repository
@Transactional
public class FriendDaoImpl implements FriendDao{
	@Autowired
private SessionFactory sessionFactory;

	public List<User> getSuggestedUsers(String email) {
		Session session=sessionFactory.getCurrentSession();
		String queryString="select * from user_project2 where email in"
				+ "( select email from user_project2 where email!=? "
				+ " minus "
				+ " (select fromId_email from friend_project2 where toId_email=? "
				+ "   union "
				+ "  select toId_email from friend_project2 where fromId_email=?))";
		     SQLQuery sqlQuery= session.createSQLQuery(queryString);
		     sqlQuery.setString(0, email);
		     sqlQuery.setString(1, email);
		     sqlQuery.setString(2, email);
		     sqlQuery.addEntity(User.class);//convert record to user object
		     return sqlQuery.list();
	}

	public void addFriendRequest(Friend friend) {
		Session session=sessionFactory.getCurrentSession();
		session.save(friend);
		
	}

	public List<Friend> getPendingRequests(String email) {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from Friend f where f.toId.email=? and f.status='P'");
		query.setString(0,email);
		List<Friend> pendingRequests=query.list();
		return pendingRequests;
	}

	public void acceptFriendRequest(Friend friend) {
		System.out.println("Friend ID is "+friend.getId());
	Session session=sessionFactory.getCurrentSession();
	session.update(friend);
	}

	public void deleteFriendRequest(Friend friend) {
		System.out.println("Friend ID is "+friend.getId());
		Session session=sessionFactory.getCurrentSession();
		session.delete(friend);//delete from friend where id=?
	}

	public List<User> listOfFriends(String email) {
		Session session=sessionFactory.getCurrentSession();
		//friend request from loggedin user to other users, and if it is accepted (status is 'A')
		Query query1=session.createQuery("select f.toId from Friend f where f.fromId.email=? and f.status=?");
		query1.setString(0, email);
		query1.setCharacter(1, 'A');
		List<User> list1=query1.list();
		//f is alias
		Query query2=session.createQuery("select f.fromId from Friend f where f.toId.email=? and f.status=?");
		query2.setString(0, email);
		query2.setCharacter(1, 'A');
		List<User> list2=query2.list();
		
		list1.addAll(list2);
		
		return list1;
		
		
		
	}
	
	
}