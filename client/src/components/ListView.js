import React, { useState, useEffect } from "react";
import "../styles/ListView.css";
import { AiFillDelete } from "react-icons/ai";

function ListView() {
  const [listData, setListData] = useState([{}]);
  const [item_name, setName] = useState("");

  useEffect(() => {
    fetch("/api/shopping")
      .then((response) => response.json())
      .then((data) => setListData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/shopping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item_name }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Status 200 OK");
          window.location.reload();
        } else {
          throw new Error("Error creating log");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteItem = (event) => {
    fetch(`/api/shopping/${event.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Item Delete");
          window.location.reload();
        } else {
          throw new Error("Item not deleted");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="listview-container">
      <form method="POST" onSubmit={handleSubmit} className="listview-form">
        <input
          type="text"
          placeholder="Item"
          value={item_name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="submitBtn">+</button>
      </form>

      <div className="listview">
        {listData.map((item, index) => (
          <div className="listview-item" key={index}>
            <p>{item.item_name}</p>
            <button id={item._id} onClick={deleteItem}>
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListView;
