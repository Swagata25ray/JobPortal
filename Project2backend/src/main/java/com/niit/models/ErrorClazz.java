package com.niit.models;

//used to return error messages to the client
public class ErrorClazz {
private int errorCode;
private String errorMsg;
public int getErrorCode() {
	return errorCode;
}
public void setErrorCode(int errorCode) {
	this.errorCode = errorCode;
}
public String getErrorMsg() {
	return errorMsg;
}
public void setErrorMsg(String errorMsg) {
	this.errorMsg = errorMsg;
}
public ErrorClazz(int errorCode, String errorMsg) {
	super();
	this.errorCode = errorCode;
	this.errorMsg = errorMsg;
}

}