

export default function Resources() {
  const resources = [
    { id: 1, title: "Resource 1", link: "#" },
    { id: 2, title: "Resource 2", link: "#" },
    { id: 3, title: "Resource 3", link: "#" },
  ];

  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Resources</h2>
      <ul class="space-y-2">
        {resources.map((resource) => (
          <li key={resource.id}>
            <a href={resource.link} class="text-blue-500 hover:underline">{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
