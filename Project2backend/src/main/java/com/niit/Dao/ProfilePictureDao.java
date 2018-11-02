package com.niit.Dao;

import com.niit.models.ProfilePicture;

public interface ProfilePictureDao {
void uploadProfilePicture(ProfilePicture profilePicture);
ProfilePicture  getProfilePicture(String email);
}