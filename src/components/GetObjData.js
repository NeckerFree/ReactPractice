import React from 'react';

function GetObjData() {
  const data = {
    "item1": [
      {
        "title": "The Handmaid's Tale",
        "category": "Fiction"
      }
    ],
    "item2": [
      {
        "title": "Great Expectations",
        "category": "Classics"
      }
    ]
  };
  return (
    <div>
      {Object.entries(data).map(([key0, element]) =>
        <div key={key0}>
           <h4>Item: {key0}</h4>
          {Object.entries(element).map(([key1, value]) =>
            <div key={key1}>
              <div>Title: {value.title} </div>
              <div>Category: {value.category}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default GetObjData;
