
const Char = ({ name, width }) => {
  return (
    <div>
    <h6>{name}</h6>
    <div className="relative max-w-3xl h-4 rounded-3xl my-1 bg-slate-300">
    <div style={{ width: width }} className="absolute max-w-3xl h-4 rounded-3xl bg-zinc-700"></div>
  </div>
  
  </div>
  )
}

export default Char