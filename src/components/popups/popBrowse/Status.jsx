export default function Status({ statusName, isActive, isHidden, onClick }) {
  return (
    <div className={`status__theme ${isActive ? "_gray" : ""} ${isHidden ? "_hide" : ""}`} name="status" onClick={onClick}>
      <p className={`${isActive ? "_gray" : ""}`} name="status">
        {statusName}
      </p>
    </div>
  );
}
