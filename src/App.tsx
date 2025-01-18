import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {  

 const { addItem } = useOrder()

  return (
    <>

    <header className=" bg-teal-300 py-5">
    <h1 className="text-center text-4xl"> Calculadora de propinas y consumo</h1>
    </header>

   <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2"> 
      <div className="p-5">
   <h2 className="text-4xl font-black">Menú</h2>
 
<div className="space-y-3">
{menuItems.map(item =>(
  <MenuItem
  key={item.id}
  item={item}
  addItem={addItem}
/>
))}
   </div>
   </div>

<div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
    /* para que tenga separación */

      </div>

   </main>
    </>
  )
}

export default App
