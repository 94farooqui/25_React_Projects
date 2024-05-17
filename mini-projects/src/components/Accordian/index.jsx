import { useState } from "react";
import { accordianData } from "../../data/accordianData";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
      setSelected(selected === currentId ? null : currentId)
      console.log(currentId)
  }
  return (
    <div className="wrapper bg-slate-100">
      <h2 className="text-4xl font-bold p-2">Accordian</h2>
      <div className="container ">
        {accordianData.length > 0 ? (
          <div className="flex flex-col gap-4">
            {accordianData.map((dataItem) => (
              <div onClick={()=>handleSingleSelection(dataItem.id)} className="bg-slate-200 p-4">
                <div  className="flex w-full justify-between">
                  <h2>{dataItem.question}</h2>
                  <p className="text-2xl font-bold">{selected === dataItem.id ? '-' :'+'}</p>
                </div>
                {selected === dataItem.id ? <div className="w-full">{dataItem.answer}</div> :null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
