
const Title = ({link, name, night}) => {
  return(
    <a href={"#"+link}>
    <button className="relative border border-slate-400 flex items-center gap-2 pt- p-1 px-2 text-xs rounded-2xl hover:scale-105 hover:opacity-85 transition-transform ">
      <img className="w-2.5 rotate-45 opacity-50" src={`/icons/${night ? "square.png" : "square-logo.png"}`} alt="" />
      <span className="dark:text-white text-stone-900">{name}</span>
    </button>
  </a>
  )
}

export default Title