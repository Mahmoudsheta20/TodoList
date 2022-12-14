import React, { useState } from "react";
import "./list.css";
const List = ({ Theme }) => {
  let users = [{ name: "sheta", id: 1 }];
  const [state, setstate] = React.useState("");
  const [List, setList] = React.useState(users);
  const [deleteDisplay, setdeleteDisplay] = useState(false);
  const [update, setupdate] = useState(false);
  const [updateInput, setupdateInput] = useState("");
  const DeleteItem = (e) => {
    let filter = List.filter((i) => i.id !== e);
    setList(filter);
    setdeleteDisplay(false);
  };

  const HandelSubmit = () => {
    const find = List.find(
      (item) => item.name.toLowerCase() === state.toLowerCase()
    );
    if (state !== "" && !find) {
      setList([...List, { name: state, id: Math.random() }]);
    }
    setstate("");
  };

  const updateItem = (e) => {
    setupdateInput(e);
    setupdate(true);
    console.log(e);
  };

  const handleUpdate = (e) => {
    const findItem = List.find((item) => item.id === e);
    const index = List.findIndex((item) => item.id === e);
    const newList = List.filter((item) => item.id !== e);
    newList.splice(index, 0, {
      ...findItem,
      name: updateInput,
    });
    setList(newList);
    setupdate(false);
    console.log(findItem);
  };

  const handleButton = (l) => {
    setupdate(l.id);
    setupdateInput(l.name);
  };

  return (
    <div className={`container ${Theme === "Dark" ? "Dark" : "Light"} `}>
      <h2>Todo List</h2>
      <div className="input">
        <input
          type="text"
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
        <button onClick={HandelSubmit} className="input__button">
          Add To List
        </button>
      </div>

      <div className="list">
        {List.map((l) => (
          <div className="items" key={l.id}>
            {update === l.id ? (
              <>
                <input
                  type="text"
                  className="input_update"
                  value={updateInput}
                  name=""
                  id=""
                  onChange={(e) => setupdateInput(e.target.value)}
                />
                <div className="button">
                  <button className="edit" onClick={() => handleUpdate(l.id)}>
                    Edit
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>{l.name}</p>
                <div className="button">
                  <button className="edit" onClick={() => handleButton(l)}>
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={() => setdeleteDisplay(l.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}

            {deleteDisplay === l.id && (
              <div className="overlay">
                <div className="container__Delete">
                  <p>You sure Delete this item</p>
                  <div className="Delete__button">
                    <button
                      className="delete "
                      onClick={() => DeleteItem(l.id)}
                    >
                      yes
                    </button>
                    <button
                      className="edit"
                      onClick={() => setdeleteDisplay(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
