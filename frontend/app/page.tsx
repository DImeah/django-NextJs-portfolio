async function getProjects() {
  const res = await fetch('http://localhost:8000/api/projects/', {
    next: { revalidate: 60 }, // ISR — revalidate every 60s
  });
  return res.json();
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <h1>My Portfolio</h1>
      {projects.map((p: any) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </main>
  );
}