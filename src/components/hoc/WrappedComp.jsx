const WrappedComp = ({ style }) => {
    return (
      <div style={style}>
        <button className="btn" style={{ fontSize: '16px', backgroundColor: 'aqua' }}>
          Add To Transaction
        </button>
      </div>
    );
  };
  
  export default WrappedComp;
  