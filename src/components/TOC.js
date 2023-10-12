function TOC(props) {
  let lists = [];
  for (let i = 0; i < props.data.length; i++) {
    const ele = props.data[i];
    lists.push(
      <li key={ele.id}>
        <a
          href={'./content/' + ele.id}
          data-id={ele.id}
          onClick={function (e) {
            //debugger;
            //console.log(e.target.dataset.id);
            e.preventDefault();
            props.onChagnePage(e.target.dataset.id);
          }.bind(this)}
        >{ele.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
  );
}

export default TOC;