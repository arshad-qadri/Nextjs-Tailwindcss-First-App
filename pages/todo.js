import { useState } from "react";
import Head from "next/head";
import { FiPlus, FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const todo = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [btn, setBtn] = useState(true);
  const [upd, setUpd] = useState(null);

  const addTodo = e => {
    e.preventDefault();
    const allData = { id: new Date().getTime().toString(), todo: todo };
    if (!todo) {
      alert("Plz fill the field");
    } else if (todo && !btn) {
      setItems(
        items.map(elem => {
          if (elem.id === upd) {
            return { ...elem, todo: todo };
          }
          return elem;
        }),
        setBtn(true)
      );
    } else {
      setItems([...items, allData]);
    }
    // !todo ? false : setItems([...items, allData]);
    setTodo("");
    console.log("todoList", items);
  };

  const deletes = i => {
    const del = items.filter(e => {
      return e.id !== i;
    });
    setItems(del);
    setTodo("");
    setBtn(true);
  };
  const update = i => {
    const fin = items.find(e => {
      return e.id === i;
    });
    setTodo(fin.todo);
    console.log("fnd:", fin);
    setBtn(false);

    setUpd(fin.id);
    console.log("dd", upd);
  };

  //   ================ jsx =======================
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <div className=" w-full ">
        <h1 className="text-center capitalize text-3xl font-bold mt-10">
          todo
        </h1>
        <div className=" flex justify-center mt-8">
          <input
            className="border pl-2 h-10 w-52 focus:outline-none"
            type="text"
            placeholder="Add todo "
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          {btn ? (
            <button
              type="submit"
              className="bg-yellow-500 px-4 text-2xl text-white hover:bg-yellow-400 "
              onClick={addTodo}
            >
              <FiPlus />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-yellow-500 px-4 text-2xl text-white"
              onClick={addTodo}
            >
              <FiEdit />
            </button>
          )}
        </div>
        <div className="w-full flex justify-center items-center flex-col ">
          {items &&
            items.length > 0 &&
            items.map(e => {
              return (
                <div
                  className="flex w-2/5 bg-gray-800 shadow-lg justify-between  items-center p-5 mt-12"
                  key={e.id}
                >
                  <h1 className="text-white">{e.todo}</h1>
                  <div className="flex">
                    <button
                      className="bg-white  shadow-md hover:shadow-sm hover:text-yellow-400  text-yellow-500 text-2xl  p-2 mr-2 rounded-md "
                      onClick={() => update(e.id)}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="bg-white  shadow-md hover:shadow-sm hover:text-red-400  text-red-500 text-2xl  p-2 rounded-md "
                      onClick={() => deletes(e.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default todo;
