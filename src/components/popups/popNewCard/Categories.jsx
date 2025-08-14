export default function Category({category, colorClass, isActive, onActive}) {
  return (
    <div className={`categories__theme ${colorClass} ${isActive ? "_active-category" : ""}`} name="topic" onClick={onActive}>
      <p className={colorClass} name="topic">{category}</p>
    </div>
  );
}
