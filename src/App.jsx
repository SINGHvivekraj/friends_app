import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [data, setData] = React.useState([]);
  const changeData = (newData) => setData([...data, newData]);
  const changeFriendStatus=(id)=>{
    setData(data.map((item,index)=>{
      if(index===id)return {...item, isFriend:!item.isFriend};
      return item
    }))
  }

  return (
    <>
     <div className="container w-full h-screen bg-zinc-700">
      <div className="navbar">
        <h1 className="text-xl font-bold text-white p-4">Your Friend count : {
          data.filter(item=>item.isFriend).length} </h1>
      </div>
      <div className="cards  flex justify-center wrap p-4 gap-3">
        {data.map((ele,idx)=>{
          return <Card key={idx} data={ele} index={idx} changeFriendStatus={changeFriendStatus}/>
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
