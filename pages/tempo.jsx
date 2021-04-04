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

// Nada disso vai para o frontend
export async function getStaticProps() {
    console.log("> Passando pelo getStaticProps()");

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString,
        },
        revalidate: 10,
    };
}

export default Tempo;
