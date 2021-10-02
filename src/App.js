import { useEffect, useState } from "react";
import Section from "./components/Section";
import "./styles.css";

export default function App() {
  useEffect(() => {}, [
    fetch("https://api.jsonbin.io/b/614190d34a82881d6c4f46cc").then((res) => {
      res.json().then((response) => {
        console.log(response);
      });
    })
  ]);
  const appStateInitial = [
    {
      title: "Hello There",
      date: "23/09/1997",
      user: "Joshua",
      state: "Planned"
    },
    {
      title: "Hello There",
      date: "23/09/1997",
      user: "Joshua",
      state: "Planned"
    },
    {
      title: "Hello There",
      date: "23/09/1997",
      user: "Joshua",
      state: "Planned"
    },
    {
      title: "Hello There",
      date: "23/09/1997",
      user: "Joshua",
      state: "Started"
    },
    {
      title: "Hello There",
      date: "23/09/1997",
      user: "Tushar",
      state: "Done"
    },
    {
      title: "Hello There",
      date: "23/09/1997",
      state: "Done",
      user: "Joshua"
    }
  ];
  const [appState, setAppState] = useState(appStateInitial);
  return (
    <div className="mainWrapper">
      <Section state="Planned" appState={appState} setAppState={setAppState} />
      <Section state="Started" appState={appState} setAppState={setAppState} />
      <Section state="Done" appState={appState} setAppState={setAppState} />
    </div>
  );
}
