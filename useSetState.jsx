const useSetState = (initState) => {
  const [ state, setState ] = React.useState(initState)
  const setMergeState = (value) => {
    setState((prevValue) => {
      const newValue = typeof value === 'function' ? value(prevValue) : value
      return newValue ? { ...prevValue, ...newValue } : prevValue
    })
  }  

  return [ state, setMergeState ]
}

function UseSetStateDemo() {
  const [ person, setPerson ] = useSetState({
    name: 'Gokhan',
    age: 31
  })

  const onSetName = () => {
    setPerson({ name: 'Zafer' })
  }

  const onSetAge = () => {
    setPerson(() => {
      return {
        age: 32
      }
    })
  }

  return (
    <div>
      <p>name: { person.name }</p>
      <p>age: { person.age }</p>

      <button onClick={onSetName}>change name</button>
      <button onClick={onSetAge}>change age</button>
    </div>
  )
}


const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<UseSetStateDemo />);