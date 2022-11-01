const useUnmounted = (callback) => {
  const callbackRef = React.useRef(callback)

  callbackRef.current = callback

  React.useEffect(() => {
    return () => {
      callbackRef.current()
    }
  }, [])
}

const Child = () => {
  const [count, setCount] = React.useState(0)

  useUnmounted(() => {
    console.log('useUnmounted', count)
  })

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}

const UseUnmountedDemo = () => {
  const [showChild, setShowChild] = React.useState(true);

  return (
    <div>
      {!!showChild && <Child />}
      <button onClick={() => setShowChild(false)}>Destroy child</button>
    </div>
  )
}

const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<UseUnmountedDemo />);