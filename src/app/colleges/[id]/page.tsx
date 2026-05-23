export default function CollegePage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          College Details Page
        </h1>
  
        <div className="mt-4">
          <a
            href="#"
            className="text-blue-600 hover:underline"
          >
            Visit Official Website
          </a>
        </div>
  
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
  
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    );
  }