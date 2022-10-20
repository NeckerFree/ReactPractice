import { get } from "lodash";
import { Link, useParams } from "react-router-dom";
import useQuery from "./useQuery";

const DogPage = () => {
    const { breed } = useParams();
    const {data}= useQuery({
      url:  `https://dog.ceo/api/breed/${breed}/images/random`
    });
        
     const imageSrc = get(data, "message");
        return (
      <div>
        <div>
          <Link to="/">back</Link>
        </div>
        {!imageSrc && <p>Loading...</p>}
        {imageSrc && <img alt={`A nice ${breed}`} src={imageSrc} height={200} />}
      </div>
    );
  }
  export default DogPage;