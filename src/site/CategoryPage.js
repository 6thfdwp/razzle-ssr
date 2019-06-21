import React from 'react';
import axios from 'axios';

export default class CategoryPage extends React.Component {
  static async getInitialProps({ req, res, match }) {
    // return axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then(r => r.json())
    //   .then(items => {
    //     return { items };
    //   });
    const r = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return { items: r.data };
  }

  render() {
    let { match, items } = this.props;
    // console.log(items);
    items = items || [];
    return (
      <div>
        <h1>Category {match.params.category}</h1>
        <ul>
          lot of products
          {items.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
// CategoryPage.defaultProps = {items: []}
