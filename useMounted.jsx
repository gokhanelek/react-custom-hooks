const useMounted = (callback) => {
  React.useEffect(callback, []);
};

const UseMountDemo = () => {
  const [count, setCount] = React.useState(0);

  useMounted(() => {
    console.log("useMounted");
  });

  return (
    <div>
      count: { count }
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
};



const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<UseMountDemo />);