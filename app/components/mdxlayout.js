import { Children } from "react";
import PageLayout from "./pagelayout";

export default function MDXLayout({title, children}){
    return(
        <PageLayout title={title}>
            <div className="text-2xl prose prose-h1:text-4xl prose-h1:text-green-500 prose-h2:text-3xl prose-strong:text-red-500 prose-strong:font-bold prose-em:text-blue-500  prose-a:text-blue-400 prose-a:underline">
                {children}
            </div>
        </PageLayout>
    )
}