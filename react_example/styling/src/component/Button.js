import React from "react";
// classnames는 false와 같은 유사 false 값을 무시함
import classNames from "classnames";

import "./Button.scss";

// size : large, medium(defalut), small
// color: blue, pink, gray
// Rest Props : 여러 개의 props를 넘겨줄 때 rest 형식으로 넘겨주는 것 ...rest 로 주고 받음
function Button({ children, size, color, outline, fullWidth, ...rest }) {
  //className = {Button medium} <<
  //   return <button className={["Button", size].join(" ")}>{children}</button>;
  //   classnames 사용
  return (
    <button
      className={classNames("Button", size, color, {
        // outline과 fullwidth 값은 false 일 때 적용 X
        // 그렇기 때문에 default 값도 지정하지 않음
        outline,
        fullWidth,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
