import React from "react";
import classes from "./Tasks.module.css";

function Tasks({ title, data, children }: { title: string, data: any, children?: React.ReactNode }) {
  return (
    <div className={classes.tasks}>
      <div className={classes.tasks__title}>
        <p className={classes.tasks__count}>{data.length}</p>
        <h6>{title}</h6>
      </div>
      <div>
        {data}
      </div>
      {children}
    </div>
  );
}

export default Tasks;
