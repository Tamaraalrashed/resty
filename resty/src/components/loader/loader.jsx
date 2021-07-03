

import Loading from 'react-loader-spinner';

function Loader({ props }) {
  return(
     


    <div className="loader">
    <h3>Loading...</h3>
    <Loading
             type="Ball"
             color="red"
             height={75}
             width={75}
           />
 </div>   


  ) ;
}

export default Loader;