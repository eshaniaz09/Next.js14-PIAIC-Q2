const blogData = [
    {
    id: 1,
    slug: "top-software-house",
    description: "Top software houses" 
},
    {
        id: 2,
        slug: "top-software-Company",
        description: "Software companies"
  }
]

let myData = ['esha', 'fatima']
myData = [...myData, 'masfa']
console.log(myData)

export default function Blog({ params }: { params: { slug: string } }) {
    const blog = blogData.filter((item)=> item.slug == params.slug)
    return (
        <div>{blog[0]?.description}</div>
    )
}