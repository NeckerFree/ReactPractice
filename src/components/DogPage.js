// A page that given a dog breed, will display a random image of 

import { get } from "lodash";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Page404 from "./Page404";
import useQuery from "./useQuery";

// the dog. The breed is passed as a URL parameter
const DogPage = () => {
    const { breed } = useParams();
    const {data, httpCode}= useQuery({
      url:  `https://dog.ceo/api/breed/${breed}/images/random`
    });
        
    if (httpCode === 404) {
        return <Page404 />
    };
    // console.log(data);
    const imageSrc = get(data, "message");
    // setHttpStatusCode(httpCode);

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