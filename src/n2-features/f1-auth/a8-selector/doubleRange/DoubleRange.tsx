import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch, useSelector } from "react-redux";
// import { rangeValueAC } from "../../../../m2-bll/reducers/packsReducer/packsReducer";
// import { AppStoreType } from "../../../../m2-bll/store";
const min=1
const max=200
export const DoubleRange = () => {
  const dispatch = useDispatch();

  // const min = useSelector<AppStoreType>(state=> state.packs.min)
  // const max = useSelector<AppStoreType>(state=> state.packs.max)

  const [values, setValues] = useState([min, max]);

  // const sendInputValue = (value: number[]) => {
  //   dispatch(rangeValueAC(value[0], value[1]));
  // };

  useEffect(() => {
    setValues([min, max]);
  }, [min, max]);

  return (
    <Range
       //@ts-ignore
      values={values}
      step={5}
        //@ts-ignore
      min={0}
      max={200}
      onChange={(values) => setValues(values)}
      // onFinalChange={sendInputValue}

      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "80%",
              borderRadius: "4px",
              background: getTrackBackground({
                  //@ts-ignore
                values: values,
                colors: ["#3aacc5", "#ccc", "#ccc"],
                min: 3000,
                max: 9000,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "12px",
            width: "12px",
            borderRadius: "50%",
            backgroundColor: "#c53a3a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-28px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
              padding: "4px",
              borderRadius: "4px",
              backgroundColor: "#c53a3a",
            }}
          >
              {/*//@ts-ignore*/}
            {values[index].toFixed(0)}
            {/*// 10.12345 => 10; (1) => 10.1; (2) > 10.12; ...*/}
          </div>
        </div>
      )}
    />
  );

};
