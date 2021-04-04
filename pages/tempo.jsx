function Tempo() {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
      <div>
          {dynamicDate}(Dinâmico)
      </div>
  )
}

export default Tempo;
