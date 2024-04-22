/**
 * TAG COMPONENT
 * @param {{ tag: string }} props 
 * @returns {JSX.Element}
 */
function Tag({ tag }) {
  return (
    <li
      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
    >
      {tag}
    </li>
  )
}

export default Tag;