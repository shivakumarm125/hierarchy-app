import { React } from "react";
import "./App.css";
import { dataRecieved } from "./data";

class task {
  constructor(taskname, name, prevTask, nextTask) {
    this.name = name;
    this.prevTask = prevTask;
    this.nextTask = nextTask;
    this.taskname = taskname;
  }
}

export const CarMan = () => {


  var tasks = [];
  let checkPrevtask = [];
  let checkNextTask = [];

  function tasksExtraction(data) {

    Object.keys(data).map(function (loops) {
      checkPrevtask.push(data[loops]);
      let taskObj = new task(loops, data[loops].name, data[loops].prevTask, data[loops].nextTask);
      tasks.push(taskObj);
      return <b>{checkPrevtask}</b>
    })
    console.log(checkPrevtask);
    console.log(checkNextTask);
  }

  function connectingLine(i) {
    if (i !== tasks.length - 1) {
      return <div>
        <svg width="300" height="300"><line x1="0" y1="0" x2="0" y2="350" stroke="black" /></svg>
      </div>

    }

  }

  function tasksSort() {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].prevTask === '') {
        let temp = tasks[0];
        tasks[0] = tasks[i];
        tasks[i] = temp;
      }

    }
    for (let p = 0; p < tasks.length - 1; p++) {
      let tempNxt = tasks[p].nextTask;
      for (let i = p; i < tasks.length; i++) {
        if (tasks[i].taskname === tempNxt) {
          let temp = tasks[p + 1];
          tasks[p + 1] = tasks[i];
          tasks[i] = temp;
        }
      }
    }

    const squars = [];
    for (let i = 0; i < tasks.length; i++) {
      squars.push(<div><div className="square" style={{ left: "990px", top: "50px" }}>
        <div>
          <b>{tasks[i].taskname}</b>
        </div>
        <div>
          {tasks[i].name}
        </div>
      </div>
        {connectingLine(i)}


      </div>)
    }
    return squars;

  }

  return (
    <>
      <div className="CarMan-Container"></div>
      {dataRecieved.map((data, key) => {
        return (
          <div key={key}>

            {tasksExtraction(data.root)}
            <div> {tasksSort()} </div>
          </div>

        );
      })}
    </>
  )
}