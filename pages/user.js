import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementByAmount } from "../store/slices/user";

const User = () => {
  const count = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
export default User;
