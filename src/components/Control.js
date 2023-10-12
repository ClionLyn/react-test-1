function Control(props) {
  return (
    <ul className="control-list">
      <li><a href="/create">Create</a></li>
      <li><a href="/update">Update</a></li>
      <li><button type="button">Delete</button></li>
    </ul>
  );
}

export default Control;