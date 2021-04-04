async function tempo(request, response) {
    const apiSecret = process.env.SECRET_API_KEY;
    const dynamicDate = new Date();

    const productsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const productsResponseJson = await productsResponse.json();

    const { username } = productsResponseJson[0];

    response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

    response.json({
        date: dynamicDate.toGMTString(),
        username,
    });
}

export default tempo;
