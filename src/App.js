import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

function Square({value, onSquareClick}) {

  return (
    <Button variant="contained" color="info" size="medium" className="square" onClick={onSquareClick}>
      {value}
    </Button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ '& button': { m: 0 } }}>
        <div className="board-row">
          {[0, 1, 2].map(val => <Square value={squares[val]} onSquareClick={() => handleClick(val)}/>)}
        </div>
        <div className="board-row">
          {[3, 4, 5].map(val => <Square value={squares[val]} onSquareClick={() => handleClick(val)}/>)}
        </div>
        <div className="board-row">
          {[6, 7, 8].map(val => <Square value={squares[val]} onSquareClick={() => handleClick(val)}/>)}
        </div>
      </Box>
    </Container>
  );
}

