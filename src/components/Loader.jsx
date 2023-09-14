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
      color="#155E75"
      cssOverride={override}
       />
    </div>
  )
}

export default Loader
