import { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = [...task];
    newTask.push({ title, details });

    settask(newTask);

    settitle("");
    setdetails("");
  };

  const removeNotes = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };

  return (
    <div className="main lg:flex bg-[#030712] overflow-hidden h-screen text-white">
      <form
        action=""
        className="flex flex-col gap-8 lg:w-1/2 p-6"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className=" text-2xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Write heading of your Notes"
          className="border-2 border-solid border-white rounded-lg px-4 py-3 outline-none"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Write Your Notes Content Here . . . . . ."
          className="border-2 border-solid border-white h-40 rounded-lg outline-none px-4 py-3 "
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        ></textarea>

        <button className="active:bg-gray-300 border-2 border-solid border-white rounded-3xl w-fit px-12 py-2 cursor-pointer hover:text-[#69BEE5]  text-lg transition-all duration-300 ease">
          Add Notes
        </button>
      </form>

      <div className=" lg:w-1/2  p-5 lg:border-l-2">
        <h1 className="font-bold text-2xl py-3">Your Notes Here</h1>
        <div className="flex flex-wrap gap-5 h-[96%] overflow-auto">
          {task.map((e, idx) => {
            return (
              <div
                key={idx}
                className='h-60 w-45 py-4 leading-tight rounded bg-white text-black bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s")] object-cover flex flex-col justify-between items-center '
              >
                <div>
                  <h3 className="font-bold px-2 py-2">{e.title}</h3>
                  <p className="text-sm px-2">{e.details}</p>
                </div>
                <div>
                  <button
                    onClick={(idx) => {
                      removeNotes(idx);
                    }}
                    className="text-sm bg-red-500 text-white cursor-pointer px-3 rounded-2xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default App;

