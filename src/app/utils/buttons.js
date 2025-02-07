// export const Button = (props) => {
//     return (
//       <button type={props.type} onClick={props.onClick} className={props.class}>
//         {props.name}
//       </button>
//     );
//   };
export const Button = ({ onLoading, type, classes, onClick, name }) => {
  return (
    <button type={type} onClick={onClick} className={classes}>
      {onLoading ? (
        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-50 mr-2"></span>
      ) : null}
      {onLoading ? "Loading..." : name}
    </button>
  );
};
export const CancelButton = (props) => {
  return (
    <div className={props.className}>
      <div className="capitalize  bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent">
        {props.name}
      </div>
    </div>
  );
};
