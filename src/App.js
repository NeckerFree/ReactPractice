import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(resp => setUserData(resp));    
  }, [userData]);

  return (
    <div className="App">
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
            {userData && userData.map( user =>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
