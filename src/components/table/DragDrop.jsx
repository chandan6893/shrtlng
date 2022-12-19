import React, { useState, useRef } from "react";
import { HolderOutlined } from "@ant-design/icons";

function DragDrop({ data }) {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(data);

  //Handle drag events
  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            className="drag"
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
            onDragOver={(e) => e.preventDefault()}
          >
            <h6>{item[0]} </h6>
            <HolderOutlined />
          </div>
        ))}
    </>
  );
}

export default DragDrop;
