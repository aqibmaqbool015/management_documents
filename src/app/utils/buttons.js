export const Button = (props) => {
    return (
      <button type={props.type} onClick={props.onClick} className={props.class}>
        {props.name}
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