import Link from "next/link";
import api from "./api";



export default async function Home() {
    const {results} = await api.item.search('ofertas')
    return (
      <div>
         {results.length > 0 && 
         <div>
            <section>
               <article  className="flex p-5 columns-auto gap-3 w-100 overflow-auto">
                  {results.map((item : any) => (
                  <Link href={`/items/${item.id}`} key={item.id}>
                     <div className="card card-products">
                        <div className="grid justify-center p-5">
                          <img src={item.thumbnail} alt={item.title} className="product-img"/>
                        </div>
                        <hr/>
                        <div className="grid justify-center p-5">
                            <p className="text-lg">{item.title}</p> 
                            <p className="font-semibold py-2 text-lg">{Number(item.price).toLocaleString("es-AR",
                              {style: "currency",
                                 currency: item.currency_id
                                 })}
                                 </p>  
                            <span className="text-sm">{item.seller_address.city.name}</span>
                        </div>
                     </div>
                     <hr/>
                  </Link>
                  ))}
               </article>
            </section>
         </div>
         }
      </div>
   )
}
  