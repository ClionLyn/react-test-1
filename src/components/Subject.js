function Subject(props) {
  return (
    <header>
      {/* <h1><a href="/">{props.title}</a></h1> */}
      <h1><a href="/" onClick={function(e) {
        e.preventDefault();
        props.onChagnePage();
      }}>{props.title}</a></h1>
      {props.sub}
    </header>
  );
}

export default Subject;