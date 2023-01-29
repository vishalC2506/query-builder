import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import Condition from "./Components/Condition";

const App = () => {
  const [submit, setSubmit] = useState(false);
  const Query = useSelector((state) => state.filter.query);
  const Logic = useSelector((state) => state.operators.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <form className="w-screen h-screen bg-red-400 " onSubmit={handleSubmit}>
      {console.log(Logic)}
      <div className="w-2/3 mx-auto h-5/6 bg-gray-400 border  relative top-12">
        <div className="w-full h-20 bg-blue-400 relative ">
          <div className="text-white ml-8 pt-2 mb-2 font-mono text-lg">
            create tag and query
          </div>

          {submit ? (
            <div className="text-white ml-8 font-mono opacity-60 text-sm">
              {Query.map((e, i) => {
                if (Query.length === 1) {
                 return <span>{`${e.Field} ${e.Condition} ${e.Criteria}`}</span>;
                } else if (Query.length === i + 1) {
                  return <span>{`${e.Field} ${e.Condition} ${e.Criteria}`}</span>;
                } else {
                 return  <span>{`${e.Field} ${e.Condition} ${e.Criteria} ${Logic} `}</span>;
                }
              })}
            </div>
          ) : (
            <div className="text-white ml-8 font-mono opacity-60 text-sm">
              The query you build will be saved in your active views
            </div>
          )}
          <div className="absolute right-3 top-4 ">
            <MdClose className="bg-blue-500 text-white rounded-md h-5 w-5" />
          </div>
        </div>
        <Condition />
        <button className="absolute bottom-4 left-4 bg-gray-500 rounded-md w-16 h-8 text-center text-white">
          cancel
        </button>
        <button
          className="absolute right-4 bottom-4 bg-blue-500 text-white w-16 h-8 rounded-md text-center"
          type="submit"
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default App;
