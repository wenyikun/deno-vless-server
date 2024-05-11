const ws = new WebSocket('ws://127.0.0.1:8000')

ws.onopen = () => {
  console.log('Connected to server')
  ws.send('Hello server')
}

ws.onerror = (err) => {
  console.log(err)
}
