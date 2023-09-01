import Link from "next/link";
import api from "../api";


export default async function ItemsPage({searchParams}: {searchParams: {search: string}}) {
    const {results} = await api.item.search(searchParams.search)
    return (
      <div>
         {results.length > 0 && 
         <div className="bg-stone-50 rounded-sm">
            <section className="p-5">
               <article>
                  {results.map((item : any) => (
                  <Link href={`/items/${item.id}`} key={item.id}>
                     <div className="flex p-5">
                           <img src={item.thumbnail} alt={item.title} className="product-img"/>
                           <div className="ps-3">
                              <p className="text-md md:text-2xl">{item.title}</p> 
                              <p className="font-semibold py-2 text-md md:text-lg">{Number(item.price).toLocaleString("es-AR",
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
  