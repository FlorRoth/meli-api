import Link from "next/link";
import api from "../api";
import SubCategories from "../subcategories";

export default async function CategoriesPage() {
   const results = await api.categories.all();
   return (
     <div>
      <h1 className="text-2xl text-gray-500 ">Categorías</h1>
       {results && (
         <div className="bg-stone-50 rounded-md mt-5"> 
           <section>
             <article>
               {results.map((category: { id: string; name: string }) => (
                 <div>
                   <SubCategories params={{
                     id: category.id }} />
                     <hr/>
                 </div>
               ))}
             </article>
           </section>
         </div>
       )}
     </div>
   );
 }
 