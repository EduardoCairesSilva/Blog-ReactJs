import LatestItem from "./LatestItem";

export default function Latest() {
  return (
    <div>
      <h3 className="text-xl pb-3 dark:text-white">Mais recentes</h3>
      <ul>
        <LatestItem name='Aprenda a centralizar uma div' />
        <LatestItem name='Aprenda a centralizar uma div' />
        <LatestItem name='Aprenda a centralizar uma div' />
        <LatestItem name='Aprenda a centralizar uma div' />
        <LatestItem name='Aprenda a centralizar uma div' />
        <LatestItem name='Aprenda a centralizar uma div' />
      </ul>
    </div>
  )
}