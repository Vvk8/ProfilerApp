import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './UserCard';
import InfoCard from './InfoCard';

const App = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [userDetailsAdded, setUserDetailsAdded] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddUserDetails = () => {
    console.log('Add User details clicked');
    setUserDetailsAdded(true);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <UserCard onAddUsersDetails={handleAddUserDetails} />
        </div>
        <div className="col-md-6">
          {userDetailsAdded && (
            <InfoCard activeTab={activeTab} handleTabChange={handleTabChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;