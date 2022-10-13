import { useEffect, useState } from "react";
import produce from "immer";
import { useImmer } from "use-immer";

// import "./App.css";

const user = {
  name: "Jon",
  post: {
    title: "react",
    description: "Some desc",
    comment: {
      name: "Juli",
      text: "lorem some hi bos",
    },
  },
};

function App() {
  const [stateUser, setStateUser] = useImmer(user);

  useEffect(() => {
    console.log("post changed");
  }, [stateUser.post]);

  useEffect(() => {
    console.log("comment changed");
  }, [stateUser.post.comment]);

  return (
    <div>
      <pre>{JSON.stringify(stateUser, null, 2)}</pre>
      <div>{stateUser.post.title}</div>
      <div>{stateUser.post.comment.text}</div>
      <button
        onClick={() => {
          setStateUser((draft) => {
            draft.post.title = "immer";
            draft.post.comment.text = "Hello world";
          });
        }}>
        Mutate
      </button>
    </div>
  );
}

export default App;
