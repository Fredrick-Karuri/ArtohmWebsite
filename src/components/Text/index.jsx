import React from "react";

const sizeClasses = {
  txtLibreBaskervilleBold56Black900: "font-bold font-librebaskerville",
  txtLatoRegular16Black900: "font-lato font-normal",
  txtLatoSemiBold20: "font-lato font-semibold",
  txtLibreBaskervilleBold24Black900: "font-bold font-librebaskerville",
  txtLatoBold18: "font-bold font-lato",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoRegular16: "font-lato font-normal",
  txtLatoSemiBold16: "font-lato font-semibold",
  txtLatoRegular14: "font-lato font-normal",
  txtRobotoRegular16: "font-normal font-roboto",
  txtLibreBaskervilleBold48: "font-bold font-librebaskerville",
  txtLibreBaskervilleBold56: "font-bold font-librebaskerville",
  txtLatoRegular18Black900: "font-lato font-normal",
  txtLibreBaskervilleBold48WhiteA700: "font-bold font-librebaskerville",
  txtLibreBaskervilleBold24: "font-bold font-librebaskerville",
  txtLibreBaskervilleBold32: "font-bold font-librebaskerville",
  txtRobotoSemiBold14: "font-roboto font-semibold",
  txtRobotoBold20: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
