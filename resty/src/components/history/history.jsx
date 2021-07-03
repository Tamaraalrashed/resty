import React from 'react';
// import './header.scss'

export default function History(props) {
    let params = localStorage.getItem('queryParameters') ? JSON.parse(localStorage.getItem('queryParameters')) : [];
    return (
      <>
      <h2>History</h2>
        {params.map((query) => {
          return (
            <li className='method' key={query.selectedOption + query.url}>
              <span>{query.selectedOption} </span> 
              <span> {' '}{query.url}</span>
            </li>
          );
        })}
      </>
    );
  }
// class History extends React.Component{
//     render(){
//         {const saved= JSON.parse(localStorage.getItem('queryParameters'))
//         console.log('saved',saved)}
//         return(
//             <React.Fragment>
//         <div className="App-history">
       
//       {/* {history.map((query) => {
//         return (
//           <li className='method' key={query.method + query.output}>
//             <span>{query.method}</span>
//             <span>{query.output}</span>
//           </li>
//         );
//       })}  */}
       
       
       
       
    

        
//         </div>
//         </React.Fragment>
//     )
// }
// }

// export default History;