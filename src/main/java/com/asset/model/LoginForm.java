package com.asset.model;
public class LoginForm {

    private String username;
    private String password;

    // Constructors, getters, setters

    public String getUsername() {
        return username;
    }

    public LoginForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoginForm(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginForm [username=" + username + ", password=" + password + "]";
	}

	public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
