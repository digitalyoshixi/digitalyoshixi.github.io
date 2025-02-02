import { Children } from "react";
import PageLayout from "./pagelayout";

export default function ProseLayout({title, author, publishDate, children}){
    return(
        <PageLayout title={title}>
            <div className="text-2xl prose max-w-none prose-h1:text-4xl prose-h1:text-green-500 prose-h2:text-3xl prose-strong:text-red-500 prose-strong:font-bold prose-em:text-blue-500 prose-a:text-blue-400 prose-a:underline w-full prose-p:my-5">
                {children}
            </div>
        </PageLayout>
    )
}