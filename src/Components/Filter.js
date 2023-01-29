import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

import { useSelector } from "react-redux";

import { filtersActions } from "../Redux/features/filterSlice";
import store from "../Redux/store";
const Filter = () => {
  const Query = useSelector((state) => state.filter.query);
  const Field = (e) => {
    store.dispatch(filtersActions.filtersField(e));
  };
  const Condition = (e) => {
    store.dispatch(filtersActions.filtersCondition(e));
  };
  const Criteria = (e) => {
    store.dispatch(filtersActions.filterCriteria(e));
  };

  const AddFilter = (e) => {
    e.preventDefault();
    store.dispatch(filtersActions.AddFilter(1));
  };
 
  return (
    <div className="">
      <div className=" ">
        {Query.map((e) => (
          <div
            className="flex justify-around w-full flex-wrap flex-row  mt-4"
            key={e.Field}
          >
            <div>
              <div className="text-white">Field</div>

              <Dropdown onSelect={Field}>
               
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  <span className="text-gray-400">{e.Field}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item eventKey="Theme">
                    <span className="text-gray-400">Theme</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Sub-theme">
                    <span className="text-gray-400">Sub-theme</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Reason">
                    <span className="text-gray-400">Reason</span>
                  </Dropdown.Item>
                  <DropdownItem eventKey="Language">
                    <span className="text-gray-400">Language</span>
                  </DropdownItem>
                  <DropdownItem eventKey="Source">
                    <span className="text-gray-400">Source</span>
                  </DropdownItem>
                  <DropdownItem eventKey="Rating">
                    <span className="text-gray-400">Rating</span>
                  </DropdownItem>
                  <DropdownItem eventKey="Time Period">
                    <span className="text-gray-400">Time Period</span>
                  </DropdownItem>
                  <DropdownItem eventKey="Common">
                    <span className="text-gray-400">Common</span>
                  </DropdownItem>
                  <DropdownItem eventKey="CustomerID">
                    <span className="text-gray-400">CustomerID</span>
                  </DropdownItem>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <div className="text-white">Condition</div>
              <Dropdown onSelect={Condition}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  <span className="text-gray-400">
                    {Query.length > 0 ? `${e.Condition}` : "Select condition"}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item eventKey="===">
                    <span className="text-gray-400">Equals</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="!==">
                    <span className="text-gray-400">Does not equal</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="==">
                    <span className="text-gray-400">Like</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="!=">
                    <span className="text-gray-400">Not Like</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey=" ">
                    <span className="text-gray-400">Is Empty</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="=">
                    <span className="text-gray-400">Is</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="!">
                    <span className="text-gray-400">Is not</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <div className="text-white">Criteria</div>
              <Dropdown onSelect={Criteria}>
                <Dropdown.Toggle id="dropdown-basic" variant="secondary" placeholder="yo">
                  <span className="text-gray-400 ">
                    {Query.length >0 ? `${e.Criteria}` : "Select criteria"}
                    {console.log(Query.length)}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" >
                  <Dropdown.Item eventKey="Offers">
                    <span className="text-gray-400">Offers</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Performance">
                    <span className="text-gray-400">Performance</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Platforms">
                    <span className="text-gray-400">Platform</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Product Feedback" >
                    <span className="text-gray-400">Product Feedback</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
      <div className="w-24 h-10 bg-blue-600 mt-6 rounded-md text-white">
        <button className="h-full w-full text-center" onClick={AddFilter}>
          +Add filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
