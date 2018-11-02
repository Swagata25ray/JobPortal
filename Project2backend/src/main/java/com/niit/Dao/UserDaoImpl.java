package com.niit.Dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.models.User;
@Repository
@Transactional
public class UserDaoImpl implements UserDao{
	@Autowired
private SessionFactory sessionFactory;
	
	public UserDaoImpl(){
		System.out.println("UserDaoImpl bean is created");
	}
	
	public void registration(User user) {
		Session session=sessionFactory.getCurrentSession();
		session.save(user);
		
	}

	public boolean isEmailUnique(String email) {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from User where email=?");
		query.setString(0, email);
		User user=(User)query.uniqueResult();
		if(user!=null){//duplicate email address
			return false;
		}else{//unique email address
			return true;
		}
		
		
	}
    //dao will get user object from middleware
	public User login(User user) {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from User where email=? and password=?");
		query.setString(0, user.getEmail());
		query.setString(1, user.getPassword());
		return (User)query.uniqueResult();
	}

	public void updateUser(User user) {
		Session session=sessionFactory.getCurrentSession();
		session.update(user);
		//update User_project2 set password=?,firstname=?,lastname=?,phonenumber=?
		//, online_status=?,role=? where email=?
		
	}

	public User getUser(String email) {
		Session session=sessionFactory.getCurrentSession();
		User user=(User)session.get(User.class, email);
		return user;
	}

}