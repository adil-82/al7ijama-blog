import Link from 'next/link';

export default function Post({ post }) {
    return (
        <div className="p-4 rounded shadow-2xl bg-red-100 mb-5">
            <img src={post.frontmatter.cover_image} alt="" 
                className="w-full h-2/6 rounded-lg"/>
            <div className="text-gray-500 text-xs mb-3 px-3 py-1"> 
                 {post.frontmatter.date} </div>
            <h3 className="mb-3 text-xl font-bold"> 
                {post.frontmatter.title} </h3>
            <p className="my-4 text-base leading-relaxed"> 
                {post.frontmatter.excerpt} </p>
            <Link href={`/blog/${post.slug}`}>
                <a className="inline-block bg-red-400 text-white border-none rounded-md cursor-pointer text-xs py-2 px-4 hover:bg-red-500 no-underline">
                    اقرأ المزيد !    
                </a>
            </Link>
        </div>
    )
}
