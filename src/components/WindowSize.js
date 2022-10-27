import useWindowSize from "../common/useWindowSize";

const WindowSize = () => {
    let windowSize=useWindowSize();
    
    return (
        <>
          <p>Current screen width: {windowSize.width}</p>
          <p>Current screen height: {windowSize.height}</p>
      </>
    )
  }

  export default WindowSize;