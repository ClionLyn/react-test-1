import './App.css';
import Content from './components/Content';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Control from './components/Control';
// import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: null,
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      subject: { title: 'WEB!!!', sub: 'World Wide Web!!!!!!!!!!!!!!' },
      contents: [
        { id: 0, title: 'HTML', desc: 'HTML is for information' },
        { id: 1, title: 'CSS', desc: 'CSS is for design' },
        { id: 2, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }
  }
  render() {
    let _title, _desc;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      const idx = this.state.selected_content_id;
      _title = this.state.contents[idx].title;
      _desc = this.state.contents[idx].desc;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChagnePage={function() {
            this.setState({mode: 'welcome'});
          }.bind(this)}
        ></Subject>

        {/* <header>
          <h1><a href="/" onClick={function(e) {
            e.preventDefault();
            this.setState({
              mode: 'read'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        <br /><br />

        <TOC
          data={this.state.contents}
          onChagnePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: id
            });
          }.bind(this)}
        ></TOC>

        <br /><br />

        <Control></Control>

        <br /><br />

        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
