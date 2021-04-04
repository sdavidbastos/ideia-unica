function Tempo() {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
      <div>
          {dynamicDateString}(Dinâmico)
      </div>
  )
}

export default Tempo;
