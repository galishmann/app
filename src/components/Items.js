import React from 'react';
import axios from 'axios';


class Items extends React.PureComponent {
  state = {
    items: null,
  }

  async componentDidMount() {
    const res = await axios.get('/api/items');
    this.setState({ items: res.data });
  }
  
  render() {
    const { items } = this.state;

    if (!items) {
      return <p>Loading</p>;
    }

    return (
      <div>
        <h1>Items</h1>
        {items.map((it) => (
          <p key={it.id}>{it.title}</p>
        ))}
      </div>
    )
  }
}

export default Items;
