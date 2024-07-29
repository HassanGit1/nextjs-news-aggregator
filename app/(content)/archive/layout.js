export default function ArchiveLayout ({archive, latest}) {
    return <div>
        <h1 className="text-yellow-400 text-5xl 
       tracking-wider text-center font-black mb-8 ">News Archive</h1>
        <section id="archive-filter">{archive}</section>
        <section id="archive-latest">{latest}</section>
    </div>
}