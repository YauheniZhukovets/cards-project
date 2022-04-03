import React from 'react';

export const Profile = () => {
    /*  const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
      const user = useSelector<AppStoreType, UserType>(state => state.login.user)

      if (!isLoggedIn) {
          return <Navigate to={PATH.LOGIN}/>
      }
      */
    return (
        <div>
            <span>ProfilePage</span>
            {/* <h1>Привет {user.name}!</h1>
            <div>
                <img src={user.avatar} alt="img"/>
            </div>*/}
        </div>
    );
};

