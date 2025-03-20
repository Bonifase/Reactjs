import { useState } from 'react';
import Button from '@mui/material/Button';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <>
      <Button variant="contained" color="success" onClick={handleClick}>
        Click me
      </Button>
      <Button variant="contained" color="success">
        {count}
      </Button>
      <ul>{listItems}</ul>
    </>

  );
}

