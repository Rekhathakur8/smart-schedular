import { useRef } from "react";
import { CiCalendarDate } from "react-icons/ci";
// eslint-disable-next-line react/prop-types
function InputBox({ handleOnNewItmesAdd }) {
  const inputValueTask = useRef();
  const inputValueDate = useRef();

  const handleOnAddButtonClicked = () => {
    let totalInputValueTask = inputValueTask.current.value;
    let totalInputValueDate = inputValueDate.current.value;
    handleOnNewItmesAdd(totalInputValueTask, totalInputValueDate);

    inputValueTask.current.value = "";
  };
  return (
    <>
      <div className="mainInputBoxDiv">
        <div className="TaskInputFirstDiv">
          <input
            ref={inputValueTask}
            type="text"
            id="TaskInput"
            placeholder="Enter Task "
          />
        </div>
        <div className="dateAndaddBtnInputDiv">
          <div className="subDivOfclaenderIcon">
            <CiCalendarDate className="calender_icon"></CiCalendarDate>
            <input ref={inputValueDate} type="date" id="due_date_input" />
          </div>
          <button id="AddButton" onClick={handleOnAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default InputBox;
