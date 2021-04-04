function Tempo({ staticDateString }) {
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
export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString,
    },
  };
}

export default Tempo;
