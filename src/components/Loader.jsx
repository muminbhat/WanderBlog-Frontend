import { CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader"

const override: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensures it takes up the full viewport height
  };

const Loader = () => {

  return (
    <div>
      <SyncLoader 
      className="bg-white dark:bg-black"
      color="#155E75"
      cssOverride={override}
       />
    </div>
  )
}

export default Loader
