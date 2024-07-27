import TagItem from "./TagItem";

export default function Tags() {
  return (
    <div className="w-[350px]">
      <h3 className="text-xl pb-3 dark:text-white">Tags</h3>
      <ul className="flex gap-2 flex-wrap">
        <TagItem name='JavaScript' />
        <TagItem name='JS' />
        <TagItem name='Programação' />
        <TagItem name='Node' />
        <TagItem name='PHP' />
        <TagItem name='HTML' />
      </ul>
    </div >
  )
}