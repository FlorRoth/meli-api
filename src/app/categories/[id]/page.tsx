import api from "@/app/api";
import Link from "next/link";



export default async function ItemsCategoryPage({params : {id}}: {params: {id: string}}) {
    const {results} = await api.categories.search(id);
    const category = await api.categories.category(id);
    return (
      <div>
         <h1 className="text-2xl text-gray-500 ">{category.name}</h1>
         {results.length > 0 && 
         <div className="bg-stone-50 rounded-md mt-5">
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
                                 currency: item.currency_id ? item.currency_id : 'ARS'
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
  