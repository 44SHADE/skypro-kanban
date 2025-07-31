export default function BrowseBtn({ btnText, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <a>{btnText}</a>
    </button>
  );
}
