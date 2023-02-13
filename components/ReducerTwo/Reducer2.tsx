import React, { useReducer, useState } from "react";
import Student from "./Student";

const ACTION_TYPES = {
  add: "add-student",
  delete: "delete-student",
  mark: "mark-student",
};

interface StudentsType {
  name?: string;
  id?: number;
  isHere?: boolean;
}

interface StateType {
  count: number;
  students: StudentsType[];
}

export interface PropsType extends StudentsType {
  dispatch: any;
}

const reducer = (
  state: StateType,
  action: { type: any; payload: StudentsType }
) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case ACTION_TYPES.delete:
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case ACTION_TYPES.mark:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

export default function Reducer2(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>출석부</h2>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.add, payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}
