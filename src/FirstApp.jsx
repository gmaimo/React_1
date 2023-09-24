

const newMessage = {
  message: 'Hola mundo',
  title: 'yo'
};

const saludo = (a, b) => {
  return a + b;
}

export const FirstApp = ({title}) => {


  return (
    <>
    <h1>{title}</h1>
    {/* <h1>{saludo(1,2)}</h1> */}
    {/* <code>{JSON.stringify(newMessage)}</code> */}
    <p>dwd</p>
    </>
  )
}
