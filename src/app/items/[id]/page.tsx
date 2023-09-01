import api from "@/app/api";

export default async function ItemPage({params : {id}}: {params: {id: string}})  {
    const item =  await api.item.fetch(id);


    return (
      <div className="bg-stone-50 rounded-sm">
         <section  className="p-5">
            <article>
               <div className="block md:flex">
                  <img src={item.thumbnail} alt={item?.title} className="view-product"/>
                  <div className="ps-3">
                     <p className="text-2xl">{item.title}</p> 
                     <p className="font-semibold py-2 text-2xl">{Number(item.price).toLocaleString("es-AR",
                        {style: "currency",
                        currency: item.currency_id
                        })}
                     </p>  
                     <p className="text-sm overflow-auto product-description">{item.description.plain_text}</p> 
                  </div>
               </div>
            </article>
         </section>
      </div>
    )
  }
  