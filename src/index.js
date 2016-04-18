import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {punisheeList: []};
  }

  addToHitList() {
    this.setState( {  punisheeList: [...this.state.punisheeList, {name: this.refs.punisheeInput.value, hit:false }]});
    this.refs.punisheeInput.value = '';
  }

  remove(index) {
    var tmpList = this.state.punisheeList;
    tmpList.splice(index, 1);
    this.setState( { punisheeList: tmpList} );
  }

  hit(index){
    var tmpList = this.state.punisheeList;
    tmpList[index].hit = !tmpList[index].hit;
    this.setState( { punisheeList: tmpList } );
  }

  getStyle(punishee) {
    if(punishee.hit){
      return { textDecoration: "line-through" };
    }
    return { textDecoration: "none" };
  }

  render() {
    return (
      <div>
        <input type="text" name="name" placeholder="Richard Nixon" ref="punisheeInput"></input>
        <button onClick={this.addToHitList.bind(this)}>Add to Hit List</button>
        <ul>
          {this.state.punisheeList.map((x,index) => {
            let style = x.hit ? { textDecoration: 'line-through' } : {};

            return(<li key={index}
                       style={this.getStyle.bind(this, x)()}>
              <span onClick={this.hit.bind(this, index)}>{x.name}</span>

              <button onClick={this.remove.bind(this, index)}>X</button>
            </li>);
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
 <App />,
  document.getElementById('root')
);
