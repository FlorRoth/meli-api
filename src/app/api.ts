const api = {
    item: {
    fetch:  async (id: string)  => {
    const item = await fetch (`https://api.mercadolibre.com/items/${id}`)
    .then(res => res.json() as Promise <{
            id: string,
            title: string,
            thumbnail: string,
            price: number,
            currency_id: string,
    }>
    );

    const description = await fetch (`https://api.mercadolibre.com/items/${id}/description`)
    .then(res => res.json() as Promise <{
            plain_text: string,
    }>
    );
    return {
        ...item,description
    }
    },

    search: (query: string)  =>  
        fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${query}?&limit=4`)
        .then(res => res.json() as Promise <{
            result : {
                id: string,
                title: string,
                thumbnail: string,
                price: number,
                currency_id: string,
                seller_address: {
                    city: {
                        name: string;
                    };
                };
            }[];
        }>
        )
    },
    categories: {
        all:  
        fetch (`https://api.mercadolibre.com/sites/MLA/categories?&limit=4`)
        .then(res => res.json() as Promise <{
            result : {
                id: string,
                name: string
            }[];
        }>
        )
    }
       
}

export default api;