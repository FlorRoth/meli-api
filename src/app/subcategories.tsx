import api from "@/app/api";
import Link from "next/link";



export default async function SubCategories({params : {id}}: {params: {id: string}}) {
    const results = await api.categories.category(id)
    const name = results.name;
    const subcategories = results.children_categories;
    return (
      <div>
        {subcategories && (
         <div className="p-6"> 
           <div className="p-3">
            <h2 className="font-bold">
              <a href={`/categories/${id}`}>
                {name}</a>
            </h2>
           </div>
           <section className="px-3 pb-3">
             <article className="mw-100 grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4   gap-3">
               {subcategories.map((subcategory:  any) => (
                   <div>
                     <div>
                       <a className="text-sm  text-gray-500"  href={`/categories/${subcategory.id}`}>{subcategory.name}</a>
                     </div>
                   </div>
               ))}
             </article>
           </section>
         </div>
       )}
        
      </div>
      )
  }
  