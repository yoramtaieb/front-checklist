import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import ListsContext from "../../../../contexts/lists/Lists";
import ModaleDeleteProduct from "../../../molecules/Modales/ModaleDeleteList";

import "./AllLists.scss";

export default function AllLists() {
  const context = useContext(ListsContext);
  const [listError, setListError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:5000/forecast/list/all");
        context.setLists(result.data);
      } catch (error) {
        setListError(error.response.data);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="global">
      {context.lists.map((list) => (
        <div key={list.id} className="container_list">
          <p>{list.name}</p>
          <div>
            <div>
              <ModaleDeleteProduct list={list} key={list.id} />
            </div>
          </div>
        </div>
      ))}
      </div>
      <>
        {listError !== "" && (
          <div className="errorList">
            <span className="message">{listError.title}</span>
            <span className="message">{listError.description}</span>
          </div>
        )}
      </>
    </>
  );
}
