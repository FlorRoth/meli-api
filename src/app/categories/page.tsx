import Link from "next/link";
import api from "../api";

export default async function CategoriesPage({ searchParams }: { searchParams: { search: string } }) {
   const results = await api.categories.all();
   return (
     <div>
       {results && (
         <div className=""> 
           <section>
             <article className="mw-100 grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4   gap-4">
               {results.map((category: { id: string; name: string }) => (
                 <Link href={`/categories/${category.id}`} key={category.id}>
                   <div className="card card-category items-center text-center p-5 flex justify-center">
                     <div>
                       <p className="text-md">{category.name}</p>
                     </div>
                   </div>
                 </Link>

               ))}
             </article>
           </section>
         </div>
       )}
     </div>
   );
 }
 