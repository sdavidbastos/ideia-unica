function Tempo({ staticDateString }) {
  console.log("> Passando pelo FrontEnd");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <>
      <div>{dynamicDateString}(Dinâmico)</div>
      <div>{staticDateString}(Estático)</div>
    </>
  );
}

// Na disso vai para o backend
export async function getStaticProps() {
  console.log("> Passando pelo getStaticProps()");

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString,
    },
    revalidate: 1,
  };
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default Tempo;
