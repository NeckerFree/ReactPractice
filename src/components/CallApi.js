
import { useEffect, useState } from 'react';
import UserData from './UserData';

const CallApi = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(resp => setUserData(resp));
  }, []);

  const handleDelete = (id) => {
    setUserData([...userData].filter(user => user.id !== id));
  }

  const handleRemaind = (id) => {
    setUserData(userData.map(user => user.id === id
      ? {
        ...user, remaind:
          (user.hasOwnProperty('remaind') === true) ? !user.remaind : true
      }
      : user));
  }
  return (
    <div className="exercise">
      <h4>Exercise 1</h4>
      <p className="description">Call API https://jsonplaceholder.typicode.com/users and show data, toggle highlight record with double click, delete record on client with click</p>
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.length > 0 ? userData.map(user =>
              <UserData
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                deleteUser={handleDelete}
                remaind={user.remaind}
                handleRemaind={handleRemaind}
              />
            ) : <tr><td colSpan="4">No Users to Show</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallApi;