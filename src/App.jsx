import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [data, setData] = React.useState([]);
  const changeData = (newData) => setData([...data, newData]);

  return (
    <>
     <div className="container w-full h-screen bg-zinc-700">

      <div className="cards  flex justify-center wrap p-4 gap-3">
        {data.map((ele,idx)=>{
          return <Card key={idx} data={ele}/>
        })}
      </div>

      <div className="form flex justify-center mt-12">
        <Form changeData={changeData}/>
      </div>

     </div>
    </>
  );
}

export default App;
