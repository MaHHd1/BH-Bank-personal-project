import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './screen/loginScreen';
import SignUp from './screen/SignupScreen';
import UserInfo from './screen/UserInfo';
import AdminPage from './screen/AdminPage';
import ForgotPassword from './screen/Pass';

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const handleSignUp = (userInfo) => {
    setUser(userInfo);
    setIsSignedUp(true);
    setIsLoggedIn(true);
    setIsAdmin(false);
    setUsersData(prevUsers => [...prevUsers, userInfo]); 
  };

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    setIsLoggedIn(true);
    setIsAdmin(userInfo.isAdmin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setIsAdmin(false);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  return (
    <View style={styles.container}>
      {showForgotPassword ? (
        <ForgotPassword switchToLogin={handleBackToLogin} />
      ) : isLoggedIn ? (
        isAdmin ? (
          <AdminPage users={usersData} logout={handleLogout} />
        ) : (
          <UserInfo user={user} logout={handleLogout} />
        )
      ) : isSignedUp ? (
        <Login 
          switchToSignUp={() => setIsSignedUp(false)} 
          login={handleLogin} 
          switchToForgotPassword={handleForgotPassword} 
        />
      ) : (
        <SignUp 
          switchToLogin={() => setIsSignedUp(true)} 
          signUp={handleSignUp} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});










