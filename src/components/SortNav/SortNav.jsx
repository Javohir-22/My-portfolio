
const SortNav = (props) => {
  return (
    <a href={props.link}>
      <li className={`p-2 px-3 transition-all hover:shadow hover:shadow-slate-500 rounded-2xl shadow-slate-500 backdrop-blur-2xl opacity-80 hover:opacity-100 border-slate-500 ${props.className}`}>{props.name}</li>
    </a>
  );
};

export default SortNav