import { Link } from "react-router-dom";

// A page that shows us a list of dog breeds to select from
const breeds = ["husky", "akita", "pitbull", "cat"];
const IndexPage = () => {
  return (
    <div>
      <h1>View some nice pictures of a dog breed</h1>
      <ul>
        <li><Link to="/" >Home</Link></li> 
        <li><Link to="/callapi" >CallApi</Link></li>
        <li><Link to="/toggebuton" >ToggleButton</Link></li>
        <li><Link to="/pagination" >Pagination</Link></li>
        <li><Link to="/exercise4" >Exercise4</Link></li>
        <li><Link to="/windowsize" >WindowSize</Link></li>
        <li><Link to="/usingreducer" >Using Reducer</Link></li>
        <li><Link to='/counter'>Error Counter</Link></li>
        <li><Link to='/useeffect'>Use Effect</Link></li>
        <li><Link to='/getdata'>Get Data</Link></li>
        <li><Link to='/resizefont'>Resize Font</Link></li>
        <li><Link to='/getobjdata'>Get Obj Data</Link></li>
        <li><Link to='/mousemove'>Mouse Move</Link></li>
        <li><Link to='/clock'>Clock</Link></li>
        <li><Link to={'/countdown'}>CountDown</Link></li>
        {breeds.map(breed => (
          <li key={breed}>
            <Link to={`/dogs/${breed}/`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;